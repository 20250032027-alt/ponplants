import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soil to Semi-Hydro Transition Guide | PonPlants',
  description: 'How to transition plants from soil to LECA or Pon. The bare-root rinse method, what to expect in weeks 1 and 2, which plants adapt fastest, and pot comparisons.',
}

const timeline = [
  {
    period: 'Day 1 to 3',
    title: 'The plant does nothing obvious',
    desc: 'This is normal. The plant is processing a major environmental change. Do not top-up, do not move it, do not add fertilizer yet. Just let it sit with a small amount of water in the reservoir roughly 2cm.',
    watchFor: 'Any mushy or collapsing stem tissue at the base. That would indicate a problem worth addressing now.',
  },
  {
    period: 'Week 1 to 2',
    title: 'Possible leaf drop',
    desc: 'Some plants, especially Alocasia, drop one or two leaves during transition. The plant is redirecting energy toward growing new water roots rather than supporting existing foliage. This is a feature, not a bug. As long as the corm and stem are firm, the plant is doing its job.',
    watchFor: 'Stem softness at the base. If the lowest part of the stem feels mushy, that is a problem. Leaf drop alone is fine.',
  },
  {
    period: 'Week 2 to 4',
    title: 'New root growth visible',
    desc: 'You should start seeing bright white root tips pushing out of the substrate or visible through a clear pot. This is when you can start a diluted fertilizer regimen roughly quarter strength to start.',
    watchFor: 'Roots that are brown and soft rather than white and firm. That would indicate something went wrong with aeration or the reservoir level.',
  },
  {
    period: 'Month 2 and beyond',
    title: 'New leaf growth resumes',
    desc: 'Once a full set of water roots is established, most plants outpace their soil-growth rates noticeably. The community consistently reports leaves that are significantly larger and growth rates of two to four times faster than in soil.',
    watchFor: 'Nothing specific at this stage. Just maintain the reservoir and flush every 4 to 6 weeks.',
  },
]

const methods = [
  {
    name: 'Bare root rinse (recommended)',
    best: 'Most plants including Alocasia, Philodendron, Anthurium',
    steps: [
      'Remove the plant from its pot and shake off loose soil.',
      'Rinse roots under room-temperature water until all soil is gone. Be thorough.',
      'Trim any dead, mushy, or damaged roots with sterile scissors.',
      'Let roots air dry for 20 to 30 minutes to let any cut surfaces callous.',
      'Place in your chosen substrate with a small reservoir 2cm to start.',
      'Keep in a bright, indirect light spot. Do not fertilize for the first two weeks.',
    ],
    note: 'You will lose some roots during this process. That is expected. The plant grows new water roots within 2 to 4 weeks and those will function better in this environment than the old soil roots ever could.',
  },
  {
    name: 'Water propagation first',
    best: 'Cuttings, water-rooted starts, very sensitive plants',
    steps: [
      'Place a cutting or bare-rooted plant directly into clean, plain water.',
      'Keep in bright indirect light for 2 to 6 weeks until water roots develop.',
      'Transition to substrate once roots are 3 to 5cm long.',
      'Keep roots moist during the substrate transfer do not let them dry out.',
    ],
    note: 'This method takes longer but causes less stress for delicate plants. The downside is that water roots can struggle when first moved to substrate, so the transition from water to LECA or Pon has its own adjustment period.',
  },
]

const pots = [
  {
    name: 'Lechuza planters',
    pros: ['Ready-made reservoir system', 'Attractive design, no visible reservoir', 'Come with Pon no extra substrate needed', 'Handles and water indicator on larger models'],
    cons: ['Expensive', 'Bundled Pon often insufficient for large planters', 'Harder to inspect roots without disassembly', 'Limited size range'],
    verdict: 'Best for growers who want a clean, no-DIY setup and do not mind paying for it.',
  },
  {
    name: 'Nested nursery pots (DIY)',
    pros: ['Very cheap reuse pots you already have', 'Easy root inspection', 'Fully customizable reservoir size', 'Works with any substrate'],
    cons: ['Less attractive', 'Requires drilling or sizing inner pot carefully', 'No built-in water indicator'],
    verdict: 'Best for growers prioritizing function over aesthetics. One community member noted: "Nested deli containers. You are spending $99 for fancy Starbucks cups."',
  },
  {
    name: 'Naked Root pots',
    pros: ['Air-pruning design prevents root circling', 'Good aeration', 'Root inspection without removal'],
    cons: ['More expensive than DIY', 'Less widely available', 'Aesthetic is divisive'],
    verdict: 'Good middle ground between cost and design. Popular in the community for plants with aggressive root systems.',
  },
  {
    name: 'Glass vessels',
    pros: ['Full root visibility', 'Can be beautiful', 'Easy to monitor water level'],
    cons: ['Heavy when filled', 'Can get algae from light exposure', 'Hard to find the right size'],
    verdict: 'Best for plants you want to showcase. For large vessels, community members recommend thrift stores and Facebook Marketplace over buying new.',
  },
]

export default function Transition() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
      {/* Header */}
      <div style={{ padding: '64px 0 48px', borderBottom: '1px solid #e7e3dc', marginBottom: 64 }}>
        <Link href="/" style={{ fontSize: 13, color: '#78716c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 24 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to home
        </Link>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5d8c3d', marginBottom: 12 }}>
          28 transition posts, 54 Alocasia-specific
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1a16', letterSpacing: '-0.02em', marginBottom: 16 }}>
          Soil to semi-hydro transitions
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#57534e', maxWidth: '65ch' }}>
          The process looks scarier than it is. Plants adapt. Here is what to do, what to expect week by week, and which pot system fits your situation.
        </p>
      </div>

      {/* Methods */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>Two transition methods</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 36 }}>Most healthy plants do better with the bare root rinse. Water propagation first is for cuttings or very sensitive specimens.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {methods.map((m, i) => (
            <div key={i} style={{ padding: '36px', borderRadius: 20, border: '1px solid #e7e3dc', backgroundColor: '#fafaf8' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24, flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: '#1c1a16', margin: 0 }}>{m.name}</h3>
                <span style={{ padding: '4px 12px', borderRadius: 999, backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', fontSize: 12, fontWeight: 600 }}>
                  Best for: {m.best}
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'start' }} className="method-grid">
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#78716c', marginBottom: 14 }}>Steps</p>
                  <ol style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {m.steps.map((step, si) => (
                      <li key={si} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', backgroundColor: '#4a7c3f', color: '#fff', fontFamily: 'DM Mono, monospace', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>{si + 1}</span>
                        <span style={{ fontSize: 14, lineHeight: 1.6, color: '#57534e', paddingTop: 3 }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div style={{ minWidth: 240, padding: '20px', borderRadius: 14, backgroundColor: '#fffbeb', border: '1px solid #fde68a' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#92400e', marginBottom: 8 }}>Note</p>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: '#78350f', margin: 0 }}>{m.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>What to expect, week by week</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 36 }}>The first two weeks confuse most new growers. Here is what is actually happening inside the pot.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 21, top: 24, bottom: 24, width: 2, backgroundColor: '#e7e3dc' }} />
          {timeline.map((t, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 20, marginBottom: 28, position: 'relative' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#4a7c3f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <div style={{ padding: '24px 28px', borderRadius: 16, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#4a7c3f', marginBottom: 6 }}>{t.period}</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1c1a16', marginBottom: 10 }}>{t.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#57534e', marginBottom: 14 }}>{t.desc}</p>
                <div style={{ padding: '10px 14px', borderRadius: 10, backgroundColor: '#fff7ed', border: '1px solid #fed7aa' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c2410c' }}>Watch for</span>
                  <p style={{ fontSize: 13, color: '#9a3412', margin: '4px 0 0', lineHeight: 1.5 }}>{t.watchFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pot comparisons */}
      <div id="pots" style={{ marginBottom: 64 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>Which pot system to use</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 36 }}>The Lechuza question comes up 14 times for that brand alone. Here is an honest breakdown of the main options.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {pots.map((pot, i) => (
            <div key={i} style={{ padding: '28px', borderRadius: 18, border: '1px solid #e7e3dc', backgroundColor: '#fafaf8', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1c1a16', margin: 0 }}>{pot.name}</h3>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#4a7c3f', marginBottom: 8 }}>Pros</p>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {pot.pros.map((pro, pi) => (
                    <li key={pi} style={{ fontSize: 13, color: '#57534e', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <svg style={{ flexShrink: 0, marginTop: 3 }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4a7c3f" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#be5e30', marginBottom: 8 }}>Cons</p>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {pot.cons.map((con, ci) => (
                    <li key={ci} style={{ fontSize: 13, color: '#57534e', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <svg style={{ flexShrink: 0, marginTop: 3 }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#be5e30" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: '#78716c', borderTop: '1px solid #e7e3dc', paddingTop: 14, margin: 0, fontStyle: 'italic' }}>{pot.verdict}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/fertilizer" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#4a7c3f', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Fertilizer guide</Link>
        <Link href="/root-rot" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Root rot diagnosis</Link>
      </div>

      <style>{`
        @media (max-width: 700px) { .method-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
