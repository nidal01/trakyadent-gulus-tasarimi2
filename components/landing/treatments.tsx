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
    title: "Koruyucu Dis Tedavileri",
    shortDesc: "Fissur ortucu ve flor uygulamalari ile cocugunuzun dislerini curuge karsi koruyoruz.",
    longDesc:
      "Koruyucu dis hekimligi, cocugunuzun dislerini curuk olusmadan koruyan en etkili yontemdir. Trakyadent Pedodonti Merkezi olarak, cocuklara ozel koruyucu tedaviler ile saglikli guluslerin temelini atiyoruz.",
    benefits: [
      "Fissur ortucu uygulamasi ile curuk riskini minimuma indirir",
      "Profesyonel flor uygulamasi ile dis minesini guclendirir",
      "Duzenli kontroller ile erken teshis saglar",
      "Agrisiz ve hizli bir islem surecidir",
    ],
  },
  {
    icon: Sparkles,
    label: "Dolgu",
    title: "Cocuk Dolgu Tedavisi",
    shortDesc: "Cocuklara ozel estetik dolgu uygulamalari ile saglikli ve guzel gulusler.",
    longDesc:
      "Cocuklarda olusan dis curuklerinin zamaninda tedavi edilmesi, disin yapisinin korunmasi ve saglikli bir agiz ortaminin surdurul-mesi acisindan buyuk onem tasir. Modern dolgu malzemeleri ile estetik ve dayanikli cozumler sunuyoruz.",
    benefits: [
      "Dis renginde estetik dolgu malzemeleri kullanilir",
      "Cocugun rahat etmesi icin konforlu tedavi ortami",
      "Uzun omurlu ve dayanikli dolgu cozumleri",
      "Tedavi sonrasi dis bakimi egitimi verilir",
    ],
  },
  {
    icon: Heart,
    label: "Kanal",
    title: "Sut Disi Kanal Tedavisi",
    shortDesc: "Sut dislerinde olusan ileri curuklerin tedavisi ile disin korunmasini sagliyoruz.",
    longDesc:
      "Sut dislerinde ilerlesmis curukler nedeniyle sinir dokusuna kadar ulasan enfeksiyonlar, uygun kanal tedavisi ile kontrol altina alinir. Bu tedavi, disin erken kaybini onleyerek kalici dislerin dogru konumlanmasini destekler.",
    benefits: [
      "Disin erken kaybini onler",
      "Kalici dislerin dogru konumlanmasini destekler",
      "Cocugun cigneme ve konusma fonksiyonunu korur",
      "Dijital anestezi ile agrisiz tedavi deneyimi",
    ],
  },
  {
    icon: Syringe,
    label: "Dijital Anestezi",
    title: "Dijital Anestezi",
    shortDesc: "Agrisiz ve korkusuz tedavi icin modern dijital anestezi teknolojisi.",
    longDesc:
      "Dijital anestezi, ilacin kontrollu ve yavas sekilde uygulanmasini saglayan modern bir uyusturma yontemidir. Bu sayede agri ve basinc hissi minimuma iner, islem daha konforlu gerceklesir.",
    benefits: [
      "Kontrollu ve yavas ilac uygulamasi",
      "Agri ve basinc hissi minimuma iner",
      "Igne korkusunu azaltir",
      "Cocuklar icin cok daha konforlu bir deneyim",
    ],
  },
  {
    icon: SmilePlus,
    label: "Yer Tutucu",
    title: "Yer Tutucu Uygulamalari",
    shortDesc: "Erken kaybedilen sut disleri icin kalici dislerin dogru konumlanmasini saglayan yer tutucular.",
    longDesc:
      "Erken kaybedilen sut dislerinin biraktigi bosluga komsu dislerin kaymasini onlemek ve kalici dislerin dogru konumda surmesini saglamak amaciyla yer tutucu uygulanir.",
    benefits: [
      "Kalici dislerin dogru konumda surmesini saglar",
      "Ilerideki ortodontik sorunlari onler",
      "Basit ve agrisiz bir uygulamadir",
      "Cocugun cene gelisimini destekler",
    ],
  },
  {
    icon: Baby,
    label: "Bebek Bakimi",
    title: "Bebek Dis Bakimi",
    shortDesc: "0-3 yas arasi bebeklerin dis sagligi takibi ve ailelere bilinclen-dirme egitimi.",
    longDesc:
      "Bebeklerin ilk disleri cikmaya basladigi andan itibaren agiz bakimi onem kazanir. 0-3 yas arasi bebeklerin dis sagligi takibini yapiyor, ailelere rehberlik ediyoruz.",
    benefits: [
      "Ilk disten itibaren duzenli takip",
      "Ailelere bilinclendirme egitimi verilir",
      "Dogru beslenme aliskanliklari konusunda danismanlik",
      "Erken donemde curuk riskini azaltir",
    ],
  },
  {
    icon: Stethoscope,
    label: "Travma",
    title: "Dis Travmasi Tedavisi",
    shortDesc: "Cocuklarda sik gorulen dis kiriklari-nin acil ve etkili tedavisi.",
    longDesc:
      "Cocukluk doneminde dusme, carpma veya spor yaralanmalari sonucu dis travmalari sikca yasanabilir. Travma sonrasi hizli mudahale, disin kurtarilmasi icin kritik oneme sahiptir.",
    benefits: [
      "Acil mudahale ile disin kurtarilma sansi artar",
      "Kirik ve catlak dislerin estetik onarimi",
      "Cocuga ozel travma sonrasi takip protokolu",
      "Gerektiginde koruyucu aparey onerisi",
    ],
  },
  {
    icon: ClipboardCheck,
    label: "Kontrol",
    title: "Periyodik Dis Kontrolu",
    shortDesc: "Duzenli kontrollerle cocugunuzun agiz sagligini erken donemde koruma altina aliyoruz.",
    longDesc:
      "Duzenli dis kontrolleri, cocugunuzun agiz ve dis sagliginin korunmasinda en temel adimdir. 6 ayda bir yapilan kontroller sayesinde olasi sorunlar erken tespit edilir.",
    benefits: [
      "6 ayda bir duzenli kontrol onerisi",
      "Erken teshis ile buyuk sorunlari onler",
      "Cocuga dis bakimi aliskanligi kazandirir",
      "Tedavi ihtiyacini ve maliyetini azaltir",
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
            Cocugunuz Icin En Iyi Tedavi Secenekleri
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Uzman pedodonti ekibimiz, modern tekniklerle cocuklara ozel konforlu
            tedavi sureci sunar.
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
                    Tedavinin Avantajlari
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
                    Bu Tedavi Hakkinda Bilgi Al
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
