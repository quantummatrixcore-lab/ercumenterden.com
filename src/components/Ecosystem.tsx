"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CARDS = [
  {
    title: "The Trust Infrastructure",
    company: "ALPAR AI",
    description: "World's first independent AI incident registry. EU AI Act Article 73 compliant. Zero-knowledge logging. Trust Badges for AI providers.",
    href: "https://alparai.com"
  },
  {
    title: "The Autonomous Hardware Cluster",
    company: "DecasHub",
    description: "A venture studio for autonomous physical systems. AI-coordinated water, carbon, logistics, and energy assets. Governed by Agent-OS.",
    href: "https://decashub.com"
  },
  {
    title: "The Operating System for AI Agents",
    company: "Agent-OS",
    description: "Open-source autonomous agent runtime. Manages multi-agent swarms, memory, identity, and execution. The backbone of the holding.",
    href: "https://alparai.online"
  }
];

export default function Ecosystem() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CARDS.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              target="_blank"
              className="group block relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-brand/50 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif font-bold text-brand">{card.company}</h3>
                  <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-medium text-white mb-3">{card.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
