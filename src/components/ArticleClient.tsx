"use client";

import React from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function ArticleClient({ slug }: { slug: string }) {
  const { t } = useLanguage();

  const articlesDb = t("insights.articlesDb") || {};
  const article = articlesDb[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mx-auto max-w-3xl px-6 py-20">
        {/* Back Link */}
        <Link
          href="/insights"
          className="font-mono-custom text-[10px] tracking-[0.15em] uppercase text-text-dim hover:text-platin transition-colors mb-8 inline-block"
        >
          {t("insights.back_to_list")}
        </Link>

        {/* Article Header */}
        <div className="space-y-4 border-b border-rule pb-8 mb-8">
          <div className="flex items-center gap-4 text-text-faint font-mono-custom text-[9px] tracking-[0.15em] uppercase">
            <span className="text-platin">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-platin leading-[1.1]">
            {article.title}
          </h1>
          <p className="font-sans text-sm text-text-dim leading-relaxed italic border-l border-rule pl-4">
            {article.summary}
          </p>
        </div>

        {/* Article Body */}
        <div
          className="font-sans text-[15px] leading-[1.8] text-text-dim space-y-6"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </main>
      <Footer />
    </div>
  );
}
