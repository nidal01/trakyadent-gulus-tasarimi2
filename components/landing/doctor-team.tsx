"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const doctors = [
  {
    name: "Uzm. Dr. Dt. Umut Öztürk",
    title: "Ortodonti Uzmanı",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dt. Hüseyin Erdinç",
    title: "Kurucu Diş Hekimi",
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dr. Dt. Yasemin Zeynep Arslan",
    title: "Ağız, Diş ve Çene Cerrahisi Uzmanı",
    image: "/images/doctor-3.jpg",
  },
  {
    name: "Dr. Dt. Gülperi Kocaman",
    title: "Periodontoloji Uzmanı",
    image: "/images/doctor-4.jpg",
  },
  {
    name: "Dr. Dt. Merve Nur Sönmez",
    title: "Endodonti Uzmanı",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dt. Emre Erdinç",
    title: "İmplantoloji ve Protez Uzmanı",
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dr. Dt. Gizem Nur Zeybek",
    title: "Pedodonti Uzmanı",
    image: "/images/doctor-3.jpg",
  },
  {
    name: "Dr. Dt. Tuğçe Madenoğlu",
    title: "Pedodonti Uzmanı",
    image: "/images/doctor-4.jpg",
  },
  {
    name: "Dt. Cansu İnce",
    title: "Diş Hekimi",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dt. Meral Nur Erdinç",
    title: "Diş Hekimi",
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dt. Beyza Kayabaş",
    title: "Diş Hekimi",
    image: "/images/doctor-3.jpg",
  },
  {
    name: "Dt. Barış Yılmaz",
    title: "Diş Hekimi",
    image: "/images/doctor-4.jpg",
  },
]

export function DoctorTeam() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll)
    checkScroll()
    return () => el.removeEventListener("scroll", checkScroll)
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.7
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section id="ekibimiz" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Uzman Ekibimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Uzman Hekim Kadromuz
          </h2>
          <p className="text-base text-muted-foreground lg:text-lg">
            Minik Gülüşler İçin Büyük Uzmanlık!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-lg border border-border text-foreground transition-all hover:bg-primary hover:text-primary-foreground lg:flex"
              aria-label="Önceki hekimler"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-lg border border-border text-foreground transition-all hover:bg-primary hover:text-primary-foreground lg:flex"
              aria-label="Sonraki hekimler"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="scrollbar-none flex gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-5 lg:gap-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="w-56 flex-shrink-0 sm:w-60 lg:w-64"
              >
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,12%)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="mb-0.5 font-serif text-sm font-bold text-foreground sm:text-base">
                      {doctor.name}
                    </h3>
                    <p className="mb-3 text-xs font-medium text-primary sm:text-sm">
                      {doctor.title}
                    </p>
                    <a
                      href="https://wa.me/905001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-3 py-2 text-xs font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105 sm:text-sm"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor videos section */}
        <div className="mt-16 lg:mt-20">
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
            <h2 className="mb-4 font-serif text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              Hekimlerimiz Anlatıyor!
            </h2>
            <p className="text-base text-muted-foreground lg:text-lg">
              Uzman hekimlerimizin bilgilendirici videolarıyla tedavi süreçleri
              hakkında detaylı bilgi alın.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              "Çocuklarda Diş Bakımı",
              "Dijital Anestezi Nedir?",
              "Süt Dişleri Neden Önemli?",
            ].map((title, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-primary/5">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-[hsl(var(--accent))]/10">
                    <button
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16"
                      aria-label={`${title} videosunu oynat`}
                    >
                      <Play className="ml-1 h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm font-bold text-foreground sm:text-base">
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
