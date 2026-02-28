"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const faqs = [
  {
    q: "Gülüş tasarımı ne kadar sürer?",
    a: "Gülüş tasarımı süresi yapılacak işlemlere göre değişir. Sadece kaplama uygulanacaksa genellikle 5–7 gün içerisinde tamamlanabilir. İmplant gibi ek cerrahi işlemler varsa süreç uzayabilir.",
  },
  {
    q: "Gülüş tasarımı kalıcı mıdır?",
    a: "Uygulanan materyale göre değişmekle birlikte, düzenli bakım ve kontrollerle uzun yıllar estetik ve fonksiyonel olarak kullanılabilir.",
  },
  {
    q: "Zirkonyum mu Emax mı daha iyi?",
    a: "Emax kaplamalar ön diş estetiğinde daha doğal ve ışık geçirgendir. Zirkonyum ise dayanıklılık gerektiren bölgelerde avantaj sağlar. Hangi materyalin uygun olduğu kişiye göre belirlenir.",
  },
  {
    q: "Porselen kaplama dişlere zarar verir mi?",
    a: "Uygulama kontrollü ve ölçülü şekilde yapılır. Amaç dişi koruyarak estetik iyileştirme sağlamaktır. Uzman planlama ile güvenli bir işlemdir.",
  },
  {
    q: "İmplant tedavisi ağrılı mıdır?",
    a: "İmplant işlemi lokal anestezi altında yapılır ve işlem sırasında ağrı hissedilmez. Sonrasında hafif hassasiyet olabilir ancak genellikle kontrol altındadır.",
  },
  {
    q: "İmplant ömrü ne kadardır?",
    a: "Doğru planlama ve düzenli bakım ile implantlar uzun yıllar sorunsuz kullanılabilir.",
  },
  {
    q: "Diş beyazlatma dişe zarar verir mi?",
    a: "Profesyonel klinik ortamda uygulanan beyazlatma işlemleri diş minesine zarar vermez. Geçici hassasiyet görülebilir.",
  },
  {
    q: "Hollywood Smile ile gülüş tasarımı aynı mı?",
    a: "Hollywood Smile daha beyaz ve dikkat çekici estetik dönüşümü ifade eder. Gülüş tasarımı ise yüz oranlarına göre planlanan daha kişisel bir estetik çalışmadır.",
  },
  {
    q: "Kaplama yapılan diş çürür mü?",
    a: "Kaplama altındaki diş, iyi ağız bakımı yapılmazsa risk altında olabilir. Düzenli kontroller ve hijyen çok önemlidir.",
  },
  {
    q: "Gülüş tasarımı herkese yapılabilir mi?",
    a: "Genel ağız sağlığı uygun olan çoğu kişiye uygulanabilir. Öncelikle varsa diş eti problemleri veya eksik dişler tedavi edilir, ardından estetik planlama yapılır.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="sss" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Sık Sorulan Sorular
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Gülüş Tasarımı ve Estetik Tedaviler Hakkında Merak Edilenler
          </h2>
          <p className="text-lg text-muted-foreground">
            Estetik diş hekimliği uygulamaları, implant ve kaplama tedavileri hakkında en sık sorulan
            soruları sizin için yanıtladık.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* FAQ Accordion */}
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
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="font-serif text-sm font-bold text-foreground sm:text-base">
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
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:py-5 sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual side panel */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              {/* Image */}
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/faq-smile-design.jpg"
                  alt="Gülüş tasarımı uzmanı"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              {/* CTA card */}
              <div className="rounded-2xl bg-primary p-6 text-center">
                <h3 className="mb-2 font-serif text-lg font-extrabold text-primary-foreground">
                  Başka Sorularınız Mı Var?
                </h3>
                <p className="mb-4 text-sm text-primary-foreground/80">
                  Gülüş tasarımı ekibimizle hemen iletişime geçin.
                </p>
                <a
                  href="https://wa.me/905417265212?text=Merhaba%2C%0AMaslak%20klini%C4%9Finizde%20g%C3%BCl%C3%BC%C5%9F%20tasar%C4%B1m%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AUygun%20saatler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%20REF%3A001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp ile Sorun
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA after FAQ */}
        <div className="mt-10 rounded-2xl bg-primary p-8 text-center lg:hidden">
          <h3 className="mb-3 font-serif text-2xl font-extrabold text-primary-foreground">
            Aklınıza Takılan Başka Sorular Mı Var?
          </h3>
          <p className="mb-6 text-primary-foreground/80">
            Gülüş tasarımı ekibimizle hemen iletişime geçin.
          </p>
          <a
            href="https://wa.me/905417265212?text=Merhaba%2C%0AMaslak%20klini%C4%9Finizde%20g%C3%BCl%C3%BC%C5%9F%20tasar%C4%B1m%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AUygun%20saatler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%20REF%3A001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-8 py-4 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp ile Sorun
          </a>
        </div>
      </div>
    </section>
  )
}
