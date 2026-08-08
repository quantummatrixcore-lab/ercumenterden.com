"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif font-bold text-xl tracking-tighter">
          EE
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="https://alparai.com"
            target="_blank"
            className="text-sm font-medium hover:text-brand transition-colors"
          >
            ALPAR AI
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
