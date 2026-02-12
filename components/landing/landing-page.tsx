"use client"

import { TopBar, Navbar } from "./top-bar"
import { HeroSlider } from "./hero-slider"
import { ContactForm } from "./contact-form"
import { Treatments } from "./treatments"
import { Clinics } from "./clinics"
import { WhyTrakyadent } from "./why-trakyadent"
import { DoctorTeam } from "./doctor-team"
import { FAQ } from "./faq"
import { CTABanner } from "./cta-banner"
import { Footer } from "./footer"
import { StickyButtons } from "./sticky-buttons"
import { PopupBanner } from "./popup-banner"

export function LandingPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <ContactForm />
        <Treatments />
        <Clinics />
        <WhyTrakyadent />
        <DoctorTeam />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyButtons />
      <PopupBanner />
    </>
  )
}
