import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Design & Development | Blues&Yellow',
  description: 'Custom, high-conversion websites designed with precision and engineered for speed by Blues&Yellow.',
};

export default function WebsiteDevelopmentPage() {
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
          Website Design &amp; Development
        </h1>
        <p className="text-xl sm:text-2xl text-slate-700 mb-16 leading-relaxed">
          We design and engineer bespoke, high-performance websites that elevate commercial positioning, convert visitors into customers, and load in under one second.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">What We Deliver</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Responsive, mobile-first layouts engineered on Next.js 16 and Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Optimized local typography, sub-second LCP, and zero layout shift (CLS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Conversion-focused information architecture and clear call-to-action funnels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Accessible, semantic HTML adhering to strict WCAG 2.1 AA contrast standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Structured JSON-LD schema, dynamic OpenGraph cards, and search crawlability</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">Why Blues&amp;Yellow</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Direct collaboration with senior engineers without junior agency intermediaries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Editorial visual design married to clean, maintainable, self-hosted codebases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Transparent fixed-scope milestones with zero hidden technical surprises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Post-launch monitoring, warranty support, and performance guarantees</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-2">
              Ready to engineer your new website?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Share your project vision, target timeline, and requirements.
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
