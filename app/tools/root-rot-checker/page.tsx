'use client'

import Link from 'next/link'
import { useState } from 'react'

type Severity = 'critical' | 'moderate' | 'good'

type Step = {
  id: string
  question: string
  detail: string
  yesLabel: string
  noLabel: string
  yesResult?: { diagnosis: string; severity: Severity; steps: string[] }
  noResult?:  { diagnosis: string; severity: Severity; steps: string[] }
}

const steps: Step[] = [
  {
    id: 'smell',
    question: 'Do the roots smell like sulfur or sewage?',
    detail: 'Pull the plant and take a real sniff at the roots. A healthy root system smells earthy or neutral. Anaerobic rot has a strong, unmistakable sewage odor.',
    yesLabel: 'Yes, strong bad smell',
    noLabel: 'No smell or earthy',
    yesResult: {
      diagnosis: 'Active anaerobic rot confirmed',
      severity: 'critical',
      steps: [
        'Remove the plant from the pot immediately. Speed matters here.',
        'Rinse every root under room-temperature water until the substrate is completely gone.',
        'Cut back to healthy white tissue. Sterilize scissors with isopropyl alcohol between each cut.',
        'Mix 1 part 3% hydrogen peroxide with 3 parts water. Soak the roots for 5 minutes.',
        'Set the plant aside for 20 to 30 minutes to let cut surfaces dry slightly.',
        'Repot in fresh substrate in a clean pot. Do not reuse old substrate or the same pot without sterilizing.',
        'Maintain a 2 to 4cm air gap between your water line and the base of the substrate going forward.',
      ],
    },
  },
  {
    id: 'texture',
    question: 'Are any roots mushy or hollow when squeezed?',
    detail: 'Healthy roots are firm when you press them. A mushy root collapses under light pressure. A hollow root feels empty inside. Either indicates active rot.',
    yesLabel: 'Yes, some are mushy',
    noLabel: 'No, all feel firm',
    yesResult: {
      diagnosis: 'Mid-stage root rot',
      severity: 'critical',
      steps: [
        'Trim every mushy or hollow root back to firm, white tissue.',
        'Check the stem base for soft spots. If you find any, the rot has spread. Treat aggressively.',
        'Treat with diluted hydrogen peroxide as above.',
        'Repot in clean, fresh substrate with correct reservoir gap.',
        'Hold off on fertilizer until new white roots appear, usually 2 to 3 weeks.',
      ],
    },
  },
  {
    id: 'reservoir',
    question: 'Has the reservoir barely moved in 5 or more days?',
    detail: 'A plant with a functioning root system drinks consistently. If the water line has not dropped noticeably in 5 days, the roots are not doing their job.',
    yesLabel: 'Yes, barely moved',
    noLabel: 'No, it drops regularly',
    yesResult: {
      diagnosis: 'Root dysfunction: roots not drinking',
      severity: 'moderate',
      steps: [
        'Pull the plant and inspect for root congestion. Tightly packed roots in a small pot create an anaerobic zone inside the mass.',
        'Dump and refresh the reservoir water fully. Stagnant water goes anaerobic quickly.',
        'Check the pH of your water. Outside 5.5 to 6.5, roots stop drinking even when healthy.',
        'Confirm the air gap above the water line is at least 2cm.',
        'If roots are congested, repot into a vessel one size larger.',
      ],
    },
  },
  {
    id: 'wilting',
    question: 'Are leaves wilting despite the reservoir being full?',
    detail: 'Wilting with a full reservoir is a strong signal that roots cannot transport water to the plant. This happens when roots are damaged, congested, or salt-burned.',
    yesLabel: 'Yes, wilting with water present',
    noLabel: 'No, leaves look fine',
    yesResult: {
      diagnosis: 'Root function compromised',
      severity: 'moderate',
      steps: [
        'Pull and inspect the roots closely. Look for firm-but-brown roots, which may indicate salt burn rather than rot.',
        'If salt crust is visible on the substrate, flush immediately with plain pH-adjusted water.',
        'Check that your fertilizer is hydroponic-grade with all 16 nutrients. Soil fertilizers cause deficiencies that mimic root problems.',
        'Check for root congestion and repot if the mass is tightly packed.',
      ],
    },
    noResult: {
      diagnosis: 'No active root rot detected',
      severity: 'good',
      steps: [
        'Your plant appears stable based on these indicators.',
        'If you recently transitioned from soil, some leaf drop is normal for up to 4 weeks. It is not a sign of rot.',
        'Monitor the reservoir weekly. A plant that drinks consistently and has no smell is in good shape.',
        'Flush with plain water every 4 to 6 weeks to prevent salt buildup.',
      ],
    },
  },
]

const severityConfig = {
  critical: { bg: 'var(--red-50)',              border: 'rgba(239,68,68,0.25)',   text: '#991b1b', badge: 'Act now',    darkBg: 'rgba(239,68,68,0.08)', darkText: '#fca5a5' },
  moderate: { bg: 'rgba(245,158,11,0.08)',       border: 'rgba(245,158,11,0.25)',  text: '#92400e', badge: 'Check it',  darkBg: 'rgba(245,158,11,0.08)', darkText: '#fbbf24' },
  good:     { bg: 'var(--accent-bg)',            border: 'var(--accent-border)',   text: 'var(--green-600)', badge: 'All clear', darkBg: 'rgba(61,139,61,0.1)', darkText: 'var(--green-400)' },
}

export default function RootRotCheckerPage() {
  const [current, setCurrent] = useState(0)
  const [result, setResult]   = useState<null | { diagnosis: string; severity: Severity; steps: string[] }>(null)
  const [history, setHistory] = useState<string[]>([])

  const step = steps[current]

  const answer = (choice: 'yes' | 'no') => {
    setHistory([...history, choice])
    const res = choice === 'yes' ? step.yesResult : step.noResult
    if (res) { setResult(res); return }
    if (current + 1 < steps.length) setCurrent(current + 1)
  }

  const reset = () => { setCurrent(0); setResult(null); setHistory([]) }

  const cfg = result ? severityConfig[result.severity] : null

  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <Link href="/tools" className="btn btn-secondary" style={{ marginBottom: 28, padding: '7px 14px', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All tools
        </Link>
        <span className="eyebrow">Tool</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Root Rot Checker
        </h1>
        <p className="prose">
          Answer four questions about your plant. The checker works through the most reliable indicators in order of severity, starting with the ones that confirm rot fastest.
        </p>
      </div>

      <div style={{ maxWidth: 680 }}>
        {!result ? (
          <div>
            {/* Progress bar */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 36 }}>
              {steps.map((_, i) => (
                <div key={i} style={{
                  height: 4, flex: 1, borderRadius: 99,
                  background: i < current ? 'var(--accent)' : i === current ? 'var(--green-200)' : 'var(--border)',
                  transition: 'background 0.3s',
                }} />
              ))}
            </div>

            <div className="card" style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span className="badge badge-green">Check {current + 1} of {steps.length}</span>
                {history.length > 0 && (
                  <button onClick={reset} style={{
                    fontSize: 12, color: 'var(--text-4)', background: 'none', border: 'none',
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}>Start over</button>
                )}
              </div>

              <h2 className="serif" style={{ fontSize: '1.35rem', color: 'var(--text-1)', marginBottom: 10, lineHeight: 1.3 }}>
                {step.question}
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.65, marginBottom: 28 }}>
                {step.detail}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <button onClick={() => answer('yes')} className="btn" style={{
                  background: 'var(--red-50)', color: '#991b1b',
                  border: '1px solid rgba(239,68,68,0.25)',
                  justifyContent: 'center', padding: '13px 20px',
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
                  {step.yesLabel}
                </button>
                <button onClick={() => answer('no')} className="btn btn-secondary" style={{ justifyContent: 'center', padding: '13px 20px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  {step.noLabel}
                </button>
              </div>
            </div>

            <p style={{ fontSize: 12, color: 'var(--text-4)', textAlign: 'center' }}>
              Pull the plant if you need to. Inspecting the roots is always the most reliable answer.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ padding: '32px', borderRadius: 20, background: cfg!.bg, border: `1.5px solid ${cfg!.border}`, marginBottom: 20 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
                <span className="badge" style={{
                  background: cfg!.border, color: cfg!.text,
                  border: 'none', fontSize: 11,
                }}>{cfg!.badge}</span>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: cfg!.text, margin: 0 }}>
                  {result.diagnosis}
                </h2>
              </div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: cfg!.text, marginBottom: 14, opacity: 0.75 }}>
                What to do
              </p>
              <ol className="step-list">
                {result.steps.map((s, i) => (
                  <li key={i} className="step-item">
                    <div className="step-num" style={{ background: result.severity === 'good' ? 'var(--accent)' : result.severity === 'critical' ? '#dc2626' : '#d97706' }}>{i + 1}</div>
                    <span className="step-text" style={{ color: cfg!.text }}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={reset} className="btn btn-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                Check another plant
              </button>
              {result.severity !== 'good' && (
                <Link href="/root-rot" className="btn btn-primary">
                  Read the full root rot guide
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
