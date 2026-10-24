import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Blues&Yellow Digital Studio',
  description: 'Explore our full spectrum of digital capabilities: custom web applications, bespoke websites, mobile apps, headless WordPress, SEO, and technical strategy.',
};

export default function ServicesPage() {
  const services = [
    {
      name: 'Website Design & Development',
      slug: 'website-development',
      tag: 'Next.js • Tailwind CSS • TypeScript',
      desc: 'High-conversion, bespoke agency and corporate websites engineered with modern frameworks, sub-second LCP, and strict accessibility standards.',
    },
    {
      name: 'Custom Web Applications',
      slug: 'web-applications',
      tag: 'Fullstack React • Supabase • RBAC',
      desc: 'Scalable cloud applications, internal administrative portals, and client dashboards with real-time data synchronization and resilient authorization.',
    },
    {
      name: 'Mobile App Development',
      slug: 'mobile-app-development',
      tag: 'React Native • iOS & Android • Offline Sync',
      desc: 'Cross-platform mobile applications engineered for fluid 60fps performance, biometric security, and offline data persistence in the field.',
    },
    {
      name: 'WordPress & Headless CMS',
      slug: 'wordpress-development',
      tag: 'Custom Gutenberg • Next.js Headless • PHP',
      desc: 'Enterprise WordPress themes, customized block architectures, and headless decoupled setups that empower marketing teams without compromising code health.',
    },
    {
      name: 'Search Engine Optimization',
      slug: 'seo',
      tag: 'Technical Audits • Schema.org • CWV',
      desc: 'Engineering-driven technical SEO audits, structured JSON-LD semantic data, crawl budget optimization, and Core Web Vitals remediation.',
    },
    {
      name: 'Maintenance & Optimization',
      slug: 'maintenance',
      tag: 'SLA Support • Security Patches • 24/7 Monitoring',
      desc: 'Continuous uptime monitoring, proactive security updates, automated backups, and monthly performance tuning retainers for mission-critical software.',
    },
    {
      name: 'Digital Strategy & Consulting',
      slug: 'digital-strategy',
      tag: 'Stack Evaluation • MVP Scoping • Advisory',
      desc: 'Data-informed technology roadmaps, legacy software modernization planning, and executive technical consulting for startups and scale-ups.',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h1 className="text-[clamp(2.25rem,5.5vw,5rem)] font-bold font-serif leading-[1.08] tracking-[-0.03em] text-navy mb-6">
            Fullstack digital capabilities.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal">
            From modern web applications and conversion-focused websites to technical SEO and mobile apps, we balance design discipline with production-grade engineering.
          </p>
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group p-8 sm:p-10 bg-slate-50 rounded-3xl hover:bg-slate-100/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold font-serif text-navy group-hover:text-blue-600 transition-colors mb-4 leading-snug">
                  {service.name}
                </h2>

                <p className="text-slate-600 leading-relaxed text-base mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-sm font-semibold text-blue-600">
                <span className="text-slate-500 font-medium">
                  {service.tag.split('•')[0].trim()}
                </span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy mb-3">
              Not sure which solution fits your requirements?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Schedule a technical discovery session. We will review your architecture and suggest a clear path forward.
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
