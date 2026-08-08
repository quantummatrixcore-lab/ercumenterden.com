'use client';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-32 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">{t('title')}</h2>
      
      <form action="mailto:ercument.erden@alparai.com" method="POST" encType="text/plain" className="flex flex-col gap-6 text-left mb-12">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-white/60">Name</label>
          <input type="text" id="name" name="name" required placeholder={t('namePlaceholder')} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-white/60">Email</label>
          <input type="email" id="email" name="email" required placeholder={t('emailPlaceholder')} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-white/60">Message</label>
          <textarea id="message" name="message" required rows={4} placeholder={t('messagePlaceholder')} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"></textarea>
        </div>
        <button type="submit" className="mt-2 px-8 py-4 rounded-lg bg-white text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
          {t('sendButton')}
        </button>
      </form>
    </section>
  );
}
