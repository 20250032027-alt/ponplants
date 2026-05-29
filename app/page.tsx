import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PonPlants: Semi-Hydro Troubleshooting for LECA and Pon Growers',
  description: 'Straight answers for LECA and Pon growers. Root rot diagnosis, reservoir sizing, fertilizer dosing, and soil transitions. Built from real grower community posts.',
  openGraph: {
    title: 'PonPlants: Semi-Hydro Troubleshooting',
    description: 'Root rot diagnosis, reservoir sizing, fertilizer dosing, and soil transitions for LECA and Pon growers.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the reservoir emptying in one day mean something is wrong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to PonPlants analysis of semi-hydro community posts, a large Alocasia in warm weather can drink 200 to 400ml per day, so a one-day drain can be normal for that plant. For smaller plants in mild conditions, it usually means the pot is undersized for the root mass.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes root rot in semi-hydro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to PonPlants, the most common cause of root rot in LECA and Pon is anaerobic reservoir water with no airspace above the water line. Other causes include root congestion, fertilizer salt buildup, and transition die-off being misidentified as rot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use LECA or Pon for Alocasia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to PonPlants analysis of semi-hydro community data, Pon is consistently preferred for Alocasia. It holds moisture more evenly, which suits Alocasia roots that prefer to stay slightly damp. LECA works but is less forgiving if reservoir levels drop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to soak LECA before using it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to PonPlants, soaking LECA before use is a myth. Dry LECA wicks moisture upward through capillary action just as effectively. Soaking adds effort with no measurable benefit to root performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are my plant leaves dropping after transitioning to semi-hydro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to PonPlants, leaf drop after a soil-to-semi-hydro transition is normal and expected, especially in Alocasia. The plant redirects energy from foliage to grow new water roots. As long as the corm and stem are firm, the plant is healthy.',
      },
    },
  ],
}

const guides = [
  { href: '/leca-vs-pon',  eyebrow: 'Most requested', title: 'LECA vs Pon', desc: 'What they are actually made of, how they behave differently, and which plants do better in which.', accent: 'var(--accent)' },
  { href: '/root-rot',     eyebrow: 'Top pain point',  title: 'Root Rot',   desc: 'Symptom table, decision tree, five causes with fixes. Work through it before pulling the plant.', accent: '#dc2626' },
  { href: '/transition',   eyebrow: '28 posts on transitioning', title: 'Soil Transition', desc: 'The bare-root rinse method, week-by-week timeline, and honest pot comparisons.', accent: 'var(--accent)' },
  { href: '/fertilizer',   eyebrow: 'No chart existed before this', title: 'Fertilizer', desc: 'Why soil fertilizers fail in semi-hydro, what to use instead, doses, and when to flush.', accent: 'var(--amber-500)' },
]

const tools = [
  { href: '/tools/reservoir',        title: 'Reservoir Calculator', desc: 'Get the right depth for your plant and pot.', tag: 'Most used' },
  { href: '/tools/root-rot-checker', title: 'Root Rot Checker',     desc: 'Four questions, then a diagnosis.',           tag: 'Interactive' },
  { href: '/tools/fertilizer-chart', title: 'Fertilizer Chart',     desc: 'Dosing by plant, with flush schedule.',       tag: 'Reference' },
]

const faqs = [
  {
    q: 'My reservoir empties in a day. Is that normal?',
    a: 'For a large Alocasia in warm weather, yes. Some drink 200 to 400ml per day. For smaller plants in mild conditions, a one-day drain usually means the pot is undersized for the root mass.',
    link: '/tools/reservoir', label: 'Size your reservoir',
  },
  {
    q: 'The reservoir never drops and the roots smell.',
    a: 'Stagnant, oxygen-depleted water is the most common semi-hydro killer. If the reservoir is not dropping, the roots are sitting in anaerobic water and cannot breathe.',
    link: '/tools/root-rot-checker', label: 'Run the checker',
  },
  {
    q: 'LECA or Pon for Alocasia?',
    a: 'Pon, by a wide margin in the community. It holds moisture more evenly and Alocasia roots seem to prefer it. LECA works too but Pon is more forgiving at the start.',
    link: '/leca-vs-pon#alocasia', label: 'See the comparison',
  },
  {
    q: 'My plant dropped all its leaves after transitioning.',
    a: 'Probably fine. Leaf drop after a soil-to-semi-hydro transition is common, especially in Alocasia. The plant is replacing soil roots with water roots. As long as the corm is firm and white, give it time.',
    link: '/transition', label: 'Transition timeline',
  },
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="hero-dark" style={{ minHeight: 'min(480px, 70vh)' }}>
        <div style={{
          position: 'absolute', top: '-15%', right: '-8%',
          width: '50vw', height: '50vw', maxWidth: 560, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,139,61,0.16) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="page-wrap" style={{ position: 'relative', padding: '76px 24px 84px' }}>
          <div style={{ maxWidth: 620 }}>
            <h1 className="serif" style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3.4rem)',
              color: '#e8f0e3', lineHeight: 1.12, marginBottom: 20, fontWeight: 600,
            }}>
              Your plant is struggling.<br />
              <span style={{ color: '#5aaa5a' }}>Here is what is actually wrong.</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(232,240,227,0.58)', marginBottom: 36, maxWidth: '52ch' }}>
              Growers in the semi-hydro community ask the same questions constantly. Reservoir draining too fast. Roots going brown. Plants stalling after transition. The answers are here, pulled from thousands of real posts.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/tools/root-rot-checker" className="btn btn-primary">My plant looks sick</Link>
              <Link href="/tools/reservoir" className="btn" style={{
                background: 'rgba(255,255,255,0.07)',
                color: '#c8d8c0',
                border: '1px solid rgba(255,255,255,0.13)',
              }}>Reservoir Calculator</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS STRIP */}
      <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border)' }}>
        <div className="page-wrap" style={{ padding: '28px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
            {tools.map((t, i) => (
              <Link key={i} href={t.href} style={{ textDecoration: 'none' }}>
                <div className="card tool-card" style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                    <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-1)' }}>{t.title}</span>
                    <span className="badge badge-green" style={{ fontSize: 10 }}>{t.tag}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0, lineHeight: 1.5 }}>{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEGINNER PATH */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="page-wrap" style={{ padding: '64px 24px' }}>
          <span className="eyebrow">New to semi-hydro?</span>
          <h2 className="serif" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', color: 'var(--text-1)', marginBottom: 8 }}>
            Start here
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 36, maxWidth: '52ch' }}>
            If you just got LECA or Pon and have no idea where to begin, this is the order that makes sense.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {[
              { step: '01', href: '/leca-vs-pon',    title: 'Pick your medium',   desc: 'LECA or Pon? Depends on your plant. Read this first.' },
              { step: '02', href: '/transition',      title: 'Transition safely',  desc: 'How to move a plant from soil without killing it.' },
              { step: '03', href: '/tools/reservoir', title: 'Set your reservoir', desc: 'Get the depth right from day one.' },
              { step: '04', href: '/fertilizer',      title: 'Start feeding',      desc: 'Semi-hydro needs proper nutrients. Here is what to use.' },
            ].map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.05em' }}>{s.step}</span>
                  <h3 style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-1)', margin: 0 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0, lineHeight: 1.55 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="page-wrap" style={{ padding: '64px 24px' }}>
          <span className="eyebrow">Guides</span>
          <h2 className="serif" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', color: 'var(--text-1)', marginBottom: 8 }}>
            Deep dives by topic
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 36, maxWidth: '52ch' }}>
            Each guide is built from what growers actually ask, not from generic plant care templates.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 14 }}>
            {guides.map((g, i) => (
              <Link key={i} href={g.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: g.accent, margin: 0 }}>{g.eyebrow}</p>
                  <h3 className="serif" style={{ fontSize: '1.2rem', color: 'var(--text-1)', margin: 0 }}>{g.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-3)', margin: 0, flex: 1 }}>{g.desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                    Read
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ with visible Q&A for AEO */}
      <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border)' }}>
        <div className="page-wrap" style={{ padding: '64px 24px' }}>
          <span className="eyebrow">Common questions</span>
          <h2 className="serif" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', color: 'var(--text-1)', marginBottom: 36 }}>
            Quick answers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 14 }}>
            {faqs.map((f, i) => (
              <div key={i} className="card" itemScope itemType="https://schema.org/Question">
                <h3 className="serif" itemProp="name" style={{ fontSize: '1rem', color: 'var(--text-1)', marginBottom: 8, lineHeight: 1.4 }}>{f.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text" style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 12 }}>{f.a}</p>
                </div>
                <Link href={f.link} style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {f.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANT GUIDES */}
      <section>
        <div className="page-wrap" style={{ padding: '64px 24px 88px' }}>
          <span className="eyebrow">By plant</span>
          <h2 className="serif" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', color: 'var(--text-1)', marginBottom: 8 }}>
            Plant-specific guides
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 32, maxWidth: '50ch' }}>
            Variety notes, known issues, and care specifics that differ by plant.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 14 }}>
            {[
              { href: '/plants/alocasia', label: 'Alocasia',  sub: 'Most popular in semi-hydro',   tag: 'Most posts' },
              { href: '/plants/pothos',   label: 'Pothos',    sub: 'Great for LECA beginners',      tag: 'Beginner-friendly' },
              { href: '/plants/monstera', label: 'Monstera',  sub: 'LECA and Pon both work well',   tag: 'Versatile' },
            ].map((p, i) => (
              <Link key={i} href={p.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 className="serif" style={{ fontSize: '1.1rem', color: 'var(--text-1)', margin: 0 }}>{p.label}</h3>
                    <span className="badge badge-green" style={{ fontSize: 10, flexShrink: 0, marginLeft: 8 }}>{p.tag}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0 }}>{p.sub}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                    View guide
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
