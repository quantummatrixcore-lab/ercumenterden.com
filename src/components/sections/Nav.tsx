"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Ekosistem", href: pathname === "/" ? "#ecosystem" : "/#ecosystem" },
    { name: "İçgörüler", href: "/insights" },
    { name: "Yatırımcı Odası", href: "/investor" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rule bg-ink/75 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide text-platin select-none">
          EE
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono-custom text-[11px] tracking-[0.16em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-dim hover:text-platin transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact CTA */}
        <Link
          href="/contact"
          className="font-mono-custom text-[10px] tracking-[0.14em] uppercase border border-rule-strong bg-transparent text-platin hover:bg-platin hover:text-ink px-4 py-2 transition-all duration-200 rounded-[2px]"
        >
          Görüşelim →
        </Link>
      </div>
    </header>
  );
}
