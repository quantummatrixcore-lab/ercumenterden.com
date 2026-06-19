"use client";

import { useLanguage } from "@/context/LanguageContext";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export default function Manifesto() {
  const { t } = useLanguage();
  const events: TimelineEvent[] = t("manifesto.events") || [];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 border-b border-rule">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Manifesto Quote & Text */}
        <div className="lg:col-span-6 space-y-6">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            {t("manifesto.eyebrow")}
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-platin leading-[1.1] manifesto-quote">
            {t("manifesto.title")}
          </h2>
          <div className="space-y-4 font-sans text-sm text-text-dim leading-relaxed">
            <p>
              {t("manifesto.desc_1")}
            </p>
            <p>
              {t("manifesto.desc_2")}
            </p>
            <p className="font-display text-[15px] italic text-platin-dim mt-4">
              {t("manifesto.core_question")}
            </p>
          </div>
        </div>

        {/* Right Column: Sleek Timeline */}
        <div className="lg:col-span-6 space-y-8">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            {t("manifesto.timeline_eyebrow")}
          </div>

          <div className="relative border-l border-rule pl-8 ml-2 space-y-8 py-2">
            {events.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] top-1.5 h-4.5 w-4.5 rounded-full border border-rule-strong bg-ink flex items-center justify-center transition-colors group-hover:border-platin duration-200">
                  <div className="h-1.5 w-1.5 bg-platin-dim rounded-full group-hover:bg-platin transition-colors" />
                </div>

                {/* Event Content */}
                <div className="space-y-2">
                  <div className="font-display text-2xl text-platin leading-none">
                    {event.year}
                  </div>
                  <h4 className="font-mono-custom text-xs tracking-[0.1em] uppercase text-text">
                    {event.title}
                  </h4>
                  <p className="font-sans text-xs leading-relaxed text-text-faint">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
