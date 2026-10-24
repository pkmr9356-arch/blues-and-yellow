'use client';

import Link from 'next/link';
import Image from 'next/image';
import HorizontalScroll from '@/components/HorizontalScroll';
import ServicesGrid from '@/components/ServicesGrid';

export default function Page() {
  const engineeringPillars = [
    {
      title: 'Precision Engineering',
      desc: 'Zero-bloat Next.js 16 and TypeScript architectures. Every endpoint and component serves a defined business outcome with strict resilience boundaries.',
    },
    {
      title: 'Purposeful Design',
      desc: 'Form follows function. We eliminate cognitive friction to create intuitive user journeys that communicate instantly and convert qualified visitors.',
    },
    {
      title: 'Measurable Velocity',
      desc: 'Sub-second page speeds, structured search crawlability, and streamlined intake funnels that drive sustainable commercial growth.',
    },
  ];

  const featuredWork = [
    {
      title: 'Enterprise Cloud Telemetry Platform',
      category: 'Web Application Engineering',
      slug: 'project-alpha',
      image: '/images/modern-architecture-in-toronto.jpg',
      alt: 'Clean geometric lines of modern architectural studio facade in Toronto',
      desc: 'A high-throughput enterprise SaaS telemetry portal built for sub-second data streaming and multi-tenant access.',
      stat: '64% data latency reduction',
    },
    {
      title: 'Brand Marketing Platform',
      category: 'Website Development',
      slug: 'project-beta',
      image: '/images/domusstudio-architecture-office.jpg',
      alt: 'Contemporary architectural studio interior overlooking nature in San Diego',
      desc: 'An editorial marketing platform engineered for a technology scale-up that lifted inbound lead conversion by 38%.',
      stat: '38% conversion lift',
    },
    {
      title: 'Field Service Mobile Companion',
      category: 'Mobile App',
      slug: 'project-gamma',
      image: '/images/view-from-photographer-s-studio.jpg',
      alt: 'Classical architectural streetscape and studio perspective by Gustave Le Gray',
      desc: 'An offline-resilient field technician application featuring biometric security and background data replication.',
      stat: '500+ daily field users',
    },
  ];

  return (
    <>
      {/* Editorial Hero Section — Sentence-as-Layout with Inline Media Aperture */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Central Editorial Sentence with Inline Media Aperture */}
          <h1 className="text-[clamp(1.85rem,5.2vw,5.5rem)] font-bold font-serif leading-[1.08] tracking-[-0.03em] text-navy mb-10 max-w-5xl">
            <span>Digital </span>
            <span className="inline-block relative align-middle mx-1 sm:mx-2 md:mx-3 h-[0.82em] w-[2.2em] sm:w-[2.5em] md:w-[2.7em] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 flex-shrink-0 align-[-0.06em]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/tbilisi-life-georgia-travel-canon-camera-eosm27-poster.jpg"
                className="w-full h-full object-cover"
                aria-label="Blues&Yellow digital studio atmosphere and architectural process"
              >
                <source src="/images/tbilisi-life-georgia-travel-canon-camera-eosm27.webm" type="video/webm" />
              </video>
            </span>
            <span>experiences that move businesses</span>
          </h1>

          {/* Asymmetric 12-Column Supporting Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 7 Columns: Supporting Proposition & Primary CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-xl mb-8">
                Blues&amp;Yellow is an independent digital agency and web technology studio. We engineer custom web applications, modern websites, enterprise WordPress platforms, and mobile apps built to scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/start-a-project"
                  className="bg-blue-600 text-white px-8 py-4 sm:px-9 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-navy transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <span>Start a Project</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/work"
                  className="bg-slate-100 text-navy px-8 py-4 sm:px-9 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-slate-200 transition-colors text-center inline-flex items-center justify-center"
                >
                  Explore Selected Work
                </Link>
              </div>
            </div>

            {/* Right 5 Columns: Architectural Studio Manifest Card (Clean filled surface, no hairlines/shadows) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between pb-2">
                <span className="text-sm font-semibold text-slate-700">Engineering standards</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
                  <span>Production baseline</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-navy block text-base">Modern Frameworks</span>
                  <span className="text-slate-600">Next.js 16 &amp; TypeScript with server-first architecture</span>
                </div>
                <div>
                  <span className="font-semibold text-navy block text-base">Performance First</span>
                  <span className="text-slate-600">Sub-second LCP, zero layout shifts, optimized local fonts</span>
                </div>
                <div>
                  <span className="font-semibold text-navy block text-base">Fullstack Security</span>
                  <span className="text-slate-600">Fail-closed admin proxy, Supabase Auth session isolation</span>
                </div>
                <div>
                  <span className="font-semibold text-navy block text-base">Universal Accessibility</span>
                  <span className="text-slate-600">WCAG 2.1 AA contrast compliance &amp; reduced-motion fallbacks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GSAP Horizontal Scroll Section - Protected Design Asset immediately following Hero */}
      <HorizontalScroll />

      {/* Engineering Philosophy & Value Proposition */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-navy">
              Function over decoration
            </h2>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed max-w-xl">
              We build digital software that succeeds through clarity. Every interaction is designed with intention; every architecture is engineered to last.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {engineeringPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col"
              >
                <h3 className="text-2xl font-bold font-serif text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed max-w-prose">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section (Varied Composition) */}
      <ServicesGrid />

      {/* Featured Work Showcase (Asymmetrical Composition) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-navy">
                Featured Case Studies
              </h2>
              <p className="text-slate-600 text-lg mt-4 leading-relaxed max-w-xl">
                A selection of high-throughput web applications, marketing platforms, and mobile products engineered for commercial scale.
              </p>
            </div>
            <Link
              href="/work"
              className="text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 self-start md:self-end"
            >
              See all case studies <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Lead Panoramic Case Study */}
          <div className="mb-12">
            <Link
              href={`/work/${featuredWork[0].slug}`}
              className="group bg-white rounded-3xl overflow-hidden hover:bg-slate-100/60 transition-colors grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative min-h-[320px] bg-slate-200">
                <Image
                  src={featuredWork[0].image}
                  alt={featuredWork[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-navy group-hover:text-blue-600 transition-colors mb-3">
                    {featuredWork[0].title}
                  </h3>
                  <div className="flex items-center gap-3 mb-4 text-sm font-semibold">
                    <span className="text-blue-600">
                      {featuredWork[0].category}
                    </span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-500">
                      {featuredWork[0].stat}
                    </span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-md">
                    {featuredWork[0].desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-base font-semibold text-blue-600">
                  <span>Explore full case study</span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Case Studies Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredWork.slice(1).map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:bg-slate-100/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-serif text-navy group-hover:text-blue-600 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm font-semibold">
                      <span className="text-blue-600">
                        {project.category}
                      </span>
                      <span className="text-slate-400">&bull;</span>
                      <span className="text-slate-500">
                        {project.stat}
                      </span>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed max-w-sm">
                      {project.desc}
                    </p>
                  </div>
                </div>
                <div className="p-8 pt-0 flex items-center gap-1.5 text-base font-semibold text-blue-600">
                  <span>View case study</span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Conversion Intake Section */}
      <section className="py-24 bg-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto p-10 md:p-16 bg-navy text-white rounded-3xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 id="cta-heading" className="text-3xl sm:text-5xl font-bold font-serif text-white mb-6 leading-tight">
                Tell us what you&apos;re building
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
                Share your goals, timeline, and requirements. We&apos;ll help you scope and engineer the digital platform that moves your business forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/start-a-project"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-colors text-center inline-block"
                >
                  Start a Project Inquiry
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors text-center inline-block"
                >
                  General Contact
                </Link>
              </div>

              <div className="pt-6 text-sm text-slate-400">
                <span>Prefer direct email? </span>
                <Link
                  href="mailto:hello@bluesandyellow.digital"
                  className="text-amber-400 hover:underline font-medium"
                >
                  hello@bluesandyellow.digital
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
