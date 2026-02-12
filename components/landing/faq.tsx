"use client"

import React, { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"

const faqs = [
  {
    q: "Dijital anestezi nedir? Cocuklar icin avantajli mi?",
    a: "Dijital anestezi, ilacin kontrollu ve yavas sekilde uygulanmasini saglayan modern bir uyusturma yontemidir. Bu sayede agri ve basinc hissi minimuma iner, islem daha konforlu gerceklesir. Ozellikle cocuk hastalarda igne korkusunu azaltarak pedodonti tedavilerinin daha rahat tamamlanmasina yardimci olur.",
  },
  {
    q: "Cocuklar ilk dis muayenesine ne zaman gitmeli?",
    a: "Ilk disler ciktiktan sonra, genellikle 1 yas civarinda ilk dis hekimi muayenesi onerilir. Erken yapilan pedodonti kontrolleri, curuk olusumunu onlemeye ve saglikli dis gelisimini takip etmeye yardimci olur.",
  },
  {
    q: "Pedodonti (cocuk dis hekimligi) nedir, hangi tedavileri kapsar?",
    a: "Pedodonti; bebeklikten ergenlik donemine kadar cocuklarin agiz ve dis sagligiyla ilgilenen uzmanlik alanidir. Koruyucu uygulamalar, dolgu, kanal tedavisi, dis temizligi, fissur ortucu ve yer tutucu gibi bircok tedaviyi kapsar.",
  },
  {
    q: "Cocuklarda dis curugu nasil onlenir?",
    a: "Duzenli dis fircalama, saglikli beslenme aliskanliklari ve rutin dis hekimi kontrolleri curuk olusumunu buyuk olcude engeller. Pedodonti uzmani tarafindan uygulanan koruyucu tedaviler de disleri ekstra koruma saglar.",
  },
  {
    q: "Sut disleri neden onemlidir? Nasil korunmalidir?",
    a: 'Sut disleri, cocugun beslenmesi, konusma gelisimi ve kalici dislerin dogru konumlanmasi icin cok onemlidir. Bu nedenle "nasil olsa dusecek" dusuncesi yerine duzenli bakim ve tedavi ihmal edilmemelidir.',
  },
  {
    q: "Cocugum dis hekiminden korkuyor, ne yapmaliyim?",
    a: "Pedodonti kliniklerinde cocuklara ozel iletisim teknikleri ve konforlu ortamlar kullanilir. Trakyadent'te cocuk psikolojisine uygun yaklasimla, korku ve kaygiyi en aza indiren bir tedavi sureci planlanir.",
  },
  {
    q: "Cocuklarda dolgu veya kanal tedavisi yapilir mi?",
    a: "Evet. Sut dislerinde olusan curukler ilerlediginde dolgu veya kanal tedavisi gerekebilir. Bu islemler disin korunmasini saglar ve erken dis kaybini onler.",
  },
  {
    q: "Fissur ortucu (sealant) nedir, ne ise yarar?",
    a: "Fissur ortucu, azi dislerinin cigneme yuzeyine uygulanan koruyucu bir kaplamadir. Bakterilerin dise tutunmasini engelleyerek curuk riskini azaltir ve ozellikle cocuklarda sik tercih edilir.",
  },
  {
    q: "Cocuk dis tedavileri agrili midir?",
    a: "Modern teknikler ve uygun anestezi yontemleri sayesinde pedodonti tedavileri genellikle agrisiz ve konforlu sekilde gerceklestirilir. Amac cocugun rahat bir deneyim yasamasidir.",
  },
  {
    q: "Tedavi sirasinda anestezi veya sedasyon uygulanir mi?",
    a: "Gerekli durumlarda lokal anestezi uygulanabilir. Islem suresi ve cocugun durumuna gore hekim tarafindan en uygun ve guvenli yontem belirlenir.",
  },
  {
    q: "Pedodonti randevusu ne kadar surer, surec nasil ilerler?",
    a: "Ilk muayenede cocugun agiz ve dis yapisi degerlendirilir, ardindan ihtiyac duyulan tedaviler planlanir. Cogu kontrol ve basit islem kisa surede tamamlanir, detayli tedaviler icin ise randevu planlamasi yapilir.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="sss" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Sik Sorulan Sorular
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Pedodonti Hakkinda Merak Edilenler!
          </h2>
          <p className="text-lg text-muted-foreground">
            Cocuk dis sagligi ve tedavi surecleriyle ilgili en cok sorulan sorulari
            sizin icin yanitladik.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-border bg-card transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-serif text-base font-bold text-foreground">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="border-t border-border px-6 py-5 leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="mt-10 rounded-2xl bg-primary p-8 text-center lg:p-10">
          <h3 className="mb-3 font-serif text-2xl font-extrabold text-primary-foreground">
            Akliniza Takilan Baska Sorular Mi Var?
          </h3>
          <p className="mb-6 text-primary-foreground/80">
            Pedodonti ekibimizle hemen iletisime gecin.
          </p>
          <a
            href="https://wa.me/905001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-8 py-4 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp ile Sorun
          </a>
        </div>
      </div>
    </section>
  )
}
