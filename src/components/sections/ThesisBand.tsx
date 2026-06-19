"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ThesisBand() {
  const { t } = useLanguage();
  const texts = Array(8).fill(t("thesis_band.text"));

  return (
    <section className="w-full overflow-hidden border-y border-rule py-6 bg-surface-1/30">
      <div className="flex w-max">
        {/* First marquee list */}
        <div className="flex gap-16 px-8 animate-marquee whitespace-nowrap">
          {texts.map((text, idx) => (
            <div key={`t1-${idx}`} className="flex items-center gap-16">
              <span className="font-display text-xl md:text-3xl text-platin-dim tracking-wide select-none">
                {text}
              </span>
              <span className="text-platin-ghost font-mono-custom text-xs">◆</span>
            </div>
          ))}
        </div>
        {/* Second marquee list to ensure seamless looping */}
        <div className="flex gap-16 px-8 animate-marquee whitespace-nowrap" aria-hidden="true">
          {texts.map((text, idx) => (
            <div key={`t2-${idx}`} className="flex items-center gap-16">
              <span className="font-display text-xl md:text-3xl text-platin-dim tracking-wide select-none">
                {text}
              </span>
              <span className="text-platin-ghost font-mono-custom text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
