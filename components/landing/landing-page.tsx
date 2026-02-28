"use client"

import { StickyHeader } from "./top-bar"
import { HeroSlider } from "./hero-slider"
import { ContactForm } from "./contact-form"
import { Treatments } from "./treatments"
import { InlineCTA } from "./inline-cta"
import { Clinics } from "./clinics"
import { WhyTrakyadent } from "./why-trakyadent"
import { DoctorTeam } from "./doctor-team"
import { FAQ } from "./faq"
import { CTABanner } from "./cta-banner"
import { Footer } from "./footer"
import { StickyButtons } from "./sticky-buttons"


export function LandingPage() {
  return (
    <>
      <StickyHeader />
      <main className="pb-16 lg:pb-0">
        <HeroSlider />
        <ContactForm />
        <Treatments />
        <Clinics />
        <WhyTrakyadent />
        <InlineCTA
          title="Randevunuzu Oluşturun"
          subtitle="36 yıllık deneyim ve estetik uzmanlığımızla, Maslak kliniğimizde size özel gülüş planlamanızı birlikte oluşturalım."
          image="/images/lp-trakyadent.jpeg"
          imageAlt="Trakyadent Maslak Kliniği"
          reversed
        />
        <DoctorTeam />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyButtons />
    </>
  )
}
