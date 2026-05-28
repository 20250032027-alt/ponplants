import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Soil to Semi-Hydro Transition' }

export default function Transition() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">28 transition posts, 54 Alocasia-specific</span>
        <h1 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Soil to semi-hydro transitions
        </h1>
        <p className="prose">
          The process looks scarier than it is. Plants adapt. Most of the stress growers feel during a transition comes from not knowing what is normal in the first two weeks.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="content-grid">
        <div>
          {/* Method 1 */}
          <section style={{ marginBottom: 56 }}>
            <h2 className="serif" style={{ fontSize: '1.6rem', color: 'var(--text-1)', marginBottom: 6 }}>
              Bare root rinse — the standard method
            </h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>Works for most healthy plants including Alocasia, Philodendron, and Anthurium.</p>

            <div className="callout callout-amber" style={{ marginBottom: 24 }}>
              You will lose some roots during this process. That is normal. Soil roots are not designed for this environment anyway. New water roots grow within 2 to 4 weeks and work better than the old ones ever did.
            </div>

            <ol className="step-list">
              {[
                'Remove the plant from its pot. Shake off as much soil as you can by hand.',
                'Rinse roots under room-temperature water until no soil is left. Be thorough — trapped soil creates anaerobic pockets.',
                'Trim any dead, mushy, or damaged roots with sterilized scissors.',
                'Let roots air dry for 20 to 30 minutes. This lets cut surfaces callous slightly.',
                'Place in your chosen substrate with a small initial reservoir — 2cm of water to start.',
                'Keep in bright indirect light. Do not fertilize for the first two weeks.',
              ].map((s, i) => (
                <li key={i} className="step-item">
                  <div className="step-num">{i + 1}</div>
                  <span className="step-text">{s}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Method 2 */}
          <section style={{ marginBottom: 56 }}>
            <h2 className="serif" style={{ fontSize: '1.6rem', color: 'var(--text-1)', marginBottom: 6 }}>
              Water propagation first
            </h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>Better for cuttings, very sensitive plants, or anything you are not sure will handle the bare root process well.</p>

            <ol className="step-list">
              {[
                'Place a bare-rooted cutting or plant directly into clean, plain water.',
                'Keep in bright indirect light for 2 to 6 weeks until water roots develop.',
                'Transition to substrate once roots are 3 to 5cm long.',
                'Keep roots moist during the substrate transfer — do not let them dry out.',
              ].map((s, i) => (
                <li key={i} className="step-item">
                  <div className="step-num">{i + 1}</div>
                  <span className="step-text">{s}</span>
                </li>
              ))}
            </ol>

            <div className="callout callout-amber" style={{ marginTop: 20 }}>
              Water roots that grow in a glass do not automatically work in substrate. There is another adjustment period when you move to LECA or Pon. Plan for 1 to 2 weeks of stalling before the plant takes off.
            </div>
          </section>

          {/* Timeline */}
          <section style={{ marginBottom: 56 }}>
            <h2 className="serif" style={{ fontSize: '1.6rem', color: 'var(--text-1)', marginBottom: 6 }}>What to expect, week by week</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 28 }}>The first two weeks confuse most new growers. Here is what is actually happening.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', left: 13, top: 14, bottom: 14, width: 2, background: 'var(--border)' }} />
              {[
                { period: 'Day 1 to 3', title: 'Nothing visible happens', body: 'The plant is processing a major change. Do not top-up water, do not move it, do not add fertilizer. Just let it sit.', warn: 'Any soft or mushy tissue at the stem base is worth investigating now.' },
                { period: 'Week 1 to 2', title: 'Possible leaf drop', body: 'Some plants — especially Alocasia — drop a leaf or two. The plant is redirecting energy toward growing new water roots rather than supporting existing foliage. This is expected.', warn: 'Stem softness at the base is a concern. Leaf drop alone is not.' },
                { period: 'Week 2 to 4', title: 'White root tips appear', body: 'Look for bright white root tips pushing through the substrate or visible through a clear pot. This is when you can start a diluted fertilizer — quarter strength.', warn: 'Brown, soft roots at this stage mean something went wrong with aeration. Pull and inspect.' },
                { period: 'Month 2 onward', title: 'New leaf growth resumes', body: 'Once a full water root system is established, most plants outpace their soil-growth rates. Leaves tend to come in larger and faster.', warn: null },
              ].map((t, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 20, marginBottom: 24, position: 'relative' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
                  </div>
                  <div className="card">
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--accent)', marginBottom: 5 }}>{t.period}</p>
                    <h3 className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 8 }}>{t.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: t.warn ? 12 : 0 }}>{t.body}</p>
                    {t.warn && (
                      <div className="callout callout-amber" style={{ fontSize: 13 }}>
                        <strong>Watch for:</strong> {t.warn}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pot comparison */}
          <section id="pots">
            <h2 className="serif" style={{ fontSize: '1.6rem', color: 'var(--text-1)', marginBottom: 6 }}>Which pot to use</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 28 }}>Lechuza comes up 14 times by name. Here is what the trade-offs actually look like.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {[
                { name: 'Lechuza planters', pros: ['Ready-made reservoir', 'Good aesthetics', 'Comes with Pon'], cons: ['Expensive', 'Pon supply often short', 'Hard to inspect roots'] },
                { name: 'Nested nursery pots (DIY)', pros: ['Very cheap', 'Easy root inspection', 'Fully customizable'], cons: ['Not as attractive', 'No water indicator'] },
                { name: 'Naked Root pots', pros: ['Air-pruning design', 'Good aeration', 'Root inspection possible'], cons: ['More expensive than DIY', 'Less available'] },
                { name: 'Glass vessels', pros: ['Full root visibility', 'Easy water monitoring', 'Can be beautiful'], cons: ['Heavy', 'Algae from light exposure'] },
              ].map((p, i) => (
                <div key={i} className="card" style={{ fontSize: 14 }}>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-1)', fontSize: '0.95rem', marginBottom: 14 }}>{p.name}</h3>
                  <div style={{ marginBottom: 10 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent)', marginBottom: 6 }}>Pros</p>
                    {p.pros.map((item, j) => (
                      <p key={j} style={{ margin: '0 0 4px', color: 'var(--text-2)', display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                        <svg style={{ flexShrink: 0, marginTop: 3 }} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
                        {item}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#dc2626', marginBottom: 6 }}>Cons</p>
                    {p.cons.map((item, j) => (
                      <p key={j} style={{ margin: '0 0 4px', color: 'var(--text-2)', display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                        <svg style={{ flexShrink: 0, marginTop: 3 }} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 80 }}>
          <div className="card-sm">
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 10 }}>Related tools</p>
            <Link href="/tools/reservoir" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}>Reservoir Calculator</Link>
            <Link href="/tools/root-rot-checker" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Root Rot Checker</Link>
          </div>
          <div className="card-sm">
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 10 }}>Related guides</p>
            {[
              { href: '/fertilizer', label: 'Fertilizer dosing' },
              { href: '/leca-vs-pon', label: 'LECA vs Pon' },
              { href: '/plants/alocasia', label: 'Alocasia guide' },
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
      `}</style>
    </div>
  )
}
