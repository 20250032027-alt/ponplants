'use client'

import Link from 'next/link'
import { useState } from 'react'

const plantOptions = [
  { value: 'alocasia',     label: 'Alocasia',            baseRatio: 0.28, drinkRate: 0.9 },
  { value: 'anthurium',   label: 'Anthurium',            baseRatio: 0.25, drinkRate: 0.65 },
  { value: 'calathea',    label: 'Calathea / Maranta',   baseRatio: 0.22, drinkRate: 0.7 },
  { value: 'monstera',    label: 'Monstera',             baseRatio: 0.22, drinkRate: 0.6 },
  { value: 'philodendron',label: 'Philodendron',         baseRatio: 0.20, drinkRate: 0.55 },
  { value: 'pothos',      label: 'Pothos / Epipremnum',  baseRatio: 0.18, drinkRate: 0.5 },
  { value: 'orchid',      label: 'Orchid',               baseRatio: 0.15, drinkRate: 0.35 },
  { value: 'cactus',      label: 'Cactus / Succulent',   baseRatio: 0.10, drinkRate: 0.15 },
]

type Result = {
  reservoirDepth: number
  waterLine: number
  airGap: number
  refillDays: number
  notes: string[]
}

export default function ReservoirPage() {
  const [plant, setPlant]       = useState('alocasia')
  const [diameter, setDiameter] = useState(15)
  const [height, setHeight]     = useState(20)
  const [humidity, setHumidity] = useState('medium')
  const [season, setSeason]     = useState('growing')
  const [result, setResult]     = useState<Result | null>(null)

  const calculate = () => {
    const p = plantOptions.find(o => o.value === plant)!
    let ratio = p.baseRatio
    if (humidity === 'low')     ratio *= 1.2
    if (humidity === 'high')    ratio *= 0.85
    if (season === 'growing')   ratio *= 1.1
    if (season === 'dormant')   ratio *= 0.8

    const reservoirDepth = Math.round(height * ratio)
    const waterLine      = Math.round(reservoirDepth * 0.7)
    const airGap         = reservoirDepth - waterLine

    const vol     = Math.PI * Math.pow(diameter / 2, 2) * reservoirDepth / 1000
    const rate    = p.drinkRate
      * (humidity === 'low' ? 1.3 : humidity === 'high' ? 0.75 : 1)
      * (season   === 'growing' ? 1.2 : 0.7)
    const refillDays = Math.max(2, Math.round(vol * waterLine * 0.001 / rate * 10))

    const notes: string[] = []
    if (plant === 'alocasia')
      notes.push('Alocasia are heavy drinkers. A large plant in warm weather can drink 200 to 400ml per day.')
    if (diameter < 12)
      notes.push('Small pots with large plants dry out fast. Size up the pot before adjusting the reservoir.')
    if (humidity === 'low')
      notes.push('Low humidity increases water loss through leaves. The reservoir will drain faster than in humid conditions.')
    if (airGap < 2)
      notes.push('Your airspace above the water line is very small. Roots need this gap to breathe. Consider a deeper pot.')
    notes.push('Flush with plain water every 4 to 6 weeks to clear fertilizer salt buildup.')

    setResult({ reservoirDepth, waterLine, airGap, refillDays, notes })
  }

  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/tools" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All tools
        </Link>
        <span className="eyebrow">Tool</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Reservoir Calculator
        </h1>
        <p className="prose">
          The most asked question in the community. Enter your setup below and get a recommended reservoir depth, water line, and expected refill frequency.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="calc-grid">
        {/* Inputs */}
        <div className="card">
          <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-1)', marginBottom: 24 }}>Your setup</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <label className="field-label">Plant type</label>
              <select className="input" value={plant} onChange={e => setPlant(e.target.value)}>
                {plantOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label className="field-label">Pot diameter (cm)</label>
                <input type="number" className="input" value={diameter}
                  onChange={e => setDiameter(Number(e.target.value))} min={5} max={60} />
              </div>
              <div>
                <label className="field-label">Pot height (cm)</label>
                <input type="number" className="input" value={height}
                  onChange={e => setHeight(Number(e.target.value))} min={8} max={80} />
              </div>
            </div>
            <div>
              <label className="field-label">Ambient humidity</label>
              <select className="input" value={humidity} onChange={e => setHumidity(e.target.value)}>
                <option value="low">Low (under 40%)</option>
                <option value="medium">Medium (40 to 60%)</option>
                <option value="high">High (above 60%)</option>
              </select>
            </div>
            <div>
              <label className="field-label">Season</label>
              <select className="input" value={season} onChange={e => setSeason(e.target.value)}>
                <option value="growing">Active growing season</option>
                <option value="dormant">Dormant or slow growth</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={calculate} style={{ marginTop: 4, width: '100%', justifyContent: 'center' }}>
              Calculate
            </button>
          </div>
        </div>

        {/* Results */}
        <div>
          {!result ? (
            <div style={{
              height: 280, border: '2px dashed var(--border)', borderRadius: 20,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-4)', gap: 12,
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6h18M3 10h18M3 14h18M5 18h14"/>
              </svg>
              <p style={{ fontSize: 14, margin: 0 }}>Results appear here</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { label: 'Reservoir depth', value: `${result.reservoirDepth} cm`, sub: 'from bottom of pot' },
                  { label: 'Maintain water at', value: `${result.waterLine} cm`, sub: 'maximum fill level' },
                  { label: 'Air gap minimum', value: `${result.airGap} cm`, sub: 'dry substrate above water' },
                  { label: 'Expected refill', value: `~${result.refillDays} days`, sub: 'varies with conditions' },
                ].map((r, i) => (
                  <div key={i} className="callout callout-green" style={{ borderRadius: 16 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6, opacity: 0.75 }}>{r.label}</p>
                    <p className="serif" style={{ fontSize: '1.8rem', fontWeight: 400, margin: '0 0 3px', lineHeight: 1, color: 'var(--green-600)' }}>{r.value}</p>
                    <p style={{ fontSize: 11, margin: 0, opacity: 0.7 }}>{r.sub}</p>
                  </div>
                ))}
              </div>
              <div className="callout callout-amber">
                <p style={{ fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Notes for your setup</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {result.notes.map((n, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <svg style={{ flexShrink: 0, marginTop: 2 }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 9v4M12 17h.01M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z"/></svg>
                      <span style={{ fontSize: 13, lineHeight: 1.5 }}>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: 48 }} className="callout callout-green">
        <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: 'var(--green-600)' }}>How reservoir depth works</p>
        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>
          The reservoir sits at the bottom of your pot below the substrate. Roots grow down toward it and drink upward through capillary action. The air gap above the water line is where oxygen-feeding roots live. Too much water and those roots suffocate. Too little and the plant dries out between top-ups. This calculator balances both.
        </p>
      </div>

      <style>{`@media (max-width: 700px) { .calc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
