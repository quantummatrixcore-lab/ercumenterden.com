"use client";

import Link from "next/link";

export default function Nav() {

  const navLinks = [
    { name: "EKOSİSTEM", href: "#ecosystem" },
    { name: "MANİFESTO", href: "#manifesto" },
    { name: "İLETİŞİM", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rule bg-ink/75 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col select-none group">
          <span className="font-display text-2xl tracking-wide text-platin group-hover:text-cyan-neon transition-colors duration-200">
            Ercüment Erden
          </span>
          <span className="font-mono-custom text-[8px] tracking-[0.25em] uppercase text-text-faint">
            Venture Studio Dashboard
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 font-mono-custom text-[10px] tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-dim hover:text-platin hover:tracking-[0.25em] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Live Engine Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-rule-strong bg-surface-2 px-3 py-1.5 rounded-[2px] font-mono-custom text-[9px] tracking-wider text-emerald-neon glow-emerald">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-neon"></span>
            </span>
            <span>SYSTEM: 100% OPERATIONAL</span>
          </div>
        </div>
      </div>
    </header>
  );
}
