import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Maintenance & Optimization | Blues&Yellow',
  description: 'Continuous uptime monitoring, dependency security patches, and proactive speed tuning by Blues&Yellow.',
};

export default function MaintenancePage() {
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
          Maintenance &amp; Optimization
        </h1>
        <p className="text-xl sm:text-2xl text-slate-700 mb-16 leading-relaxed">
          We protect your software investment through continuous 24/7 uptime monitoring, proactive security updates, database maintenance, and ongoing speed optimization retainers.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">What We Deliver</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Real-time uptime, response latency, and SSL certificate monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Proactive framework dependency security patches and regression testing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Automated off-site database backups with verified point-in-time recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Monthly Core Web Vitals performance benchmarks and query optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Dedicated SLA response windows for critical incident resolution</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">Why Blues&amp;Yellow</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Dedicated senior engineering team familiar with your codebase</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Proactive problem detection before your customers ever notice friction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Detailed monthly health reports tracking performance, uptime, and security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Flexible retainer tiers that grow with your application traffic</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-2">
              Looking for reliable ongoing engineering support?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our monthly maintenance retainers and dedicated service level agreements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/start-a-project"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <span>Discuss a Retainer</span>
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
