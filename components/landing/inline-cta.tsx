"use client"

import React from "react"
import { MiniForm } from "./contact-form"

interface InlineCTAProps {
  title: string
  subtitle: string
}

export function InlineCTA({ title, subtitle }: InlineCTAProps) {
  return (
    <section className="bg-muted py-14 lg:py-20">
      <div className="mx-auto max-w-2xl px-4">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="bg-primary px-5 py-6 text-center sm:px-8 sm:py-8">
            <h2 className="mb-2 font-serif text-xl font-extrabold text-primary-foreground sm:text-2xl lg:text-3xl">
              {title}
            </h2>
            <p className="text-sm text-primary-foreground/80 sm:text-base">
              {subtitle}
            </p>
          </div>
          <div className="p-5 sm:p-8">
            <MiniForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  )
}
