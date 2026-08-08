'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <span className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium backdrop-blur-md">
          {t('badge')}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          {t('h1')}
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
          {t('sub')}
        </p>

        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
            {t('cta1')}
          </button>
          <button className="px-8 py-4 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/5 backdrop-blur-md">
            {t('cta2')}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
