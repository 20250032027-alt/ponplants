import Link from 'next/link'
import type { Metadata } from 'next'
import VideoEmbed from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Monstera in Semi-Hydro: LECA and Pon Guide',
  description: 'Growing Monstera deliciosa, Thai Constellation, and Adansonii in LECA and Pon. Aerial roots, fenestration, reservoir levels, fertilizer, and variety-specific notes.',
}

export default function MonsteraPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">Plant guide</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Monstera in semi-hydro
        </h1>
        <p className="prose">
          Monstera in LECA or Pon tend to produce larger, more fenestrated leaves than the same plant in soil. The aerial root system adapts readily. The main thing to plan for is size, these plants grow fast once established, and they need space for both roots and substrate.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="content-grid">
        <div>
          {/* Care card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginBottom: 52 }}>
            {[
              { label: 'Best substrate',   value: 'LECA or Pon',     detail: 'Both work well. See varietyty notes below' },
              { label: 'Reservoir depth',  value: '20 to 25%',       detail: 'of pot height' },
              { label: 'Air gap',          value: '2 to 3cm',        detail: 'above water line' },
              { label: 'Fertilizer',       value: '1/4 tsp per gallon', detail: 'Foliage Pro, every watering' },
              { label: 'Aerial roots',     value: 'Leave or tuck in', detail: 'both approaches work fine' },
              { label: 'Repot frequency',  value: 'Every 6 to 12 months', detail: 'roots fill pots fast here' },
            ].map((item, i) => (
              <div key={i} className="card-sm">
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 6 }}>{item.label}</p>
                <p className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 2 }}>{item.value}</p>
                <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Why it works */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>What semi-hydro actually does for Monstera</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              The fenestration increase is real and growers report it consistently. The reason is probably nutrient availability. In soil, nutrients are available in pulses between waterings. In LECA or Pon with a properly dosed reservoir, the plant has continuous access. Larger leaves with more splits follow from that stability, not from anything magical about the medium itself.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Light is still the main fenestration driver. A Monstera in LECA in a dark corner will produce small, uncut leaves just as it would in soil. Semi-hydro does not compensate for bad placement.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>
              Root mass development is dramatic. Growers who repot after six months are often surprised by how much root has developed compared to what they were used to seeing in soil. That gap is part of why LECA and Pon both work for Monstera, the plant roots aggressively enough that it does not need the moisture-holding advantage that Pon provides for more sensitive plants like Alocasia.
            </p>
          </section>

          {/* Aerial roots */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>What to do with aerial roots</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Monstera aerial roots are opportunistic. If you give them a path to the reservoir, they will find it. Roots in the water are healthy as long as the reservoir is refreshed regularly. Several growers direct aerial roots straight into the reservoir and report noticeably faster growth as a result.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              You can also tuck aerial roots into the substrate. They will establish in the LECA and become part of the normal root system. Alternatively, just leave them to hang. The plant does not require any intervention on aerial roots to thrive.
            </p>
            <div className="callout callout-amber">
              Aerial roots that go brown and crispy are usually a humidity or airflow problem, not a substrate problem. If a vent or fan is blowing directly on the plant, that is probably the cause.
            </div>
          </section>

          {/* Varieties */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Variety notes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                {
                  name: 'Monstera deliciosa',
                  substrate: 'LECA or Pon',
                  note: 'The most forgiving variety and the most common in semi-hydro setups. Root systems get large fast. Plan for a 20cm or larger pot from the start, or expect to repot within six months. LECA is the more cost-effective choice here since you need a lot of substrate.',
                },
                {
                  name: 'Monstera Thai Constellation',
                  substrate: 'Pon preferred',
                  note: 'Grows more slowly than standard deliciosa because the variegated sections have less chlorophyll. The reduced growth rate actually makes semi-hydro easier to manage since you are not repotting constantly. Keep fertilizer at half dose, variegated tissue is more sensitive to salt than all-green leaves.',
                },
                {
                  name: 'Monstera adansonii',
                  substrate: 'LECA',
                  note: 'Smaller root system than deliciosa, faster to fill a pot. The fenestration increase in semi-hydro is particularly visible with adansonii. The holes are more pronounced and appear on smaller leaves than you would typically see in soil. Prefers slightly higher humidity.',
                },
                {
                  name: 'Monstera pinnatipartita',
                  substrate: 'Pon',
                  note: 'Less documented in the community but reported to perform well. Treat similarly to deliciosa. The leaf splits are deeper and more dramatic than on adansonii, and consistent nutrition from semi-hydro appears to bring that out faster.',
                },
                {
                  name: 'Monstera dubia',
                  substrate: 'LECA',
                  note: 'A shingling Monstera, meaning it grows flat against a surface. LECA works well here because it is easy to attach a board or bark panel to a pot without the mess of soil. Keep the pot small since the plant prioritizes climbing over root mass.',
                },
              ].map((v, i) => (
                <div key={i} className="card" style={{ borderColor: 'var(--border)' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 10 }}>
                    <h3 className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', margin: 0 }}>{v.name}</h3>
                    <span className="badge badge-green" style={{ fontSize: 11 }}>{v.substrate}</span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', margin: 0 }}>{v.note}</p>
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
                  problem: 'Yellow lower leaves',
                  cause: 'Normal aging on the oldest leaves. If yellowing is widespread across multiple growth stages, check nitrogen. A soil fertilizer will not have enough.',
                  fix: 'Confirm you are using a complete hydroponic fertilizer with all 16 nutrients. Dyna-Gro Foliage Pro at 1/4 tsp per gallon handles this.',
                },
                {
                  problem: 'No new growth after 6 weeks',
                  cause: 'Almost always light or temperature. The plant is not failing, it is just not being triggered to grow.',
                  fix: 'Move to a brighter spot. Monstera in semi-hydro typically push a new leaf every 3 to 4 weeks in good light. If light is already bright, check that the temperature is not below 18 degrees C.',
                },
                {
                  problem: 'Roots pushing out of drainage holes',
                  cause: 'The pot is too small. This happens faster in semi-hydro than soil.',
                  fix: 'Repot into a pot 3 to 5cm larger. A plant that has run out of room will slow down and start looking unwell regardless of how good the nutrient supply is.',
                },
                {
                  problem: 'Leaves not fenestrating',
                  cause: 'Light is the main variable. Young plants also do not fenestrate regardless of conditions.',
                  fix: 'Move to brighter indirect light. Plants smaller than about 30cm typically will not produce split leaves no matter what you do.',
                },
                {
                  problem: 'Salt crust visible on LECA',
                  cause: 'Fertilizer buildup from not flushing regularly.',
                  fix: 'Flush with plain pH-adjusted water until it runs clear. Then flush once every 4 to 5 weeks going forward. Monstera are not particularly salt-sensitive but buildup does eventually cause tip burn.',
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
              A walkthrough of semi-hydro setup that applies directly to Monstera: substrate prep, reservoir depth, and the first few weeks.
            </p>
            <VideoEmbed
              videoId="OBYoPWNkDA8"
              title="Semi-Hydro Tutorial: Grow More Plants With Less Effort"
              creator="Pretty in Green"
              channel="YouTube"
              note="Setup walkthrough applicable to Monstera and most aroids"
            />
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Tools</p>
            <Link href="/tools/reservoir" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}>Reservoir Calculator</Link>
            <Link href="/tools/root-rot-checker" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Root Rot Checker</Link>
          </div>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Related guides</p>
            {[
              { href: '/leca-vs-pon',     label: 'LECA vs Pon' },
              { href: '/transition',      label: 'Soil transition' },
              { href: '/fertilizer',      label: 'Fertilizer dosing' },
              { href: '/plants/alocasia', label: 'Alocasia guide' },
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
      `}</style>
    </div>
  )
}
