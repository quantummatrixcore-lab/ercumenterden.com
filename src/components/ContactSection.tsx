'use client';

import React, { useState } from 'react';
import { content, Language } from '@/data/content';
import {
  Mail,
  Copy,
  Check,
  Send,
  Lock,
  MapPin,
  Key,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = content[lang].contact;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: t.inquiryOptions[0],
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.emailValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative border-b border-white/10 bg-[#05070C] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0E17] px-3.5 py-1 text-xs font-mono font-medium text-[#00F0FF]">
            <Mail className="h-3.5 w-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Executive Info & PGP Key */}
          <div className="space-y-6 lg:col-span-5">
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                <Mail className="h-4 w-4 text-[#00F0FF]" />
                <span>{t.emailLabel}</span>
              </div>
              <div className="mt-3">
                <a
                  href={`mailto:${t.emailValue}`}
                  className="font-mono text-lg font-bold text-white transition-colors hover:text-[#00F0FF] sm:text-xl"
                >
                  {t.emailValue}
                </a>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#0A0E17] px-3.5 py-2 font-mono text-xs font-semibold text-zinc-200 transition-all hover:border-[#00F0FF]/50 hover:text-[#00F0FF]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#06D6A0]" />
                      <span className="text-[#06D6A0]">{t.copiedNotice}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{t.copyAction}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Cryptographic Node & Fingerprint Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 font-mono text-xs space-y-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <Key className="h-4 w-4 text-[#06D6A0]" />
                <span className="font-semibold uppercase tracking-wider">Cryptographic Identity</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#05070C] p-3 text-zinc-300 break-all text-[11px]">
                {t.securityFingerprint}
              </div>

              <div className="flex items-center gap-2 text-zinc-400 pt-2 border-t border-white/10">
                <MapPin className="h-4 w-4 text-[#00F0FF]" />
                <span>{t.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                  {t.formTitle}
                </h3>
                <span className="flex items-center gap-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#00F0FF]">
                  <Lock className="h-3 w-3" />
                  <span>ENCRYPTED CHANNEL</span>
                </span>
              </div>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-[#06D6A0]/30 bg-[#06D6A0]/10 p-6 text-center">
                  <ShieldCheck className="mx-auto h-10 w-10 text-[#06D6A0]" />
                  <h4 className="mt-3 font-mono text-base font-bold text-white">
                    DISPATCH CONFIRMED
                  </h4>
                  <p className="mt-2 text-sm text-zinc-300">
                    {t.sentSuccess}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 rounded-lg border border-white/20 bg-[#0A0E17] px-4 py-2 font-mono text-xs text-zinc-200 hover:text-white"
                  >
                    Send Another Briefing
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Partner, Benchmark Capital / Researcher, Max Planck"
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070C] px-4 py-3 font-mono text-sm text-white placeholder-zinc-400 focus:border-[#00F0FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      {t.emailInputLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. executive@institution.com"
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070C] px-4 py-3 font-mono text-sm text-white placeholder-zinc-400 focus:border-[#00F0FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      {t.inquiryTypeLabel}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070C] px-4 py-3 font-mono text-sm text-white focus:border-[#00F0FF] focus:outline-none"
                    >
                      {t.inquiryOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="bg-[#0A0E17] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      {t.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline mission scope, strategic parameters, and timeframe..."
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070C] px-4 py-3 font-mono text-sm text-white placeholder-zinc-400 focus:border-[#00F0FF] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#00F0FF] bg-[#00F0FF] py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#05070C] shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:bg-white hover:border-white"
                  >
                    <span>{t.sendButton}</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
