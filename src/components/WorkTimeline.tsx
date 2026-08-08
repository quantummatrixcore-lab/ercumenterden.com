'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function WorkTimeline() {
  const t = useTranslations('timeline');

  const items = [
    { id: 'e4' },
    { id: 'e3' },
    { id: 'e2' },
    { id: 'e1' }
  ];

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-16 text-center"
      >
        {t('title')}
      </motion.h2>
      
      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
        
        <div className="space-y-16">
          {items.map((item, i) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              
              <div className="absolute left-[-21px] md:left-1/2 top-1 md:top-1/2 w-3 h-3 rounded-full bg-white md:-translate-x-1/2 md:-translate-y-1/2 animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              
              <div className="ml-8 md:ml-0 md:w-1/2 px-8">
                <span className="text-white/50 text-sm font-mono mb-2 block">
                  {t(`${item.id}_year`)}
                </span>
                <h3 className="text-xl font-bold mb-2">{t(`${item.id}_title`)}</h3>
                <p className="text-white/70">{t(`${item.id}_desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
