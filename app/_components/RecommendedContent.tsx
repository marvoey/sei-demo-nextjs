'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const DURATION = 10000

const TABS = [
  { label: 'Overview', sublabel: 'An introduction to the BD breakaway journey with SEI.', video: true },
  { label: 'Preparing for Acquisition', sublabel: 'Key steps before initiating your acquisition strategy.', video: false },
  { label: 'Sourcing and Vetting Sellers', sublabel: 'How to identify and evaluate potential acquisition targets.', video: false },
  { label: 'Negotiating the Transaction', sublabel: 'Frameworks for structuring a deal that works for both parties.', video: false },
  { label: 'Closing the Sale', sublabel: 'Final steps to complete your transaction and onboard clients.', video: false },
]

const MATCH_PILLS = ['RIA Channel', 'LRM / IPM Funds', 'Tax-Efficient ETFs', 'Active Management']

const WHY_MATCHED = [
  'Specializes in ETF solutions for RIA practices',
  'Expertise in tax-efficient portfolio construction',
  'Covers firms with AUM $250M–$2B',
  'Average response time under 2 hours',
]

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM',
]
const AVAILABLE_TIMES = new Set(['10:00 AM', '1:30 PM'])

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']
const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const DAY_NAMES_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const BOOKING_STEPS = ['Advisor', 'Date & Time', 'Your Details', 'Confirm']
const STORAGE_KEY = 'sei_specialist_appointment'

interface Appointment { date: string; time: string }

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDay(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function RecommendedContent() {
  const [active, setActive] = useState(0)
  const [meetOpen, setMeetOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [bookingStep, setBookingStep] = useState(2)
  const [calMonth, setCalMonth] = useState({ year: 2026, month: 4 })
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookedAppointment, setBookedAppointment] = useState<Appointment | null>(() => {
    if (typeof window === 'undefined') return null
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? (JSON.parse(stored) as Appointment) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (meetOpen) return
    const timer = setTimeout(() => {
      setActive((i: number) => (i + 1) % TABS.length)
    }, DURATION)
    return () => clearTimeout(timer)
  }, [active, meetOpen])

  const tab = TABS[active]

  const daysInMonth = getDaysInMonth(calMonth.year, calMonth.month)
  const firstDay = getFirstDay(calMonth.year, calMonth.month)
  const calendarCells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) calendarCells.push(null)
  for (let i = 1; i <= daysInMonth; i++) calendarCells.push(i)

  const selectedDayLabel = selectedDate
    ? `${DAY_NAMES_FULL[new Date(calMonth.year, calMonth.month, selectedDate).getDay()]}, ${MONTH_NAMES[calMonth.month]} ${selectedDate}, ${calMonth.year}`
    : null

  function handleTabClick(i: number) {
    setActive(i)
    setMeetOpen(false)
  }

  function openBooking() {
    setBookingStep(2)
    setSelectedDate(null)
    setSelectedTime(null)
    setBookingOpen(true)
  }

  function prevMonth() {
    setCalMonth(m => m.month === 0 ? { year: m.year - 1, month: 11 } : { ...m, month: m.month - 1 })
    setSelectedDate(null)
  }

  function nextMonth() {
    setCalMonth(m => m.month === 11 ? { year: m.year + 1, month: 0 } : { ...m, month: m.month + 1 })
    setSelectedDate(null)
  }

  function handleContinue() {
    if (bookingStep === 3 && selectedDayLabel && selectedTime) {
      const appt: Appointment = { date: selectedDayLabel, time: selectedTime }
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appt)) } catch {}
      setBookedAppointment(appt)
    }
    setBookingStep(s => s + 1)
  }

  return (
    <section className="rec-section section">
      <div className="container">
        <div className="rec-eyebrow">Recommended For You</div>

        <div className="rec-layout">
          <div className="rec-sidebar">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                className={`rec-tab${i === active && !meetOpen ? ' rec-tab--active' : ''}`}
                onClick={() => handleTabClick(i)}
              >
                <div className="rec-tab-label">{t.label}</div>
                <div className="rec-tab-sub">{t.sublabel}</div>
                {i === active && !meetOpen && (
                  <span className="rec-tab-progress" key={active} style={{ animationDuration: `${DURATION}ms` }} />
                )}
              </button>
            ))}
            <div className="rec-sidebar-actions">
              <button
                className={`rec-action-link${meetOpen ? ' rec-action-link--meet-active' : ''}`}
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

          <div className="rec-panel" key={meetOpen ? 'meet' : active}>
            {meetOpen ? (
              <div className="rec-specialist">
                <h2 className="rec-panel-headline">We&rsquo;ve matched you with a <em className="rec-headline-em">specialist.</em></h2>
                <p className="rec-specialist-intro">
                  Based on your session, interests, and firm profile, our platform has automatically identified the SEI business development director best suited to continue this conversation with you.
                </p>
                <div className="rec-specialist-pills">
                  {MATCH_PILLS.map(p => <span key={p} className="rec-specialist-pill">{p}</span>)}
                </div>
                {!bookedAppointment && (
                  <button className="rec-schedule-btn" onClick={openBooking}>
                    Schedule a Conversation
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </button>
                )}
                <div className="rec-specialist-card">
                  <div className="rec-specialist-card-top">
                    <div className="rec-specialist-left">
                      <div className="rec-specialist-photo-wrap">
                        <Image
                          src="/journey-2/Schedule/Image%20(Michael%20Torres).png"
                          alt="Michael Torres"
                          width={64}
                          height={64}
                          className="rec-specialist-photo"
                        />
                        <span className="rec-specialist-status" />
                      </div>
                      <div className="rec-specialist-info">
                        <div className="rec-specialist-name">Michael Torres</div>
                        <div className="rec-specialist-title">Senior Business Development Director</div>
                        <div className="rec-specialist-loc">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          Northeast Region · SEI Investments
                        </div>
                      </div>
                    </div>
                    <div className="rec-specialist-right">
                      <div className="rec-specialist-why-label">WHY YOU&rsquo;RE MATCHED</div>
                      {WHY_MATCHED.map(item => (
                        <div key={item} className="rec-specialist-why-item">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  {bookedAppointment ? (
                    <div className="rec-specialist-confirmed">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>
                        Appointment confirmed with Michael Torres &mdash;{' '}
                        <strong>{bookedAppointment.date}</strong> at <strong>{bookedAppointment.time}</strong>
                      </span>
                    </div>
                  ) : (
                    <div className="rec-specialist-avail">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      Next available: <strong>Tomorrow, 10:00 AM</strong>
                      <button className="rec-specialist-book" onClick={openBooking}>BOOK →</button>
                    </div>
                  )}
                </div>
              </div>
            ) : tab.video ? (
              <div className="rec-video-wrap">
                <video className="rec-video" src="/journey-2/Hero-Video.mp4" controls playsInline />
              </div>
            ) : (
              <div className="rec-placeholder">
                <h2 className="rec-panel-headline">Gain expert insight: <em className="rec-headline-em">{tab.label}</em></h2>
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

      {bookingOpen && (
        <div className="rec-booking-overlay" onClick={() => setBookingOpen(false)}>
          <div className="rec-booking-modal" onClick={e => e.stopPropagation()}>
            <div className="rec-booking-header">
              <h3 className="rec-booking-title">Connect with an SEI Advisor</h3>
              <button className="rec-booking-close" onClick={() => setBookingOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="rec-booking-steps">
              {BOOKING_STEPS.map((label, i) => {
                const stepNum = i + 1
                const done = stepNum < bookingStep
                const isActive = stepNum === bookingStep
                return (
                  <div key={label} className="rec-booking-step-wrap">
                    <div className={`rec-booking-step-circle${done ? ' rec-booking-step-circle--done' : isActive ? ' rec-booking-step-circle--active' : ''}`}>
                      {done ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : stepNum}
                    </div>
                    <div className={`rec-booking-step-label${isActive ? ' rec-booking-step-label--active' : ''}`}>{label}</div>
                    {i < BOOKING_STEPS.length - 1 && <div className="rec-booking-step-line" />}
                  </div>
                )
              })}
            </div>

            {bookingStep === 2 && (
              <div className="rec-booking-body">
                <div className="rec-booking-cal-col">
                  <div className="rec-booking-col-label">Select a Date</div>
                  <div className="rec-booking-cal-header">
                    <button className="rec-booking-nav" onClick={prevMonth}>‹</button>
                    <span className="rec-booking-month-label">{MONTH_NAMES[calMonth.month]} {calMonth.year}</span>
                    <button className="rec-booking-nav" onClick={nextMonth}>›</button>
                  </div>
                  <div className="rec-booking-day-names">
                    {DAY_NAMES.map(d => <div key={d} className="rec-booking-day-name">{d}</div>)}
                  </div>
                  <div className="rec-booking-cal-grid">
                    {calendarCells.map((day, idx) => (
                      <button
                        key={idx}
                        className={`rec-booking-day${day === null ? ' rec-booking-day--empty' : ''}${day === selectedDate ? ' rec-booking-day--selected' : ''}`}
                        disabled={day === null}
                        onClick={() => day && setSelectedDate(day)}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  {selectedDayLabel && (
                    <div className="rec-booking-date-label">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {selectedDayLabel}
                    </div>
                  )}
                </div>
                <div className="rec-booking-time-col">
                  <div className="rec-booking-col-label">
                    Select a Time <span className="rec-booking-tz">EST</span>
                  </div>
                  <div className="rec-booking-time-grid">
                    {TIME_SLOTS.map(t => {
                      const unavail = !AVAILABLE_TIMES.has(t)
                      return (
                        <button
                          key={t}
                          className={`rec-booking-time${unavail ? ' rec-booking-time--unavail' : ''}${t === selectedTime ? ' rec-booking-time--selected' : ''}`}
                          disabled={unavail}
                          onClick={() => setSelectedTime(t)}
                        >
                          {t}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div className="rec-booking-body rec-booking-body--form">
                <p className="rec-booking-form-intro">Please provide your details so Michael Torres can prepare for your conversation.</p>
                <div className="rec-booking-form">
                  <input className="rec-booking-input" type="text" placeholder="Full Name" />
                  <input className="rec-booking-input" type="email" placeholder="Business Email" />
                  <input className="rec-booking-input" type="text" placeholder="Firm Name" />
                  <textarea className="rec-booking-textarea" rows={3} placeholder="Anything specific you'd like to discuss?" />
                </div>
              </div>
            )}

            {bookingStep === 4 && (
              <div className="rec-booking-body rec-booking-body--confirm">
                <div className="rec-booking-confirm-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h4 className="rec-booking-confirm-title">You&rsquo;re all set!</h4>
                {bookedAppointment && (
                  <p className="rec-booking-confirm-appt">
                    {bookedAppointment.date} &mdash; {bookedAppointment.time}
                  </p>
                )}
                <p className="rec-booking-confirm-body">
                  Your conversation with Michael Torres has been scheduled. A calendar invite and confirmation will be sent to your email shortly.
                </p>
              </div>
            )}

            <div className="rec-booking-footer">
              {bookingStep < 4 ? (
                <>
                  <button className="rec-booking-back" onClick={() => bookingStep > 1 ? setBookingStep(s => s - 1) : setBookingOpen(false)}>
                    ‹ Back
                  </button>
                  <button className="rec-booking-continue" onClick={handleContinue}>
                    Step {bookingStep} of {BOOKING_STEPS.length} &nbsp;&nbsp; Continue →
                  </button>
                </>
              ) : (
                <button className="rec-booking-continue" onClick={() => setBookingOpen(false)}>
                  Done
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <button className="rec-assistant-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        SEI Assistant &mdash; Ask a question
      </button>
    </section>
  )
}
