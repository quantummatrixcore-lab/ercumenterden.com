"use client";

import { useLanguage } from "@/context/LanguageContext";
import VerificationSimulator from "./VerificationSimulator";

interface Step {
  code: string;
  title: string;
  description: string;
  details: string[];
}

export default function Methodology() {
  const { t } = useLanguage();
  const steps: Step[] = t("methodology.steps") || [];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 border-b border-rule">
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            {t("methodology.eyebrow")}
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-platin leading-[1.1]">
            {t("methodology.title")}
          </h2>
          <p className="font-sans text-sm text-text-dim leading-relaxed">
            {t("methodology.description")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-surface-1 border border-rule p-8 rounded-lg flex flex-col justify-between space-y-8 relative hover:border-rule-strong transition-colors"
            >
              <div className="space-y-4">
                {/* Step Code */}
                <div className="font-mono-custom text-[9px] tracking-[0.25em] text-platin-dim">
                  {step.code}
                </div>
                
                {/* Step Title */}
                <h3 className="font-display text-2xl text-platin">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-xs text-text-dim leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Technical Details List */}
              <div className="border-t border-rule/50 pt-4 space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 font-mono-custom text-[9px] tracking-wider text-text-faint uppercase">
                    <span className="text-platin">▪</span> {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Terminal Simulator */}
        <VerificationSimulator />
      </div>
    </section>
  );
}
