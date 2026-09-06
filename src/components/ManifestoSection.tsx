'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import { BookOpen, Sparkles } from 'lucide-react';

interface ManifestoSectionProps {
  lang: Language;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ lang }) => {
  const t = content[lang].manifesto;

  return (
    <section id="manifesto" className="relative border-b border-white/10 bg-[#05070C] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17] px-3.5 py-1 text-xs font-mono font-medium text-[#00F0FF]">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.principles.map((principle) => (
            <div
              key={principle.number}
              className="glass-card relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all hover:border-[#00F0FF]/40"
            >
              <div>
                <div className="font-mono text-4xl font-black text-[#00F0FF]/30 sm:text-5xl">
                  {principle.number}
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {principle.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-zinc-400 font-mono text-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#00F0FF]" />
                <span className="uppercase tracking-widest text-[10px]">SOVEREIGN AXIOM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
