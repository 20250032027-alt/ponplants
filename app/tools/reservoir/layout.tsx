import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservoir Calculator',
  description: 'Calculate the right reservoir depth for your plant and pot size. Input plant type, pot dimensions, and humidity to get a recommended water level and refill frequency.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
