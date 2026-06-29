"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  const pillars = [
    {
      code: "PILLAR_01",
      title: "MATEMATİKSEL GÜVEN",
      desc: "Geleneksel dünyadaki sözleşmeler ve insan denetimleri hantaldır. Otonom ekonomide güven, milisaniyeler düzeyinde üretilen kriptografik kanıtlar ve telemetrik verilerle matematiksel olarak doğrulanmalıdır.",
    },
    {
      code: "PILLAR_02",
      title: "UÇTAN UCA OTONOMİ",
      desc: "İnsan faktörünü karar alma süreçlerinden çıkartıp, otonom yapay zeka filolarının ve akıllı IoT cihazlarının güvenli, izlenebilir ve CBAM / AI Act regülasyonlarına uyumlu çalışmasını sağlamak.",
    },
    {
      code: "PILLAR_03",
      title: "ETİK DEĞER ÜRETİMİ",
      desc: "Geliştirilen her algoritma, kurulan her donanım altyapısı ve oluşturulan her finansal model tek bir nihai soruya yanıt vermelidir: 'Bu dünyayı daha iyi bir yer yapıyor mu?'",
    },
  ];

  return (
    <section id="manifesto" className="mx-auto max-w-7xl px-6 py-24 border-b border-rule relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        {/* Left Column: Manifesto Quote & Text */}
        <div className="lg:col-span-6 space-y-6">
          <div className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-platin">
            MİSYON & FELSEFE
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-platin leading-[1.1]">
            Güven, otonom sistemlerin yegane para birimidir.
          </h2>
          <div className="space-y-6 font-sans text-sm text-text-dim leading-relaxed">
            <p>
              Yapay zeka ajanlarının finansal transferler yaptığı, karbon sınır vergilerinin gümrükleri kilitlediği ve mikro-mobilite kasklarının sterilizasyon kontrolünü üstlendiği bir dünyada; eski denetim mekanizmaları yetersiz kalır.
            </p>
            <p>
              Biz, sistemlerin beyanlarına değil, doğrudan manipüle edilemez verilerine dayanarak çalışıyoruz. Amacımız, otonom sistemlerin küresel regülasyonlarla uyumunu sağlayan, anlık olarak sorgulanabilir doğrulama omurgaları inşa etmektir.
            </p>
            <p className="font-display text-[18px] italic text-platin-dim mt-4">
              &ldquo;Ölçülemeyen şeye güvenilmez.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Column: Values Framework */}
        <div className="lg:col-span-6 space-y-8">
          <div className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-platin">
            DOĞRULAMA PRENSİPLERİ
          </div>

          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="elite-card border-l-[3px] border-l-platin/30 hover:border-l-platin transition-all duration-300"
              >
                <div className="font-mono-custom text-[8px] tracking-[0.25em] text-text-faint uppercase">
                  {pillar.code}
                </div>
                <h4 className="font-mono-custom text-xs tracking-[0.15em] uppercase text-platin mt-1 mb-2">
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs leading-relaxed text-text-dim">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
