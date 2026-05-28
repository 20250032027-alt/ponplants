import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Root Rot Diagnosis and Fix | PonPlants',
  description: 'Step-by-step root rot diagnosis for LECA and Pon growers. Brown roots, mushy stems, bad smell find out what is actually wrong and how to fix it.',
}

const symptoms = [
  {
    label: 'Root color',
    healthy: 'White to light tan. Firm when squeezed.',
    warning: 'Light brown. Slightly soft but not mushy.',
    danger: 'Dark brown or black. Mushy. Hollow when squeezed.',
  },
  {
    label: 'Smell',
    healthy: 'Earthy, neutral, faint mineral smell.',
    warning: 'Slightly stale or sour.',
    danger: 'Strong sulfur or sewage smell. Unmistakable.',
  },
  {
    label: 'Reservoir',
    healthy: 'Drops regularly. Water stays clear.',
    warning: 'Slow to drop. Slight cloudiness.',
    danger: 'Barely moves. Dark or murky water.',
  },
  {
    label: 'Stem base',
    healthy: 'Firm, green or brown, no soft spots.',
    warning: 'Slightly soft at soil level.',
    danger: 'Soft, translucent, or collapsing.',
  },
  {
    label: 'Leaves',
    healthy: 'Upright, new growth appearing.',
    warning: 'Drooping despite adequate water. Yellowing lower leaves.',
    danger: 'Wilting that does not recover with watering. Sudden collapse.',
  },
]

const causes = [
  {
    title: 'Anaerobic reservoir water',
    desc: 'The most common cause. When reservoir water sits stagnant with no airspace above the roots, oxygen depletes and anaerobic bacteria take over. They produce hydrogen sulfide, which smells like sewage and kills roots rapidly. The fix is a proper gap between the water line and the bottom of the substrate.',
    fix: 'Leave 2 to 4cm between your water level and the base of your substrate. Refresh the reservoir fully every 1 to 2 weeks.',
  },
  {
    title: 'Roots constricted by packed substrate',
    desc: 'One community member identified this precisely: a dense mass of LECA and roots creates an anaerobic micro-environment even with a proper reservoir gap. The roots suffocate from the inside out. More common in pots that have not been repotted in over a year.',
    fix: 'Repot when roots are clearly congested. Size up one pot and loosen the root ball gently during transfer.',
  },
  {
    title: 'No airspace above the water line',
    desc: 'Filling the reservoir all the way to the bottom of the substrate eliminates the critical zone where roots get oxygen. Some growers overfill thinking more water is always better. It is not.',
    fix: 'Maintain 2 to 3cm of dry substrate above your water line. This is where oxygen-feeding roots live.',
  },
  {
    title: 'Transition stress misread as rot',
    desc: 'Plants coming from soil grow soil roots, which look different from water roots. They often die back during transition. Dark brown transition roots that are firm and dry are normal die-off, not active rot. Only soft, mushy, smelly roots are a problem.',
    fix: 'Check texture before panicking. Dry, brown, firm roots from a recent transition are normal. Trim them clean and the plant will grow new water roots.',
  },
  {
    title: 'Fertilizer salt buildup',
    desc: 'High salt concentration in the reservoir damages root cells directly. Roots brown from the tips inward and cannot uptake water effectively. Often misdiagnosed as rot when it is actually chemical burn.',
    fix: 'Flush with plain, pH-adjusted water every 4 to 6 weeks. If buildup is visible on the substrate as white crust, flush immediately.',
  },
]

const decisionTree = [
  { step: 1, q: 'Do the roots smell like sulfur or sewage?', yes: 'Active anaerobic rot. Skip to the treatment section.', no: 'Go to step 2.' },
  { step: 2, q: 'Are the roots mushy when you squeeze them?', yes: 'Root rot confirmed, likely mid-stage. Go to treatment.', no: 'Go to step 3.' },
  { step: 3, q: 'Are the brown roots dry and firm?', yes: 'Probably transition die-off or old roots. Trim and monitor.', no: 'Go to step 4.' },
  { step: 4, q: 'Has the reservoir barely moved in 5 or more days?', yes: 'Check for root congestion and anaerobic water. Refresh reservoir.', no: 'Go to step 5.' },
  { step: 5, q: 'Are the leaves wilting despite the reservoir being full?', yes: 'Roots may not be functioning. Pull and inspect closely.', no: 'Monitor for a week. May be adjustment after repotting.' },
]

export default function RootRot() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
      {/* Header */}
      <div style={{ padding: '64px 0 48px', borderBottom: '1px solid #e7e3dc', marginBottom: 64 }}>
        <Link href="/" style={{ fontSize: 13, color: '#78716c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 24 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to home
        </Link>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#be5e30', marginBottom: 12 }}>
          Top-voted troubleshooting posts growers desperate for answers
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1a16', letterSpacing: '-0.02em', marginBottom: 16 }}>
          Root rot diagnosis and fix
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#57534e', maxWidth: '65ch' }}>
          Semi-hydro root rot is almost always caused by one of five things. Work through the symptom guide and decision tree below to figure out which one you are dealing with before pulling the plant.
        </p>
      </div>

      {/* Symptom guide */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>What you are seeing</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 32 }}>Check each symptom before deciding your plant has rot. Several of these look alarming but are completely normal.</p>

        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid #e7e3dc', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ backgroundColor: '#1c1a16' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#a8a29e', fontWeight: 500, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Symptom</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#7faa5b', fontWeight: 600, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Healthy</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#f59e0b', fontWeight: 600, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Watch it</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#ef4444', fontWeight: 600, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Act now</th>
              </tr>
            </thead>
            <tbody>
              {symptoms.map((s, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fafaf8' : '#f3f0eb', borderBottom: '1px solid #e7e3dc' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#1c1a16', whiteSpace: 'nowrap' }}>{s.label}</td>
                  <td style={{ padding: '14px 20px', color: '#4a7c3f', lineHeight: 1.5, fontSize: 13 }}>{s.healthy}</td>
                  <td style={{ padding: '14px 20px', color: '#92400e', lineHeight: 1.5, fontSize: 13 }}>{s.warning}</td>
                  <td style={{ padding: '14px 20px', color: '#b91c1c', lineHeight: 1.5, fontSize: 13 }}>{s.danger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision tree */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>Decision tree</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 32 }}>Work through these in order. Stop at the first yes.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {decisionTree.map((node) => (
            <div key={node.step} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, alignItems: 'start' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#1c1a16', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 500, color: '#7faa5b', fontSize: 14 }}>{node.step}</span>
              </div>
              <div style={{ padding: '16px 20px', borderRadius: 14, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de' }}>
                <p style={{ fontWeight: 600, color: '#1c1a16', marginBottom: 10, fontSize: 15 }}>{node.q}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }} className="tree-cols">
                  <div style={{ padding: '10px 14px', borderRadius: 10, backgroundColor: '#fee2e2', border: '1px solid #fecaca' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Yes</span>
                    <p style={{ fontSize: 13, color: '#7f1d1d', margin: '4px 0 0', lineHeight: 1.5 }}>{node.yes}</p>
                  </div>
                  <div style={{ padding: '10px 14px', borderRadius: 10, backgroundColor: '#dcfce7', border: '1px solid #bbf7d0' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.05em' }}>No</span>
                    <p style={{ fontSize: 13, color: '#14532d', margin: '4px 0 0', lineHeight: 1.5 }}>{node.no}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Causes */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>The five causes and their fixes</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 36 }}>Most semi-hydro rot comes down to oxygen deprivation. Here is how each cause works and what to do about it.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {causes.map((c, i) => (
            <div key={i} style={{ padding: '32px', borderRadius: 18, border: '1px solid #e7e3dc', backgroundColor: '#fafaf8' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, backgroundColor: '#fff7ed', border: '1px solid #fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 13, fontWeight: 600, color: '#be5e30' }}>0{i + 1}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: '#1c1a16', marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: '#57534e', marginBottom: 14 }}>{c.desc}</p>
                  <div style={{ padding: '12px 16px', borderRadius: 10, backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fix</span>
                    <p style={{ fontSize: 13, color: '#14532d', margin: '4px 0 0', lineHeight: 1.5 }}>{c.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment protocol */}
      <div style={{ padding: '44px', borderRadius: 20, backgroundColor: '#1c1a16', marginBottom: 56, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(190,94,48,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fb923c', marginBottom: 14 }}>When rot is confirmed</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#f5f2ed', marginBottom: 20 }}>Treatment protocol</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { step: '1', title: 'Remove from substrate', desc: 'Pull the plant out. Do not be gentle speed matters.' },
              { step: '2', title: 'Rinse all roots', desc: 'Use room-temperature water. Remove every trace of substrate.' },
              { step: '3', title: 'Trim the rot', desc: 'Cut back to healthy white root tissue. Sterilize scissors between cuts.' },
              { step: '4', title: 'Treat with hydrogen peroxide', desc: 'A 3% solution diluted 1:3 with water. Soak roots for 5 minutes.' },
              { step: '5', title: 'Let dry briefly', desc: 'Air dry cut surfaces for 20 to 30 minutes before repotting.' },
              { step: '6', title: 'Fresh substrate, clean pot', desc: 'Do not reuse old substrate. Sterilize the pot if possible.' },
            ].map((s) => (
              <div key={s.step} style={{ padding: '20px', borderRadius: 14, backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 600, color: '#fb923c', display: 'block', marginBottom: 8 }}>Step {s.step}</span>
                <h4 style={{ fontWeight: 600, color: '#f5f2ed', fontSize: 14, marginBottom: 6 }}>{s.title}</h4>
                <p style={{ fontSize: 13, color: '#78716c', lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note on Alocasia */}
      <div style={{ padding: '32px 36px', borderRadius: 16, backgroundColor: '#fffbeb', border: '1px solid #fde68a', marginBottom: 56 }}>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#78350f', marginBottom: 10 }}>A note specific to Alocasia</h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: '#92400e', margin: 0 }}>
          Several experienced growers note that Alocasia will often cannibalize older leaves and roots when it is stressed or not getting enough nutrients, and this gets misread as root rot. Before treating for rot, confirm the plant is getting adequate fertilizer and light. If only the oldest roots are dying back while new roots are white and firm, you are probably fine.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/tools#root-rot-checker" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#be5e30', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Interactive Root Rot Checker</Link>
        <Link href="/fertilizer" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Fertilizer guide</Link>
      </div>

      <style>{`@media (max-width: 580px) { .tree-cols { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
