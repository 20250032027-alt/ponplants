import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Interactive semi-hydro tools: reservoir depth calculator, root rot diagnostic checker, and fertilizer dosing reference chart.',
  openGraph: { title: 'Semi-Hydro Tools | PonPlants', description: 'Reservoir calculator, root rot checker, and fertilizer chart for LECA and Pon growers.' },
}

const tools = [
  {
    href: '/tools/reservoir',
    title: 'Reservoir Calculator',
    desc: 'Input your plant type, pot size, and environment. Get the exact reservoir depth and water line to maintain. The single most asked question in the community, now answered in under a minute.',
    tag: 'Most useful',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 6h18M3 10h18M3 14h18M5 18h14M7 22h10"/>
      </svg>
    ),
  },
  {
    href: '/tools/root-rot-checker',
    title: 'Root Rot Checker',
    desc: 'Answer five questions about your plant. The checker works through the most reliable diagnostic indicators in order and gives you a diagnosis with specific next steps.',
    tag: 'Interactive',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
  },
  {
    href: '/tools/fertilizer-chart',
    title: 'Fertilizer Reference Chart',
    desc: 'Quick-reference dosing table organized by plant type. Based on Dyna-Gro Foliage Pro, the fertilizer the community keeps coming back to. Includes flush schedule.',
    tag: 'Reference',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
  },
]

export default function ToolsIndex() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">Interactive tools</span>
        <h1 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Three tools, each on its own page
        </h1>
        <p className="prose">
          Each tool is separate so you can bookmark the one you use most. No scrolling past the others to get to it.
        </p>
      </div>

      <div style={{ display: 'grid', gap: 20 }}>
        {tools.map((t, i) => (
          <Link key={i} href={t.href} style={{ textDecoration: 'none', display: 'block' }}>
            <div className="card tool-card" style={{
              display: 'grid', gridTemplateColumns: '52px 1fr auto',
              gap: 20, alignItems: 'center', cursor: 'pointer',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)', flexShrink: 0,
              }}>{t.icon}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-1)', margin: 0 }}>{t.title}</h2>
                  <span className="badge badge-green">{t.tag}</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
