'use client';

import React from 'react';
import { content, Language } from '@/data/content';
import { Newspaper, ExternalLink, Quote, CheckCircle, Clock, UserCheck, ShieldCheck } from 'lucide-react';

interface PressSectionProps {
  lang: Language;
}

export const PressSection: React.FC<PressSectionProps> = ({ lang }) => {
  const t = content[lang].press;

  return (
    <section id="press" className="relative border-b border-white/10 bg-[#05070C] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17] px-3.5 py-1 text-xs font-mono font-medium text-[#00F0FF]">
            <Newspaper className="h-3.5 w-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* National Press Trust Banner */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-[#00F0FF]/20 bg-gradient-to-r from-[#00F0FF]/10 via-[#0A0E17] to-[#05070C] p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#00F0FF]">
                    {lang === 'tr' ? 'ULUSAL MEDYA DOĞRULAMASI' : 'NATIONAL MEDIA VERIFICATION'}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#06D6A0]" />
                  <span className="font-mono text-[11px] text-zinc-400">
                    TÜRKINFORM PRESS
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {lang === 'tr'
                    ? 'Yapay zeka etiği, kurumsal kimlik manipülasyonu ve C2PA filigran mimarisi üzerine araştırmacı gazetecilik dosyaları.'
                    : 'Independent investigative dossiers on AI ethics, corporate identity manipulation, and C2PA watermark architectures.'}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-[#05070C]/80 px-4 py-2.5 font-mono text-xs text-zinc-300">
              <span className="text-[#06D6A0]">●</span>
              <span>{lang === 'tr' ? '2 Doğrulanmış Dosya' : '2 Verified Investigations'}</span>
            </div>
          </div>
        </div>

        {/* Press Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {t.articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 transition-all hover:border-[#00F0FF]/50 hover:shadow-[0_12px_40px_-10px_rgba(0,240,255,0.15)]"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-extrabold tracking-widest text-[#00F0FF]">
                      {article.publication}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="font-mono text-xs text-zinc-400">
                      {article.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-[#06D6A0]/30 bg-[#06D6A0]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#06D6A0]">
                    <CheckCircle className="h-3 w-3" />
                    <span>{article.status}</span>
                  </div>
                </div>

                {/* Journalist & Read Time Row */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <UserCheck className="h-3.5 w-3.5 text-[#00F0FF]" />
                    <span>
                      {lang === 'tr' ? 'Muhabir:' : 'Journalist:'}{' '}
                      <span className="text-white font-medium">{article.journalist}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Clock className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  {article.category}
                </div>

                {/* Title */}
                <h3 className="mt-2 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#00F0FF] sm:text-2xl">
                  {article.title}
                </h3>

                {/* Excerpt / Quote */}
                <div className="mt-6 rounded-xl border border-white/10 bg-[#05070C]/90 p-4">
                  <div className="flex items-start gap-2.5">
                    <Quote className="mt-1 h-4 w-4 shrink-0 text-[#00F0FF]" />
                    <p className="text-xs italic leading-relaxed text-zinc-300 sm:text-sm">
                      {article.quote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#00F0FF] group-hover:text-white transition-colors">
                  <span>
                    {lang === 'tr'
                      ? 'TÜRKINFORM Üzerinde Orijinal Haberi Oku'
                      : 'Read Full Investigation on TÜRKINFORM'}
                  </span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
