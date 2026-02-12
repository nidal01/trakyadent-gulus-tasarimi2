"use client"

import React, { useEffect, useState } from "react"
import { MessageCircle, Phone } from "lucide-react"

export function StickyButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop: Fixed right side buttons */}
      <div
        className={`fixed bottom-8 right-6 z-50 hidden flex-col gap-3 transition-all duration-500 lg:flex ${
          show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="https://wa.me/905001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-xl transition-transform hover:scale-110"
          aria-label="WhatsApp ile iletisime gec"
        >
          <span className="absolute inset-0 rounded-full bg-[hsl(var(--accent))] animate-pulse-ring" />
          <MessageCircle className="relative h-6 w-6" />
        </a>
        <a
          href="tel:4442222"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-110"
          aria-label="Hemen ara"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile: Fixed bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-2xl transition-all duration-500 lg:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center">
          <a
            href="https://wa.me/905001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 bg-[hsl(var(--accent))] py-4 text-sm font-bold text-[hsl(var(--accent-foreground))]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
          <div className="flex items-center justify-center px-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">T</span>
            </div>
          </div>
          <a
            href="tel:4442222"
            className="flex flex-1 items-center justify-center gap-2 bg-primary py-4 text-sm font-bold text-primary-foreground"
          >
            <Phone className="h-5 w-5" />
            Hemen Ara
          </a>
        </div>
      </div>
    </>
  )
}
