import { User, createClient as createSupabaseClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    '';

  return createSupabaseClient(supabaseUrl, supabaseKey);
}

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if middleware is refreshing sessions.
        }
      },
    },
  });
}

export function isAuthorizedAdmin(
  user: User | { email?: string; app_metadata?: Record<string, any> } | null | undefined
): user is User & { email: string } {
  if (!user || !user.email) return false;

  // 1. Must possess verified admin role in app_metadata (tamper-proof from client)
  const role = (user.app_metadata as Record<string, any> | undefined)?.role;
  if (role !== 'admin') return false;

  // 2. Mandatory, strict allowlist from environment variable (fail-closed if missing or empty)
  const rawAllowlist = process.env.ADMIN_EMAILS;
  if (!rawAllowlist || rawAllowlist.trim() === '') {
    console.error('Security Warning: ADMIN_EMAILS environment variable is not configured. Failing closed.');
    return false;
  }

  const allowedEmails = rawAllowlist
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter((e) => e.length > 0);

  const userEmail = user.email.trim().toLowerCase();
  return allowedEmails.includes(userEmail);
}
