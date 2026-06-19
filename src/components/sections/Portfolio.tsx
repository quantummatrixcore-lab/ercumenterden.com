"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();

  const trustLayer: Project[] = [
    {
      slug: "carbon-eco-market",
      name: "CarbonEcoMarket",
      badge: t("portfolio.projects.carbon.badge"),
      status: t("portfolio.projects.carbon.status"),
      description: t("portfolio.projects.carbon.desc"),
      techLabel: "INFRA: DECENTRALIZED MRV",
      tags: ["Carbon Credits", "EU CBAM", "Satellite Data", "Web3"],
    },
    {
      slug: "alpar-ai",
      name: "AlparAI",
      badge: t("portfolio.projects.alpar.badge"),
      status: t("portfolio.projects.alpar.status"),
      description: t("portfolio.projects.alpar.desc"),
      techLabel: "API: AI SAFETY PLATFORM",
      tags: ["LLM Guardrails", "EU AI Act", "Realtime Audits"],
    },
    {
      slug: "decas-hub",
      name: "DecasHub",
      badge: t("portfolio.projects.decas.badge"),
      status: t("portfolio.projects.decas.status"),
      description: t("portfolio.projects.decas.desc"),
      techLabel: "CORE: STARTUP SIMULATOR",
      tags: ["Multi-Agent OS", "Risk Modeling", "Agentic AI"],
    },
  ];

  const operationsLayer: Project[] = [
    {
      slug: "lionexia",
      name: "Lionexia",
      badge: t("portfolio.projects.lionexia.badge"),
      status: t("portfolio.projects.lionexia.status"),
      description: t("portfolio.projects.lionexia.desc"),
      techLabel: "ENGINE: OPERATIONS & SAAS",
      tags: ["Cloud Infra", "SaaS Core", "DevOps Pipeline", "NextJS"],
    },
    {
      slug: "fresh-rider",
      name: "FreshRider",
      badge: t("portfolio.projects.fresh.badge"),
      status: t("portfolio.projects.fresh.status"),
      description: t("portfolio.projects.fresh.desc"),
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
          <span className="font-mono-custom text-[10px] tracking-[0.15em] text-text-faint">
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
            {t("portfolio.eyebrow")}
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-platin leading-[1.1]">
            {t("portfolio.title")}
          </h2>
          <p className="font-sans text-sm text-text-dim leading-relaxed">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Cluster 1: Verification & Trust Layer */}
        <div className="space-y-6">
          <div className="border-b border-rule pb-2">
            <h3 className="font-mono-custom text-xs tracking-[0.18em] uppercase text-platin font-medium">
              {t("portfolio.cluster_1")}
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
              {t("portfolio.cluster_2")}
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
