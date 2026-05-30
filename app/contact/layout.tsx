import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Questions, corrections, or content suggestions for PonPlants. We read every message.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
