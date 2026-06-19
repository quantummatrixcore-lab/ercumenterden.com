"use client";

interface Step {
  code: string;
  title: string;
  description: string;
  details: string[];
}

export default function Methodology() {
  const steps: Step[] = [
    {
      code: "01 / DATA_LAYER",
      title: "Decentralized MRV (dMRV)",
      description: "Fiziksel dünya emisyonlarını ve varlıklarını uydu radar verileri (SAR) ve IoT telemetrisi ile anlık olarak toplar, TLS Notary ve akıllı sözleşmeler aracılığıyla değiştirilemez olarak doğrular.",
      details: ["Uzay Gözlem Uyduları (SAR/Multispectral)", "IoT Donanım Cihaz Entegrasyonu", "Blokzincir Zaman Damgalaması"],
    },
    {
      code: "02 / SAFETY_LAYER",
      title: "Model Behavior Security (MBS)",
      description: "Yapay zeka modellerinin karar alma anomalilerini, veri sızıntılarını ve etik ihlallerini gerçek zamanlı token analizi ve guardrail filtreleriyle denetleyerek yasal uyum skoru üretir.",
      details: ["EU AI Act & KVKK Parametreleri", "Milisaniyelik Güvenlik Filtreleri", "Anomali ve Halüsinasyon Tespiti"],
    },
    {
      code: "03 / RISK_LAYER",
      title: "Agentic Stress Simulator",
      description: "Girişimlerin iş modellerini, pazar koşullarını, nakit akış tahminlerini ve kod tabanlarını 12 farklı otonom ajan üzerinden simüle ederek pazar uyumsuzluğu risklerini sayısallaştırır.",
      details: ["12 Farklı Otonom Rol Simülasyonu", "Monte Carlo & Oyun Teorisi Testleri", "Zayıf Nokta ve Risk Modellemesi"],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 border-b border-rule">
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-platin">
            Teknik Yaklaşım
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-platin leading-[1.1]">
            Doğrulama Metodolojisi
          </h2>
          <p className="font-sans text-sm text-text-dim leading-relaxed">
            Hantal, subjektif ve manipülasyona açık klasik denetimler yerine; matematiksel, gerçek zamanlı ve otonom doğrulama protokollerini kullanıyorum.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-surface-1 border border-rule p-8 rounded-lg flex flex-col justify-between space-y-8 relative hover:border-rule-strong transition-colors"
            >
              <div className="space-y-4">
                {/* Step Code */}
                <div className="font-mono-custom text-[9px] tracking-[0.25em] text-platin-dim">
                  {step.code}
                </div>
                
                {/* Step Title */}
                <h3 className="font-display text-2xl text-platin">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-xs text-text-dim leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Technical Details List */}
              <div className="border-t border-rule/50 pt-4 space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 font-mono-custom text-[9px] tracking-wider text-text-faint uppercase">
                    <span className="text-platin">▪</span> {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
