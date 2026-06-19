"use client";

import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import { useState } from "react";

export default function InvestorPage() {
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Passcode validation
    if (passcode === "ercument2026") {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("GEÇERSİZ ERİŞİM ŞİFRESİ. LÜTFEN TEKRAR DENEYİN.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        {!isUnlocked ? (
          /* Passcode Screen */
          <div className="w-full max-w-md bg-surface-1 border border-rule-strong p-8 rounded-lg space-y-6">
            <div className="space-y-2 text-center">
              <div className="font-mono-custom text-[9px] tracking-[0.2em] uppercase text-platin">
                SECURE ROOM ACCESS
              </div>
              <h2 className="font-display text-2xl text-platin">
                Yatırımcı Girişi
              </h2>
              <p className="font-sans text-xs text-text-faint">
                Ekosistem projelerinin sunum dosyalarına (Pitch Deck), LOI belgelerine ve finansal tablolara erişmek için şifreyi giriniz.
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-1">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="ERİŞİM ŞİFRESİ"
                  className="w-full bg-ink border border-rule focus:border-platin text-platin font-mono-custom text-xs tracking-wider px-4 py-3 rounded-[2px] outline-none transition-colors placeholder:text-text-faint"
                />
                {error && (
                  <p className="font-mono-custom text-[9px] tracking-wider text-red-500 pt-1">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full font-mono-custom text-[10px] tracking-[0.15em] uppercase bg-platin text-ink font-medium py-3 rounded-[2px] hover:opacity-85 transition-opacity"
              >
                KİLİDİ AÇ →
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Dashboard Room */
          <div className="w-full max-w-4xl space-y-12 py-10">
            {/* Header */}
            <div className="space-y-4 border-b border-rule pb-8">
              <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
                CONFIDENTIAL / INVESTOR DECK
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-platin leading-none">
                Yatırımcı Odası
              </h1>
              <p className="font-sans text-sm text-text-dim leading-relaxed">
                Hoş geldiniz. Bu panelde Ercüment Erden'in yönettiği girişimlerin yatırım süreçleri, deck sunumları ve finansal projeksiyonları yer almaktadır.
              </p>
            </div>

            {/* Documents & Download Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-1 border border-rule p-6 rounded-lg space-y-4">
                <h3 className="font-mono-custom text-xs tracking-[0.15em] uppercase text-platin border-b border-rule pb-2">
                  01 — Dokümantasyon
                </h3>
                <ul className="space-y-3 font-mono-custom text-xs">
                  <li className="flex justify-between items-center text-text-dim">
                    <span>Ecosystem One-Pager (2026)</span>
                    <a
                      href="#"
                      className="text-platin hover:underline"
                      onClick={(e) => e.preventDefault()}
                    >
                      [İNDİR]
                    </a>
                  </li>
                  <li className="flex justify-between items-center text-text-dim">
                    <span>CarbonEcoMarket Pitch Deck</span>
                    <a
                      href="#"
                      className="text-platin hover:underline"
                      onClick={(e) => e.preventDefault()}
                    >
                      [İNDİR]
                    </a>
                  </li>
                  <li className="flex justify-between items-center text-text-dim">
                    <span>AlparAI Seed Presentation</span>
                    <a
                      href="#"
                      className="text-platin hover:underline"
                      onClick={(e) => e.preventDefault()}
                    >
                      [İNDİR]
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-surface-1 border border-rule p-6 rounded-lg space-y-4">
                <h3 className="font-mono-custom text-xs tracking-[0.15em] uppercase text-platin border-b border-rule pb-2">
                  02 — Finansal Projeksiyonlar
                </h3>
                <ul className="space-y-3 font-mono-custom text-xs">
                  <li className="flex justify-between items-center text-text-dim">
                    <span>Ecosystem Cap Table</span>
                    <span className="text-text-faint">[KORUMALI]</span>
                  </li>
                  <li className="flex justify-between items-center text-text-dim">
                    <span>dMRV Financial Forecast 2026-2029</span>
                    <span className="text-text-faint">[KORUMALI]</span>
                  </li>
                  <li className="flex justify-between items-center text-text-dim">
                    <span>AlparAI MRR Projections</span>
                    <span className="text-text-faint">[KORUMALI]</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Embedded Calendly Scheduler */}
            <div className="bg-surface-1 border border-rule p-6 rounded-lg space-y-6">
              <div className="space-y-1">
                <h3 className="font-mono-custom text-xs tracking-[0.15em] uppercase text-platin">
                  03 — Toplantı Planlama
                </h3>
                <p className="font-sans text-xs text-text-faint">
                  Yatırım ve ortaklık detaylarını görüşmek için takvimden uygun zaman dilimini seçin.
                </p>
              </div>

              {/* Calendly Widget Simulator or Direct Link */}
              <div className="border border-rule-strong p-8 rounded-[2px] text-center bg-ink/50 space-y-4">
                <div className="font-mono-custom text-[11px] tracking-widest text-platin-dim">
                  CALENDLY SCHEDULER ACTIVE
                </div>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-custom text-[10px] tracking-[0.15em] uppercase bg-platin text-ink px-6 py-3 rounded-[2px] inline-block font-medium hover:opacity-85 transition-opacity"
                >
                  GÖRÜŞME TARİHİ SEÇİN →
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
