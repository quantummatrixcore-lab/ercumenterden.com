"use client";

export default function Metrics() {
  const items = [
    { value: "18+", label: "Yıl Deneyim", desc: "Teknoloji & Girişimcilik" },
    { value: "5", label: "Aktif Platform", desc: "Venture Studio Ekosistemi" },
    { value: "3", label: "Doğrulama Girişimi", desc: "Karbon, Güvenlik, Risk" },
    { value: "2026", label: "EU Mevzuat Odağı", desc: "CBAM & AI Act Uyumlu" },
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
