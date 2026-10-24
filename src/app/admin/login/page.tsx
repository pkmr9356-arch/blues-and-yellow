'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';

export function getSafeRedirectPath(nextParam: string | null): string {
  if (!nextParam) return '/admin';
  // Must start with /admin or /admin/ and not contain protocol-relative slashes or backslashes
  if (/^\/admin(\/|$)/.test(nextParam) && !nextParam.startsWith('//') && !nextParam.includes('\\')) {
    return nextParam;
  }
  return '/admin';
}

function AdminLoginForm() {
  const searchParams = useSearchParams();
  const nextParam = searchParams.get('next');
  const errorParam = searchParams.get('error');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState(
    errorParam === 'unauthorized' ? 'Access denied: Administrator privileges required.' : ''
  );

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Invalid email or password.');
      return;
    }

    const target = getSafeRedirectPath(nextParam);
    window.location.href = target;
  }

  return (
    <div className="w-full max-w-md p-8 bg-slate-50 rounded-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-navy">Admin Portal</h1>
        <p className="text-sm text-slate-600 mt-2">
          Sign in with authorized administrator credentials.
        </p>
      </div>

      {errorMessage && (
        <div role="alert" aria-live="assertive" className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-xl">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@bluesandyellow.agency"
            className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-colors text-navy"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-navy mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-colors text-navy"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-base hover:bg-navy-light disabled:opacity-50 transition-colors cursor-pointer"
        >
          {status === 'loading' ? 'Authenticating...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-6 py-20">
      <Suspense fallback={<div className="text-center text-slate-600">Loading...</div>}>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
