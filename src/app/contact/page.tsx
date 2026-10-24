import type { Metadata } from 'next';
import ProjectInquiryForm from '@/components/ProjectInquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us | Blues&Yellow Digital Studio',
  description: 'Connect with the Blues&Yellow team to discuss your web application, mobile app, or website project.',
};

export default function ContactPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-[1.1] tracking-[-0.02em] text-navy mb-6">
            Let&apos;s start a conversation.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal">
            Have a question, need an architectural consultation, or want to discuss a new digital build? Reach out and our team will get back to you promptly.
          </p>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Columns: Studio Communication Standards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Response Commitment
                </span>
                <p className="font-serif text-xl font-bold text-navy mb-1">
                  Within 24 business hours
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every inquiry is reviewed directly by a senior engineer or digital strategist. No automated sales bots.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Studio Principles
                </span>
                <p className="font-serif text-xl font-bold text-navy mb-1">
                  Direct engineer communication
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We eliminate agency account layers so you collaborate directly with the creators building your software.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Scope &amp; Delivery
                </span>
                <p className="font-serif text-xl font-bold text-navy mb-1">
                  Fixed-milestone transparency
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clear timelines, deterministic milestones, and verified production performance guarantees.
                </p>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Inquiry Form Container */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold font-serif text-navy mb-6">
              Send us a message
            </h2>
            <ProjectInquiryForm buttonText="Send Message" />
          </div>
        </div>
      </div>
    </div>
  );
}
