import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alocasia in Semi-Hydro Complete Care Guide | PonPlants',
  description: 'Everything about growing Alocasia in LECA and Pon. Reservoir depth, fertilizer, leaf drop after transition, root rot prevention, and variety-specific notes.',
}

const varieties = [
  {
    name: 'Alocasia Frydek',
    substrate: 'Pon strongly preferred',
    notes: 'One of the most common in the community. Responds dramatically to semi-hydro leaf size often doubles within three months. Very sensitive to salt buildup, so flush every 4 weeks.',
    knownIssue: 'Prone to corm rot if the substrate stays waterlogged. Ensure proper air gap.',
  },
  {
    name: 'Alocasia Regal Shield',
    substrate: 'Pon or LECA',
    notes: 'Fast-growing and relatively forgiving. Several community members report Regal Shield in LECA producing leaves twice the size of the same plant in soil. Root systems get large quickly size up the pot proactively.',
    knownIssue: 'Outgrows pots faster than most Alocasia. Check roots every 3 to 4 months.',
  },
  {
    name: 'Alocasia Silver Dragon',
    substrate: 'Pon',
    notes: 'Slower growing than many Alocasia. Documented in multiple community threads during water-to-Pon transitions. Prefers consistent moisture do not let Pon dry out completely between reservoir top-ups.',
    knownIssue: 'Can stall for 4 to 6 weeks post-transition before showing new growth. This is normal.',
  },
  {
    name: 'Alocasia Cuprea',
    substrate: 'Pon',
    notes: 'One of the most dramatic growth results documented in the community. A grower reported a cuprea reaching a size in one year that they would not have believed possible beforehand. High humidity preferred.',
    knownIssue: 'Sensitive to low humidity. Leaf edges brown in dry air even with perfect watering.',
  },
  {
    name: 'Alocasia Frydek Variegated',
    substrate: 'Pon',
    notes: 'Documented by multiple growers from the moment of purchase into semi-hydro. Treat identically to standard Frydek but expect slower growth on variegated sections due to reduced chlorophyll.',
    knownIssue: 'Variegated sections are more prone to browning under stress. Ensure stable conditions post-transition.',
  },
]

const troubleshootItems = [
  {
    problem: 'Leaves dropping after transition',
    cause: 'Normal stress response. The plant is growing new water roots and pulling energy from older leaves to do it.',
    action: 'Do nothing. As long as the corm and stem are firm, the plant is healthy. New leaves arrive once water roots are established usually 3 to 5 weeks.',
  },
  {
    problem: 'New leaf unfurls but immediately browns at the edges',
    cause: 'Usually low humidity or salt stress. Can also be a calcium or potassium deficiency.',
    action: 'Check humidity first. If under 50%, move the plant or add a humidifier nearby. Flush with plain water and then resume fertilizing at half strength.',
  },
  {
    problem: 'Corm pushing up out of the substrate',
    cause: 'The plant is maturing. Alocasia corms grow upward naturally over time.',
    action: 'Repot into a deeper vessel. Bury the corm so only the top third is above the substrate surface.',
  },
  {
    problem: 'Reservoir draining in under 12 hours',
    cause: 'For a large, active Alocasia in warm weather, this can be normal. Otherwise it suggests the pot is too small for the root mass.',
    action: 'Size up the pot. A larger vessel holds more substrate, which provides more reservoir volume and a more stable moisture gradient.',
  },
  {
    problem: 'Roots going brown at the tips in the reservoir',
    cause: 'This is often normal. Roots that grow directly into water frequently develop brown tips without that indicating rot.',
    action: 'Check whether roots are soft and mushy (rot) or firm and dry (normal). Firm brown roots in the reservoir are not a problem.',
  },
  {
    problem: 'Plant looks fine for 2 months then crashes',
    cause: 'A common pattern noted specifically for Alocasia by an experienced grower in the community. The plant exhausts the nutrient buffer in new substrate around the 2-month mark.',
    action: 'Ensure you started fertilizing by week 3 post-transition. If the crash happens later, check for root congestion and fertilizer salt buildup.',
  },
]

export default function AlocasiaPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
      {/* Header */}
      <div style={{ padding: '64px 0 48px', borderBottom: '1px solid #e7e3dc', marginBottom: 64 }}>
        <Link href="/" style={{ fontSize: 13, color: 'var(--text-3)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 24 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to home
        </Link>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
          54 Alocasia-specific posts analyzed
        </p>
        <h1 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--text-1)', letterSpacing: '-0.02em', marginBottom: 16 }}>
          Alocasia in semi-hydro
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-2)', maxWidth: '65ch' }}>
          Alocasia is the plant that most consistently converts growers to semi-hydro permanently. They respond faster and more dramatically than almost anything else. They also cause the most panic in the first few weeks. Both outcomes make sense once you understand what is happening.
        </p>
      </div>

      {/* Quick care card */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 64 }}>
        {[
          { label: 'Substrate', value: 'Pon preferred', detail: 'LECA works with closer monitoring' },
          { label: 'Reservoir depth', value: '25 to 30%', detail: 'of pot height' },
          { label: 'Water line', value: '2 to 3cm', detail: 'below substrate base' },
          { label: 'Fertilizer start', value: 'Week 3', detail: 'quarter strength, then ramp up' },
          { label: 'Flush frequency', value: 'Every 4 weeks', detail: 'salt sensitive do not skip' },
          { label: 'Humidity target', value: 'Above 50%', detail: 'higher is better for most varieties' },
        ].map((item, i) => (
          <div key={i} style={{ padding: '20px 22px', borderRadius: 14, backgroundColor: 'var(--surface-2)', border: '1px solid #e8e4de' }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-3)', marginBottom: 6 }}>{item.label}</p>
            <p style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 2 }}>{item.value}</p>
            <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Why Alocasia thrives */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 20 }}>
          Why Alocasia responds so well
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col">
          <div style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>
            <p style={{ marginBottom: 16 }}>
              In soil, Alocasia roots are constantly fighting for oxygen in a medium that holds too much water and compacts around them over time. Their root systems in soil are comparatively small and inefficient. Growers who transition and then dig up their plants months later are consistently shocked by how much root mass developed.
            </p>
            <p style={{ marginBottom: 16 }}>
              In Pon specifically, Alocasia develop two distinct root types: air roots that grow in the substrate and uptake oxygen, and water roots that extend down toward the reservoir and handle water and nutrient absorption. These two systems working in parallel is why growth rates accelerate so dramatically.
            </p>
            <p style={{ margin: 0 }}>
              Multiple community members document a new leaf every two weeks in established semi-hydro Alocasia. One grower with 90 days of documentation reported leaves double the size of anything the plant produced in soil.
            </p>
          </div>
          <div style={{ padding: '32px', borderRadius: 18, backgroundColor: 'var(--text-1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '-15%', bottom: '-15%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,124,63,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--accent-light)', marginBottom: 20 }}>Community data</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { stat: '2x', desc: 'average leaf size increase reported after 90 days' },
                { stat: '14 days', desc: 'between new leaves for well-established plants' },
                { stat: '156', desc: 'upvotes on "Switching to Pon was the best thing ever"' },
                { stat: '54', desc: 'Alocasia-specific posts in the community database' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ flexShrink: 0, minWidth: 56 }}>
                    <span style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--surface-2)' }}>{s.stat}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Varieties */}
      <div style={{ marginBottom: 72 }}>
        <h2 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 6 }}>
          Variety-specific notes
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 32 }}>
          Different Alocasia varieties have different tolerances. These notes are drawn from specific community posts for each variety.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {varieties.map((v, i) => (
            <div key={i} style={{ padding: '28px 32px', borderRadius: 18, border: '1px solid #e7e3dc', backgroundColor: 'var(--surface)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, alignItems: 'start' }} className="variety-grid">
              <div>
                <h3 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 8 }}>{v.name}</h3>
                <span style={{ padding: '4px 10px', borderRadius: 999, backgroundColor: 'var(--accent-bg)', border: '1px solid #bbf7d0', color: 'var(--accent-text)', fontSize: 12, fontWeight: 600 }}>{v.substrate}</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text-2)', margin: 0 }}>{v.notes}</p>
              <div style={{ padding: '12px 14px', borderRadius: 10, backgroundColor: '#fff7ed', border: '1px solid #fed7aa' }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c2410c', marginBottom: 4 }}>Known issue</p>
                <p style={{ fontSize: 13, color: '#9a3412', lineHeight: 1.5, margin: 0 }}>{v.knownIssue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshoot */}
      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 6 }}>
          Alocasia troubleshooting
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 32 }}>
          These are the problems that come up repeatedly in community posts, with answers based on what actually worked.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {troubleshootItems.map((item, i) => (
            <div key={i} style={{ padding: '26px', borderRadius: 16, border: '1px solid #e7e3dc', backgroundColor: 'var(--surface)' }}>
              <h3 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 10, lineHeight: 1.4 }}>{item.problem}</h3>
              <div style={{ marginBottom: 12 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-3)', marginBottom: 4 }}>Why it happens</p>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-2)', margin: 0 }}>{item.cause}</p>
              </div>
              <div style={{ padding: '12px 14px', borderRadius: 10, backgroundColor: 'var(--accent-bg)', border: '1px solid #bbf7d0' }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-text)', marginBottom: 4 }}>What to do</p>
                <p style={{ fontSize: 13, color: 'var(--accent-text)', lineHeight: 1.55, margin: 0 }}>{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/tools#reservoir" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: 'var(--accent)', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Reservoir Calculator</Link>
        <Link href="/transition" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: 'var(--surface-2)', border: '1px solid #e8e4de', color: 'var(--text-1)', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Transition guide</Link>
        <Link href="/leca-vs-pon#alocasia" style={{ padding: '13px 24px', borderRadius: 12, backgroundColor: 'var(--surface-2)', border: '1px solid #e8e4de', color: 'var(--text-1)', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>LECA vs Pon for Alocasia</Link>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .two-col { grid-template-columns: 1fr !important; }
          .variety-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
