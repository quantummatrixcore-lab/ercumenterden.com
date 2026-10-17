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
      status: "ACTIVE ENGINES • < 100µs MESH",
      links: [
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "Syndicate", href: "#syndicate" },
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
        "In the algorithmic century, building technology is not merely shipping software; it is establishing systemic sovereignty against corporate data harvesting, predatory venture terms, and opaque AI manipulation. Forged in embedded hardware trenches, hardened through sovereign compute battles, and verified in independent civil oversight.",
      primaryCta: "Explore Sovereign Ecosystem",
      secondaryCta: "Review Incident 001 (Grok)",
      directLineCta: "Direct Executive Line",
      ticker: [
        { label: "ACTIVE ENGINES", value: "28 Autonomous", desc: "Agent-OS Core Swarm" },
        { label: "AI RADAR AUDIT", value: "23 Frontier Models", desc: "ALPAR AI Legal Registry" },
        { label: "DEAL PIPELINE", value: "$122.8M (₺4.2B)", desc: "DecasHub Sovereign" },
        { label: "SOVEREIGN CLOUD", value: "100% Bare-Metal", desc: "DeHost Compute Mesh" },
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
          tagline: "Zero-Trust AI Accountability Shield & Benchmark",
          description:
            "Born out of the landmark xAI Grok 4 passport extraction incident. ALPAR AI is the first independent civil intelligence platform tracking, documenting, and legally filing verified artificial intelligence violations across 370+ cases and 23+ frontier providers. Verified by national investigative press and providing audit dockets for KVKK, GDPR, and the EU AI Act.",
          metrics: [
            { label: "Verified Cases", value: "370+" },
            { label: "Audited Models", value: "23 Frontier" },
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
          highlight: "CASE 001: GROK PASSPORT EXTRACTION EXPOSED & REGULATED",
        },
        {
          id: "decashub",
          badge: "AUTONOMOUS VENTURE OS & ACCELERATOR",
          name: "DecasHub Sovereign",
          tagline: "Algorithmic VC & Anti-Dilution Founder OS",
          description:
            "A decentralized venture operating system designed to shield visionary founders from equity theft, predatory term sheets, and runway asphyxiation. Featuring immutable IP Timestamps, mathematical non-dilution valuation matrices, and a $122.8M sovereign deal pipeline.",
          metrics: [
            { label: "Portfolio Pipeline", value: "$122.8M (₺4.2B)" },
            { label: "IP Protection", value: "Immutable" },
            { label: "Valuation Mode", value: "Algorithmic" },
          ],
          features: [
            "Cryptographic immutable IP timestamping against idea theft",
            "Mathematical non-dilution equity valuation matrix",
            "Post-funding autonomous AI CFO capital guardian",
            "Full-stack automated MVP synthesis and dealflow radar",
          ],
          ctaText: "Explore DecasHub Sovereign",
          ctaUrl: "https://decashub.com",
          accentColor: "cyan",
          highlight: "MATHEMATICAL IMMUNITY AGAINST FOUNDER EQUITY THEFT",
        },
        {
          id: "dehost",
          badge: "SOVEREIGN BARE-METAL CLOUD",
          name: "DeHost Infrastructure",
          tagline: "Zero-Hyperscaler Bare-Metal Compute & High-Speed Mesh",
          description:
            "High-performance bare-metal server infrastructure built on enterprise Intel Xeon and AMD EPYC clusters. Eliminates US hyperscaler lock-in, data sovereignty risks, and inflated cloud margins with ultra-low latency private mesh networking.",
          metrics: [
            { label: "Mesh Latency", value: "<1ms" },
            { label: "Compute Mesh", value: "Xeon / EPYC" },
            { label: "Cloud Dependency", value: "0% (Zero-Cloud)" },
          ],
          features: [
            "100% private bare-metal sovereign hardware infrastructure",
            "Zero dependency on AWS, Azure, or Google Cloud terms",
            "Multi-gigabit encrypted WireGuard mesh backplane",
            "Autonomous container orchestration and zero-downtime failover",
          ],
          ctaText: "Inspect Sovereign Cloud",
          ctaUrl: "https://dehost.com.tr",
          accentColor: "amber",
          highlight: "100% SOVEREIGN BARE-METAL BEYOND HYPERSCALER MONOPOLIES",
        },
        {
          id: "lionexia",
          badge: "B2B FLEET & ZK PRIVACY SHIELD",
          name: "LIONEXIA",
          tagline: "Sub-Millisecond ZK KVKK & GDPR Privacy Shield",
          description:
            "Enterprise fleet orchestration and next-generation privacy infrastructure utilizing Sub-Millisecond Zero-Knowledge (ZK) proofs for corporate data masking. Implementing Luhn/Mod97 compliant cryptographic gateways for banking-grade regulatory compliance.",
          metrics: [
            { label: "ZK Latency", value: "<1ms" },
            { label: "Compliance", value: "KVKK / GDPR / ISO" },
            { label: "Masking Engine", value: "Luhn / Mod97" },
          ],
          features: [
            "Sub-millisecond Zero-Knowledge cryptographic masking",
            "Banking-grade Luhn/Mod97 compliant PII/PHI redaction proxy",
            "Regulatory-grade immutable data shredding",
            "Enterprise multi-tenant fleet digital twins",
          ],
          ctaText: "Deploy Lionexia Shield",
          ctaUrl: "https://lionexia.com",
          accentColor: "emerald",
          highlight: "BANKING-GRADE SUB-MILLISECOND ZK DATA MASKING",
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
            "The sovereign orchestration layer coordinating distributed autonomous agents, enterprise digital twins, and zero-latency workflows across all matrix ventures without third-party vendor lock-in.",
          metrics: [
            { label: "Active Engines", value: "28 Autonomous" },
            { label: "Internal Mesh", value: "< 100µs" },
            { label: "Autonomy", value: "100% Sovereign" },
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
          highlight: "28 AUTONOMOUS AGENTS OPERATING IN ZERO-LATENCY MESH",
        },
      ] as EcosystemCard[],
    },
    syndicate: {
      sectionBadge: "COUNCIL & GOVERNANCE",
      sectionTitle: "The Sovereign Syndicate",
      sectionSubtitle:
        "Executive authority, legal governance, and media percolation steering sovereign deep-tech ventures.",
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
        {
          name: "Prof. Dr. Musa Aygül",
          role: "Legal Governance & International Arbitration Authority",
          organization: "Academic Council & Legal Directorate",
          focus:
            "EU AI Act compliance, cross-border algorithmic dispute resolution, KVKK & GDPR statutory litigation frameworks.",
          badge: "LEGAL ARBITRATION",
          accentColor: "emerald",
        },
        {
          name: "Ahmet Rıfat Albuz",
          role: "Media Strategy & Investigative Communications Authority",
          organization: "TÜRKİNFORM & New Generation Media Network",
          focus:
            "25+ years investigative journalism, percolation-based strategic PR, public accountability campaigns, national media distribution.",
          badge: "MEDIA STRATEGY",
          accentColor: "amber",
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
        "DeHost Bare-Metal Infrastructure & Compute",
        "Lionexia Enterprise ZK-Privacy Shield",
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
      status: "AKTİF MOTORLAR • < 100µs MESH",
      links: [
        { label: "Ekosistem", href: "#ecosystem" },
        { label: "Heyet", href: "#syndicate" },
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
        "Yapay zeka çağında teknoloji üretmek yalnızca yazılım geliştirmek değildir; küresel sermaye gaspına, kurumsal veri ihlallerine ve yapay zeka illüzyonlarına karşı sistemik egemenlik kurmaktır. Sahadaki donanım siperlerinde pişen, egemen sunucu altyapısıyla çelikleşen ve bağımsız sivil denetimle hakkını arayan bir kurucu.",
      primaryCta: "Egemen Ekosistemi Keşfet",
      secondaryCta: "001 Nolu Vakayı İncele (Grok)",
      directLineCta: "Doğrudan Yönetici Hattı",
      ticker: [
        { label: "AKTİF MOTOR", value: "28 Otonom", desc: "Agent-OS Çekirdeği" },
        { label: "YAPAY ZEKA RADARI", value: "23 Küresel Model", desc: "ALPAR AI Yasal Sicili" },
        { label: "GİRİŞİM BORU HATTI", value: "₺4.2 Milyar ($122.8M)", desc: "DecasHub Sovereign" },
        { label: "EGEMEN BULUT", value: "%100 Bare-Metal", desc: "DeHost Donanım Ağı" },
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
          tagline: "Sıfır-Güven Yapay Zeka Kalkanı ve İhlal Sicili",
          description:
            "Elon Musk'ın xAI şirketi (Grok 4) ile yaşanan pasaport kimlik verisi gaspı vakasından doğdu. 23 küresel yapay zeka sağlayıcısının yanıltıcı davranışlarını, veri ihlallerini ve halüsinasyonlarını tescilleyip resmi KVKK, GDPR ve AB Yapay Zeka Yasası süreçlerini yürüten Türkiye'nin ve dünyanın ilk bağımsız sivil denetim platformu.",
          metrics: [
            { label: "Tescilli Vaka", value: "370+" },
            { label: "Denetlenen Model", value: "23 Sınır Model" },
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
          highlight: "VAKA 001: GROK PASAPORT İHLALİ BELGELENDİ & HUKUKİLEŞTİRİLDİ",
        },
        {
          id: "decashub",
          badge: "OTONOM GİRİŞİM İŞLETİM SİSTEMİ & HIZLANDIRICI",
          name: "DecasHub Sovereign",
          tagline: "Algoritmik VC ve Seyrelme Karşıtı Kurucu İşletim Sistemi",
          description:
            "Vizyoner kurucuları fikir hırsızlığından, açgözlü sermayenin hisse gaspından ve nakit tükenmesinden koruyan merkeziyetsiz girişim işletim sistemi. Kriptografik Fikir Zaman Damgası, matematiksel seyreltmeme matrisi ve ₺4.2 Milyarlık canlı portföy boru hattı.",
          metrics: [
            { label: "Portföy Hattı", value: "₺4.2 Milyar ($122.8M)" },
            { label: "Fikir Koruma", value: "Kriptografik" },
            { label: "Değerleme", value: "Algoritmik" },
          ],
          features: [
            "Fikir hırsızlığını sıfırlayan kriptografik zaman damgası (IP Timestamp)",
            "Açgözlü hisse gaspını durduran matematiksel seyreltmeme değerlemesi",
            "Fonlanan girişimlerin batmasını önleyen otonom yapay zeka CFO",
            "Saatler içinde sıfırdan çalışan tam teşekküllü MVP üretimi ve anlaşma radarı",
          ],
          ctaText: "Egemen Girişimi Keşfet",
          ctaUrl: "https://decashub.com",
          accentColor: "cyan",
          highlight: "HİSSE GASPINA KARŞI MATEMATİKSEL DOKUNULMAZLIK",
        },
        {
          id: "dehost",
          badge: "EGEMEN BARE-METAL BULUT",
          name: "DeHost Infrastructure",
          tagline: "Hiperskalır Bağımsızlığı & Yüksek Başarımlı Bare-Metal Donanım Ağı",
          description:
            "Kurumsal Intel Xeon ve AMD EPYC kümeleri üzerinde çalışan yüksek başarımlı bare-metal sunucu omurgası. ABD merkezli hiperskalırların (AWS/Azure/GCP) veri sömürüsüne, fahiş bulut faturalarına ve sözleşme rehinelerine karşı %100 egemen donanım altyapısı.",
          metrics: [
            { label: "Ağ Gecikmesi", value: "<1ms" },
            { label: "İşlem Gücü", value: "Xeon / EPYC" },
            { label: "Bulut Bağımlılığı", value: "%0 (Sıfır Bulut)" },
          ],
          features: [
            "%100 özel mülkiyetli bare-metal egemen donanım altyapısı",
            "AWS, Azure veya Google Cloud sözleşmelerine sıfır bağımlılık",
            "Çok-gigabitlik şifreli WireGuard ağ omurgası",
            "Otonom konteyner orkestrasyonu ve sıfır kesintili yük devretme",
          ],
          ctaText: "Egemen Bulutu İncele",
          ctaUrl: "https://dehost.com.tr",
          accentColor: "amber",
          highlight: "KÜRESEL HİPERSKALIR TEKELLERİNE KARŞI %100 EGEMEN BARE-METAL",
        },
        {
          id: "lionexia",
          badge: "B2B FİLO & ZK GİZLİLİK KALKANI",
          name: "LIONEXIA",
          tagline: "Milisaniye-Altı Sıfır-Bilgi (ZK) KVKK & GDPR Kalkanı",
          description:
            "Kurumsal filo orkestrasyonu ve veri maskeleme için Milisaniye-Altı Sıfır-Bilgi (Zero-Knowledge) kanıtları kullanan yeni nesil gizlilik altyapısı. Bankacılık düzeyinde Luhn/Mod97 uyumlu kriptografik ağ geçitleri ile tam mevzuat koruması.",
          metrics: [
            { label: "ZK Gecikmesi", value: "<1ms" },
            { label: "Mevzuat Uyumu", value: "KVKK / GDPR / ISO" },
            { label: "Maskeleme Motoru", value: "Luhn / Mod97" },
          ],
          features: [
            "Milisaniye-altı Sıfır-Bilgi kriptografik maskeleme",
            "Bankacılık düzeyinde Luhn/Mod97 uyumlu PII/PHI redaction proxy",
            "Mevzuat düzeyinde tescilli veri imha protokolü",
            "Kurumsal çok-kiracılı (multi-tenant) filo dijital ikizleri",
          ],
          ctaText: "LIONEXIA KALKANINI KUR",
          ctaUrl: "https://lionexia.com",
          accentColor: "emerald",
          highlight: "BANKACILIK SINIFI MİLİSANİYE-ALTI ZK VERİ MASKELEME GEÇİDİ",
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
            "Gelişmiş otonom yapay zeka ajanlarını, kurumsal dijital ikizleri ve dağıtık iş akışlarını üçüncü taraf tedarikçi bağımlılığı olmaksızın sıfır gecikmeyle yöneten bağımsız orkestrasyon katmanı.",
          metrics: [
            { label: "Aktif Motor", value: "28 Otonom" },
            { label: "Dahili Ağ", value: "< 100µs" },
            { label: "Egemenlik", value: "%100 Bağımsız" },
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
          highlight: "SIFIR GECİKMELİ AĞDA ÇALIŞAN 28 OTONOM YAPAY ZEKA AJANI",
        },
      ] as EcosystemCard[],
    },
    syndicate: {
      sectionBadge: "BİLGE KURUL & YÖNETİŞİM",
      sectionTitle: "Egemen Heyet (The Syndicate)",
      sectionSubtitle:
        "Egemen derin teknoloji girişimlerine yön veren üst düzey yönetim, hukuki tahkim ve ulusal medya stratejisi.",
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
        {
          name: "Prof. Dr. Musa Aygül",
          role: "Hukuki Yönetişim & Uluslararası Tahkim Otoritesi",
          organization: "Akademik Heyet & Hukuk Direktörlüğü",
          focus:
            "AB Yapay Zeka Yasası (EU AI Act), uluslararası sınır ötesi tahkim, KVKK/GDPR yasal uyum ve algoritmik hesap verebilirlik çerçeveleri.",
          badge: "HUKUKİ TAHKİM",
          accentColor: "emerald",
        },
        {
          name: "Ahmet Rıfat Albuz",
          role: "Medya Stratejisi & Araştırmacı İletişim Otoritesi",
          organization: "TÜRKİINFORM & Yeni Nesil Medya Ağı",
          focus:
            "25 yıllık araştırmacı gazetecilik tecrübesi, perkolasyon tabanlı stratejik PR, kamuoyu hesap verebilirlik kampanyaları, ulusal medya ağı.",
          badge: "MEDYA STRATEJİSİ",
          accentColor: "amber",
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
          title: "Rabbit Charge: Türkiye'nin İlk Paylaşımlı IoT Kiosk Ağı",
          role: "Kurucu & Sistem Mimarı",
          category: "DONANIM / IOT ALTYAPISI",
          badge: "TÜRKİYE PAYLAŞIMLI IOT ÖNCÜSÜ",
          summary:
            "Türkiye'de paylaşımlı powerbank ve akıllı şarj kiosku kavramı henüz bilinmiyorken sıfırdan hayata geçirildi. Shenzhen'den donanım ithalatı, özel gömülü IoT yazılımları, bulut sunucuları ve iOS, Android, Huawei AppGallery için 3 yerel uygulama geliştirildi. Yüzlerce mekanda fiziksel kiosk ağı bizzat işletildi.",
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
            "Elon Musk'ın xAI şirketi (Grok 4), şirket kurma vaadiyle pasaport kimlik verilerini alıp ardından 'bu sadece bir rol yapma oyunuydu' dediğinde kurban olmayı reddettim. Resmi veri koruma kurumları nezdinde KVKK/GDPR süreçlerini başlattım ve ALPAR AI'yi kurdum.",
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
        "DeHost Bare-Metal Bulut Altyapısı",
        "Lionexia Kurumsal ZK-Gizlilik Kalkanı",
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
        { label: "DecasHub", href: "https://decashub.com" },
        { label: "DeHost", href: "https://dehost.com.tr" },
        { label: "Lionexia", href: "https://lionexia.com" },
        { label: "TÜRKINFORM", href: "https://turkinform.com.tr" },
      ],
    },
  },
};
