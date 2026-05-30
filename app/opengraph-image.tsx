import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'PonPlants: Semi-Hydro Troubleshooting'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          background: 'linear-gradient(140deg, #080d07 0%, #0c160a 55%, #0a1108 100%)',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,139,61,0.22) 0%, transparent 70%)',
        }} />

        {/* Grid lines, decorative */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(61,139,61,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(61,139,61,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: '#3d8b3d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 22V12"/>
              <path d="M12 12C12 7 9 4 5 3"/>
              <path d="M12 12c0-5 3-8 7-9"/>
              <path d="M5 19c2-3 4-5 7-7"/>
            </svg>
          </div>
          <span style={{ color: '#e8f0e3', fontSize: 24, fontWeight: 400, letterSpacing: '-0.02em' }}>PonPlants</span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ color: '#e8f0e3', fontSize: 64, fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Your roots, your reservoir,
          </span>
          <span style={{ color: '#5aaa5a', fontSize: 64, fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            your questions.
          </span>
        </div>

        {/* Tag strip */}
        <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
          {['LECA vs Pon', 'Root Rot', 'Reservoir Calculator', 'Soil Transitions', 'Fertilizer'].map(tag => (
            <div key={tag} style={{
              padding: '7px 16px', borderRadius: 99,
              background: 'rgba(61,139,61,0.12)',
              border: '1px solid rgba(61,139,61,0.22)',
              color: '#5aaa5a', fontSize: 16, fontWeight: 600,
            }}>{tag}</div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
