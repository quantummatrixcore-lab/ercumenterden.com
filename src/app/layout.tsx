import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Ercüment Erden — Founder of ALPAR AI & DecasHub",
  description: "Building the trust infrastructure for AI accountability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased bg-bg text-white selection:bg-brand/30">
        {children}
      </body>
    </html>
  );
}
