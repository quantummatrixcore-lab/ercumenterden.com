"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const title = "I Build the Trust Layer for AI.";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Orb Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto"
        >
          Founder & Chief Architect of ALPAR AI, DecasHub & Agent-OS.
          <br className="hidden md:block" />
          Designing systems that hold AI accountable — at scale, by law, by design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://alparai.com"
            target="_blank"
            className="px-8 py-4 bg-brand hover:bg-brand/90 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2"
          >
            → View ALPAR AI
          </Link>
          <Link
            href="#manifesto"
            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2"
          >
            → Read My Manifesto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
