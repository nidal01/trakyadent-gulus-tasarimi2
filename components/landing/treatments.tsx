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
} from "lucide-react"

const treatments = [
  {
    icon: Shield,
    title: "Koruyucu Dis Tedavileri",
    desc: "Fissur ortucu ve flor uygulamalari ile cocugunuzun dislerini curuge karsi koruyoruz.",
  },
  {
    icon: Sparkles,
    title: "Cocuk Dolgu Tedavisi",
    desc: "Cocuklara ozel estetik dolgu uygulamalari ile saglikli ve guzel gulusler.",
  },
  {
    icon: Heart,
    title: "Sut Disi Kanal Tedavisi",
    desc: "Sut dislerinde olusan ileri curuklerin tedavisi ile disin korunmasini sagliyoruz.",
  },
  {
    icon: Syringe,
    title: "Dijital Anestezi",
    desc: "Agrisiz ve korkusuz tedavi icin modern dijital anestezi teknolojisi.",
  },
  {
    icon: SmilePlus,
    title: "Yer Tutucu Uygulamalari",
    desc: "Erken kaybedilen sut disleri icin kalici dislerin dogru konumlanmasini saglayan yer tutucular.",
  },
  {
    icon: Baby,
    title: "Bebek Dis Bakim",
    desc: "0-3 yas arasi bebeklerin dis sagligi takibi ve ailelere bilinclendirme egitimi.",
  },
  {
    icon: Stethoscope,
    title: "Dis Travmasi Tedavisi",
    desc: "Cocuklarda sik gorulen dis kiriklarinin acil ve etkili tedavisi.",
  },
  {
    icon: ClipboardCheck,
    title: "Periyodik Dis Kontrolu",
    desc: "Duzenli kontrollerle cocugunuzun agiz sagligini erken donemde koruma altina aliyoruz.",
  },
]

export function Treatments() {
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
    <section id="tedaviler" className="bg-background py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Tedavilerimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Cocugunuz Icin En Iyi Tedavi Secenekleri
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Uzman pedodonti ekibimiz, modern tekniklerle cocuklara ozel konforlu
            tedavi surecisunar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`group cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <treatment.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                {treatment.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {treatment.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
