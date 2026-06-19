"use client";

import React from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetails {
  name: string;
  badge: string;
  status: string;
  techLabel: string;
  tagline: string;
  problem: string;
  solution: string;
  socialProof: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
}

export default function EcosystemClient({ slug }: { slug: string }) {
  const { t } = useLanguage();

  const ecosystemDb = t("ecosystem.db") || {};
  const project = ecosystemDb[slug] as ProjectDetails;

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-20">
        {/* Back Button */}
        <Link
          href="/#ecosystem"
          className="font-mono-custom text-[10px] tracking-[0.15em] uppercase text-text-dim hover:text-platin transition-colors mb-8 inline-block"
        >
          {t("ecosystem.back")}
        </Link>

        {/* Title Block */}
        <div className="space-y-4 border-b border-rule pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono-custom text-[9px] tracking-[0.16em] uppercase px-2 py-0.5 border border-rule bg-surface-3 text-platin-dim">
              {project.badge}
            </span>
            <span className="font-mono-custom text-[10px] tracking-[0.15em] text-text-faint">
              {project.status}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-platin p-card-name leading-none">
            {project.name}
          </h1>
          <div className="font-mono-custom text-[11px] tracking-[0.18em] text-platin-dim">
            {project.techLabel}
          </div>
          <p className="font-display text-lg md:text-xl text-text-dim italic leading-relaxed pt-2">
            &ldquo;{project.tagline}&rdquo;
          </p>
        </div>

        {/* Project Description (Problem & Solution) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
          <div className="space-y-3">
            <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
              {t("ecosystem.problem")}
            </h3>
            <p className="font-sans text-sm text-text-dim leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
              {t("ecosystem.solution")}
            </h3>
            <p className="font-sans text-sm text-text-dim leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Social Proof & Partnerships */}
        {project.socialProof && (
          <div className="border-t border-rule py-8 space-y-3">
            <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
              {t("ecosystem.social")}
            </h3>
            <p className="font-sans text-sm text-text-dim leading-relaxed italic border-l-2 border-platin pl-4 bg-surface-1/30 py-3 pr-4 rounded-r-[2px]">
              {project.socialProof}
            </p>
          </div>
        )}

        {/* Verification Metrics Panel */}
        <div className="bg-surface-1 border border-rule p-8 rounded-lg mb-12">
          <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin mb-6 border-b border-rule/50 pb-2">
            {t("ecosystem.metrics_title")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics && project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-display text-3xl text-platin leading-none">
                  {metric.value}
                </div>
                <div className="font-mono-custom text-[9px] tracking-[0.12em] uppercase text-text-faint">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            {t("ecosystem.tech_title")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack && project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono-custom text-[10px] tracking-[0.12em] text-text-dim uppercase bg-surface-2 px-3 py-1 border border-rule-strong rounded-[2px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
