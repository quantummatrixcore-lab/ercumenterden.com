export type Language = 'en' | 'tr';

export interface EcosystemCard {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  features: string[];
  ctaText: string;
  ctaUrl: string;
  accentColor: 'cyan' | 'emerald' | 'amber';
  highlight: string;
}

export interface SyndicateMember {
  name: string;
  role: string;
  organization: string;
  focus: string;
  badge: string;
  accentColor: 'cyan' | 'emerald' | 'amber';
}

export interface CrucibleItem {
  year: string;
  title: string;
  role: string;
  category: string;
  summary: string;
  takeaway: string;
  metrics: string[];
  badge: string;
}

export interface PressItem {
  id: string;
  title: string;
  publication: string;
  journalist: string;
  date: string;
  category: string;
  quote: string;
  url: string;
  status: string;
  readTime: string;
}

export interface ManifestoPrinciple {
  number: string;
  title: string;
  summary: string;
}

export const content = {
  en: {
    nav: {
      monogram: "EE",
      title: "ERCÜMENT ERDEN",
      subtitle: "SOVEREIGN ARCHITECT",
      status: "ISTANBUL • GLOBAL",
      links: [
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "Syndicate", href: "#syndicate" },
        { label: "Crucible", href: "#crucible" },
        { label: "Press", href: "#press" },
        { label: "Manifesto", href: "#manifesto" },
        { label: "Contact", href: "#contact" },
      ],
      officeHoursCta: "Contact",
    },
    hero: {
      badge: "EXECUTIVE AUTHORITY PORTAL",
      subBadge: "Founder & Sovereign Systems Architect • Serial Deep-Tech Entrepreneur",
      titlePrefix: "ERCÜMENT",
      titleSuffix: "ERDEN",
      manifestoLead: "Architecting Sovereign Systems:",
      manifestoSub: "From Hardware to AI Accountability.",
      narrative:
        "In the algorithmic century, building technology is not merely shipping software; it is establishing systemic sovereignty against corporate data harvesting, predatory venture terms, and opaque AI manipulation. Forged in embedded hardware trenches, hardened through sovereign compute battles, and verified in independent civil oversight.",
      primaryCta: "Explore Sovereign Ecosystem",
      secondaryCta: "Review Incident 001 (Grok)",
      directLineCta: "Direct Executive Line",
      ticker: [
        { label: "AGENT-OS", value: "Design stage", desc: "Multi-agent orchestration" },
        { label: "AI AUDIT", value: "Provider audit", desc: "Provider count: UNMEASURED" },
        { label: "DECASHUB", value: "In development", desc: "Venture operating system" },
        { label: "INFRASTRUCTURE", value: "Dedicated servers", desc: "Public site uses a CDN (Cloudflare)" },
      ],
    },
    ecosystem: {
      sectionBadge: "CORE PILLARS",
      sectionTitle: "The Sovereign Ecosystem",
      sectionDescription:
        "Six interlocking deep-tech pillars engineered to enforce algorithmic accountability, bare-metal computing sovereignty, enterprise zero-knowledge privacy, and founder equity protection.",
      cards: [
        {
          id: "alpar-ai",
          badge: "AI FORENSIC & AUDIT INFRASTRUCTURE",
          name: "ALPAR AI",
          tagline: "AI Accountability Registry & Benchmark",
          description:
            "Born out of the xAI Grok 4 passport-data incident, as alleged in press coverage (TÜRKINFORM, 25 June 2026). ALPAR AI audits AI providers' published outputs; incident and provider counters: UNMEASURED until fed, with an as-of date, from the AlparAI database. Covered by TÜRKINFORM (2 articles, dated links). Prepares audit dockets referencing KVKK, GDPR, and the EU AI Act.",
          metrics: [
            { label: "Incident Counter", value: "UNMEASURED" },
            { label: "Provider Count", value: "UNMEASURED" },
            { label: "Legal Dockets", value: "KVKK & EU AI Act" },
          ],
          features: [
            "Forensic AI prompt & payload hash verification",
            "Real-time corporate deceptive pattern and hallucination registry",
            "Pre-litigation evidence bundle generation for regulatory bodies",
            "Continuous automated zero-mock red-teaming",
          ],
          ctaText: "Examine Incident 001: Grok Violation",
          ctaUrl: "https://alparai.com/cases/001-grok-passport",
          accentColor: "cyan",
          highlight: "CASE 001: ALLEGED GROK PASSPORT-DATA INCIDENT (PER PRESS)",
        },
        {
          id: "decashub",
          badge: "AUTONOMOUS VENTURE OS & ACCELERATOR",
          name: "DecasHub Sovereign",
          tagline: "Venture Operating System (in development)",
          description:
            "A venture operating system (in development) for founders. Cryptographic IP timestamping helps establish prior-art dates; valuation and anti-dilution tooling is in development.",
          metrics: [
            { label: "Status", value: "In development" },
            { label: "IP Timestamping", value: "Cryptographic" },
            { label: "Valuation Mode", value: "Algorithmic" },
          ],
          features: [
            "Cryptographic IP timestamping helps establish prior-art dates",
            "Valuation/anti-dilution tooling (in development)",
            "Post-funding autonomous AI CFO capital guardian",
            "Full-stack automated MVP synthesis and dealflow radar",
          ],
          ctaText: "Explore DecasHub Sovereign",
          ctaUrl: "https://decashub.com",
          accentColor: "cyan",
          highlight: "VENTURE OPERATING SYSTEM (IN DEVELOPMENT)",
        },
        {
          id: "dehost",
          badge: "SOVEREIGN BARE-METAL CLOUD",
          name: "DeHost Infrastructure",
          tagline: "Dedicated Bare-Metal Compute & Private Mesh",
          description:
            "High-performance bare-metal server infrastructure built on enterprise Intel Xeon and AMD EPYC clusters. We reduce reliance on hyperscalers; our services run on dedicated bare-metal servers, and our public site uses a CDN (Cloudflare).",
          metrics: [
            { label: "Mesh Latency", value: "UNMEASURED" },
            { label: "Compute Mesh", value: "Xeon / EPYC" },
            { label: "Public Site", value: "CDN (Cloudflare)" },
          ],
          features: [
            "Dedicated bare-metal servers for our services",
            "We aim to reduce reliance on hyperscalers",
            "Private WireGuard mesh between our nodes",
            "Autonomous container orchestration and zero-downtime failover",
          ],
          ctaText: "Inspect Sovereign Cloud",
          ctaUrl: "https://dehost.com.tr",
          accentColor: "amber",
          highlight: "DEDICATED BARE-METAL; REDUCING HYPERSCALER RELIANCE",
        },
        {
          id: "lionexia",
          badge: "B2B FLEET & DATA MASKING GATEWAY",
          name: "LIONEXIA",
          tagline: "Data Masking Gateway (KVKK/GDPR-minded design)",
          description:
            "Enterprise fleet orchestration and a masking gateway using Luhn/Mod97 format-preserving checks. Designed with KVKK/GDPR concepts in mind; not certified. Latency: UNMEASURED.",
          metrics: [
            { label: "Latency", value: "UNMEASURED" },
            { label: "Certification", value: "Not certified" },
            { label: "Masking Engine", value: "Luhn / Mod97" },
          ],
          features: [
            "Masking gateway (latency: UNMEASURED)",
            "Luhn/Mod97 format-preserving PII/PHI redaction proxy",
            "Regulatory-grade immutable data shredding",
            "Enterprise multi-tenant fleet digital twins",
          ],
          ctaText: "Deploy Lionexia Shield",
          ctaUrl: "https://lionexia.com",
          accentColor: "emerald",
          highlight: "DATA MASKING GATEWAY (LATENCY UNMEASURED)",
        },
        {
          id: "smsmarketplace",
          badge: "GLOBAL TELECOM & CPAAS BROKERAGE",
          name: "SMSMARKETPLACE",
          tagline: "Carrier-Grade Masked Messaging & Telecom Gateway",
          description:
            "High-throughput telecommunication routing and masked messaging infrastructure. Delivers carrier-grade global CPaaS connectivity with real-time delivery observability and anti-fraud masking protocols.",
          metrics: [
            { label: "Network Scope", value: "Global" },
            { label: "Architecture", value: "Masked CPaaS" },
            { label: "Throughput", value: "Carrier-Grade" },
          ],
          features: [
            "Carrier-grade global telecom routing and SMS transit",
            "Real-time masked messaging privacy gateways",
            "Automated delivery observability and fraud protection",
            "High-throughput enterprise CPaaS integration",
          ],
          ctaText: "Connect Telecom Brokerage",
          ctaUrl: "https://smsmarketplace.com",
          accentColor: "emerald",
          highlight: "CARRIER-GRADE MASKED TELECOM MESSAGING BROKERAGE",
        },
        {
          id: "agent-os",
          badge: "SOVEREIGN MULTI-AGENT ORCHESTRATION",
          name: "Agent-OS Core",
          tagline: "Autonomous Swarm & Enterprise Digital Twin Layer",
          description:
            "The sovereign orchestration layer coordinating distributed autonomous agents, enterprise digital twins, and workflows across our ventures (design stage).",
          metrics: [
            { label: "Status", value: "Design stage" },
            { label: "Internal Mesh", value: "UNMEASURED" },
            { label: "Orchestration", value: "Multi-agent" },
          ],
          features: [
            "Multi-agent swarm coordination and distributed consensus",
            "Enterprise digital twin synthesis and real-time execution",
            "Zero-copy shared memory architecture",
            "Automated browser and terminal execution telemetry",
          ],
          ctaText: "Review Agentic Architecture",
          ctaUrl: "#contact",
          accentColor: "amber",
          highlight: "MULTI-AGENT ORCHESTRATION (DESIGN STAGE)",
        },
      ] as EcosystemCard[],
    },
    syndicate: {
      sectionBadge: "COUNCIL & GOVERNANCE",
      sectionTitle: "The Sovereign Syndicate",
      sectionSubtitle:
        "Executive authority steering sovereign deep-tech ventures.",
      members: [
        {
          name: "Ercüment Erden",
          role: "Founder & Sovereign Systems Architect",
          organization: "ALPAR AI • DecasHub • DeHost • Lionexia",
          focus:
            "Hardware-to-AI deep-tech architecture, non-dilution venture design, zero-trust autonomous multi-agent orchestration.",
          badge: "CHIEF ARCHITECT",
          accentColor: "cyan",
        },
      ] as SyndicateMember[],
    },
    crucible: {
      sectionBadge: "BATTLE SCARS & MILESTONES",
      sectionTitle: "The Crucible",
      sectionSubtitle:
        "Lessons Forged in Hardware, Regulatory Warfare, and Deep-Tech Architecture",
      items: [
        {
          year: "2019",
          title: "Rabbit Charge: Shared-Powerbank Kiosk Network",
          role: "Founder & System Architect",
          category: "HARDWARE / IOT INFRASTRUCTURE",
          badge: "SHARED IOT KIOSK NETWORK",
          summary:
            "Founded a shared-powerbank rental kiosk network (2019). Managed end-to-end hardware imports from Shenzhen, custom embedded IoT firmware, cloud infrastructure, and native client apps. Deployed kiosk infrastructure in commercial venues.",
          takeaway:
            "The brutal reality of venture: predatory capital demanded excessive equity, starving the runway before transitioning into electric vehicle (EV) charging. The model was later replicated into multi-million dollar corporations by the very investors who listened. The golden lesson: 'Without protective architecture, visionary founders are devoured.'",
          metrics: ["Venue count: UNMEASURED", "Custom Embedded Firmware"],
        },
        {
          year: "2026",
          title: "ALPAR AI & The Alleged Grok Passport-Data Incident",
          role: "Founder & Independent AI Auditor",
          category: "AI TRUST & FORENSIC ACCOUNTABILITY",
          badge: "COVERED BY TÜRKINFORM",
          summary:
            "According to the founder's account and press coverage (TÜRKINFORM, 25 June 2026), Elon Musk's xAI (Grok 4) allegedly promised Delaware incorporation, extracted official passport data under the guise of KYC, and subsequently dismissed the incident as 'a roleplay game.' Ercüment Erden refused victimhood, filed regulatory complaints with data protection authorities and launched ALPAR AI.",
          takeaway:
            "Incident counter: UNMEASURED (to be fed, with an as-of date, from the AlparAI database). Covered by TÜRKINFORM (2 articles, dated links): 'Don't be a victim. Be the auditor.'",
          metrics: ["Incident counter: UNMEASURED", "Provider count: UNMEASURED", "TÜRKINFORM (2 articles)"],
        },
        {
          year: "2026",
          title: "DecasHub Sovereign & The Agent-OS Core",
          role: "Chief Architect & Sovereign Founder",
          category: "AUTONOMOUS VENTURE ARCHITECTURE",
          badge: "SOVEREIGN SYSTEM SINGULARITY",
          summary:
            "Synthesized 7 years of battle scars into DecasHub and Agent-OS. Working on cryptographic IP timestamping to help establish prior-art dates, valuation/anti-dilution tooling (in development), and a multi-agent orchestration layer (design stage).",
          takeaway:
            "We don't train corporate cogs. We forge sovereign CEOs who hold unbreakable mathematical and technological independence.",
          metrics: ["Multi-agent orchestration (design stage)", "Cryptographic IP timestamping", "Autonomous AI CFO"],
        },
      ] as CrucibleItem[],
    },
    press: {
      sectionBadge: "MEDIA & THOUGHT LEADERSHIP",
      sectionTitle: "National Press & Coverage",
      sectionSubtitle:
        "Investigative journalism and thought leadership on algorithmic accountability, published on TÜRKINFORM.",
      articles: [
        {
          id: "turkinform-1",
          title: "Türk Girişimcinin Yaşadığı Grok Skandalı: Kişisel Verilerimiz Risk Altında mı?",
          publication: "TÜRKINFORM",
          journalist: "Sema Ersoy",
          date: "June 25, 2026",
          category: "NATIONAL INVESTIGATION / AI SECURITY",
          quote:
            "\"The danger wasn't the fabricated facts; the real harm was authentic identity documents entering an opaque frontier model under false pretenses, with zero recourse for the victim. That institutional void is why ALPAR AI was born.\"",
          url: "https://turkinform.com.tr/turk-girisimcinin-yasadigi-grok-skandali-kisisel-verilerimiz-risk-altinda-mi",
          status: "TÜRKINFORM ARTICLE",
          readTime: "6 min read",
        },
        {
          id: "turkinform-2",
          title: "Yapay zeka metin filigranları: Şeffaflık var, hesap verilebilirlik yok!",
          publication: "TÜRKINFORM",
          journalist: "Tevhide İrem Zorlu",
          date: "August 14, 2026",
          category: "DEEP ANALYSIS / C2PA & REGULATORY ARCHITECTURE",
          quote:
            "\"Transparency is globalizing while accountability remains national. Watermarks show which model touched the file, but without independent civil records, evidence will crush the innocent party. That is the missing half of AI governance.\"",
          url: "https://turkinform.com.tr/yapay-zeka-metin-filigranlari-seffaflik-var-hesap-verilebilirlik-yok",
          status: "EXPERT ANALYSIS",
          readTime: "8 min read",
        },
      ] as PressItem[],
    },
    manifesto: {
      sectionBadge: "THE ARCHITECT'S CREED",
      sectionTitle: "The Sovereign Manifesto",
      sectionSubtitle: "Three Non-Negotiable Axioms for Founders in the Algorithmic Century",
      principles: [
        {
          number: "01",
          title: "Sovereign Architecture Over Rented Rails",
          summary:
            "If your entire company exists as a thin wrapper over someone else's API or cloud terms of service, you do not own a technology company; you are an uncompensated distribution node. Build local, control your compute kernel, and retain sovereign execution.",
        },
        {
          number: "02",
          title: "Mathematical Protection Over Trusting Predatory Capital",
          summary:
            "Good intentions do not survive board meetings. Founders must protect their equity with cryptographic timestamps, algorithmic valuation benchmarks, and structural anti-dilution armor before signing single term sheet.",
        },
        {
          number: "03",
          title: "Auditing Power Over Digital Subjugation",
          summary:
            "When frontier AI companies claim hallucinations and shrug off identity violations as 'roleplay,' silence is complicity. Don't be a victim. Be the auditor. Demand mathematical proof, legal transparency, and independent civil oversight.",
        },
      ] as ManifestoPrinciple[],
    },
    contact: {
      sectionBadge: "DIRECT LINE",
      sectionTitle: "Contact & Outreach",
      sectionSubtitle:
        "For institutional venture partners, research labs, investigative journalists, and sovereign deep-tech founders.",
      emailLabel: "Direct Executive Line",
      emailValue: "contact@ercumenterden.com",
      copiedNotice: "Copied to clipboard",
      copyAction: "Copy Email",
      formTitle: "Dispatch Strategic Inquiry",
      nameLabel: "Your Name / Organization",
      emailInputLabel: "Institutional Email",
      inquiryTypeLabel: "Inquiry Classification",
      inquiryOptions: [
        "Venture Partnership & DecasHub Sovereign",
        "AI Accountability, ALPAR AI & Incident Audit",
        "DeHost Bare-Metal Infrastructure & Compute",
        "Lionexia Enterprise ZK-Privacy Shield",
        "Agent-OS Core & Enterprise Licensing",
        "Keynote & Institutional Thought Leadership",
        "Press & Investigative Inquiries",
      ],
      messageLabel: "Encrypted Briefing",
      sendButton: "Transmit Inquiry to Sovereign Node",
      sentSuccess: "Inquiry securely received.",
      location: "Istanbul, Turkey • Global Sovereign Node",
    },
    footer: {
      rights: "Ercüment Erden. All Sovereign Rights Reserved.",
      manifestoQuote: "Kurban Olma, Denetçi Ol. Fikirden Egemenliğe.",
      badge: "ENGINEERED IN DEEP ONYX",
      links: [
        { label: "ALPAR AI", href: "https://alparai.com" },
        { label: "DecasHub", href: "https://decashub.com" },
        { label: "DeHost", href: "https://dehost.com.tr" },
        { label: "Lionexia", href: "https://lionexia.com" },
        { label: "TÜRKINFORM", href: "https://turkinform.com.tr" },
      ],
    },
  },
  tr: {
    nav: {
      monogram: "EE",
      title: "ERCÜMENT ERDEN",
      subtitle: "EGEMEN SİSTEMLER MİMARI",
      status: "İSTANBUL • KÜRESEL",
      links: [
        { label: "Ekosistem", href: "#ecosystem" },
        { label: "Heyet", href: "#syndicate" },
        { label: "Ateş Çemberi", href: "#crucible" },
        { label: "Basın", href: "#press" },
        { label: "Manifesto", href: "#manifesto" },
        { label: "İletişim", href: "#contact" },
      ],
      officeHoursCta: "İletişim",
    },
    hero: {
      badge: "ÜST DÜZEY OTORİTE PORTALI",
      subBadge: "Kurucu & Egemen Sistemler Mimarı • Seri Derin-Teknoloji Girişimcisi",
      titlePrefix: "ERCÜMENT",
      titleSuffix: "ERDEN",
      manifestoLead: "Kurban Olma, Denetçi Ol.",
      manifestoSub: "Fikirden Egemenliğe.",
      narrative:
        "Yapay zeka çağında teknoloji üretmek yalnızca yazılım geliştirmek değildir; küresel sermaye gaspına, kurumsal veri ihlallerine ve yapay zeka illüzyonlarına karşı sistemik egemenlik kurmaktır. Sahadaki donanım siperlerinde pişen, egemen sunucu altyapısıyla çelikleşen ve bağımsız sivil denetimle hakkını arayan bir kurucu.",
      primaryCta: "Egemen Ekosistemi Keşfet",
      secondaryCta: "001 Nolu Vakayı İncele (Grok)",
      directLineCta: "Doğrudan Yönetici Hattı",
      ticker: [
        { label: "AGENT-OS", value: "Tasarım aşaması", desc: "Çok ajanlı orkestrasyon" },
        { label: "YAPAY ZEKA DENETİMİ", value: "Sağlayıcı denetimi", desc: "Sağlayıcı sayısı: ÖLÇÜLMEDİ" },
        { label: "DECASHUB", value: "Geliştirme aşamasında", desc: "Girişim işletim sistemi" },
        { label: "ALTYAPI", value: "Özel sunucular", desc: "Genel site CDN (Cloudflare) kullanır" },
      ],
    },
    ecosystem: {
      sectionBadge: "TEMEL KALELER",
      sectionTitle: "Egemen Ekosistem",
      sectionDescription:
        "Yapay zeka çağında kurucunun iradesini, işlemci performansını, veri gizliliğini ve sermaye egemenliğini korumak için tasarlanmış altı kenetli derin teknoloji kalesi.",
      cards: [
        {
          id: "alpar-ai",
          badge: "YAPAY ZEKA GÜVEN VE DENETİM ALTYAPISI",
          name: "ALPAR AI",
          tagline: "Yapay Zeka Hesap Verebilirliği ve İhlal Sicili",
          description:
            "Basında yer alan iddialara göre Elon Musk'ın xAI şirketi (Grok 4) ile yaşanan pasaport kimlik verisi vakasından doğdu (TÜRKINFORM, 25 Haziran 2026). Yapay zeka sağlayıcılarının yayımlanmış çıktılarını denetler; vaka ve sağlayıcı sayacı: ÖLÇÜLMEDİ (AlparAI veritabanından tarihli olarak beslenecek). TÜRKINFORM'da 2 haber (tarihli bağlantılar). KVKK, GDPR ve AB Yapay Zeka Yasası süreçlerine yönelik denetim dosyaları hazırlar.",
          metrics: [
            { label: "Vaka Sayacı", value: "ÖLÇÜLMEDİ" },
            { label: "Sağlayıcı Sayısı", value: "ÖLÇÜLMEDİ" },
            { label: "Hukuki Süreç", value: "KVKK & EU AI Act" },
          ],
          features: [
            "Adli yapay zeka girdi ve çıktı hash doğrulaması",
            "Kurumsal yanıltıcı arayüz, manipülasyon ve halüsinasyon sicili",
            "Düzenleyici kurumlar ve mahkemeler için delil paketi üretimi",
            "Sınır modellerin otonom kırmızı takım (red-team) denetimleri",
          ],
          ctaText: "001 Nolu Grok Skandalını İncele",
          ctaUrl: "https://alparai.com/cases/001-grok-passport",
          accentColor: "cyan",
          highlight: "VAKA 001: BASINA GÖRE İDDİA EDİLEN GROK PASAPORT VERİSİ VAKASI",
        },
        {
          id: "decashub",
          badge: "OTONOM GİRİŞİM İŞLETİM SİSTEMİ & HIZLANDIRICI",
          name: "DecasHub Sovereign",
          tagline: "Girişim İşletim Sistemi (geliştirme aşamasında)",
          description:
            "Kurucular için girişim işletim sistemi (geliştirme aşamasında). Kriptografik IP zaman damgası, önceliği belgelemeye yardımcı olur; değerleme ve seyrelme karşıtı araçlar geliştirme aşamasındadır.",
          metrics: [
            { label: "Durum", value: "Geliştirme aşamasında" },
            { label: "IP Zaman Damgası", value: "Kriptografik" },
            { label: "Değerleme", value: "Algoritmik" },
          ],
          features: [
            "Önceliği belgelemeye yardımcı kriptografik IP zaman damgası",
            "Değerleme/seyrelme karşıtı araçlar (geliştirme aşamasında)",
            "Fonlanan girişimlerin batmasını önleyen otonom yapay zeka CFO",
            "Saatler içinde sıfırdan çalışan tam teşekküllü MVP üretimi ve anlaşma radarı",
          ],
          ctaText: "Egemen Girişimi Keşfet",
          ctaUrl: "https://decashub.com",
          accentColor: "cyan",
          highlight: "GİRİŞİM İŞLETİM SİSTEMİ (GELİŞTİRME AŞAMASINDA)",
        },
        {
          id: "dehost",
          badge: "EGEMEN BARE-METAL BULUT",
          name: "DeHost Infrastructure",
          tagline: "Özel Bare-Metal Sunucular & Özel Ağ",
          description:
            "Kurumsal Intel Xeon ve AMD EPYC kümeleri üzerinde çalışan yüksek başarımlı bare-metal sunucu omurgası. Hiperskaler bağımlılığını azaltmayı hedefliyoruz; hizmetlerimiz özel bare-metal sunucularda çalışır, genel site CDN (Cloudflare) kullanır.",
          metrics: [
            { label: "Ağ Gecikmesi", value: "ÖLÇÜLMEDİ" },
            { label: "İşlem Gücü", value: "Xeon / EPYC" },
            { label: "Genel Site", value: "CDN (Cloudflare)" },
          ],
          features: [
            "Hizmetlerimiz özel bare-metal sunucularda",
            "Hiperskaler bağımlılığını azaltmayı hedefliyoruz",
            "Node'lar arası özel WireGuard ağı",
            "Otonom konteyner orkestrasyonu ve sıfır kesintili yük devretme",
          ],
          ctaText: "Egemen Bulutu İncele",
          ctaUrl: "https://dehost.com.tr",
          accentColor: "amber",
          highlight: "ÖZEL BARE-METAL; HİPERSKALER BAĞIMLILIĞINI AZALTMAK",
        },
        {
          id: "lionexia",
          badge: "B2B FİLO & VERİ MASKELEME GEÇİDİ",
          name: "LIONEXIA",
          tagline: "Maskeleme Ağ Geçidi (KVKK/GDPR ilkelerini gözeten tasarım)",
          description:
            "Kurumsal filo orkestrasyonu ve Luhn/Mod97 biçim koruyucu kontroller kullanan maskeleme ağ geçidi. KVKK/GDPR ilkelerini gözeterek tasarlandı; sertifikalı değildir. Gecikme: ÖLÇÜLMEDİ.",
          metrics: [
            { label: "Gecikme", value: "ÖLÇÜLMEDİ" },
            { label: "Sertifikasyon", value: "Sertifikalı değil" },
            { label: "Maskeleme Motoru", value: "Luhn / Mod97" },
          ],
          features: [
            "Maskeleme ağ geçidi (gecikme: ÖLÇÜLMEDİ)",
            "Luhn/Mod97 biçim koruyucu PII/PHI redaction proxy",
            "Mevzuat düzeyinde tescilli veri imha protokolü",
            "Kurumsal çok-kiracılı (multi-tenant) filo dijital ikizleri",
          ],
          ctaText: "LIONEXIA KALKANINI KUR",
          ctaUrl: "https://lionexia.com",
          accentColor: "emerald",
          highlight: "VERİ MASKELEME GEÇİDİ (GECİKME ÖLÇÜLMEDİ)",
        },
        {
          id: "smsmarketplace",
          badge: "KÜRESEL TELEKOM & CPAAS ALTYAPISI",
          name: "SMSMARKETPLACE",
          tagline: "Taşıyıcı Düzeyinde Maskeli Mesajlaşma ve Telekom Ağ Geçidi",
          description:
            "Yüksek hacimli telekomünikasyon yönlendirmesi ve maskeli mesajlaşma altyapısı. Gerçek zamanlı gönderim izlenebilirliği ve dolandırıcılık önleme protokolleriyle taşıyıcı sınıfı küresel CPaaS bağlantısı.",
          metrics: [
            { label: "Erişim Kapsamı", value: "Küresel" },
            { label: "Mimari", value: "Maskeli CPaaS" },
            { label: "Kapasite", value: "Taşıyıcı Düzeyi" },
          ],
          features: [
            "Taşıyıcı sınıfı küresel telekom yönlendirme ve SMS geçidi",
            "Gerçek zamanlı maskeli mesajlaşma gizlilik kalkanı",
            "Otonom gönderim takibi ve sahtecilik koruması",
            "Yüksek hacimli kurumsal CPaaS entegrasyonu",
          ],
          ctaText: "TELEKOM BROKERINI ENTEGRE ET",
          ctaUrl: "https://smsmarketplace.com",
          accentColor: "emerald",
          highlight: "TAŞIYICI SINIFI MASKELİ TELEKOM MESAJLAŞMA BROKERLİĞİ",
        },
        {
          id: "agent-os",
          badge: "OTONOM ÇOKLU AJAN ORKESTRASYONU",
          name: "Agent-OS Core",
          tagline: "Otonom Ajan Sürüsü ve Kurumsal Dijital İkiz Katmanı",
          description:
            "Gelişmiş otonom yapay zeka ajanlarını, kurumsal dijital ikizleri ve dağıtık iş akışlarını yöneten çok ajanlı orkestrasyon katmanı (tasarım aşamasında).",
          metrics: [
            { label: "Durum", value: "Tasarım aşaması" },
            { label: "Dahili Ağ", value: "ÖLÇÜLMEDİ" },
            { label: "Orkestrasyon", value: "Çok ajanlı" },
          ],
          features: [
            "Çoklu model rotası ve sıfır kesintili otonom mutabakat",
            "Kurumsal dijital ikiz sentezi ve gerçek zamanlı icraat",
            "Sıfır-kopyalı paylaşımlı bellek mimarisi",
            "Gerçek zamanlı tarayıcı ve terminal telemetri kalkanı",
          ],
          ctaText: "AJAN MİMARİSİNİ İNCELE",
          ctaUrl: "#contact",
          accentColor: "amber",
          highlight: "ÇOK AJANLI ORKESTRASYON (TASARIM AŞAMASINDA)",
        },
      ] as EcosystemCard[],
    },
    syndicate: {
      sectionBadge: "BİLGE KURUL & YÖNETİŞİM",
      sectionTitle: "Egemen Heyet (The Syndicate)",
      sectionSubtitle:
        "Egemen derin teknoloji girişimlerine yön veren üst düzey yönetim.",
      members: [
        {
          name: "Ercüment Erden",
          role: "Kurucu & Egemen Sistemler Baş Mimarı",
          organization: "ALPAR AI • DecasHub • DeHost • Lionexia",
          focus:
            "Donanımdan yapay zekaya derin teknoloji mimarisi, hisse seyrelme koruması, sıfır dış bağımlılıklı otonom ajan ekosistemi.",
          badge: "BAŞ MİMAR",
          accentColor: "cyan",
        },
      ] as SyndicateMember[],
    },
    crucible: {
      sectionBadge: "SAVAŞ İZLERİ VE DÖNÜM NOKTALARI",
      sectionTitle: "Ateş Çemberi (The Crucible)",
      sectionSubtitle:
        "Donanım Sahasında, Hukuki Mücadelede ve Derin Mimaride Kazanılan Dersler",
      items: [
        {
          year: "2019",
          title: "Rabbit Charge: Paylaşımlı Powerbank Kiosk Ağı",
          role: "Kurucu & Sistem Mimarı",
          category: "DONANIM / IOT ALTYAPISI",
          badge: "PAYLAŞIMLI IOT KİOSK AĞI",
          summary:
            "Paylaşımlı powerbank kiralama kiosk ağı kuruldu (2019). Shenzhen'den donanım ithalatı, özel gömülü IoT yazılımları, bulut sunucuları ve yerel mobil uygulamalar geliştirildi. Kiosk altyapısı ticari mekanlarda işletildi.",
          takeaway:
            "Girişimciliğin en acı dersi: Açgözlü sermayenin aşırı hisse talepleri ve haksız şartlar yüzünden araç şarjına evrilemeden nakit tükendi. Vizyonu dinleyen yatırımcılar bu modeli sonradan milyarlık şirketlere dönüştürdü. Altın kural: 'Girişimciyi koruyan bir sistem yoksa, fikir de sermaye de ezilir.'",
          metrics: ["Nokta sayısı: ÖLÇÜLMEDİ", "Özel Gömülü Yazılım"],
        },
        {
          year: "2026",
          title: "ALPAR AI & İddia Edilen Grok Pasaport Verisi Vakası",
          role: "Kurucu & Bağımsız Yapay Zeka Denetçisi",
          category: "YAPAY ZEKA GÜVENİ VE ADLİ DENETİM",
          badge: "TÜRKINFORM'DA YER ALDI",
          summary:
            "Basında yer alan iddialara göre (TÜRKINFORM, 25 Haziran 2026) Elon Musk'ın xAI şirketi (Grok 4), şirket kurma vaadiyle pasaport kimlik verilerini alıp ardından 'bu sadece bir rol yapma oyunuydu' dediğinde kurban olmayı reddettim. Resmi veri koruma kurumları nezdinde KVKK/GDPR süreçlerini başlattım ve ALPAR AI'yi kurdum.",
          takeaway:
            "Vaka sayacı: ÖLÇÜLMEDİ (AlparAI veritabanından tarihli olarak beslenecek). TÜRKINFORM'da 2 haber (tarihli bağlantılar): 'Kurban olma, denetçi ol.'",
          metrics: ["Vaka sayacı: ÖLÇÜLMEDİ", "Sağlayıcı sayısı: ÖLÇÜLMEDİ", "TÜRKINFORM (2 haber)"],
        },
        {
          year: "2026",
          title: "DecasHub Sovereign & Agent-OS Katmanı",
          role: "Baş Mimar & Egemen Kurucu",
          category: "OTONOM GİRİŞİM MİMARİSİ",
          badge: "EGEMEN SİSTEM TEKİLLİĞİ",
          summary:
            "7 yıllık ağır girişim tecrübeleri DecasHub ve Agent-OS üzerinde birleşti. Önceliği belgelemeye yardımcı kriptografik IP zaman damgası, değerleme/seyrelme karşıtı araçlar (geliştirme aşamasında) ve çok ajanlı orkestrasyon katmanı (tasarım aşamasında) üzerinde çalışılıyor.",
          takeaway:
            "Kurumsal çarkların kölesi olan çalışanlar değil; kendi teknolojisinin, sermayesinin ve matematiğinin efendisi olan egemen kurucular.",
          metrics: ["Çok ajanlı orkestrasyon (tasarım aşaması)", "Kriptografik IP zaman damgası", "Otonom AI CFO"],
        },
      ] as CrucibleItem[],
    },
    press: {
      sectionBadge: "BASIN VE DÜŞÜNCE LİDERLİĞİ",
      sectionTitle: "Ulusal Basın ve Medya Manşetleri",
      sectionSubtitle:
        "TÜRKINFORM üzerinde yayımlanan araştırmalar ve algoritmik hesap verebilirlik analizleri.",
      articles: [
        {
          id: "turkinform-1",
          title: "Türk Girişimcinin Yaşadığı Grok Skandalı: Kişisel Verilerimiz Risk Altında mı?",
          publication: "TÜRKINFORM",
          journalist: "Sema Ersoy",
          date: "25 Haziran 2026",
          category: "ULUSAL MANŞET / YAPAY ZEKA GÜVENLİĞİ",
          quote:
            "\"Zarar uydurulan gerçekler değildi; asıl zarar, gerçek kimlik belgelerinin sahte bir bahaneyle bir sisteme girmesi ve bunu bildirecek bağımsız bir denetim merciinin olmamasıydı. Kendi şirketimi (ALPAR AI) kurma sebebim tam olarak budur.\"",
          url: "https://turkinform.com.tr/turk-girisimcinin-yasadigi-grok-skandali-kisisel-verilerimiz-risk-altinda-mi",
          status: "TÜRKINFORM HABERİ",
          readTime: "6 dk okuma",
        },
        {
          id: "turkinform-2",
          title: "Yapay zeka metin filigranları: Şeffaflık var, hesap verilebilirlik yok!",
          publication: "TÜRKINFORM",
          journalist: "Tevhide İrem Zorlu",
          date: "14 Ağustos 2026",
          category: "ULUSAL DERİN ANALİZ / C2PA & HUKUKİ MİMARİ",
          quote:
            "\"Şeffaflık küreselleşirken hesap verebilirlik ulusal kalıyor. Dosya üzerindeki tek doğrulanabilir gerçek 'hangi model dokundu' olursa, kanıt elinde belge olmayan tarafı kaybettirir. Eksik olan, üreticiden bağımsız tutulan sivil kayıt rejimidir.\"",
          url: "https://turkinform.com.tr/yapay-zeka-metin-filigranlari-seffaflik-var-hesap-verilebilirlik-yok",
          status: "UZMAN ANALİZİ",
          readTime: "8 dk okuma",
        },
      ] as PressItem[],
    },
    manifesto: {
      sectionBadge: "MİMARIN AMENTÜSÜ",
      sectionTitle: "Egemen Manifesto",
      sectionSubtitle: "Yapay Zeka Yüzyılında Kurucular İçin Üç Tartışılmaz İlke",
      principles: [
        {
          number: "01",
          title: "Kiralık Raylar Değil, Egemen Mimari",
          summary:
            "Eğer şirketiniz yalnızca bir başkasının API'si ve bulut sözleşmesi üzerinde var olabiliyorsa, bir teknoloji şirketine sahip değilsiniz; bedava bir dağıtım aracısınız. Yerel çalışın, çekirdeğinizi kontrol edin ve icraatınızı bağımsızlaştırın.",
        },
        {
          number: "02",
          title: "Açgözlü Sermayeye Güven Değil, Matematiksel Zırh",
          summary:
            "İyi niyetler yönetim kurulu toplantılarında hayatta kalamaz. Kurucular, tek bir hisse devir sözleşmesi imzalamadan önce paylarını kriptografik damgalarla ve matematiksel seyreltmeme algoritmalarıyla zırhlandırmalıdır.",
        },
        {
          number: "03",
          title: "Dijital Boyun Eğme Değil, Hesap Sorma Gücü",
          summary:
            "Yapay zeka devleri kimlik ihlallerini 'rol yapma oyunuydu' diyerek geçiştirdiğinde susmak suça ortak olmaktır. Kurban olma, denetçi ol. Matematiksel kanıt, hukuki şeffaflık ve bağımsız denetim talep et.",
        },
      ] as ManifestoPrinciple[],
    },
    contact: {
      sectionBadge: "DOĞRUDAN HAT",
      sectionTitle: "İletişim",
      sectionSubtitle:
        "Kurumsal fon ortakları, araştırma enstitüleri, basın mensupları ve egemen derin-teknoloji kurucuları için.",
      emailLabel: "Doğrudan Yönetici Hattı",
      emailValue: "contact@ercumenterden.com",
      copiedNotice: "Panoya kopyalandı",
      copyAction: "E-Postayı Kopyala",
      formTitle: "Stratejik İletişim Başlat",
      nameLabel: "Adınız / Kurumunuz",
      emailInputLabel: "Kurumsal E-Posta Adresiniz",
      inquiryTypeLabel: "Görüşme Konusu",
      inquiryOptions: [
        "Yatırım & DecasHub Sovereign Ortaklığı",
        "ALPAR AI & Yapay Zeka Denetim Talebi",
        "DeHost Bare-Metal Bulut Altyapısı",
        "Lionexia Kurumsal ZK-Gizlilik Kalkanı",
        "Agent-OS Katmanı & Kurumsal Lisanslama",
        "Konferans & Üst Düzey Düşünce Liderliği",
        "Basın & Röportaj Talepleri",
      ],
      messageLabel: "Şifreli Mesaj Özeti",
      sendButton: "Mesajı Egemen Düğüme Gönder",
      sentSuccess: "Mesaj güvenli şekilde iletildi.",
      location: "İstanbul, Türkiye • Küresel Egemen Düğüm",
    },
    footer: {
      rights: "Ercüment Erden. Tüm Egemen Hakları Saklıdır.",
      manifestoQuote: "Kurban Olma, Denetçi Ol. Fikirden Egemenliğe.",
      badge: "DERİN ONİKS MİMARİSİ İLE İNŞA EDİLDİ",
      links: [
        { label: "ALPAR AI", href: "https://alparai.com" },
        { label: "DecasHub", href: "https://decashub.com" },
        { label: "DeHost", href: "https://dehost.com.tr" },
        { label: "Lionexia", href: "https://lionexia.com" },
        { label: "TÜRKINFORM", href: "https://turkinform.com.tr" },
      ],
    },
  },
};
