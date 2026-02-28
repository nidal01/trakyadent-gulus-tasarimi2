"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  Sparkles,
  Star,
  Crown,
  Gem,
  Layers,
  Anchor,
  Zap,
  CheckCircle2,
  ChevronDown,
} from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const treatments = [
  {
    icon: Sparkles,
    label: "Dijital Gülüş Tasarımı",
    title: "Dijital Gülüş Tasarımı",
    shortDesc: "Yüz hatlarınıza özel, dijital ortamda planlanan kişiselleştirilmiş gülüş tasarımı.",
    longDesc:
      "Dijital gülüş tasarımı, tedaviye başlamadan önce sonucu görmenizi sağlayan modern bir planlama yöntemidir. Yüz simetrisi, diş oranları ve dudak yapısı gözetilerek hazırlanan simülasyonla beklentilerinize tam uygun bir plan oluşturulur.",
    benefits: [
      "Tedavi öncesi dijital simülasyon ile sonucu görün",
      "Yüz hatlarınıza ve oranlarınıza özel planlama",
      "Estetik ve fonksiyoneli bir arada sunar",
      "Daha öngörülebilir ve güvenilir tedavi süreci",
    ],
  },
  {
    icon: Star,
    label: "Hollywood Smile",
    title: "Hollywood Smile",
    shortDesc: "Beyaz, parlak ve dikkat çekici dişler için Hollywood Smile gülüş dönüşümü.",
    longDesc:
      "Hollywood Smile, dişlerin şekil, renk ve boyutunu ideal oranlarla yeniden tasarlayan kapsamlı bir estetik uygulamadır. Mükemmel beyazlık ve simetri arayan hastalar için tercih edilen prestijli bir dönüşüm paketidir.",
    benefits: [
      "Belirgin beyazlık ve kusursuz simetri",
      "Kaplamalar ile diş şekli ve boyu optimize edilir",
      "Tek seansta dramatik dönüşüm imkânı",
      "Uzun yıllar estetik ve fonksiyonel kullanım",
    ],
  },
  {
    icon: Crown,
    label: "Emax Kaplama",
    title: "Emax Kaplama",
    shortDesc: "Işık geçirgenliği sayesinde doğal diş görünümü sunan preslenmiş seramik kaplamalar.",
    longDesc:
      "Emax (lityum disilikat) kaplamalar, ön dişlerde en doğal ve estetik görünümü sağlayan seramik sistemdir. Gerçek diş minesiyle neredeyse özdeş ışık geçirgenliği ile doğallığı ve estetiği bir arada sunar.",
    benefits: [
      "Doğal diş minesiyle benzer ışık geçirgenliği",
      "İnce yapısı sayesinde minimal diş kesimi",
      "Uzun ömürlü ve renk değiştirmeye dayanıklı",
      "Ön dişlerde en estetik sonucu verir",
    ],
  },
  {
    icon: Gem,
    label: "Zirkonyum Kaplama",
    title: "Zirkonyum Kaplama",
    shortDesc: "Yüksek dayanıklılık ve estetik bir arada; zirkonyum kaplama ile güçlü gülüşler.",
    longDesc:
      "Zirkonyum kaplamalar, hem ön hem arka dişlerde güvenle kullanılabilen, biyouyumlu ve son derece dayanıklı bir seramik sistemdir. Metal altyapı içermediğinden diş etinde siyah çizgi oluşumunu önler.",
    benefits: [
      "Metal içermeyen biyouyumlu yapı",
      "Arka dişlerde de güvenle uygulanabilir",
      "Diş eti sağlığını korur",
      "Uzun ömürlü ve yüksek kırılma direnci",
    ],
  },
  {
    icon: Layers,
    label: "Porselen Kaplama",
    title: "Porselen Kaplama",
    shortDesc: "İnce porselen laminatlar ile dişleri kaplayan minimal invazif estetik çözüm.",
    longDesc:
      "Porselen laminat kaplamalar, dişin yalnızca ön yüzeyine ince bir porselen tabakası yapıştırılmasıyla gerçekleştirilen minimal invazif bir estetik uygulamadır. Renk, şekil ve boydaki kusurlar minimal diş kesimi ile giderilir.",
    benefits: [
      "Minimal diş kesimi ile estetik dönüşüm",
      "Renk, şekil ve boydaki kusurlar düzeltilir",
      "Diş rengine uygun doğal görünüm",
      "Dayanıklı ve uzun ömürlü estetik çözüm",
    ],
  },
  {
    icon: Anchor,
    label: "İmplant",
    title: "İmplant",
    shortDesc: "Eksik dişler için en kalıcı ve doğal görünümlü çözüm: titanyum implant.",
    longDesc:
      "Dental implant, eksik dişlerin yerine titanyum vidalar ile çeneye sabitlenen kalıcı bir tedavi yöntemidir. Doğal diş kökü gibi işlev gören implantlar, gülüş tasarımının vazgeçilmez bir parçasıdır.",
    benefits: [
      "Doğal diş kökü gibi işlev görür",
      "Komşu dişlere zarar vermez",
      "Kemik kaybını önler, çene yapısını korur",
      "Doğru bakım ile ömür boyu kullanılabilir",
    ],
  },
  {
    icon: Zap,
    label: "Diş Beyazlatma",
    title: "Diş Beyazlatma",
    shortDesc: "Profesyonel klinik beyazlatma ile daha parlak ve aydınlık bir gülüş.",
    longDesc:
      "Profesyonel diş beyazlatma, diş minesindeki renk pigmentlerini parçalayan özel ajanlarla uygulanan klinik bir işlemdir. Kliniğimizde uygulanan kontrollü yöntemler ile güvenli ve etkili sonuçlar elde edilir.",
    benefits: [
      "Klinikte uygulanan güvenli beyazlatma yöntemi",
      "Kısa sürede belirgin ton açılımı sağlar",
      "Diş minesine zarar vermez",
      "Geçici hassasiyet normaldir, uzun süreli etki sağlar",
    ],
  },
]

function TreatmentContent({ treatment }: { treatment: typeof treatments[0] }) {
  return (
    <div className="p-4 sm:p-5 lg:p-10">
      <div className="mb-4 sm:mb-6">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
          {treatment.longDesc}
        </p>
      </div>
      <div className="mb-5 rounded-xl bg-muted/50 p-3 sm:mb-8 sm:p-6">
        <h4 className="mb-2 font-serif text-sm font-bold text-foreground sm:mb-4 sm:text-lg">
          Tedavinin Avantajları
        </h4>
        <ul className="flex flex-col gap-2 sm:gap-3">
          {treatment.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--accent))] sm:h-5 sm:w-5" />
              <span className="text-xs text-muted-foreground sm:text-base">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
        <a
          href="https://wa.me/905417265212?text=Merhaba%2C%0AMaslak%20klini%C4%9Finizde%20g%C3%BCl%C3%BC%C5%9F%20tasar%C4%B1m%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AUygun%20saatler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%20REF%3A001"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-4 py-2.5 text-xs font-bold text-[hsl(var(--accent-foreground))] shadow-md transition-all hover:scale-[1.02] hover:shadow-lg sm:px-6 sm:py-3.5 sm:text-sm"
        >
          <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          Bu Tedavi Hakkında Bilgi Al
        </a>
        <a
          href="tel:02129126867"
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-6 sm:py-3.5 sm:text-sm"
        >
          0212 912 68 67 Hemen Ara
        </a>
      </div>
    </div>
  )
}

export function Treatments() {
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const activeTreatment = treatments[activeTab]

  return (
    <section id="tedaviler" className="bg-background py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-700 lg:mb-16 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Tedavilerimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Kişiye Özel Gülüş Tasarımı Tedavileri
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Uzman hekim kadromuz, yüz hatlarınıza ve beklentilerinize uygun kişiye özel gülüş
            tasarımı planlar.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Mobile: Accordion */}
          <div className="flex flex-col gap-2 lg:hidden">
            {treatments.map((treatment, index) => {
              const isOpen = mobileOpen === index
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : index)}
                    className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors ${isOpen
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground"
                      }`}
                  >
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${isOpen ? "bg-primary-foreground/20" : "bg-primary/10"
                        }`}
                    >
                      <treatment.icon
                        className={`h-5 w-5 ${isOpen ? "text-primary-foreground" : "text-primary"
                          }`}
                      />
                    </div>
                    <span className="flex-1 text-sm font-bold">{treatment.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        } ${isOpen ? "text-primary-foreground" : "text-muted-foreground"}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      {isOpen && <TreatmentContent treatment={treatment} />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop: Side tabs + Content */}
          <div className="hidden gap-8 lg:grid lg:grid-cols-[280px_1fr]">
            {/* Tab buttons - Desktop sidebar */}
            <div className="flex flex-col gap-1.5">
              {treatments.map((treatment, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${activeTab === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                    }`}
                >
                  <treatment.icon
                    className={`h-5 w-5 flex-shrink-0 ${activeTab === index ? "text-primary-foreground" : "text-primary"
                      }`}
                  />
                  <span className="text-sm font-semibold">{treatment.title}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="p-6 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <activeTreatment.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-extrabold text-foreground lg:text-3xl">
                      {activeTreatment.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      Trakyadent Gülüş Tasarımı
                    </p>
                  </div>
                </div>
                <TreatmentContent treatment={activeTreatment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
