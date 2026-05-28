import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pothos in LECA Care Guide | PonPlants',
  description: 'How to grow Pothos and Epipremnum in LECA and semi-hydro. Reservoir levels, fertilizer, propagation in water, and common problems.',
}

export default function PothosPage() {
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
          Pothos in LECA
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#57534e', maxWidth: '65ch' }}>
          Pothos is among the easiest plants to transition to semi-hydro. It roots aggressively in water and adapts quickly to LECA. The main thing to watch is overfeeding Pothos is a lighter feeder than most semi-hydro plants.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 64 }}>
        {[
          { label: 'Best substrate', value: 'LECA', detail: 'Pon also works fine' },
          { label: 'Reservoir depth', value: '18 to 22%', detail: 'of pot height' },
          { label: 'Water line', value: '2cm', detail: 'below substrate base' },
          { label: 'Fertilizer', value: '1/8 tsp / gal', detail: 'Foliage Pro, every watering' },
          { label: 'Propagation', value: 'Easy', detail: 'nodes root in water in 1 to 2 weeks' },
          { label: 'Difficulty', value: 'Low', detail: 'tolerates minor mistakes well' },
        ].map((item, i) => (
          <div key={i} style={{ padding: '20px 22px', borderRadius: 14, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de' }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#78716c', marginBottom: 6 }}>{item.label}</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1c1a16', marginBottom: 2 }}>{item.value}</p>
            <p style={{ fontSize: 12, color: '#a8a29e', margin: 0 }}>{item.detail}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 64 }} className="two-col">
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1c1a16', marginBottom: 16 }}>Getting started</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#57534e', marginBottom: 14 }}>
            Pothos nodes root extremely readily in water. The easiest path to a LECA-grown Pothos is to take a cutting with a visible node, place it in water until roots are 3 to 5cm long, then move directly to LECA without a bare-root phase. Water roots and LECA coexist well for Pothos.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#57534e', margin: 0 }}>
            For an established soil plant, the bare root rinse works fine. Pothos is forgiving with root disturbance. Rinse thoroughly, trim any brown or mushy roots, and pot directly into LECA with a small initial reservoir.
          </p>
        </div>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1c1a16', marginBottom: 16 }}>Common problems</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { issue: 'Brown leaf tips', cause: 'Usually overfeeding or fluoride in tap water. Cut dose to 1/8 tsp per gallon and switch to filtered water.' },
              { issue: 'Root congestion', cause: 'Pothos roots fill pots quickly. Check every 6 months and size up before roots become tightly packed.' },
              { issue: 'Yellowing leaves', cause: 'Often overwatering in the transition phase. Ensure the air gap above the reservoir is 2cm minimum.' },
              { issue: 'Slow growth', cause: 'Usually a light issue, not a substrate issue. Pothos grows slowly in low light regardless of medium.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '14px 18px', borderRadius: 12, backgroundColor: '#fafaf8', border: '1px solid #e7e3dc' }}>
                <p style={{ fontWeight: 700, color: '#1c1a16', fontSize: 13, marginBottom: 4 }}>{item.issue}</p>
                <p style={{ fontSize: 13, color: '#78716c', lineHeight: 1.5, margin: 0 }}>{item.cause}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/tools" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#4a7c3f', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Reservoir Calculator</Link>
        <Link href="/leca-vs-pon" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>LECA vs Pon comparison</Link>
      </div>

      <style>{`@media (max-width: 700px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
