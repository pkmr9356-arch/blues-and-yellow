import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} | Blues&Yellow Insights`,
    description: `Perspectives and engineering guidance on ${formattedTitle} by Blues&Yellow digital agency.`,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition mb-8"
        >
          <span aria-hidden="true">&larr;</span> Back to all insights
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-navy mb-6 leading-[1.1] tracking-[-0.02em]">
          {formattedTitle}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 pb-8 mb-12 border-b border-slate-200/80">
          <span className="font-medium text-navy">Blues&amp;Yellow Engineering</span>
          <span>•</span>
          <span>Published 2026</span>
          <span>•</span>
          <span>6 min read</span>
        </div>

        <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-normal">
            Building software that scales requires balancing immediate commercial velocity with sustainable, type-safe architecture. Every engineering trade-off directly impacts performance, accessibility, and operational maintenance costs.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy pt-4">
            Foundational Engineering Principles
          </h2>
          <p>
            When architecting modern applications and platforms, we adhere to strict engineering disciplines:
          </p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
              <span><strong>Server-First Data Flow:</strong> Keep client bundles minimal by default and push data fetching and business mutations to the server layer.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
              <span><strong>Enforce Strict Type Contracts:</strong> Utilize TypeScript and runtime Zod validation across all network requests, database boundaries, and client forms.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
              <span><strong>Measure Real Core Web Vitals:</strong> Eliminate cumulative layout shifts (CLS), optimize local typography, and maintain largest contentful paint (LCP) under one second.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold" aria-hidden="true">&bull;</span>
              <span><strong>Design for Fault Tolerance:</strong> Integrate explicit error and loading boundaries to prevent cascading client-side failures when third-party services degrade.</span>
            </li>
          </ul>

          <div className="p-8 bg-slate-50 rounded-3xl my-8">
            <h3 className="text-xl font-bold text-navy font-serif mb-3">Pragmatic Architecture Takeaway</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              For ambitious digital products, investing early in clean code hygiene, consistent design token systems, and reliable automated verification prevents technical debt from hindering future business agility.
            </p>
          </div>
        </div>

        {/* Actionable Closure Card */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/start-a-project"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy transition-colors text-center inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Discuss Your Architecture</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/insights"
            className="text-base font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            More Articles &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
