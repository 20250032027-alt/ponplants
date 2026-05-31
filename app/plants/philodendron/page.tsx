import Link from 'next/link'
import type { Metadata } from 'next'
import VideoEmbed from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Philodendron in Semi-Hydro: LECA and Pon Guide',
  description: 'Growing Philodendron in LECA and Pon. Covers vining vs non-vining types, reservoir levels, fertilizer, common problems, and variety-specific notes for semi-hydro growers.',
}

export default function PhilodendronPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">Plant guide</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Philodendron in semi-hydro
        </h1>
        <p className="prose">
          Philodendron is one of the more reliable semi-hydro plants. Both vining types like Brasil and Heartleaf, and non-vining types like Gloriosum and Melanochrysum, do well in LECA. The main difference between types is how you need to handle their root systems and pot sizing.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="content-grid">
        <div>
          {/* Care card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginBottom: 52 }}>
            {[
              { label: 'Best substrate',  value: 'LECA',              detail: 'Pon works but LECA is the common choice' },
              { label: 'Reservoir depth', value: '18 to 22%',         detail: 'of pot height' },
              { label: 'Air gap',         value: '2cm minimum',       detail: 'above water line' },
              { label: 'Fertilizer',      value: '1/4 tsp per gallon',detail: 'Foliage Pro, every watering' },
              { label: 'Flush schedule',  value: 'Every 5 weeks',     detail: 'not particularly salt sensitive' },
              { label: 'Difficulty',      value: 'Low',               detail: 'tolerates variation in care' },
            ].map((item, i) => (
              <div key={i} className="card-sm">
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 6 }}>{item.label}</p>
                <p className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 2 }}>{item.value}</p>
                <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Vining vs non-vining types</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              The care in LECA is largely the same across Philodendron types, but the setup differs slightly because of how they grow.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }} className="two-col">
              <div className="card">
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: 10 }}>Vining types</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 10 }}>Brasil, Heartleaf, Micans, Scandens, Hederaceum. These grow quickly and produce a lot of root mass. They benefit from a moss pole or support structure, which you can set directly into the LECA and anchor there.</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', margin: 0 }}>Vining types in LECA tend to push out new leaves faster than in soil and tolerate slightly drier reservoir conditions than non-vining types.</p>
              </div>
              <div className="card">
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: 10 }}>Non-vining (terrestrial) types</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 10 }}>Gloriosum, Melanochrysum, Mamei, Sodiroi. These crawl along the surface rather than climb. They need wider, shallower pots rather than tall narrow ones.</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', margin: 0 }}>Gloriosum in particular is popular in semi-hydro because the leaf size in LECA is noticeably larger than in soil. It also stays more compact, which some growers prefer. Shallower reservoirs work better, keep it around 15% of pot height.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Feeding Philodendron in LECA</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Philodendron prefer consistent light feeding over occasional heavy doses. Use a quarter teaspoon of Dyna-Gro Foliage Pro per gallon with every reservoir refill is the right approach. Resist the urge to double-dose after a growth spurt, it does not speed things up and increases salt accumulation.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Nitrogen deficiency shows as yellowing on older leaves with the newer growth staying green. If you see this, confirm you are using a complete hydroponic fertilizer and check that pH is between 5.5 and 6.5. A pH of 7 or above locks out nitrogen uptake regardless of how much fertilizer is in the water.
            </p>
            <div className="callout callout-green">
              Philodendron are not especially salt sensitive, but flushing every 5 weeks is still good practice. White crust on LECA is a clear sign that a flush is overdue.
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Variety notes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  name: 'Philodendron Brasil',
                  note: 'Fast-growing viner. One of the most beginner-friendly semi-hydro plants alongside Pothos. Handles reservoir variation better than most. The variegation is more pronounced under good light in a stable LECA setup.',
                },
                {
                  name: 'Philodendron Heartleaf (Hederaceum)',
                  note: 'All-green version of Brasil. Grows slightly faster because it has more chlorophyll. Handles low light better than most other Philodendron. Good for rooms without a lot of direct sun.',
                },
                {
                  name: 'Philodendron Micans',
                  note: 'Velvety leaves that show color best in indirect light rather than direct sun. In LECA, the iridescent quality of the leaf surface is more pronounced when the plant is well-fed. Start at quarter strength for the first month.',
                },
                {
                  name: 'Philodendron Gloriosum',
                  note: 'The standout in the non-vining group. Leaf size in LECA can be dramatically larger than in soil. Needs a wide, shallow pot rather than a deep one. Keep the reservoir at 12 to 15% of pot depth. Does not like to sit wet.',
                },
                {
                  name: 'Philodendron Melanochrysum',
                  note: 'Velvet-leaved climber that grows much faster in semi-hydro than in soil. Needs a sturdy support. The dark, iridescent leaves are sensitive to direct sun, which causes bleaching regardless of substrate. Position carefully.',
                },
                {
                  name: 'Philodendron White Wizard / White Princess',
                  note: 'Variegated types with slower growth. Treat similarly to Thai Constellation Monstera: half-dose fertilizer, stable conditions, and patience. The white sections have no chlorophyll and will burn before the green sections under the same stress.',
                },
              ].map((v, i) => (
                <div key={i} className="card-sm">
                  <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-1)', marginBottom: 6 }}>{v.name}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text-2)', margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Common problems</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  problem: 'New leaves small and pale',
                  cause: 'Usually a light problem. Occasionally a nitrogen issue.',
                  fix: 'Move to brighter indirect light. If light is already good, double-check that your fertilizer has all 16 nutrients. A standard soil NPK formula will produce exactly this symptom in LECA.',
                },
                {
                  problem: 'Cataphylls not opening properly',
                  cause: 'Low humidity is the most common cause. Cataphylls are the protective sheaths around new leaves and they need moisture to open cleanly.',
                  fix: 'Increase ambient humidity above 50%. A tray of water near the plant, a humidifier, or grouping plants together all help.',
                },
                {
                  problem: 'Roots circling the inside of the pot',
                  cause: 'The pot is too small. This is more visible in LECA than in soil because you can usually see the roots through a clear pot.',
                  fix: 'Size up. For vining types, go up 3 to 5cm in diameter. For non-vining types, go up in width rather than depth.',
                },
                {
                  problem: 'Growth stopped in winter',
                  cause: 'Philodendron slow down when temperatures drop below around 18 degrees C. This is normal dormancy behavior, not a substrate problem.',
                  fix: 'Reduce fertilizer to half dose during slow periods. Do not stop feeding entirely. Resume full dosing when new growth appears.',
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

          <section>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 6 }}>Watch instead of read</h2>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>
              The LECA basics that apply directly to Philodendron setup and ongoing care.
            </p>
            <VideoEmbed
              videoId="mDkS9R5HW7o"
              title="LECA Care Tips: 5 Semi Hydroponics Tricks"
              creator="Chris"
              channel="Pretty in Green"
              note="Practical maintenance tips for LECA setups including Philodendron"
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
              { href: '/leca-vs-pon',      label: 'LECA vs Pon' },
              { href: '/transition',       label: 'Soil transition' },
              { href: '/fertilizer',       label: 'Fertilizer dosing' },
              { href: '/plants/alocasia',  label: 'Alocasia guide' },
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
