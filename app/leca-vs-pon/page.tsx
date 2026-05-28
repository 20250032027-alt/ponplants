import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LECA vs Pon Full Comparison | PonPlants',
  description: 'A real side-by-side of LECA and Lechuza Pon for semi-hydro growers. Cost, moisture retention, root behavior, best plants for each, and when to mix them.',
}

const comparisonRows = [
  { trait: 'Material', leca: 'Expanded clay aggregate fired clay balls, 8 to 16mm', pon: 'Mineral blend of zeolite, pumice, and lava rock' },
  { trait: 'Moisture retention', leca: 'Lower wicks water up but dries faster between top-ups', pon: 'Higher stays damp longer without waterlogging' },
  { trait: 'Weight', leca: 'Light when dry, moderate when wet', pon: 'Consistently heavier than LECA' },
  { trait: 'Drainage speed', leca: 'Very fast air gap resets quickly', pon: 'Moderate stays damp for longer' },
  { trait: 'Nutrient retention', leca: 'Low fertilizer flushes through quickly', pon: 'Moderate zeolite holds some cations' },
  { trait: 'Root aeration', leca: 'Excellent large air pockets between the balls', pon: 'Good smaller pore size but still airy' },
  { trait: 'Reusability', leca: 'High rinse, sterilize, reuse indefinitely', pon: 'Lower degrades over a few years' },
  { trait: 'Cost', leca: 'Low available in bulk bags at most garden centres', pon: 'Higher Lechuza bags are expensive' },
  { trait: 'Salt buildup visibility', leca: 'Visible as white crust on the balls', pon: 'Less visible, but still accumulates' },
  { trait: 'Best plant matches', leca: 'Philodendron, Pothos, Monstera, Epipremnum', pon: 'Alocasia, Anthurium, Calathea, orchids' },
]

const myths = [
  {
    myth: 'You must soak LECA before using it',
    truth: 'Dry LECA wicks moisture upward through capillary action just fine. Soaking adds effort with no measurable benefit to root performance. High-upvote community threads have tested this repeatedly. Skip the soak.',
  },
  {
    myth: 'Pon is just overpriced gravel',
    truth: 'The zeolite component does hold a small number of cations, which gives Pon a slight nutrient-buffering advantage over pure aggregate. It is not dramatic, but it is not nothing. The price is the real objection, not the material itself.',
  },
  {
    myth: 'LECA roots always rot in the reservoir',
    truth: 'Roots rot in stagnant, oxygen-depleted water. If your reservoir is being refreshed regularly and has airspace above it, roots that grow into the water are generally healthy. The issue is anaerobic conditions, not the medium.',
  },
  {
    myth: 'You need a separate wicking layer at the bottom',
    truth: 'Capillary action works through the whole substrate uniformly. Adding a distinct wicking layer creates a compaction zone where roots can suffocate. Fill normally and let physics do the work.',
  },
]

export default function LecaVsPon() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
      {/* Header */}
      <div style={{ padding: '64px 0 48px', borderBottom: '1px solid #e7e3dc', marginBottom: 64 }}>
        <Link href="/" style={{ fontSize: 13, color: '#78716c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 24 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to home
        </Link>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a7c3f', marginBottom: 12 }}>
          126 posts each, zero clean comparisons found online
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1a16', letterSpacing: '-0.02em', marginBottom: 16 }}>
          LECA vs Pon the comparison nobody wrote
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#57534e', maxWidth: '65ch' }}>
          Both get mentioned constantly. Growers pick sides without much data. Here is a factual breakdown of what each medium actually does, so you can choose based on your plants and habits rather than forum opinions.
        </p>
      </div>

      {/* Two-col intro */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 64 }} className="two-col">
        {[
          {
            color: '#4a7c3f',
            title: 'LECA',
            body: 'Lightweight Expanded Clay Aggregate. Fired clay balls, typically 8 to 16mm. Cheap and widely available. Excellent aeration, lower moisture retention. Best for plants that tolerate dry-down periods. Reusable for years with proper cleaning.',
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><circle cx="12" cy="12" r="4"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/></svg>,
          },
          {
            color: '#5d8c3d',
            title: 'Lechuza Pon',
            body: 'A proprietary mineral blend of zeolite, pumice, and lava rock. Holds moisture longer than LECA and has some nutrient retention through its zeolite fraction. More expensive. Particularly popular for Alocasia, Anthurium, and Calathea.',
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z"/><path d="M8 12h8M12 8v8"/></svg>,
          },
        ].map((item, i) => (
          <div key={i} style={{ padding: '32px', borderRadius: 18, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              {item.icon}
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', fontWeight: 700, color: '#1c1a16', marginBottom: 10 }}>{item.title}</h2>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#57534e' }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>Side by side</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 28 }}>Neither medium is universally better. They suit different plants and different care habits.</p>
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid #e7e3dc', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ backgroundColor: '#1c1a16' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#a8a29e', fontWeight: 500, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Characteristic</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#7faa5b', fontWeight: 600, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' }}>LECA</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#a8c87a', fontWeight: 600, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Pon</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fafaf8' : '#f3f0eb', borderBottom: '1px solid #e7e3dc' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#1c1a16', whiteSpace: 'nowrap' }}>{row.trait}</td>
                  <td style={{ padding: '14px 20px', color: '#57534e', lineHeight: 1.5 }}>{row.leca}</td>
                  <td style={{ padding: '14px 20px', color: '#57534e', lineHeight: 1.5 }}>{row.pon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alocasia callout */}
      <div id="alocasia" style={{ marginBottom: 72, padding: '44px 48px', borderRadius: 20, backgroundColor: '#1c1a16', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-5%', top: '-30%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,124,63,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7faa5b', marginBottom: 14 }}>Alocasia specifically</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#f5f2ed', marginBottom: 16 }}>Why Pon keeps winning for Alocasia</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#8a8278', maxWidth: '62ch', marginBottom: 16 }}>
            The community data is consistent here. Growers report bigger leaves and faster growth in Pon than in LECA for the same plant. The most likely reason is moisture consistency. Alocasia want their roots slightly damp at all times. Pon holds enough moisture between top-ups that the roots never fully dry out, while LECA can swing too dry if the reservoir gets low.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#8a8278', maxWidth: '62ch' }}>
            LECA does work for Alocasia. One grower documented 90 days in LECA with leaf sizes double what the plant produced in soil and a new leaf every two weeks. But Pon is more forgiving if you are less consistent with watering frequency.
          </p>
        </div>
      </div>

      {/* Myths */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>Myths worth clearing up</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 32 }}>These four come up constantly and most of them are wrong.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {myths.map((m, i) => (
            <div key={i} style={{ padding: '28px', borderRadius: 16, border: '1px solid #e7e3dc', backgroundColor: '#fafaf8' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                <div style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#b91c1c', margin: 0, lineHeight: 1.4 }}>Myth: {m.myth}</p>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: '#57534e', paddingLeft: 32, margin: 0 }}>{m.truth}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mixing section */}
      <div style={{ padding: '40px', borderRadius: 20, backgroundColor: '#f3f0eb', border: '1px solid #dedad3', marginBottom: 56 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1c1a16', marginBottom: 14 }}>When to mix the two</h2>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: '#57534e', maxWidth: '65ch', marginBottom: 14 }}>
          Adding perlite or LECA to Pon is common practice for stretching a supply without killing performance. A ratio of roughly two parts Pon to one part LECA works well. The LECA adds air pockets and reduces density, while the Pon keeps moisture retention high enough for thirsty plants.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: '#57534e', maxWidth: '65ch', margin: 0 }}>
          For Lechuza planters, mixing is especially practical because the included Pon bags rarely fill larger vessels. Keeping Pon in the upper root zone and LECA below is a sensible approach that many growers use without issue.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/tools" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#4a7c3f', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Reservoir Calculator</Link>
        <Link href="/transition" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Soil transition guide</Link>
      </div>

      <style>{`@media (max-width: 700px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
