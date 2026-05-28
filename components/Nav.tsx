'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const navLinks = [
  { href: '/leca-vs-pon', label: 'LECA vs Pon' },
  { href: '/root-rot', label: 'Root Rot' },
  { href: '/transition', label: 'Soil Transition' },
  { href: '/fertilizer', label: 'Fertilizer' },
]

const plantLinks = [
  { href: '/plants/alocasia', label: 'Alocasia', tag: '54 posts' },
  { href: '/plants/pothos', label: 'Pothos', tag: 'LECA' },
  { href: '/plants/monstera', label: 'Monstera', tag: 'Pon' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [plantsOpen, setPlantsOpen] = useState(false)
  const plantsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (plantsRef.current && !plantsRef.current.contains(e.target as Node)) {
        setPlantsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const linkBase: React.CSSProperties = {
    fontSize: 14, fontWeight: 500, color: '#57534e',
    textDecoration: 'none', padding: '6px 10px',
    borderRadius: 8, transition: 'color 0.15s',
    display: 'inline-block',
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: 'rgba(250,250,248,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e7e3dc',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            backgroundColor: '#4a7c3f',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22V12"/>
              <path d="M12 12C12 7 9 4 5 3"/>
              <path d="M12 12c0-5 3-8 7-9"/>
              <path d="M5 19c2-3 4-5 7-7"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 18, color: '#1c1a16' }}>
            PonPlants
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={linkBase}
              onMouseEnter={e => (e.currentTarget.style.color = '#4a7c3f')}
              onMouseLeave={e => (e.currentTarget.style.color = '#57534e')}>
              {l.label}
            </Link>
          ))}

          {/* Plants dropdown */}
          <div ref={plantsRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setPlantsOpen(!plantsOpen)}
              style={{ ...linkBase, border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#4a7c3f')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#57534e')}
            >
              By Plant
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: plantsOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            {plantsOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                backgroundColor: '#fafaf8', border: '1px solid #e7e3dc',
                borderRadius: 14, padding: '8px', minWidth: 200,
                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                zIndex: 100,
              }}>
                {plantLinks.map(p => (
                  <Link key={p.href} href={p.href}
                    onClick={() => setPlantsOpen(false)}
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 14px', borderRadius: 8, transition: 'background 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f3f0eb')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: '#1c1a16' }}>{p.label}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#4a7c3f', backgroundColor: '#f0fdf4', padding: '2px 8px', borderRadius: 999 }}>{p.tag}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/tools" style={{
            marginLeft: 12,
            padding: '9px 18px', borderRadius: 10,
            backgroundColor: '#4a7c3f', color: '#fff',
            fontSize: 14, fontWeight: 600, textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Tools
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer', padding: 6, color: '#57534e', display: 'none' }}
          aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid #e7e3dc', backgroundColor: '#fafaf8', padding: '16px 24px 20px' }} className="mobile-drawer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ padding: '11px 12px', borderRadius: 10, fontSize: 15, fontWeight: 500, color: '#1c1a16', textDecoration: 'none', display: 'block' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid #e7e3dc', marginTop: 8, paddingTop: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#a8a29e', padding: '4px 12px', marginBottom: 4 }}>By Plant</p>
              {plantLinks.map(p => (
                <Link key={p.href} href={p.href} onClick={() => setMenuOpen(false)}
                  style={{ padding: '11px 12px', borderRadius: 10, fontSize: 15, fontWeight: 500, color: '#1c1a16', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {p.label}
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#4a7c3f', backgroundColor: '#f0fdf4', padding: '2px 8px', borderRadius: 999 }}>{p.tag}</span>
                </Link>
              ))}
            </div>
            <Link href="/tools" onClick={() => setMenuOpen(false)}
              style={{ marginTop: 10, display: 'block', padding: '12px 16px', borderRadius: 12, backgroundColor: '#4a7c3f', color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none', textAlign: 'center' }}>
              Tools Reservoir Calculator
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
