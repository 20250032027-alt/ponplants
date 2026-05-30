import Link from 'next/link'
import type { Metadata } from 'next'
import VideoEmbed from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Root Rot Diagnosis and Fix',
  description: 'Step-by-step root rot diagnosis for LECA and Pon growers. Symptom guide, five causes with fixes, treatment protocol, and an interactive checker.',
  openGraph: { title: 'Root Rot Diagnosis and Fix | PonPlants', description: 'Symptom guide, decision tree, and treatment protocol for semi-hydro root rot.' },
}

const symptoms = [
  { label: 'Root color',  healthy: 'White to light tan. Firm when squeezed.',              warning: 'Light brown. Slightly soft.',                    danger: 'Dark brown or black. Mushy. Hollow when squeezed.' },
  { label: 'Smell',       healthy: 'Earthy or neutral.',                                   warning: 'Slightly stale or sour.',                        danger: 'Strong sulfur or sewage smell.' },
  { label: 'Reservoir',   healthy: 'Drops regularly. Water stays clear.',                  warning: 'Slow to drop. Slight cloudiness.',               danger: 'Barely moves. Dark or murky water.' },
  { label: 'Stem base',   healthy: 'Firm. No soft spots.',                                 warning: 'Slightly soft at soil level.',                   danger: 'Soft, translucent, or collapsing.' },
  { label: 'Leaves',      healthy: 'Upright. New growth appearing.',                       warning: 'Drooping despite adequate water.',               danger: 'Wilting that does not recover.' },
]

const causes = [
  {
    num: '01', title: 'Anaerobic reservoir water',
    body: 'The most common cause. When reservoir water sits stagnant with no airspace above it, oxygen depletes and anaerobic bacteria take over. They produce hydrogen sulfide (the sewage smell), which kills roots rapidly.',
    fix: 'Leave 2 to 4cm between your water level and the base of your substrate. Refresh the reservoir fully every 1 to 2 weeks.',
  },
  {
    num: '02', title: 'Roots constricted by packed substrate',
    body: 'A dense mass of LECA and roots creates an anaerobic micro-environment even with a proper reservoir gap. The roots suffocate from the inside out. More common in pots that have not been repotted in over a year.',
    fix: 'Repot when roots are clearly congested. Size up one pot and loosen the root ball gently during transfer.',
  },
  {
    num: '03', title: 'No airspace above the water line',
    body: 'Filling the reservoir all the way to the substrate eliminates the zone where roots get oxygen. Some growers overfill thinking more water is always better.',
    fix: 'Maintain at least 2cm of dry substrate above your water line. This is where oxygen-feeding roots live.',
  },
  {
    num: '04', title: 'Transition die-off misread as rot',
    body: 'Plants coming from soil grow soil roots, which often die back during transition. Dry, firm, brown roots from a recent transition are normal die-off, not active rot.',
    fix: 'Check texture before acting. Dry, firm, brown roots are fine. Only soft, mushy, smelly roots are a problem. Trim and move on.',
  },
  {
    num: '05', title: 'Fertilizer salt buildup',
    body: 'High salt concentration in the reservoir damages root cells directly. Roots brown from the tips inward and cannot uptake water. Often misdiagnosed as rot when it is actually chemical burn.',
    fix: 'Flush with plain, pH-adjusted water every 4 to 6 weeks. If white crust is visible on the substrate, flush immediately.',
  },
]

const treatmentSteps = [
  'Remove the plant from the pot. Speed matters.',
  'Rinse all roots under room-temperature water. Remove every trace of substrate.',
  'Cut back to healthy white root tissue. Sterilize scissors between cuts.',
  'Mix 1 part 3% hydrogen peroxide with 3 parts water. Soak roots for 5 minutes.',
  'Air dry cut surfaces for 20 to 30 minutes before repotting.',
  'Fresh substrate, clean pot. Do not reuse old substrate without sterilizing.',
]

export default function RootRot() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">Top-voted troubleshooting posts</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Root rot diagnosis and fix
        </h1>
        <p className="prose">
          Semi-hydro root rot is almost always caused by one of five things. Work through the symptom guide below to figure out which one before pulling the plant apart.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="content-grid">
        <div>
          {/* Symptom table */}
          <section style={{ marginBottom: 52 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>What you are seeing</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>Check each symptom. Several that look alarming are completely normal.</p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Symptom</th>
                    <th style={{ color: 'var(--accent)' }}>Healthy</th>
                    <th style={{ color: '#d97706' }}>Watch it</th>
                    <th style={{ color: '#dc2626' }}>Act now</th>
                  </tr>
                </thead>
                <tbody>
                  {symptoms.map((s, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600, color: 'var(--text-1)', whiteSpace: 'nowrap' }}>{s.label}</td>
                      <td style={{ color: 'var(--accent)' }}>{s.healthy}</td>
                      <td style={{ color: '#92400e' }}>{s.warning}</td>
                      <td style={{ color: '#b91c1c' }}>{s.danger}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Use the interactive tool CTA */}
          <div className="callout callout-green" style={{ marginBottom: 52, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, marginBottom: 4 }}>Not sure? Use the interactive checker</p>
              <p style={{ margin: 0, fontSize: 13 }}>Answer four questions and get a diagnosis with specific next steps.</p>
            </div>
            <Link href="/tools/root-rot-checker" className="btn btn-primary" style={{ flexShrink: 0 }}>Open checker</Link>
          </div>

          {/* Five causes */}
          <section style={{ marginBottom: 52 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>The five causes and their fixes</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>Most semi-hydro rot comes down to oxygen deprivation in one form or another.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {causes.map((c) => (
                <div key={c.num} className="card">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, fontWeight: 700, color: 'var(--accent)', flexShrink: 0, marginTop: 3, letterSpacing: '0.05em' }}>{c.num}</span>
                    <div style={{ flex: 1 }}>
                      <h3 className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 8 }}>{c.title}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 12 }}>{c.body}</p>
                      <div className="callout callout-green" style={{ fontSize: 13 }}>
                        <strong>Fix:</strong> {c.fix}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment protocol */}
          <section style={{ marginBottom: 52 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Treatment protocol</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>When rot is confirmed, work through these in order.</p>
            <div className="card">
              <ol className="step-list">
                {treatmentSteps.map((s, i) => (
                  <li key={i} className="step-item">
                    <div className="step-num">{i + 1}</div>
                    <span className="step-text">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Alocasia note */}
          <div className="callout callout-amber">
            <strong>Alocasia note:</strong> Alocasia often cannibalize older leaves and roots when stressed or underfed. This gets misread as rot. Before treating, confirm the plant is getting adequate fertilizer and light. If only the oldest roots are dying back while new roots are white and firm, you are probably fine.
          </div>

          {/* Video */}
          <section style={{ marginTop: 40 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Watch instead of read</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>
              Prefer a visual walkthrough? This covers the semi-hydro setup that prevents most root rot in the first place.
            </p>
            <VideoEmbed
              videoId="uuXVajqbRC0"
              title="LECA Basics for Beginners / LECA 101 Semi Hydroponics"
              creator="Chris"
              channel="Pretty in Green"
              note="Covers reservoir setup and airspace: the two biggest root rot factors"
            />
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Tools</p>
            <Link href="/tools/root-rot-checker" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}>Interactive Checker</Link>
            <Link href="/tools/reservoir" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Reservoir Calculator</Link>
          </div>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Related</p>
            {[
              { href: '/fertilizer',     label: 'Fertilizer and flushing' },
              { href: '/transition',     label: 'Soil transition guide' },
              { href: '/plants/alocasia',label: 'Alocasia guide' },
            ].map((l, i) => (
              <Link key={i} href={l.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none', textDecoration: 'none', color: 'var(--text-2)', fontSize: 14, fontWeight: 500 }}>
                {l.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .content-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
