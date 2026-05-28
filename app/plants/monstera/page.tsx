import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monstera in Pon Care Guide | PonPlants',
  description: 'Growing Monstera deliciosa, Thai Constellation, and Adansonii in LECA and Pon. Fenestration, reservoir levels, fertilizer, and aerial root handling.',
}

export default function MonsteraPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
      <div style={{ padding: '64px 0 48px', borderBottom: '1px solid #e7e3dc', marginBottom: 64 }}>
        <Link href="/" style={{ fontSize: 13, color: '#78716c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 24 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to home
        </Link>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a7c3f', marginBottom: 12 }}>
          Plant guide
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1a16', letterSpacing: '-0.02em', marginBottom: 16 }}>
          Monstera in Pon
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#57534e', maxWidth: '65ch' }}>
          Monstera in semi-hydro tend to produce larger leaves with more fenestration than their soil counterparts. The aerial root system adapts readily. The main challenge is managing a plant that can grow very large very fast.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 64 }}>
        {[
          { label: 'Best substrate', value: 'LECA or Pon', detail: 'Both work well preference varies' },
          { label: 'Reservoir depth', value: '20 to 25%', detail: 'of pot height' },
          { label: 'Water line', value: '2 to 3cm', detail: 'below substrate base' },
          { label: 'Fertilizer', value: '1/4 tsp / gal', detail: 'Foliage Pro, every watering' },
          { label: 'Aerial roots', value: 'Direct to reservoir', detail: 'or tuck into substrate' },
          { label: 'Difficulty', value: 'Low to medium', detail: 'forgiving but needs space' },
        ].map((item, i) => (
          <div key={i} style={{ padding: '20px 22px', borderRadius: 14, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de' }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#78716c', marginBottom: 6 }}>{item.label}</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1c1a16', marginBottom: 2 }}>{item.value}</p>
            <p style={{ fontSize: 12, color: '#a8a29e', margin: 0 }}>{item.detail}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 64 }} className="two-col">
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1c1a16', marginBottom: 16 }}>Aerial roots and the reservoir</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#57534e', marginBottom: 14 }}>
            Monstera aerial roots are opportunistic. They will find the reservoir if given a path to it, and roots that grow directly into water are perfectly healthy as long as the water is oxygenated by regular refreshing. Many growers direct one or two aerial roots into the reservoir and see accelerated growth as a result.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#57534e', margin: 0 }}>
            Aerial roots that dangle in air can be tucked into the substrate, wrapped around a moss pole, or left to hang freely. All three approaches work. The plant does not require aerial root intervention to thrive.
          </p>
        </div>

        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1c1a16', marginBottom: 16 }}>Fenestration in semi-hydro</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#57534e', marginBottom: 14 }}>
            Community growers consistently report larger leaves with more developed holes in Monstera grown in semi-hydro compared to soil. The most likely reason is consistent nutrient availability. In soil, nutrients deplete between feedings. In LECA or Pon with a properly dosed reservoir, the plant has continuous access to what it needs.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#57534e', margin: 0 }}>
            Light is still the primary driver of fenestration. Semi-hydro does not compensate for low light. A Monstera in LECA in a dark corner will produce small, less fenestrated leaves just as it would in soil.
          </p>
        </div>
      </div>

      {/* Varieties */}
      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>Variety notes</h2>
        <p style={{ fontSize: 14, color: '#78716c', marginBottom: 28 }}>Most Monstera adapt similarly, with a few differences worth knowing.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {[
            {
              name: 'Monstera deliciosa',
              note: 'The most forgiving variety. Large root systems develop quickly. Plan for a large pot early a 20cm pot becomes root-bound faster than you expect.',
              substrate: 'LECA or Pon',
            },
            {
              name: 'Monstera Thai Constellation',
              note: 'Grows more slowly than standard deliciosa due to reduced chlorophyll in variegated sections. Otherwise the same care. Avoid high fertilizer concentrations the variegated tissue is more sensitive to salt.',
              substrate: 'Pon preferred',
            },
            {
              name: 'Monstera adansonii',
              note: 'Smaller root system, faster to fill a pot. Responds very well to semi-hydro the fenestration increase is particularly noticeable. Prefers slightly higher humidity than standard deliciosa.',
              substrate: 'LECA works well',
            },
            {
              name: 'Monstera pinnatipartita',
              note: 'Less common in the community database but reported to perform well in Pon. Treat similarly to deliciosa with slightly higher humidity targets.',
              substrate: 'Pon',
            },
          ].map((v, i) => (
            <div key={i} style={{ padding: '26px', borderRadius: 16, border: '1px solid #e7e3dc', backgroundColor: '#fafaf8' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#1c1a16', marginBottom: 8 }}>{v.name}</h3>
              <span style={{ display: 'inline-block', marginBottom: 12, padding: '3px 10px', borderRadius: 999, backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', fontSize: 12, fontWeight: 600 }}>{v.substrate}</span>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: '#57534e', margin: 0 }}>{v.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Common problems */}
      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 700, color: '#1c1a16', marginBottom: 28 }}>Common problems</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { issue: 'Yellowing lower leaves', cause: 'Normal aging on mature lower leaves. If the yellowing is widespread across the plant, check nitrogen levels and confirm your fertilizer contains all 16 nutrients.' },
            { issue: 'Roots pushing out of drainage holes', cause: 'The pot is too small. Monstera outgrow pots faster in semi-hydro than in soil. Size up when roots are clearly congested.' },
            { issue: 'No new growth after 6 weeks', cause: 'Check light levels first. Then check fertilizer. If both are adequate, the plant may still be establishing its water root system. Wait until week 8 before intervening.' },
            { issue: 'Aerial roots going brown and crispy', cause: 'Low humidity or direct airflow from a fan or vent. Tuck them into substrate or mist them occasionally. They are not critical to the plant\'s health if they die back.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '20px 24px', borderRadius: 14, border: '1px solid #e7e3dc', backgroundColor: '#fafaf8', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, alignItems: 'center' }} className="problem-row">
              <p style={{ fontWeight: 700, color: '#1c1a16', fontSize: 14, margin: 0 }}>{item.issue}</p>
              <p style={{ fontSize: 14, color: '#57534e', lineHeight: 1.6, margin: 0 }}>{item.cause}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/tools" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#4a7c3f', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Reservoir Calculator</Link>
        <Link href="/fertilizer" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Fertilizer guide</Link>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .two-col { grid-template-columns: 1fr !important; }
          .problem-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
