import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Strategy & Consulting | Blues&Yellow',
  description: 'Data-informed digital roadmaps, architecture audits, and growth strategies from Blues&Yellow.',
};

export default function DigitalStrategyPage() {
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
          Digital Strategy &amp; Consulting
        </h1>
        <p className="text-xl sm:text-2xl text-slate-700 mb-16 leading-relaxed">
          We align modern technical architecture with commercial objectives, eliminating technical debt and maximizing the return on your software investments.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">What We Deliver</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Technology stack evaluations, migration roadmaps, and architectural blueprints</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Customer journey mapping, conversion funnel analysis, and UX friction audits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>MVP scoping, feature prioritization, and phased milestone release planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Data privacy, GDPR compliance, and application security threat assessments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Executive fractional CTO advisory and internal engineering team mentoring</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">Why Blues&amp;Yellow</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Pragmatic guidance grounded in real production engineering, not abstract slides</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Unbiased recommendations prioritizing long-term business value over hype</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Deep expertise spanning startup velocity to enterprise security requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Clear, actionable documentation your developers can execute immediately</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-2">
              Facing critical architectural decisions?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Book a strategic consultation to establish clarity on your technical roadmap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/start-a-project"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <span>Schedule Strategy Call</span>
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
