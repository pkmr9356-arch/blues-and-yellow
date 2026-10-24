'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router Boundary Caught Error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center container mx-auto px-6 py-20">
      <div className="max-w-md w-full p-8 bg-slate-50 rounded-2xl text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xl">
          !
        </div>
        <h2 className="text-2xl font-bold font-serif text-navy mb-2">Something went wrong</h2>
        <p className="text-sm text-slate-600 mb-6">
          An unexpected error occurred while loading this page.
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-light transition-colors cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
