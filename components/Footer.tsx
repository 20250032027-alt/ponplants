import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
      <div className="page-wrap" style={{ padding: '48px 24px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"><path d="M12 22V12"/><path d="M12 12C12 7 9 4 5 3"/><path d="M12 12c0-5 3-8 7-9"/><path d="M5 19c2-3 4-5 7-7"/></svg>
              </div>
              <span style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 400, fontSize: 17, color: 'var(--text-1)' }}>PonPlants</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-4)', lineHeight: 1.6, margin: 0 }}>
              Built from real grower posts. No generic advice.
            </p>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: 12 }}>Guides</p>
            {[['LECA vs Pon', '/leca-vs-pon'], ['Root Rot', '/root-rot'], ['Soil Transition', '/transition'], ['Fertilizer', '/fertilizer']].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: 'block', padding: '4px 0', fontSize: 14, color: 'var(--text-3)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: 12 }}>Tools</p>
            {[['Reservoir Calculator', '/tools/reservoir'], ['Root Rot Checker', '/tools/root-rot-checker'], ['Fertilizer Chart', '/tools/fertilizer-chart']].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: 'block', padding: '4px 0', fontSize: 14, color: 'var(--text-3)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: 12 }}>By Plant</p>
            {[['Alocasia', '/plants/alocasia'], ['Pothos', '/plants/pothos'], ['Monstera', '/plants/monstera']].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: 'block', padding: '4px 0', fontSize: 14, color: 'var(--text-3)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: 12 }}>About</p>
            {[['About PonPlants', '/about'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: 'block', padding: '4px 0', fontSize: 14, color: 'var(--text-3)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>Content sourced from r/SemiHydro community data.</p>
          <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>© 2025 PonPlants</p>
        </div>
      </div>
    </footer>
  )
}
