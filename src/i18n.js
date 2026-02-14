// ═══════════════════════════════════════════════
// i18n — V3 Bold Copywriting + Manifesto (TR / EN)
// ═══════════════════════════════════════════════

const translations = {
    tr: {
        "nav.about": "Hakkımda",
        "nav.ventures": "Girişimler",
        "nav.track": "Geçmiş",
        "nav.method": "Metodoloji",
        "nav.contact": "İletişim",

        "hero.badge": "Yeni projeler geliştiriliyor",
        "hero.tagline": "8 girişim kurdum. 5'i hâlâ ayakta. Geri kalanından öğrendim.",
        "hero.stat1": "Yıl Deneyim",
        "hero.stat2": "Kurulan Girişim",
        "hero.stat3": "Aktif Proje",
        "hero.stat4": "Sektör",
        "hero.cta1": "Girişimleri Keşfet",
        "hero.cta2": "İletişime Geç",

        "manifesto.text": "Teknolojiyi güven üzerine inşa ediyorum. Her projemde aynı soru:",
        "manifesto.question": '"Bu dünyayı daha iyi bir yer yapıyor mu?"',

        "about.tag": "Hakkımda",
        "about.title": "Depodan Bölge Müdürlüğüne.\nBölge Müdürlüğünden Kuruculuğa.",
        "about.p1": "Akenerji'de 8 yıl — depo operatörlüğünden bölge müdürlüğüne yükseldim. Büyük ölçekli operasyonları yönetmeyi, ekip kurmayı ve milyonlarca liralık portföyleri idare etmeyi burada öğrendim.",
        "about.p2": "Erden Global Enerji'yi sıfırdan karlı bir operasyona taşıdım. Rabbit Teknoloji ile Türkiye'nin ilk powerbank kiralamasını, INOVCARD ile dijital kartvizit platformunu kurdum.",
        "about.p3": "Bugün 5 aktif proje yürütüyorum — AI güvenliği, karbon, startup simülasyonu, ajans ve IoT donanım. Aynı felsefe: teknolojiyi güven, şeffaflık ve sürdürülebilirlik üzerine kurmak.",
        "about.h1": "Enerji & Operasyon",
        "about.h1d": "Akenerji'de 8 yıl — depodan bölge müdürlüğüne. Kurumsal disiplin ve ölçekli yönetim.",
        "about.h2": "Seri Girişimcilik",
        "about.h2d": "8 girişim kurdum. Enerji, IoT, AI, karbon — her birinden farklı bir ders.",
        "about.h3": "AI-Native Kurucu",
        "about.h3d": "AI'yı araç değil, stratejik ortak olarak kullanıyorum.",
        "about.h4": "Sürdürülebilirlik",
        "about.h4d": "Kar ve gezegen bir arada olmalı.",

        "ventures.tag": "Aktif Girişimler",
        "ventures.title": "Geleceği İnşa Eden 5 Proje",
        "ventures.desc": "Her biri farklı bir sektörde, ortak bir vizyonla.",
        "v.carbon.badge": "Sürdürülebilirlik",
        "v.carbon.tagline": "CBAM 2026 krizi Avrupa'nın kapısında. Biz hazırız.",
        "v.carbon.desc": "AI + Blockchain + Uydu (Sentinel-2) ile karbon ticaretini şeffaf ve erişilebilir hale getiriyoruz. dMRV altyapısı, EU düzenlemelerine uyumlu.",
        "v.alpar.badge": "AI Güvenliği",
        "v.alpar.tagline": "AI'lar güvenilir mi? Biz ölçüyoruz.",
        "v.alpar.desc": 'AI modelleri için gerçek zamanlı güven skorlaması. "Stripe for AI Safety" — EU AI Act uyumlu doğrulama altyapısı.',
        "v.decas.badge": "Startup Simülasyon",
        "v.decas.tagline": "Para yakmadan önce, simüle et.",
        "v.decas.desc": "Dünyanın ilk AI destekli startup uçuş simülatörü. 12 AI ajanıyla kapsamlı analiz, risk ve stres testi.",
        "v.lion.badge": "Teknoloji & Danışmanlık",
        "v.lion.tagline": "Ekosistemin motor odası.",
        "v.lion.desc": "Yazılım, dijital dönüşüm ve büyüme stratejileri. Tüm girişimlerin teknoloji altyapısını destekleyen operasyonel merkez.",
        "v.fresh.badge": "IoT / Donanım",
        "v.fresh.tagline": "Kaskını tak. Otomattan.",
        "v.fresh.desc": "Akıllı motorsiklet kask otomatı. Prototip tamamlanmak üzere, sahaya çıkmaya hazırız.",
        "v.visit": "Siteyi Ziyaret Et",

        "track.tag": "Geçmiş Başarılar",
        "track.title": "Kurdum. Büyüttüm. Yürüdü.",
        "track.desc": "Bıraktığım yerde bile çalışmaya devam eden projeler.",
        "track.erden": "Sıfırdan kurduğum enerji ticaret şirketi. Karlı bir operasyona dönüştürdüm ve 6 yıl boyunca başarıyla yönettim.",
        "track.rabbit": "Türkiye'nin ilk powerbank kiralama girişimi. Paylaşım ekonomisi modeliyle yenilikçi bir hizmet.",
        "track.inov": "Dijital kartvizit platformu — kurdum ve büyüttüm. Ben ayrıldıktan sonra da aktif olarak hizmet veriyor.",

        "method.tag": "Yaklaşımım",
        "method.title": "Nasıl İnşa Ediyorum?",
        "method.m1": "Ekosistem Düşüncesi",
        "method.m1d": "Tek bir ürün yerine birbirini besleyen sistemler. Her proje bağımsız, ama birlikte çok daha güçlü.",
        "method.m2": "AI-Native Yaklaşım",
        "method.m2d": "AI'yı sadece araç değil, stratejik ortak olarak kullanıyorum. Her projenin çekirdeğinde AI var.",
        "method.m3": "Hızlı İterasyon",
        "method.m3d": "Fikirden MVP'ye hızla. Test et, öğren, adapte ol. Mükemmelliği beklemek yerine harekete geç.",
        "method.m4": "Güven Altyapısı",
        "method.m4d": "Şeffaflık ve hesap verebilirlik her projemde temel yapı taşı. Güven olmadan ölçek olmaz.",

        "contact.tag": "İletişim",
        "contact.title": "Konuşalım",
        "contact.desc": "Yeni projeler, iş birlikleri veya sadece fikir alışverişi.",
        "contact.phone": "Telefon",

        "footer.desc": "Teknolojiyi güven, şeffaflık ve sürdürülebilirlik üzerine inşa ediyorum.",
        "footer.rights": "Tüm hakları saklıdır."
    },

    en: {
        "nav.about": "About",
        "nav.ventures": "Ventures",
        "nav.track": "Track Record",
        "nav.method": "Methodology",
        "nav.contact": "Contact",

        "hero.badge": "New projects in development",
        "hero.tagline": "I've built 8 ventures. 5 are still standing. I learned from the rest.",
        "hero.stat1": "Years Experience",
        "hero.stat2": "Ventures Founded",
        "hero.stat3": "Active Projects",
        "hero.stat4": "Industries",
        "hero.cta1": "Explore Ventures",
        "hero.cta2": "Get in Touch",

        "manifesto.text": "I build technology on trust. In every project, the same question:",
        "manifesto.question": '"Does this make the world a better place?"',

        "about.tag": "About Me",
        "about.title": "From Warehouse to Regional Director.\nFrom Director to Founder.",
        "about.p1": "8 years at Akenerji — I rose from warehouse operations to regional director. I learned to manage large-scale operations, build teams, and handle multi-million dollar portfolios.",
        "about.p2": "I built Erden Global Enerji into a profitable operation from scratch. Launched Turkey's first powerbank rental with Rabbit Technology and created digital business card platform INOVCARD.",
        "about.p3": "Today I'm running 5 active projects — AI safety, carbon markets, startup simulation, digital agency, and IoT hardware. Same philosophy: build tech on trust, transparency, sustainability.",
        "about.h1": "Energy & Operations",
        "about.h1d": "8 years at Akenerji — warehouse to regional director. Corporate discipline and scaled management.",
        "about.h2": "Serial Entrepreneurship",
        "about.h2d": "Built 8 ventures. Energy, IoT, AI, carbon — a different lesson from each.",
        "about.h3": "AI-Native Founder",
        "about.h3d": "I use AI not as a tool, but as a strategic partner.",
        "about.h4": "Sustainability",
        "about.h4d": "Profit and planet must coexist.",

        "ventures.tag": "Active Ventures",
        "ventures.title": "5 Projects Building the Future",
        "ventures.desc": "Each in a different industry, united by a common vision.",
        "v.carbon.badge": "Sustainability",
        "v.carbon.tagline": "CBAM 2026 crisis is at Europe's door. We're ready.",
        "v.carbon.desc": "Making carbon trading transparent and accessible with AI + Blockchain + Satellite (Sentinel-2). dMRV infrastructure, EU regulation compliant.",
        "v.alpar.badge": "AI Safety",
        "v.alpar.tagline": "Can AI models be trusted? We measure it.",
        "v.alpar.desc": 'Real-time trust scoring for AI models. "Stripe for AI Safety" — EU AI Act compliant verification infrastructure.',
        "v.decas.badge": "Startup Simulation",
        "v.decas.tagline": "Before you burn cash, simulate it.",
        "v.decas.desc": "The world's first AI-powered startup flight simulator. Comprehensive analysis with 12 AI agents for risk and stress testing.",
        "v.lion.badge": "Technology & Consulting",
        "v.lion.tagline": "The engine room of the ecosystem.",
        "v.lion.desc": "Software, digital transformation, and growth strategies. The operational core supporting all ventures' technology infrastructure.",
        "v.fresh.badge": "IoT / Hardware",
        "v.fresh.tagline": "Put on your helmet. From the vending machine.",
        "v.fresh.desc": "Smart motorcycle helmet vending machine. Prototype nearing completion, ready for field deployment.",
        "v.visit": "Visit Website",

        "track.tag": "Track Record",
        "track.title": "Built. Scaled. Delivered.",
        "track.desc": "Projects that keep running even after I moved on.",
        "track.erden": "Energy trading company I built from the ground up. Transformed into a profitable operation and managed for 6 years.",
        "track.rabbit": "Turkey's first powerbank rental startup. Innovative service with a sharing economy model.",
        "track.inov": "Digital business card platform — built and scaled it. Still actively serving customers after my departure.",

        "method.tag": "My Approach",
        "method.title": "How I Build",
        "method.m1": "Ecosystem Thinking",
        "method.m1d": "Instead of single products, interconnected systems. Each project is independent, but together they're much stronger.",
        "method.m2": "AI-Native Approach",
        "method.m2d": "AI isn't just a tool — it's a strategic partner. AI is at the core of every project.",
        "method.m3": "Rapid Iteration",
        "method.m3d": "Fast from idea to MVP. Test in market, learn, adapt. Act instead of waiting for perfection.",
        "method.m4": "Trust Infrastructure",
        "method.m4d": "Transparency and accountability are the foundation of every project. Without trust, there's no scale.",

        "contact.tag": "Contact",
        "contact.title": "Let's Talk",
        "contact.desc": "New projects, collaborations, or just exchanging ideas.",
        "contact.phone": "Phone",

        "footer.desc": "Building technology on trust, transparency, and sustainability.",
        "footer.rights": "All rights reserved."
    }
};

let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('tr') ? 'tr' : 'en');

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    const btn = document.getElementById('langToggle');
    if (btn) btn.querySelector('.lang-label').textContent = lang === 'tr' ? 'EN' : 'TR';
    document.title = lang === 'tr'
        ? 'Ercüment Erden — Seri Girişimci & Ekosistem Mimarı'
        : 'Ercüment Erden — Serial Entrepreneur & Ecosystem Architect';
}

function toggleLanguage() {
    setLanguage(currentLang === 'tr' ? 'en' : 'tr');
}

export { setLanguage, toggleLanguage, currentLang };
