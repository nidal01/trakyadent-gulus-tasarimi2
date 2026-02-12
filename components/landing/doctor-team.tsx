"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const doctors = [
  { name: "Dt. Subaykan PANDAR", title: "Dis Hekimi - Kurucu YK Uyesi", image: "/images/doctor-1.jpg" },
  { name: "Dt. Emre PANDAR", title: "Cerkezkoy Klinik Bashekimi - YK Baskani", image: "/images/doctor-2.jpg" },
  { name: "Dt. Demet PANDAR", title: "Dis Hekimi - YK Uyesi", image: "/images/doctor-3.jpg" },
  { name: "Dt. Hikmet AKGUL", title: "Luleburgaz Klinik Bashekimi", image: "/images/doctor-4.jpg" },
  { name: "Dr. Dt. Ezgi AKCE", title: "Maslak Klinik Bashekimi - Periodontoloji", image: "/images/doctor-1.jpg" },
  { name: "Dt. Buse KASIKCI", title: "Corlu Klinik Bashekimi", image: "/images/doctor-3.jpg" },
  { name: "Dr. Dt. Fuad NAJAFI", title: "Agiz, Dis ve Cene Cerrahisi", image: "/images/doctor-2.jpg" },
  { name: "Dr. Dt. Burak AKCE", title: "Ortodonti", image: "/images/doctor-4.jpg" },
  { name: "Uzm. Dt. Bahar AKSAN YENILMEZ", title: "Pedodonti Uzmani", image: "/images/doctor-3.jpg" },
  { name: "Uzm. Dt. Aysegul ATILLA", title: "Protez Uzmani", image: "/images/doctor-1.jpg" },
  { name: "Uzm. Dt. Ufuk KARACA", title: "Periodontoloji Uzmani", image: "/images/doctor-2.jpg" },
  { name: "Uzm. Dt. Gamze KILIC", title: "Pedodonti Uzmani", image: "/images/doctor-3.jpg" },
  { name: "Uzm. Dt. Mert GOKSU", title: "Endodonti Uzmani", image: "/images/doctor-4.jpg" },
  { name: "Uzm. Dr. Yasin ESEN", title: "Anestezi ve Reanimasyon Uzmani", image: "/images/doctor-2.jpg" },
  { name: "Dr. Dt. Yasemin CANPOLAT", title: "Ortodonti", image: "/images/doctor-1.jpg" },
  { name: "Dr. Dt. Omer Faruk YENILMEZ", title: "Endodonti", image: "/images/doctor-4.jpg" },
  { name: "Dt. Nehir DENIZ", title: "Dis Hekimi", image: "/images/doctor-3.jpg" },
  { name: "Dt. Hilal SAYIN VAROL", title: "Dis Hekimi", image: "/images/doctor-1.jpg" },
  { name: "Dt. Huseyin TIRPAN", title: "Dis Hekimi", image: "/images/doctor-2.jpg" },
  { name: "Dt. Maruf OZTURK", title: "Dis Hekimi", image: "/images/doctor-4.jpg" },
  { name: "Dt. Pinar ERSAN", title: "Dis Hekimi", image: "/images/doctor-3.jpg" },
  { name: "Dt. Ulas Unal AKTAS", title: "Dis Hekimi", image: "/images/doctor-2.jpg" },
  { name: "Dt. Buse BILGIN", title: "Dis Hekimi", image: "/images/doctor-1.jpg" },
  { name: "Dt. Merve Gokkus MUMCU", title: "Dis Hekimi", image: "/images/doctor-3.jpg" },
  { name: "Dt. Mert Tufan BILGE", title: "Dis Hekimi", image: "/images/doctor-4.jpg" },
  { name: "Dt. Sura BAS", title: "Dis Hekimi", image: "/images/doctor-1.jpg" },
  { name: "Dt. Ozan TURKMEN", title: "Dis Hekimi", image: "/images/doctor-2.jpg" },
  { name: "Dt. Elif Betul UGRAC", title: "Dis Hekimi", image: "/images/doctor-3.jpg" },
  { name: "Dt. Fatih Serdar UGRAC", title: "Dis Hekimi", image: "/images/doctor-4.jpg" },
  { name: "Dt. Seymanur BILGIC", title: "Dis Hekimi", image: "/images/doctor-1.jpg" },
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
            30 Uzman Hekim Kadromuz
          </h2>
          <p className="text-base text-muted-foreground lg:text-lg">
            Minik Gulusler Icin Buyuk Uzmanlik! Tum hekimlerimiz ile tanisin.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 top-1/3 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:bg-primary hover:text-primary-foreground lg:-left-4 lg:flex"
              aria-label="Onceki hekimler"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 top-1/3 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:bg-primary hover:text-primary-foreground lg:-right-4 lg:flex"
              aria-label="Sonraki hekimler"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-5 lg:gap-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {doctors.map((doctor, index) => (
              <div key={index} className="w-48 flex-shrink-0 sm:w-52 lg:w-56">
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,12%)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="p-3 text-center sm:p-4">
                    <h3 className="mb-0.5 font-serif text-xs font-bold text-foreground sm:text-sm">
                      {doctor.name}
                    </h3>
                    <p className="mb-2.5 text-[11px] font-medium text-primary sm:mb-3 sm:text-xs">
                      {doctor.title}
                    </p>
                    <a
                      href="https://wa.me/905001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-[hsl(var(--accent))] px-3 py-2 text-xs font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      Randevu Al
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground lg:hidden">
            <ChevronLeft className="h-3.5 w-3.5" />
            <span>Kaydirarak tum hekimleri gorun</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Doctor videos section */}
        <div className="mt-16 lg:mt-20">
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
            <h2 className="mb-4 font-serif text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              Hekimlerimiz Anlatiyor!
            </h2>
            <p className="text-base text-muted-foreground lg:text-lg">
              Uzman hekimlerimizin bilgilendirici videolariyla tedavi surecleri
              hakkinda detayli bilgi alin.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              "Cocuklarda Dis Bakimi",
              "Dijital Anestezi Nedir?",
              "Sut Disleri Neden Onemli?",
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
