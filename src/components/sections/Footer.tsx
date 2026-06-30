"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-rule bg-ink py-16 mt-auto">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Mark */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="font-display text-xl text-platin tracking-wide">
            Ercüment Erden
          </span>
          <span className="font-mono-custom text-[8px] tracking-[0.15em] uppercase text-text-faint">
            AI Ethics Advocate & Verification Infrastructure Architect | Founder, ALPAR AI
          </span>
        </div>

        {/* Technical Navigation */}
        <div className="flex flex-wrap justify-center gap-8 font-mono-custom text-[10px] tracking-[0.18em] uppercase">
          <a
            href="https://linkedin.com/in/ercumenterden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-cyan-neon transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://alparai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-cyan-neon transition-colors duration-200"
          >
            alparai.com
          </a>
          <a
            href="#ecosystem"
            className="text-text-dim hover:text-emerald-neon transition-colors duration-200"
          >
            Ekosistem
          </a>
          <a
            href="#manifesto"
            className="text-text-dim hover:text-purple-neon transition-colors duration-200"
          >
            Manifesto
          </a>
          <a
            href="mailto:ercument@ercumenterden.com"
            className="text-text-dim hover:text-platin transition-colors duration-200"
          >
            ercument@ercumenterden.com
          </a>
        </div>

        {/* Copy & Core Philosophy */}
        <div className="flex flex-col items-center md:items-end space-y-1">
          <div className="font-mono-custom text-[9px] tracking-[0.12em] text-text-faint">
            © {currentYear} EE. TÜM HAKLARI SAKLIDIR.
          </div>
          <div className="font-mono-custom text-[7px] tracking-[0.2em] text-platin-dim uppercase">
            ENGINE VERSION: QUANTUM MATRIX V7.4.2
          </div>
        </div>
      </div>
    </footer>
  );
}
