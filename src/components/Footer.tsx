'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = content[lang].footer;
  const nav = content[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070C] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand Monogram & Manifesto */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-[#00F0FF]/30 bg-[#0A0E17] font-mono font-bold text-xs text-[#00F0FF]">
                {nav.monogram}
              </div>
              <span className="font-mono text-sm font-bold tracking-widest text-white">
                {nav.title}
              </span>
            </div>
            <p className="text-xs italic text-zinc-400">
              &ldquo;{t.manifestoQuote}&rdquo;
            </p>
          </div>

          {/* Ecosystem Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-zinc-400">
            {t.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="transition-colors hover:text-[#00F0FF]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0A0E17] px-3.5 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#00F0FF]" />
          </button>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-zinc-400 md:flex-row md:text-left">
          <div>
            © {new Date().getFullYear()} {t.rights}
          </div>
          <div className="font-mono text-[10px] tracking-widest text-zinc-400">
            {t.badge} • ZERO LATENCY VERIFIED
          </div>
        </div>
      </div>
    </footer>
  );
};
