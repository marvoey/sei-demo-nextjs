export default function StayConnected() {
  return (
    <section className="stay-connected">
      <div className="container">
        <div className="stay-inner">
          <div>
            <div className="stay-eyebrow">Stay Connected</div>
            <h2 className="stay-headline">What&rsquo;s New at SEI</h2>
            <p className="stay-body">Subscribe for timely insights on product innovation, platform enhancements, real-world use cases, expert conversations, and upcoming learning opportunities across the wealth ecosystem.</p>
          </div>
          <div className="stay-form">
            <label className="stay-form-label" htmlFor="email-input">Business Email</label>
            <input className="stay-form-input" id="email-input" type="email" placeholder="yourname@company.com" autoComplete="email" />
            <button className="stay-form-btn" type="button">Subscribe to SEI Insights</button>
            <p className="stay-form-legal">By subscribing, you agree to receive marketing emails from SEI. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
