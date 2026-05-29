import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Root Rot Checker',
  description: 'Answer four questions about your plant and get a root rot diagnosis with specific next steps. Works for LECA, Pon, and all semi-hydro setups.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
