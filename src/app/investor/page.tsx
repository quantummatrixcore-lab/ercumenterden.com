"use client";

import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function InvestorPage() {
  const { t } = useLanguage();
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "ercument2026") {
      setIsUnlocked(true);
      setError("");
    } else {
      setError(t("investor.invalid_pass"));
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
                {t("investor.secure_room")}
              </div>
              <h2 className="font-display text-2xl text-platin">
                {t("investor.title")}
              </h2>
              <p className="font-sans text-xs text-text-faint">
                {t("investor.desc")}
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-1">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder={t("investor.placeholder")}
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
                {t("investor.btn_unlock")}
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Dossier Drawer Cabinet */
          <div className="w-full max-w-4xl space-y-12 py-10">
            {/* Header */}
            <div className="space-y-4 border-b border-rule pb-8">
              <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
                CONFIDENTIAL / INVESTOR ROOM
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-platin leading-none">
                {t("investor.unlocked_title")}
              </h1>
              <p className="font-sans text-sm text-text-dim leading-relaxed">
                {t("investor.unlocked_desc")}
              </p>
            </div>

            {/* Dossier Tabs / Folder Cabinet Arkaplani */}
            <div className="space-y-1">
              <div className="flex border-b border-rule gap-1">
                <button
                  onClick={() => setActiveTab(0)}
                  className={`py-3 px-6 font-mono-custom text-[10px] tracking-[0.15em] uppercase border transition-all rounded-t-[4px] ${
                    activeTab === 0
                      ? "bg-surface-1 border-rule border-b-transparent text-platin font-medium"
                      : "border-transparent text-text-faint hover:text-platin-dim hover:bg-surface-1/30"
                  }`}
                >
                  {t("investor.doc_title").split(" — ")[1]}
                </button>
                <button
                  onClick={() => setActiveTab(1)}
                  className={`py-3 px-6 font-mono-custom text-[10px] tracking-[0.15em] uppercase border transition-all rounded-t-[4px] ${
                    activeTab === 1
                      ? "bg-surface-1 border-rule border-b-transparent text-platin font-medium"
                      : "border-transparent text-text-faint hover:text-platin-dim hover:bg-surface-1/30"
                  }`}
                >
                  {t("investor.fin_title").split(" — ")[1]}
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`py-3 px-6 font-mono-custom text-[10px] tracking-[0.15em] uppercase border transition-all rounded-t-[4px] ${
                    activeTab === 2
                      ? "bg-surface-1 border-rule border-b-transparent text-platin font-medium"
                      : "border-transparent text-text-faint hover:text-platin-dim hover:bg-surface-1/30"
                  }`}
                >
                  {t("investor.calendar_title").split(" — ")[1]}
                </button>
              </div>

              {/* Dossier Sheet Content */}
              <div className="bg-surface-1 border border-rule border-t-0 p-8 rounded-b-lg min-h-[260px] shadow-lg transition-all duration-300">
                {activeTab === 0 && (
                  <div className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
                    <h3 className="font-mono-custom text-xs tracking-[0.15em] text-platin uppercase border-b border-rule/50 pb-2">
                      {t("investor.doc_title")}
                    </h3>
                    <ul className="space-y-4 font-mono-custom text-xs">
                      <li className="flex justify-between items-center text-text-dim border-b border-rule/30 pb-2">
                        <span>Ecosystem One-Pager (2026)</span>
                        <a
                          href="#"
                          className="text-platin hover:underline"
                          onClick={(e) => e.preventDefault()}
                        >
                          {t("investor.download")}
                        </a>
                      </li>
                      <li className="flex justify-between items-center text-text-dim border-b border-rule/30 pb-2">
                        <span>CarbonEcoMarket Pitch Deck</span>
                        <a
                          href="#"
                          className="text-platin hover:underline"
                          onClick={(e) => e.preventDefault()}
                        >
                          {t("investor.download")}
                        </a>
                      </li>
                      <li className="flex justify-between items-center text-text-dim border-b border-rule/30 pb-2">
                        <span>AlparAI Seed Presentation</span>
                        <a
                          href="#"
                          className="text-platin hover:underline"
                          onClick={(e) => e.preventDefault()}
                        >
                          {t("investor.download")}
                        </a>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
                    <h3 className="font-mono-custom text-xs tracking-[0.15em] text-platin uppercase border-b border-rule/50 pb-2">
                      {t("investor.fin_title")}
                    </h3>
                    <ul className="space-y-4 font-mono-custom text-xs">
                      <li className="flex justify-between items-center text-text-dim border-b border-rule/30 pb-2">
                        <span>Ecosystem Cap Table</span>
                        <span className="text-text-faint">{t("investor.protected")}</span>
                      </li>
                      <li className="flex justify-between items-center text-text-dim border-b border-rule/30 pb-2">
                        <span>dMRV Financial Forecast 2026-2029</span>
                        <span className="text-text-faint">{t("investor.protected")}</span>
                      </li>
                      <li className="flex justify-between items-center text-text-dim border-b border-rule/30 pb-2">
                        <span>AlparAI MRR Projections</span>
                        <span className="text-text-faint">{t("investor.protected")}</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
                    <h3 className="font-mono-custom text-xs tracking-[0.15em] text-platin uppercase border-b border-rule/50 pb-2">
                      {t("investor.calendar_title")}
                    </h3>
                    <p className="font-sans text-xs text-text-faint">
                      {t("investor.calendar_desc")}
                    </p>
                    <div className="border border-rule-strong p-8 rounded-[2px] text-center bg-ink/50 space-y-4">
                      <div className="font-mono-custom text-[11px] tracking-widest text-platin-dim">
                        {t("investor.calendar_active")}
                      </div>
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono-custom text-[10px] tracking-[0.15em] uppercase bg-platin text-ink px-6 py-3 rounded-[2px] inline-block font-medium hover:opacity-85 transition-opacity"
                      >
                        {t("investor.calendar_btn")}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
