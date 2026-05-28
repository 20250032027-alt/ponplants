import Link from 'next/link'

const faqs = [
  {
    q: 'My reservoir empties in a single day. Is that normal?',
    a: 'For a large Alocasia in a warm room, it can be. Active growers report some plants drinking 200 to 400ml per day. If it is a smaller plant or the weather is mild, a one-day drain usually points to the pot being undersized for the root mass, or the plant running hot. The reservoir calculator helps you size it right.',
    link: '/tools',
    linkLabel: 'Use the calculator',
  },
  {
    q: 'The reservoir never drops and the roots smell off. Root rot?',
    a: 'Stagnant water with no airspace is the most common semi-hydro killer. If your reservoir is not dropping at all, the roots are not drinking, which means they are sitting in anaerobic water. Go through the root rot checker before pulling the plant.',
    link: '/root-rot',
    linkLabel: 'Run the diagnosis',
  },
  {
    q: 'Pon or LECA for Alocasia?',
    a: 'Pon wins, by a wide margin in the grower community. It holds moisture more evenly, drains without puddling, and Alocasia roots seem to prefer its mineral composition. LECA works too but Pon is more forgiving when you are starting out.',
    link: '/leca-vs-pon#alocasia',
    linkLabel: 'See the full comparison',
  },
  {
    q: 'Do I need to flush if I use Pon?',
    a: 'Yes, every 4 to 6 weeks. Salt from fertilizer builds up in Pon faster than in soil because there is no organic matter to buffer it. Run plain, pH-adjusted water through until it runs clear. LECA is a bit more forgiving but benefits from flushing too.',
    link: '/fertilizer#flushing',
    linkLabel: 'Fertilizer and flushing guide',
  },
  {
    q: 'My plant dropped all its leaves after transitioning. Did I kill it?',
    a: 'Probably not. Leaf drop after a soil-to-semi-hydro transition is common, especially in Alocasia. The plant is replacing soil roots with water roots and pulling energy from leaves to do it. As long as the corm and roots are firm and white, give it time.',
    link: '/transition',
    linkLabel: 'What to expect after transitioning',
  },
  {
    q: 'Do I need to soak LECA before using it?',
    a: 'No. The soaking requirement is one of the most repeated myths in this hobby. Dry LECA wicks moisture upward just fine via capillary action. Soaking does not meaningfully change its performance and just adds steps.',
    link: '/leca-vs-pon',
    linkLabel: 'LECA guide',
  },
]

const proofPoints = [
  { value: '997', label: 'grower posts analyzed' },
  { value: '2,692', label: 'community comments read' },
  { value: '126x', label: 'LECA and Pon each mentioned' },
  { value: '344', label: 'upvotes on the top reservoir post' },
]

const guides = [
  {
    href: '/leca-vs-pon',
    eyebrow: '126 posts each, zero clean comparisons found online',
    title: 'LECA vs Pon',
    desc: 'Both get mentioned constantly. Nobody was comparing them properly. This page does.',
    accent: '#4a7c3f',
  },
  {
    href: '/root-rot',
    eyebrow: 'Top-voted troubleshooting posts',
    title: 'Root Rot Diagnosis',
    desc: 'Brown roots, mushy stems, bad smell. Work through the decision tree and figure out what is actually wrong.',
    accent: '#be5e30',
  },
  {
    href: '/transition',
    eyebrow: '28 transition posts, 54 for Alocasia alone',
    title: 'Soil to Semi-Hydro',
    desc: 'The bare-root rinse method, what to expect in the first two weeks, and which plants adapt fastest.',
    accent: '#5d8c3d',
  },
  {
    href: '/fertilizer',
    eyebrow: '19 posts, no dosing chart anywhere',
    title: 'Fertilizer Dosing',
    desc: 'Semi-hydro skips soil microbes, so nutrients matter more. Here is what to use and how much.',
    accent: '#cc743b',
  },
  {
    href: '/tools',
    eyebrow: 'The number-one question in the community',
    title: 'Reservoir Calculator',
    desc: 'Input your plant, pot size, and environment. Get a reservoir depth and water level to maintain.',
    accent: '#4a7c3f',
  },
  {
    href: '/tools#root-rot-checker',
    eyebrow: 'Step-by-step decision tree',
    title: 'Root Rot Checker',
    desc: 'Answer a few questions about your plant and get a likely diagnosis with specific next steps.',
    accent: '#be5e30',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(150deg, #181612 0%, #1e2b18 60%, #1a1e14 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '55vw', height: '55vw', maxWidth: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,124,63,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-15%', left: '-10%',
          width: '40vw', height: '40vw', maxWidth: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(127,170,91,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 90px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
            className="hero-grid">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 999,
                backgroundColor: 'rgba(74,124,63,0.15)',
                border: '1px solid rgba(74,124,63,0.25)',
                color: '#7faa5b', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.05em', textTransform: 'uppercase' as const,
                marginBottom: 24,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#7faa5b', display: 'inline-block' }} />
                Built from real grower data
              </div>

              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#f5f2ed',
                marginBottom: 20,
                letterSpacing: '-0.02em',
              }}>
                Semi-hydro problems.<br />
                <span style={{ color: '#7faa5b' }}>Actual answers.</span>
              </h1>

              <p style={{ fontSize: 17, lineHeight: 1.7, color: '#8a8278', marginBottom: 36, maxWidth: '54ch' }}>
                Growers keep asking the same questions. Reservoir emptying too fast. Roots going brown. Plants stalling after transition. We pulled the answers from 997 real community posts so you do not have to dig through threads.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/tools" style={{
                  padding: '13px 24px', borderRadius: 12,
                  backgroundColor: '#4a7c3f', color: '#fff',
                  fontWeight: 600, fontSize: 15,
                  textDecoration: 'none', display: 'inline-block',
                }}>
                  Reservoir Calculator
                </Link>
                <Link href="/root-rot" style={{
                  padding: '13px 24px', borderRadius: 12,
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#d6d1ca', fontWeight: 500, fontSize: 15,
                  textDecoration: 'none', display: 'inline-block',
                }}>
                  Diagnose Root Rot
                </Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {proofPoints.map((p, i) => (
                <div key={i} style={{
                  padding: '28px 24px',
                  borderRadius: 16,
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 36, fontWeight: 700, color: '#f5f2ed',
                    lineHeight: 1,
                  }}>{p.value}</div>
                  <div style={{ fontSize: 13, color: '#6b6560', marginTop: 8, lineHeight: 1.4 }}>{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES GRID */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#4a7c3f', marginBottom: 12 }}>
          Core guides
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#1c1a16', marginBottom: 8, letterSpacing: '-0.02em' }}>
          Every base covered
        </h2>
        <p style={{ fontSize: 16, color: '#78716c', marginBottom: 48, maxWidth: '55ch' }}>
          Each guide is built from what growers actually ask, not from generic plant care templates copied across the web.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {guides.map((g, i) => (
            <Link key={i} href={g.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                padding: '28px',
                borderRadius: 18,
                backgroundColor: '#f7f4f0',
                border: '1px solid #e8e4de',
                height: '100%',
              }}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: g.accent, marginBottom: 14 }}>
                  {g.eyebrow}
                </p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', fontWeight: 700, color: '#1c1a16', marginBottom: 10 }}>
                  {g.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#78716c', marginBottom: 20 }}>
                  {g.desc}
                </p>
                <span style={{ fontSize: 13, fontWeight: 600, color: g.accent, display: 'flex', alignItems: 'center', gap: 5 }}>
                  Open guide
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SCROLLING STRIP — static, no animation to avoid timeout */}
      <div style={{ backgroundColor: '#4a7c3f', padding: '14px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 48, padding: '0 24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['LECA vs Pon', 'Root Rot Diagnosis', 'Reservoir Sizing', 'Fertilizer Dosing', 'Soil Transitions', 'Alocasia Care', 'Pot Comparisons', 'Flushing Guide'].map(t => (
            <span key={t} style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section style={{ backgroundColor: '#f3f0eb' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#4a7c3f', marginBottom: 12 }}>
            What growers actually ask
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#1c1a16', marginBottom: 48, letterSpacing: '-0.02em' }}>
            Straight answers to common questions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))', gap: 20 }}>
            {faqs.map((item, i) => (
              <div key={i} style={{
                backgroundColor: '#fafaf8',
                border: '1px solid #e7e3dc',
                borderRadius: 16,
                padding: '28px 32px',
              }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: '#1c1a16', marginBottom: 12, lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#57534e', marginBottom: 16 }}>
                  {item.a}
                </p>
                <Link href={item.link} style={{
                  fontSize: 13, fontWeight: 600, color: '#4a7c3f',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
                }}>
                  {item.linkLabel}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 96px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #181612 0%, #1e2b18 100%)',
          borderRadius: 24, padding: '56px 64px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', right: '-5%', top: '-20%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,124,63,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', maxWidth: 560 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#7faa5b', marginBottom: 16 }}>
              Data signal
            </p>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              color: '#f5f2ed', lineHeight: 1.45, marginBottom: 28,
            }}>
              "She empties the reservoir within a day" got 344 upvotes. People are not looking for inspiration. They need answers.
            </p>
            <Link href="/tools" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 24px', borderRadius: 12,
              backgroundColor: '#4a7c3f', color: '#fff',
              fontWeight: 600, fontSize: 14,
              textDecoration: 'none',
            }}>
              Go to the tools
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}
