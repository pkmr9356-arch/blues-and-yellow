import type { Metadata } from 'next';
import ProjectInquiryForm from '@/components/ProjectInquiryForm';

export const metadata: Metadata = {
  title: 'Start a Project | Blues&Yellow Digital Studio',
  description: 'Tell us about your project vision, target timeline, and goals. We build high-impact digital experiences that help ambitious businesses scale.',
};

export default function StartProjectPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-[1.1] tracking-[-0.02em] text-navy mb-6">
            Start a project with Blues&amp;Yellow.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal">
            Tell us about your product vision, target timeline, and core requirements. We engineer digital experiences built to move your business forward.
          </p>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Columns: What to Expect */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Step 1
                </span>
                <p className="font-serif text-xl font-bold text-navy mb-1">
                  Initial Discovery Call
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A 30-minute technical session to dissect your objectives, users, and technical constraints.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Step 2
                </span>
                <p className="font-serif text-xl font-bold text-navy mb-1">
                  Architecture &amp; Proposal
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We prepare a clear technical roadmap with phased deliverables, milestones, and fixed pricing.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Step 3
                </span>
                <p className="font-serif text-xl font-bold text-navy mb-1">
                  Kickoff &amp; Rapid Build
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sprint-based execution with continuous staging previews and direct engineering access.
                </p>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Project Inquiry Form Container */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">
              Project specifications
            </h2>
            <ProjectInquiryForm buttonText="Submit Project Inquiry" />
          </div>
        </div>
      </div>
    </div>
  );
}
