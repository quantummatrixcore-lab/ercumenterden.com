'use client';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">{t('title')}</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a href="mailto:hello@alparai.com" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all font-medium">
          {t('email')}
        </a>
        <a href="https://linkedin.com/in/ercumenterden" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all font-medium">
          {t('linkedin')}
        </a>
        <a href="https://github.com/quantummatrixcore-lab" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all font-medium">
          {t('github')}
        </a>
      </div>
    </section>
  );
}
