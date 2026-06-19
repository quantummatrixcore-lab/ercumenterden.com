"use client";

import Link from "next/link";

interface Project {
  slug: string;
  name: string;
  badge: string;
  status: string;
  description: string;
  techLabel: string;
  tags: string[];
}

export default function Portfolio() {
  const trustLayer: Project[] = [
    {
      slug: "carbon-eco-market",
      name: "CarbonEcoMarket",
      badge: "Doğrulama",
      status: "EU CBAM 2026 Uyumlu",
      description: "TİM (Türkiye İhracatçılar Meclisi) Pilot Ortaklığı & 14 Büyük İhracatçı LOI Anlaşması. Blockchain ve uydu verisi tabanlı dMRV teknolojisi ile karbon emisyonlarının dijital olarak ölçülmesi ve doğrulanması altyapısı.",
      techLabel: "INFRA: DECENTRALIZED MRV",
      tags: ["Carbon Credits", "EU CBAM", "Satellite Data", "Web3"],
    },
    {
      slug: "alpar-ai",
      name: "AlparAI",
      badge: "Güvenlik",
      status: "Stripe for AI Safety",
      description: "5 Milyon+ API Request Denetimi & FinTech Sektöründe 3 Büyük Pilot Entegrasyon. Yapay zeka modellerinin davranışlarını izleyen, EU AI Act ve KVKK uyumlu anlık güven skoru API katmanı.",
      techLabel: "API: AI SAFETY PLATFORM",
      tags: ["LLM Guardrails", "EU AI Act", "KVKK Uyum", "Realtime Audits"],
    },
    {
      slug: "decas-hub",
      name: "DecasHub",
      badge: "Risk Simülasyonu",
      status: "12 Ajanlı Stres Testi",
      description: "50+ Girişim Simülasyon Test Raporu & Yatırım Komiteleri Kabulü. Yeni girişimlerin pazar, operasyonel ve finansal risklerini test eden 12 otonom ajanlı stres testi simülatörü.",
      techLabel: "CORE: STARTUP SIMULATOR",
      tags: ["Multi-Agent OS", "Risk Modeling", "Market Stress Test", "Agentic AI"],
    },
  ];

  const operationsLayer: Project[] = [
    {
      slug: "lionexia",
      name: "Lionexia",
      badge: "Altyapı",
      status: "Dijital Dönüşüm Motoru",
      description: "Tüm ekosistem girişimlerinin bulut altyapısını, otonom operasyonlarını ve yazılım geliştirme süreçlerini hızlandıran dijital dönüşüm omurgası.",
      techLabel: "ENGINE: OPERATIONS & SAAS",
      tags: ["Cloud Infra", "SaaS Core", "DevOps Pipeline", "NextJS"],
    },
    {
      slug: "fresh-rider",
      name: "FreshRider",
      badge: "Fiziksel IoT",
      status: "Akıllı Kask Otomatı",
      description: "Mikromobilite kullanıcıları için akıllı IoT donanım entegrasyonu sunan ve fiziksel temizlik & sterilizasyon işlemlerini doğrulayan otomat sistemi.",
      techLabel: "HARDWARE: IoT AUTOMATION",
      tags: ["IoT Hardware", "Micro-Mobility", "CleanTech", "Automation"],
    },
  ];

  const renderCard = (project: Project, isFullWidth = false) => (
    <Link
      href={`/ecosystem/${project.slug}`}
      key={project.slug}
      className={`elite-card flex flex-col justify-between h-full select-none cursor-pointer group ${
        isFullWidth ? "md:col-span-2" : ""
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono-custom text-[9px] tracking-[0.16em] uppercase px-2 py-0.5 border border-rule bg-surface-3 text-platin-dim">
            {project.badge}
          </span>
          <span className="font-mono-custom text-[10px] tracking-[0.1em] text-text-faint">
            {project.status}
          </span>
        </div>

        {/* Platform Name */}
        <h3 className="font-display text-2xl md:text-3xl text-platin mb-3 p-card-name">
          {project.name}
        </h3>

        {/* Tech Label */}
        <div className="font-mono-custom text-[10px] tracking-[0.15em] text-platin-dim mb-3">
          {project.techLabel}
        </div>

        {/* Description */}
        <p className="font-sans text-[14px] leading-relaxed text-text-dim mb-6 card-body">
          {project.description}
        </p>
      </div>

      {/* Footer Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-rule/50">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-custom text-[9px] tracking-[0.12em] text-text-faint uppercase bg-ink/40 px-2 py-0.5 border border-rule/30 rounded-[1px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );

  return (
    <section id="ecosystem" className="mx-auto max-w-7xl px-6 py-20 border-b border-rule">
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            Venture Studio Portfolio
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-platin leading-[1.1]">
            Platform Modülleri
          </h2>
          <p className="font-sans text-sm text-text-dim leading-relaxed">
            Doğrulama ve altyapı odağında kurgulanmış, birbirini besleyen ve küresel standartlara entegre çalışan girişim kümeleri.
          </p>
        </div>

        {/* Cluster 1: Verification & Trust Layer */}
        <div className="space-y-6">
          <div className="border-b border-rule pb-2">
            <h3 className="font-mono-custom text-xs tracking-[0.18em] uppercase text-platin font-medium">
              01 — Doğrulama & Güven Katmanı
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderCard(trustLayer[0])}
            {renderCard(trustLayer[1])}
            {renderCard(trustLayer[2], true)}
          </div>
        </div>

        {/* Cluster 2: Operations & Infrastructure Layer */}
        <div className="space-y-6">
          <div className="border-b border-rule pb-2">
            <h3 className="font-mono-custom text-xs tracking-[0.18em] uppercase text-platin font-medium">
              02 — Operasyon & Altyapı Katmanı
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderCard(operationsLayer[0])}
            {renderCard(operationsLayer[1])}
          </div>
        </div>
      </div>
    </section>
  );
}
