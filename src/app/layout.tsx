import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const erode = localFont({
  src: [
    {
      path: './fonts/Erode-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Erode-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Erode-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Erode-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-erode',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bluesandyellow.agency'),
  title: {
    default: 'Blues&Yellow | Digital Agency & Web Technology Studio',
    template: '%s | Blues&Yellow',
  },
  description:
    'Digital experiences that move businesses. We build websites, web applications, and digital strategies that help ambitious companies grow.',
  keywords: [
    'digital agency',
    'web development',
    'web applications',
    'mobile apps',
    'digital strategy',
    'Next.js',
    'WordPress',
    'Blues&Yellow',
  ],
  authors: [{ name: 'Blues&Yellow' }],
  creator: 'Blues&Yellow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Blues&Yellow',
    title: 'Blues&Yellow | Digital Agency & Web Technology Studio',
    description:
      'Digital experiences that move businesses. We build websites, web applications, and digital strategies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blues&Yellow | Digital Agency & Web Technology Studio',
    description:
      'Digital experiences that move businesses. We build websites, web applications, and digital strategies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${erode.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
