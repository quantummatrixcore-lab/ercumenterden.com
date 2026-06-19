"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function VerificationSimulator() {
  const { t } = useLanguage();
  const [logs, setLogs] = useState<string[]>([]);
  const [activeSim, setActiveSim] = useState<null | "dmrv" | "mbs" | "agent">(null);
  const [currentHash, setCurrentHash] = useState("");
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom of terminal when logs change
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, currentHash]);

  // Handle crypto hash rolling effect during active simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeSim) {
      interval = setInterval(() => {
        const chars = "0123456789ABCDEF";
        let result = "";
        for (let i = 0; i < 64; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCurrentHash(result);
      }, 80);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentHash((prev) => (prev !== "" ? "" : prev));
    }
    return () => clearInterval(interval);
  }, [activeSim]);

  const runSimulation = (type: "dmrv" | "mbs" | "agent") => {
    if (activeSim) return; // Prevent double running

    setActiveSim(type);
    setLogs([t("simulator.running")]);

    const items = t(`simulator.logs.${type}`) as string[];
    let idx = 0;

    const interval = setInterval(() => {
      if (idx < items.length) {
        setLogs((prev) => [...prev, `[LOG]: ${items[idx]}`]);
        idx++;
      } else {
        clearInterval(interval);
        
        // Generate final hash
        const finalChars = "0123456789ABCDEF";
        let hash = "";
        for (let i = 0; i < 64; i++) {
          hash += finalChars.charAt(Math.floor(Math.random() * finalChars.length));
        }

        setLogs((prev) => [
          ...prev,
          `\n${t("simulator.completed")}`,
          `[SHA-256]: ${hash}`
        ]);
        setActiveSim(null);
      }
    }, 1000);
  };

  const clearLogs = () => {
    if (activeSim) return;
    setLogs([]);
  };

  return (
    <div className="w-full bg-ink border border-rule-strong rounded-lg p-6 font-mono-custom text-xs space-y-6 mt-10 max-w-4xl mx-auto shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-rule pb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activeSim ? "bg-amber-400" : "bg-emerald-400"}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${activeSim ? "bg-amber-500" : "bg-emerald-500"}`}></span>
          </span>
          <span className="text-[10px] tracking-[0.16em] uppercase text-platin font-medium">
            {t("simulator.title")}
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rule/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-rule/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-rule/50" />
        </div>
      </div>

      {/* Simulator Control Panel */}
      <div className="space-y-3">
        <p className="text-text-dim text-[11px] tracking-wider">
          {t("simulator.select_prompt")}
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => runSimulation("dmrv")}
            disabled={activeSim !== null}
            className={`px-4 py-2 border rounded-[2px] text-[10px] tracking-wider uppercase transition-all ${
              activeSim === "dmrv"
                ? "bg-platin text-ink border-platin"
                : activeSim !== null
                ? "opacity-40 border-rule text-text-faint cursor-not-allowed"
                : "border-rule-strong text-platin hover:border-platin hover:text-white"
            }`}
          >
            {t("simulator.btn_dmrv")}
          </button>
          <button
            onClick={() => runSimulation("mbs")}
            disabled={activeSim !== null}
            className={`px-4 py-2 border rounded-[2px] text-[10px] tracking-wider uppercase transition-all ${
              activeSim === "mbs"
                ? "bg-platin text-ink border-platin"
                : activeSim !== null
                ? "opacity-40 border-rule text-text-faint cursor-not-allowed"
                : "border-rule-strong text-platin hover:border-platin hover:text-white"
            }`}
          >
            {t("simulator.btn_mbs")}
          </button>
          <button
            onClick={() => runSimulation("agent")}
            disabled={activeSim !== null}
            className={`px-4 py-2 border rounded-[2px] text-[10px] tracking-wider uppercase transition-all ${
              activeSim === "agent"
                ? "bg-platin text-ink border-platin"
                : activeSim !== null
                ? "opacity-40 border-rule text-text-faint cursor-not-allowed"
                : "border-rule-strong text-platin hover:border-platin hover:text-white"
            }`}
          >
            {t("simulator.btn_agent")}
          </button>
          {logs.length > 0 && !activeSim && (
            <button
              onClick={clearLogs}
              className="px-4 py-2 border border-dashed border-red-950 text-red-400/80 hover:text-red-400 hover:border-red-800 rounded-[2px] text-[10px] tracking-wider uppercase transition-colors"
            >
              {t("simulator.clear")}
            </button>
          )}
        </div>
      </div>

      {/* Terminal Screen */}
      <div className="bg-surface-1 border border-rule/50 p-4 rounded min-h-[220px] max-h-[320px] overflow-y-auto space-y-2 text-text-dim text-[11px] leading-relaxed relative">
        {logs.length === 0 ? (
          <div className="text-text-faint italic select-none">
            &gt; SYSTEM IDLE. READY FOR VERIFICATION REQUESTS...
          </div>
        ) : (
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div
                key={index}
                className={`whitespace-pre-wrap ${
                  log.includes("SUCCESS")
                    ? "text-emerald-400 font-semibold"
                    : log.includes("KRİTİK") || log.includes("CRITICAL")
                    ? "text-red-400"
                    : log.startsWith("[SHA-256]")
                    ? "text-platin font-medium"
                    : ""
                }`}
              >
                {log}
              </div>
            ))}

            {/* Cryptographic Hash Rolling Effect */}
            {activeSim && currentHash && (
              <div className="text-platin-dim animate-pulse pt-2 border-t border-rule/20 mt-2">
                <div>{t("simulator.hash_gen")}</div>
                <div className="text-[10px] tracking-tight break-all font-sans text-platin opacity-80">
                  {currentHash}
                </div>
              </div>
            )}
          </div>
        )}
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
