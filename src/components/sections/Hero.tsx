"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36 overflow-hidden border-b border-rule">
      {/* Background Subtle Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--surface-2)_0%,transparent_70%)] opacity-40 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Side: Typography and Philosophy */}
        <div className="lg:col-span-8 flex flex-col space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-platin"
          >
            VERIFICATION INFRASTRUCTURE ARCHITECT
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[48px] md:text-[72px] leading-[0.9] text-platin tracking-tight select-none"
          >
            Ölçülemeyen şeye <br />
            <span className="text-text-dim">güvenilmez.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl space-y-6"
          >
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] text-text-dim">
              Yapay zeka otonomisi ve dijitalleşmenin yön verdiği yeni nesil ekonomilerde güven, soyut bir vaat değil; matematiksel ve ölçülebilir bir altyapı olmak zorundadır. Karbon emisyonlarından yapay zeka güvenliğine kadar dijital dünyanın doğrulama katmanlarını inşa ediyorum.
            </p>
            
            {/* Core Philosophical Filter Box */}
            <div className="border-l border-rule-strong pl-6 py-2 space-y-2">
              <span className="font-mono-custom text-[9px] tracking-widest text-text-faint uppercase block">
                Öncelikli Felsefi Süzgeç
              </span>
              <p className="font-display text-[20px] md:text-[24px] leading-relaxed text-platin-dim">
                &ldquo;Bu dünyayı daha iyi bir yer yapıyor mu?&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#ecosystem"
              className="font-mono-custom text-[10px] tracking-[0.18em] uppercase bg-platin text-ink hover:bg-white hover:tracking-[0.22em] px-8 py-3.5 transition-all duration-300 rounded-[2px] font-medium"
            >
              EKOSİSTEMİ KEŞFET
            </a>
            <a
              href="#contact"
              className="font-mono-custom text-[10px] tracking-[0.18em] uppercase border border-rule-strong bg-transparent text-platin hover:border-platin px-8 py-3.5 transition-all duration-300 rounded-[2px]"
            >
              İLETİŞİME GEÇ
            </a>
          </motion.div>
        </div>

        {/* Right Side: Dynamic Vector Animation */}
        <div className="lg:col-span-4 flex justify-center relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[300px] h-[300px] flex items-center justify-center"
          >
            {/* Cyber background lines */}
            <div className="absolute inset-0 border border-rule/50 rounded-full animate-pulse-slow" />
            <div className="absolute w-[240px] h-[240px] border border-rule-strong/40 rounded-full" />
            <div className="absolute w-[180px] h-[180px] border border-rule/30 rounded-full border-dashed" />
            
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative select-none"
            >
              {/* Outer Rotating Ring */}
              <g className="animate-spin-cw origin-center">
                <circle cx="150" cy="150" r="140" stroke="var(--platin)" strokeWidth="0.5" strokeDasharray="10 30" opacity="0.3" />
                <circle cx="150" cy="150" r="140" stroke="var(--platin)" strokeWidth="1" strokeDasharray="1 150" opacity="0.8" />
              </g>

              {/* Inner Counter-Rotating Ring */}
              <g className="animate-spin-ccw origin-center">
                <circle cx="150" cy="150" r="110" stroke="var(--platin)" strokeWidth="0.5" strokeDasharray="40 10 5 10" opacity="0.2" />
                <path d="M 150 40 A 110 110 0 0 1 260 150" stroke="var(--platin)" strokeWidth="1.5" opacity="0.6" />
                <path d="M 150 260 A 110 110 0 0 1 40 150" stroke="var(--platin)" strokeWidth="1.5" opacity="0.6" />
              </g>

              {/* Core Symbolism */}
              <circle cx="150" cy="150" r="8" fill="var(--platin)" className="animate-pulse-slow" />
            </svg>
            
            {/* Real-time system data indicator */}
            <div className="absolute bottom-[-15px] font-mono-custom text-[8px] tracking-[0.2em] text-text-faint uppercase text-center w-full">
              LATENCY PROOF: 0.00021s // EVM VERIFIED
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
