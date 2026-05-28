import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="page-wrap" style={{ padding: '96px 24px', textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--bg-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      </div>
      <h1 className="serif" style={{ fontSize: '1.8rem', color: 'var(--text-1)', marginBottom: 12 }}>Page not found</h1>
      <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 32, lineHeight: 1.65 }}>
        That page does not exist. These cover most of what growers look for.
      </p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/root-rot" className="btn btn-secondary">Root Rot</Link>
        <Link href="/tools" className="btn btn-secondary">Tools</Link>
        <Link href="/leca-vs-pon" className="btn btn-secondary">LECA vs Pon</Link>
      </div>
    </div>
  )
}
