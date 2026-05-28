'use client'

import Link from 'next/link'
import { useState } from 'react'

/* ── RESERVOIR CALCULATOR ── */
function ReservoirCalculator() {
  const [plantType, setPlantType] = useState('alocasia')
  const [potDiameter, setPotDiameter] = useState(15)
  const [potHeight, setPotHeight] = useState(20)
  const [humidity, setHumidity] = useState('medium')
  const [season, setSeason] = useState('growing')
  const [result, setResult] = useState<null | {
    reservoirDepth: number
    waterLine: number
    airGap: number
    refillDays: number
    notes: string[]
  }>(null)

  const calculate = () => {
    // Base reservoir depth as % of pot height
    const baseRatios: Record<string, number> = {
      alocasia: 0.28,
      monstera: 0.22,
      philodendron: 0.20,
      pothos: 0.18,
      anthurium: 0.25,
      calathea: 0.22,
      orchid: 0.15,
      cactus: 0.10,
    }
    const base = baseRatios[plantType] || 0.22
    let ratio = base
    if (humidity === 'low') ratio *= 1.2
    if (humidity === 'high') ratio *= 0.85
    if (season === 'growing') ratio *= 1.1
    if (season === 'dormant') ratio *= 0.8

    const reservoirDepth = Math.round(potHeight * ratio)
    const waterLine = Math.round(reservoirDepth * 0.7) // keep reservoir at 70% full
    const airGap = reservoirDepth - waterLine

    // Estimate refill days based on pot volume and plant type
    const potVolume = Math.PI * Math.pow(potDiameter / 2, 2) * reservoirDepth / 1000
    const drinkRates: Record<string, number> = { alocasia: 0.9, monstera: 0.6, philodendron: 0.55, pothos: 0.5, anthurium: 0.65, calathea: 0.7, orchid: 0.35, cactus: 0.15 }
    const rate = drinkRates[plantType] || 0.55
    const adjustedRate = rate * (humidity === 'low' ? 1.3 : humidity === 'high' ? 0.75 : 1) * (season === 'growing' ? 1.2 : 0.7)
    const refillDays = Math.max(2, Math.round(potVolume * waterLine * 0.001 / adjustedRate * 10))

    const notes: string[] = []
    if (plantType === 'alocasia') notes.push('Alocasia are heavy drinkers. In warm weather, some large plants drink 200 to 400ml per day.')
    if (potDiameter < 10) notes.push('Small pots with large plants dry out fast. Size up the pot before adjusting the reservoir further.')
    if (humidity === 'low') notes.push('Low humidity increases water loss through leaves. The reservoir will empty faster than in humid conditions.')
    if (airGap < 2) notes.push('The airspace above water is too small. Increase pot height or reduce reservoir depth to avoid anaerobic conditions.')
    notes.push('Flush with plain water every 4 to 6 weeks to prevent fertilizer salt buildup.')

    setResult({ reservoirDepth, waterLine, airGap, refillDays, notes })
  }

  const plantOptions = [
    { value: 'alocasia', label: 'Alocasia' },
    { value: 'monstera', label: 'Monstera' },
    { value: 'philodendron', label: 'Philodendron' },
    { value: 'pothos', label: 'Pothos / Epipremnum' },
    { value: 'anthurium', label: 'Anthurium' },
    { value: 'calathea', label: 'Calathea / Maranta' },
    { value: 'orchid', label: 'Orchid' },
    { value: 'cactus', label: 'Cactus / Succulent' },
  ]

  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: 10,
    border: '1.5px solid #e7e3dc', backgroundColor: '#fff',
    fontSize: 14, color: '#1c1a16', outline: 'none',
    fontFamily: 'DM Sans, sans-serif',
  }

  const labelStyle = { fontSize: 13, fontWeight: 600, color: '#44403c', marginBottom: 6, display: 'block' as const }

  return (
    <div id="reservoir" style={{ padding: '40px', borderRadius: 20, backgroundColor: '#fafaf8', border: '1px solid #e7e3dc' }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>
        Reservoir Calculator
      </h2>
      <p style={{ fontSize: 14, color: '#78716c', marginBottom: 32 }}>
        The most asked question in the community. Input your setup and get a recommended reservoir depth and water line to maintain.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
        <div>
          <label style={labelStyle}>Plant type</label>
          <select style={inputStyle} value={plantType} onChange={e => setPlantType(e.target.value)}>
            {plantOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Pot diameter (cm)</label>
          <input type="number" style={inputStyle} value={potDiameter}
            onChange={e => setPotDiameter(Number(e.target.value))} min={5} max={60} />
        </div>

        <div>
          <label style={labelStyle}>Pot height (cm)</label>
          <input type="number" style={inputStyle} value={potHeight}
            onChange={e => setPotHeight(Number(e.target.value))} min={8} max={80} />
        </div>

        <div>
          <label style={labelStyle}>Ambient humidity</label>
          <select style={inputStyle} value={humidity} onChange={e => setHumidity(e.target.value)}>
            <option value="low">Low under 40%</option>
            <option value="medium">Medium 40 to 60%</option>
            <option value="high">High above 60%</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Current season</label>
          <select style={inputStyle} value={season} onChange={e => setSeason(e.target.value)}>
            <option value="growing">Active growing season</option>
            <option value="dormant">Dormant or slow growth</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        style={{
          padding: '13px 28px', borderRadius: 12,
          backgroundColor: '#4a7c3f', color: '#fff',
          fontWeight: 700, fontSize: 14, border: 'none',
          cursor: 'pointer', transition: 'opacity 0.2s',
          fontFamily: 'DM Sans, sans-serif',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        Calculate
      </button>

      {result && (
        <div style={{ marginTop: 36 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
            {[
              { label: 'Reservoir depth', value: `${result.reservoirDepth} cm`, sub: 'from the bottom of the pot' },
              { label: 'Maintain water at', value: `${result.waterLine} cm`, sub: 'maximum fill level' },
              { label: 'Minimum air gap', value: `${result.airGap} cm`, sub: 'dry substrate above water' },
              { label: 'Expected refill', value: `Every ${result.refillDays} days`, sub: 'approximate, varies with conditions' },
            ].map((r, i) => (
              <div key={i} style={{ padding: '20px 22px', borderRadius: 14, backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#166534', marginBottom: 6 }}>{r.label}</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#14532d', margin: '0 0 4px' }}>{r.value}</p>
                <p style={{ fontSize: 12, color: '#4ade80', margin: 0, color: '#15803d' }}>{r.sub}</p>
              </div>
            ))}
          </div>

          <div style={{ padding: '20px 24px', borderRadius: 14, backgroundColor: '#fffbeb', border: '1px solid #fde68a' }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#92400e', marginBottom: 10 }}>Notes for your setup</p>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {result.notes.map((note, i) => (
                <li key={i} style={{ fontSize: 13, color: '#78350f', display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.5 }}>
                  <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5"><path d="M12 9v4M12 17h.01M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z"/></svg>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── ROOT ROT CHECKER ── */
type CheckerStep = {
  id: string
  question: string
  yes: string
  no: string
  yesResult?: { diagnosis: string; severity: 'critical' | 'moderate' | 'mild'; steps: string[] }
  noResult?: { diagnosis: string; severity: 'good' | 'mild'; steps: string[] }
}

const checkerSteps: CheckerStep[] = [
  {
    id: 'smell',
    question: 'Do the roots smell like sulfur or sewage a strong, unpleasant odor?',
    yes: 'Active anaerobic rot confirmed.',
    no: 'Go to next check.',
    yesResult: {
      diagnosis: 'Active anaerobic rot',
      severity: 'critical',
      steps: [
        'Remove the plant from the pot immediately.',
        'Rinse all roots under room-temperature water.',
        'Trim back to healthy white tissue. Sterilize scissors between cuts.',
        'Treat cut roots with diluted hydrogen peroxide (3% solution, 1 part H2O2 to 3 parts water) for 5 minutes.',
        'Allow cut surfaces to dry for 20 to 30 minutes.',
        'Repot in fresh substrate with a clean pot. Do not reuse old substrate.',
        'Maintain a 2 to 4cm air gap between your water line and the substrate base going forward.',
      ],
    },
  },
  {
    id: 'texture',
    question: 'Are any roots mushy or hollow when you squeeze them?',
    yes: 'Root rot is present, mid-stage.',
    no: 'Go to next check.',
    yesResult: {
      diagnosis: 'Mid-stage root rot',
      severity: 'critical',
      steps: [
        'Trim all mushy roots back to firm, white tissue.',
        'Check the stem base for soft spots.',
        'Treat with diluted hydrogen peroxide solution.',
        'Repot in clean substrate with correct reservoir gap.',
        'Begin diluted fertilizer once new roots appear (2 to 3 weeks).',
      ],
    },
  },
  {
    id: 'reservoir',
    question: 'Has the reservoir barely moved in 5 or more days?',
    yes: 'Roots may not be functional. Check for root congestion.',
    no: 'Go to next check.',
    yesResult: {
      diagnosis: 'Possible root dysfunction',
      severity: 'moderate',
      steps: [
        'Remove the plant and inspect roots for congestion.',
        'Check that the reservoir water is not stagnant refresh fully.',
        'Ensure there is a 2 to 4cm air gap above the water line.',
        'If roots are severely congested, repot into a larger vessel.',
        'Check pH of the water outside 5.5 to 6.5, roots stop drinking.',
      ],
    },
  },
  {
    id: 'wilting',
    question: 'Are leaves wilting consistently despite a full reservoir?',
    yes: 'Roots are likely not functioning properly.',
    no: 'Plant appears healthy.',
    yesResult: {
      diagnosis: 'Root function compromised',
      severity: 'moderate',
      steps: [
        'Pull and inspect the root system closely.',
        'Look for salt buildup (white crust) on the substrate flush if present.',
        'Check for root constriction repot if roots are tightly packed.',
        'Verify your fertilizer is hydroponic-grade with all 16 nutrients.',
      ],
    },
    noResult: {
      diagnosis: 'No immediate rot detected',
      severity: 'good',
      steps: [
        'Plant appears stable. Continue your current routine.',
        'If you recently transitioned from soil, some leaf drop is normal.',
        'Monitor weekly for changes in reservoir consumption.',
        'Ensure you are flushing with plain water every 4 to 6 weeks.',
      ],
    },
  },
]

function RootRotChecker() {
  const [currentStep, setCurrentStep] = useState(0)
  const [result, setResult] = useState<null | { diagnosis: string; severity: string; steps: string[] }>(null)
  const [history, setHistory] = useState<string[]>([])

  const step = checkerSteps[currentStep]

  const answer = (choice: 'yes' | 'no') => {
    setHistory([...history, choice])
    const res = choice === 'yes' ? step.yesResult : step.noResult
    if (res) {
      setResult(res)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const reset = () => {
    setCurrentStep(0)
    setResult(null)
    setHistory([])
  }

  const severityColors: Record<string, { bg: string; border: string; text: string; label: string }> = {
    critical: { bg: '#fef2f2', border: '#fecaca', text: '#991b1b', label: 'Act now' },
    moderate: { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412', label: 'Needs attention' },
    mild: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', label: 'Monitor' },
    good: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', label: 'Looking good' },
  }

  return (
    <div id="root-rot-checker" style={{ padding: '40px', borderRadius: 20, backgroundColor: '#fafaf8', border: '1px solid #e7e3dc' }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>
        Root Rot Checker
      </h2>
      <p style={{ fontSize: 14, color: '#78716c', marginBottom: 32 }}>
        Answer each question about your plant. The checker works through the most reliable diagnostic indicators in order.
      </p>

      {!result ? (
        <div>
          {/* Progress */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
            {checkerSteps.map((_, i) => (
              <div key={i} style={{
                height: 4, flex: 1, borderRadius: 999,
                backgroundColor: i < currentStep ? '#4a7c3f' : i === currentStep ? '#7faa5b' : '#e7e3dc',
                transition: 'background-color 0.3s',
              }} />
            ))}
          </div>

          <div style={{ padding: '32px', borderRadius: 16, backgroundColor: '#fff', border: '1px solid #e7e3dc', marginBottom: 20 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#78716c', marginBottom: 14 }}>
              Check {currentStep + 1} of {checkerSteps.length}
            </p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 600, color: '#1c1a16', lineHeight: 1.5, marginBottom: 28 }}>
              {step.question}
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={() => answer('yes')}
                style={{
                  padding: '11px 28px', borderRadius: 10,
                  backgroundColor: '#be5e30', color: '#fff',
                  fontWeight: 600, fontSize: 14, border: 'none',
                  cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Yes
              </button>
              <button
                onClick={() => answer('no')}
                style={{
                  padding: '11px 28px', borderRadius: 10,
                  backgroundColor: '#f3f0eb', color: '#1c1a16',
                  fontWeight: 600, fontSize: 14,
                  border: '1.5px solid #e7e3dc',
                  cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {(() => {
            const colors = severityColors[result.severity]
            return (
              <div style={{ padding: '32px', borderRadius: 16, backgroundColor: colors.bg, border: `2px solid ${colors.border}`, marginBottom: 24 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ padding: '5px 12px', borderRadius: 999, backgroundColor: colors.border, color: colors.text, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {colors.label}
                  </span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: colors.text, margin: 0 }}>
                    {result.diagnosis}
                  </h3>
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: colors.text, marginBottom: 12 }}>Recommended steps</p>
                <ol style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {result.steps.map((s, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', backgroundColor: colors.border, color: colors.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 700 }}>{i + 1}</span>
                      <span style={{ fontSize: 14, lineHeight: 1.6, color: colors.text, paddingTop: 3 }}>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )
          })()}
          <button
            onClick={reset}
            style={{
              padding: '11px 22px', borderRadius: 10,
              backgroundColor: '#f3f0eb', color: '#1c1a16',
              fontWeight: 600, fontSize: 13,
              border: '1.5px solid #e7e3dc',
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Start over
          </button>
        </div>
      )}
    </div>
  )
}

/* ── FERTILIZER QUICK REFERENCE ── */
function FertilizerQuickRef() {
  const items = [
    { plant: 'Alocasia', medium: 'Pon', dose: '1/4 tsp / gal', freq: 'Every watering', notes: 'Start at half strength for first month' },
    { plant: 'Monstera', medium: 'LECA or Pon', dose: '1/4 tsp / gal', freq: 'Every watering', notes: 'Very forgiving tolerates slight over and underfeeding' },
    { plant: 'Philodendron', medium: 'LECA', dose: '1/4 tsp / gal', freq: 'Every watering', notes: 'Likes consistent feeding more than occasional heavy doses' },
    { plant: 'Pothos', medium: 'LECA', dose: '1/8 tsp / gal', freq: 'Every watering', notes: 'Light feeder. Overfeeding shows as brown tips first' },
    { plant: 'Anthurium', medium: 'Pon', dose: '1/4 tsp / gal', freq: 'Every watering', notes: 'Sensitive to salt buildup flush more frequently' },
    { plant: 'Calathea', medium: 'Pon', dose: '1/8 tsp / gal', freq: 'Every watering', notes: 'Sensitive to hard water and high salt. Use filtered water if possible' },
  ]

  return (
    <div id="fertilizer-calc" style={{ padding: '40px', borderRadius: 20, backgroundColor: '#fafaf8', border: '1px solid #e7e3dc' }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1c1a16', marginBottom: 6 }}>
        Fertilizer Quick Reference
      </h2>
      <p style={{ fontSize: 14, color: '#78716c', marginBottom: 8 }}>
        Based on Dyna-Gro Foliage Pro, the community-preferred complete hydroponic fertilizer.
      </p>
      <p style={{ fontSize: 13, color: '#a8a29e', marginBottom: 28, fontStyle: 'italic' }}>
        1/4 tsp = approximately 1.25ml. Scale accordingly for litres.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ backgroundColor: '#1c1a16' }}>
              {['Plant', 'Best medium', 'Dose', 'Frequency', 'Notes'].map((h, i) => (
                <th key={i} style={{ padding: '12px 16px', textAlign: 'left', color: i === 0 ? '#a8a29e' : '#d6d1ca', fontWeight: 500, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fafaf8' : '#f3f0eb', borderBottom: '1px solid #e7e3dc' }}>
                <td style={{ padding: '12px 16px', fontWeight: 700, color: '#1c1a16' }}>{item.plant}</td>
                <td style={{ padding: '12px 16px', color: '#57534e' }}>{item.medium}</td>
                <td style={{ padding: '12px 16px', color: '#57534e', fontFamily: 'DM Mono, monospace', fontSize: 13 }}>{item.dose}</td>
                <td style={{ padding: '12px 16px', color: '#57534e' }}>{item.freq}</td>
                <td style={{ padding: '12px 16px', color: '#78716c', fontSize: 13 }}>{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ── PAGE ── */
export default function ToolsClient() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
      <div style={{ padding: '64px 0 48px', borderBottom: '1px solid #e7e3dc', marginBottom: 64 }}>
        <Link href="/" style={{ fontSize: 13, color: '#78716c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 24 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to home
        </Link>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a7c3f', marginBottom: 12 }}>
          Interactive tools
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1a16', letterSpacing: '-0.02em', marginBottom: 16 }}>
          Calculators and diagnostics
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#57534e', maxWidth: '60ch' }}>
          Reservoir sizing and root rot diagnosis are the two questions the community asks most. Both tools are below.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <ReservoirCalculator />
        <RootRotChecker />
        <FertilizerQuickRef />
      </div>
    </div>
  )
}
