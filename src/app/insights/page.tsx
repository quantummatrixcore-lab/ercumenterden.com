"use client";

import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export default function InsightsPage() {
  const { t } = useLanguage();
  const articles: Article[] = t("insights.articles") || [];

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <div className="space-y-4 border-b border-rule pb-8 mb-12">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            {t("insights.eyebrow")}
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-platin leading-none">
            {t("insights.title")}
          </h1>
          <p className="font-sans text-sm text-text-dim max-w-2xl leading-relaxed">
            {t("insights.description")}
          </p>
        </div>

        {/* Article Grid */}
        <div className="space-y-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="elite-card flex flex-col justify-between select-none cursor-pointer block group"
            >
              <div>
                <div className="space-y-4">
                  {/* Meta details */}
                  <div className="flex items-center gap-4 text-text-faint font-mono-custom text-[9px] tracking-[0.15em] uppercase">
                    <span className="text-platin">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-platin group-hover:text-platin-dim transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-sm text-text-dim leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="mt-6 pt-4 border-t border-rule/50 flex items-center justify-between">
                <span className="font-mono-custom text-[9px] tracking-[0.15em] uppercase text-platin-dim group-hover:text-platin transition-colors">
                  {t("insights.read_thesis")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
