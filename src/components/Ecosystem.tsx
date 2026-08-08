'use client';
import { useTranslations } from 'next-intl';

export default function Ecosystem() {
  const t = useTranslations('ecosystem');

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">{t('title')}</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { id: 'alparai' },
          { id: 'decashub' },
          { id: 'agetos' }
        ].map((item) => (
          <div key={item.id} className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            
            <h3 className="text-2xl font-bold mb-2">{t(`${item.id}_title`)}</h3>
            <span className="text-xs font-mono tracking-widest uppercase text-white/50 block mb-6">
              {t(`${item.id}_tag`)}
            </span>
            <p className="text-white/70 leading-relaxed">
              {t(`${item.id}_desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
