import Link from 'next/link'
import type { Metadata } from 'next'
import VideoEmbed from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Pothos in LECA and Semi-Hydro',
  description: 'How to grow Pothos and Epipremnum in LECA. Reservoir levels, fertilizer doses, propagation, common problems, and variety-specific notes from the grower community.',
}

export default function PothosPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">Plant guide</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Pothos in LECA
        </h1>
        <p className="prose">
          Pothos is probably the easiest plant to start with in semi-hydro. It roots aggressively, forgives inconsistent watering, and adapts to LECA faster than most things you could put in it. If you are new to this and want to practice before trying something more expensive, start here.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="content-grid">
        <div>
          {/* Care card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginBottom: 52 }}>
            {[
              { label: 'Best substrate', value: 'LECA', detail: 'Pon works too but LECA is cheaper and fine here' },
              { label: 'Reservoir depth', value: '18 to 22%', detail: 'of pot height' },
              { label: 'Air gap', value: '2cm minimum', detail: 'above water line' },
              { label: 'Fertilizer', value: '1/8 tsp per gallon', detail: 'Foliage Pro, every watering' },
              { label: 'Propagation', value: 'Very easy', detail: 'nodes root in water in 1 to 2 weeks' },
              { label: 'Salt sensitivity', value: 'Moderate', detail: 'flush every 5 to 6 weeks' },
            ].map((item, i) => (
              <div key={i} className="card-sm">
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 6 }}>{item.label}</p>
                <p className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 2 }}>{item.value}</p>
                <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Why LECA suits Pothos */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Why Pothos does well in LECA</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Pothos are naturally tolerant of drought. In soil, they can sit dry for two weeks and mostly recover. That same tolerance makes them good candidates for LECA, which cycles between wet and drier more dramatically than Pon does. They are not going to panic if the reservoir runs low for a day or two.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Their root systems also adapt fast. Water roots appear within 10 to 14 days of transitioning from soil, which is quicker than most plants. And unlike Alocasia, Pothos rarely drop leaves during transition. The plant just quietly gets on with growing new roots while the old ones die back.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>
              Growth rate in LECA tends to be visibly faster than in soil once established. Growers consistently report longer vines and larger leaves within two months, particularly under decent light. Light is still the main driver. LECA does not compensate for a dark corner.
            </p>
          </section>

          {/* Getting started */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Getting started</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 20 }}>
              There are two ways to get a Pothos into LECA. The propagation route is easier and causes less stress. The bare root transition works fine too, especially for an established plant.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }} className="two-col">
              <div className="card">
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: 12 }}>From a cutting (easiest)</h3>
                <ol className="step-list">
                  {[
                    'Cut a stem with at least one node and one leaf.',
                    'Place in plain water until roots are 3 to 5cm long. Usually 10 to 14 days.',
                    'Move directly into LECA with a 2cm reservoir. No transition period needed.',
                    'Start quarter-strength fertilizer after one week.',
                  ].map((s, i) => (
                    <li key={i} className="step-item">
                      <div className="step-num">{i + 1}</div>
                      <span className="step-text">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="card">
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: 12 }}>From an established soil plant</h3>
                <ol className="step-list">
                  {[
                    'Remove from pot and shake off all loose soil.',
                    'Rinse roots under room-temperature water until clean.',
                    'Trim any brown or mushy roots.',
                    'Pot into LECA with a small reservoir. No need to let roots dry first.',
                    'Hold off on fertilizer for two weeks.',
                  ].map((s, i) => (
                    <li key={i} className="step-item">
                      <div className="step-num">{i + 1}</div>
                      <span className="step-text">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="callout callout-green">
              Water roots and LECA coexist well for Pothos. Unlike some other plants, you do not need to wait for dedicated LECA roots before the plant starts performing.
            </div>
          </section>

          {/* Reservoir */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Reservoir and watering</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Keep the reservoir at around 20% of the pot height. For a standard 15cm pot that is about 3cm of water. Let it drop to nearly empty before refilling, rather than topping it off constantly. The dry period lets roots access oxygen, which is what prevents rot.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>
              A healthy Pothos in a 15cm pot will typically drain the reservoir in 5 to 10 days depending on light, temperature, and humidity. If it drains in under two days, the pot is likely too small for the root mass and it is time to size up.
            </p>
          </section>

          {/* Fertilizer */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Fertilizer</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Pothos are lighter feeders than Alocasia or Anthurium. Use 1/8 teaspoon of Dyna-Gro Foliage Pro per gallon of water, every time you refill the reservoir. That is half the dose most other semi-hydro plants need.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Brown leaf tips are the first sign of overfeeding. If you see tips browning and the roots smell fine, cut the dose to 1/16 teaspoon and flush the LECA with plain water before the next refill.
            </p>
            <div className="callout callout-amber">
              Pothos are more sensitive to fluoride than most plants. If you have hard tap water and are getting persistent brown tips despite low fertilizer doses, try switching to filtered or distilled water.
            </div>
          </section>

          {/* Varieties */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Variety notes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Golden Pothos (Epipremnum aureum)', note: 'The most forgiving. Handles lower light and inconsistent watering better than any other variety. Good first LECA plant.' },
                { name: 'Marble Queen', note: 'Grows slower than Golden because of the variegation. Keep fertilizer doses on the lighter side since variegated tissue is more sensitive to salt buildup.' },
                { name: 'Neon Pothos', note: 'Same care as Golden. The bright yellow-green color gets more vivid under strong light, which LECA growth generally supports since the plant is healthier overall.' },
                { name: 'Manjula / Pearls and Jade', note: 'Slower and slightly more sensitive than standard Pothos. Worth the patience. The leaf pattern becomes more defined as the plant matures in a stable semi-hydro setup.' },
                { name: 'Cebu Blue', note: 'Technically an Epipremnum pinnatum rather than aureum, but behaves identically in LECA. One of the faster growers of the group.' },
              ].map((v, i) => (
                <div key={i} className="card-sm" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-1)', marginBottom: 4 }}>{v.name}</h3>
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text-2)', margin: 0 }}>{v.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Troubleshooting */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Common problems</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  problem: 'Brown leaf tips',
                  cause: 'Usually overfeeding or fluoride in tap water.',
                  fix: 'Cut fertilizer dose to 1/16 tsp per gallon. Flush with filtered water. If tips keep browning after that, check that the reservoir is not sitting too high and cutting off airspace.',
                },
                {
                  problem: 'Yellow leaves',
                  cause: 'If only lower, older leaves are yellowing, that is normal aging. If new leaves are yellowing, it is usually a nitrogen deficiency from underfeeding or a pH issue blocking uptake.',
                  fix: 'Check you are using a complete hydroponic fertilizer, not a soil blend. Test water pH. It should be between 5.5 and 6.5.',
                },
                {
                  problem: 'Roots congested and pot hard to water',
                  cause: 'Pothos fill pots fast. A plant that seemed fine six months ago can be completely root-bound now.',
                  fix: 'Repot into a vessel one size up. LECA makes this easy since you can just rinse and reuse the old substrate.',
                },
                {
                  problem: 'Slow growth despite good light',
                  cause: 'Almost always either temperature or fertilizer. Pothos slow down significantly below 18 degrees C.',
                  fix: 'Move to a warmer spot and confirm you are feeding every watering, not just occasionally.',
                },
                {
                  problem: 'Roots growing above the substrate',
                  cause: 'The plant is looking for more moisture. It usually means the reservoir is running too low or the ambient humidity is very dry.',
                  fix: 'Refill the reservoir more frequently or tuck the aerial roots back into the LECA. They will establish there.',
                },
              ].map((item, i) => (
                <div key={i} className="card">
                  <h3 style={{ fontWeight: 700, color: 'var(--text-1)', fontSize: '0.95rem', marginBottom: 8 }}>{item.problem}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 10, lineHeight: 1.6 }}>{item.cause}</p>
                  <div className="callout callout-green" style={{ fontSize: 13 }}>
                    <strong>Fix:</strong> {item.fix}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video */}
          <section>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Watch instead of read</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>
              A good practical overview of the LECA basics that apply to Pothos and most other beginner-friendly plants.
            </p>
            <VideoEmbed
              videoId="uuXVajqbRC0"
              title="LECA Basics for Beginners / LECA 101 Semi Hydroponics"
              creator="Chris"
              channel="Pretty in Green"
              note="Covers setup, reservoir depth, and getting started"
            />
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Tools</p>
            <Link href="/tools/reservoir" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}>Reservoir Calculator</Link>
            <Link href="/tools/fertilizer-chart" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Fertilizer Chart</Link>
          </div>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Related guides</p>
            {[
              { href: '/leca-vs-pon',   label: 'LECA vs Pon' },
              { href: '/transition',    label: 'Soil transition' },
              { href: '/fertilizer',    label: 'Fertilizer dosing' },
              { href: '/plants/monstera', label: 'Monstera guide' },
            ].map((l, i, arr) => (
              <Link key={i} href={l.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', textDecoration: 'none', color: 'var(--text-2)', fontSize: 14, fontWeight: 500 }}>
                {l.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .content-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
