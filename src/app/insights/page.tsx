import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights | Blues&Yellow Engineering & Strategy',
  description: 'Articles, architectural strategies, and engineering perspectives from the Blues&Yellow team.',
};

export default function InsightsPage() {
  const articles = [
    {
      title: 'Building Scalable Web Applications in Next.js 16',
      slug: 'scalable-web-apps',
      date: 'March 15, 2026',
      readTime: '6 min read',
      tag: 'Architecture & Fullstack',
      excerpt: 'How to structure App Router applications with Server Components, streaming boundaries, robust proxy security, and reliable cache invalidation.',
    },
    {
      title: 'Technical SEO & Core Web Vitals Optimization',
      slug: 'seo-best-practices',
      date: 'February 20, 2026',
      readTime: '5 min read',
      tag: 'Performance & Growth',
      excerpt: 'Practical engineering tactics to achieve sub-second LCP, zero layout shifts, and structured JSON-LD semantic schema for search crawlability.',
    },
    {
      title: 'Design Systems & Token Architecture for Web Platforms',
      slug: 'design-systems-scale',
      date: 'January 28, 2026',
      readTime: '7 min read',
      tag: 'Design & Engineering',
      excerpt: 'Bridging the divide between visual identity and production code using three-layer tokens, Tailwind CSS variables, and fluid typography.',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-[1.1] tracking-[-0.02em] text-navy mb-8">
            Architectural perspectives, code craft, and digital strategy.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal">
            Deep dives into modern fullstack architecture, design token ergonomics, sub-second performance, and pragmatic software engineering.
          </p>
        </div>

        {/* Article Listing */}
        <div className="space-y-8 mb-24">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group block p-8 sm:p-10 bg-slate-50 rounded-3xl hover:bg-slate-100/80 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
                <span className="text-blue-600 bg-white px-3 py-1 rounded-full border border-slate-200">
                  {article.tag}
                </span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                {article.title}
              </h2>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 pt-4 border-t border-slate-200/60">
                <span>Read article</span>
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Actionable Closure Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-2">
              Want to discuss technical architecture with our team?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              We help ambitious engineering leaders design, build, and optimize modern platforms.
            </p>
          </div>
          <Link
            href="/start-a-project"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy transition-colors text-center inline-flex items-center justify-center gap-2 flex-shrink-0"
          >
            <span>Start a Conversation</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
