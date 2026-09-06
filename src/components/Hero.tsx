'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import { ArrowDown, ArrowUpRight, Shield, Cpu, Activity, Lock } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = content[lang].hero;

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Subtle Background Radial Focus */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#00F0FF]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
        {/* Live Systems Telemetry Capsule */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0F172A]/70 px-3.5 py-1 text-xs backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-slate-300">
            SYSTEMS NOMINAL • MESH LATENCY &lt; 100µs • ISTANBUL &amp; GLOBAL
          </span>
        </div>

        {/* Sculpted Towering Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-4">
          <span className="text-gradient block">ERCÜMENT ERDEN</span>
        </h1>

        {/* Executive Subtitle */}
        <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#00F0FF] mb-6">
          Founder &amp; CEO @ ALPAR AI • DeepTech Systems Architect • Serial Entrepreneur
        </p>

        {/* Impact Quote Box */}
        <div className="border-l-2 border-[#00F0FF]/60 pl-5 my-3 max-w-3xl">
          <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic">
            "{t.manifestoLead} {t.manifestoSub}"
          </p>
          <p className="text-sm text-slate-400 mt-2 font-normal leading-relaxed">
            {t.narrative}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-slate-200 to-white px-6 py-3 font-mono text-xs font-black uppercase tracking-wider text-[#07090E] primary-glow hover:brightness-110 transition-all"
          >
            <span>{t.primaryCta}</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="https://alparai.com/cases/001-grok-passport"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-200 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
          >
            <span>{t.secondaryCta}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-transparent px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            <span>{t.directLineCta}</span>
          </a>
        </div>

        {/* 4-Metric Glass Ticker */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {t.ticker.map((item, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl flex flex-col justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                {item.label}
              </span>
              <span className="font-mono text-xl sm:text-2xl font-black text-[#00F0FF]">
                {item.value}
              </span>
              <span className="font-mono text-[10px] text-slate-500 mt-1">
                {item.desc || 'Verified Protocol'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
