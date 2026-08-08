import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Ercüment Erden — Founder of ALPAR AI & DecasHub',
  description: 'Building the trust infrastructure for AI accountability. Founder of ALPAR AI (EU AI Act Article 73) and DecasHub.',
  metadataBase: new URL('https://ercumenterden.com'),
  openGraph: {
    title: 'Ercüment Erden — Founder of ALPAR AI & DecasHub',
    description: 'Building the trust infrastructure for AI accountability.',
    url: 'https://ercumenterden.com',
    siteName: 'Ercüment Erden',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ercüment Erden — Founder of ALPAR AI & DecasHub',
    description: 'Building the trust infrastructure for AI accountability.',
    creator: '@ercumenterden',
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="antialiased bg-black text-white selection:bg-brand/30">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
