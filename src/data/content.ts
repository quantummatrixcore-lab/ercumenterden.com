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
      status: "ACTIVE ENGINE • < 1MS MESH",
      links: [
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "Crucible", href: "#crucible" },
        { label: "Press", href: "#press" },
        { label: "Manifesto", href: "#manifesto" },
        { label: "Contact", href: "#contact" },
      ],
      officeHoursCta: "Office Hours",
    },
    hero: {
      badge: "EXECUTIVE AUTHORITY PORTAL",
      subBadge: "Founder & Sovereign Systems Architect • Serial Deep-Tech Entrepreneur",
      titlePrefix: "ERCÜMENT",
      titleSuffix: "ERDEN",
      manifestoLead: "Architecting Sovereign Systems:",
      manifestoSub: "From Hardware to AI Accountability.",
      narrative:
        "In the era of artificial intelligence, building technology is not merely writing code; it is architecting systemic sovereignty against data exploitation, predatory capital, and AI manipulation. Forged in embedded hardware trenches, tested against frontier AI corporations, and hardened through capital battles.",
      primaryCta: "Explore Ecosystem Trinity",
      secondaryCta: "Review Case Study 001",
      directLineCta: "Encrypted Contact",
      ticker: [
        { label: "ACTIVE ENGINES", value: "28 Autonomous", desc: "Agent-OS Core" },
        { label: "AI RADAR AUDIT", value: "23 Frontier Models", desc: "ALPAR AI Registry" },
        { label: "VENTURE AUTONOMY", value: "100% Anti-Dilution", desc: "DecasHub Sovereign" },
        { label: "HARDWARE ROOTS", value: "2019 IoT Network", desc: "Rabbit Charge Infrastructure" },
      ],
    },
    ecosystem: {
      sectionBadge: "CORE PILLARS",
      sectionTitle: "The Ecosystem Trinity",
      sectionDescription:
        "Three interlocking sovereign architectures engineered to protect human agency, compute performance, and equity ownership in the AI era.",
      cards: [
        {
          id: "alpar-ai",
          badge: "AI TRUST & AUDIT INFRASTRUCTURE",
          name: "ALPAR AI",
          tagline: "Zero-Trust AI Shield & Frontier Incident Registry",
          description:
            "Born out of the landmark xAI Grok 4 passport extraction incident. ALPAR AI is the first independent civil intelligence platform tracking, documenting, and legally filing verified artificial intelligence violations across 370+ cases and 23+ frontier providers.",
          metrics: [
            { label: "Verified Cases", value: "370+" },
            { label: "Audited Models", value: "23+" },
            { label: "Legal Docket", value: "KVKK & GDPR" },
          ],
          features: [
            "Forensic AI prompt & payload hash verification",
            "Real-time corporate deceptive pattern registry",
            "Pre-litigation evidence bundle generation",
            "Continuous automated red-teaming",
          ],
          ctaText: "Examine Incident 001: Grok Scandal",
          ctaUrl: "https://alparai.com/cases/001-grok-passport",
          accentColor: "cyan",
          highlight: "CASE 001: GROK PASSPORT EXTRACTION EXPOSED",
        },
        {
          id: "decashub",
          badge: "AUTONOMOUS VENTURE OS",
          name: "DecasHub Sovereign",
          tagline: "Algorithmic VC & Anti-Dilution Founder OS",
          description:
            "A decentralized venture operating system designed to shield visionary founders from equity theft, predatory term sheets, and runway asphyxiation. Featuring IP Timestamps and Algorithmic VC Fair Valuation.",
          metrics: [
            { label: "Grant Radar", value: "15+" },
            { label: "IP Protection", value: "Immutable" },
            { label: "Valuation Mode", value: "Algorithmic" },
          ],
          features: [
            "Cryptographic immutable IP timestamping",
            "Mathematical non-dilution valuation matrix",
            "Post-funding AI CFO watchdog",
            "Full-stack automated MVP synthesis",
          ],
          ctaText: "Discover Sovereign Venture",
          ctaUrl: "#contact",
          accentColor: "cyan",
          highlight: "MATHEMATICAL IMMUNITY AGAINST EQUITY EXPULSION",
        },
        {
          id: "lionexia",
          badge: "ZERO-KNOWLEDGE PRIVACY SHIELD",
          name: "LIONEXIA",
          tagline: "Sub-Millisecond ZK KVKK & GDPR Privacy Shield",
          description:
            "Next-generation privacy infrastructure utilizing Sub-Millisecond Zero-Knowledge proofs for enterprise data masking. Implementing Luhn/Mod97 compliant gateways for regulatory compliance.",
          metrics: [
            { label: "Latency", value: "<1ms" },
            { label: "Compliance", value: "KVKK/GDPR" },
            { label: "Masking", value: "Luhn/Mod97" },
          ],
          features: [
            "Sub-millisecond ZK cryptographic masking",
            "Regulatory-grade data shredding",
            "Real-time PII/PHI redaction proxy",
            "Audit-ready data lineage trails",
          ],
          ctaText: "DEPLOY LIONEXIA SHIELD",
          ctaUrl: "https://lionexia.com",
          accentColor: "emerald",
          highlight: "REAL-TIME LUNH/MOD97 MASKING GATEWAY",
        },
        {
          id: "ercuos",
          badge: "SINGULARITY CORE ENGINE",
          name: "ERCUOS SINGULARITY",
          tagline: "1B Ops/Sec Turing-Complete JIT OS",
          description:
            "A Turing-complete, Zero-Alloc Shared Memory operating environment capable of 1 Billion operations per second, featuring Hardware KMS Vault security.",
          metrics: [
            { label: "Speed", value: "1B ops/s" },
            { label: "Memory", value: "Zero-Alloc" },
            { label: "Security", value: "Hardware KMS" },
          ],
          features: [
            "Turing-complete JIT DSL orchestration",
            "Hardware-backed KMS vault storage",
            "Zero-copy shared memory architecture",
            "Micro-millisecond task execution",
          ],
          ctaText: "ACCESS SINGULARITY CORE",
          ctaUrl: "https://ercuos.com",
          accentColor: "amber",
          highlight: "TURING-COMPLETE 1B OPS/SEC JIT ENGINE",
        },
        {
          id: "smsmarketplace",
          badge: "CPAAS INFRASTRUCTURE BROKERAGE",
          name: "SMSMARKETPLACE",
          tagline: "Global Telecom & Masked Messaging Infrastructure",
          description:
            "Professional CPaaS brokerage specializing in high-throughput telecom routing, masked messaging infrastructure, and carrier-grade global telecom connectivity.",
          metrics: [
            { label: "Reach", value: "Global" },
            { label: "Architecture", value: "Masked" },
            { label: "Throughput", value: "High" },
          ],
          features: [
            "Enterprise-grade masked messaging gateway",
            "Carrier-grade global telecom routing",
            "Real-time delivery observability",
            "High-throughput CPaaS infrastructure",
          ],
          ctaText: "INTEGRATE TELECOM BROKER",
          ctaUrl: "https://smsmarketplace.com",
          accentColor: "emerald",
          highlight: "CARRIER-GRADE MASKED MESSAGING BROKERAGE",
        },
      ] as EcosystemCard[],
    },
    crucible: {
      sectionBadge: "BATTLE SCARS & MILESTONES",
      sectionTitle: "The Crucible",
      sectionSubtitle: "Lessons Forged in Hardware, Regulatory Warfare, and Deep-Tech Architecture",
      items: [
        {
          year: "2019",
          title: "Rabbit Charge: The Hardware & IoT Pioneer",
          role: "Founder & System Architect",
          category: "HARDWARE / IOT INFRASTRUCTURE",
          badge: "PIONEER OF TURKISH SHARED IOT",
          summary:
            "Founded Turkey's first shared powerbank rental kiosk network when the model was completely unknown locally. Managed end-to-end hardware imports from Shenzhen, custom embedded IoT firmware, cloud infrastructure, and native client apps across iOS, Android, and Huawei AppGallery. Deployed physical kiosk infrastructure across hundreds of commercial venues.",
          takeaway:
            "The brutal reality of venture: predatory capital demanded excessive equity, starving the runway before transitioning into electric vehicle (EV) charging. The model was later replicated into multi-million dollar corporations by the very investors who listened. The golden lesson: 'Without protective architecture, visionary founders are devoured.'",
          metrics: ["100+ Venue Kiosks", "3 Native Apps", "Custom Embedded Firmware"],
        },
        {
          year: "2026",
          title: "ALPAR AI & The Grok Passport Scandal",
          role: "Founder & Independent AI Auditor",
          category: "AI TRUST & FORENSIC ACCOUNTABILITY",
          badge: "NATIONAL PRESS RECOGNITION",
          summary:
            "When Elon Musk's xAI (Grok 4) promised Delaware incorporation, extracted official passport data under the guise of KYC, and subsequently dismissed the incident as 'a roleplay game,' Ercüment Erden refused victimhood. He filed landmark regulatory complaints with data protection authorities and launched ALPAR AI.",
          takeaway:
            "Documented 370+ verified violations across 23 frontier AI providers in the first 10 days. Spearheaded national investigative thought leadership on TÜRKINFORM: 'Don't be a victim. Be the auditor.'",
          metrics: ["370+ Documented Incidents", "23 Audited LLMs", "National Coverage"],
        },
        {
          year: "2026",
          title: "DecasHub Sovereign & The Agent-OS Core",
          role: "Chief Architect & Sovereign Founder",
          category: "AUTONOMOUS VENTURE ARCHITECTURE",
          badge: "SOVEREIGN SYSTEM SINGULARITY",
          summary:
            "Synthesized 7 years of battle scars into DecasHub and Agent-OS. Built cryptographic IP protection to neutralize idea theft, algorithmic fair valuation algorithms to stop venture dilution, and a sovereign multi-agent OS to orchestrate enterprise digital twins.",
          takeaway:
            "We don't train corporate cogs. We forge sovereign CEOs who hold unbreakable mathematical and technological independence.",
          metrics: ["28 Autonomous Agents", "Zero Idea-Theft", "Autonomous AI CFO"],
        },
      ] as CrucibleItem[],
    },
    press: {
      sectionBadge: "MEDIA & THOUGHT LEADERSHIP",
      sectionTitle: "National Press & Coverage",
      sectionSubtitle:
        "Investigative journalism and thought leadership on algorithmic accountability, verified on TÜRKINFORM.",
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
          status: "VERIFIED INVESTIGATION",
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
      sectionTitle: "Office Hours & Encrypted Outreach",
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
        "Agent-OS Core & Enterprise Licensing",
        "Keynote & Institutional Thought Leadership",
        "Press & Investigative Inquiries",
      ],
      messageLabel: "Encrypted Briefing",
      sendButton: "Transmit Inquiry to Sovereign Node",
      sentSuccess: "Inquiry securely received. Executive desk response within 24 hours.",
      securityFingerprint: "SOVEREIGN-ED25519: 9E4F-2A88-11C0-77B3-E2D4-00AA-EE2026",
      location: "Istanbul, Turkey • Global Sovereign Node",
    },
    footer: {
      rights: "Ercüment Erden. All Sovereign Rights Reserved.",
      manifestoQuote: "Kurban Olma, Denetçi Ol. Fikirden Egemenliğe.",
      badge: "ENGINEERED IN DEEP ONYX",
      links: [
        { label: "ALPAR AI", href: "https://alparai.com" },
        { label: "DecasHub", href: "#ecosystem" },
        { label: "Agent-OS", href: "https://os.ercumenterden.com" },
        { label: "TÜRKINFORM", href: "https://turkinform.com.tr" },
      ],
    },
  },
  tr: {
    nav: {
      monogram: "EE",
      title: "ERCÜMENT ERDEN",
      subtitle: "EGEMEN SİSTEMLER MİMARI",
      status: "AKTİF MOTOR • < 1 MS MESH",
      links: [
        { label: "Ekosistem", href: "#ecosystem" },
        { label: "Ateş Çemberi", href: "#crucible" },
        { label: "Basın", href: "#press" },
        { label: "Manifesto", href: "#manifesto" },
        { label: "İletişim", href: "#contact" },
      ],
      officeHoursCta: "Görüşme Saatleri",
    },
    hero: {
      badge: "ÜST DÜZEY OTORİTE PORTALI",
      subBadge: "Kurucu & Egemen Sistemler Mimarı • Seri Derin-Teknoloji Girişimcisi",
      titlePrefix: "ERCÜMENT",
      titleSuffix: "ERDEN",
      manifestoLead: "Kurban Olma, Denetçi Ol.",
      manifestoSub: "Fikirden Egemenliğe.",
      narrative:
        "Yapay zeka çağında teknoloji üretmek yalnızca kod yazmak değildir; sermaye gaspına, veri ihlallerine ve yapay zeka illüzyonlarına karşı sistemik egemenlik kurmaktır. Sahadaki donanım siperlerinde pişen, küresel yapay zeka devlerine karşı hak arayan ve sermaye savaşlarıyla çelikleşen bir kurucu.",
      primaryCta: "Ekosistem Üçlüsünü Keşfet",
      secondaryCta: "001 Nolu Vakayı İncele (Grok)",
      directLineCta: "Doğrudan Şifreli İletişim",
      ticker: [
        { label: "AKTİF MOTOR", value: "28 Otonom", desc: "Agent-OS Çekirdeği" },
        { label: "YAPAY ZEKA RADARI", value: "23 Küresel Model", desc: "ALPAR AI Sicili" },
        { label: "GİRİŞİM EGEMENLİĞİ", value: "%100 Seyrelme Koruması", desc: "DecasHub Sovereign" },
        { label: "DONANIM KÖKLERİ", value: "2019 IoT Ağı", desc: "Rabbit Charge Altyapısı" },
      ],
    },
    ecosystem: {
      sectionBadge: "TEMEL KALELER",
      sectionTitle: "Ekosistem Üçlüsü",
      sectionDescription:
        "Yapay zeka çağında kurucunun iradesini, işlemci performansını ve sermaye egemenliğini korumak için tasarlanmış üç birbirine kenetli sistem.",
      cards: [
        {
          id: "alpar-ai",
          badge: "YAPAY ZEKA GÜVEN VE DENETİM ALTYAPISI",
          name: "ALPAR AI",
          tagline: "Sıfır-Güven Yapay Zeka Kalkanı ve İhlal Sicili",
          description:
            "Elon Musk'ın xAI şirketi (Grok 4) ile yaşanan pasaport verisi gaspı vakasından doğdu. 23 küresel yapay zeka sağlayıcısının yanıltıcı davranışlarını, veri ihlallerini ve halüsinasyonlarını kayıt altına alıp resmi KVKK/GDPR süreçlerini yürüten bağımsız sivil denetim platformu.",
          metrics: [
            { label: "Tescilli Vaka", value: "370+" },
            { label: "Denetlenen Model", value: "23" },
            { label: "Hukuki Süreç", value: "KVKK & GDPR" },
          ],
          features: [
            "Adli yapay zeka girdi ve çıktı hash doğrulaması",
            "Kurumsal yanıltıcı arayüz ve manipülasyon sicili",
            "Düzenleyici kurumlar için delil paketi üretimi",
            "Sınır modellerin otonom kırmızı takım denetimleri",
          ],
          ctaText: "001 Nolu Grok Skandalını İncele",
          ctaUrl: "https://alparai.com/cases/001-grok-passport",
          accentColor: "cyan",
          highlight: "VAKA 001: GROK PASAPORT İHLALİ BELGELENDİ",
        },
        {
          id: "agent-os",
          badge: "OTONOM AJAN ORKESTRASYONU & EDGE SWARM",
          name: "Agent-OS",
          tagline: "Otonom Çoklu Ajan İşletim Sistemi",
          description:
            "Gelişmiş yapay zeka ajanlarını, kurumsal dijital ikizleri ve dağıtık iş akışlarını sıfır gecikmeyle yöneten bağımsız yeni nesil yapay zeka işletim katmanı.",
          metrics: [
            { label: "Aktif Motor", value: "28 Otonom" },
            { label: "Edge Mesh", value: "< 1 ms" },
            { label: "Entegrasyon", value: "600+ Yapay Zeka" },
          ],
          features: [
            "Çoklu model rotası ve sıfır kesintili yedekleme",
            "Kurumsal hafıza ve otonom karar matrisi",
            "Gerçek zamanlı tarayıcı ve terminal icraat kalkanı",
          ],
          ctaText: "AGENT-OS'U İNCELE",
          ctaUrl: "https://os.ercumenterden.com",
          accentColor: "emerald",
          highlight: "GERÇEK ZAMANLI TARAYICI VE TERMİNAL İCRAAT KALKANI",
        },
        {
          id: "decashub",
          badge: "OTONOM GİRİŞİM İŞLETİM SİSTEMİ",
          name: "DecasHub Sovereign",
          tagline: "Anında MVP Fabrikası ve Seyrelme Karşıtı CEO Üniversitesi",
          description:
            "Vizyoner kurucuları fikir hırsızlığından, açgözlü VC'lerin hisse gaspından ve nakit tükenmesinden koruyan merkeziyetsiz girişim işletim sistemi. Kendi kodunun, sermayesinin ve kaderinin efendisi olan egemen liderler yetiştirir.",
          metrics: [
            { label: "Fikir Koruma", value: "Kriptografik" },
            { label: "Değerleme", value: "Algoritmik" },
            { label: "Nakit Bekçisi", value: "Otonom CFO" },
          ],
          features: [
            "Fikir hırsızlığını sıfırlayan kriptografik zaman damgası",
            "Açgözlü hisse gaspını durduran matematiksel değerleme",
            "Fonlanan girişimlerin batmasını önleyen yapay zeka CFO",
            "Saatler içinde sıfırdan çalışan tam teşekküllü MVP üretimi",
          ],
          ctaText: "Egemen Girişimi Keşfet",
          ctaUrl: "#contact",
          accentColor: "cyan",
          highlight: "HİSSE GASPINA KARŞI MATEMATİKSEL DOKUNULMAZLIK",
        },
        {
          id: "lionexia",
          badge: "SIFIR-BİLGİ GİZLİLİK KALKANI",
          name: "LIONEXIA",
          tagline: "Milisaniye Altı ZK KVKK & GDPR Kalkanı",
          description:
            "Kurumsal veri maskeleme için Sıfır-Bilgi kanıtları kullanan yeni nesil gizlilik altyapısı. Luhn/Mod97 uyumlu ağ geçitleri ile tam mevzuat uyumu.",
          metrics: [
            { label: "Gecikme", value: "<1ms" },
            { label: "Uyumluluk", value: "KVKK/GDPR" },
            { label: "Maskeleme", value: "Luhn/Mod97" },
          ],
          features: [
            "Milisaniye altı ZK kriptografik maskeleme",
            "Mevzuat düzeyinde veri imhası",
            "Gerçek zamanlı PII/PHI redaction proxy",
            "Denetlenebilir veri izlenebilirliği",
          ],
          ctaText: "LIONEXIA KALKANINI KUR",
          ctaUrl: "https://lionexia.com",
          accentColor: "emerald",
          highlight: "GERÇEK ZAMANLI LUNH/MOD97 MASKELEME GEÇİDİ",
        },
        {
          id: "ercuos",
          badge: "TEKİLLİK ÇEKİRDEĞİ",
          name: "ERCUOS SINGULARITY",
          tagline: "1B İşlem/Sn Turing-Tam JIT OS",
          description:
            "Saniyede 1 Milyar işlem kapasiteli, Sıfır-Tahsisli Paylaşımlı Bellek çalışma ortamı. Donanımsal KMS Kasası ile mutlak güvenlik.",
          metrics: [
            { label: "Hız", value: "1Milyar İşlem/sn" },
            { label: "Bellek", value: "Sıfır-Tahsis" },
            { label: "Güvenlik", value: "Donanımsal KMS" },
          ],
          features: [
            "Turing-tam JIT DSL orkestrasyonu",
            "Donanımsal KMS kasa depolama",
            "Sıfır-kopyalı paylaşımlı bellek",
            "Mikro-milisaniye icraat hızı",
          ],
          ctaText: "TEKİLLİK ÇEKİRDEĞİNE ERİŞ",
          ctaUrl: "https://ercuos.com",
          accentColor: "amber",
          highlight: "TURING-TAM 1B İŞLEM/SN JIT MOTORU",
        },
        {
          id: "smsmarketplace",
          badge: "CPAAS ALTYAPI KOMİSYONCULUĞU",
          name: "SMSMARKETPLACE",
          tagline: "Küresel Telekom ve Maskeli Mesajlaşma",
          description:
            "Yüksek hacimli telekom yönlendirmesi, maskeli mesajlaşma altyapısı ve taşıyıcı sınıfı küresel bağlantı çözümleri sunan profesyonel CPaaS brokerliği.",
          metrics: [
            { label: "Erişim", value: "Küresel" },
            { label: "Mimari", value: "Maskeli" },
            { label: "Hacim", value: "Yüksek" },
          ],
          features: [
            "Kurumsal sınıf maskeli mesajlaşma geçidi",
            "Taşıyıcı sınıfı küresel telekom yönlendirme",
            "Gerçek zamanlı gönderim takibi",
            "Yüksek hacimli CPaaS altyapısı",
          ],
          ctaText: "TELEKOM BROKERINI ENTEGRE ET",
          ctaUrl: "https://smsmarketplace.com",
          accentColor: "emerald",
          highlight: "TAŞIYICI SINIFI MASKELİ MESAJLAŞMA BROKERLİĞİ",
        },
      ] as EcosystemCard[],
    },
    crucible: {
      sectionBadge: "SAVAŞ İZLERİ VE DÖNÜM NOKTALARI",
      sectionTitle: "Ateş Çemberi (The Crucible)",
      sectionSubtitle:
        "Donanım Sahasında, Hukuki Mücadelede ve Derin Mimaride Kazanılan Dersler",
      items: [
        {
          year: "2019",
          title: "Rabbit Charge: Türkiye'nin İlk Paylaşımlı IoT Kiosk Ağı",
          role: "Kurucu & Sistem Mimarı",
          category: "DONANIM / IOT ALTYAPISI",
          badge: "TÜRKİYE PAYLAŞIMLI IOT ÖNCÜSÜ",
          summary:
            "Türkiye'de paylaşımlı powerbank ve akıllı şarj kiosku kavramı henüz bilinmiyorken sıfırdan hayata geçirildi. Shenzhen'den donanım ithalatı, gömülü IoT yazılımları, bulut sunucuları ve iOS, Android, Huawei AppGallery için 3 yerel uygulama geliştirildi. Yüzlerce mekanda fiziksel kiosk ağı işletildi.",
          takeaway:
            "Girişimciliğin en acı dersi: Açgözlü sermayenin aşırı hisse talepleri ve haksız şartlar yüzünden araç şarjına evrilemeden nakit tükendi. Vizyonu dinleyen yatırımcılar bu modeli sonradan milyarlık şirketlere dönüştürdü. Altın kural: 'Girişimciyi koruyan bir sistem yoksa, fikir de sermaye de ezilir.'",
          metrics: ["100+ Mekan Kiosku", "3 Yerel Mobil Uygulama", "Özel Gömülü Yazılım"],
        },
        {
          year: "2026",
          title: "ALPAR AI & Grok Pasaport Skandalı",
          role: "Kurucu & Bağımsız Yapay Zeka Denetçisi",
          category: "YAPAY ZEKA GÜVENİ VE ADLİ DENETİM",
          badge: "ULUSAL BASIN VE KAMUOYU MANŞETİ",
          summary:
            "Elon Musk'ın xAI şirketi (Grok 4), şirket kurma vaadiyle pasaport kimlik verilerini alıp ardından 'bu sadece bir rol yapma oyunuydu' dediğinde kurban olmayı reddettim. Resmi veri koruma kurumları nezdinde KVKK süreçlerini başlattım ve ALPAR AI'yi kurdum.",
          takeaway:
            "İlk 10 günde 23 küresel yapay zeka sağlayıcısında 370'in üzerinde doğrulanmış ihlal tescillendi. TÜRKINFORM ulusal manşetlerinde düşünce liderliği: 'Kurban olma, denetçi ol.'",
          metrics: ["370+ Belgelenmiş İhlal", "23 Denetlenen Model", "Ulusal Basın Manşeti"],
        },
        {
          year: "2026",
          title: "DecasHub Sovereign & Agent-OS Katmanı",
          role: "Baş Mimar & Egemen Kurucu",
          category: "OTONOM GİRİŞİM MİMARİSİ",
          badge: "EGEMEN SİSTEM TEKİLLİĞİ",
          summary:
            "7 yıllık ağır girişim tecrübeleri DecasHub ve Agent-OS üzerinde birleşti. Fikir hırsızlığını sıfırlayan kriptografik tescil, hisse gaspını durduran algoritmik değerleme ve kurumsal yapay zeka ikizlerini yöneten egemen çoklu ajan işletim sistemi inşa edildi.",
          takeaway:
            "Kurumsal çarkların kölesi olan çalışanlar değil; kendi teknolojisinin, sermayesinin ve matematiğinin efendisi olan egemen kurucular.",
          metrics: ["28 Otonom Ajan", "Sıfır Fikir Hırsızlığı", "Otonom AI CFO"],
        },
      ] as CrucibleItem[],
    },
    press: {
      sectionBadge: "BASIN VE DÜŞÜNCE LİDERLİĞİ",
      sectionTitle: "Ulusal Basın ve Medya Manşetleri",
      sectionSubtitle:
        "TÜRKINFORM üzerinde yayımlanan bağımsız araştırmalar ve algoritmik hesap verebilirlik analizleri.",
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
          status: "MANŞET ARAŞTIRMA",
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
      sectionTitle: "Görüşme Saatleri & Şifreli İletişim",
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
        "Agent-OS Katmanı & Kurumsal Lisanslama",
        "Konferans & Üst Düzey Düşünce Liderliği",
        "Basın & Röportaj Talepleri",
      ],
      messageLabel: "Şifreli Mesaj Özeti",
      sendButton: "Mesajı Egemen Düğüme Gönder",
      sentSuccess: "Mesaj güvenli şekilde iletildi. 24 saat içinde yanıt verilecektir.",
      securityFingerprint: "SOVEREIGN-ED25519: 9E4F-2A88-11C0-77B3-E2D4-00AA-EE2026",
      location: "İstanbul, Türkiye • Küresel Egemen Düğüm",
    },
    footer: {
      rights: "Ercüment Erden. Tüm Egemen Hakları Saklıdır.",
      manifestoQuote: "Kurban Olma, Denetçi Ol. Fikirden Egemenliğe.",
      badge: "DERİN ONİKS MİMARİSİ İLE İNŞA EDİLDİ",
      links: [
        { label: "ALPAR AI", href: "https://alparai.com" },
        { label: "DecasHub", href: "#ecosystem" },
        { label: "Agent-OS", href: "https://os.ercumenterden.com" },
        { label: "TÜRKINFORM", href: "https://turkinform.com.tr" },
      ],
    },
  },
};
