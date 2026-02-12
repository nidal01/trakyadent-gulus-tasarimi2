"use client"

import { TopBar, Navbar } from "./top-bar"
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
import { PopupBanner } from "./popup-banner"

export function LandingPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <HeroSlider />
        <ContactForm />
        <Treatments />
        <InlineCTA
          title="Cocugunuzun Disleri Hakkinda Bilgi Alin!"
          subtitle="Uzman pedodonti ekibimiz sizi bilgilendirmek icin hazir."
          image="/images/cta-child-teeth.jpg"
          imageAlt="Mutlu cocuk gulmesi"
        />
        <Clinics />
        <WhyTrakyadent />
        <InlineCTA
          title="Ucretsiz Kontrol Randevusu!"
          subtitle="36 yillik deneyimimizle cocugunuzun dis sagligini kontrol edelim."
          image="/images/clinic-interior.jpg"
          imageAlt="Trakyadent klinik ic mekan"
          reversed
        />
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
