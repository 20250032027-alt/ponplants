import Link from 'next/link'
import type { Metadata } from 'next'
import VideoEmbed from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Anthurium in Semi-Hydro: LECA and Pon Guide',
  description: 'Growing Anthurium in LECA and Pon. Salt sensitivity, humidity needs, cataphyll care, velvet vs glossy varieties, fertilizer doses, and common problems explained.',
}

export default function AnthuriumPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">Plant guide</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Anthurium in semi-hydro
        </h1>
        <p className="prose">
          Anthurium and semi-hydro are a good match, but Anthurium are less forgiving than Monstera or Philodendron. They are sensitive to salt buildup, they need higher humidity than most plants, and their roots need more oxygen than you might expect. Get those three things right and they reward you with growth that outpaces what is possible in bark or soil mixes.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="content-grid">
        <div>
          {/* Care card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginBottom: 52 }}>
            {[
              { label: 'Best substrate',  value: 'Pon',                detail: 'More moisture consistent than LECA' },
              { label: 'Reservoir depth', value: '20 to 25%',          detail: 'of pot height' },
              { label: 'Air gap',         value: '3cm minimum',        detail: 'more than most plants need' },
              { label: 'Fertilizer',      value: '1/4 tsp per gallon', detail: 'dilute, flush every 4 weeks' },
              { label: 'Humidity',        value: 'Above 60%',          detail: 'non-negotiable for leaf quality' },
              { label: 'Salt sensitivity',value: 'High',               detail: 'flush more often than other plants' },
            ].map((item, i) => (
              <div key={i} className="card-sm">
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 6 }}>{item.label}</p>
                <p className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 2 }}>{item.value}</p>
                <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Why Anthurium work well in Pon</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Anthurium roots need oxygen more than most aroids. In bark mixes and chunky soil, they get that from the air pockets in the medium. The problem is bark breaks down, the mix compacts, and suddenly the roots are sitting in something dense and airless. Pon does not break down. The air pockets stay open for years.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Pon also holds moisture more evenly than LECA, which matters for Anthurium because they do not handle the dry end of a LECA cycle as well as Pothos or Monstera do. The root tips dry out, the plant stalls, and it takes several weeks to recover. Pon avoids this.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>
              LECA does work for Anthurium, particularly for more robust species like Andraeanum and Flamingo types. But for collector varieties. Clarinervium, Crystallinum, velvet species. Pon is the safer choice.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>The three things Anthurium need</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                {
                  num: '01',
                  title: 'More air gap than you think',
                  body: 'The standard 2cm air gap that works for most semi-hydro plants is the minimum for Anthurium. Three centimetres is better. These plants push roots aggressively toward the water line, and if the roots hit standing water without any dry zone above, you will see browning and stalling within a few weeks. The air gap is what keeps the upper root zone oxygenated.',
                },
                {
                  num: '02',
                  title: 'Aggressive flushing schedule',
                  body: 'Anthurium are the most salt-sensitive common semi-hydro plant. Salt buildup from fertilizer causes the leaf edges to crisp, the roots to burn at the tips, and the plant to stall. Flush with plain pH-adjusted water every 4 weeks without exception. If you see brown leaf margins and the roots smell fine, flush immediately even if it is not on schedule.',
                },
                {
                  num: '03',
                  title: 'Humidity above 60%',
                  body: 'This is not a substrate issue but it affects the whole semi-hydro setup. Anthurium in low humidity produce smaller, less textured leaves regardless of how good the nutrition is. The velvet varieties are especially affected. A grow tent, humidifier, or greenhouse cabinet makes a real difference. Grouping plants together raises local humidity somewhat but usually not enough on its own.',
                },
              ].map((item, i) => (
                <div key={i} className="card">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, fontWeight: 700, color: 'var(--accent)', flexShrink: 0, marginTop: 3, letterSpacing: '0.05em' }}>{item.num}</span>
                    <div>
                      <h3 className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 8 }}>{item.title}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--text-2)', margin: 0 }}>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Velvet vs glossy varieties</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 20 }}>
              The care split in Anthurium follows the leaf texture more than the species name.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="two-col">
              <div className="card">
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: 10 }}>Velvet varieties</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 10 }}>
                  Clarinervium, Crystallinum, Magnificum, Regale, Forgetii. These need more humidity and are less tolerant of temperature swings. In Pon they can produce leaves that are measurably larger than what the same plant produces in a chunky bark mix, but they punish neglect fast.
                </p>
                <div className="callout callout-amber" style={{ fontSize: 13 }}>
                  Velvet types need humidity above 70% for best results. Below 50% the leaf texture flattens and the white veins lose their contrast.
                </div>
              </div>
              <div className="card">
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: 10 }}>Glossy varieties</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 10 }}>
                  Andraeanum (the common florist type), Flamingo, Hookeri, Pedatoradiatum. More tolerant of lower humidity and occasional dry periods. These do well in LECA and are a good choice if you want to try Anthurium in semi-hydro without committing to the humidity demands of velvet types.
                </p>
                <div className="callout callout-green" style={{ fontSize: 13 }}>
                  Glossy Andraeanum types can flower in LECA. The blooms last longer when the plant has consistent water access.
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Fertilizer for Anthurium</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Use 1/4 teaspoon of Dyna-Gro Foliage Pro per gallon, every watering. Do not increase this dose thinking it will speed growth. With Anthurium especially, more fertilizer means more salt, and more salt means brown margins and stunted roots before long.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 14 }}>
              Calcium is worth paying attention to. Anthurium are heavier calcium users than most aroids. If you are using a fertilizer that does not include calcium (any standard soil fertilizer, most general-purpose blends), you will see distorted new growth, brown tips on young leaves, and blackened leaf edges before long. Foliage Pro covers this. A Masterblend three-part mix also covers it. Most others do not.
            </p>
            <div className="callout callout-red" style={{ fontSize: 14 }}>
              Brown leaf edges on Anthurium in semi-hydro are almost always either salt buildup or calcium deficiency. Check both before assuming root rot.
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--text-1)', marginBottom: 16 }}>Common problems</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  problem: 'Brown leaf margins on new growth',
                  cause: 'Salt buildup or calcium deficiency. If it appears consistently on new leaves, calcium is more likely. If older leaves are also affected, salt is the first thing to check.',
                  fix: 'Flush thoroughly with plain pH-adjusted water. After flushing, confirm your fertilizer contains calcium. If you were using a soil blend, switch to a hydroponic formula.',
                },
                {
                  problem: 'Cataphylls turning brown without opening',
                  cause: 'Low humidity. The protective sheath around new leaves dries out before it can open cleanly.',
                  fix: 'Raise humidity above 60%. You can peel dried cataphylls carefully once the leaf has fully matured, but do not pull them while the leaf is still unfurling.',
                },
                {
                  problem: 'Roots turning brown at tips in the reservoir',
                  cause: 'This is often fine. Root tip browning in the water zone is a different situation from mushy, smelly rot further up the root system.',
                  fix: 'Squeeze a few roots. If they are firm and the plant shows no other symptoms, the browning is normal adaptation to submersion. If they are mushy and there is a smell, that is rot and needs treatment.',
                },
                {
                  problem: 'Growth stops for weeks',
                  cause: 'Temperature, humidity, or root damage from salt. Anthurium are sensitive enough that suboptimal conditions cause real growth pauses rather than just slowing down.',
                  fix: 'Check all three: temperature above 20 degrees C, humidity above 60%, last flush within 4 weeks. Fixing whichever of these is off usually resolves the stall within 2 to 3 weeks.',
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
              A practical look at semi-hydro substrate choices that applies directly to Anthurium in Pon.
            </p>
            <VideoEmbed
              videoId="m7zAgiFKbfE"
              title="My Favorite LECA Recipe: How to Grow Rare Plants in Semi Hydroponics"
              creator="Chris"
              channel="Pretty in Green"
              note="Covers substrate selection and nutrient setup for collector aroids"
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
              { href: '/fertilizer',        label: 'Fertilizer dosing' },
              { href: '/leca-vs-pon',        label: 'LECA vs Pon' },
              { href: '/root-rot',           label: 'Root rot diagnosis' },
              { href: '/plants/alocasia',    label: 'Alocasia guide' },
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
