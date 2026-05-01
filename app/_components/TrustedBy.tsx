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
      { val: '$9B+', label: 'Assets under advisement supported by SEI\'s integrated wealth infrastructure' },
      { val: 'Multi-custodial', label: 'Operating model powered by a single platform across technology, operations, and investments' },
    ],
  },
  {
    logo: '/first-financial-bank.png',
    alt: 'First Financial Trust',
    tag: 'Banking / Trust Services',
    headline: 'First Financial Trust',
    body: 'First Financial Trust partnered with SEI to modernize its trust and investment management operations — migrating to SEI\'s unified platform to deliver more consistent, scalable service to high-net-worth clients and institutional accounts across its regional footprint.',
    stats: [
      { val: '$2.4B+', label: 'Assets under management on SEI\'s integrated trust and investment platform' },
      { val: '40+', label: 'Years of trusted partnership with SEI across trust and investment operations' },
    ],
  },
  {
    logo: '/tcw.png',
    alt: 'TCW Group',
    tag: 'Institutional Asset Management',
    headline: 'TCW Group',
    body: 'TCW leveraged SEI\'s institutional infrastructure to streamline fund administration and investment operations across asset classes — enabling their portfolio management team to focus on generating alpha while SEI handled operational complexity at scale.',
    stats: [
      { val: '$220B+', label: 'Assets under management supported by SEI\'s institutional operations platform' },
      { val: 'Global', label: 'Multi-asset operations spanning equities, fixed income, and alternatives worldwide' },
    ],
  },
  {
    logo: '/kent-state-university.jpg',
    alt: 'Kent State University',
    tag: 'Higher Education / Endowment',
    headline: 'Kent State University',
    body: 'Kent State University\'s endowment partnered with SEI to strengthen investment governance, reduce operational complexity, and align long-term portfolio strategy with institutional objectives — building a sustainable foundation for growth.',
    stats: [
      { val: '$460M+', label: 'Endowment assets managed through SEI\'s outsourced CIO model' },
      { val: '20+', label: 'Years of partnership between Kent State and SEI\'s institutional investment team' },
    ],
  },
]

export default function TrustedBy() {
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
          <div className="section-eyebrow">Proof in Practice</div>
          <p className="trusted-header-sub">See the stories&mdash;and the numbers&mdash;that show what&rsquo;s possible with SEI as your trusted strategic partner.</p>
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
          <div className="trusted-panel-inner" key={active}>
            <div className="trusted-panel-main">
              <div className="trusted-card-tag">{tab.tag}</div>
              <h3 className="trusted-panel-headline">{tab.headline}</h3>
              <p className="trusted-card-body">{tab.body}</p>
              <a href="#" className="trusted-cta">
                Read the full case study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="trusted-panel-stats">
              {tab.stats.map(s => (
                <div key={s.val} className="trusted-stat">
                  <div className="trusted-stat-val">{s.val}</div>
                  <div className="trusted-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
