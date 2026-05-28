import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fertilizer and Nutrient Dosing for Semi-Hydro | PonPlants',
  description: 'What fertilizer to use in LECA and Pon, how much, when to start, when to flush, and why soil fertilizers fail in semi-hydro.',
}

const nutrients = [
  { name: 'Nitrogen (N)', role: 'Leaf and stem growth', deficiency: 'Yellowing starting in older leaves', excess: 'Dark green leaves, weak stems, root burn' },
  { name: 'Phosphorus (P)', role: 'Root development, energy transfer', deficiency: 'Purple tint on leaves, poor root growth', excess: 'Blocks uptake of zinc and iron' },
  { name: 'Potassium (K)', role: 'Water regulation, disease resistance', deficiency: 'Brown leaf edges, wilting', excess: 'Salt buildup, blocks calcium and magnesium' },
  { name: 'Calcium (Ca)', role: 'Cell wall strength', deficiency: 'Distorted new growth, brown tips on young leaves', excess: 'Blocks magnesium and iron uptake' },
  { name: 'Magnesium (Mg)', role: 'Chlorophyll production', deficiency: 'Interveinal yellowing on older leaves', excess: 'Rare usually washed out in semi-hydro' },
  { name: 'Iron (Fe)', role: 'Chlorophyll synthesis', deficiency: 'Yellowing between veins on new growth', excess: 'Very rare in semi-hydro conditions' },
]

const fertilizers = [
  {
    name: 'Dyna-Gro Foliage Pro (or Superthrive rebranded)',
    npk: '9-3-6',
    type: 'Complete liquid concentrate',
    notes: 'The community favorite. Contains all 16 essential nutrients including calcium and magnesium. No supplements needed. Note: Superthrive bought Dyna-Gro Foliage Pro the label may say either name depending on stock, but the formula is identical.',
    dose: '1/4 to 1/2 teaspoon per gallon of water. Use every watering.',
    rating: 5,
  },
  {
    name: 'Masterblend 4-18-38 (hydroponic three-part)',
    npk: '4-18-38 + calcium nitrate + magnesium sulfate',
    type: 'Dry concentrate, three-part mix',
    notes: 'Extremely cost-effective for large collections. The standard ratio is 2.5g Masterblend plus 2.5g calcium nitrate plus 1.25g Epsom salt per 4 litres. Requires accurate measuring.',
    dose: '2.5g Masterblend + 2.5g calcium nitrate + 1.25g Epsom salt per 4L',
    rating: 4,
  },
  {
    name: 'Houseplant Focus Hydroponic',
    npk: '3-2-6 (liquid)',
    type: 'Ready-to-use concentrate',
    notes: 'Popular in the UK community. One UK-based grower documented excellent results with this combined with a Soil Ninja substrate. Straightforward to use, good availability.',
    dose: '5ml per litre of water. Use every watering.',
    rating: 4,
  },
  {
    name: 'Typical soil fertilizers',
    npk: 'Varies',
    type: 'NOT recommended',
    notes: 'Most soil fertilizers assume the plant is getting baseline micronutrients from soil biology. They leave out calcium, magnesium, and trace elements. Using them in semi-hydro leads to deficiencies quickly. One community member explained: "For semi-hydro it is best to use a fertilizer that states it has all the nutrients on the label."',
    dose: 'Not recommended',
    rating: 1,
  },
]

const scheduleItems = [
  { phase: 'First two weeks after transition', action: 'No fertilizer at all', reason: 'The plant is adjusting to the new medium. Adding nutrients too early stresses already-challenged roots.' },
  { phase: 'Weeks 3 to 4 (once roots are visible)', action: 'Quarter-strength dose', reason: 'Start slow. The plant is still developing its water root system and cannot uptake full doses yet.' },
  { phase: 'Month 2 onward', action: 'Half to full dose with every reservoir change', reason: 'Established water roots can handle full nutrition. Change the reservoir weekly to biweekly rather than letting it drain completely.' },
  { phase: 'Every 4 to 6 weeks', action: 'Flush with plain water', reason: 'Salt from fertilizer accumulates in Pon and LECA. Visible white crust on the substrate is salt buildup. Run plain water through until it runs clear.' },
]

export default function Fertilizer() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
      {/* Header */}
      <div style={{ padding: '64px 0 48px', borderBottom: '1px solid #e7e3dc', marginBottom: 64 }}>
        <Link href="/" style={{ fontSize: 13, color: '#78716c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 24 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to home
        </Link>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cc743b', marginBottom: 12 }}>
          19 posts about nutrients, no dosing chart anywhere
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1a16', letterSpacing: '-0.02em', marginBottom: 16 }}>
          Fertilizer and nutrient dosing
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#57534e', maxWidth: '65ch' }}>
          Semi-hydro skips the soil biology that normally buffers and supplies nutrients. That makes fertilizer non-optional rather than a bonus. Here is what to use, how much, and when.
        </p>
      </div>

      {/* Why soil ferts fail */}
      <div style={{ padding: '36px 40px', borderRadius: 20, backgroundColor: '#fff7ed', border: '1px solid #fed7aa', marginBottom: 64 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#c2410c', marginBottom: 14 }}>Why soil fertilizers do not work in semi-hydro</h2>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: '#9a3412', maxWidth: '65ch', margin: 0 }}>
          Soil fertilizers are formulated assuming the plant is already receiving calcium, magnesium, and trace elements from soil biology. They typically skip these entirely. In LECA or Pon, there is no soil biology. The plant depends entirely on what you add to the water. Using a standard NPK soil fertilizer leads to visible deficiencies within weeks. Use a fertilizer labeled as complete or hydroponic, with all 16 essential nutrients listed.
        </p>
      </div>

      {/* Nutrient table */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>What each nutrient does</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 28 }}>Semi-hydro deficiencies look different from soil deficiencies because they develop faster. Knowing what to look for saves the plant.</p>
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid #e7e3dc', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ backgroundColor: '#1c1a16' }}>
                {['Nutrient', 'Role', 'Deficiency signs', 'Excess signs'].map((h, i) => (
                  <th key={i} style={{ padding: '14px 20px', textAlign: 'left', color: i === 0 ? '#a8a29e' : '#d6d1ca', fontWeight: 500, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nutrients.map((n, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fafaf8' : '#f3f0eb', borderBottom: '1px solid #e7e3dc' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 700, color: '#1c1a16' }}>{n.name}</td>
                  <td style={{ padding: '14px 20px', color: '#57534e', lineHeight: 1.5 }}>{n.role}</td>
                  <td style={{ padding: '14px 20px', color: '#b45309', lineHeight: 1.5 }}>{n.deficiency}</td>
                  <td style={{ padding: '14px 20px', color: '#b91c1c', lineHeight: 1.5 }}>{n.excess}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fertilizer comparison */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>What to use</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 36 }}>These are the fertilizers that come up repeatedly in the community with actual results behind them.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {fertilizers.map((f, i) => (
            <div key={i} style={{ padding: '32px', borderRadius: 18, border: `2px solid ${f.rating === 5 ? '#4a7c3f' : f.rating === 1 ? '#ef4444' : '#e7e3dc'}`, backgroundColor: '#fafaf8' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 16 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: '#1c1a16', margin: 0 }}>{f.name}</h3>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, backgroundColor: '#f3f0eb', color: '#57534e', fontFamily: 'DM Mono, monospace' }}>{f.npk}</span>
                  <span style={{ padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, backgroundColor: f.rating === 1 ? '#fee2e2' : '#f0fdf4', color: f.rating === 1 ? '#b91c1c' : '#15803d' }}>
                    {f.rating === 5 ? 'Community favorite' : f.rating === 1 ? 'Not recommended' : 'Recommended'}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#57534e', marginBottom: 16 }}>{f.notes}</p>
              {f.dose !== 'Not recommended' && (
                <div style={{ padding: '12px 16px', borderRadius: 10, backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Dose</span>
                  <p style={{ fontSize: 13, color: '#14532d', margin: '4px 0 0', fontFamily: 'DM Mono, monospace', lineHeight: 1.5 }}>{f.dose}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Schedule */}
      <div id="flushing" style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>Dosing schedule</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 32 }}>When to start, how often, and when to flush. Simple.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {scheduleItems.map((item, i) => (
            <div key={i} style={{ padding: '24px', borderRadius: 16, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a7c3f', marginBottom: 10 }}>{item.phase}</p>
              <p style={{ fontWeight: 700, color: '#1c1a16', fontSize: 14, marginBottom: 8 }}>{item.action}</p>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: '#78716c', margin: 0 }}>{item.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* pH note */}
      <div style={{ padding: '36px 40px', borderRadius: 20, backgroundColor: '#1c1a16', marginBottom: 56, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-5%', top: '-20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,124,63,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#f5f2ed', marginBottom: 14 }}>pH matters more in semi-hydro than in soil</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#8a8278', maxWidth: '62ch', margin: 0 }}>
            Most nutrients become unavailable to roots outside the pH range of 5.5 to 6.5. Tap water is often above 7.0. If your plant is showing deficiency symptoms despite regular fertilizing, pH is the first thing to check. A simple liquid pH test kit costs a few dollars and will tell you more than switching fertilizers will.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/tools" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#4a7c3f', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Reservoir Calculator</Link>
        <Link href="/root-rot" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Root rot diagnosis</Link>
      </div>
    </div>
  )
}
