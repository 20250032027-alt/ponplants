import Link from 'next/link'

const guides = [
  { href: '/leca-vs-pon',  eyebrow: '126 posts each — no clean comparison existed', title: 'LECA vs Pon',        desc: 'What they are actually made of, how they behave differently, and which plants do better in which.',  accent: 'var(--accent)' },
  { href: '/root-rot',     eyebrow: 'Top-voted troubleshooting posts',               title: 'Root Rot',           desc: 'Symptom table, decision tree, five causes, treatment protocol. Work through it before pulling the plant.', accent: '#dc2626' },
  { href: '/transition',   eyebrow: '28 posts on transition, 54 for Alocasia alone', title: 'Soil Transition',    desc: 'The bare-root rinse method, week-by-week timeline, and an honest comparison of pot systems.',     accent: 'var(--accent)' },
  { href: '/fertilizer',   eyebrow: '19 posts, no dosing chart anywhere',            title: 'Fertilizer',         desc: 'Why soil fertilizers fail, what to use instead, dosing amounts, and when to flush.',              accent: '#d97706' },
]

const tools = [
  { href: '/tools/reservoir',       title: 'Reservoir Calculator', desc: 'Get a reservoir depth and water line for your exact plant and pot size.', tag: 'Most used' },
  { href: '/tools/root-rot-checker',title: 'Root Rot Checker',     desc: 'Four questions. A diagnosis with specific next steps at the end.',        tag: 'Interactive' },
  { href: '/tools/fertilizer-chart',title: 'Fertilizer Chart',     desc: 'Quick dosing reference by plant type, including flush schedule.',          tag: 'Reference' },
]

const faqs = [
  { q: 'My reservoir empties in a day. Is that normal?',
    a: 'For a large Alocasia in warm weather, yes — some drink 200 to 400ml per day. For smaller plants in mild conditions, a one-day drain usually means the pot is undersized for the root mass.',
    link: '/tools/reservoir', label: 'Size your reservoir' },
  { q: 'The reservoir never drops and the roots smell.',
    a: 'Stagnant, oxygen-depleted water is the most common semi-hydro killer. If the reservoir is not dropping, the roots are not drinking — they are sitting in anaerobic water.',
    link: '/tools/root-rot-checker', label: 'Run the checker' },
  { q: 'LECA or Pon for Alocasia?',
    a: 'Pon, by a wide margin in the community. It holds moisture more evenly and Alocasia roots seem to prefer it. LECA works too but Pon is more forgiving at the start.',
    link: '/leca-vs-pon#alocasia', label: 'See the comparison' },
  { q: 'My plant dropped all its leaves after transitioning.',
    a: 'Probably fine. Leaf drop after a soil-to-semi-hydro transition is common, especially in Alocasia. The plant is replacing soil roots with water roots. As long as the corm is firm, give it time.',
    link: '/transition', label: 'Transition timeline' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-dark" style={{ minHeight: 'min(520px, 75vh)' }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '45vw', height: '45vw', maxWidth: 580, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,139,61,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="page-wrap" style={{ position: 'relative', padding: '72px 24px 80px' }}>
          <div style={{ maxWidth: 640 }}>
            <div className="badge badge-green" style={{ marginBottom: 22 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
              997 real grower posts analyzed
            </div>
            <h1 className="serif" style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)',
              color: '#eef2ea', lineHeight: 1.1, marginBottom: 18,
            }}>
              Semi-hydro answers.<br />
              <span style={{ color: '#5aaa5a' }}>Not semi-hydro vibes.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(238,242,234,0.6)', marginBottom: 36, maxWidth: '54ch' }}>
              Reservoir emptying too fast. Roots going brown. Plants stalling after transition. The community has worked through all of it. The answers are here.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/tools/reservoir" className="btn btn-primary">Reservoir Calculator</Link>
              <Link href="/tools/root-rot-checker" className="btn" style={{ background: 'rgba(255,255,255,0.08)', color: '#eef2ea', border: '1px solid rgba(255,255,255,0.14)' }}>
                Root Rot Checker
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div style={{ display: 'flex', gap: 32, marginTop: 56, flexWrap: 'wrap' }}>
            {[
              { v: '997',   l: 'posts analyzed' },
              { v: '126×',  l: 'LECA and Pon each mentioned' },
              { v: '344',   l: 'upvotes on the top reservoir post' },
              { v: '54',    l: 'Alocasia-specific posts' },
            ].map((s, i) => (
              <div key={i} style={{ borderLeft: '2px solid rgba(90,170,90,0.35)', paddingLeft: 16 }}>
                <div className="serif" style={{ fontSize: '1.6rem', color: '#eef2ea', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: 12, color: 'rgba(238,242,234,0.45)', marginTop: 5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS STRIP */}
      <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border)' }}>
        <div className="page-wrap" style={{ padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {tools.map((t, i) => (
              <Link key={i} href={t.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '18px 20px', borderRadius: 14,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  transition: 'border-color 0.15s',
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-1)' }}>{t.title}</span>
                    <span className="badge badge-green" style={{ fontSize: 10 }}>{t.tag}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0, lineHeight: 1.55 }}>{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="page-wrap" style={{ padding: '72px 24px' }}>
        <span className="eyebrow">Guides</span>
        <h2 className="serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-1)', marginBottom: 8 }}>
          Every base covered
        </h2>
        <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 40, maxWidth: '55ch' }}>
          Each guide is built from what growers actually ask, not from generic plant care templates.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {guides.map((g, i) => (
            <Link key={i} href={g.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: g.accent, margin: 0 }}>
                  {g.eyebrow}
                </p>
                <h3 className="serif" style={{ fontSize: '1.25rem', color: 'var(--text-1)', margin: 0 }}>{g.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-3)', margin: 0, flex: 1 }}>{g.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
                  Read
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="page-wrap" style={{ padding: '72px 24px' }}>
          <span className="eyebrow">Common questions</span>
          <h2 className="serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-1)', marginBottom: 40 }}>
            Straight answers, no preamble
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))', gap: 16 }}>
            {faqs.map((f, i) => (
              <div key={i} className="card">
                <h3 className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 10, lineHeight: 1.35 }}>{f.q}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 14 }}>{f.a}</p>
                <Link href={f.link} style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  {f.label}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANTS */}
      <section className="page-wrap" style={{ padding: '72px 24px 96px' }}>
        <span className="eyebrow">By plant</span>
        <h2 className="serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-1)', marginBottom: 8 }}>
          Plant-specific guides
        </h2>
        <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 36, maxWidth: '52ch' }}>
          Care specifics that vary by plant — variety notes, known issues, and community-sourced observations.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
          {[
            { href: '/plants/alocasia', label: 'Alocasia',  sub: '54 community posts', tag: 'Most discussed' },
            { href: '/plants/pothos',   label: 'Pothos',    sub: 'Great for LECA beginners', tag: 'Beginner-friendly' },
            { href: '/plants/monstera', label: 'Monstera',  sub: 'LECA and Pon both work', tag: 'Versatile' },
          ].map((p, i) => (
            <Link key={i} href={p.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 className="serif" style={{ fontSize: '1.1rem', color: 'var(--text-1)', margin: 0 }}>{p.label}</h3>
                  <span className="badge badge-green" style={{ fontSize: 10 }}>{p.tag}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0 }}>{p.sub}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                  View guide
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
