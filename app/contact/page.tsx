'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

// Note: metadata export must be in a server component. See contact/layout.tsx

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xojrrrzb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', subject: '', message: '' }) }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const field = (label: string, key: keyof typeof form, type = 'text', placeholder = '') => (
    <div>
      <label className="field-label">{label}</label>
      <input
        type={type}
        className="input"
        value={form[key]}
        placeholder={placeholder}
        required
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
      />
    </div>
  )

  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <span className="eyebrow">Contact</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Get in touch
        </h1>
        <p className="prose">
          Questions, corrections, or content suggestions are all welcome. If something on the site is wrong, or you have documented experience that contradicts a claim, that is exactly the kind of message that helps.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="contact-grid">
        {/* Form */}
        <div className="card">
          {status === 'sent' ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <h2 className="serif" style={{ fontSize: '1.3rem', color: 'var(--text-1)', marginBottom: 8 }}>Message sent</h2>
              <p style={{ fontSize: 14, color: 'var(--text-3)' }}>We will get back to you within a few days.</p>
              <button onClick={() => setStatus('idle')} className="btn btn-secondary" style={{ marginTop: 20 }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                {field('Your name', 'name', 'text', 'Jane')}
                {field('Email address', 'email', 'email', 'jane@example.com')}
              </div>
              {field('Subject', 'subject', 'text', 'Correction, question, or suggestion')}
              <div>
                <label className="field-label">Message</label>
                <textarea
                  className="input"
                  rows={6}
                  value={form.message}
                  required
                  placeholder="Be as specific as you like. If you are flagging an error, include the page URL and what should be corrected."
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ resize: 'vertical' }}
                />
              </div>
              {status === 'error' && (
                <div className="callout callout-red" style={{ fontSize: 13 }}>
                  Something went wrong. Try again or email us directly.
                </div>
              )}
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ justifyContent: 'center' }}>
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
              <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>
                We use Formspree to handle submissions. Your email is only used to reply.
              </p>
            </form>
          )}
        </div>

        {/* Info panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
              title: 'Corrections',
              body: 'If a number, claim, or recommendation on the site is wrong, tell us. We would rather fix it than have bad advice circulating.',
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>,
              title: 'Content suggestions',
              body: 'If there is a topic, plant, or question the site does not cover that you think it should, let us know.',
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
              title: 'General questions',
              body: 'Questions about semi-hydro that the guides do not answer are also welcome. If enough people ask the same thing, it becomes a guide.',
            },
          ].map((item, i) => (
            <div key={i} className="card-sm" style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-1)', marginBottom: 4 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
