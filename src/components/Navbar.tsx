'use client';

import React, { useState } from 'react';
import { content, Language } from '@/data/content';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang].nav;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl rounded-full border border-white/10 bg-[#07090E]/80 backdrop-blur-xl z-50 shadow-[0_0_25px_rgba(0,240,255,0.12)] transition-all duration-300 hover:border-white/20">
      <div className="flex justify-between items-center px-5 sm:px-8 py-3">
        {/* Left: Monogram & Status Pill */}
        <div className="flex items-center gap-3.5">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-mono text-lg font-black tracking-tighter text-[#00F0FF] group-hover:scale-105 transition-transform">
              {t.monogram}
            </span>
          </a>
          <div className="status-pill px-2.5 py-0.5 rounded-full flex items-center gap-1.5 hidden sm:flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-[#00F0FF] uppercase tracking-widest">
              28 AGENTS ACTIVE
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-slate-300">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#00F0FF] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Language Switcher & Connect Button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#0F172A]/80 rounded-full border border-white/10 px-2.5 py-1 text-xs font-mono">
            <button
              onClick={() => onLanguageChange('en')}
              className={`transition-colors px-1 ${
                lang === 'en' ? 'text-[#00F0FF] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-slate-600 px-1">/</span>
            <button
              onClick={() => onLanguageChange('tr')}
              className={`transition-colors px-1 ${
                lang === 'tr' ? 'text-[#00F0FF] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              TR
            </button>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white font-mono text-xs uppercase tracking-wider hover:border-[#00F0FF] hover:text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all"
          >
            <span>{t.officeHoursCta || 'Connect'}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center p-1.5 text-slate-300 hover:text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3 bg-[#07090E]/95 rounded-b-3xl">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider text-slate-300 hover:text-[#00F0FF]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-2 rounded-lg border border-[#00F0FF]/40 bg-[#00F0FF]/10 font-mono text-xs font-bold uppercase text-[#00F0FF]"
          >
            {t.officeHoursCta || 'Connect'}
          </a>
        </div>
      )}
    </header>
  );
};
