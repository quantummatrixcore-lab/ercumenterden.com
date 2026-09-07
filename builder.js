/**
 * builder.js
 * Piri Reis (Cartographer) - Sovereign Founder Authority Portal Generator
 * Generates: index.html, app.js, render.js, test_portal.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const rawContent = fs.readFileSync(path.join(baseDir, 'content.json'), 'utf8').replace(/^\uFEFF/, '');
const content = JSON.parse(rawContent);

// 1. GENERATE INDEX.HTML
const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ercüment Erden — Kurucu Otorite & Stratejik Sendika Portalı</title>
  <meta name="description" content="Ercüment Erden: Kurucu & Egemen Sistemler Baş Mimarı. Alparai, DecasHub, Lionexia ve ErcuOS ekosistemi. Stratejik Sendika: Ahmet Rıfat Albuz & Prof. Dr. Musa Aygül.">
  <link rel="stylesheet" href="/design_tokens.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Ambient Cosmic Lighting -->
  <div class="cosmic-mesh"></div>

  <!-- Header & Navigation -->
  <header class="header">
    <div class="container header-content">
      <a href="/" class="brand-emblem">
        <div class="emblem-icon">🏛️</div>
        <div>
          <div class="brand-title">ERCÜMENT ERDEN</div>
          <div class="brand-subtitle">KURUCU VE BAŞ MİMAR</div>
        </div>
      </a>

      <ul class="nav-links">
        <li><a href="#biyografi">Biyografi</a></li>
        <li><a href="#sendika">Sendika Heyeti</a></li>
        <li><a href="#projeler">4 Büyük Proje</a></li>
        <li><a href="#telemetri">Veri Odası</a></li>
        <li><a href="#iletisim">İletişim</a></li>
      </ul>

      <div class="status-pill">
        <span class="status-dot"></span>
        <span>SOVEREIGN MESH ONLINE</span>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-badge-wrap">
          <span>⚡</span>
          <span>Kurucu Otorite & Stratejik Ekosistem</span>
        </div>

        <h1 class="hero-title">
          Geleceğin Egemen Altyapılarını<br>
          <span class="hero-gradient-text">Matematiksel Kesinlikle İnşa Eden Güç</span>
        </h1>

        <p class="hero-subtitle">
          Fintech, enerji sözleşmeleri müzakeresi, egemen yapay zeka işletim sistemleri ve bağımsız hesap verebilirlik mimarilerinde 15 yılı aşkın stratejik liderlik.
        </p>

        <div class="hero-actions">
          <a href="#projeler" class="btn-primary">
            <span>4 Büyük Projeyi İncele</span>
            <span>→</span>
          </a>
          <a href="#sendika" class="btn-secondary">
            <span>Stratejik Sendika Heyeti</span>
          </a>
          <a href="#iletisim" class="btn-secondary">
            <span>Yatırımcı Veri Odası</span>
          </a>
        </div>

        <!-- Metric Ticker Grid -->
        <div class="hero-metrics-grid">
          <div class="metric-item">
            <div class="metric-value">15+ Yıl</div>
            <div class="metric-label">Fintech & Enerji Müzakeresi</div>
          </div>
          <div class="metric-item">
            <div class="metric-value">4 Platform</div>
            <div class="metric-label">Alparai • DecasHub • Lionexia • ErcuOS</div>
          </div>
          <div class="metric-item">
            <div class="metric-value">142 Motor</div>
            <div class="metric-label">ErcuOS Turing-Complete JIT Çekirdeği</div>
          </div>
          <div class="metric-item">
            <div class="metric-value">EU AI Act</div>
            <div class="metric-label">Article 73 Yasal Uyum Kalkanı</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kurucu Biyografisi Section -->
    <section id="biyografi" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">// KURUCU PROFİLİ & VİZYON</span>
          <h2 class="section-heading">Ercüment Erden Biyografisi</h2>
          <p class="section-desc">
            Sermaye piyasaları, küresel enerji anlaşmaları ve egemen yazılım mimarisini tek bir stratejik çizgide birleştiren kurucu aklı.
          </p>
        </div>

        <!-- Comprehensive Narrative Dossier -->
        <div class="bio-box">
          <div class="bio-paragraphs">
            <p>
              <strong>Vizyon ve Girişimcilik:</strong> Ercüment Erden, 15 yılı aşkın bir süredir fintech, finansal teknolojiler, derin teknoloji ve egemen sistem mimarisi alanlarında öncü bir lider olarak faaliyet göstermektedir. Kurucu ve Egemen Sistemler Baş Mimarı vizyonu, dijital dönüşümün sınırlarını yeniden tanımlayarak bağımsız, yerli ve sıfır dış bağımlılıklı altyapıların inşasını merkeze alır. Finansal ekosistemin karmaşık dinamiklerini yenilikçi sistem mimarileriyle birleştirerek sürdürülebilir rekabet avantajı sağlayan çözümler üretir.
            </p>
            <p>
              <strong>Ticari ve Stratejik Güç:</strong> Yüksek hacimli enerji tedarik sözleşmeleri müzakerelerindeki ustalığı ve sınır ötesi kurumsal satış stratejileri konusundaki derin uzmanlığıyla tanınır. Milyon dolarlık PPA anlaşmalarının, regüle endüstrilerdeki karmaşık ticari sözleşmelerin yapılandırılmasında gösterdiği titiz yaklaşım; çok taraflı iş ortaklıklarının ve büyük ölçekli altyapı projelerinin sıfır sürtünmeyle hayata geçirilmesini mümkün kılar.
            </p>
            <p>
              <strong>Ekosistem Mimarisi:</strong> Bağımsız ve egemen teknoloji altyapısı felsefesini somutlaştıran çığır açan platformların kurucusudur: <strong>ErcuOS</strong> (142 modüllü otonom yapay zeka işletim sistemi), <strong>Alparai</strong> (yapay zeka anayasası ve etik denetim mahkemesi), <strong>DecasHub</strong> (egemen bulut ve edge mikro-servis altyapısı) ve <strong>Lionexia</strong> (yüksek frekanslı algoritmik ticaret motoru). Bu platformlar kurumların kendi dijital egemenliklerini koruyarak inovasyon hızını maksimize etmelerini sağlar.
            </p>
          </div>
        </div>

        <!-- 4 Core Competence Pillars -->
        <div class="bento-grid-4">
          <div class="card-obsidian pillar-card">
            <div class="pillar-icon">⚡</div>
            <h3 class="pillar-title">Enerji Sözleşmeleri Müzakeresi</h3>
            <p class="pillar-desc">Yüksek hacimli enerji tedarik ve PPA anlaşmalarında sınır ötesi müzakere masası yönetimi, risk-koruma (hedging) stratejileri ve regülasyon uyumu.</p>
            <div class="badges-wrap">
              <span class="badge-tag">PPA Modelleri</span>
              <span class="badge-tag">Sınır Ötesi Ticaret</span>
            </div>
          </div>

          <div class="card-obsidian pillar-card">
            <div class="pillar-icon">🎯</div>
            <h3 class="pillar-title">Kurumsal B2B Satış Stratejisi</h3>
            <p class="pillar-desc">Büyük ölçekli kurumsal teknoloji sözleşmelerinin yapılandırılması, LTV/CAC optimizasyonu (>17x) ve regüle sektörlerde pazar liderliği.</p>
            <div class="badges-wrap">
              <span class="badge-tag">LTV/CAC > 17x</span>
              <span class="badge-tag">Deal Structuring</span>
            </div>
          </div>

          <div class="card-obsidian pillar-card">
            <div class="pillar-icon">🏛️</div>
            <h3 class="pillar-title">Egemen Sistem Mimarisi</h3>
            <p class="pillar-desc">Bare-metal sunucularda çalışan sıfır-tahsisli paylaşımlı bellek mimarisi, Turing-complete DSL ve otonom multi-agent swarms tasarımı.</p>
            <div class="badges-wrap">
              <span class="badge-tag">Zero-Alloc Memory</span>
              <span class="badge-tag">Multi-Agent</span>
            </div>
          </div>

          <div class="card-obsidian pillar-card">
            <div class="pillar-icon">📊</div>
            <h3 class="pillar-title">Aktüeryal Risk & Algoritmik Finans</h3>
            <p class="pillar-desc">Bayesian risk modelleri, mikro-saniye gecikmeli emir takas protokolleri ve karbon/enerji türev piyasaları niceliksel modelleme.</p>
            <div class="badges-wrap">
              <span class="badge-tag">Bayesian TrustScore</span>
              <span class="badge-tag">HFT Engine</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stratejik Sendika Section -->
    <section id="sendika" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">// STRATEJİK SENDİKA HEYETİ</span>
          <h2 class="section-heading">The Syndicate (Sendika)</h2>
          <p class="section-desc">
            Hukuki regülasyon kalkanı ve küresel medya otoritesiyle tahkim edilmiş, teknolojik vizyonu kurumsal dokunulmazlığa kavuşturan liderler.
          </p>
        </div>

        <div class="bento-grid-2">
          <!-- Ahmet Rıfat Albuz -->
          <div class="card-obsidian syndicate-card">
            <div class="syndicate-header">
              <div>
                <h3 class="syndicate-name">Ahmet Rıfat Albuz</h3>
                <div class="syndicate-role">Medya Stratejisi & İletişim Otoritesi</div>
                <div class="syndicate-inst">TÜRKİNFORM Genel Yayın Yönetmeni & yeninesil.tv Kurucusu</div>
              </div>
              <div class="emblem-icon">📰</div>
            </div>

            <p class="syndicate-bio">
              20 yılı aşkın süredir hem geleneksel hem de dijital medya ekosisteminin mutfağından yetişen Ahmet Rıfat Albuz; ana akım yayıncılık, kamuoyu inşası, kriz iletişimi ve stratejik algı yönetimi alanlarında sendikanın dış dünyaya açılan sesidir. Medya ağları ve haber üretim hatlarındaki stratejik kontrolü, ekosistemin güvenilirliğini ve piyasa otoritesini pekiştirir.
            </p>

            <div class="badges-wrap" style="margin-bottom: 1.5rem;">
              <span class="badge-tag">Kamuoyu Gücü</span>
              <span class="badge-tag">Medya Masası</span>
              <span class="badge-tag">Kriz İletişimi</span>
              <span class="badge-tag">İtibar Yönetimi</span>
            </div>

            <div class="syndicate-links">
              <a href="https://ahmetrifatalbuz.com/" target="_blank" rel="noopener" class="link-pill">
                <span>🌐</span> ahmetrifatalbuz.com ↗
              </a>
              <a href="https://yeninesil.tv/" target="_blank" rel="noopener" class="link-pill">
                <span>📺</span> yeninesil.tv ↗
              </a>
            </div>
          </div>

          <!-- Prof. Dr. Musa Aygül -->
          <div class="card-obsidian syndicate-card">
            <div class="syndicate-header">
              <div>
                <h3 class="syndicate-name">Prof. Dr. Musa Aygül</h3>
                <div class="syndicate-role">Hukuki Yönetişim & Uluslararası Tahkim Otoritesi</div>
                <div class="syndicate-inst">Selçuk Üniv. Hukuk Fak. Milletlerarası Özel Hukuk ABD Bşk.</div>
              </div>
              <div class="emblem-icon">⚖️</div>
            </div>

            <p class="syndicate-bio">
              Milletlerarası tahkim, sınır ötesi yatırımlar hukuku ve uluslararası ticaret alanında küresel ölçekte tanınmış bir otorite olan Prof. Dr. Musa Aygül; AB Yapay Zeka Yasası (EU AI Act) uyumu ve otonom sistemlerin etik yönetişimi konusunda sendikanın yasal kalkanını yönetir. Çok uluslu sözleşmelerde ve kurumsal anlaşmalarda yasal riskleri sıfırlayarak sürdürülebilir bir büyüme güvencesi sunar.
            </p>

            <div class="badges-wrap" style="margin-bottom: 1.5rem;">
              <span class="badge-tag">Milletlerarası Tahkim</span>
              <span class="badge-tag">EU AI Act Mevzuatı</span>
              <span class="badge-tag">Yatırım Hukuku</span>
              <span class="badge-tag">Etik Yönetişim</span>
            </div>

            <div class="syndicate-links">
              <a href="https://musa-aygul-academic-portfolio.vercel.app/" target="_blank" rel="noopener" class="link-pill">
                <span>🎓</span> Akademik Portfolyo ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Proje Vitrini Section -->
    <section id="projeler" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">// EKOSİSTEM VİTRİNİ</span>
          <h2 class="section-heading">4 Büyük Stratejik Proje</h2>
          <p class="section-desc">
            Egemen yapay zeka, güven altyapısı, bare-metal bulut dağıtımı ve algoritmik finans alanlarında sıfır dış bağımlılıkla çalışan tescilli platformlar.
          </p>
        </div>

        <div class="bento-grid-2">
          <!-- 1. ALPAR AI -->
          <div class="card-obsidian project-card">
            <div class="project-top">
              <span class="project-category">Yapay Zeka Anayasası & Etik Otoritesi</span>
              <span class="status-pill"><span class="status-dot"></span> CANLI / PILOT</span>
            </div>
            <h3 class="project-name">ALPAR AI</h3>
            <div class="project-headline">The Supreme Court of Artificial Intelligence</div>
            <p class="project-desc">
              Yapay zeka modelleri ve otonom ajanlar için bağımsız, kriptografik olarak doğrulanabilir etik, güvenlik ve hesap verebilirlik altyapısı. Bayesian TrustScore v2.5 risk motoru ve sıfır-bilgi ispatlı (ZKP) ihbar mekanizmasıyla AB Yapay Zeka Yasası (EU AI Act Article 73) standartlarını otomatikleştirir.
            </p>
            <div class="project-metrics-row">
              <span>LTV/CAC: 17.4x</span> • <span>Gross Margin: 85%</span> • <span>9-Model Failover</span>
            </div>
            <div class="badges-wrap" style="margin-bottom: 1.5rem;">
              <span class="badge-tag">Bayesian TrustScore</span>
              <span class="badge-tag">ZKP Whistleblower</span>
              <span class="badge-tag">EU AI Act Art. 73</span>
            </div>
            <div>
              <a href="https://alparai.com" target="_blank" rel="noopener" class="btn-primary" style="display:inline-flex; width:auto;">
                <span>alparai.com'u Ziyaret Et</span> <span>↗</span>
              </a>
            </div>
          </div>

          <!-- 2. DECASHUB -->
          <div class="card-obsidian project-card">
            <div class="project-top">
              <span class="project-category">Egemen Bulut & Dağıtık Mikro-Servis Ağı</span>
              <span class="status-pill"><span class="status-dot"></span> AKTİF ÜRETİM</span>
            </div>
            <h3 class="project-name">DECASHUB</h3>
            <div class="project-headline">Bare-Metal Sovereign Cloud Orchestration</div>
            <p class="project-desc">
              Bare-metal DeHost Xeon altyapısı üzerine kurulu, çok bölgeli uç bilişim (multi-region edge mesh) ve konteyner orkestratörü. Yüksek hacimli mikro-servisleri sıfır bulut bağımlılığı ve milisaniyelik veri akışıyla yönetir; altyapı maliyetlerini %40'a varan oranda düşürür.
            </p>
            <div class="project-metrics-row">
              <span>Edge Latency: &lt;5ms</span> • <span>Uptime: 99.99%</span> • <span>DeHost Xeon Mesh</span>
            </div>
            <div class="badges-wrap" style="margin-bottom: 1.5rem;">
              <span class="badge-tag">DeHost Xeon</span>
              <span class="badge-tag">Multi-Region Edge</span>
              <span class="badge-tag">Docker/K8s Deploy</span>
            </div>
            <div>
              <a href="https://decashub.com" target="_blank" rel="noopener" class="btn-primary" style="display:inline-flex; width:auto;">
                <span>decashub.com'u Ziyaret Et</span> <span>↗</span>
              </a>
            </div>
          </div>

          <!-- 3. LIONEXIA -->
          <div class="card-obsidian project-card">
            <div class="project-top">
              <span class="project-category">Yüksek Frekanslı Finans & Piyasa Motoru</span>
              <span class="status-pill" style="color:var(--accent-gold); border-color:var(--border-gold);"><span class="status-dot" style="background:var(--accent-gold); box-shadow:0 0 8px var(--accent-gold);"></span> KURUMSAL DAĞITIM</span>
            </div>
            <h3 class="project-name">LIONEXIA</h3>
            <div class="project-headline">Microsecond Execution & Carbon/Energy Clearing</div>
            <p class="project-desc">
              Yüksek frekanslı algoritmik ticaret, enerji vadeli sözleşmeleri ve karbon emisyon piyasaları için tasarlanmış sıfır-tahsisli işlem motoru. Mikro-saniyelik emir iletim protokolü ve adaptif risk kontrol katmanıyla kurumsal düzeyde deterministik takas doğruluğu (%99.999) sağlar.
            </p>
            <div class="project-metrics-row">
              <span>Gecikme: &lt;25µs JIT</span> • <span>Doğruluk: 99.999%</span> • <span>Karbon Piyasaları</span>
            </div>
            <div class="badges-wrap" style="margin-bottom: 1.5rem;">
              <span class="badge-tag">HFT Engine</span>
              <span class="badge-tag">Enerji Takas</span>
              <span class="badge-tag">Karbon Kredileri</span>
            </div>
            <div>
              <span class="badge-tag" style="background:rgba(212,175,55,0.1); border-color:var(--border-gold); color:var(--accent-gold); padding:0.5rem 1rem;">Kurumsal Özel Dağıtım / Proprietary</span>
            </div>
          </div>

          <!-- 4. ERCUOS -->
          <div class="card-obsidian project-card">
            <div class="project-top">
              <span class="project-category">Egemen Yapay Zeka İşletim Sistemi</span>
              <span class="status-pill"><span class="status-dot"></span> ÇEKİRDEK GÜÇ MERKEZİ</span>
            </div>
            <h3 class="project-name">ERCUOS</h3>
            <div class="project-headline">142 Lego Engines & Turing-Complete JIT DSL</div>
            <p class="project-desc">
              142 modüler Lego motorundan oluşan, Turing-Complete JIT DSL (.ercu), L1-L3 bellek hiyerarşisi ve sıfır-kopyalı paylaşımlı bellek (SharedArrayBuffer) mimarisini birleştiren işletim sistemi. 1 milyar işlem/sn Giga-Ops performansı ve 4-ajanlı kapalı devre self-healing yeteneğiyle donatılmıştır.
            </p>
            <div class="project-metrics-row">
              <span>Hız: 1.0B+ Ops/s</span> • <span>Lego Motoru: 142 Modül</span> • <span>Self-Healing Loop</span>
            </div>
            <div class="badges-wrap" style="margin-bottom: 1.5rem;">
              <span class="badge-tag">Turing JIT DSL</span>
              <span class="badge-tag">Giga-Ops Buffer</span>
              <span class="badge-tag">4-Ajanlı Forge</span>
            </div>
            <div>
              <span class="badge-tag" style="background:rgba(0,240,255,0.1); border-color:var(--accent-cyan); color:var(--accent-cyan); padding:0.5rem 1rem;">Ekosistem Çekirdek Motoru / v67 Mesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Veri Odası & Telemetri Section -->
    <section id="telemetri" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">// ŞEFFAFLIK VE DENETİM ODASI</span>
          <h2 class="section-heading">Ekosistem Telemetrisi & Veri Odası</h2>
          <p class="section-desc">
            Kriptografik olarak mühürlenmiş operasyonel durum, donanım mimarisi ve API uç noktaları.
          </p>
        </div>

        <div class="telemetry-strip" style="margin-bottom: 2rem;">
          <div class="telemetry-col">
            <span class="telemetry-tag">AĞ DURUMU</span>
            <span class="telemetry-val" style="color:var(--accent-emerald);">🟢 SOVEREIGN ONLINE (100% HEALTH)</span>
          </div>
          <div class="telemetry-col">
            <span class="telemetry-tag">KRİPTOGRAFİK MÜHÜR</span>
            <span class="telemetry-val">SHA-384-MERKLE-2026-SEALED</span>
          </div>
          <div class="telemetry-col">
            <span class="telemetry-tag">YAPAY ZEKA AĞI</span>
            <span class="telemetry-val">v67 Sovereign Mesh (Groq High-Speed)</span>
          </div>
          <div class="telemetry-col">
            <span class="telemetry-tag">DONANIM KÜMESİ</span>
            <span class="telemetry-val">AMD Ryzen 8-Core + DeHost Xeon</span>
          </div>
        </div>

        <!-- API Integration Box -->
        <div class="card-obsidian" style="font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.8;">
          <div style="color: var(--accent-gold); margin-bottom: 0.5rem; font-weight: 700;">// CANLI REST API VE VERİ ERİŞİM UÇ NOKTALARI</div>
          <div><span style="color:var(--accent-cyan);">GET</span> /content.json &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➔ Tam Ekosistem Veri Modeli</div>
          <div><span style="color:var(--accent-cyan);">GET</span> /api/founder &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➔ Kurucu Biyografisi ve Yetkinlikler</div>
          <div><span style="color:var(--accent-cyan);">GET</span> /api/syndicate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➔ Stratejik Sendika Heyeti Dosyası</div>
          <div><span style="color:var(--accent-cyan);">GET</span> /api/projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➔ 4 Büyük Proje Teknik Verileri</div>
          <div><span style="color:var(--accent-cyan);">GET</span> /api/health &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➔ Sistem Sağlık ve Çalışma Süresi</div>
        </div>
      </div>
    </section>

    <!-- İletişim & Deal Room Section -->
    <section id="iletisim" class="section">
      <div class="container">
        <div class="card-obsidian" style="border: 1px solid var(--border-gold); background: linear-gradient(135deg, rgba(16,22,38,0.9), rgba(10,14,23,0.95)); padding: 3rem 2.5rem;">
          <div style="max-width: 720px;">
            <span class="section-eyebrow">// YATIRIMCI VE KURUMSAL İLETİŞİM</span>
            <h2 class="section-heading" style="font-size: 2.2rem; margin-bottom: 1rem;">Stratejik Ortaklık ve Veri Odası</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6;">
              Alparai Seed Turu, kurumsal enerji müzakereleri, egemen bulut dağıtımları veya stratejik sendika temasları için doğrudan iletişim kurabilirsiniz.
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="mailto:ercument.erden@alparai.com" class="btn-primary">
                <span>📧 ercument.erden@alparai.com</span>
              </a>
              <a href="mailto:contact@ercumenterden.com" class="btn-secondary">
                <span>✉️ contact@ercumenterden.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-content">
      <div>
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">
          ERCÜMENT ERDEN // SOVEREIGN FOUNDER AUTHORITY
        </div>
        <div>Tüm Hakları Saklıdır © 2026. Egemen Sistemler ve Güven Altyapısı.</div>
      </div>

      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-align: right;">
        <div>Motor: ErcuOS v67 Sovereign Mesh</div>
        <div>Mühür: 0xPIRI_REIS_CARTOGRAPHER_FOUNDER_VERIFIED</div>
      </div>
    </div>
  </footer>

</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'index.html'), htmlContent, 'utf8');
console.log('1. index.html written successfully.');

// 2. GENERATE APP.JS
const appContent = `/**
 * app.js
 * Ercüment Erden Sovereign Authority & Investor Deal Room Server
 * High-Performance Vanilla Node.js HTTP Server with REST APIs
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const BASE_DIR = __dirname;

// MIME Type Registry
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function loadContent() {
  try {
    const raw = fs.readFileSync(path.join(BASE_DIR, 'content.json'), 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return { error: 'Failed to load content.json', details: err.message };
  }
}

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, 'http://' + (req.headers.host || 'localhost:' + PORT));
  const pathname = urlObj.pathname;

  if (pathname.includes('..')) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('403 Forbidden: Path traversal prohibited');
  }

  // REST API Routes
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({
      status: 'ok',
      service: 'ercumenterden.com',
      engine: 'v67_sovereign_mesh',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      memoryUsageMb: Math.round(process.memoryUsage().rss / 1024 / 1024)
    }, null, 2));
  }

  if (pathname === '/api/founder') {
    const data = loadContent();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(data.founder || {}, null, 2));
  }

  if (pathname === '/api/syndicate') {
    const data = loadContent();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(data.syndicate || {}, null, 2));
  }

  if (pathname === '/api/projects') {
    const data = loadContent();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(data.projects || [], null, 2));
  }

  if (pathname === '/content.json') {
    const data = loadContent();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(data, null, 2));
  }

  // Static File Serving
  let targetFile = 'index.html';
  if (pathname === '/' || pathname === '/index.html') {
    targetFile = 'index.html';
  } else if (pathname === '/design_tokens.css') {
    targetFile = 'design_tokens.css';
  } else if (pathname === '/render.js') {
    targetFile = 'render.js';
  } else {
    const resolvedPath = path.join(BASE_DIR, pathname);
    if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isFile()) {
      targetFile = pathname;
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>404 Not Found</h1><p>Ercüment Erden Sovereign Portal</p>');
    }
  }

  const filePath = path.join(BASE_DIR, targetFile);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('500 Internal Server Error: ' + err.message);
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    });
    res.end(fileData);
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log('🏛️ Ercüment Erden Portal running at http://localhost:' + PORT + '/');
    console.log('   Health endpoint: http://localhost:' + PORT + '/api/health');
    console.log('   Data endpoint:   http://localhost:' + PORT + '/content.json');
  });
}

module.exports = { server, PORT };
`;

fs.writeFileSync(path.join(baseDir, 'app.js'), appContent, 'utf8');
console.log('2. app.js written successfully.');

// 3. GENERATE RENDER.JS
const renderContent = `/**
 * render.js
 * Ercüment Erden Portal Server-Side Render & Data Helper
 */
'use strict';

const fs = require('fs');
const path = require('path');

function getContent() {
  const filePath = path.join(__dirname, 'content.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function render() {
  const data = getContent();
  return {
    portalName: data.meta.portalName,
    founder: data.founder.name,
    title: data.founder.title,
    syndicateCount: data.syndicate.members.length,
    projectsCount: data.projects.length
  };
}

module.exports = { render, getContent };
`;

fs.writeFileSync(path.join(baseDir, 'render.js'), renderContent, 'utf8');
console.log('3. render.js written successfully.');

// 4. GENERATE TEST_PORTAL.JS
const testContent = `/**
 * test_portal.js
 * Verification Suite for Ercüment Erden Sovereign Portal
 */
'use strict';

const http = require('http');
const { server } = require('./app.js');

const TEST_PORT = 3388;
let passed = 0;
let total = 0;

function assert(condition, msg) {
  total++;
  if (!condition) {
    console.error('❌ FAIL: ' + msg);
    process.exit(1);
  }
  console.log('✅ PASS: ' + msg);
  passed++;
}

function httpGet(path) {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:' + TEST_PORT + path, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('╔════════════════════════════════════════════════════════════════════╗');
  console.log('║   ERCUMENTERDEN.COM SOVEREIGN PORTAL VERIFICATION SUITE            ║');
  console.log('╚════════════════════════════════════════════════════════════════════╝\\n');

  await new Promise(resolve => server.listen(TEST_PORT, resolve));
  console.log('Test server active on port ' + TEST_PORT + '\\n');

  try {
    // 1. GET /
    const home = await httpGet('/');
    assert(home.statusCode === 200, 'GET / returns 200 OK');
    assert(home.headers['content-type'].includes('text/html'), 'GET / has Content-Type text/html');
    assert(home.body.includes('Ercüment Erden'), 'Homepage contains Founder name Ercüment Erden');
    assert(home.body.includes('Ahmet Rıfat Albuz'), 'Homepage contains Syndicate member Ahmet Rıfat Albuz');
    assert(home.body.includes('Musa Aygül'), 'Homepage contains Syndicate member Prof. Dr. Musa Aygül');
    assert(home.body.includes('ALPAR AI'), 'Homepage contains ALPAR AI showcase');
    assert(home.body.includes('DECASHUB'), 'Homepage contains DECASHUB showcase');
    assert(home.body.includes('LIONEXIA'), 'Homepage contains LIONEXIA showcase');
    assert(home.body.includes('ERCUOS'), 'Homepage contains ERCUOS showcase');

    // 2. GET /design_tokens.css
    const css = await httpGet('/design_tokens.css');
    assert(css.statusCode === 200, 'GET /design_tokens.css returns 200 OK');
    assert(css.headers['content-type'].includes('text/css'), 'GET /design_tokens.css has Content-Type text/css');
    assert(css.body.includes('--bg-void'), 'CSS contains obsidian dark tokens');

    // 3. GET /content.json
    const cRes = await httpGet('/content.json');
    assert(cRes.statusCode === 200, 'GET /content.json returns 200 OK');
    assert(cRes.headers['content-type'].includes('application/json'), 'Content-Type application/json');
    const json = JSON.parse(cRes.body);
    assert(json.founder.name === 'Ercüment Erden', 'content.json founder matches');
    assert(json.syndicate.members.length === 2, 'content.json syndicate has 2 members');
    assert(json.projects.length === 4, 'content.json contains 4 projects');

    // 4. REST API: GET /api/health
    const health = await httpGet('/api/health');
    assert(health.statusCode === 200, 'GET /api/health returns 200 OK');
    const healthJson = JSON.parse(health.body);
    assert(healthJson.status === 'ok', 'Health status is ok');

    // 5. REST API: GET /api/founder
    const founderApi = await httpGet('/api/founder');
    assert(founderApi.statusCode === 200, 'GET /api/founder returns 200 OK');
    const founderJson = JSON.parse(founderApi.body);
    assert(founderJson.competencies.length === 4, 'Founder has 4 core competencies');

    // 6. REST API: GET /api/syndicate
    const syndicateApi = await httpGet('/api/syndicate');
    assert(syndicateApi.statusCode === 200, 'GET /api/syndicate returns 200 OK');
    const syndicateJson = JSON.parse(syndicateApi.body);
    assert(syndicateJson.members.some(m => m.name.includes('Albuz')), 'Syndicate API contains Albuz');
    assert(syndicateJson.members.some(m => m.name.includes('Aygül')), 'Syndicate API contains Aygül');

    // 7. REST API: GET /api/projects
    const projectsApi = await httpGet('/api/projects');
    assert(projectsApi.statusCode === 200, 'GET /api/projects returns 200 OK');
    const projectsJson = JSON.parse(projectsApi.body);
    assert(projectsJson.length === 4, 'Projects API returns 4 flagship projects');

    // 8. 404 Route
    const notFound = await httpGet('/non-existent-route-check');
    assert(notFound.statusCode === 404, 'Unknown route returns 404 Not Found');

    console.log('\\n════════════════════════════════════════════════════════════════════');
    console.log('🏆 ALL TESTS PASSED: ' + passed + '/' + total + ' (100% GREEN)');
    console.log('════════════════════════════════════════════════════════════════════\\n');
  } finally {
    server.close();
  }
}

runTests().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
`;

fs.writeFileSync(path.join(baseDir, 'test_portal.js'), testContent, 'utf8');
console.log('4. test_portal.js written successfully.');

console.log('\\n=== PİRİ REİS: TÜM DOSYALAR BAŞARIYLA TAMAMLANDI ===');
