'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import { History, Wrench, ShieldAlert, Cpu, Quote } from 'lucide-react';

interface CrucibleTimelineProps {
  lang: Language;
}

export const CrucibleTimeline: React.FC<CrucibleTimelineProps> = ({ lang }) => {
  const t = content[lang].crucible;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Wrench className="h-4 w-4 text-amber-400" />;
      case 1:
        return <ShieldAlert className="h-4 w-4 text-[#00F0FF]" />;
      case 2:
        return <Cpu className="h-4 w-4 text-[#06D6A0]" />;
      default:
        return <History className="h-4 w-4 text-zinc-400" />;
    }
  };

  return (
    <section id="crucible" className="relative border-b border-white/10 bg-[#05070C] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17] px-3.5 py-1 text-xs font-mono font-medium text-[#00F0FF]">
            <History className="h-3.5 w-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00F0FF]/40 before:via-[#06D6A0]/40 before:to-transparent sm:before:left-8">
          {t.items.map((item, index) => (
            <div key={index} className="relative flex items-start gap-6 sm:gap-10">
              {/* Timeline Marker */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-[#0A0E17] shadow-[0_0_15px_rgba(0,240,255,0.2)] sm:h-16 sm:w-16">
                {getIcon(index)}
              </div>

              {/* Content Panel */}
              <div className="glass-card flex-1 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-black text-[#00F0FF] sm:text-2xl">
                      {item.year}
                    </span>
                    <span className="rounded bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300">
                      {item.category}
                    </span>
                  </div>
                  <span className="rounded-full border border-[#06D6A0]/30 bg-[#06D6A0]/10 px-3 py-0.5 font-mono text-[10px] font-bold text-[#06D6A0]">
                    {item.badge}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <div className="mt-1 font-mono text-xs font-semibold text-zinc-400">
                    {item.role}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {item.summary}
                </p>

                {/* Battle Scar Callout */}
                <div className="mt-6 rounded-xl border border-white/10 bg-[#05070C]/80 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <Quote className="mt-1 h-4 w-4 shrink-0 text-[#00F0FF]" />
                    <p className="font-mono text-xs italic leading-relaxed text-zinc-200 sm:text-sm">
                      {item.takeaway}
                    </p>
                  </div>
                </div>

                {/* Metrics Pill Grid */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="rounded-lg border border-white/10 bg-[#0A0E17] px-3 py-1 font-mono text-xs text-zinc-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
