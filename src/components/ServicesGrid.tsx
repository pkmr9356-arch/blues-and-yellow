import Link from 'next/link';

interface ServiceItem {
  name: string;
  slug: string;
  desc: string;
  tag: string;
}

export default function ServicesGrid() {
  const primaryService = {
    name: 'Website Design & Web Application Engineering',
    slug: 'website-development',
    desc: 'High-conversion, bespoke digital platforms and cloud applications built with Next.js 16, TypeScript, strict accessibility, and sub-second Core Web Vitals.',
    tag: 'Flagship Practice',
  };

  const secondaryServices: ServiceItem[] = [
    {
      name: 'Custom Web Applications',
      slug: 'web-applications',
      desc: 'Scalable cloud web applications, client portals, and administrative tools with resilient role-based access.',
      tag: 'Fullstack Engineering',
    },
    {
      name: 'WordPress & Headless CMS',
      slug: 'wordpress-development',
      desc: 'Enterprise WordPress platforms, custom Gutenberg systems, and headless Next.js architectures with clean editing workflows.',
      tag: 'CMS Platforms',
    },
    {
      name: 'Mobile App Development',
      slug: 'mobile-app-development',
      desc: 'Fluid iOS and Android companion applications engineered for native performance and offline data synchronization.',
      tag: 'iOS & Android',
    },
    {
      name: 'Technical SEO & Search Authority',
      slug: 'seo',
      desc: 'Technical architecture audits, semantic schema, and crawlability optimization driving organic qualified customer traffic.',
      tag: 'Search & Visibility',
    },
    {
      name: 'Digital Strategy & Technical Scoping',
      slug: 'digital-strategy',
      desc: 'Commercial technology roadmaps, MVP architecture scoping, and executive technical advisement for scaling companies.',
      tag: 'Advisory & Roadmaps',
    },
  ];

  return (
    <section className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 id="services-heading" className="text-3xl sm:text-5xl font-bold font-serif text-navy">
              Engineered for impact and built to scale
            </h2>
            <p className="text-slate-600 text-lg mt-4 leading-relaxed max-w-xl">
              We deliver fullstack web applications, headless WordPress platforms, and mobile apps designed to convert.
            </p>
          </div>
          <Link
            href="/services"
            className="text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 self-start md:self-end"
          >
            View all services <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Primary Feature Column */}
          <div className="lg:col-span-5 bg-navy text-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between min-h-[440px]">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-6 leading-tight">
                {primaryService.name}
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                {primaryService.desc}
              </p>
            </div>

            <div className="pt-6">
              <Link
                href={`/services/${primaryService.slug}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-500 transition-colors"
              >
                <span>Explore flagship capability</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Secondary Services Editorial Directory */}
          <div className="lg:col-span-7 space-y-6">
            {secondaryServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-6 rounded-2xl hover:bg-slate-50 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 transition-colors"
              >
                <div className="max-w-md">
                  <h4 className="text-xl font-bold font-serif text-navy group-hover:text-blue-600 transition-colors mb-2">
                    {service.name}
                  </h4>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <span className="text-base font-semibold text-blue-600 whitespace-nowrap shrink-0 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5 self-start sm:self-center">
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
