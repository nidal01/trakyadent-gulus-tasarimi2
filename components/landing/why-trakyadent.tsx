"use client"

import React, { useEffect, useRef, useState } from "react"
import { Play, Users, Clock, ThumbsUp, Building2 } from "lucide-react"

const stats = [
  {
    icon: Users,
    title: "Uzman Pedodonti Ekibi",
    desc: "Alaninda deneyimli, cocuk psikolojisini bilen uzman hekimler.",
  },
  {
    icon: Clock,
    title: "36 Yillik Deneyim",
    desc: "36 yili askin sure boyunca binlerce aileye guvenle hizmet.",
  },
  {
    icon: ThumbsUp,
    title: "Yuksek Hasta Memnuniyeti",
    desc: "Hasta odakli yaklasimimizla yuksek memnuniyet orani.",
  },
  {
    icon: Building2,
    title: "4 Modern Klinik",
    desc: "Son teknoloji donanimli, cocuk dostu klinikler.",
  },
]

export function WhyTrakyadent() {
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

  return (
    <section
      id="neden-trakyadent"
      className="bg-background py-16 lg:py-24"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video */}
          <div
            className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-[hsl(var(--accent))]/20">
                <button
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-110"
                  aria-label="Tanitim videosunu oynat"
                >
                  <Play className="ml-1 h-8 w-8" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Neden Trakyadent?
            </span>
            <h2 className="mb-2 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
              Cocugunuzun Dis Sagligi Icin Dogru Adres!
            </h2>
            <p className="mb-6 text-lg font-medium text-primary">
              Deneyim, Uzmanlik ve Guven Bir Arada
            </p>

            <div className="mb-6">
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                Minik Gulusler Icin Buyuk Bir Deneyim
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Trakyadent Agiz ve Dis Sagligi, 36 yili askin deneyimiyle cocuk
                dis hekimligi (pedodonti) alaninda yuksek standartlarda saglik
                hizmeti sunmaktadir. Uzman pedodonti ekibimiz; koruyucu ve tedavi
                edici uygulamalari, cocuk psikolojisine uygun yaklasimla konforlu
                bir deneyime donusturur.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                Bugune Kadar Binlerce Saglikli Guluse Eslik Ettik
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                36 yildir, binlerce aileye hizmet veren klinigimiz, 4 modern
                subesi ve hasta memnuniyeti odakli yaklasimiyla cocuklarin dis
                sagligini guvenle korumaya devam etmektedir.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <stat.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h4 className="mb-2 font-serif text-lg font-bold text-foreground">
                {stat.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
