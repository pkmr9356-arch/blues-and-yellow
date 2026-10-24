import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Blues&Yellow Digital Studio',
  description: 'Learn about Blues&Yellow: an independent digital agency and technology studio engineering high-performance web applications, modern websites, and mobile platforms.',
};

export default function AboutPage() {
  const principles = [
    {
      title: 'Type-Safe Foundations',
      description: 'End-to-end TypeScript with runtime schema validation. We eliminate entire classes of production defects before code reaches staging.',
    },
    {
      title: 'Sub-Second Performance',
      description: 'Server-first Next.js architectures, streaming suspense, and zero layout shifts. Speed is a non-negotiable feature for user trust.',
    },
    {
      title: 'Fail-Closed Security',
      description: 'Cryptographic session validation, strict authorization boundaries, and defense-in-depth data access with Supabase Auth.',
    },
    {
      title: 'Universal Accessibility',
      description: 'WCAG 2.1 AA compliance, keyboard navigation, semantic markup, and first-class reduced-motion fallbacks for all users.',
    },
  ];

  const processSteps = [
    {
      title: 'Discovery & Architecture',
      description: 'We analyze your commercial objectives, customer workflows, and technical constraints to design a resilient, phased delivery roadmap.',
    },
    {
      title: 'Design & Engineering',
      description: 'We construct unified design systems, craft purposeful interfaces, and implement clean, maintainable fullstack codebases.',
    },
    {
      title: 'Launch & Observability',
      description: 'We deploy to production with automated verification, track live Core Web Vitals, and ensure smooth scaling under real visitor demand.',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Editorial Page Hero */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <h1 className="text-[clamp(1.85rem,5.2vw,4.5rem)] font-bold font-serif leading-[1.08] tracking-[-0.03em] text-navy mb-8">
            Engineering purposeful digital platforms.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal max-w-3xl">
            Blues&amp;Yellow is an independent digital agency and web technology studio. We engineer custom web applications, modern digital platforms, and mobile apps built to scale.
          </p>
        </div>

        {/* Narrative & Visual Perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-lg text-slate-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy mb-4">
              Direct collaboration, zero agency layers.
            </h2>
            <p>
              Traditional agencies often separate strategy, design, and engineering across disconnected teams and account managers. That friction produces bloated deliverables, missed nuances, and compromised user experiences.
            </p>
            <p>
              At Blues&amp;Yellow, our clients work directly with senior architects and creative developers. We pair rigorous software engineering disciplines with high-contrast, editorial visual craft. Every decision is measured against business outcomes, user clarity, and operational longevity.
            </p>
            <p>
              Whether engineering an enterprise client portal, migrating a complex legacy platform to Next.js, or launching an ambitious digital brand, we build software designed to stand the test of time.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
              <Image
                src="/images/frederick-osterling-architectural-studio-2015-06-17.jpg"
                alt="Architectural studio interior showcasing structured craft and enduring design"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="text-sm text-slate-600 mt-3 text-center sm:text-left">
              Studio perspective: architectural precision applied to digital systems.
            </p>
          </div>
        </div>

        {/* Core Engineering Principles */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">
              Engineering principles that guide every build.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-8 bg-slate-50 rounded-3xl border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-bold font-serif text-navy mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Step Process */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-navy">
              Transparent, milestone-driven process.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="p-8 bg-slate-50 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold font-serif text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy mb-3">
              Ready to engineer your next digital platform?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Let&apos;s discuss your technical goals, timeline, and architectural requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/start-a-project"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-navy transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/work"
              className="bg-white text-navy px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-100 transition-colors text-center inline-flex items-center justify-center"
            >
              Explore Selected Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
