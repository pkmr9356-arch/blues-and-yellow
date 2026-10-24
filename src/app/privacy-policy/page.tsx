import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Blues&Yellow collects, uses, and safeguards information submitted through our website and project inquiry forms.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: October 24, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">1. Information We Collect</h2>
            <p>
              Blues&Yellow collects information that you voluntarily provide to us when expressing an interest in our digital agency services. Specifically, when you submit our project inquiry or contact form, we collect:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Project details, requirements, timeline, and budget notes you share in the project description</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">2. How We Use Your Information</h2>
            <p>We use the information collected exclusively for legitimate business communication:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>To evaluate your project inquiry and schedule introductory consultations</li>
              <li>To prepare customized proposals, estimates, and technical roadmaps</li>
              <li>To send transactional confirmation notices regarding your inquiry submission</li>
            </ul>
            <p className="mt-2">
              We never sell, trade, or rent your personal information to third parties, data brokers, or advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">3. Data Storage & Service Providers</h2>
            <p>
              Inquiry submissions are securely stored using Supabase (hosted PostgreSQL database with encrypted connections and role-level isolation) and notification emails are dispatched through Resend. Both providers operate in compliance with industry-standard security and data handling protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">4. Cookies and Session Storage</h2>
            <p>
              Our website uses minimal, strictly necessary cookies to ensure basic application security and manage authenticated sessions for administrative staff. We do not employ third-party tracking or behavioral advertising cookies across public visitor sessions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">5. Data Retention & Your Rights</h2>
            <p>
              We retain inquiry information only as long as necessary to fulfill the business relationship or as required by applicable laws. You may request an export or permanent deletion of your submitted project inquiry at any time by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data management practices, please contact us at:
            </p>
            <p className="mt-2 font-medium text-navy">
              Email: <Link href="mailto:hello@bluesandyellow.digital" className="text-blue-600 hover:underline">hello@bluesandyellow.digital</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
