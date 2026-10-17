'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import {
  Shield,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Layers,
} from 'lucide-react';

interface EcosystemBentoProps {
  lang: Language;
}

export const EcosystemBento: React.FC<EcosystemBentoProps> = ({ lang }) => {
  const t = content[lang].ecosystem;

  const getAccentStyles = (accent: 'cyan' | 'emerald' | 'amber') => {
    switch (accent) {
      case 'emerald':
        return {
          badge: 'border-[#06D6A0]/30 bg-[#06D6A0]/10 text-[#06D6A0]',
          tagline: 'text-[#06D6A0]',
          icon: 'text-[#06D6A0]',
          cta: 'border-[#06D6A0] bg-[#06D6A0] text-[#05070C] shadow-[0_0_20px_rgba(6,214,160,0.3)]',
        };
      case 'amber':
        return {
          badge: 'border-amber-400/30 bg-amber-400/10 text-amber-400',
          tagline: 'text-amber-400',
          icon: 'text-amber-400',
          cta: 'border-amber-400 bg-amber-400 text-[#05070C] shadow-[0_0_20px_rgba(251,191,36,0.3)]',
        };
      case 'cyan':
      default:
        return {
          badge: 'border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF]',
          tagline: 'text-[#00F0FF]',
          icon: 'text-[#00F0FF]',
          cta: 'border-[#00F0FF] bg-[#00F0FF] text-[#05070C] shadow-[0_0_20px_rgba(0,240,255,0.3)]',
        };
    }
  };

  return (
    <section id="ecosystem" className="relative border-b border-white/10 bg-[#05070C] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17] px-3.5 py-1 text-xs font-mono font-medium text-[#00F0FF]">
            <Activity className="h-3.5 w-3.5 text-[#00F0FF]" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.sectionDescription}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {t.cards.map((card, idx) => {
            const colSpan = idx === 0 || idx === t.cards.length - 1 ? 'lg:col-span-12' : 'lg:col-span-6';
            const styles = getAccentStyles(card.accentColor);

            return (
              <div key={card.id} className={`glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8 ${colSpan}`}>
                <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#00F0FF]/5 blur-3xl" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Badge */}
                    <div className={`mb-4 inline-flex items-center gap-2 rounded-md border px-3 py-1 font-mono text-xs font-semibold tracking-wider ${styles.badge}`}>
                      <Shield className="h-3.5 w-3.5" />
                      <span>{card.badge}</span>
                    </div>

                    <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                      {card.name}
                    </h3>
                    <p className={`mt-1 font-mono text-xs font-semibold uppercase tracking-wider ${styles.tagline}`}>
                      {card.tagline}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                      {card.description}
                    </p>

                    {/* Metrics Row */}
                    {card.metrics && card.metrics.length > 0 && (
                      <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl border border-white/10 bg-[#0A0E17]/60 p-3">
                        {card.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                              {m.label}
                            </span>
                            <span className="block font-mono text-sm sm:text-base font-bold text-white mt-0.5">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features List */}
                    <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {card.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${styles.icon}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href={card.ctaUrl}
                      target={card.ctaUrl.startsWith('http') ? '_blank' : undefined}
                      rel={card.ctaUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all hover:bg-white hover:border-white hover:text-[#05070C] ${styles.cta}`}
                    >
                      <span>{card.ctaText}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>

                    <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                      {card.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
