import Link from 'next/link'
import type { Metadata } from 'next'
import VideoEmbed from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Fertilizer and Nutrient Dosing',
  description: 'What fertilizer to use in LECA and Pon, how much, when to start, and when to flush. Includes nutrient deficiency guide and fertilizer comparison.',
  openGraph: { title: 'Fertilizer and Nutrient Dosing | PonPlants', description: 'Complete fertilizer guide for semi-hydro. Dosing chart, flush schedule, and nutrient deficiency reference.' },
}

const nutrients = [
  { name: 'Nitrogen (N)',    role: 'Leaf and stem growth',              deficiency: 'Yellowing starting in older leaves',             excess: 'Dark green leaves, weak stems, root burn' },
  { name: 'Phosphorus (P)', role: 'Root development, energy transfer', deficiency: 'Purple tint on leaves, poor root growth',         excess: 'Blocks uptake of zinc and iron' },
  { name: 'Potassium (K)',  role: 'Water regulation, disease resistance', deficiency: 'Brown leaf edges, wilting',                    excess: 'Salt buildup, blocks calcium and magnesium' },
  { name: 'Calcium (Ca)',   role: 'Cell wall strength',                 deficiency: 'Distorted new growth, brown tips on young leaves', excess: 'Blocks magnesium and iron uptake' },
  { name: 'Magnesium (Mg)',role: 'Chlorophyll production',             deficiency: 'Interveinal yellowing on older leaves',           excess: 'Rare in semi-hydro' },
  { name: 'Iron (Fe)',      role: 'Chlorophyll synthesis',              deficiency: 'Yellowing between veins on new growth',           excess: 'Very rare in semi-hydro' },
]

const fertilizers = [
  {
    name: 'Dyna-Gro Foliage Pro',
    tag: 'Community favorite', tagColor: 'green',
    npk: '9-3-6',
    body: 'The consistent community pick. Contains all 16 essential nutrients including calcium and magnesium. No supplements needed. Note: Superthrive acquired Dyna-Gro Foliage Pro. Labels may say either name depending on stock, but the formula is identical.',
    dose: '1/4 to 1/2 tsp per gallon of water, every watering',
  },
  {
    name: 'Masterblend 4-18-38 (three-part)',
    tag: 'Best value', tagColor: 'green',
    npk: '4-18-38 + calcium nitrate + Epsom salt',
    body: 'Extremely cost-effective for large collections. Mix 2.5g Masterblend + 2.5g calcium nitrate + 1.25g Epsom salt per 4 litres. Requires a kitchen scale but costs a fraction of bottled nutrients per litre.',
    dose: '2.5g + 2.5g + 1.25g per 4L, every watering',
  },
  {
    name: 'Houseplant Focus Hydroponic',
    tag: 'UK alternative', tagColor: 'amber',
    npk: '3-2-6',
    body: 'Popular in the UK community. One grower documented excellent results pairing it with a Soil Ninja substrate. Straightforward to use with good availability outside the US.',
    dose: '5ml per litre, every watering',
  },
  {
    name: 'Standard soil fertilizers',
    tag: 'Not recommended', tagColor: 'red',
    npk: 'Varies',
    body: 'Soil fertilizers assume the plant is getting baseline micronutrients from soil biology. They leave out calcium, magnesium, and trace elements. Using them in semi-hydro leads to visible deficiencies within weeks.',
    dose: null,
  },
]

const schedule = [
  { when: 'First 2 weeks', what: 'No fertilizer', why: 'The plant is adjusting. Adding nutrients too early stresses challenged roots.' },
  { when: 'Weeks 3 to 4', what: 'Quarter-strength', why: 'Water roots are still developing and cannot handle full doses yet.' },
  { when: 'Month 2 onward', what: 'Full dose, every watering', why: 'Established roots handle full nutrition. Refresh reservoir every 1 to 2 weeks.' },
  { when: 'Every 4 to 6 weeks', what: 'Plain water flush', why: 'Runs out accumulated fertilizer salts. Do this even if nothing looks wrong.' },
]

export default function Fertilizer() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">19 posts, no dosing chart anywhere</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Fertilizer and nutrient dosing
        </h1>
        <p className="prose">
          Semi-hydro skips the soil biology that normally supplies and buffers nutrients. That makes fertilizer non-optional. Here is what to use, how much, and when.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="content-grid">
        <div>
          {/* Warning callout */}
          <div className="callout callout-amber" style={{ marginBottom: 48 }}>
            <strong>Why soil fertilizers do not work here:</strong> They assume the plant is already receiving calcium, magnesium, and trace elements from soil biology. In LECA or Pon there is no soil biology. Use a fertilizer labeled hydroponic or complete, with all 16 essential nutrients listed.
          </div>

          {/* Nutrient table */}
          <section style={{ marginBottom: 52 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>What each nutrient does</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>Deficiencies develop faster in semi-hydro than in soil because there is no buffering medium. Knowing what to look for saves the plant.</p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Nutrient</th>
                    <th>Role</th>
                    <th style={{ color: '#d97706' }}>Deficiency signs</th>
                    <th style={{ color: '#dc2626' }}>Excess signs</th>
                  </tr>
                </thead>
                <tbody>
                  {nutrients.map((n, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700, color: 'var(--text-1)', whiteSpace: 'nowrap' }}>{n.name}</td>
                      <td style={{ color: 'var(--text-3)' }}>{n.role}</td>
                      <td style={{ color: '#92400e' }}>{n.deficiency}</td>
                      <td style={{ color: '#b91c1c' }}>{n.excess}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Fertilizer picks */}
          <section style={{ marginBottom: 52 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>What to use</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>These are the ones the community returns to with actual results behind them.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {fertilizers.map((f, i) => (
                <div key={i} className="card" style={{
                  borderColor: f.tagColor === 'green' ? 'var(--accent-border)' : f.tagColor === 'red' ? 'rgba(239,68,68,0.25)' : 'var(--border)',
                }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 10 }}>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', margin: 0 }}>{f.name}</h3>
                    <span className={`badge badge-${f.tagColor}`}>{f.tag}</span>
                    <span className="badge" style={{ background: 'var(--bg-2)', color: 'var(--text-3)', border: '1px solid var(--border)', fontFamily: 'Geist Mono, monospace', fontSize: 11 }}>{f.npk}</span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-2)', marginBottom: f.dose ? 12 : 0 }}>{f.body}</p>
                  {f.dose && (
                    <div className="callout callout-green" style={{ fontSize: 13 }}>
                      <strong>Dose:</strong> {f.dose}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Schedule */}
          <section id="flushing">
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Dosing schedule</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>When to start, how much, and when to flush.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 14 }}>
              {schedule.map((s, i) => (
                <div key={i} className="card-sm">
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--accent)', marginBottom: 6 }}>{s.when}</p>
                  <p style={{ fontWeight: 700, color: 'var(--text-1)', fontSize: 14, marginBottom: 6 }}>{s.what}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.55, margin: 0 }}>{s.why}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="callout callout-amber" style={{ marginTop: 32 }}>
            <strong>pH matters more in semi-hydro than in soil.</strong> Most nutrients become unavailable outside 5.5 to 6.5. Tap water is often above 7.0. If your plant is showing deficiency symptoms despite regular fertilizing, check pH before switching fertilizers.
          </div>

          {/* Video */}
          <section style={{ marginTop: 40 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Watch instead of read</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>
              A practical look at fertilizer and substrate choices for semi-hydro.
            </p>
            <VideoEmbed
              videoId="m7zAgiFKbfE"
              title="My Favorite LECA Recipe: How to Grow Rare Plants in Semi Hydroponics"
              creator="Chris"
              channel="Pretty in Green"
              note="Covers nutrient mix and substrate ratios in practice"
            />
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Tools</p>
            <Link href="/tools/fertilizer-chart" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}>Fertilizer Chart</Link>
            <Link href="/tools/reservoir" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Reservoir Calculator</Link>
          </div>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Related</p>
            {[
              { href: '/root-rot',   label: 'Root rot diagnosis' },
              { href: '/transition', label: 'Transition guide' },
            ].map((l, i) => (
              <Link key={i} href={l.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 1 ? '1px solid var(--border)' : 'none', textDecoration: 'none', color: 'var(--text-2)', fontSize: 14, fontWeight: 500 }}>
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
