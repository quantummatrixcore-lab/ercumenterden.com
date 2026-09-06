'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import {
  Shield,
  CheckCircle2,
  ArrowUpRight,
  Activity,
} from 'lucide-react';

interface EcosystemBentoProps {
  lang: Language;
}

export const EcosystemBento: React.FC<EcosystemBentoProps> = ({ lang }) => {
  const t = content[lang].ecosystem;

  return (
    <section id="ecosystem" className="relative border-b border-white/10 bg-[#05070C] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17] px-3.5 py-1 text-xs font-mono font-medium text-[#00F0FF]">
            <Activity className="h-3.5 w-3.5 text-[#00F0FF]" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.sectionDescription}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {t.cards.map((card, idx) => {
            // Logic for layout spanning based on index or card ID
            // Assuming we want a specific layout for the 5 cards
            const colSpan = idx === 0 ? 'lg:col-span-12' : 'lg:col-span-6';
            
            return (
              <div key={card.id} className={`glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8 ${colSpan}`}>
                <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#00F0FF]/5 blur-3xl" />

                <div className="relative z-10">
                  {/* Badge */}
                  <div className={`mb-4 inline-flex items-center gap-2 rounded-md border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-[#00F0FF]`}>
                    <Shield className="h-3.5 w-3.5" />
                    <span>{card.badge}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {card.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#00F0FF]">
                    {card.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {card.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00F0FF]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                    <a
                      href={card.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#00F0FF] bg-[#00F0FF] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#05070C] shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:bg-white hover:border-white"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
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
