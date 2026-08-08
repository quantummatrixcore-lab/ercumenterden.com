'use client';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React from 'react';

function TiltCard({ item, t }: { item: { id: string }, t: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors relative overflow-hidden group h-full cursor-default"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors pointer-events-none" style={{ transform: "translateZ(0px)" }} />
        
        <div style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl font-bold mb-2">{t(`${item.id}_title`)}</h3>
          <span className="text-xs font-mono tracking-widest uppercase text-white/50 block mb-6">
            {t(`${item.id}_tag`)}
          </span>
          <p className="text-white/70 leading-relaxed">
            {t(`${item.id}_desc`)}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Ecosystem() {
  const t = useTranslations('ecosystem');

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">{t('title')}</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { id: 'alparai' },
          { id: 'decashub' },
          { id: 'agetos' }
        ].map((item) => (
          <TiltCard key={item.id} item={item} t={t} />
        ))}
      </div>
    </section>
  );
}
