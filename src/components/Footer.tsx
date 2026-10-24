import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Website Development', href: '/services/website-development' },
      { label: 'Web Applications', href: '/services/web-applications' },
      { label: 'Mobile Apps', href: '/services/mobile-app-development' },
      { label: 'WordPress & CMS', href: '/services/wordpress-development' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Maintenance & Support', href: '/services/maintenance' },
      { label: 'Digital Strategy', href: '/services/digital-strategy' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Work', href: '/work' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white py-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              aria-label="Blues&Yellow Home"
            >
              <span className="text-blue-400">Blues</span>
              <span className="text-white">&amp;</span>
              <span className="text-yellow-400">Yellow</span>
            </Link>
            <p className="text-slate-300 text-base leading-relaxed max-w-sm">
              Digital experiences built to move your business forward. We engineer bespoke websites, high-performance web applications, and growth strategies.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold mb-4 text-base text-slate-100">Services</h3>
            <ul className="space-y-3 text-base">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4 text-base text-slate-100">Company</h3>
            <ul className="space-y-3 text-base">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold mb-4 text-base text-slate-100">Legal</h3>
            <ul className="space-y-3 text-base">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Media Credits with Verified CC License Links */}
        <div className="mt-16 pt-8 text-sm text-slate-300 leading-relaxed">
          <p className="mb-4 max-w-5xl text-slate-300">
            Pictures and footage:{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Modern_architecture_in_Toronto.jpg"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              &ldquo;Modern architecture in Toronto&rdquo;
            </a>{' '}
            by ThomasLendt,{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-SA 4.0
            </a>
            , via Wikimedia Commons;{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Domusstudio_architecture_office.jpg"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              &ldquo;Domusstudio architecture office&rdquo;
            </a>{' '}
            by Mds08011,{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY 4.0
            </a>
            , via Wikimedia Commons;{' '}
            <a
              href="https://www.metmuseum.org/art/collection/search/286349"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              &ldquo;[View from Photographer&apos;s Studio]&rdquo;
            </a>{' '}
            by Gustave Le Gray, 1851&ndash;54,{' '}
            <a
              href="https://creativecommons.org/publicdomain/zero/1.0/"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              public domain (CC0)
            </a>
            , via The Metropolitan Museum of Art;{' '}
            <a
              href="https://commons.wikimedia.org/w/index.php?curid=41336808"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              &ldquo;Frederick Osterling Architectural Studio, 2015-06-17, 02&rdquo;
            </a>{' '}
            by{' '}
            <a
              href="https://commons.wikimedia.org/wiki/User:Cbaile19"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cbaile19
            </a>
            ,{' '}
            <a
              href="https://creativecommons.org/publicdomain/zero/1.0/deed.en/"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              public domain (CC0)
            </a>
            , via Wikimedia Commons;{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Tbilisi_life_-_Georgia_Travel_-_canon_camera_Eosm27_-_Creative_commons.ogv"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              &ldquo;Tbilisi life&rdquo;
            </a>{' '}
            by Mostafameraji,{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0"
              className="underline text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-SA 4.0
            </a>
            , via Wikimedia Commons.
            <span className="block mt-2 text-xs text-slate-400">
              Share-Alike notice: Material licensed under CC BY-SA 4.0 requires adaptations to be distributed under identical terms.
            </span>
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p className="text-slate-400">&copy; {currentYear} Blues&amp;Yellow. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Precision engineering</span>
              <span>&bull;</span>
              <span>Purposeful design</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
