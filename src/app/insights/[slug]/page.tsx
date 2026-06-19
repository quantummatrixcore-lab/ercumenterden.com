import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticleContent {
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  contentHtml: string;
}

const articlesDb: Record<string, ArticleContent> = {
  "verification-economy": {
    title: "Doğrulama Ekonomisi: Yapay Zeka Çağında Güveni Yeniden Tanımlamak",
    category: "MANIFESTO",
    date: "Haziran 2026",
    readTime: "6 Dk Okuma",
    summary: "Otonom yapay zeka ajanlarının ve sınır ötesi veri akışlarının hakim olduğu yeni dünyada, geleneksel denetimler yavaş kalıyor. Matematiksel olarak doğrulanabilir sistem mimarilerini kurmak neden geleceğin tek güven seçeneği?",
    contentHtml: `
      <p>İnsanlık tarihi boyunca güven, kurumlar ve merkezileştirilmiş otoriteler aracılığıyla tesis edildi. Devletler, noterler, denetim şirketleri ve yasal sözleşmeler; ekonomik ilişkilerin sürdürülebilmesini sağlayan hantal ama işlevsel araçlardı. Ancak yapay zeka ajanlarının milisaniyeler içinde kararlar aldığı, otonom mikro ödemelerin gerçekleştiği ve verilerin sınır tanımadan dolaştığı 2026 yılı dünyasında, bu geleneksel mekanizmalar çökmektedir.</p>
      
      <h3 className="font-display text-2xl text-platin mt-8 mb-4">Hız ve Ölçek Uyuşmazlığı</h3>
      <p>Bir denetim şirketinin üç ayda bir hazırladığı bir finansal rapor veya bir regülasyon kurumunun yılda bir yaptığı yerinde denetim, saniyede milyonlarca karar alan otonom yapay zeka ağları için tamamen işlevsizdir. Kararın alındığı an ile doğrulandığı an arasındaki süre sıfıra yaklaşmalıdır. Bu gecikme, otonom sistemlerde ciddi suistimal ve zafiyet boşlukları yaratır.</p>
      
      <blockquote className="font-display text-lg text-platin-dim border-l-2 border-platin pl-4 my-6 italic">
        "Eğer bir sistemin davranışını, verisini veya çıktısını gerçek zamanlı olarak ölçemiyorsanız; ona otonomi devredemezsiniz. Ölçülemeyen şeye güvenilemez."
      </blockquote>
      
      <h3 className="font-display text-2xl text-platin mt-8 mb-4">Matematiksel ve Programlanabilir Güven</h3>
      <p>Doğrulama Ekonomisi (Verification Economy), güvenin subjektif beyanlardan veya kağıt üzerindeki imzalardan arındırılarak kriptografik kanıtlara, gerçek zamanlı telemetrilere ve otonom denetim API'lerine devredilmesini öngörür. Karbon emisyonu ölçümünde uydu verilerinin manipüle edilemez akıllı sözleşmelere yazılması (dMRV) veya bir LLM'in her token üretiminde etik filtrelere tabi tutulması (MBS), bu yeni ekonominin temel direkleridir.</p>
      
      <p>Gelecekte şirketlerin marka değeri, pazarlama bütçeleriyle değil; sistemlerinin ürettiği kriptografik doğrulama kanıtlarının sıklığı ve kalitesiyle ölçülecektir.</p>
    `,
  },
  "ai-safety-audits": {
    title: "LLM Davranış Denetimi: EU AI Act & KVKK Perspektifinden Güvenlik Modelleri",
    category: "AI SAFETY",
    date: "Mayıs 2026",
    readTime: "8 Dk Okuma",
    summary: "Büyük dil modellerinin ürettiği çıktıların etik ve yasal sınırlarda tutulması sadece yazılımsal bir filtre değil, kurumsal risk yönetimi problemidir. Stripe-like otonom koruma katmanlarının mimari analizi.",
    contentHtml: `
      <p>Yapay zeka modellerinin iş süreçlerine entegrasyonu, şirketler için muazzam bir verimlilik sağlarken beraberinde öngörülemeyen yasal riskler getirmektedir. Büyük Dil Modellerinin (LLM) doğasında bulunan 'halüsinasyon' eğilimi, veri sızıntıları ve prompt injection saldırıları, yapay zekayı bir güvenlik açığı haline getirebilir. Özellikle EU AI Act ve KVKK gibi katı regülasyonlar yürürlüğe girerken, otonom sistemlerin denetlenmesi kaçınılmaz bir zorunluluktur.</p>
      
      <h3 className="font-display text-2xl text-platin mt-8 mb-4">Model Behavior Security (MBS) Mimarisi</h3>
      <p>Geleneksel web uygulamalarında uygulanan firewall ve veri tabanı güvenlik protokolleri, yapay zeka modellerinin dinamik ve olasılıksal dünyasında çalışmaz. MBS, modelin girdilerini (prompts) ve çıktılarını (outputs) gerçek zamanlı olarak analiz eden, otonom bir denetim proxy'sidir. Bu katman, hassas verilerin (kişisel veriler, ticari sırlar) dışarı sızmasını engellerken, modelin zararlı veya yasaklı çıktılar üretmesini milisaniyeler düzeyinde engeller.</p>
      
      <blockquote className="font-display text-lg text-platin-dim border-l-2 border-platin pl-4 my-6 italic">
        "Yapay zeka güvenliği, model eğitim aşamasında biten bir süreç değildir; modelin her çalıştığı saniye dinamik olarak uygulanması gereken aktif bir denetim sürecidir."
      </blockquote>
      
      <h3 className="font-display text-2xl text-platin mt-8 mb-4">Regülasyona Uyum</h3>
      <p>EU AI Act, yüksek riskli yapay zeka sistemlerinin sürekli olarak izlenmesini, kayıt altına alınmasını ve risk değerlendirme raporlarının otomatik olarak oluşturulmasını talep etmektedir. AlparAI gibi Stripe benzeri otonom API entegrasyonları, geliştiricilere hiçbir kod karmaşası yaratmadan modellerini regülasyon uyumlu hale getirme ve denetlenebilir güvenlik skorları üretme imkanı tanır.</p>
    `,
  },
  "cbam-2026-compliance": {
    title: "EU CBAM 2026 ve dMRV: Karbon Emisyonlarında Gerçek Zamanlı Doğrulama Altyapısı",
    category: "CARBON MARKETS",
    date: "Nisan 2026",
    readTime: "10 Dk Okuma",
    summary: "Sınırda Karbon Düzenleme Mekanizması'na (CBAM) uyum sağlamak isteyen ihracatçıların karbon emisyonlarını dijital verilerle (dMRV) nasıl kanıtlayabileceğini ve bunun küresel ticaret dengelerindeki rolünü inceliyoruz.",
    contentHtml: `
      <p>Avrupa Birliği'nin Sınırda Karbon Düzenleme Mekanizması (CBAM), 2026 yılı itibarıyla geçiş dönemini tamamlayarak tam mali yükümlülüklerle yürürlüğe giriyor. Artık çimento, demir-çelik, alüminyum, gübre, elektrik ve hidrojen gibi sektörlerde AB'ye ihracat yapan firmalar, ürettikleri ürünlerin karbon ayak izini kuruşu kuruşuna beyan etmek ve buna karşılık gelen karbon vergilerini ödemek zorundadır.</p>
      
      <h3 className="font-display text-2xl text-platin mt-8 mb-4">Manuel MRV'nin Çöküşü</h3>
      <p>Klasik karbon ölçüm süreçleri (MRV); danışmanlık firmalarının yılda bir kez tesislere gelerek faturaları incelemesine, manuel formlar doldurmasına ve tahmini emisyon katsayıları kullanmasına dayanır. Bu süreçler son derece yavaş olmakla birlikte, insan hatasına, veri manipülasyonuna açık ve maliyetlidir. AB denetçilerinin bu beyanları reddetmesi durumunda ihracatçılar ağır cezalar ve gümrük engelleriyle karşılaşabilir.</p>
      
      <blockquote className="font-display text-lg text-platin-dim border-l-2 border-platin pl-4 my-6 italic">
        "Yeşil ticaret savaşlarının başladığı bu yeni dönemde karbon emisyonu, sadece bir çevre raporu değil; gümrük kapılarından geçişi belirleyen kritik bir finansal veridir."
      </blockquote>
      
      <h3 className="font-display text-2xl text-platin mt-8 mb-4">Merkeziyetsiz Ölçüm ve Doğrulama (dMRV)</h3>
      <p>Geliştirdiğimiz dMRV protokolü, tesislerin IoT enerji sayaçlarından, üretim hattı sensörlerinden ve uydu radar (SAR) görüntülerinden beslenerek emisyon verilerini otonom olarak toplar. Makine öğrenimi algoritmalarıyla analiz edilen veri, kriptografik olarak imzalanarak blokzincir ağına yazılır. Bu sayede, AB gümrük otoriteleri veya uluslararası bağımsız denetçiler, beyan edilen karbon değerlerinin doğruluğunu saniyeler içinde doğrudan kaynaktan sorgulayabilirler.</p>
    `,
  },
};

export async function generateStaticParams() {
  return [
    { slug: "verification-economy" },
    { slug: "ai-safety-audits" },
    { slug: "cbam-2026-compliance" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
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
          ← Tüm Makalelere Dön
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
