import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LECA vs Pon: Full Comparison',
  description: 'A real side-by-side of LECA and Lechuza Pon. Cost, moisture retention, root behavior, best plants for each, myth debunking, and when to mix them.',
  openGraph: { title: 'LECA vs Pon: Full Comparison | PonPlants', description: 'Factual breakdown of LECA and Lechuza Pon for semi-hydro growers.' },
}

const rows = [
  { trait: 'Material',            leca: 'Expanded clay aggregate, fired clay balls, 8 to 16mm', pon: 'Mineral blend of zeolite, pumice, and lava rock' },
  { trait: 'Moisture retention',  leca: 'Lower. Dries faster between reservoir top-ups',         pon: 'Higher, stays damp longer without waterlogging' },
  { trait: 'Weight',              leca: 'Light when dry, moderate when wet',                        pon: 'Consistently heavier than LECA' },
  { trait: 'Drainage speed',      leca: 'Very fast. Air gap resets quickly',                       pon: 'Moderate, stays damp for longer' },
  { trait: 'Nutrient retention',  leca: 'Low. Fertilizer flushes through quickly',                 pon: 'Moderate, zeolite holds some cations' },
  { trait: 'Root aeration',       leca: 'Excellent. Large air pockets between balls',              pon: 'Good, smaller pore size but still airy' },
  { trait: 'Reusability',         leca: 'High. Rinse, sterilize, reuse indefinitely',              pon: 'Lower. Degrades over a few years' },
  { trait: 'Cost',                leca: 'Low. Available in bulk at most garden centres',           pon: 'Higher. Lechuza bags are expensive' },
  { trait: 'Salt buildup',        leca: 'Visible as white crust on the balls',                      pon: 'Less visible but still accumulates' },
  { trait: 'Best plants',         leca: 'Philodendron, Pothos, Monstera, Epipremnum',               pon: 'Alocasia, Anthurium, Calathea, orchids' },
]

const myths = [
  { myth: 'You must soak LECA before using it', truth: 'Dry LECA wicks moisture upward through capillary action just fine. Soaking adds effort with no measurable benefit. Skip it.' },
  { myth: 'Pon is just overpriced gravel',       truth: 'The zeolite component does hold a small number of cations, giving Pon a slight nutrient-buffering advantage. It is not magic but it is not inert either. The price is the real objection.' },
  { myth: 'LECA roots always rot in the reservoir', truth: 'Roots rot in stagnant, oxygen-depleted water. With a regularly refreshed reservoir and proper airspace, roots that grow into the water are healthy.' },
  { myth: 'You need a separate wicking layer at the bottom', truth: 'Capillary action works through the whole substrate uniformly. A separate wicking layer creates a compaction zone. Fill normally and let physics do the work.' },
]

export default function LecaVsPon() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">126 posts each, zero clean comparisons online</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          LECA vs Pon: the comparison nobody wrote
        </h1>
        <p className="prose">
          Both get mentioned constantly. Growers pick sides without much data behind them. Here is a factual breakdown of what each medium actually does so you can choose based on your plants and habits rather than forum opinions.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="content-grid">
        <div>
          {/* Intro cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 48 }} className="two-col">
            {[
              { title: 'LECA', body: 'Lightweight Expanded Clay Aggregate. Fired clay balls, typically 8 to 16mm. Cheap and widely available. Excellent aeration, lower moisture retention. Best for plants that tolerate dry-down periods between top-ups. Reusable indefinitely with proper cleaning.' },
              { title: 'Lechuza Pon', body: 'A proprietary mineral blend of zeolite, pumice, and lava rock. Holds moisture longer than LECA and has some nutrient retention through its zeolite fraction. More expensive and harder to source in bulk. Particularly popular for Alocasia, Anthurium, and Calathea.' },
            ].map((c, i) => (
              <div key={i} className="card">
                <h2 className="serif" style={{ fontSize: '1.2rem', color: 'var(--text-1)', marginBottom: 10 }}>{c.title}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <section style={{ marginBottom: 52 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Side by side</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>Neither medium is universally better. They suit different plants and different care habits.</p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Characteristic</th>
                    <th style={{ color: 'var(--accent)' }}>LECA</th>
                    <th style={{ color: 'var(--accent-light)' }}>Pon</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600, color: 'var(--text-1)', whiteSpace: 'nowrap' }}>{r.trait}</td>
                      <td>{r.leca}</td>
                      <td>{r.pon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Alocasia callout */}
          <section id="alocasia" style={{ marginBottom: 52 }}>
            <div className="card" style={{ borderColor: 'var(--accent-border)' }}>
              <span className="eyebrow">Alocasia specifically</span>
              <h2 className="serif" style={{ fontSize: '1.4rem', color: 'var(--text-1)', marginBottom: 12 }}>Why Pon keeps winning for Alocasia</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-2)', marginBottom: 14 }}>
                The community data is consistent here. Growers report bigger leaves and faster growth in Pon than in LECA for the same plant. The most likely reason is moisture consistency. Alocasia want their roots slightly damp at all times. Pon holds enough moisture between top-ups that the roots never fully dry out, while LECA can swing too dry if the reservoir gets low.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-2)', margin: 0 }}>
                LECA does work for Alocasia. One grower documented 90 days in LECA with leaf sizes double what the plant produced in soil and a new leaf every two weeks. But Pon is more forgiving if you are less consistent with top-ups.
              </p>
            </div>
          </section>

          {/* Myths */}
          <section style={{ marginBottom: 52 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Myths worth clearing up</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>These four come up constantly and most of them are wrong.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
              {myths.map((m, i) => (
                <div key={i} className="card">
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                    <div style={{ flexShrink: 0, width: 20, height: 20, borderRadius: '50%', background: 'var(--red-50)', border: '1px solid rgba(239,68,68,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#b91c1c', margin: 0, lineHeight: 1.4 }}>Myth: {m.myth}</p>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text-2)', paddingLeft: 30, margin: 0 }}>{m.truth}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mixing */}
          <section>
            <div className="callout callout-green">
              <p style={{ fontWeight: 700, marginBottom: 8 }}>When to mix the two</p>
              <p style={{ margin: 0, lineHeight: 1.65 }}>
                A common approach is two parts Pon to one part LECA. The LECA adds air pockets and reduces density, while the Pon keeps moisture retention high enough for thirsty plants. For Lechuza planters specifically, mixing is practical because the bundled Pon bags rarely fill larger vessels.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Tools</p>
            <Link href="/tools/reservoir" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}>Reservoir Calculator</Link>
            <Link href="/tools/root-rot-checker" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Root Rot Checker</Link>
          </div>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Related</p>
            {[
              { href: '/transition',     label: 'Soil transition guide' },
              { href: '/fertilizer',     label: 'Fertilizer guide' },
              { href: '/plants/alocasia',label: 'Alocasia in semi-hydro' },
            ].map((l, i) => (
              <Link key={i} href={l.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none', textDecoration: 'none', color: 'var(--text-2)', fontSize: 14, fontWeight: 500 }}>
                {l.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .content-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
