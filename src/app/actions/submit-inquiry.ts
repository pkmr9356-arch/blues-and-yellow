'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase-server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const inquirySchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email must not exceed 255 characters'),
  message: z
    .string({ required_error: 'Project summary is required' })
    .trim()
    .min(10, 'Project summary must be at least 10 characters')
    .max(5000, 'Project summary must not exceed 5000 characters'),
  bot_field: z.string().optional(),
});

interface SubmitLeadAtomicResponse {
  allowed: boolean;
  code?: string;
  error?: string;
  lead_id?: string;
  created_at?: string;
}

export async function submitInquiry(formData: FormData): Promise<{ success: boolean; error?: string }> {
  // 1. Bot Honeypot Check (silent discard if filled)
  const rawBotField = formData.get('bot_field');
  if (typeof rawBotField === 'string' && rawBotField.trim().length > 0) {
    return { success: true };
  }

  // 2. Server-side Zod Validation
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    bot_field: typeof rawBotField === 'string' ? rawBotField : undefined,
  };

  const parsed = inquirySchema.safeParse(rawData);
  if (!parsed.success) {
    const firstErrorMessage = parsed.error.issues[0]?.message || 'Invalid form submission.';
    return { success: false, error: firstErrorMessage };
  }

  const { name, email, message } = parsed.data;
  const normalizedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedMessage = message.trim();

  // 3. Atomic Rate Limiting & Lead Persistence via PostgreSQL Function
  const supabase = createClient();
  const { data: rpcData, error: rpcError } = await supabase.rpc('submit_lead_atomic', {
    p_name: normalizedName,
    p_email: normalizedEmail,
    p_project_summary: normalizedMessage,
  });

  if (rpcError) {
    console.error('submit_lead_atomic RPC error:', rpcError.message);
    return {
      success: false,
      error: 'Unable to process inquiry at this time. Please try again later.',
    };
  }

  const leadResult = rpcData as SubmitLeadAtomicResponse;
  if (!leadResult || leadResult.allowed === false) {
    return {
      success: false,
      error: leadResult?.error || 'Submission limit exceeded. Please wait a moment and try again.',
    };
  }

  // 4. Resilient Email Dispatch via Resend
  try {
    const { error: resendError } = await resend.emails.send({
      from: 'inquiries@bluesandyellow.agency',
      to: 'hello@bluesandyellow.agency',
      subject: `New Project Inquiry: ${normalizedName}`,
      text: `New lead: ${normalizedName} (${normalizedEmail})\nMessage: ${normalizedMessage}`,
    });

    if (resendError) {
      const errorMessage = resendError.message || 'Resend API rejected delivery';
      console.error('Failed to send Resend email notification (API error):', errorMessage);

      if (leadResult.lead_id) {
        try {
          const { error: updateError } = await supabase
            .from('leads')
            .update({
              internal_notes: `Resend notification failed: ${errorMessage}`,
            })
            .eq('id', leadResult.lead_id);

          if (updateError) {
            console.error('Failed to update internal_notes with Resend API error:', updateError.message);
          }
        } catch (dbError) {
          console.error('Exception updating internal_notes with Resend API error:', dbError);
        }
      }
    }
  } catch (emailException: unknown) {
    const errorMessage = emailException instanceof Error ? emailException.message : 'Unknown network error';
    console.error('Failed to dispatch Resend email notification (exception):', errorMessage);

    if (leadResult.lead_id) {
      try {
        // Record failure in internal_notes without losing the committed lead
        const { error: updateError } = await supabase
          .from('leads')
          .update({
            internal_notes: `Resend notification exception: ${errorMessage}`,
          })
          .eq('id', leadResult.lead_id);

        if (updateError) {
          console.error('Failed to update internal_notes with Resend exception:', updateError.message);
        }
      } catch (dbError) {
        console.error('Exception updating internal_notes with Resend exception:', dbError);
      }
    }
  }

  return { success: true };
}
