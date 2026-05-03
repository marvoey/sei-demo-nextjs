'use client'
import { useState, useEffect } from 'react'

const DURATION = 5000

const TABS = [
  {
    logo: '/summit-wealth-group.png',
    alt: 'Summit Wealth Group',
    tag: 'RIA / Wealth Management',
    headline: 'Summit Wealth Group',
    body: 'To support its evolved RIA operating model, Summit Wealth Group partnered with SEI to launch an integrated wealth platform that brings together technology, operations, and investment infrastructure — allowing the firm to scale efficiently while maintaining flexibility and a high-touch client experience.',
    stats: [
      { val: '$9B+', label: 'Assets under advisement' },
      { val: 'Multi-custodial', label: 'Operating model' },
      { val: '15+', label: 'Years in partnership' },
    ],
    cta: 'Consultation with SEI to evaluate',
  },
  {
    logo: '/first-financial-bank.png',
    alt: 'First Financial Trust',
    tag: 'Banking / Trust Services',
    headline: 'First Financial Trust',
    body: 'First Financial Trust partnered with SEI to modernize its trust and investment management operations — migrating to SEI\'s unified platform to deliver more consistent, scalable service to high-net-worth clients and institutional accounts across its regional footprint.',
    stats: [
      { val: '$2.4B+', label: 'Assets under management' },
      { val: '40+', label: 'Years of partnership' },
      { val: 'Regional', label: 'Multi-state footprint' },
    ],
    cta: 'Consultation with SEI to evaluate',
  },
  {
    logo: '/tcw.png',
    alt: 'TCW Group',
    tag: 'Institutional Asset Management',
    headline: 'TCW Group',
    body: 'TCW leveraged SEI\'s institutional infrastructure to streamline fund administration and investment operations across asset classes — enabling their portfolio management team to focus on generating alpha while SEI handled operational complexity at scale.',
    stats: [
      { val: '$220B+', label: 'Assets under management' },
      { val: 'Global', label: 'Multi-asset operations' },
      { val: '3', label: 'Continents served' },
    ],
    cta: 'Consultation with SEI to evaluate',
  },
  {
    logo: '/kent-state-university.jpg',
    alt: 'Kent State University',
    tag: 'Higher Education / Endowment',
    headline: 'Kent State University',
    body: 'Kent State University\'s endowment partnered with SEI to strengthen investment governance, reduce operational complexity, and align long-term portfolio strategy with institutional objectives — building a sustainable foundation for growth.',
    stats: [
      { val: '$460M+', label: 'Endowment assets managed' },
      { val: '20+', label: 'Years of partnership' },
      { val: 'OCIO', label: 'Outsourced CIO model' },
    ],
    cta: 'Consultation with SEI to evaluate',
  },
]

export default function TrustedByRIA() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((i: number) => (i + 1) % TABS.length)
    }, DURATION)
    return () => clearTimeout(timer)
  }, [active])

  const tab = TABS[active]

  return (
    <section className="trusted section">
      <div className="container">
        <div className="trusted-header">
          <div style={{ color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '13px', fontWeight: 700, marginBottom: '14px' }}>
            Trusted by Leading Financial Institutions
          </div>
          <p className="trusted-header-sub">
            From global asset managers to regional banks and independent advisors, leading firms choose SEI to power their most critical operations.
          </p>
        </div>

        <div className="trusted-tabs">
          {TABS.map((t, i) => (
            <button
              key={t.alt}
              className={`trusted-tab${i === active ? ' trusted-tab--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={t.alt}
              aria-selected={i === active}
            >
              <img src={t.logo} alt={t.alt} className="trusted-tab-img" />
              {i === active && (
                <span
                  className="trusted-tab-progress"
                  style={{ animationDuration: `${DURATION}ms` }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="trusted-panel">
          <div className="trusted-ria-inner" key={active}>
            <div className="trusted-ria-left">
              <div className="trusted-card-tag">{tab.tag}</div>
              <h3 className="trusted-panel-headline">{tab.headline}</h3>
              <p className="trusted-card-body">{tab.body}</p>
              <div className="trusted-ria-stats">
                {tab.stats.map(s => (
                  <div key={s.val} className="trusted-ria-stat">
                    <div className="trusted-stat-val">{s.val}</div>
                    <div className="trusted-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="trusted-cta">
                {tab.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="trusted-ria-video">
              <div className="trusted-ria-video-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
