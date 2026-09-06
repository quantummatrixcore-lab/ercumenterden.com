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
  title: "Ercüment Erden | Founder & Sovereign Systems Architect",
  description:
    "Official Executive Authority Portal of Ercüment Erden — Founder of ALPAR AI, DecasHub Sovereign & Agent-OS. Pioneer of Turkey's 2019 IoT shared charging infrastructure.",
  keywords: [
    "Ercüment Erden",
    "ALPAR AI",
    "DecasHub Sovereign",
    "Agent-OS Layer",
    "Rabbit Charge",
    "AI Trust & Incident Registry",
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
    title: "Ercüment Erden | Founder & Sovereign Systems Architect",
    description:
      "Architecting Sovereign Systems: From Hardware to AI Accountability. Founder of ALPAR AI, DecasHub Sovereign & Agent-OS.",
    siteName: "Ercüment Erden Executive Portal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ercüment Erden | Founder & Sovereign Systems Architect",
    description:
      "Architecting Sovereign Systems: From Hardware to AI Accountability.",
    creator: "@ercumenterden",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
