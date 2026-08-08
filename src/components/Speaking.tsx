'use client';
import { useTranslations } from 'next-intl';

export default function Speaking() {
  const t = useTranslations('speaking');

  const events = [
    { id: 's1' },
    { id: 's2' },
    { id: 's3' },
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">{t('title')}</h2>
      
      <div className="space-y-6">
        {events.map((item) => (
          <div key={item.id} className="p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">{t(`${item.id}_title`)}</h3>
              <p className="text-white/60 text-sm">{t(`${item.id}_event`)}</p>
            </div>
            <div className="text-white/40 font-mono text-sm whitespace-nowrap">
              {t(`${item.id}_date`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
