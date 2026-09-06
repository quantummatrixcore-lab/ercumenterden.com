'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/data/content';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EcosystemBento } from '@/components/EcosystemBento';
import { CrucibleTimeline } from '@/components/CrucibleTimeline';
import { PressSection } from '@/components/PressSection';
import { ManifestoSection } from '@/components/ManifestoSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

interface PortfolioPageProps {
  initialLang?: Language;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ initialLang = 'en' }) => {
  const [lang, setLang] = useState<Language>(initialLang);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'tr' || urlLang === 'en') {
        setLang(urlLang);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ee_lang', newLang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <div className="min-h-screen bg-[#05070C] text-[#F8FAFC]">
      <Navbar lang={lang} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero lang={lang} />
        <EcosystemBento lang={lang} />
        <CrucibleTimeline lang={lang} />
        <PressSection lang={lang} />
        <ManifestoSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};
