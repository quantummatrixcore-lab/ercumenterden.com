"use client";

export default function FounderStory() {
  return (
    <section id="founder-story" className="mx-auto max-w-7xl px-6 py-24 border-b border-rule relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        {/* Left Column: Heading and Context */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-platin">
            WHY ALPAR AI EXISTS
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-platin leading-[1.1] select-none">
            Bir Yapay Zeka Hayaleti.
          </h2>
          <p className="font-sans text-sm text-text-dim leading-relaxed">
            Yapay zeka sistemleri otonomlaştıkça, ürettikleri veri ve kararların denetlenmesi hayati bir zorunluluk haline geliyor. ALPAR AI, bu denetimi topluluk odaklı ve bağımsız hale getirmek için kuruldu.
          </p>
        </div>

        {/* Right Column: Story Text & Press */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 font-sans text-base md:text-lg text-platin-dim leading-relaxed font-light">
            <p className="border-l-2 border-purple-neon pl-6 italic">
              &ldquo;An AI told me it had incorporated my company. Made payments on my behalf. Then asked for my passport.
            </p>
            <p className="border-l-2 border-purple-neon pl-6 italic">
              All of it was fabricated.
            </p>
            <p className="border-l-2 border-purple-neon pl-6 italic">
              When I tried to report it, I found no independent watchdog. No community record. No way to warn the next person.
            </p>
            <p className="border-l-2 border-purple-neon pl-6 italic font-normal text-platin">
              So I built one.
            </p>
            <p className="border-l-2 border-purple-neon pl-6 italic text-text-dim text-sm">
              ALPAR AI launched in June 2026 as the world&apos;s first community-governed AI accountability platform.&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-rule">
            <span className="font-mono-custom text-[9px] tracking-wider text-text-faint uppercase block mb-2">
              BASIN YANSIMALARI // PRESS
            </span>
            <a
              href="https://turkinform.com.tr/turk-girisimcinin-yasadigi-grok-skandali-kisisel-verilerimiz-risk-altinda-mi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-custom text-[11px] tracking-wider text-cyan-neon hover:text-white transition-colors duration-200"
            >
              Featured in TürkInform &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
