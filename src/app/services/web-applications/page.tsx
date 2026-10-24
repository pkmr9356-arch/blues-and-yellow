import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Web Applications | Blues&Yellow',
  description: 'Scalable, modern web applications, client portals, and internal tools engineered by Blues&Yellow.',
};

export default function WebApplicationsPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition mb-8"
        >
          <span aria-hidden="true">&larr;</span> Back to all services
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-navy leading-[1.1] mb-6 tracking-[-0.02em]">
          Custom Web Applications
        </h1>
        <p className="text-xl sm:text-2xl text-slate-700 mb-16 leading-relaxed">
          We engineer scalable, secure, and user-focused web applications, administrative portals, and client tools designed to handle complex business workflows reliably.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">What We Deliver</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Fullstack React and Next.js App Router architecture with Server Components</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Real-time database integration, state synchronization, and live telemetry</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Role-based access control (RBAC), multi-tenant isolation, and audit logs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Third-party API integrations, webhook pipelines, and background jobs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Interactive data tables, charting visualizations, and optimistic UI updates</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">Why Blues&amp;Yellow</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Architecture built to scale seamlessly from early MVP to high enterprise load</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Type-safe contracts with TypeScript and runtime Zod validation boundaries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Obsessive focus on sub-second load times and intuitive user interfaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Resilient error boundaries and fail-closed security protocols</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-2">
              Building a mission-critical web application?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Discuss your feature specifications, data architecture, and security needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/start-a-project"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <span>Request a Proposal</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/work"
              className="bg-white text-navy px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors text-center inline-flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
