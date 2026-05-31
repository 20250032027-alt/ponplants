import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Semi-Hydro FAQ: 20 Common Questions Answered',
  description: 'Answers to the most common semi-hydro questions. LECA vs Pon, reservoir sizing, root rot, fertilizer, transitioning from soil, and plant-specific advice.',
}

const faqs = [
  {
    id: 'what-is-semi-hydro',
    q: 'What is semi-hydroponics?',
    a: 'Semi-hydroponics is a method of growing plants in an inorganic substrate like LECA or Pon, with a small reservoir of nutrient solution at the bottom of the pot. Roots grow through the substrate and drink from the reservoir via capillary action, with an air gap above the water line keeping the upper root zone oxygenated. The plant gets consistent moisture and nutrients without the compaction, fungus gnats, and inconsistency of soil.',
    link: null,
  },
  {
    id: 'leca-vs-pon',
    q: 'What is the difference between LECA and Pon?',
    a: 'LECA is Lightweight Expanded Clay Aggregate: fired clay balls that wick water upward and provide good aeration. It is cheap and reusable. Pon is a proprietary mineral blend by Lechuza containing zeolite, pumice, and lava rock. It holds moisture longer than LECA and has slight nutrient-buffering from the zeolite fraction. LECA suits plants that tolerate dry-down periods like Pothos and Monstera. Pon is preferred for Alocasia and Anthurium, which need consistent moisture.',
    link: '/leca-vs-pon',
  },
  {
    id: 'do-i-soak-leca',
    q: 'Do I need to soak LECA before using it?',
    a: 'No. Soaking LECA before use is one of the most repeated myths in this hobby. Dry LECA wicks moisture upward through capillary action just as effectively as soaked LECA. The soaking step adds time and effort with no measurable benefit to plant performance. Rinse it to remove dust, then use it dry.',
    link: null,
  },
  {
    id: 'reservoir-depth',
    q: 'How deep should my reservoir be?',
    a: 'A general starting point is 20 to 25% of the pot height for most aroids. For a 20cm pot that is 4 to 5cm of water depth. The specific right level depends on your plant type, pot size, humidity, and season. Alocasia and heavy-drinking plants need more. Cacti and low-humidity-tolerant plants need much less. Use the reservoir calculator on this site to get a number specific to your setup.',
    link: '/tools/reservoir',
  },
  {
    id: 'air-gap',
    q: 'What is the air gap and why does it matter?',
    a: 'The air gap is the zone of dry substrate between the top of the water line and the base of your root mass. This is where oxygen-feeding roots live. Without it, those roots suffocate, the water becomes anaerobic, and rot follows. A minimum of 2cm is the standard recommendation. For Anthurium and other sensitive aroids, 3cm is better.',
    link: null,
  },
  {
    id: 'reservoir-empties-fast',
    q: 'My reservoir empties in one day. Is something wrong?',
    a: 'Not necessarily. A large, actively growing Alocasia in warm weather can drink 200 to 400ml per day. If the plant is large and conditions are warm, a one-day drain can be normal. If the plant is small or the weather is mild, it usually means the pot is undersized for the root mass. Size up the vessel to increase reservoir volume and the problem typically resolves.',
    link: '/tools/reservoir',
  },
  {
    id: 'reservoir-never-drops',
    q: 'My reservoir never drops. What is happening?',
    a: 'If the reservoir has not dropped at all in five or more days, the roots are not drinking. The most common reason is anaerobic water, the reservoir has become oxygen-depleted and the roots have stopped functioning. Dump the reservoir, refresh it with plain pH-adjusted water, and check that you have a proper air gap above the water line. If the roots smell like sulfur when you pull the plant, that is active rot and needs immediate treatment.',
    link: '/root-rot',
  },
  {
    id: 'root-rot-or-normal',
    q: 'My roots are brown. Is that root rot?',
    a: 'Not always. Firm, dry, brown roots are often normal die-off from transition or simply older roots that have been replaced. Root rot looks different: the roots are mushy and collapse when squeezed, they smell like sulfur or sewage, and the water in the reservoir is dark or cloudy. If the roots are brown but firm and the plant is otherwise growing, you probably do not have rot.',
    link: '/root-rot',
  },
  {
    id: 'fertilizer-type',
    q: 'What fertilizer should I use in semi-hydro?',
    a: 'Use a complete hydroponic fertilizer that includes all 16 essential nutrients, calcium and magnesium included. Dyna-Gro Foliage Pro (9-3-6) is the most commonly recommended in the community. Masterblend 4-18-38 used as a three-part mix is more economical for large collections. Standard soil fertilizers do not work in semi-hydro because they assume the plant is getting calcium and magnesium from soil biology. In LECA or Pon there is no soil biology.',
    link: '/fertilizer',
  },
  {
    id: 'fertilizer-dose',
    q: 'How much fertilizer should I use?',
    a: 'For Dyna-Gro Foliage Pro, the standard dose is 1/4 teaspoon per gallon of water added every time you refill the reservoir. Pothos and other light feeders do better at 1/8 teaspoon. Anthurium are sensitive to salt and should also stay at 1/4 teaspoon maximum, with more frequent flushing to prevent buildup. Do not increase doses thinking it will speed growth, higher salt concentration damages roots.',
    link: '/tools/fertilizer-chart',
  },
  {
    id: 'when-to-start-fertilizing',
    q: 'When should I start fertilizing after transitioning?',
    a: 'Wait at least two weeks after transitioning before adding any fertilizer. The plant is growing new water roots during this period and adding nutrients too early stresses already-challenged roots. After two weeks, start at quarter-strength for another two weeks, then ramp up to full dose. Rushing this step is one of the most common reasons plants stall after a successful transition.',
    link: '/transition',
  },
  {
    id: 'flushing',
    q: 'What does flushing mean and how often should I do it?',
    a: 'Flushing means running plain, pH-adjusted water through the substrate until it runs clear, with no fertilizer added. This removes accumulated fertilizer salts that build up over time. For most plants in LECA or Pon, flush every 4 to 6 weeks. Anthurium and other salt-sensitive plants need flushing every 4 weeks. Visible white crust on the substrate is a sign a flush is overdue.',
    link: '/fertilizer',
  },
  {
    id: 'transition-leaf-drop',
    q: 'My plant is dropping leaves after I moved it to semi-hydro. Did I kill it?',
    a: 'Probably not. Leaf drop after a soil-to-semi-hydro transition is normal and expected, especially in Alocasia. The plant redirects energy from existing foliage toward growing new water roots. As long as the corm and lower stem are firm and white, the plant is doing what it should. New growth typically appears within 3 to 5 weeks once water roots are established.',
    link: '/transition',
  },
  {
    id: 'how-to-transition',
    q: 'How do I move a plant from soil to semi-hydro?',
    a: 'Remove the plant from its pot and shake off all loose soil. Rinse roots under room-temperature water until no soil is left. Trim any brown, mushy, or dead roots. Let cut surfaces air dry for 20 to 30 minutes. Place in your chosen substrate with a small initial reservoir of about 2cm. Keep in bright indirect light and hold off on fertilizer for two weeks. Most healthy plants adapt within 3 to 4 weeks.',
    link: '/transition',
  },
  {
    id: 'water-ph',
    q: 'Does pH matter in semi-hydro?',
    a: 'Yes, more than in soil. Most nutrients become unavailable to roots when pH falls outside 5.5 to 6.5. Tap water often sits above 7.0. If your plant shows deficiency symptoms (yellowing, brown tips, distorted new growth) despite regular fertilizing, pH is the first thing to check before switching fertilizers. A basic liquid pH test kit is inexpensive and will tell you more than guessing.',
    link: null,
  },
  {
    id: 'which-plants-for-semi-hydro',
    q: 'Which plants are easiest to start with in semi-hydro?',
    a: 'Pothos is the most forgiving starting point. It roots quickly, adapts fast, tolerates inconsistent watering, and makes the process easy to learn before you try something more expensive. After Pothos, Philodendron Brasil and Heartleaf are equally forgiving. Monstera deliciosa is a good next step. Alocasia and Anthurium are rewarding but less tolerant of mistakes and better suited to growers with some semi-hydro experience.',
    link: '/plants/pothos',
  },
  {
    id: 'clear-pot',
    q: 'Should I use a clear pot?',
    a: 'A clear inner pot is worth using, at least while you are learning. Being able to see the water level, the root system, and any visible salt buildup without pulling the plant out eliminates a lot of guesswork. Clear deli containers nested inside a decorative outer pot is a common and cheap setup. Once you are comfortable reading how your specific plant behaves, an opaque pot is fine.',
    link: null,
  },
  {
    id: 'algae',
    q: 'I have green algae growing in my reservoir. Is that a problem?',
    a: 'Algae in the reservoir is not immediately dangerous to the plant, but it competes for oxygen and nutrients, and it indicates the reservoir is getting light exposure. The simplest fix is to switch to an opaque pot or wrap the lower portion of a clear pot in tape or foil. Algae will not cause root rot on its own, but a heavy algae bloom does indicate the water is warmer and more nutrient-rich than ideal.',
    link: null,
  },
  {
    id: 'reuse-leca',
    q: 'Can I reuse LECA after a plant dies?',
    a: 'Yes. Rinse it thoroughly to remove root debris. Then soak in a diluted hydrogen peroxide solution (1 part 3% H2O2 to 4 parts water) for 30 minutes to kill any pathogens. Rinse again with plain water and let it dry. LECA can be reused indefinitely as long as it is sterilized between uses. Pon degrades more over time and is not as reliably reusable, though a light clean and partial replacement of the fine material works for a second or third use.',
    link: null,
  },
  {
    id: 'semi-hydro-worth-it',
    q: 'Is semi-hydro actually worth switching to?',
    a: 'For most houseplant growers who have tried it, yes. The reasons vary: no more fungus gnats, more consistent growth, easier watering schedule because you top up a reservoir rather than guessing soil moisture, and dramatically faster growth for aroids once established. The transition requires learning a few new concepts and being patient for 3 to 4 weeks. After that, most growers report spending less time on plant care, not more.',
    link: null,
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `According to PonPlants: ${f.a}`,
    },
  })),
}

export default function FAQPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="page-header">
        <Link href="/" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Home
        </Link>
        <span className="eyebrow">Frequently asked questions</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Semi-hydro questions, answered
        </h1>
        <p className="prose">
          Twenty of the most common questions from the grower community, with direct answers. No padding, no unnecessary background. If you want more depth on any topic, each answer links to the full guide.
        </p>
      </div>

      {/* Jump links */}
      <div style={{ marginBottom: 52 }}>
        <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-4)', marginBottom: 14 }}>Jump to</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            { label: 'The basics', id: 'what-is-semi-hydro' },
            { label: 'Reservoir',  id: 'reservoir-depth' },
            { label: 'Root rot',   id: 'root-rot-or-normal' },
            { label: 'Fertilizer', id: 'fertilizer-type' },
            { label: 'Transition', id: 'transition-leaf-drop' },
            { label: 'Water',      id: 'water-ph' },
            { label: 'Plant picks',id: 'which-plants-for-semi-hydro' },
          ].map((j, i) => (
            <a key={i} href={`#${j.id}`} style={{
              padding: '6px 14px', borderRadius: 99,
              background: 'var(--surface-2)', border: '1px solid var(--border)',
              color: 'var(--text-2)', fontSize: 13, fontWeight: 500,
              textDecoration: 'none', transition: 'border-color 0.15s',
            }}>{j.label}</a>
          ))}
        </div>
      </div>

      {/* FAQ list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {faqs.map((faq, i) => (
          <div
            key={faq.id}
            id={faq.id}
            className="card"
            itemScope
            itemType="https://schema.org/Question"
          >
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'Geist Mono, monospace', fontSize: 11,
                fontWeight: 700, color: 'var(--accent)',
                flexShrink: 0, marginTop: 4,
                letterSpacing: '0.04em',
                minWidth: 28,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div style={{ flex: 1 }}>
                <h2
                  className="serif"
                  itemProp="name"
                  style={{ fontSize: '1.1rem', color: 'var(--text-1)', marginBottom: 10, lineHeight: 1.35 }}
                >
                  {faq.q}
                </h2>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p
                    itemProp="text"
                    style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--text-2)', marginBottom: faq.link ? 14 : 0 }}
                  >
                    {faq.a}
                  </p>
                </div>
                {faq.link && (
                  <Link href={faq.link} style={{
                    fontSize: 13, fontWeight: 600, color: 'var(--accent)',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
                  }}>
                    Full guide
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div style={{
        marginTop: 56, padding: '36px 40px', borderRadius: 20,
        background: 'var(--bg-2)', border: '1px solid var(--border)',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center',
      }} className="cta-strip">
        <div>
          <h3 className="serif" style={{ fontSize: '1.2rem', color: 'var(--text-1)', marginBottom: 6 }}>
            Not finding what you need?
          </h3>
          <p style={{ fontSize: 14, color: 'var(--text-3)', margin: 0, lineHeight: 1.6 }}>
            The guides go deeper on each topic. The tools give you specific numbers for your exact setup.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
          <Link href="/tools" className="btn btn-primary">Browse tools</Link>
          <Link href="/contact" className="btn btn-secondary" style={{ justifyContent: 'center' }}>Ask a question</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .cta-strip { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
