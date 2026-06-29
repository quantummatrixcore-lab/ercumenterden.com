"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
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
  const [vitaminA] = useState<number>(85);
  const [vitaminC] = useState<number>(90);
  
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

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: AyazWater (Cyan Neon) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`elite-card border-t-2 border-t-cyan-neon hover:glow-cyan flex flex-col justify-between h-[360px] cursor-pointer ${activeModule === "ayazwater" ? "border-cyan-neon/60 bg-surface-2" : ""}`}
            onClick={() => setActiveModule(activeModule === "ayazwater" ? null : "ayazwater")}
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="font-mono-custom text-[9px] tracking-widest text-cyan-neon bg-cyan-neon/10 px-2 py-0.5 rounded-[2px]">
                  AYAZWATER
                </span>
                <span className="font-mono-custom text-[8px] text-text-faint tracking-wider">
                  HARDWARE // WET-WARE
                </span>
              </div>
              <h3 className="font-display text-2xl text-platin mt-4 select-none">
                Smart Vitamin Water Altyapısı
              </h3>
              <p className="font-sans text-xs text-text-dim leading-relaxed mt-2 select-none">
                Yeni nesil donanımsal su arıtım ve vitamin dozajlama sistemi. Akıllı sensor telemetrisi ile şebeke suyunu canlı mineralli içeceğe dönüştürür.
              </p>
            </div>

            {/* Live Interactive Telemetry */}
            <div className="border-t border-rule pt-4 space-y-3 font-mono-custom text-[10px]">
              <div className="flex justify-between text-text-dim">
                <span>Model Seçimi:</span>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setWaterModel("Elite"); }} 
                    className={`px-1.5 py-0.5 rounded-[1px] ${waterModel === "Elite" ? "bg-cyan-neon/20 text-cyan-neon border border-cyan-neon/40" : "text-text-faint"}`}
                  >
                    ELITE
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setWaterModel("Eco"); }} 
                    className={`px-1.5 py-0.5 rounded-[1px] ${waterModel === "Eco" ? "bg-cyan-neon/20 text-cyan-neon border border-cyan-neon/40" : "text-text-faint"}`}
                  >
                    ECO
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ink/50 p-2 border border-rule rounded-[1px]">
                  <span className="text-text-faint block uppercase text-[8px]">ANLIK PH SEVİYESİ</span>
                  <span className="text-cyan-neon text-xs font-bold">{phLevel} pH</span>
                </div>
                <div className="bg-ink/50 p-2 border border-rule rounded-[1px]">
                  <span className="text-text-faint block uppercase text-[8px]">AKIŞ HIZI (FLOW)</span>
                  <span className="text-cyan-neon text-xs font-bold">{flowRate} L/dk</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] text-text-faint">
                  <span>VİTAMİN KARTUŞ DEĞERİ (A / C)</span>
                  <span>{vitaminA}% / {vitaminC}%</span>
                </div>
                <div className="w-full bg-ink h-1 border border-rule rounded-[1px] overflow-hidden">
                  <div className="bg-cyan-neon h-full" style={{ width: `${(vitaminA + vitaminC)/2}%` }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: FreshRider (Lime/Emerald Neon) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`elite-card border-t-2 border-t-emerald-neon hover:glow-emerald flex flex-col justify-between h-[360px] cursor-pointer ${activeModule === "freshrider" ? "border-emerald-neon/60 bg-surface-2" : ""}`}
            onClick={() => setActiveModule(activeModule === "freshrider" ? null : "freshrider")}
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="font-mono-custom text-[9px] tracking-widest text-emerald-neon bg-emerald-neon/10 px-2 py-0.5 rounded-[2px]">
                  FRESHRIDER
                </span>
                <span className="font-mono-custom text-[8px] text-text-faint tracking-wider">
                  IoT HARDWARE // FLEET
                </span>
              </div>
              <h3 className="font-display text-2xl text-platin mt-4 select-none">
                IoT Helmet Sanitizer Vending
              </h3>
              <p className="font-sans text-xs text-text-dim leading-relaxed mt-2 select-none">
                Mikro-mobilite paylaşımlı scooter kullanıcıları için kask temizliği ve sterilizasyonu doğrulayan otonom IoT kask kabini.
              </p>
            </div>

            {/* Live Interactive Telemetry */}
            <div className="border-t border-rule pt-4 space-y-3 font-mono-custom text-[10px]">
              <div className="flex justify-between items-center text-text-dim">
                <span>Sterilizasyon Durumu:</span>
                <span className={`px-2 py-0.5 rounded-[1px] text-[9px] ${sanitizeStatus === "COMPLETE" ? "text-emerald-neon bg-emerald-neon/10" : sanitizeStatus === "IDLE" ? "text-text-faint bg-surface-3" : "text-amber-500 bg-amber-500/10 animate-pulse"}`}>
                  {sanitizeStatus === "IDLE" && "HAZIR"}
                  {sanitizeStatus === "SANITY_CHECK" && "OTOMATİK KONTROL"}
                  {sanitizeStatus === "UVC_ACTIVE" && "UV-C AKTİF"}
                  {sanitizeStatus === "SPRAY_PUMP" && "PÜSKÜRTME Pompası"}
                  {sanitizeStatus === "COMPLETE" && "TEMİZLİK BİTTİ"}
                </span>
              </div>

              <div className="bg-ink/50 p-3 border border-rule rounded-[1px] space-y-2">
                <div className="flex justify-between text-[8px] text-text-faint">
                  <span>TEMİZLİK DÖNGÜSÜ</span>
                  <span>{sanitizeProgress}%</span>
                </div>
                <div className="w-full bg-ink h-1.5 border border-rule rounded-[1px] overflow-hidden">
                  <div 
                    className="bg-emerald-neon h-full transition-all duration-300" 
                    style={{ width: `${sanitizeProgress}%` }} 
                  />
                </div>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); startSanitization(); }}
                disabled={sanitizeStatus !== "IDLE"}
                className={`w-full py-2.5 rounded-[2px] font-mono-custom text-[9px] tracking-widest uppercase transition-all duration-200 border ${
                  sanitizeStatus === "IDLE" 
                    ? "bg-transparent border-emerald-neon text-emerald-neon hover:bg-emerald-neon hover:text-ink cursor-pointer" 
                    : "bg-surface-3 border-rule text-text-faint cursor-not-allowed"
                }`}
              >
                {sanitizeStatus === "IDLE" ? "TEMİZLİK SİMÜLASYONU BAŞLAT" : "DÖNGÜ ÇALIŞIYOR..."}
              </button>
            </div>
          </motion.div>

          {/* Card 3: AlparAI & Agent-OS (Purple Neon) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`elite-card border-t-2 border-t-purple-neon hover:glow-purple flex flex-col justify-between h-[360px] cursor-pointer ${activeModule === "alparai" ? "border-purple-neon/60 bg-surface-2" : ""}`}
            onClick={() => setActiveModule(activeModule === "alparai" ? null : "alparai")}
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="font-mono-custom text-[9px] tracking-widest text-purple-neon bg-purple-neon/10 px-2 py-0.5 rounded-[2px]">
                  ALPARAI & AGENT-OS
                </span>
                <span className="font-mono-custom text-[8px] text-text-faint tracking-wider">
                  AI SAFETY // ORCHESTRATOR
                </span>
              </div>
              <h3 className="font-display text-2xl text-platin mt-4 select-none">
                Stripe for AI Safety & Ajan Filosu
              </h3>
              <p className="font-sans text-xs text-text-dim leading-relaxed mt-2 select-none">
                LLM modelleri için anlık koruma katmanı ve EU AI Act/KVKK uyum motoru. Aynı zamanda otonom çalışan 12 AI ajanı koordine eder.
              </p>
            </div>

            {/* Live Interactive Telemetry */}
            <div className="border-t border-rule pt-4 space-y-3 font-mono-custom text-[10px]">
              <div className="flex justify-between text-text-dim">
                <span>Aktif Ajan Sinyali:</span>
                <span className="text-purple-neon font-bold animate-pulse">{activeAgent}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ink/50 p-2 border border-rule rounded-[1px]">
                  <span className="text-text-faint block uppercase text-[8px]">TOPLAM İSTEK</span>
                  <span className="text-purple-neon text-xs font-bold">{gatewayRequests.toLocaleString()}</span>
                </div>
                <div className="bg-ink/50 p-2 border border-rule rounded-[1px]">
                  <span className="text-text-faint block uppercase text-[8px]">ANLIK GECİKME</span>
                  <span className="text-purple-neon text-xs font-bold">{avgLatency} ms</span>
                </div>
              </div>
              <div className="flex justify-between items-center bg-ink/50 border border-rule px-3 py-1.5 rounded-[1px]">
                <span className="text-text-faint text-[8px] uppercase">GÜVENLİK GÜVENİLİRLİK SKORU</span>
                <span className="text-emerald-neon text-xs font-bold">{safetyScore}%</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: CarbonEcoMarket (Teal Neon) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`elite-card border-t-2 border-t-teal-neon hover:glow-teal flex flex-col justify-between h-[360px] cursor-pointer lg:col-span-2 ${activeModule === "carboneco" ? "border-teal-neon/60 bg-surface-2" : ""}`}
            onClick={() => setActiveModule(activeModule === "carboneco" ? null : "carboneco")}
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="font-mono-custom text-[9px] tracking-widest text-teal-neon bg-teal-neon/10 px-2 py-0.5 rounded-[2px]">
                  CARBONECOMARKET
                </span>
                <span className="font-mono-custom text-[8px] text-text-faint tracking-wider">
                  DECENTRALIZED MRV // ECOSYSTEM
                </span>
              </div>
              <h3 className="font-display text-2xl text-platin mt-4 select-none">
                360° Karbon Doğrulama ve Ticaret Platformu
              </h3>
              <p className="font-sans text-xs text-text-dim leading-relaxed mt-2 select-none">
                Sentinel-2 uydularından alınan SAR radar verileri ve IoT donanımları yardımıyla karbon emisyonunu ve yeşil yutak alanları anlık doğrular. Blockchain ledger kayıtları ile Avrupa Birliği CBAM 2026 sınır vergisine uyumlu veri tescili yapar.
              </p>
            </div>

            {/* Live Interactive Telemetry */}
            <div className="border-t border-rule pt-4 space-y-3 font-mono-custom text-[10px]">
              <div className="flex justify-between items-center text-text-dim">
                <span>EVM dMRV Blok Yüksekliği:</span>
                <span className="text-teal-neon font-bold"># {blockHeight}</span>
              </div>
              
              <div className="space-y-2">
                <span className="text-text-faint block uppercase text-[8px]">SON KANITLANMIŞ KARBON İŞLEMLERİ (TR VERIFIED)</span>
                <div className="space-y-1.5">
                  {recentTXs.map((tx, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-ink/50 border border-rule px-3 py-1.5 rounded-[1px] text-[9px]">
                      <span className="text-text-dim">{tx.id}</span>
                      <span className="text-text-dim font-bold">{tx.target}</span>
                      <span className="text-teal-neon font-bold">+{tx.amount} TCO2e</span>
                      <span className="text-emerald-neon font-bold text-[8px] tracking-wider bg-emerald-neon/10 px-1 rounded-[1px]">
                        {tx.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Quantum-Matrix V7 (Crimson Neon) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`elite-card border-t-2 border-t-crimson-neon hover:glow-crimson flex flex-col justify-between h-[360px] cursor-pointer ${activeModule === "quantum" ? "border-crimson-neon/60 bg-surface-2" : ""}`}
            onClick={() => setActiveModule(activeModule === "quantum" ? null : "quantum")}
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="font-mono-custom text-[9px] tracking-widest text-crimson-neon bg-crimson-neon/10 px-2 py-0.5 rounded-[2px]">
                  QUANTUM-MATRIX V7
                </span>
                <span className="font-mono-custom text-[8px] text-text-faint tracking-wider">
                  SELF-BUILDING // MULTI-BRAIN
                </span>
              </div>
              <h3 className="font-display text-2xl text-platin mt-4 select-none">
                Otonom Multi-Brain AI Framework
              </h3>
              <p className="font-sans text-xs text-text-dim leading-relaxed mt-2 select-none">
                Geliştirici müdahalesine gerek kalmadan, yazılımı kendi kendine kurgulayabilen, test edebilen ve deploy eden multi-agent yapay zeka yapısı.
              </p>
            </div>

            {/* Live Interactive Telemetry */}
            <div className="border-t border-rule pt-4 space-y-3 font-mono-custom text-[10px]">
              <div className="flex justify-between text-text-dim">
                <span>Aktif Çalışan Beyin (Ajan):</span>
                <span className="text-crimson-neon font-bold">{activeBrains} Agents</span>
              </div>
              
              <div className="bg-ink/50 p-3 border border-rule rounded-[1px] space-y-1.5">
                <span className="text-text-faint block uppercase text-[8px]">YAZILAN KOD DERLEME DÖNGÜSÜ</span>
                <div className="flex items-center gap-2">
                  <Cpu size={12} className="text-crimson-neon animate-spin" />
                  <span className="text-text-dim text-[9px] font-bold">COMPILING: {compilingModule}...</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[8px] text-text-faint">
                <span>KOD ENTEGRASYONU</span>
                <span className="text-emerald-neon font-bold">100% SUCCESS RATE</span>
              </div>
            </div>
          </motion.div>

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
