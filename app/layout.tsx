import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'PonPlants', template: '%s | PonPlants' },
  description: 'Straight answers for LECA and Pon growers. Root rot diagnosis, reservoir sizing, fertilizer dosing, and soil transitions — no fluff.',
  keywords: 'semi hydro, LECA, Pon, Lechuza Pon, root rot, reservoir, alocasia, semi-hydroponics',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);else if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.setAttribute('data-theme','dark');})();`
        }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
