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
      status: "ISTANBUL • GLOBAL",
      links: [
        { label: "Ecosystem", href: "#ecosystem" },
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
        { label: "ALPAR AI", value: "AI audit", desc: "Counters published only with an as-of date" },
        { label: "DECASHUB", value: "In development", desc: "Venture operating system" },
        { label: "LIONEXIA", value: "Prototype", desc: "API storefront" },
        { label: "UDT", value: "MVP", desc: "Hardware diagnostics" },
      ],
    },
    ecosystem: {
      sectionBadge: "CORE VENTURES",
      sectionTitle: "The Ecosystem",
      sectionDescription:
        "Four ventures, built from Istanbul for a global market: AI accountability, a venture operating system, an API storefront and hardware diagnostics. Each shows its true stage.",
      cards: [
        {
          id: "alpar-ai",
          badge: "AI ACCOUNTABILITY & AUDIT",
          name: "ALPAR AI",
          tagline: "AI Accountability Registry & Benchmark",
          description:
            "Born out of the xAI Grok 4 passport-data incident, as alleged in press coverage (TÜRKINFORM, 25 June 2026). ALPAR AI audits AI providers' published outputs. Incident and provider counters are shown only when fed, with an as-of date, from the AlparAI database. Prepares audit dockets referencing GDPR, the EU AI Act and KVKK.",
          metrics: [
            { label: "Incident Counter", value: "Not published" },
            { label: "Provider Count", value: "Not published" },
            { label: "Legal Frameworks", value: "GDPR, EU AI Act, KVKK" },
          ],
          features: [
            "Forensic AI prompt and payload hash verification",
            "Registry of deceptive patterns and hallucinations",
            "Pre-litigation evidence bundles for regulators",
            "Continuous automated red-teaming",
          ],
          ctaText: "Examine Incident 001",
          ctaUrl: "https://alparai.com/cases/001-grok-passport",
          accentColor: "cyan",
          highlight: "CASE 001: ALLEGED GROK PASSPORT-DATA INCIDENT (PER PRESS)",
        },
        {
          id: "decashub",
          badge: "VENTURE OPERATING SYSTEM",
          name: "DecasHub",
          tagline: "Venture Operating System (in development)",
          description:
            "A venture operating system for founders, built around a borderless, building-free technology park model. Cryptographic IP timestamping helps establish prior-art dates; valuation and anti-dilution tooling is in development.",
          metrics: [
            { label: "Status", value: "In development" },
            { label: "IP Timestamping", value: "Cryptographic" },
            { label: "Reach", value: "Global" },
          ],
          features: [
            "Cryptographic IP timestamping helps establish prior-art dates",
            "Valuation and anti-dilution tooling (in development)",
            "Grant and funding application drafting support",
            "Founder-first, location-independent incubation model",
          ],
          ctaText: "Explore DecasHub",
          ctaUrl: "https://decashub.com",
          accentColor: "cyan",
          highlight: "VENTURE OPERATING SYSTEM (IN DEVELOPMENT)",
        },
        {
          id: "lionexia",
          badge: "API STOREFRONT",
          name: "Lionexia",
          tagline: "API Storefront (prototype)",
          description:
            "Lionexia is an API storefront for B2B customers worldwide: a sales face on top of a separate engine. Prototype stage; no certifications are claimed and no performance figures are published.",
          metrics: [
            { label: "Model", value: "API storefront" },
            { label: "Customers", value: "B2B, global" },
            { label: "Stage", value: "Prototype" },
          ],
          features: [
            "Storefront layer separated from engine logic",
            "Bilingual (TR and EN) customer surface",
            "Tests gate every release",
            "Pricing and availability published only when live",
          ],
          ctaText: "Visit Lionexia",
          ctaUrl: "https://lionexia.com",
          accentColor: "emerald",
          highlight: "API STOREFRONT FOR B2B (PROTOTYPE)",
        },
        {
          id: "udt",
          badge: "HARDWARE HEALTH",
          name: "UDT",
          tagline: "Remote Hardware Repair & Health Diagnostics",
          description:
            "UDT (Unified Diagnostic Tech) works on remote diagnostics and health monitoring for connected hardware: PCs, phones and smart-home devices. MVP stage; the test count below is measured and dated.",
          metrics: [
            { label: "Stage", value: "MVP" },
            { label: "Automated Tests", value: "384 passed, 3 skipped (2026-11-06)" },
            { label: "Scope", value: "Global" },
          ],
          features: [
            "Remote hardware diagnostics",
            "Battery and thermal health modelling",
            "Failure prediction research",
            "Device coverage across PC, mobile and IoT",
          ],
          ctaText: "Visit UDT",
          ctaUrl: "https://udt.ercumenterden.com",
          accentColor: "amber",
          highlight: "HARDWARE DIAGNOSTICS (MVP STAGE)",
        },
      ] as EcosystemCard[],
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
          title: "DecasHub: Venture Operating System",
          role: "Founder, ALPAR AI and DecasHub",
          category: "AUTONOMOUS VENTURE ARCHITECTURE",
          badge: "SOVEREIGN SYSTEM SINGULARITY",
          summary:
            "Building DecasHub: cryptographic IP timestamping to help establish prior-art dates, and valuation/anti-dilution tooling (in development).",
          takeaway:
            "We don't train corporate cogs. We forge sovereign CEOs who hold unbreakable mathematical and technological independence.",
          metrics: ["In development", "Cryptographic IP timestamping"],
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
        "UDT Hardware Diagnostics & Partnerships",
        "Lionexia API & Enterprise Licensing",
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
        { label: "UDT", href: "https://udt.ercumenterden.com" },
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
        { label: "ALPAR AI", value: "YZ denetimi", desc: "Sayaçlar yalnızca tarihiyle yayımlanır" },
        { label: "DECASHUB", value: "Geliştirme aşamasında", desc: "Girişim işletim sistemi" },
        { label: "LIONEXIA", value: "Prototip", desc: "API vitrini" },
        { label: "UDT", value: "MVP", desc: "Donanım teşhisi" },
      ],
    },
    ecosystem: {
      sectionBadge: "ÇEKİRDEK GİRİŞİMLER",
      sectionTitle: "Ekosistem",
      sectionDescription:
        "İstanbul'dan küresel pazar için kurulan dört girişim: yapay zeka hesap verebilirliği, girişim işletim sistemi, API vitrini ve donanım teşhisi. Her biri gerçek aşamasını gösterir.",
      cards: [
        {
          id: "alpar-ai",
          badge: "YAPAY ZEKA HESAP VERİLEBİLİRLİĞİ & DENETİM",
          name: "ALPAR AI",
          tagline: "Yapay Zeka Hesap Verebilirliği ve İhlal Sicili",
          description:
            "Basında yer alan iddialara göre xAI'ın Grok 4 modeliyle yaşanan pasaport verisi vakasından doğdu (TÜRKINFORM, 25 Haziran 2026). Yapay zeka sağlayıcılarının yayımlanmış çıktılarını denetler. Vaka ve sağlayıcı sayaçları yalnızca AlparAI veritabanından, tarihiyle birlikte beslendiğinde gösterilir. GDPR, AB Yapay Zeka Yasası ve KVKK'ya atıf yapan denetim dosyaları hazırlar.",
          metrics: [
            { label: "Vaka Sayacı", value: "Yayımlanmıyor" },
            { label: "Sağlayıcı Sayısı", value: "Yayımlanmıyor" },
            { label: "Hukuki Çerçeve", value: "GDPR, AB YZ Yasası, KVKK" },
          ],
          features: [
            "Adli yapay zeka girdi ve çıktı hash doğrulaması",
            "Yanıltıcı davranış ve halüsinasyon sicili",
            "Düzenleyici kurumlar için dava öncesi delil paketleri",
            "Sürekli otomatik kırmızı takım denetimi",
          ],
          ctaText: "001 Nolu Vakayı İncele",
          ctaUrl: "https://alparai.com/cases/001-grok-passport",
          accentColor: "cyan",
          highlight: "VAKA 001: BASINA GÖRE İDDİA EDİLEN GROK PASAPORT VERİSİ VAKASI",
        },
        {
          id: "decashub",
          badge: "GİRİŞİM İŞLETİM SİSTEMİ",
          name: "DecasHub",
          tagline: "Girişim İşletim Sistemi (geliştirme aşamasında)",
          description:
            "Kurucular için, sınırsız ve binasız bir teknopark modeline dayanan girişim işletim sistemi. Kriptografik IP zaman damgası önceliği belgelemeye yardımcı olur; değerleme ve seyrelme karşıtı araçlar geliştirme aşamasındadır.",
          metrics: [
            { label: "Durum", value: "Geliştirme aşamasında" },
            { label: "IP Zaman Damgası", value: "Kriptografik" },
            { label: "Erişim", value: "Küresel" },
          ],
          features: [
            "Önceliği belgelemeye yardımcı kriptografik IP zaman damgası",
            "Değerleme ve seyrelme karşıtı araçlar (geliştirme aşamasında)",
            "Hibe ve fon başvurusu hazırlama desteği",
            "Kurucu odaklı, konumdan bağımsız kuluçka modeli",
          ],
          ctaText: "DecasHub'ı Keşfet",
          ctaUrl: "https://decashub.com",
          accentColor: "cyan",
          highlight: "GİRİŞİM İŞLETİM SİSTEMİ (GELİŞTİRME AŞAMASINDA)",
        },
        {
          id: "lionexia",
          badge: "API VİTRİNİ",
          name: "Lionexia",
          tagline: "API Vitrini (prototip)",
          description:
            "Lionexia, dünya genelindeki kurumsal müşteriler için bir API vitrinidir: ayrı bir motorun üzerinde satış yüzü. Prototip aşamasındadır; sertifika iddiası yoktur ve performans rakamı yayımlanmaz.",
          metrics: [
            { label: "Model", value: "API vitrini" },
            { label: "Müşteri", value: "Kurumsal, küresel" },
            { label: "Aşama", value: "Prototip" },
          ],
          features: [
            "Motor mantığından ayrılmış vitrin katmanı",
            "İki dilli (TR ve EN) müşteri yüzeyi",
            "Her sürümü testler denetler",
            "Fiyat ve kullanılabilirlik yalnızca canlıya geçince yayımlanır",
          ],
          ctaText: "Lionexia'yı Ziyaret Et",
          ctaUrl: "https://lionexia.com",
          accentColor: "emerald",
          highlight: "KURUMSAL API VİTRİNİ (PROTOTİP)",
        },
        {
          id: "udt",
          badge: "DONANIM SAĞLIĞI",
          name: "UDT",
          tagline: "Uzaktan Donanım Tamiri ve Sağlık Teşhisi",
          description:
            "UDT (Unified Diagnostic Tech), bağlı donanımlar için uzaktan teşhis ve sağlık izleme üzerinde çalışır: bilgisayarlar, telefonlar ve akıllı ev cihazları. MVP aşamasındadır; aşağıdaki test sayısı ölçülmüş ve tarihlidir.",
          metrics: [
            { label: "Aşama", value: "MVP" },
            { label: "Otomatik Test", value: "384 geçti, 3 atlandı (2026-11-06)" },
            { label: "Kapsam", value: "Küresel" },
          ],
          features: [
            "Uzaktan donanım teşhisi",
            "Batarya ve termal sağlık modellemesi",
            "Arıza öngörüsü araştırması",
            "PC, mobil ve IoT cihaz kapsamı",
          ],
          ctaText: "UDT'yi Ziyaret Et",
          ctaUrl: "https://udt.ercumenterden.com",
          accentColor: "amber",
          highlight: "DONANIM TEŞHİSİ (MVP AŞAMASI)",
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
          title: "DecasHub: Girişim İşletim Sistemi",
          role: "Kurucu, ALPAR AI ve DecasHub",
          category: "OTONOM GİRİŞİM MİMARİSİ",
          badge: "EGEMEN SİSTEM TEKİLLİĞİ",
          summary:
            "DecasHub üzerinde çalışılıyor: önceliği belgelemeye yardımcı kriptografik IP zaman damgası ve değerleme/seyrelme karşıtı araçlar (geliştirme aşamasında).",
          takeaway:
            "Kurumsal çarkların kölesi olan çalışanlar değil; kendi teknolojisinin, sermayesinin ve matematiğinin efendisi olan egemen kurucular.",
          metrics: ["Geliştirme aşamasında", "Kriptografik IP zaman damgası"],
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
        "UDT Donanım Teşhisi & Ortaklıklar",
        "Lionexia API & Kurumsal Lisanslama",
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
        { label: "UDT", href: "https://udt.ercumenterden.com" },
        { label: "Lionexia", href: "https://lionexia.com" },
        { label: "TÜRKINFORM", href: "https://turkinform.com.tr" },
      ],
    },
  },
};
