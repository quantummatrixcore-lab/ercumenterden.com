"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Nav() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("nav.portfolio"), href: pathname === "/" ? "#ecosystem" : "/#ecosystem" },
    { name: t("nav.insights"), href: "/insights" },
    { name: t("nav.investor"), href: "/investor" },
    { name: t("nav.contact"), href: "/contact" },
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

        {/* Switcher & Contact CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            className="font-mono-custom text-[10px] tracking-[0.14em] text-text-dim hover:text-platin px-2 py-1 transition-colors duration-150 border border-rule-strong rounded-[2px]"
          >
            {language === "tr" ? "EN" : "TR"}
          </button>

          <Link
            href="/contact"
            className="font-mono-custom text-[10px] tracking-[0.14em] uppercase border border-rule-strong bg-transparent text-platin hover:bg-platin hover:text-ink px-4 py-2 transition-all duration-200 rounded-[2px]"
          >
            {language === "tr" ? "Görüşelim →" : "Connect →"}
          </Link>
        </div>
      </div>
    </header>
  );
}
