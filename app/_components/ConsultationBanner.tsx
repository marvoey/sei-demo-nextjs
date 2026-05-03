export default function ConsultationBanner() {
  return (
    <div className="consult-banner">
      <div
        className="consult-banner-image"
        style={{ backgroundImage: 'url(/dakota-live-interview.png)' }}
        aria-hidden="true"
      />
      <div className="consult-banner-content">
        <h2 className="consult-banner-headline">How do we help them breakaway?</h2>
        <p className="consult-banner-name">Bob</p>
        <a href="#" className="consult-banner-btn">Book Consultation</a>
      </div>
      <div className="consult-banner-icon" aria-hidden="true">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
    </div>
  )
}
