'use client';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  
  const numericMatch = text.replace(/,/g, '').match(/^(\d+)(.*)$/);
  const isNumber = numericMatch !== null;
  const targetNumber = isNumber ? parseInt(numericMatch[1], 10) : 0;
  const suffix = isNumber ? numericMatch[2] : "";

  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);

  useEffect(() => {
    if (isInView && isNumber) {
      const controls = animate(count, targetNumber, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, isNumber, targetNumber, count]);

  if (!isNumber) return <span>{text}</span>;

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Signals() {
  const t = useTranslations('signals');

  const signals = [
    { id: 's1' },
    { id: 's2' },
    { id: 's3' }
  ];

  return (
    <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-12 text-center">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {signals.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6"
            >
              <div className="text-4xl md:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                <Counter text={t(item.id)} />
              </div>
              <div className="text-sm text-white/60 font-medium">
                {t(`${item.id}_label`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
