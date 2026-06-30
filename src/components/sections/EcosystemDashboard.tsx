"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Lock
} from "lucide-react";

const agentsList = ["CEO_Agent", "CTO_Agent", "VCs_Agent", "Competitor_Agent", "CFO_Agent"];
const modulesList = ["EVM_BRIDGE", "TELEMETRY_CORE", "AI_GATEWAY", "AGENT_FLEET", "STERILIZATION_DRIVER"];

export default function EcosystemDashboard() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  // --- 1. AYAZWATER STATE ---
  const [waterModel, setWaterModel] = useState<"Elite" | "Eco">("Elite");
  const [phLevel, setPhLevel] = useState<number>(7.2);
  const [flowRate, setFlowRate] = useState<number>(2.4);
  
  // Randomize telemetry for AyazWater
  useEffect(() => {
    const timer = setInterval(() => {
      setPhLevel(parseFloat((7.0 + Math.random() * 0.4).toFixed(2)));
      setFlowRate(parseFloat((2.1 + Math.random() * 0.6).toFixed(1)));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // --- 2. FRESHRIDER STATE ---
  const [sanitizeProgress, setSanitizeProgress] = useState<number>(0);
  const [sanitizeStatus, setSanitizeStatus] = useState<"IDLE" | "SANITY_CHECK" | "UVC_ACTIVE" | "SPRAY_PUMP" | "COMPLETE">("IDLE");
  
  const startSanitization = () => {
    if (sanitizeStatus !== "IDLE") return;
    setSanitizeStatus("SANITY_CHECK");
    setSanitizeProgress(10);
    
    setTimeout(() => {
      setSanitizeStatus("UVC_ACTIVE");
      setSanitizeProgress(40);
    }, 1200);

    setTimeout(() => {
      setSanitizeStatus("SPRAY_PUMP");
      setSanitizeProgress(75);
    }, 2800);

    setTimeout(() => {
      setSanitizeStatus("COMPLETE");
      setSanitizeProgress(100);
    }, 4500);

    setTimeout(() => {
      setSanitizeStatus("IDLE");
      setSanitizeProgress(0);
    }, 6500);
  };

  // --- 3. ALPARAI STATE ---
  const [gatewayRequests, setGatewayRequests] = useState<number>(5204128);
  const [avgLatency, setAvgLatency] = useState<number>(12.8);
  const [safetyScore, setSafetyScore] = useState<number>(99.8);
  const [activeAgent, setActiveAgent] = useState<string>("CEO_Agent");

  useEffect(() => {
    const timer = setInterval(() => {
      setGatewayRequests((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setAvgLatency(parseFloat((11.5 + Math.random() * 2.5).toFixed(1)));
      setSafetyScore(parseFloat((99.5 + Math.random() * 0.4).toFixed(1)));
      setActiveAgent(agentsList[Math.floor(Math.random() * agentsList.length)]);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // --- 4. CARBON ECOMARKET STATE ---
  const [blockHeight, setBlockHeight] = useState<number>(142058);
  const [recentTXs, setRecentTXs] = useState<Array<{ id: string; target: string; amount: number; status: string }>>([
    { id: "0x8fa1...d49b", target: "TİM Pilot A-1", amount: 450, status: "VERIFIED" },
    { id: "0x3bc9...e11f", target: "İhracatçı LOI-9", amount: 1200, status: "VERIFIED" },
    { id: "0x9cc2...f088", target: "Çiftçi Koop-3", amount: 85, status: "VERIFIED" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlockHeight((prev) => prev + 1);
      const newTx = {
        id: `0x${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0')}...${Math.floor(Math.random() * 16777215).toString(16).padEnd(4, '0')}`,
        target: `İhracatçı LOI-${Math.floor(Math.random() * 14) + 1}`,
        amount: Math.floor(Math.random() * 900) + 50,
        status: "VERIFIED"
      };
      setRecentTXs((prev) => [newTx, ...prev.slice(0, 2)]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // --- 5. QUANTUM-MATRIX V7 STATE ---
  const [activeBrains, setActiveBrains] = useState<number>(7);
  const [compilingModule, setCompilingModule] = useState<string>("EVM_BRIDGE");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBrains(6 + Math.floor(Math.random() * 4));
      setCompilingModule(modulesList[Math.floor(Math.random() * modulesList.length)]);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // --- 6. SECURE CODE PASSCODE MODULE (LOCK BOX) ---
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passError, setPassError] = useState("");
  
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "ercument2026") {
      setIsUnlocked(true);
      setPassError("");
    } else {
      setPassError("GEÇERSİZ ERİŞİM ANAHTARI");
    }
  };

  return (
    <section id="ecosystem" className="mx-auto max-w-7xl px-6 py-20 relative">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-rule pb-8">
          <div className="space-y-3">
            <div className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-platin">
              VENTURE STUDIO EKOSİSTEMİ
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-platin leading-none">
              Girişim Kümesi & Otonom Donanım
            </h2>
          </div>
          <div className="font-mono-custom text-[10px] tracking-wider text-text-faint uppercase">
            * TÜM SİSTEMLER EVM VE REGÜLASYON UYUMLUDUR
          </div>
        </div>

        {/* Featured Showcase: ALPAR AI & System Monitor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card: ALPARAI (Featured - lg:col-span-2) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`elite-card border-t-2 border-t-purple-neon hover:glow-purple flex flex-col justify-between h-[380px] lg:col-span-2 cursor-pointer ${activeModule === "alparai" ? "border-purple-neon/60 bg-surface-2" : ""}`}
            onClick={() => setActiveModule(activeModule === "alparai" ? null : "alparai")}
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <span className="font-mono-custom text-[9px] tracking-widest text-purple-neon bg-purple-neon/10 px-2 py-0.5 rounded-[2px]">
                    ALPARAI & AGENT-OS
                  </span>
                  {/* LIVE Badge */}
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-neon opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-neon"></span>
                  </span>
                  <span className="font-mono-custom text-[8px] text-emerald-neon tracking-wider uppercase font-bold">
                    LIVE
                  </span>
                </div>
                <div className="font-mono-custom text-[9px] text-platin tracking-wider">
                  64 Verified Incidents &middot; 23 Providers
                </div>
              </div>
              <h3 className="font-display text-3xl text-platin mt-4 select-none">
                Stripe for AI Safety & Ajan Filosu
              </h3>
              <p className="font-sans text-xs text-text-dim leading-relaxed mt-2 select-none">
                LLM modelleri için anlık koruma katmanı ve EU AI Act/KVKK uyum motoru. Aynı zamanda otonom çalışan 12 AI ajanı koordine eder.
              </p>
            </div>

            {/* Live Interactive Telemetry */}
            <div className="border-t border-rule pt-4 space-y-4 font-mono-custom text-[10px]">
              <div className="flex justify-between items-center text-text-dim">
                <span>Aktif Ajan Sinyali:</span>
                <span className="text-purple-neon font-bold animate-pulse">{activeAgent}</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-ink/50 p-2 border border-rule rounded-[1px]">
                  <span className="text-text-faint block uppercase text-[8px]">TOPLAM İSTEK</span>
                  <span className="text-purple-neon text-xs font-bold">{gatewayRequests.toLocaleString()}</span>
                </div>
                <div className="bg-ink/50 p-2 border border-rule rounded-[1px]">
                  <span className="text-text-faint block uppercase text-[8px]">ANLIK GECİKME</span>
                  <span className="text-purple-neon text-xs font-bold">{avgLatency} ms</span>
                </div>
                <div className="bg-ink/50 p-2 border border-rule rounded-[1px]">
                  <span className="text-text-faint block uppercase text-[8px]">GÜVENLİK SKORU</span>
                  <span className="text-emerald-neon text-xs font-bold">{safetyScore}%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t border-rule/50">
                <span className="text-text-faint text-[9px]">DIŞ BAĞLANTI:</span>
                <a 
                  href="https://alparai.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-neon hover:underline font-mono-custom text-[10px] tracking-wider"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit alparai.com &rarr;
                </a>
              </div>
            </div>
          </motion.div>

          {/* System Monitor (lg:col-span-1) */}
          <div className="elite-card border border-rule-strong bg-surface-1/50 flex flex-col justify-between h-[380px] p-6">
            <div>
              <div className="flex justify-between items-center border-b border-rule pb-2">
                <span className="font-mono-custom text-[9px] tracking-widest text-platin">SYSTEM TELEMETRY</span>
                <span className="font-mono-custom text-[8px] text-emerald-neon bg-emerald-neon/10 px-1.5 py-0.5 rounded-[1px]">ACTIVE</span>
              </div>
              <div className="mt-4 space-y-3 font-mono-custom text-[10px]">
                <div className="flex justify-between">
                  <span className="text-text-faint">QUANTUM ENGINE:</span>
                  <span className="text-platin">V7.4.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-faint">UPTIME:</span>
                  <span className="text-platin">99.998%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-faint">AI NODES SYNCED:</span>
                  <span className="text-platin">{activeBrains} / 12</span>
                </div>
              </div>
            </div>

            <div className="bg-ink/60 border border-rule-strong p-3 rounded-[1px] font-mono-custom text-[9px] text-text-faint leading-relaxed">
              <span className="text-platin block mb-1">REAL-TIME TELEMETRY STREAM</span>
              <div className="h-[100px] overflow-y-hidden space-y-1">
                <div>[SYS] EVM BLOCK REGISTERED AT #{blockHeight}</div>
                <div>[AI] {activeAgent} EXECUTING DECISION STACK</div>
                <div>[NET] MBS PORT ACCESS OPERATIONAL</div>
                <div className="text-emerald-neon">[OK] ALL SYSTEMS NOMINAL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Label: PREVIOUS VENTURES & R&D */}
        <div className="space-y-4 pt-12 border-t border-rule">
          <div className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-text-faint">
            PREVIOUS VENTURES & R&D
          </div>
          
          {/* Grid of Other 4 Ventures (Condensed to 60% of size) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: AyazWater (Cyan Neon) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`elite-card border-t border-t-cyan-neon hover:glow-cyan flex flex-col justify-between h-[290px] p-5 cursor-pointer ${activeModule === "ayazwater" ? "border-cyan-neon/60 bg-surface-2" : ""}`}
              onClick={() => setActiveModule(activeModule === "ayazwater" ? null : "ayazwater")}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-mono-custom text-[8px] tracking-widest text-cyan-neon bg-cyan-neon/10 px-1.5 py-0.5 rounded-[1px]">
                    AYAZWATER
                  </span>
                  <span className="font-mono-custom text-[7px] text-text-faint tracking-wider">
                    HARDWARE
                  </span>
                </div>
                <h4 className="font-display text-lg text-platin mt-3 select-none">
                  Smart Vitamin Water Altyapısı
                </h4>
                <p className="font-sans text-[11px] text-text-dim leading-relaxed mt-1 select-none">
                  Akıllı sensor telemetrisi ile şebeke suyunu mineralli içeceğe dönüştürür.
                </p>
              </div>

              {/* Condensed Telemetry */}
              <div className="border-t border-rule pt-3 space-y-2 font-mono-custom text-[9px]">
                <div className="flex justify-between text-text-dim">
                  <span>Model: {waterModel}</span>
                  <div className="flex gap-1.5">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setWaterModel("Elite"); }} 
                      className={`text-[8px] px-1 py-0.2 rounded-[1px] ${waterModel === "Elite" ? "bg-cyan-neon/20 text-cyan-neon border border-cyan-neon/40" : "text-text-faint"}`}
                    >
                      ELITE
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setWaterModel("Eco"); }} 
                      className={`text-[8px] px-1 py-0.2 rounded-[1px] ${waterModel === "Eco" ? "bg-cyan-neon/20 text-cyan-neon border border-cyan-neon/40" : "text-text-faint"}`}
                    >
                      ECO
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[8px]">
                  <div className="bg-ink/50 p-1 border border-rule">
                    <span className="text-text-faint block uppercase text-[7px]">PH</span>
                    <span className="text-cyan-neon font-bold">{phLevel} pH</span>
                  </div>
                  <div className="bg-ink/50 p-1 border border-rule">
                    <span className="text-text-faint block uppercase text-[7px]">FLOW</span>
                    <span className="text-cyan-neon font-bold">{flowRate} L/d</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: FreshRider (Lime/Emerald Neon) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`elite-card border-t border-t-emerald-neon hover:glow-emerald flex flex-col justify-between h-[290px] p-5 cursor-pointer ${activeModule === "freshrider" ? "border-emerald-neon/60 bg-surface-2" : ""}`}
              onClick={() => setActiveModule(activeModule === "freshrider" ? null : "freshrider")}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-mono-custom text-[8px] tracking-widest text-emerald-neon bg-emerald-neon/10 px-1.5 py-0.5 rounded-[1px]">
                    FRESHRIDER
                  </span>
                  <span className="font-mono-custom text-[7px] text-text-faint tracking-wider">
                    IoT FLEET
                  </span>
                </div>
                <h4 className="font-display text-lg text-platin mt-3 select-none">
                  IoT Helmet Sanitizer Vending
                </h4>
                <p className="font-sans text-[11px] text-text-dim leading-relaxed mt-1 select-none">
                  Kask temizliği ve sterilizasyonu doğrulayan otonom IoT kabini.
                </p>
              </div>

              {/* Condensed Telemetry */}
              <div className="border-t border-rule pt-3 space-y-2 font-mono-custom text-[9px]">
                <div className="flex justify-between items-center text-text-dim">
                  <span>Döngü:</span>
                  <span className="text-emerald-neon font-bold text-[8px]">
                    {sanitizeStatus === "IDLE" ? "HAZIR" : "AKTİF"}
                  </span>
                </div>
                <div className="bg-ink/50 p-2 border border-rule">
                  <div className="w-full bg-ink h-1 border border-rule rounded-[1px] overflow-hidden">
                    <div className="bg-emerald-neon h-full" style={{ width: `${sanitizeProgress}%` }} />
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); startSanitization(); }}
                  disabled={sanitizeStatus !== "IDLE"}
                  className="w-full py-1 bg-transparent border border-emerald-neon text-emerald-neon hover:bg-emerald-neon hover:text-ink text-[8px] rounded-[1px] transition-colors font-mono-custom"
                >
                  {sanitizeStatus === "IDLE" ? "BAŞLAT" : "DÖNGÜDE"}
                </button>
              </div>
            </motion.div>

            {/* Card 3: CarbonEcoMarket (Teal Neon) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`elite-card border-t border-t-teal-neon hover:glow-teal flex flex-col justify-between h-[290px] p-5 cursor-pointer ${activeModule === "carboneco" ? "border-teal-neon/60 bg-surface-2" : ""}`}
              onClick={() => setActiveModule(activeModule === "carboneco" ? null : "carboneco")}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-mono-custom text-[8px] tracking-widest text-teal-neon bg-teal-neon/10 px-1.5 py-0.5 rounded-[1px]">
                    CARBONECOMARKET
                  </span>
                  <span className="font-mono-custom text-[7px] text-text-faint tracking-wider">
                    dMRV
                  </span>
                </div>
                <h4 className="font-display text-lg text-platin mt-3 select-none">
                  Karbon Doğrulama & Ticaret
                </h4>
                <p className="font-sans text-[11px] text-text-dim leading-relaxed mt-1 select-none">
                  Sentinel-2 radar verileriyle karbon sınır vergisi veri tescili.
                </p>
              </div>

              {/* Condensed Telemetry */}
              <div className="border-t border-rule pt-3 space-y-1 font-mono-custom text-[9px]">
                <div className="flex justify-between text-text-dim">
                  <span>Blok:</span>
                  <span className="text-teal-neon font-bold"># {blockHeight}</span>
                </div>
                <div className="text-[8px] text-text-faint truncate">
                  Son TX: {recentTXs[0]?.id || "0x000"} &middot; {recentTXs[0]?.amount}t
                </div>
              </div>
            </motion.div>

            {/* Card 4: Quantum-Matrix V7 (Crimson Neon) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`elite-card border-t border-t-crimson-neon hover:glow-crimson flex flex-col justify-between h-[290px] p-5 cursor-pointer ${activeModule === "quantum" ? "border-crimson-neon/60 bg-surface-2" : ""}`}
              onClick={() => setActiveModule(activeModule === "quantum" ? null : "quantum")}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-mono-custom text-[8px] tracking-widest text-crimson-neon bg-crimson-neon/10 px-1.5 py-0.5 rounded-[1px]">
                    QUANTUM V7
                  </span>
                  <span className="font-mono-custom text-[7px] text-text-faint tracking-wider">
                    MULTI-BRAIN
                  </span>
                </div>
                <h4 className="font-display text-lg text-platin mt-3 select-none">
                  Otonom Multi-Brain Framework
                </h4>
                <p className="font-sans text-[11px] text-text-dim leading-relaxed mt-1 select-none">
                  Kendi yazılımını kurgulayıp deploy eden multi-agent yapay zeka yapısı.
                </p>
              </div>

              {/* Condensed Telemetry */}
              <div className="border-t border-rule pt-3 space-y-1 font-mono-custom text-[9px]">
                <div className="flex justify-between text-text-dim">
                  <span>Beyin Sinyali:</span>
                  <span className="text-crimson-neon font-bold">{activeBrains} Ajan</span>
                </div>
                <div className="text-[8px] text-text-faint truncate">
                  Derlenen: {compilingModule}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Secure Investor Passcode Lock Module (Consolidated from separate routes) */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-rule">
          
          {/* Contact Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-platin">
              İLETİŞİM PORTALI
            </div>
            <h3 className="font-display text-3xl text-platin leading-none">
              Koordinasyon & Ortaklık
            </h3>
            <p className="font-sans text-sm text-text-dim leading-relaxed">
              Venture Studio ekosistemindeki otonom donanımlar, yapay zeka ağları ve dMRV entegrasyon süreçleriyle ilgilenen profesyoneller için iletişim kanalları.
            </p>
            
            <div className="space-y-4 font-mono-custom text-[11px] tracking-wide pt-4">
              <div className="border-b border-rule pb-2 flex justify-between">
                <span className="text-text-faint">E-POSTA</span>
                <a href="mailto:ercument@ercumenterden.com" className="text-platin hover:text-cyan-neon transition-colors duration-200">
                  ercument@ercumenterden.com
                </a>
              </div>
              <div className="border-b border-rule pb-2 flex justify-between">
                <span className="text-text-faint">LINKEDIN</span>
                <a href="https://linkedin.com/in/ercumenterden" target="_blank" rel="noopener noreferrer" className="text-platin hover:text-purple-neon transition-colors duration-200">
                  linkedin.com/in/ercumenterden
                </a>
              </div>
            </div>
          </div>

          {/* Secure Investor Dossier Right Column */}
          <div className="lg:col-span-7 bg-surface-1 border border-rule p-8 rounded-[2px] relative overflow-hidden">
            {!isUnlocked ? (
              <form onSubmit={handleUnlock} className="space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono-custom text-[9px] tracking-[0.2em] text-crimson-neon uppercase">
                    <Lock size={10} />
                    <span>ŞİFRELİ YATIRIMCI ALANI</span>
                  </div>
                  <h4 className="font-display text-xl text-platin">
                    Deck Sunumu & Finansal Raporlar
                  </h4>
                  <p className="font-sans text-xs text-text-dim leading-relaxed">
                    Ecosystem One-Pager, CarbonEcoMarket sunum dosyaları ve Cap-Table gibi dokümanlara erişmek için yatırımcı parolasını girin.
                  </p>
                </div>

                <div className="space-y-3">
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="ERİŞİM KODUNU GİRİN"
                    className="w-full bg-ink border border-rule focus:border-platin text-platin font-mono-custom text-xs tracking-wider px-4 py-3 rounded-[2px] outline-none transition-colors placeholder:text-text-faint"
                  />
                  {passError && (
                    <p className="font-mono-custom text-[9px] tracking-wider text-crimson-neon">
                      {passError}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-3 font-mono-custom text-[10px] tracking-[0.2em] uppercase bg-platin text-ink font-bold hover:bg-white transition-colors rounded-[2px] cursor-pointer"
                  >
                    KİLİDİ AÇ →
                  </button>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center border-b border-rule pb-4">
                  <h4 className="font-mono-custom text-xs tracking-wider text-emerald-neon uppercase flex items-center gap-1.5">
                    <CheckCircle2 size={12} />
                    <span>BAĞLANTI DOĞRULANDI (ERİŞİM AÇIK)</span>
                  </h4>
                  <button 
                    onClick={() => { setIsUnlocked(false); setPasscode(""); }}
                    className="font-mono-custom text-[8px] text-text-faint hover:text-platin"
                  >
                    OTURUMU KAPAT
                  </button>
                </div>
                
                <div className="space-y-4 font-mono-custom text-xs">
                  <div className="bg-ink/60 border border-rule p-4 rounded-[1px] space-y-3">
                    <span className="text-text-faint text-[9px] block uppercase tracking-wider border-b border-rule pb-1.5">
                      01 — DOKÜMANTASYON (PDF / DOWNLOAD)
                    </span>
                    <div className="flex justify-between items-center text-[11px]">
                      <span>Ecosystem One-Pager (2026)</span>
                      <a href="#" onClick={(e) => e.preventDefault()} className="text-cyan-neon hover:underline">[İNDİR]</a>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span>CarbonEcoMarket Pitch Deck</span>
                      <a href="#" onClick={(e) => e.preventDefault()} className="text-cyan-neon hover:underline">[İNDİR]</a>
                    </div>
                  </div>

                  <div className="bg-ink/60 border border-rule p-4 rounded-[1px] space-y-3">
                    <span className="text-text-faint text-[9px] block uppercase tracking-wider border-b border-rule pb-1.5">
                      02 — FİNANSAL TABLOLAR (RESTRICTED)
                    </span>
                    <div className="flex justify-between items-center text-[11px] text-text-dim">
                      <span>Ecosystem Cap Table</span>
                      <span className="text-text-faint">[KORUMALI]</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-text-dim">
                      <span>dMRV Financial Forecast 2026-2029</span>
                      <span className="text-text-faint">[KORUMALI]</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
