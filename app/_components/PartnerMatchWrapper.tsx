'use client'
import { useState, useEffect, type ReactNode } from 'react'

const STORAGE_KEY = 'sei_specialist_appointment'

interface Appointment { date: string; time: string }

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle className="partner-check-circle" cx="10" cy="10" r="10" fill="#22c55e" />
    <path className="partner-check-path" d="M5.5 10l3 3L14.5 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CalendarConfirmedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path className="partner-appt-check" d="M9 16l2 2 4-4" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const STAT_CARDS = [
  { label: 'Assets Under Management', value: '$425M' },
  { label: 'Client Count', value: '180' },
  { label: 'Current Model', value: 'Independent RIA' },
  { label: 'Practice Structure', value: 'Solo Practice with 2 Support Staff' },
]

const BULLETS = [
  'Preserving independence while gaining institutional support',
  'Maintaining client relationships during transition',
  'Timeline and transition logistics',
  'Tax efficiency for high-net-worth clients',
]

const TAGS = ['Tax-Efficient ETFs', 'Active Management', 'LRM / IPM Funds', 'RIA Channel']

interface Props {
  hero: ReactNode
  rest: ReactNode
  children: ReactNode
}

export default function PartnerMatchWrapper({ hero, rest, children }: Props) {
  const [appointment, setAppointment] = useState<Appointment | null>(null)
  const [dismissed, setDismissed] = useState(false)
  const [dismissing, setDismissing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setAppointment(JSON.parse(stored) as Appointment)
    } catch {}
  }, [])

  const handleDismiss = () => {
    setDismissing(true)
    setTimeout(() => {
      setDismissed(true)
      setDismissing(false)
    }, 420)
  }

  const showPanel = mounted && appointment !== null && !dismissed

  return (
    <>
      {showPanel ? (
        <div className={dismissing ? 'partner-panel partner-panel--exit' : 'partner-panel'}>
          {/* Hello Jennifer Banner */}
          <div className="partner-hello-bar">
            <div className="container">
              <span className="partner-hello-text">Hello, <span className="partner-hello-name">Jennifer</span></span>
            </div>
          </div>

          {/* Matched Partner Card */}
          <section className="partner-match-section">
            <div className="container partner-match-container">
              <button
                className="partner-close-btn"
                onClick={handleDismiss}
                aria-label="Close personalized view"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="partner-match-inner">
                <div className="partner-match-left">
                  <h2 className="partner-match-headline">We&apos;ve matched you with a partner.</h2>
                  <p className="partner-match-body">
                    Based on your browsing session, investment interests, and firm profile, our platform has automatically identified that Stratos Investment Management is best suited to continue this conversation with you.
                  </p>
                  <div className="partner-tags">
                    {TAGS.map(t => <span key={t} className="partner-tag">{t}</span>)}
                  </div>

                  {/* Appointment confirmation card */}
                  <div className="partner-appt-card">
                    <div className="partner-appt-icon">
                      <CalendarConfirmedIcon />
                    </div>
                    <div className="partner-appt-details">
                      <div className="partner-appt-label">Appointment Confirmed</div>
                      <div className="partner-appt-who">Michael Torres &mdash; Senior Business Development Director</div>
                      <div className="partner-appt-when">
                        <strong>{appointment!.date}</strong> at <strong>{appointment!.time}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="partner-match-right">
                  <img
                    src="/journey-2/Trusted/Stratos Investment Management.png"
                    alt="Stratos Investment Management"
                    className="partner-stratos-logo"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Proposal Section */}
          <section className="partner-proposal-section">
            <div className="container">
              <div className="partner-proposal-header">
                <h2 className="partner-proposal-headline">Your Customized Proposal</h2>
                <p className="partner-proposal-sub">
                  We&apos;ve created a tailored proposal that reflects your practice structure, timing preferences, and independence model.
                </p>
              </div>
              <div className="partner-stats-grid">
                {STAT_CARDS.map(s => (
                  <div key={s.label} className="partner-stat-card">
                    <div className="partner-stat-label">{s.label}</div>
                    <div className="partner-stat-value">{s.value}</div>
                  </div>
                ))}
              </div>
              <div className="partner-bullets-grid">
                {BULLETS.map(b => (
                  <div key={b} className="partner-bullet">
                    <CheckIcon />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Build Community Section */}
          <section className="partner-community-section">
            <div className="partner-community-img">
              <img src="/journey-2/Consultation.png" alt="" />
            </div>
            <div className="partner-community-content">
              <h3 className="partner-community-headline">Build community.</h3>
              <p className="partner-community-sub">To learn more about our team, let&apos;s set up a call.</p>
              <button className="partner-community-cta">Book Meeting</button>
            </div>
          </section>
        </div>
      ) : (
        <>
          {hero}
          {mounted && appointment !== null && (
            <div className="partner-toggle-strip">
              <button
                className="partner-toggle-card"
                onClick={() => setDismissed(false)}
              >
                <div className="partner-toggle-left">
                  <span className="partner-toggle-eyebrow">
                    <span className="partner-toggle-eyebrow-dot" />
                    Personalized for you
                  </span>
                  <span className="partner-toggle-headline">We&apos;ve Found Your Partner Match</span>
                  <span className="partner-toggle-body">
                    Based on your profile and browsing, Stratos Investment Management has been identified as your ideal partner. View your full recommendation.
                  </span>
                </div>
                <div className="partner-toggle-cta">
                  View Your Match
                  <span className="partner-toggle-cta-arrow"><ArrowIcon /></span>
                </div>
              </button>
            </div>
          )}
          {rest}
        </>
      )}

      <div className="partner-below">
        {showPanel && (
          <div className={`partner-backdrop${dismissing ? ' partner-backdrop--exit' : ''}`} aria-hidden="true" />
        )}
        {children}
      </div>
    </>
  )
}
