import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectDetails {
  name: string;
  badge: string;
  status: string;
  techLabel: string;
  tagline: string;
  problem: string;
  solution: string;
  socialProof: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
}

const db: Record<string, ProjectDetails> = {
  "carbon-eco-market": {
    name: "CarbonEcoMarket",
    badge: "Doğrulama",
    status: "EU CBAM 2026 Uyumlu",
    techLabel: "INFRA: DECENTRALIZED MRV",
    tagline: "Blockchain ve uydu verisiyle CBAM 2026 uyumlu karbon doğrulama.",
    problem: "Sınırda Karbon Düzenleme Mekanizması (EU CBAM) 2026 yılında yürürlüğe giriyor. İhracatçı firmaların emisyonlarını manipüle etmeden, denetlenebilir ve şeffaf bir şekilde bildirmesi gerekiyor. Klasik danışmanlık ve manuel ölçüm süreçleri pahalı, yavaş ve hataya çok açıktır.",
    solution: "CarbonEcoMarket; uydu radar verileri, IoT sensörleri ve tescilli makine öğrenimi modellerini birleştirerek karbon yutak alanlarını ve endüstriyel emisyonları gerçek zamanlı olarak izler. Elde edilen veriler, dMRV (decentralized Measurement, Reporting, Verification) altyapımız aracılığıyla değiştirilemez bir blokzincir defterine kaydedilir ve uluslararası denetçiler için anında raporlanır.",
    socialProof: "TİM (Türkiye İhracatçılar Meclisi) Pilot Ortaklığı & 14 Büyük Sanayi İhracatçısı ile LOI Anlaşması imzalanmış, pilot emisyon ölçümleri başarıyla sürdürülmektedir.",
    metrics: [
      { label: "Ölçüm Doğruluğu", value: "98.5%" },
      { label: "Veri Onay Hızı", value: "0.5s" },
      { label: "CBAM 2026 Hazırlık", value: "100%" },
    ],
    techStack: ["Satellite Radar (SAR)", "Solidity / EVM", "Next.js", "Python / ML"],
  },
  "alpar-ai": {
    name: "AlparAI",
    badge: "Güvenlik",
    status: "Stripe for AI Safety",
    techLabel: "API: AI SAFETY PLATFORM",
    tagline: "Yapay zeka modelleri için anlık güven skoru, güvenlik duvarı ve etik denetim.",
    problem: "Yapay zeka modelleri ve otonom ajanlar iş süreçlerine entegre edildikçe halüsinasyon, veri sızıntısı, prompt injection ve etik dışı davranış riskleri artıyor. EU AI Act ve KVKK yasal düzenlemeleri, bu modellerin çıktılarının izlenmesini ve denetlenmesini zorunlu kılmaktadır.",
    solution: "AlparAI, LLM'ler ile kullanıcı veya iç veritabanları arasında konumlanan ultra hızlı bir güvenlik ve doğrulama katmanıdır. Gelen istemleri (prompts) ve üretilen yanıtları anlık analiz eder, bir 'güven skoru' üretir ve yasalara aykırı veya riskli içeriği milisaniyeler içinde bloke eder.",
    socialProof: "FinTech sektöründe 3 büyük pilot entegrasyon tamamlanmış ve bugüne kadar 5.2 Milyon üzerinde canlı API talebi otonom olarak denetlenip raporlanmıştır.",
    metrics: [
      { label: "API Gecikmesi", value: "<15ms" },
      { label: "Filtreleme Hassasiyeti", value: "99.9%" },
      { label: "Yasal Uyum Sinyali", value: "Uyumlu" },
    ],
    techStack: ["LLM Guardrails", "Rust / WASM", "FastAPI", "Vector Embeddings"],
  },
  "decas-hub": {
    name: "DecasHub",
    badge: "Risk Simülasyonu",
    status: "12 Ajanlı Stres Testi",
    techLabel: "CORE: STARTUP SIMULATOR",
    tagline: "12 otonom yapay zeka ajanı koordine ederek girişim risk ve stres testi.",
    problem: "Girişimlerin %90'ı pazar uyumsuzluğu, hatalı finansal varsayımlar, zayıf kod kalitesi veya yetersiz kriz yönetimi sebebiyle ilk yıllarında kapanıyor. Bu riskleri fiziksel veya finansal kaynak harcamadan önce öngörmek kritik bir ihtiyaçtır.",
    solution: "DecasHub, bir girişimin tüm departmanlarını ve pazar paydaşlarını temsil eden 12 otonom AI ajanından (CEO, CFO, CTO, VCs, Users, Competitors vb.) oluşan sanal bir pazar laboratuvarıdır. Girişimin iş modeli ve kod yapısı sisteme yüklenir; ajanlar yüzlerce farklı senaryoda projeyi stres testine tabi tutarak zayıf noktaları raporlar.",
    socialProof: "50+ Girişim Simülasyon Test Raporu oluşturulmuş ve girişimlerin pazar başarısı ile 92% korelasyona sahip olduğu bağımsız yatırım kurulları tarafından tescillenmiştir.",
    metrics: [
      { label: "Otonom Ajan Sayısı", value: "12" },
      { label: "Simülasyon Senaryosu", value: "150+" },
      { label: "Tahmin Tutarlılığı", value: "92%" },
    ],
    techStack: ["Multi-Agent OS", "LangChain / LangGraph", "Python", "TypeScript"],
  },
  "lionexia": {
    name: "Lionexia",
    badge: "Altyapı",
    status: "Ekosistem Motoru",
    techLabel: "ENGINE: OPERATIONS & SAAS",
    tagline: "Girişimlerin yazılım ve otonom operasyon süreçlerini hızlandıran dijital motor.",
    problem: "Venture studio altındaki farklı projelerin sıfırdan kurulması, altyapı yönetimi, CI/CD kurulumları, veritabanı ölçeklemeleri ve temel SaaS modüllerinin yazılması her seferinde ciddi zaman ve insan gücü kaybına yol açmaktadır.",
    solution: "Lionexia; tüm ekosistem projelerinin ortak kullandığı modüler yazılım havuzlarını, otomatik API oluşturucularını ve Vercel/AWS dağıtım süreçlerini yöneten otonom bir geliştirme omurgasıdır. Yeni bir doğrulama fikri doğduğunda, Lionexia sayesinde saatler içinde canlıya alınarak test edilebilir.",
    socialProof: "Venture Studio bünyesindeki 10+ alt projenin tüm bulut altyapısını ve otonom operasyonlarını %99.99 SLA taahhüdüyle otonom olarak yönetmektedir.",
    metrics: [
      { label: "Canlıya Alım Süresi", value: "<2 Saat" },
      { label: "Sistem Çalışma Süresi", value: "99.99%" },
      { label: "Geliştirme Hızı", value: "x5 Hızlı" },
    ],
    techStack: ["Kubernetes", "Next.js / Tailwind", "GitHub Actions", "Docker"],
  },
  "fresh-rider": {
    name: "FreshRider",
    badge: "Fiziksel IoT",
    status: "IoT Kask Otomatı",
    techLabel: "HARDWARE: IoT AUTOMATION",
    tagline: "Mikromobilite kullanıcıları için IoT kask otomatı ve hijyen doğrulama.",
    problem: "Paylaşımlı scooter ve bisiklet kullananlar kask taşımak istemiyor, bu da kazalardaki yaralanma risklerini artırıyor. Araçlardaki mevcut kaskların ise temizlik durumları ve fiziksel darbe alıp almadıkları hiçbir şekilde doğrulanamıyor.",
    solution: "FreshRider, paylaşımlı araç istasyonlarına entegre çalışan akıllı bir IoT kask otomatıdır. Kasklar her kullanım sonrasında otomat içinde 99.9% oranında sterilize edilir. IoT sensörleri yardımıyla kaskın darbe alıp almadığı ve hijyen derecesi sürekli ölçülerek sadece doğrulanmış güvenli kaskların kilidi açılır.",
    socialProof: "İBB iştirakleri ve mikromobilite operatörleri ile ortak saha testleri gerçekleştirilmiş, 100'ün üzerinde aktif pilot kullanıcı verisi sahada doğrulanmıştır.",
    metrics: [
      { label: "Sterilizasyon Oranı", value: "99.9%" },
      { label: "IoT Sensör Denetimi", value: "5 Yönlü" },
      { label: "Uyumlu Araç Entegr.", value: "100%" },
    ],
    techStack: ["IoT Firmware (C++)", "UV-C Sterilization", "RFID / Bluetooth", "Raspberry Pi"],
  },
};

export async function generateStaticParams() {
  return [
    { slug: "carbon-eco-market" },
    { slug: "alpar-ai" },
    { slug: "decas-hub" },
    { slug: "lionexia" },
    { slug: "fresh-rider" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = db[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-20">
        {/* Back Button */}
        <Link
          href="/#ecosystem"
          className="font-mono-custom text-[10px] tracking-[0.15em] uppercase text-text-dim hover:text-platin transition-colors mb-8 inline-block"
        >
          ← Ekosisteme Dön
        </Link>

        {/* Title Block */}
        <div className="space-y-4 border-b border-rule pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono-custom text-[9px] tracking-[0.16em] uppercase px-2 py-0.5 border border-rule bg-surface-3 text-platin-dim">
              {project.badge}
            </span>
            <span className="font-mono-custom text-[10px] tracking-[0.1em] text-text-faint">
              {project.status}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-platin p-card-name leading-none">
            {project.name}
          </h1>
          <div className="font-mono-custom text-[11px] tracking-[0.18em] text-platin-dim">
            {project.techLabel}
          </div>
          <p className="font-display text-lg md:text-xl text-text-dim italic leading-relaxed pt-2">
            "{project.tagline}"
          </p>
        </div>

        {/* Project Description (Problem & Solution) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
          <div className="space-y-3">
            <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
              Sorun
            </h3>
            <p className="font-sans text-sm text-text-dim leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
              Çözüm ve Doğrulama
            </h3>
            <p className="font-sans text-sm text-text-dim leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Social Proof & Partnerships */}
        {project.socialProof && (
          <div className="border-t border-rule py-8 space-y-3">
            <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
              Sosyal Kanıt & Doğrulama Ortakları
            </h3>
            <p className="font-sans text-sm text-text-dim leading-relaxed italic border-l-2 border-platin pl-4 bg-surface-1/30 py-3 pr-4 rounded-r-[2px]">
              {project.socialProof}
            </p>
          </div>
        )}

        {/* Verification Metrics Panel */}
        <div className="bg-surface-1 border border-rule p-8 rounded-lg mb-12">
          <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin mb-6 border-b border-rule/50 pb-2">
            Doğrulama Metrikleri (Static Verify)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-display text-3xl text-platin leading-none">
                  {metric.value}
                </div>
                <div className="font-mono-custom text-[9px] tracking-[0.12em] uppercase text-text-faint">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <h3 className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            Teknoloji Yığını
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono-custom text-[10px] tracking-[0.12em] text-text-dim uppercase bg-surface-2 px-3 py-1 border border-rule-strong rounded-[2px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
