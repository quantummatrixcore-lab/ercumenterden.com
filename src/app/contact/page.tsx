"use client";

import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <div className="space-y-4 border-b border-rule pb-8 mb-12">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            İletişim & Koordinasyon
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-platin leading-none">
            Görüşelim
          </h1>
          <p className="font-sans text-sm text-text-dim max-w-2xl leading-relaxed">
            Doğrulama altyapıları, ortaklık teklifleri, yatırım olanakları veya araştırma davetleri için doğrudan aşağıdaki kanallardan ulaşabilirsiniz.
          </p>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <div className="bg-surface-1 border border-rule p-6 rounded-lg space-y-3">
            <div className="font-mono-custom text-[9px] tracking-[0.2em] uppercase text-platin-dim">
              01 — Kurumsal İletişim
            </div>
            <h3 className="font-display text-xl text-platin">
              E-Posta
            </h3>
            <p className="font-sans text-xs text-text-faint">
              Tüm kurumsal yazışmalar, case study ortaklıkları ve bilgi talepleri için:
            </p>
            <a
              href="mailto:ercument@ercumenterden.com"
              className="font-mono-custom text-sm text-platin hover:underline block pt-2"
            >
              ercument@ercumenterden.com
            </a>
          </div>

          {/* Professional Network */}
          <div className="bg-surface-1 border border-rule p-6 rounded-lg space-y-3">
            <div className="font-mono-custom text-[9px] tracking-[0.2em] uppercase text-platin-dim">
              02 — Profesyonel Ağ
            </div>
            <h3 className="font-display text-xl text-platin">
              LinkedIn
            </h3>
            <p className="font-sans text-xs text-text-faint">
              Güncel duyurular, makaleler ve profesyonel ağ iletişimi için:
            </p>
            <a
              href="https://linkedin.com/in/ercumenterden"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-custom text-sm text-platin hover:underline block pt-2"
            >
              linkedin.com/in/ercumenterden
            </a>
          </div>
        </div>

        {/* Media Kit & Careers/Talent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Media Kit */}
          <div className="bg-surface-1 border border-rule p-6 rounded-lg space-y-3">
            <div className="font-mono-custom text-[9px] tracking-[0.2em] uppercase text-platin-dim">
              03 — Basın & Medya
            </div>
            <h3 className="font-display text-xl text-platin">
              Medya Kiti
            </h3>
            <p className="font-sans text-xs text-text-faint">
              Röportaj talepleri, sunum görselleri ve biyografi içeren resmi medya dosyalarına erişin:
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-mono-custom text-xs text-platin hover:underline block pt-2"
            >
              [MEDYA KİTİNİ İNDİR (ZIP)]
            </a>
          </div>

          {/* Careers / Talent */}
          <div className="bg-surface-1 border border-rule p-6 rounded-lg space-y-3">
            <div className="font-mono-custom text-[9px] tracking-[0.2em] uppercase text-platin-dim">
              04 — Açık Pozisyonlar
            </div>
            <h3 className="font-display text-xl text-platin">
              Kariyer / Talent
            </h3>
            <p className="font-sans text-xs text-text-faint">
              AI Safety, Rust/WASM, dMRV ve akıllı donanım IoT alanında ekibimize katılmak için:
            </p>
            <a
              href="mailto:talent@ercumenterden.com"
              className="font-mono-custom text-sm text-platin hover:underline block pt-2"
            >
              talent@ercumenterden.com
            </a>
          </div>
        </div>

        {/* Calendly booking */}
        <div className="bg-surface-1 border border-rule p-8 rounded-lg space-y-6 text-center">
          <div className="space-y-2">
            <div className="font-mono-custom text-[9px] tracking-[0.2em] uppercase text-platin">
              DIRECT CALENDAR SCHEDULER
            </div>
            <h3 className="font-display text-2xl text-platin">
              Görüşme Planlayın
            </h3>
            <p className="font-sans text-xs text-text-faint max-w-md mx-auto">
              Ekosistem platformlarıyla ilgili yatırım veya entegrasyon görüşmesi yapmak için doğrudan takvimden uygun gün ve saati rezerve edin.
            </p>
          </div>

          <div className="border border-rule-strong p-8 rounded-[2px] bg-ink/50 space-y-4">
            <div className="font-mono-custom text-[11px] tracking-widest text-platin-dim">
              OFFICIAL CALENDLY WIDGET ACTIVE
            </div>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-custom text-[10px] tracking-[0.15em] uppercase bg-platin text-ink px-6 py-3 rounded-[2px] inline-block font-medium hover:opacity-85 transition-opacity"
            >
              TAKVİMİ AÇIN →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
