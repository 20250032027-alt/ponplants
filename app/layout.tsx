import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://ponplants.com'),
  title: { default: 'PonPlants', template: '%s | PonPlants' },
  description: 'Straight answers for LECA and Pon growers. Root rot diagnosis, reservoir sizing, fertilizer dosing, and soil transitions.',
  keywords: 'semi hydro, LECA, Pon, Lechuza Pon, root rot, reservoir, alocasia, semi-hydroponics',
  openGraph: {
    siteName: 'PonPlants',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PonPlants' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://ponplants.com/#website',
      url: 'https://ponplants.com',
      name: 'PonPlants',
      description: 'The definitive semi-hydro troubleshooting resource for LECA and Pon growers.',
    },
    {
      '@type': 'Organization',
      '@id': 'https://ponplants.com/#organization',
      name: 'PonPlants',
      url: 'https://ponplants.com',
      description: 'Semi-hydro troubleshooting guides, tools, and plant-specific care built from real grower community data.',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);else if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.setAttribute('data-theme','dark');})();`
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
