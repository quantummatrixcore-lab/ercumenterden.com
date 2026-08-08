"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { year: "2024", title: "Agent-OS v1", description: "İlk otonom ajan çalışma zamanı" },
  { year: "2025", title: "ALPAR AI", description: "İlk bağımsız AI olay sicili" },
  { year: "2026", title: "EU AI Act Article 73 Uyumluluk Altyapısı", description: "Canlıya Geçiş" },
  { year: "2026", title: "DecasHub", description: "Otonom fiziksel sistem venture studio'su" }
];

export default function WorkTimeline() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center md:text-left">Selected Work</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-12 pl-8 relative"
            >
              <div className="absolute w-3 h-3 bg-brand rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <span className="text-brand font-mono font-bold text-xl">{item.year}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
