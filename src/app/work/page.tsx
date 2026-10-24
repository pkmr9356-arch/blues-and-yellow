import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Selected Work & Case Studies | Blues&Yellow',
  description: 'Explore featured web applications, custom digital platforms, and mobile apps engineered by Blues&Yellow.',
};

export default function WorkPage() {
  const projects = [
    {
      title: 'Enterprise Cloud Platform',
      category: 'Web Application',
      slug: 'project-alpha',
      tag: 'Next.js 16 • Supabase • WebSockets',
      metric: '64% data latency reduction • 99.9% uptime',
      image: '/images/modern-architecture-in-toronto.jpg',
      alt: 'Clean geometric lines of modern architectural studio facade in Toronto',
      desc: 'A high-throughput enterprise SaaS telemetry portal built for sub-second data streaming, streaming Suspense, and multi-tenant access control.',
    },
    {
      title: 'High-Conversion Brand Platform',
      category: 'Website Development',
      slug: 'project-beta',
      tag: 'Headless Next.js • Tailwind CSS • SEO',
      metric: '+38% lead conversion • 100/100 Core Web Vitals',
      image: '/images/domusstudio-architecture-office.jpg',
      alt: 'Contemporary architectural studio interior overlooking nature in San Diego',
      desc: 'An editorial marketing platform engineered for a fast-growing technology company, combining custom design tokens with sub-second page loads.',
    },
    {
      title: 'Field Service Companion',
      category: 'Mobile App',
      slug: 'project-gamma',
      tag: 'React Native • Offline-First • Biometrics',
      metric: '500+ active field technicians • Zero data loss',
      image: '/images/view-from-photographer-s-studio.jpg',
      alt: 'Classical architectural streetscape and studio perspective by Gustave Le Gray',
      desc: 'An offline-resilient field technician application featuring local encrypted storage, background delta replication, and biometric authentication.',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Editorial Showcase Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-[1.1] tracking-[-0.02em] text-navy mb-8">
            Selected work engineered to move businesses forward.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal">
            Explore featured web applications, modern digital platforms, and mobile apps engineered with precision code, purposeful design, and verifiable business impact.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group bg-slate-50 rounded-3xl overflow-hidden hover:bg-slate-100/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-navy/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-xs font-semibold text-blue-600 mb-2 block">
                    {project.tag}
                  </span>

                  <h2 className="text-2xl font-bold font-serif text-navy group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-xl px-3 py-2 inline-block">
                    {project.metric}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between text-sm font-semibold text-blue-600 border-t border-slate-200/60 mt-4">
                <span>View case study</span>
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy mb-3">
              Have a similar digital challenge?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We engineer custom digital solutions aligned directly with your commercial goals.
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
              href="/services"
              className="bg-white text-navy px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-100 transition-colors text-center inline-flex items-center justify-center"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
