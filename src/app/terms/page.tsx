import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Understand the terms and conditions governing the use of the Blues&Yellow digital agency website and services.',
};

export default function TermsPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: October 24, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of Blues&Yellow (&quot;Agency&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) at bluesandyellow.agency, you agree to comply with and be bound by these Terms of Service. If you do not agree, please discontinue use of this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">2. Agency Services & Project Scopes</h2>
            <p>
              Blues&Yellow provides digital strategy, website design, custom web application engineering, mobile app development, and technical optimization services. Information presented on this website is for general informational purposes.
            </p>
            <p className="mt-2">
              Submitting a project inquiry or consultation request via our website does not create a binding service contract. Formal engagements commence solely upon mutual execution of a formal Statement of Work (SOW) or Master Services Agreement (MSA) outlining scope, deliverables, timelines, and payment terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">3. Intellectual Property Rights</h2>
            <p>
              The visual interfaces, design assets, brand identity, copy, animations, and proprietary source code displayed on this website are the property of Blues&Yellow and protected by applicable copyright, trademark, and trade dress regulations.
            </p>
            <p className="mt-2">
              Ownership and licensing of bespoke client deliverables (such as custom web apps and digital products) are determined individually according to terms established in each client&apos;s executed contract upon receipt of full payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">4. User Inquiries & Code of Conduct</h2>
            <p>
              When utilizing our contact and inquiry intake forms, you agree to submit truthful, accurate details. You agree not to submit unsolicited marketing spam, malicious code, automated bot traffic, or unlawful materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">5. Disclaimer of Warranties</h2>
            <p>
              This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied. While we strive for continuous uptime and error-free operation, we do not warrant that site functions will be uninterrupted or completely free of technical errors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-3">6. Inquiries and Legal Questions</h2>
            <p>
              For legal inquiries regarding these Terms or our services, please reach out to our team at:
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
