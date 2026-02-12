"use client"

import React from "react"
import { Phone, MessageCircle, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--topbar))] text-[hsl(var(--topbar-foreground))]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">T</span>
              </div>
              <div>
                <span className="font-serif text-lg font-extrabold">TRAKYADENT</span>
                <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--topbar-foreground))]/60">
                  Pedodonti Merkezi
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[hsl(var(--topbar-foreground))]/70">
              36 yili askin deneyimle cocuk dis sagliginda guvenilir cozum ortaginiz.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
                { icon: Twitter, label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--topbar-foreground))]/10 transition-colors hover:bg-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">Hizli Erisim</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Tedavilerimiz", href: "#tedaviler" },
                { label: "Kliniklerimiz", href: "#klinikler" },
                { label: "Neden Trakyadent", href: "#neden-trakyadent" },
                { label: "Ekibimiz", href: "#ekibimiz" },
                { label: "SSS", href: "#sss" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(var(--topbar-foreground))]/70 transition-colors hover:text-[hsl(var(--accent))]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">Iletisim</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:4442222" className="transition-colors hover:text-[hsl(var(--topbar-foreground))]">
                  444 2 222
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <MessageCircle className="h-4 w-4 text-[hsl(var(--accent))]" />
                <a
                  href="https://wa.me/905001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[hsl(var(--topbar-foreground))]"
                >
                  WhatsApp Destek
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Edirne, Kesan, Kirklareli, Luleburgaz</span>
              </li>
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">Calisma Saatleri</h4>
            <ul className="flex flex-col gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
              <li className="flex justify-between">
                <span>Pazartesi - Cuma</span>
                <span>09:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Cumartesi</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Pazar</span>
                <span>Kapali</span>
              </li>
            </ul>
            <a
              href="https://wa.me/905001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Hemen Randevu Al
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(var(--topbar-foreground))]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-4 text-center text-xs text-[hsl(var(--topbar-foreground))]/50 md:flex-row md:justify-between">
          <p>
            &copy; 2026 Trakyadent Agiz ve Dis Sagligi. Tum haklari saklidir.
          </p>
          <p className="max-w-lg font-medium text-[hsl(var(--topbar-foreground))]/60">
            Sayfa icerigi sadece bilgilendirme amaclidir. Tani ve tedavi icin
            mutlaka doktorunuza basvurunuz.
          </p>
        </div>
      </div>
    </footer>
  )
}
