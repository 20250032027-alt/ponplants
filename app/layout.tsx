import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PonPlants The Semi-Hydro Troubleshooting Guide',
  description: 'Straight answers for LECA and Pon growers. Root rot diagnosis, reservoir sizing, fertilizer dosing, and soil-to-semi-hydro transitions no fluff.',
  keywords: 'semi hydro, LECA, Pon, Lechuza Pon, root rot, reservoir, alocasia, semi-hydroponics',
  openGraph: {
    title: 'PonPlants The Semi-Hydro Troubleshooting Guide',
    description: 'Straight answers for LECA and Pon growers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
