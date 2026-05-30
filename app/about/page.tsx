import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'PonPlants is a semi-hydro troubleshooting resource built from real grower community data. Learn what the site covers, how the content is sourced, and how to get in touch.',
}

export default function AboutPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <span className="eyebrow">About</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Your roots, your reservoir, your questions.
        </h1>
        <p className="prose">
          PonPlants is a troubleshooting resource for indoor plant growers who use semi-hydroponics, specifically LECA (Lightweight Expanded Clay Aggregate) and Lechuza Pon.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="about-grid">
        <div>
          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 14 }}>What this site is</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Semi-hydro communities are full of growers asking the same questions. Reservoir draining too fast. Roots going brown. Leaves dropping after a soil transition. The answers exist in those threads, but finding them means sifting through hundreds of posts, many of which contradict each other.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              PonPlants pulls those answers together into one place. Each guide is built from real community posts and comments, not from generic plant care templates copied across the web. The tools (reservoir calculator, root rot checker, fertilizer chart) exist because growers kept asking the same questions with no reliable tool to answer them.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>
              The site covers LECA vs Pon comparisons, root rot diagnosis and treatment, soil-to-semi-hydro transitions, fertilizer dosing, and plant-specific guides for Alocasia, Pothos, and Monstera, with more being added over time.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 14 }}>How the content is sourced</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              The content is grounded in analysis of posts and comments from the r/SemiHydro community and related plant care communities. Where specific numbers appear, like reservoir consumption rates, fertilizer doses, or transition timelines, they come from documented grower experiences, not from generalizations.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>
              The interactive tools are built on the same data. The reservoir calculator, for example, uses plant-specific drink rate estimates drawn from grower reports of actual consumption in real setups. The root rot checker uses the symptom indicators that the community has found most reliable for distinguishing rot from normal transition die-off.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 14 }}>What this site is not</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              PonPlants is not a substitute for professional horticultural advice, and it does not make any claims about the commercial suitability of specific products or brands beyond what growers in the community have reported from their own experience.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>
              The site is also not affiliated with Lechuza, any fertilizer brand, or any nursery. Product mentions exist because growers in the community have used them and reported results.
            </p>
          </section>

          <section>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 14 }}>Get in touch</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 20 }}>
              Questions, corrections, or suggestions are welcome. If something on the site is wrong, or if you have documented experience that contradicts a claim, that is exactly the kind of feedback that helps.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'sticky', top: 80 }}>
          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>What we cover</p>
            {[
              { href: '/leca-vs-pon',   label: 'LECA vs Pon' },
              { href: '/root-rot',      label: 'Root rot diagnosis' },
              { href: '/transition',    label: 'Soil transitions' },
              { href: '/fertilizer',   label: 'Fertilizer dosing' },
              { href: '/tools',        label: 'Interactive tools' },
            ].map((l, i, arr) => (
              <Link key={i} href={l.href} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '9px 0',
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                textDecoration: 'none', color: 'var(--text-2)', fontSize: 14, fontWeight: 500,
              }}>
                {l.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>

          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Data source</p>
            <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text-3)', margin: 0 }}>
              Content is derived from analysis of r/SemiHydro and related community posts and comments, covering grower-reported experiences across a range of plant types and setups.
            </p>
          </div>

          <div className="card-sm">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 12 }}>Disclaimer</p>
            <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text-3)', margin: 0 }}>
              PonPlants is not affiliated with any brand mentioned on this site. Information is provided for educational purposes only. Always observe your own plants and adjust accordingly.
            </p>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
