'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Result = {
  title: string
  desc: string
  href: string
  tag: string
  keywords: string[]
}

const searchIndex: Result[] = [
  // Guides
  { title: 'LECA vs Pon', desc: 'Full comparison: materials, moisture, cost, best plants', href: '/leca-vs-pon', tag: 'Guide', keywords: ['leca', 'pon', 'lechuza', 'compare', 'difference', 'which', 'substrate', 'medium', 'clay', 'zeolite', 'pumice', 'soak'] },
  { title: 'Root Rot Diagnosis', desc: 'Symptom table, five causes, treatment protocol', href: '/root-rot', tag: 'Guide', keywords: ['root rot', 'roots', 'brown', 'mushy', 'smell', 'sulfur', 'dying', 'dead', 'rotting', 'sewage', 'rot', 'black', 'soft'] },
  { title: 'Soil to Semi-Hydro Transition', desc: 'Bare root method, week-by-week timeline, pot comparisons', href: '/transition', tag: 'Guide', keywords: ['transition', 'soil', 'move', 'transfer', 'switch', 'bare root', 'rinse', 'leaf drop', 'leaves dropping', 'pot', 'lechuza', 'naked root', 'diy'] },
  { title: 'Fertilizer and Nutrient Dosing', desc: 'What to use, how much, when to flush', href: '/fertilizer', tag: 'Guide', keywords: ['fertilizer', 'nutrients', 'feeding', 'foliage pro', 'dyna-gro', 'masterblend', 'npk', 'calcium', 'magnesium', 'nitrogen', 'flush', 'dosing', 'ph'] },
  { title: 'Semi-Hydro FAQ', desc: '20 common questions with direct answers', href: '/faq', tag: 'FAQ', keywords: ['faq', 'questions', 'help', 'how to', 'what is', 'semi hydro', 'semi-hydroponics', 'basics', 'beginner'] },

  // Tools
  { title: 'Reservoir Calculator', desc: 'Get the right reservoir depth for your plant and pot', href: '/tools/reservoir', tag: 'Tool', keywords: ['reservoir', 'water level', 'depth', 'how much water', 'empties', 'draining', 'fast', 'calculator', 'size', 'refill', 'dry', 'never drops'] },
  { title: 'Root Rot Checker', desc: 'Answer four questions, get a diagnosis', href: '/tools/root-rot-checker', tag: 'Tool', keywords: ['checker', 'diagnose', 'diagnosis', 'root rot', 'check', 'dying', 'sick', 'help', 'what is wrong', 'mushy', 'smell'] },
  { title: 'Fertilizer Reference Chart', desc: 'Dosing table by plant, with flush schedule', href: '/tools/fertilizer-chart', tag: 'Tool', keywords: ['chart', 'fertilizer', 'dosing', 'how much', 'reference', 'schedule', 'flush', 'table'] },

  // Plants
  { title: 'Alocasia in Semi-Hydro', desc: 'Variety notes, community data, troubleshooting', href: '/plants/alocasia', tag: 'Plant', keywords: ['alocasia', 'frydek', 'regal shield', 'silver dragon', 'cuprea', 'elephant ear', 'velvet', 'corm'] },
  { title: 'Anthurium in Semi-Hydro', desc: 'Salt sensitivity, humidity, velvet vs glossy varieties', href: '/plants/anthurium', tag: 'Plant', keywords: ['anthurium', 'clarinervium', 'crystallinum', 'magnificum', 'velvet', 'glossy', 'cataphyll', 'humidity', 'salt'] },
  { title: 'Philodendron in Semi-Hydro', desc: 'Vining and non-vining types, variety notes', href: '/plants/philodendron', tag: 'Plant', keywords: ['philodendron', 'brasil', 'heartleaf', 'gloriosum', 'micans', 'melanochrysum', 'white wizard', 'white princess', 'vining', 'climbing'] },
  { title: 'Monstera in Semi-Hydro', desc: 'Fenestration, aerial roots, variety notes', href: '/plants/monstera', tag: 'Plant', keywords: ['monstera', 'deliciosa', 'thai constellation', 'adansonii', 'dubia', 'aerial roots', 'fenestration', 'splits', 'holes'] },
  { title: 'Pothos in LECA', desc: 'Best beginner plant, propagation, common problems', href: '/plants/pothos', tag: 'Plant', keywords: ['pothos', 'epipremnum', 'golden', 'marble queen', 'neon', 'manjula', 'cebu blue', 'beginner', 'easy'] },
]

function score(item: Result, query: string): number {
  const q = query.toLowerCase().trim()
  const title = item.title.toLowerCase()
  const desc = item.desc.toLowerCase()
  const keywords = item.keywords.join(' ')

  if (title.includes(q)) return 100
  if (keywords.includes(q)) return 80
  if (desc.includes(q)) return 60

  // Partial word matching
  const words = q.split(' ')
  let partial = 0
  for (const word of words) {
    if (word.length < 2) continue
    if (title.includes(word)) partial += 30
    if (keywords.includes(word)) partial += 20
    if (desc.includes(word)) partial += 10
  }
  return partial
}

const tagColors: Record<string, string> = {
  Guide: 'var(--accent)',
  Tool:  '#d97706',
  Plant: '#7c3aed',
  FAQ:   '#0891b2',
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const results = query.trim().length < 2 ? [] : searchIndex
    .map(item => ({ item, score: score(item, query) }))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(r => r.item)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && results.length > 0) {
      router.push(results[0].href)
      setOpen(false)
      setQuery('')
    }
    if (e.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  const handleSelect = (href: string) => {
    router.push(href)
    setOpen(false)
    setQuery('')
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', maxWidth: 520 }}>
      {/* Input */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.09)',
        border: `1.5px solid ${focused ? 'rgba(90,170,90,0.6)' : 'rgba(255,255,255,0.14)'}`,
        transition: 'border-color 0.15s, background 0.15s',
        backdropFilter: 'blur(8px)',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(232,240,227,0.5)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => { setFocused(true); setOpen(true) }}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKey}
          placeholder="Search guides, tools, plants..."
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            fontSize: 15, color: '#e8f0e3', fontFamily: 'inherit',
            caretColor: '#5aaa5a',
          }}
          aria-label="Search PonPlants"
          aria-expanded={open && results.length > 0}
          aria-autocomplete="list"
          role="combobox"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus() }}
            aria-label="Clear search"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, color: 'rgba(232,240,227,0.4)', display: 'flex', alignItems: 'center' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        )}
        <kbd style={{
          fontSize: 11, padding: '2px 6px', borderRadius: 5,
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
          color: 'rgba(232,240,227,0.35)', fontFamily: 'Geist Mono, monospace',
          flexShrink: 0,
        }}>⏎</kbd>
      </div>

      {/* Results dropdown */}
      {open && results.length > 0 && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          overflow: 'hidden',
          zIndex: 200,
        }} role="listbox">
          {results.map((r, i) => (
            <button
              key={i}
              role="option"
              onClick={() => handleSelect(r.href)}
              style={{
                width: '100%', display: 'flex', gap: 12, alignItems: 'center',
                padding: '12px 16px', background: 'transparent', border: 'none',
                cursor: 'pointer', textAlign: 'left', borderBottom: i < results.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: `${tagColors[r.tag]}18`,
                border: `1px solid ${tagColors[r.tag]}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {r.tag === 'Guide' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={tagColors[r.tag]} strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>}
                {r.tag === 'Tool'  && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={tagColors[r.tag]} strokeWidth="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>}
                {r.tag === 'Plant' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={tagColors[r.tag]} strokeWidth="2.5"><path d="M12 22V12"/><path d="M12 12C12 7 9 4 5 3"/><path d="M12 12c0-5 3-8 7-9"/></svg>}
                {r.tag === 'FAQ'   && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={tagColors[r.tag]} strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-1)', margin: 0, marginBottom: 2 }}>{r.title}</p>
                <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.desc}</p>
              </div>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                color: tagColors[r.tag], flexShrink: 0,
                padding: '2px 7px', borderRadius: 99,
                background: `${tagColors[r.tag]}15`,
              }}>{r.tag}</span>
            </button>
          ))}
        </div>
      )}

      {/* No results */}
      {open && query.trim().length >= 2 && results.length === 0 && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 14, padding: '16px 18px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)', zIndex: 200,
        }}>
          <p style={{ fontSize: 14, color: 'var(--text-4)', margin: 0, textAlign: 'center' }}>
            Nothing found for <strong style={{ color: 'var(--text-2)' }}>&ldquo;{query}&rdquo;</strong>
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-4)', margin: '6px 0 0', textAlign: 'center' }}>
            Try <a href="/faq" style={{ color: 'var(--accent)', textDecoration: 'none' }}>browsing the FAQ</a> or <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'none' }}>asking a question</a>.
          </p>
        </div>
      )}
    </div>
  )
}
