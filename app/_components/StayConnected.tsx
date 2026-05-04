export default function StayConnected() {
  return (
    <section className="stay-connected">
      <div className="container">
        <div className="stay-inner">
          <div className="stay-copy">
            <div className="stay-eyebrow">
              <span className="stay-eyebrow-dash" />
              Stay Connected
            </div>
            <h2 className="stay-headline">What&rsquo;s New at SEI</h2>
            <p className="stay-body">Subscribe for timely insights on product innovation, platform enhancements, real-world use cases, expert conversations, and upcoming learning opportunities across the wealth ecosystem.</p>
          </div>
          <div className="stay-card">
            <div className="stay-form">
              <label className="stay-form-label" htmlFor="email-input">Business Email</label>
              <input className="stay-form-input" id="email-input" type="email" placeholder="yourname@company.com" autoComplete="email" />
              <button className="stay-form-btn" type="button">
                Subscribe to SEI Insights
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="stay-form-legal">By subscribing, you agree to receive marketing emails from SEI. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
