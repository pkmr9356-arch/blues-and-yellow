'use client';

import { useState } from 'react';
import { submitInquiry } from '@/app/actions/submit-inquiry';

interface ProjectInquiryFormProps {
  buttonText?: string;
}

export default function ProjectInquiryForm({ buttonText = 'Start a Project' }: ProjectInquiryFormProps = {}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('submitting');
    const result = await submitInquiry(formData);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'An unexpected error occurred. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl text-center"
      >
        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
        <p className="text-emerald-800">Your inquiry has been received. Our team will review your project and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6" noValidate={false}>
      {/* Honeypot field for bot filtering - invisible to human visitors */}
      <div className="opacity-0 absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <label htmlFor="bot_field">Leave this field blank</label>
        <input
          id="bot_field"
          name="bot_field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === 'error' && (
        <div
          id="form-error"
          role="alert"
          aria-live="assertive"
          className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm font-medium flex items-center gap-3"
        >
          <svg className="w-5 h-5 flex-shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-navy">Full Name <span className="text-red-500">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? 'form-error' : undefined}
            className="w-full p-4 bg-white border border-border text-navy rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition placeholder:text-slate-400"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-navy">Email Address <span className="text-red-500">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? 'form-error' : undefined}
            className="w-full p-4 bg-white border border-border text-navy rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition placeholder:text-slate-400"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-navy">Project Description <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'form-error' : undefined}
          rows={5}
          className="w-full p-4 bg-white border border-border text-navy rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition resize-none placeholder:text-slate-400"
          placeholder="Tell us about your project goals, timeline, and requirements..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-navy-light disabled:opacity-50 transition-colors cursor-pointer"
      >
        {status === 'submitting' ? 'Sending Inquiry...' : buttonText}
      </button>
    </form>
  );
}
