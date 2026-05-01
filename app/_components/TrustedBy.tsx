const LOGOS = [
  { src: '/summit-wealth-group.png', alt: 'Summit Wealth Group' },
  { src: '/first-financial-bank.png', alt: 'First Financial Bank' },
  { src: '/tcw.png', alt: 'TCW' },
  { src: '/kent-state-university.jpg', alt: 'Kent State University' },
]

export default function TrustedBy() {
  return (
    <section className="trusted section">
      <div className="container">
        <div className="trusted-header">
          <div className="trusted-header-headline">Proof in practice</div>
          <div className="trusted-header-sub">See the stories&mdash;and the numbers&mdash;that show what&rsquo;s possible with SEI as your trusted strategic partner.</div>
        </div>
        <div className="trusted-card">
          <div className="trusted-card-visual">
            <img src="/summit-wealth-group.png" alt="Summit Wealth Group" className="trusted-card-img" />
          </div>
          <div className="trusted-card-content">
            <div className="trusted-card-tag">RIA / Wealth Management</div>
            <h3 className="trusted-card-headline">Summit Wealth Group</h3>
            <p className="trusted-card-body">To support its evolved RIA operating model, Summit Wealth Group partnered with SEI to launch an integrated wealth platform that brings together technology, operations, and investment infrastructure &mdash; allowing the firm to scale efficiently while maintaining flexibility and a high-touch client experience.</p>
            <div className="trusted-card-stats">
              <div className="trusted-stat">
                <div className="trusted-stat-val">$9B+</div>
                <div className="trusted-stat-label">Assets under advisement supported by SEI&rsquo;s integrated wealth infrastructure</div>
              </div>
              <div className="trusted-stat">
                <div className="trusted-stat-val">Multi-custodial</div>
                <div className="trusted-stat-label">Operating model powered by a single platform across technology, operations, and investments</div>
              </div>
            </div>
            <a href="#" className="trusted-cta">
              Read the full case study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
        <div className="trusted-logos">
          {LOGOS.map(l => (
            <img key={l.alt} src={l.src} alt={l.alt} className="trusted-logo-img" />
          ))}
        </div>
      </div>
    </section>
  )
}
