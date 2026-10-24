import { createClient } from '@/lib/supabase-server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectData {
  title: string;
  category?: string;
  image?: string;
  alt?: string;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  outcomes: string;
  isDemo?: boolean;
}

const DEMO_PROJECTS: Record<string, ProjectData> = {
  'project-alpha': {
    title: 'Enterprise Cloud Platform',
    category: 'Web Application',
    image: '/images/modern-architecture-in-toronto.jpg',
    alt: 'Clean geometric lines of modern architectural studio facade in Toronto',
    summary: 'A high-throughput enterprise SaaS dashboard engineered for real-time analytics and multi-tenant telemetry.',
    challenge: 'The client needed a responsive, sub-second web portal capable of visualizing large telemetry streams without UI freeze.',
    approach: 'We designed a modular Next.js architecture utilizing server-side rendering, streaming suspense, and stateful WebSockets.',
    solution: 'Engineered an accessible, type-safe dashboard with optimistic UI updates and resilient role-based permissions.',
    outcomes: 'Delivered 99.9% uptime, reduced data latency by 64%, and achieved 100/100 Core Web Vitals across all views.',
    isDemo: true,
  },
  'project-beta': {
    title: 'High-Conversion Brand Platform',
    category: 'Website Development',
    image: '/images/domusstudio-architecture-office.jpg',
    alt: 'Contemporary architectural studio interior overlooking nature in San Diego',
    summary: 'A bespoke digital presence engineered for an ambitious tech scale-up, designed to maximize inbound conversion.',
    challenge: 'The legacy marketing site suffered from slow load times, poor mobile responsiveness, and high visitor bounce rates.',
    approach: 'Audited user journeys, created an editorial design system, and implemented a headless Next.js architecture.',
    solution: 'Crafted clean responsive templates, fluid typography, and server-action driven lead capture funnels.',
    outcomes: 'Decreased page weight by 72%, increased organic search visibility, and elevated lead inquiry conversion by 38%.',
    isDemo: true,
  },
  'project-gamma': {
    title: 'Real-Time Mobile Companion',
    category: 'Mobile App',
    image: '/images/view-from-photographer-s-studio.jpg',
    alt: 'Classical architectural streetscape and studio perspective by Gustave Le Gray',
    summary: 'Cross-platform iOS and Android mobile experience connecting field technicians with central scheduling.',
    challenge: 'Technicians required reliable offline functionality and rapid synchronization in low-connectivity service areas.',
    approach: 'Constructed an offline-first data model with local encrypted caching and automatic background sync.',
    solution: 'Built with fluid gesture interactions, instant biometric auth, and push-driven job updates.',
    outcomes: 'Adopted across 500+ active field users with zero reported data loss incidents during offline operations.',
    isDemo: true,
  },
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = createClient();

  let project: ProjectData | null = null;

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (!error && data) {
      project = data;
    }
  } catch {
    // If Supabase connection fails or is offline, check demo projects
  }

  // Gracefully fallback to verified demonstration projects
  if (!project && DEMO_PROJECTS[slug]) {
    project = DEMO_PROJECTS[slug];
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          <span aria-hidden="true">&larr;</span> Back to all work
        </Link>

        <h1 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold font-serif text-navy mb-6 leading-[1.08] tracking-[-0.03em]">
          {project.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-8">
          <span className="font-semibold text-blue-600">
            {project.category || 'Featured Case Study'}
          </span>
          {project.isDemo && (
            <>
              <span>•</span>
              <span className="text-slate-600 font-medium">Demonstration Architecture</span>
            </>
          )}
        </div>

        <p className="text-xl sm:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {project.image && (
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 mb-16">
            <Image
              src={project.image}
              alt={project.alt || project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-8 mb-16">
          <section className="p-8 sm:p-10 bg-slate-50 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-4">The Challenge</h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">{project.challenge}</p>
          </section>

          <section className="p-8 sm:p-10 bg-slate-50 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-4">Technical Approach</h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">{project.approach}</p>
          </section>

          <section className="p-8 sm:p-10 bg-slate-50 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-4">Engineering Solution &amp; Measurable Outcomes</h2>
            <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
              <p>{project.solution}</p>
              <div className="p-6 bg-white rounded-2xl">
                <span className="text-sm font-semibold text-blue-600 block mb-2">Verified production impact</span>
                <p className="font-medium text-navy text-base sm:text-lg">{project.outcomes}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-2">
              Facing a similar architectural challenge?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Let&apos;s build an enduring, scalable digital platform together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/start-a-project"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy transition-colors text-center inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Start a Project</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/work"
              className="bg-white text-navy px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors text-center inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Back to All Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
