'use client';

import React, { useState } from 'react';
import { content, Language } from '@/data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang].nav;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05070C]/85 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Monogram & Title */}
        <a href="#" className="group flex items-center gap-3.5 focus:outline-none">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#00F0FF]/30 bg-[#0A0E17] font-mono font-black text-sm tracking-tighter text-[#00F0FF] shadow-[0_0_15px_-3px_rgba(0,240,255,0.25)] transition-all duration-300 group-hover:border-[#00F0FF] group-hover:shadow-[0_0_22px_-2px_rgba(0,240,255,0.4)]">
            <span className="relative z-10">{t.monogram}</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00F0FF]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-widest text-[#F8FAFC] transition-colors group-hover:text-[#00F0FF]">
              {t.title}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-zinc-400">
              {t.subtitle}
            </span>
          </div>
        </a>

        {/* Status Beacon - Desktop */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17]/80 px-3.5 py-1 text-xs xl:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06D6A0] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06D6A0]" />
          </span>
          <span className="font-mono text-[11px] font-medium tracking-wider text-zinc-300">
            {t.status}
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-zinc-400 transition-colors duration-200 hover:text-[#00F0FF]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Language Switcher & Office Hours CTA */}
        <div className="hidden items-center gap-4 sm:flex">
          {/* Bilingual Switcher */}
          <div className="flex items-center rounded-lg border border-white/10 bg-[#0A0E17] p-1 font-mono text-xs">
            <button
              onClick={() => onLanguageChange('en')}
              className={`rounded px-2.5 py-1 text-[11px] font-bold tracking-wider transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-[#00F0FF]/15 text-[#00F0FF] shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => onLanguageChange('tr')}
              className={`rounded px-2.5 py-1 text-[11px] font-bold tracking-wider transition-all duration-200 ${
                lang === 'tr'
                  ? 'bg-[#00F0FF]/15 text-[#00F0FF] shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Türkçe'ye Geç"
            >
              TR
            </button>
          </div>

          {/* Action CTA */}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-[#00F0FF]/40 bg-[#00F0FF]/10 px-4 py-2 font-mono text-xs font-semibold tracking-wider text-[#00F0FF] transition-all duration-300 hover:border-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#05070C] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <span>{t.officeHoursCta}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mini Language Switcher for mobile */}
          <div className="flex items-center rounded border border-white/10 bg-[#0A0E17] p-0.5 font-mono text-xs">
            <button
              onClick={() => onLanguageChange(lang === 'en' ? 'tr' : 'en')}
              className="px-2 py-1 font-bold text-[#00F0FF]"
            >
              {lang.toUpperCase()}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 bg-[#0A0E17] p-2 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#05070C] px-6 py-6 md:hidden">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17] px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-[#06D6A0]" />
            <span className="font-mono text-[11px] text-zinc-300">{t.status}</span>
          </div>
          <nav className="flex flex-col space-y-4">
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-zinc-300 hover:text-[#00F0FF]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#00F0FF]/40 bg-[#00F0FF]/10 py-2.5 font-mono text-xs font-semibold text-[#00F0FF]"
              >
                <span>{t.officeHoursCta}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
