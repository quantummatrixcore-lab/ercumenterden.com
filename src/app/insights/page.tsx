import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export default function InsightsPage() {
  const articles: Article[] = [
    {
      slug: "verification-economy",
      title: "Doğrulama Ekonomisi: Yapay Zeka Çağında Güveni Yeniden Tanımlamak",
      category: "MANIFESTO",
      date: "Haziran 2026",
      readTime: "6 Dk Okuma",
      excerpt: "Otonom yapay zeka ajanlarının ve sınır ötesi veri akışlarının hakim olduğu yeni dünyada, geleneksel denetimler yavaş kalıyor. Matematiksel olarak doğrulanabilir sistem mimarilerini kurmak neden geleceğin tek güven seçeneği?",
    },
    {
      slug: "ai-safety-audits",
      title: "LLM Davranış Denetimi: EU AI Act & KVKK Perspektifinden Güvenlik Modelleri",
      category: "AI SAFETY",
      date: "Mayıs 2026",
      readTime: "8 Dk Okuma",
      excerpt: "Büyük dil modellerinin ürettiği çıktıların etik ve yasal sınırlarda tutulması sadece yazılımsal bir filtre değil, kurumsal risk yönetimi problemidir. Stripe-like otonom koruma katmanlarının mimari analizi.",
    },
    {
      slug: "cbam-2026-compliance",
      title: "EU CBAM 2026 ve dMRV: Karbon Emisyonlarında Gerçek Zamanlı Doğrulama Altyapısı",
      category: "CARBON MARKETS",
      date: "Nisan 2026",
      readTime: "10 Dk Okuma",
      excerpt: "Sınırda Karbon Düzenleme Mekanizması'na (CBAM) uyum sağlamak isteyen ihracatçıların karbon emisyonlarını dijital verilerle (dMRV) nasıl kanıtlayabileceğini ve bunun küresel ticaret dengelerindeki rolünü inceliyoruz.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <div className="space-y-4 border-b border-rule pb-8 mb-12">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            Araştırmalar & Düşünce Liderliği
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-platin leading-none">
            İçgörüler
          </h1>
          <p className="font-sans text-sm text-text-dim max-w-2xl leading-relaxed">
            Yapay zeka etiği, otonom sistem güvenliği, karbon sertifikasyonu ve sınır ötesi dijital regülasyonlar üzerine derinlemesine teknik analizler ve teolojik tezler.
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
                  Tezi Oku →
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
