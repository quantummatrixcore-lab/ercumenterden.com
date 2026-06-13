"use client";

import { motion } from "framer-motion";
import { Droplet, Shield, Cpu, Leaf, Server, Activity } from "lucide-react";
import { useState } from "react";

// Ecosystem Modules Data
const ecosystemModules = [
  {
    id: "alpar-ai",
    name: "AlparAI",
    description: "MBS architecture & TITAN-ECLIPSE protocols. AI-native monitoring & cybersecurity.",
    icon: Shield,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-cyan-500/30",
    glow: "shadow-[0_0_15px_rgba(0,255,255,0.15)]",
  },
  {
    id: "carbon-eco",
    name: "CarbonEcoMarket",
    description: "Corporate & agricultural carbon market platform. Direct compliance and tracking.",
    icon: Leaf,
    color: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]",
  },
  {
    id: "ayaz-water",
    name: "AyazWater",
    description: "Smart hardware ecosystem (Elite & Eco) distributing vitamin/mineral water.",
    icon: Droplet,
    color: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-500/30",
    glow: "shadow-[0_0_15px_rgba(14,165,233,0.15)]",
  },
  {
    id: "fresh-rider",
    name: "FreshRider",
    description: "Innovative helmet cleaning vending machines with integrated perfume pump systems.",
    icon: Activity,
    color: "from-fuchsia-500/20 to-purple-500/20",
    border: "border-fuchsia-500/30",
    glow: "shadow-[0_0_15px_rgba(217,70,239,0.15)]",
  },
  {
    id: "decas-hub",
    name: "DecasHub & Agent-OS",
    description: "Modular software pools & multi-agent orchestrations (Frontend, Backend, LLM Gateways).",
    icon: Server,
    color: "from-violet-500/20 to-indigo-500/20",
    border: "border-violet-500/30",
    glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]",
  },
];

export default function DashboardEntry() {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Core Question / Core Philosophy */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mb-16 text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 tracking-wider uppercase mb-4 border border-cyan-500/20">
          <Cpu className="w-3 h-3" /> System Initiation: Venture Studio OS
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          Ercüment Erden <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Ecosystem</span>
        </h1>
        <p className="text-sm md:text-base font-mono text-gray-400 max-w-2xl mx-auto italic opacity-80 mt-6">
          "Bu dünyayı daha iyi bir yer yapıyor mu?"
        </p>
      </motion.div>

      {/* Modules Grid - Antigravity Interaction */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecosystemModules.map((mod, idx) => {
          const Icon = mod.icon;
          const isHovered = hoveredModule === mod.id;
          
          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1, 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
              }}
              onHoverStart={() => setHoveredModule(mod.id)}
              onHoverEnd={() => setHoveredModule(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`
                group relative p-6 rounded-2xl glass-panel border overflow-hidden
                cursor-crosshair transition-all duration-300
                ${mod.border} ${isHovered ? mod.glow : ''}
              `}
            >
              {/* Dynamic Background Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md">
                    <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#00f0ff] transition-all" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-sans tracking-wide">
                  {mod.name}
                </h3>
                
                <p className="text-sm text-gray-400 font-mono leading-relaxed group-hover:text-gray-300 transition-colors">
                  {mod.description}
                </p>
                
                <div className="mt-auto pt-6 flex items-center text-xs font-mono text-cyan-500/0 group-hover:text-cyan-400 transition-colors">
                  <span className="mr-2">Initialize Module</span>
                  <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Status Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed bottom-0 left-0 w-full h-12 glass-panel border-t border-white/5 flex items-center justify-between px-6 text-xs font-mono text-gray-500 z-50"
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SYSTEM ONLINE
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">ZERO-HUMAN-INTERVENTION</span>
        </div>
        <div className="flex items-center gap-4">
          <span>V.2026.1</span>
          <span className="text-cyan-500/50">TITAN-UIX</span>
        </div>
      </motion.div>
    </main>
  );
}
