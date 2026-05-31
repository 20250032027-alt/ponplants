'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const guides = [
  { href: '/leca-vs-pon', label: 'LECA vs Pon' },
  { href: '/root-rot',    label: 'Root Rot' },
  { href: '/transition',  label: 'Soil Transition' },
  { href: '/fertilizer',  label: 'Fertilizer' },
  { href: '/faq',         label: 'FAQ' },
]

const plants = [
  { href: '/plants/alocasia', label: 'Alocasia', sub: '54 posts' },
  { href: '/plants/pothos', label: 'Pothos', sub: 'LECA' },
  { href: '/plants/monstera', label: 'Monstera', sub: 'Pon' },
]

const tools = [
  { href: '/tools/reservoir', label: 'Reservoir Calculator' },
  { href: '/tools/root-rot-checker', label: 'Root Rot Checker' },
  { href: '/tools/fertilizer-chart', label: 'Fertilizer Chart' },
]

function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark')
  }, [])
  const toggle = () => {
    const next = dark ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setDark(!dark)
  }
  return (
    <button onClick={toggle} aria-label="Toggle dark mode" style={{
      width: 36, height: 36, borderRadius: 8,
      border: '1px solid var(--border)',
      background: 'var(--surface-2)',
      cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--text-3)',
      flexShrink: 0,
    }}>
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  )
}

function Dropdown({ label, items }: { label: string; items: { href: string; label: string; sub?: string }[] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)} style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        padding: '6px 10px', borderRadius: 8,
        border: 'none', background: 'transparent', cursor: 'pointer',
        fontSize: 14, fontWeight: 500, color: 'var(--text-2)',
        fontFamily: 'inherit',
      }}>
        {label}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0,
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 12, padding: 6, minWidth: 200,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          zIndex: 100,
        }}>
          {items.map(i => (
            <Link key={i.href} href={i.href} onClick={() => setOpen(false)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '9px 12px', borderRadius: 8, textDecoration: 'none',
              color: 'var(--text-1)', fontSize: 14, fontWeight: 500,
              transition: 'background 0.12s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {i.label}
              {i.sub && <span className="badge badge-green" style={{ fontSize: 10 }}>{i.sub}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(var(--bg-rgb, 248,249,246), 0.92)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'var(--bg)',
    }}>
      <div className="page-wrap" style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 9,
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 22V12"/><path d="M12 12C12 7 9 4 5 3"/><path d="M12 12c0-5 3-8 7-9"/><path d="M5 19c2-3 4-5 7-7"/>
            </svg>
          </div>
          <span className="serif" style={{ fontWeight: 400, fontSize: 19, color: 'var(--text-1)', letterSpacing: '-0.01em' }}>PonPlants</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-only">
          {guides.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: '6px 10px', borderRadius: 8, textDecoration: 'none',
              fontSize: 14, fontWeight: 500, color: 'var(--text-2)', transition: 'color 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
            >{l.label}</Link>
          ))}
          <Dropdown label="By Plant" items={plants} />
          <Dropdown label="Tools" items={tools} />
          <div style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 8px' }} />
          <Link href="/about" style={{
            padding: '6px 10px', borderRadius: 8, textDecoration: 'none',
            fontSize: 14, fontWeight: 500, color: 'var(--text-2)', transition: 'color 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
          >About</Link>
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="mobile-only">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Menu" style={{
            width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)',
            background: 'var(--surface-2)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {open ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></> : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '12px 16px 20px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-4)', padding: '4px 8px', marginBottom: 4 }}>Guides</p>
          {guides.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '10px 8px', borderRadius: 8, textDecoration: 'none',
              fontSize: 15, fontWeight: 500, color: 'var(--text-1)',
            }}>{l.label}</Link>
          ))}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-4)', padding: '12px 8px 4px', marginTop: 4 }}>By Plant</p>
          {plants.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 8px', borderRadius: 8, textDecoration: 'none',
              fontSize: 15, fontWeight: 500, color: 'var(--text-1)',
            }}>
              {l.label}
              <span className="badge badge-green">{l.sub}</span>
            </Link>
          ))}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-4)', padding: '12px 8px 4px', marginTop: 4 }}>Tools</p>
          {tools.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '10px 8px', borderRadius: 8, textDecoration: 'none',
              fontSize: 15, fontWeight: 500, color: 'var(--text-1)',
            }}>{l.label}</Link>
          ))}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-4)', padding: '12px 8px 4px', marginTop: 4 }}>More</p>
          {[{ href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '10px 8px', borderRadius: 8, textDecoration: 'none',
              fontSize: 15, fontWeight: 500, color: 'var(--text-1)',
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        .desktop-only { display: flex !important; }
        .mobile-only  { display: none  !important; }
        @media (max-width: 768px) {
          .desktop-only { display: none  !important; }
          .mobile-only  { display: flex  !important; }
        }
      `}</style>
    </header>
  )
}
