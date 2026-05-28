import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Fertilizer Reference Chart' }

const rows = [
  { plant: 'Alocasia',           medium: 'Pon',           dose: '1/4 tsp / gal', freq: 'Every watering',      note: 'Salt-sensitive. Flush every 4 weeks without fail.' },
  { plant: 'Anthurium',         medium: 'Pon',           dose: '1/4 tsp / gal', freq: 'Every watering',      note: 'Salt-sensitive too. Flush frequently.' },
  { plant: 'Calathea / Maranta',medium: 'Pon',           dose: '1/8 tsp / gal', freq: 'Every watering',      note: 'Light feeder. Use filtered water if possible.' },
  { plant: 'Monstera',          medium: 'LECA or Pon',   dose: '1/4 tsp / gal', freq: 'Every watering',      note: 'Forgiving. Tolerates slight over and underfeeding.' },
  { plant: 'Philodendron',      medium: 'LECA',          dose: '1/4 tsp / gal', freq: 'Every watering',      note: 'Prefers consistent light feeding over occasional heavy doses.' },
  { plant: 'Pothos',            medium: 'LECA',          dose: '1/8 tsp / gal', freq: 'Every watering',      note: 'Light feeder. Brown tips are the first sign of overfeeding.' },
  { plant: 'Orchid',            medium: 'LECA',          dose: '1/8 tsp / gal', freq: 'Every other watering', note: 'Low feeder. Use dedicated orchid formula if available.' },
  { plant: 'Cactus / Succulent',medium: 'Perlite / mix', dose: '1/16 tsp / gal',freq: 'Monthly only',        note: 'Minimal feeding during growing season, none in winter.' },
]

const fertilizers = [
  {
    name: 'Dyna-Gro Foliage Pro',
    rating: 'Best overall',
    ratingColor: 'green',
    npk: '9-3-6',
    desc: 'The community consensus pick. Has all 16 essential nutrients including calcium and magnesium, so no supplements are needed. Note: Superthrive bought Dyna-Gro Foliage Pro. The label may say either name depending on stock, but the formula is identical.',
    dose: '1/4 to 1/2 tsp per gallon, every watering',
  },
  {
    name: 'Masterblend 4-18-38 (three-part)',
    rating: 'Best value',
    ratingColor: 'green',
    npk: '4-18-38 + calcium nitrate + Epsom salt',
    desc: 'Extremely cost-effective for large collections. Mix 2.5g Masterblend + 2.5g calcium nitrate + 1.25g Epsom salt per 4 litres. Requires a small kitchen scale but costs a fraction of bottled nutrients per litre.',
    dose: '2.5g + 2.5g + 1.25g per 4L',
  },
  {
    name: 'Houseplant Focus Hydroponic',
    rating: 'UK alternative',
    ratingColor: 'amber',
    npk: '3-2-6',
    desc: 'Popular in the UK community. One grower documented excellent results pairing it with a Soil Ninja substrate. Straightforward to use with good availability outside the US.',
    dose: '5ml per litre, every watering',
  },
  {
    name: 'Standard soil fertilizers',
    rating: 'Not recommended',
    ratingColor: 'red',
    npk: 'Varies',
    desc: 'Soil fertilizers assume the plant is getting baseline micronutrients from soil biology. They leave out calcium, magnesium, and trace elements. Using them in semi-hydro leads to visible deficiencies within weeks.',
    dose: 'Do not use',
  },
]

export default function FertilizerChartPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/tools" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All tools
        </Link>
        <span className="eyebrow">Tool</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Fertilizer Reference Chart
        </h1>
        <p className="prose">
          Based on Dyna-Gro Foliage Pro — the fertilizer the community keeps coming back to. Doses are per gallon of reservoir water. Scale to litres by multiplying by 0.26.
        </p>
      </div>

      {/* Warning */}
      <div className="callout callout-amber" style={{ marginBottom: 40 }}>
        <strong>Why soil fertilizers do not work in semi-hydro:</strong> They assume the plant is already receiving calcium, magnesium, and trace elements from soil biology. In LECA or Pon, there is no soil biology. Use a fertilizer labeled hydroponic or complete, with all 16 essential nutrients listed.
      </div>

      {/* Dosing table */}
      <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Dosing by plant</h2>
      <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>1/4 tsp is roughly 1.25ml. Use a measuring spoon — eyeballing fertilizer is one of the most common causes of salt buildup.</p>

      <div className="table-wrap" style={{ marginBottom: 56 }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Plant</th>
              <th>Best medium</th>
              <th>Dose</th>
              <th>Frequency</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600, color: 'var(--text-1)', whiteSpace: 'nowrap' }}>{r.plant}</td>
                <td><span className="badge badge-green" style={{ fontSize: 11 }}>{r.medium}</span></td>
                <td style={{ fontFamily: 'Geist Mono, monospace', fontSize: 13 }}>{r.dose}</td>
                <td>{r.freq}</td>
                <td style={{ color: 'var(--text-3)', fontSize: 13 }}>{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fertilizer comparison */}
      <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Which fertilizer to use</h2>
      <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 28 }}>These are the ones that come up repeatedly in the community with actual results behind them.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56 }}>
        {fertilizers.map((f, i) => (
          <div key={i} className="card" style={{
            borderColor: f.ratingColor === 'red' ? 'rgba(239,68,68,0.3)' : f.ratingColor === 'green' ? 'var(--accent-border)' : 'var(--border)',
          }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 10 }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>{f.name}</h3>
              <div style={{ display: 'flex', gap: 8 }}>
                <span className={`badge badge-${f.ratingColor}`}>{f.rating}</span>
                <span className="badge" style={{ background: 'var(--bg-2)', color: 'var(--text-3)', border: '1px solid var(--border)', fontFamily: 'Geist Mono, monospace', fontSize: 11 }}>{f.npk}</span>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-2)', marginBottom: f.ratingColor !== 'red' ? 14 : 0 }}>{f.desc}</p>
            {f.ratingColor !== 'red' && (
              <div className="callout callout-green" style={{ fontSize: 13 }}>
                <strong>Dose:</strong> {f.dose}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Flush schedule */}
      <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Flush schedule</h2>
      <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>Salt builds up in Pon and LECA over time. Visible white crust on the substrate means it is overdue.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16, marginBottom: 48 }}>
        {[
          { when: 'First 2 weeks after transition', what: 'No fertilizer', why: 'The plant is adjusting. Adding nutrients too early stresses already-challenged roots.' },
          { when: 'Weeks 3 to 4', what: 'Quarter-strength dose', why: 'Start slow. Water roots are still developing and cannot uptake full doses yet.' },
          { when: 'Month 2 onward', what: 'Full dose, every watering', why: 'Established water roots handle full nutrition. Change the reservoir every 1 to 2 weeks.' },
          { when: 'Every 4 to 6 weeks', what: 'Plain water flush', why: 'Run pH-adjusted water through until it runs clear. Removes accumulated fertilizer salts.' },
        ].map((s, i) => (
          <div key={i} className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--accent)', marginBottom: 6 }}>{s.when}</p>
            <p style={{ fontWeight: 700, color: 'var(--text-1)', fontSize: 14, marginBottom: 6 }}>{s.what}</p>
            <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.55, margin: 0 }}>{s.why}</p>
          </div>
        ))}
      </div>

      <Link href="/fertilizer" className="btn btn-secondary">
        Read the full fertilizer guide
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  )
}
