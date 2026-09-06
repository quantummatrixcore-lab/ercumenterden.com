'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = content[lang].hero;

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-radial-gradient pb-20 pt-16 sm:pb-28 sm:pt-24">
      {/* Background Architectural Grid Accent */}
      <div className="pointer-events-none absolute inset-0 bg-grid-sovereign opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Executive Sub-Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0A0E17]/90 px-4 py-1.5 shadow-[0_0_20px_-3px_rgba(0,240,255,0.15)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00F0FF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F0FF]" />
          </span>
          <span className="font-mono text-xs font-semibold tracking-wider text-[#00F0FF]">
            {t.badge}
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-xs font-medium text-zinc-300">
            {t.subBadge}
          </span>
        </div>

        {/* Executive Title */}
        <div className="mb-6 max-w-5xl">
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
            <span className="block text-[#F8FAFC]">{t.titlePrefix}</span>
            <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {t.titleSuffix}
            </span>
          </h1>
        </div>

        {/* Master Manifesto Lead */}
        <div className="mb-8 max-w-3xl">
          <p className="text-2xl font-bold tracking-tight text-[#00F0FF] sm:text-3xl">
            {t.manifestoLead}{' '}
            <span className="text-[#F8FAFC]">{t.manifestoSub}</span>
          </p>
        </div>

        {/* Narrative Paragraph */}
        <div className="mb-10 max-w-3xl">
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            {t.narrative}
          </p>
        </div>

        {/* Direct Action Buttons */}
        <div className="mb-16 flex flex-wrap items-center gap-4 sm:gap-5">
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#00F0FF] bg-[#00F0FF] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#05070C] shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-300 hover:bg-white hover:border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]"
          >
            <span>{t.primaryCta}</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="https://alparai.com/cases/001-grok-passport"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#0A0E17] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#F8FAFC] transition-all duration-300 hover:border-[#00F0FF]/60 hover:text-[#00F0FF] hover:shadow-[0_0_20px_-3px_rgba(0,240,255,0.25)]"
          >
            <span>{t.secondaryCta}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-transparent px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-wider text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            <span>{t.directLineCta}</span>
          </a>
        </div>

        {/* Institutional Metrics Ticker */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {t.ticker.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 sm:p-5"
            >
              <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                {item.label}
              </div>
              <div className="font-mono text-lg font-black tracking-tight text-[#00F0FF] sm:text-xl lg:text-2xl">
                {item.value}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-400">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
