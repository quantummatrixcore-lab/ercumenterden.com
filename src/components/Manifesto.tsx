"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-32 px-6 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="space-y-12 text-2xl md:text-4xl font-serif font-black leading-snug tracking-tight text-white"
        >
          <p className="text-brand">
            "AI will be the most consequential technology in human history."
          </p>
          <p>
            Most companies are racing to build it. Few are building the infrastructure to hold it accountable.
          </p>
          <p>
            I believe trust is not a feature — it is the foundation. An AI system that cannot be audited, contested, or governed is not a tool. It is a liability.
          </p>
          <p>
            ALPAR AI exists because accountability cannot wait for regulation. It must be built into the architecture — from day one.
          </p>
          <p className="text-brand-purple">
            This is my life's work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
