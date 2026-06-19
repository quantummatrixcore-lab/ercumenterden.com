import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "700",
  style: "italic",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ercüment Erden — Verification Infrastructure Architect",
  description: "Verification Infrastructure Architect. AI-native ekonomiler için doğrulama altyapısı inşa ediyorum.",
  alternates: {
    canonical: "https://ercumenterden.com",
  },
  openGraph: {
    title: "Ercüment Erden — Verification Infrastructure Architect",
    description: "Verification Infrastructure Architect. AI-native ekonomiler için doğrulama altyapısı inşa ediyorum.",
    url: "https://ercumenterden.com",
    siteName: "Ercüment Erden Portfolio",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ercüment Erden — Verification Infrastructure Architect",
    description: "Verification Infrastructure Architect. AI-native ekonomiler için doğrulama altyapısı inşa ediyorum.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ercüment Erden",
  "jobTitle": "Verification Infrastructure Architect",
  "url": "https://ercumenterden.com",
  "sameAs": [
    "https://linkedin.com/in/ercumenterden"
  ],
  "knowsAbout": ["AI Safety", "Carbon Markets", "dMRV", "EU AI Act", "CBAM 2026"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} antialiased bg-ink text-text min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
