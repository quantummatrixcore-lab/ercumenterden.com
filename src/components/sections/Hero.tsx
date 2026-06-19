"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Typography and Philosophy */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            {t("hero.eyebrow")}
          </div>

          <h1 className="font-display text-[48px] md:text-[68px] leading-[0.95] text-platin tracking-tight hero-name">
            {t("hero.title")}
          </h1>

          <div className="max-w-xl space-y-4">
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-text-dim hero-thesis">
              {t("hero.description")}
            </p>
            <p className="font-display text-[18px] md:text-[22px] leading-relaxed text-platin-dim manifesto-quote">
              {t("hero.quote")}
            </p>
          </div>

          {/* Action Callouts */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#ecosystem"
              className="font-mono-custom text-[10px] tracking-[0.14em] uppercase bg-platin text-ink hover:opacity-85 px-6 py-3 transition-opacity duration-150 rounded-[2px] font-medium"
            >
              {t("hero.cta_discover")}
            </Link>
            <Link
              href="/contact"
              className="font-mono-custom text-[10px] tracking-[0.14em] uppercase border border-rule-strong bg-transparent text-platin hover:border-platin px-6 py-3 transition-colors duration-150 rounded-[2px]"
            >
              {t("hero.cta_contact")}
            </Link>
          </div>
        </div>

        {/* Right Side: Interactive Ring Animation */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-[280px] h-[280px] flex items-center justify-center border border-rule/50 rounded-full">
            <svg
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative select-none"
            >
              {/* Outer Rotating Ring */}
              <g className="animate-spin-cw origin-center">
                <circle
                  cx="140"
                  cy="140"
                  r="100"
                  stroke="var(--rule-strong)"
                  strokeWidth="1"
                  strokeDasharray="10 15"
                />
                {/* 5 nodes representing platforms */}
                <circle cx="240" cy="140" r="4" fill="var(--platin)" />
                <circle cx="170.9" cy="235.1" r="4" fill="var(--platin)" />
                <circle cx="59.1" cy="198.8" r="4" fill="var(--platin)" />
                <circle cx="59.1" cy="81.2" r="4" fill="var(--platin)" />
                <circle cx="170.9" cy="44.9" r="4" fill="var(--platin)" />
              </g>

              {/* Inner Rotating Ring */}
              <g className="animate-spin-ccw origin-center">
                <circle
                  cx="140"
                  cy="140"
                  r="70"
                  stroke="var(--rule)"
                  strokeWidth="0.75"
                  strokeDasharray="4 8"
                />
                <circle cx="140" cy="70" r="2.5" fill="var(--platin-dim)" />
                <circle cx="70" cy="140" r="2.5" fill="var(--platin-dim)" />
                <circle cx="140" cy="210" r="2.5" fill="var(--platin-dim)" />
                <circle cx="210" cy="140" r="2.5" fill="var(--platin-dim)" />
              </g>
            </svg>

            {/* Static Centered Metrics */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="font-display text-[42px] leading-none text-platin">5</span>
              <span className="font-mono-custom text-[9px] tracking-[0.2em] uppercase text-text-faint mt-1">
                {t("hero.metrics_label")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
