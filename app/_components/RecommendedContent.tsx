'use client'
import { useState, useEffect } from 'react'

const DURATION = 5000

const TABS = [
  {
    label: 'Overview',
    sublabel: 'An introduction to the BD breakaway journey with SEI.',
    video: true,
  },
  {
    label: 'Preparing for Acquisition',
    sublabel: 'Key steps before initiating your acquisition strategy.',
    video: false,
  },
  {
    label: 'Sourcing and Vetting Sellers',
    sublabel: 'How to identify and evaluate potential acquisition targets.',
    video: false,
  },
  {
    label: 'Negotiating the Transaction',
    sublabel: 'Frameworks for structuring a deal that works for both parties.',
    video: false,
  },
  {
    label: 'Closing the Sale',
    sublabel: 'Final steps to complete your transaction and onboard clients.',
    video: false,
  },
]

export default function RecommendedContent() {
  const [active, setActive] = useState(0)
  const [meetOpen, setMeetOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((i: number) => (i + 1) % TABS.length)
    }, DURATION)
    return () => clearTimeout(timer)
  }, [active])

  const tab = TABS[active]

  return (
    <section className="rec-section section">
      <div className="container">
        <div className="rec-eyebrow">Recommended For You</div>
        <h2 className="rec-headline">
          Gain expert insight:{' '}
          <em className="rec-headline-em">{tab.label}</em>
        </h2>

        <div className="rec-layout">
          {/* Sidebar */}
          <div className="rec-sidebar">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                className={`rec-tab${i === active ? ' rec-tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="rec-tab-label">{t.label}</div>
                <div className="rec-tab-sub">{t.sublabel}</div>
              </button>
            ))}
            <div className="rec-sidebar-actions">
              <button
                className="rec-action-link"
                onClick={() => setMeetOpen(true)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                Meet with SEI
              </button>
              <a href="#" className="rec-action-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Buyer&rsquo;s Guide
              </a>
            </div>
          </div>

          {/* Panel */}
          <div className="rec-panel" key={active}>
            {tab.video ? (
              <div className="rec-video-wrap">
                <video
                  className="rec-video"
                  src="/journey-2/Hero-Video.mp4"
                  controls
                  playsInline
                />
              </div>
            ) : (
              <div className="rec-placeholder">
                <div className="rec-placeholder-label">{tab.label}</div>
                <p className="rec-placeholder-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Meet with SEI modal */}
      {meetOpen && (
        <div className="rec-meet-overlay" onClick={() => setMeetOpen(false)}>
          <div className="rec-meet-panel" onClick={e => e.stopPropagation()}>
            <div className="rec-meet-header">
              <span>Meet with SEI</span>
              <button onClick={() => setMeetOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="rec-meet-body">
              <p style={{ fontSize: '14px', color: 'var(--text-500)', marginBottom: '20px', lineHeight: 1.65 }}>
                Connect with an SEI specialist to explore how we can support your BD breakaway journey. Fill out the form below and we&rsquo;ll be in touch shortly.
              </p>
              <form className="rec-meet-form" onSubmit={e => e.preventDefault()}>
                <input className="rec-meet-input" type="text" placeholder="Your Name" required />
                <input className="rec-meet-input" type="email" placeholder="Business Email" required />
                <textarea className="rec-meet-textarea" rows={4} placeholder="Tell us about your situation..." />
                <button className="rec-meet-submit" type="submit">Request a Meeting</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Fixed assistant button */}
      <button className="rec-assistant-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        SEI Assistant &mdash; Ask a question
      </button>
    </section>
  )
}
