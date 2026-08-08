"use client";

import { motion } from "framer-motion";

const SIGNALS = [
  { label: "Community", value: "16.000+", sub: "LinkedIn Followers" },
  { label: "Compliance", value: "Article 73", sub: "EU AI Act Ready" },
  { label: "Open Source", value: "AGPL-3.0", sub: "License" },
  { label: "Infrastructure", value: "Enterprise", sub: "Resend, Supabase, Vercel PRO" }
];

export default function Signals() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {SIGNALS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-sm font-medium text-white/50 mb-2 uppercase tracking-wider">{stat.label}</div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-brand mb-1">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
