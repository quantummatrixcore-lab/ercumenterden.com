'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Manifesto() {
  const t = useTranslations('manifesto');

  return (
    <section id="manifesto" className="py-32 px-6 max-w-4xl mx-auto text-center font-serif">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-sm font-sans font-bold tracking-[0.3em] uppercase text-white/50 mb-12">
          {t('title')}
        </h2>
        
        <div className="space-y-12 text-3xl md:text-5xl font-black leading-tight text-white/90">
          <p>{t('p1')}</p>
          <p className="text-white/60">{t('p2')}</p>
          <p>{t('p3')}</p>
          <p className="text-white/40">{t('p4')}</p>
        </div>
      </motion.div>
    </section>
  );
}
