import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}>
      <div style={{
        width: 64, height: 64, borderRadius: 18, backgroundColor: '#f3f0eb',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 32px',
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#78716c" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4M12 16h.01"/>
        </svg>
      </div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#1c1a16', marginBottom: 14 }}>
        Page not found
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: '#78716c', marginBottom: 36 }}>
        That page does not exist. The guides below cover most of what growers search for.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ padding: '11px 22px', borderRadius: 10, backgroundColor: '#4a7c3f', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Home</Link>
        <Link href="/root-rot" style={{ padding: '11px 22px', borderRadius: 10, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Root Rot</Link>
        <Link href="/tools" style={{ padding: '11px 22px', borderRadius: 10, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Tools</Link>
        <Link href="/leca-vs-pon" style={{ padding: '11px 22px', borderRadius: 10, backgroundColor: '#f7f4f0', border: '1px solid #e8e4de', color: '#1c1a16', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>LECA vs Pon</Link>
      </div>
    </div>
  )
}
