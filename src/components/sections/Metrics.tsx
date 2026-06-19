"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Metrics() {
  const { t } = useLanguage();
  
  const items = [
    { value: t("metrics.experience_val"), label: t("metrics.experience_lbl"), desc: t("metrics.experience_desc") },
    { value: t("metrics.platforms_val"), label: t("metrics.platforms_lbl"), desc: t("metrics.platforms_desc") },
    { value: t("metrics.clusters_val"), label: t("metrics.clusters_lbl"), desc: t("metrics.clusters_desc") },
    { value: t("metrics.compliance_val"), label: t("metrics.compliance_lbl"), desc: t("metrics.compliance_desc") },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 border-b border-rule">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-2 border-l border-rule pl-6 first:border-l-0 lg:first:border-l lg:first:pl-6"
          >
            <div className="font-display text-4xl md:text-5xl text-platin leading-none">
              {item.value}
            </div>
            <div className="font-mono-custom text-[11px] tracking-[0.15em] uppercase text-text font-medium metric-label">
              {item.label}
            </div>
            <div className="font-sans text-xs text-text-faint leading-normal">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
