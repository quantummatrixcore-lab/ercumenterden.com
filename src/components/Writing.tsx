'use client';
import { useTranslations } from 'next-intl';

export default function Writing() {
  const t = useTranslations('writing');

  const articles = [
    { id: 'w1', link: '#' },
    { id: 'w2', link: '#' },
    { id: 'w3', link: '#' },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">{t('title')}</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((item) => (
          <div key={item.id} className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-white/50 mb-4 block">
                {t(`${item.id}_date`)}
              </span>
              <h3 className="text-xl font-bold mb-4">{t(`${item.id}_title`)}</h3>
              <p className="text-white/70 text-sm mb-8">
                {t(`${item.id}_desc`)}
              </p>
            </div>
            <a href={item.link} className="text-sm font-semibold text-white/90 hover:text-white transition-colors">
              {t('read_more')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
