'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import { Users, Shield, Scale, Newspaper, CheckCircle2, Sparkles } from 'lucide-react';

interface SyndicateSectionProps {
  lang: Language;
}

export const SyndicateSection: React.FC<SyndicateSectionProps> = ({ lang }) => {
  const t = content[lang].syndicate;

  const getMemberIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="h-5 w-5 text-[#00F0FF]" />;
      case 1:
        return <Scale className="h-5 w-5 text-[#06D6A0]" />;
      case 2:
        return <Newspaper className="h-5 w-5 text-amber-400" />;
      default:
        return <Users className="h-5 w-5 text-zinc-400" />;
    }
  };

  const getBadgeColor = (accent: string) => {
    switch (accent) {
      case 'cyan':
        return 'border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF]';
      case 'emerald':
        return 'border-[#06D6A0]/30 bg-[#06D6A0]/10 text-[#06D6A0]';
      case 'amber':
        return 'border-amber-400/30 bg-amber-400/10 text-amber-400';
      default:
        return 'border-white/20 bg-white/5 text-zinc-300';
    }
  };

  return (
    <section id="syndicate" className="relative border-b border-white/10 bg-[#05070C] py-24 sm:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#00F0FF]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17] px-3.5 py-1 text-xs font-mono font-medium text-[#00F0FF]">
            <Users className="h-3.5 w-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 3 Members Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.members.map((member, idx) => (
            <div
              key={idx}
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#00F0FF]/40 hover:shadow-[0_12px_40px_-10px_rgba(0,240,255,0.15)]"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0A0E17] transition-transform duration-300 group-hover:scale-105">
                    {getMemberIcon(idx)}
                  </div>
                  <span
                    className={`rounded-full border px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${getBadgeColor(
                      member.accentColor
                    )}`}
                  >
                    {member.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <div className="mt-5">
                  <h3 className="text-xl font-extrabold tracking-tight text-white transition-colors group-hover:text-[#00F0FF] sm:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-[#00F0FF]">
                    {member.role}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-zinc-400">
                    {member.organization}
                  </p>
                </div>

                {/* Focus / Description */}
                <p className="mt-4 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  {member.focus}
                </p>
              </div>

              {/* Footer Pill */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#06D6A0]" />
                <span>EXECUTIVE GOVERNANCE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
