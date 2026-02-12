import type { Metadata, Viewport } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import './globals.css'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Trakyadent Pedodonti | Cocuk Dis Sagligi Merkezi',
  description:
    'Trakyadent Pedodonti Merkezi - Cocuk dis sagliginda uzman cozum. 36 yillik deneyim, dijital anestezi, korkusuz tedavi deneyimi. Hemen randevu alin!',
}

export const viewport: Viewport = {
  themeColor: '#0c7abf',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
