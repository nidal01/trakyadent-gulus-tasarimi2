"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  Shield,
  Sparkles,
  Heart,
  Syringe,
  SmilePlus,
  Baby,
  Stethoscope,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const treatments = [
  {
    icon: Shield,
    label: "Koruyucu",
    title: "Koruyucu Diş Tedavileri",
    shortDesc: "Fissür örtücü ve flor uygulamaları ile çocuğunuzun dişlerini çürüğe karşı koruyoruz.",
    longDesc:
      "Koruyucu diş hekimliği, çocuğunuzun dişlerini çürük oluşmadan koruyan en etkili yöntemdir. Trakyadent Pedodonti Merkezi olarak, çocuklara özel koruyucu tedaviler ile sağlıklı gülüşlerin temelini atıyoruz.",
    benefits: [
      "Fissür örtücü uygulaması ile çürük riskini minimuma indirir",
      "Profesyonel flor uygulaması ile diş minesini güçlendirir",
      "Düzenli kontroller ile erken teşhis sağlar",
      "Ağrısız ve hızlı bir işlem sürecidir",
    ],
  },
  {
    icon: Sparkles,
    label: "Dolgu",
    title: "Çocuk Dolgu Tedavisi",
    shortDesc: "Çocuklara özel estetik dolgu uygulamaları ile sağlıklı ve güzel gülüşler.",
    longDesc:
      "Çocuklarda oluşan diş çürüklerinin zamanında tedavi edilmesi, dişin yapısının korunması ve sağlıklı bir ağız ortamının sürdürülmesi açısından büyük önem taşır. Modern dolgu malzemeleri ile estetik ve dayanıklı çözümler sunuyoruz.",
    benefits: [
      "Diş renginde estetik dolgu malzemeleri kullanılır",
      "Çocuğun rahat etmesi için konforlu tedavi ortamı",
      "Uzun ömürlü ve dayanıklı dolgu çözümleri",
      "Tedavi sonrası diş bakımı eğitimi verilir",
    ],
  },
  {
    icon: Heart,
    label: "Kanal",
    title: "Süt Dişi Kanal Tedavisi",
    shortDesc: "Süt dişlerinde oluşan ileri çürüklerin tedavisi ile dişin korunmasını sağlıyoruz.",
    longDesc:
      "Süt dişlerinde ilerlemiş çürükler nedeniyle sinir dokusuna kadar ulaşan enfeksiyonlar, uygun kanal tedavisi ile kontrol altına alınır. Bu tedavi, dişin erken kaybını önleyerek kalıcı dişlerin doğru konumlanmasını destekler.",
    benefits: [
      "Dişin erken kaybını önler",
      "Kalıcı dişlerin doğru konumlanmasını destekler",
      "Çocuğun çiğneme ve konuşma fonksiyonunu korur",
      "Dijital anestezi ile ağrısız tedavi deneyimi",
    ],
  },
  {
    icon: Syringe,
    label: "Dijital Anestezi",
    title: "Dijital Anestezi",
    shortDesc: "Ağrısız ve korkusuz tedavi için modern dijital anestezi teknolojisi.",
    longDesc:
      "Dijital anestezi, ilacın kontrollü ve yavaş şekilde uygulanmasını sağlayan modern bir uyuşturma yöntemidir. Bu sayede ağrı ve basınç hissi minimuma iner, işlem daha konforlu gerçekleşir.",
    benefits: [
      "Kontrollü ve yavaş ilaç uygulaması",
      "Ağrı ve basınç hissi minimuma iner",
      "İğne korkusunu azaltır",
      "Çocuklar için çok daha konforlu bir deneyim",
    ],
  },
  {
    icon: SmilePlus,
    label: "Yer Tutucu",
    title: "Yer Tutucu Uygulamaları",
    shortDesc: "Erken kaybedilen süt dişleri için kalıcı dişlerin doğru konumlanmasını sağlayan yer tutucular.",
    longDesc:
      "Erken kaybedilen süt dişlerinin bıraktığı boşluğa komşu dişlerin kaymasını önlemek ve kalıcı dişlerin doğru konumda sürmesini sağlamak amacıyla yer tutucu uygulanır.",
    benefits: [
      "Kalıcı dişlerin doğru konumda sürmesini sağlar",
      "İlerideki ortodontik sorunları önler",
      "Basit ve ağrısız bir uygulamadır",
      "Çocuğun çene gelişimini destekler",
    ],
  },
  {
    icon: Baby,
    label: "Bebek Bakımı",
    title: "Bebek Diş Bakımı",
    shortDesc: "0-3 yaş arası bebeklerin diş sağlığı takibi ve ailelere bilinçlendirme eğitimi.",
    longDesc:
      "Bebeklerin ilk dişleri çıkmaya başladığı andan itibaren ağız bakımı önem kazanır. 0-3 yaş arası bebeklerin diş sağlığı takibini yapıyor, ailelere rehberlik ediyoruz.",
    benefits: [
      "İlk dişten itibaren düzenli takip",
      "Ailelere bilinçlendirme eğitimi verilir",
      "Doğru beslenme alışkanlıkları konusunda danışmanlık",
      "Erken dönemde çürük riskini azaltır",
    ],
  },
  {
    icon: Stethoscope,
    label: "Travma",
    title: "Diş Travması Tedavisi",
    shortDesc: "Çocuklarda sık görülen diş kırıklarının acil ve etkili tedavisi.",
    longDesc:
      "Çocukluk döneminde düşme, çarpma veya spor yaralanmaları sonucu diş travmaları sıkça yaşanabilir. Travma sonrası hızlı müdahale, dişin kurtarılması için kritik öneme sahiptir.",
    benefits: [
      "Acil müdahale ile dişin kurtarılma şansı artar",
      "Kırık ve çatlak dişlerin estetik onarımı",
      "Çocuğa özel travma sonrası takip protokolü",
      "Gerektiğinde koruyucu aparey önerisi",
    ],
  },
  {
    icon: ClipboardCheck,
    label: "Kontrol",
    title: "Periyodik Diş Kontrolü",
    shortDesc: "Düzenli kontrollerle çocuğunuzun ağız sağlığını erken dönemde koruma altına alıyoruz.",
    longDesc:
      "Düzenli diş kontrolleri, çocuğunuzun ağız ve diş sağlığının korunmasında en temel adımdır. 6 ayda bir yapılan kontroller sayesinde olası sorunlar erken tespit edilir.",
    benefits: [
      "6 ayda bir düzenli kontrol önerisi",
      "Erken teşhis ile büyük sorunları önler",
      "Çocuğa diş bakımı alışkanlığı kazandırır",
      "Tedavi ihtiyacını ve maliyetini azaltır",
    ],
  },
]

export function Treatments() {
  const [activeTab, setActiveTab] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const tabsScrollRef = useRef<HTMLDivElement>(null)

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

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (!tabsScrollRef.current) return
    const activeEl = tabsScrollRef.current.children[activeTab] as HTMLElement
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    }
  }, [activeTab])

  const activeTreatment = treatments[activeTab]

  return (
    <section id="tedaviler" className="bg-background py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-700 lg:mb-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Tedavilerimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Çocuğunuz İçin En İyi Tedavi Seçenekleri
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Uzman pedodonti ekibimiz, modern tekniklerle çocuklara özel konforlu
            tedavi süreci sunar.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Mobile: Horizontal scrollable pill tabs */}
          <div className="mb-5 lg:hidden">
            <div
              ref={tabsScrollRef}
              className="flex gap-2 overflow-x-auto pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {treatments.map((treatment, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all ${
                    activeTab === index
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border border-border bg-card text-foreground"
                  }`}
                >
                  <treatment.icon className="h-3.5 w-3.5" />
                  {treatment.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Side tabs + Content */}
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Tab buttons - Desktop sidebar */}
            <div className="hidden flex-col gap-1.5 lg:flex">
              {treatments.map((treatment, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                    activeTab === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "border border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  <treatment.icon
                    className={`h-5 w-5 flex-shrink-0 ${
                      activeTab === index ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                  <span className="text-sm font-semibold">{treatment.title}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="p-5 sm:p-6 lg:p-10">
                <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 sm:h-16 sm:w-16">
                    <activeTreatment.icon className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-extrabold text-foreground sm:text-2xl lg:text-3xl">
                      {activeTreatment.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-primary sm:mt-1 sm:text-sm">
                      Trakyadent Pedodonti Merkezi
                    </p>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base lg:text-lg">
                  {activeTreatment.longDesc}
                </p>

                <div className="mb-6 rounded-xl bg-muted/50 p-4 sm:mb-8 sm:p-6">
                  <h4 className="mb-3 font-serif text-base font-bold text-foreground sm:mb-4 sm:text-lg">
                    Tedavinin Avantajları
                  </h4>
                  <ul className="flex flex-col gap-2.5 sm:gap-3">
                    {activeTreatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--accent))] sm:h-5 sm:w-5" />
                        <span className="text-sm text-muted-foreground sm:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/905001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-5 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-md transition-all hover:scale-[1.02] hover:shadow-lg sm:px-6 sm:py-3.5"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Bu Tedavi Hakkında Bilgi Al
                  </a>
                  <a
                    href="tel:4442289"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-6 sm:py-3.5"
                  >
                    444 22 89 Hemen Ara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
