"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-rule bg-ink py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Mark */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="font-display text-xl text-platin tracking-wide">
            Ercüment Erden
          </span>
          <span className="font-mono-custom text-[8px] tracking-[0.2em] uppercase text-text-faint">
            Verification Infrastructure Architect
          </span>
        </div>

        {/* Technical Navigation / Coordinates */}
        <div className="flex flex-wrap justify-center gap-8 font-mono-custom text-[10px] tracking-[0.15em] uppercase">
          <a
            href="https://linkedin.com/in/ercumenterden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-platin transition-colors"
          >
            LinkedIn
          </a>
          <Link href="/insights" className="text-text-dim hover:text-platin transition-colors">
            İçgörüler
          </Link>
          <Link href="/investor" className="text-text-dim hover:text-platin transition-colors">
            Yatırımcı
          </Link>
          <a
            href="mailto:ercument@ercumenterden.com"
            className="text-text-dim hover:text-platin transition-colors"
          >
            ercument@ercumenterden.com
          </a>
        </div>

        {/* Copy / Version */}
        <div className="font-mono-custom text-[9px] tracking-[0.12em] text-text-faint">
          © {currentYear} EE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
