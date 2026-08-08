'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    router.replace(pathname, { locale: locale === 'en' ? 'tr' : 'en' });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/5 py-4 px-6 flex justify-between items-center">
      <div className="font-bold text-lg tracking-tight">
        {t('alparai')}
      </div>
      <div className="flex gap-6 items-center">
        <a href="#manifesto" className="text-sm font-medium hover:text-white/80 transition-colors">{t('manifesto')}</a>
        <a href="#contact" className="text-sm font-medium hover:text-white/80 transition-colors">{t('contact')}</a>
        <button onClick={toggleLanguage} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all">
          {t('switchLang')}
        </button>
      </div>
    </nav>
  );
}
