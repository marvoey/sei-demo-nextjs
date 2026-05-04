'use client'
import { useState, useEffect } from 'react'

const DURATION = 5000

const TABS = [
  {
    logo: '/journey-2/trusted/Stratos%20Investment%20Management.png',
    alt: 'Stratos Investment Management',
    tag: 'RIA / Wealth Management',
    headline: 'Stratos Investment Management',
    body: 'Stratos partnered with SEI to build a scalable RIA platform that supports its advisors with integrated technology, streamlined operations, and a flexible investment infrastructure — enabling the firm to grow its practice without sacrificing the personalized service its clients expect.',
    stats: [
      { val: '$8B+', label: 'Assets under advisement' },
      { val: 'Multi-custodial', label: 'Operating model' },
      { val: '10+', label: 'Years in partnership' },
    ],
    cta: 'Consultation with SEI to evaluate',
  },
  {
    logo: '/journey-2/trusted/Diversified.png',
    alt: 'Diversified',
    tag: 'Financial Planning / RIA',
    headline: 'Diversified',
    body: 'Diversified leveraged SEI\'s wealth platform to unify its financial planning and investment management capabilities — giving advisors a single operating environment to deliver comprehensive, goals-based planning at scale across a growing national client base.',
    stats: [
      { val: '$12B+', label: 'Assets under advisement' },
      { val: 'Nationwide', label: 'Advisor network' },
      { val: '15+', label: 'Years in partnership' },
    ],
    cta: 'Consultation with SEI to evaluate',
  },
  {
    logo: '/journey-2/trusted/merit_logo.png',
    alt: 'Merit Financial Advisors',
    tag: 'RIA / Financial Advisory',
    headline: 'Merit Financial Advisors',
    body: 'Merit Financial Advisors partnered with SEI to modernize its operational foundation as the firm scaled through organic growth and acquisitions — integrating technology, compliance infrastructure, and investment management into a unified platform built for enterprise-grade efficiency.',
    stats: [
      { val: '$16B+', label: 'Assets under management' },
      { val: '150+', label: 'Advisors supported' },
      { val: 'Rapid growth', label: 'M&A integration model' },
    ],
    cta: 'Consultation with SEI to evaluate',
  },
  {
    logo: '/journey-2/trusted/Summit%20Wealth%20Group.png',
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
    <section className="trusted trusted-ria section">
      <div className="container">
        <div className="trusted-header">
          <div style={{ color: '#00C4F8', fontSize: '24px', fontStyle: 'normal', fontWeight: 500, lineHeight: '20px', letterSpacing: '1.25px', textTransform: 'uppercase', marginBottom: '14px' }}>
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
