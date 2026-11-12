import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05070C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ercumenterden.com"),
  title: "Ercüment Erden | Founder, ALPAR AI and DecasHub",
  description:
    "Official Executive Authority Portal of Ercüment Erden — Founder, ALPAR AI and DecasHub. Ventures: ALPAR AI, DecasHub, Lionexia, UDT.",
  keywords: [
    "Ercüment Erden",
    "ALPAR AI",
    "DecasHub",
    "Lionexia",
    "UDT",
    "Rabbit Charge",
    "AI Trust & Incident Registry",
    "EU AI Act",
    "Deep-Tech Founder",
    "Sovereign Systems Architect",
    "TÜRKINFORM",
    "Grok Incident",
  ],
  authors: [{ name: "Ercüment Erden", url: "https://ercumenterden.com" }],
  creator: "Ercüment Erden",
  publisher: "Ercüment Erden Sovereign Office",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    url: "https://ercumenterden.com",
    title: "Ercüment Erden | Founder, ALPAR AI and DecasHub",
    description:
      "Architecting Sovereign Systems: From Hardware to AI Accountability. Founder, ALPAR AI and DecasHub.",
    siteName: "Ercüment Erden Executive Portal",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Ercüment Erden — Founder portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ercüment Erden | Founder, ALPAR AI and DecasHub",
    description:
      "Architecting Sovereign Systems: From Hardware to AI Accountability.",
    creator: "@ercumenterden",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full dark`}
    >
      <body className="flex min-h-full flex-col bg-[#05070C] text-[#F8FAFC] antialiased selection:bg-[#00F0FF] selection:text-[#05070C]">
        {children}
      </body>
    </html>
  );
}
