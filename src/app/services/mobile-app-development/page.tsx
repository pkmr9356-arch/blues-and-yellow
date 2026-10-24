import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mobile App Development | Blues&Yellow',
  description: 'Native and cross-platform mobile apps for iOS and Android engineered with React Native by Blues&Yellow.',
};

export default function MobileAppDevelopmentPage() {
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
          Mobile App Development
        </h1>
        <p className="text-xl sm:text-2xl text-slate-700 mb-16 leading-relaxed">
          We engineer high-performance mobile applications for iOS and Android, combining native fluid interactions with robust offline-first synchronization.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">What We Deliver</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Cross-platform iOS and Android architectures built on React Native</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Offline-first local encrypted data persistence and background sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Native device hardware integrations: camera, GPS, biometric auth, and push</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Fluid 60fps micro-interactions, gesture navigation, and haptic feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
                <span>Apple App Store &amp; Google Play Store release management and compliance</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">Why Blues&amp;Yellow</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Unified codebase strategy reducing long-term mobile maintenance costs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Rigorous battery usage, memory footprint, and CPU optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Strict security practices safeguarding local and in-transit mobile data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold" aria-hidden="true">&bull;</span>
                <span>Direct end-to-end testing across physical devices and emulators</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-2">
              Have a mobile app vision to launch?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore feasibility, target device constraints, and release timelines with our team.
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
