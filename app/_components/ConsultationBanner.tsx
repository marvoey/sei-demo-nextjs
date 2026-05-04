export default function ConsultationBanner() {
  return (
    <div className="consult-banner">
      <div
        className="consult-banner-image"
        style={{ backgroundImage: 'url(/journey-2/Consultation.png)' }}
        aria-hidden="true"
      />
      <div className="consult-banner-content">
        <h2 className="consult-banner-headline">How do we help them breakaway?</h2>
        <p className="consult-banner-name">Bob</p>
        <a href="#" className="consult-banner-btn">Book Consultation</a>
      </div>
      <div className="consult-banner-icon" aria-hidden="true">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25">
          <path d="M21 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v4l5-4h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
          <line x1="7" y1="8" x2="17" y2="8" />
          <line x1="7" y1="12" x2="14" y2="12" />
        </svg>
      </div>
    </div>
  )
}
