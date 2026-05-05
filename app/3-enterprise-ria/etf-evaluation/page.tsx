import Nav from '@/app/_components/Nav'
import StayConnected from '@/app/_components/StayConnected'
import Footer from '@/app/_components/Footer'
import Animations from '@/app/_components/Animations'

export const metadata = {
  title: 'Portfolio Evaluator — SEI',
  description: 'Identify best-fit investment strategies for your clients with streamlined research and expert insights—all in one intuitive platform.',
}

const FEATURES = [
  {
    headline: 'Intuitive Interface',
    body: 'Explore a wide range of investment options with a clear, user-friendly design that helps you deliver personalized solutions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    headline: 'Expert Market Research',
    body: 'Access insights from our Investment Management Unit to confidently guide clients with timely, actionable information.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    headline: 'Advanced Filtering',
    body: "Toggle between different attributes and quickly narrow down investment options aligned to your clients' needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    headline: 'Comprehensive Information',
    body: 'View all strategy details including managers, factsheets, and holdings—all in a single source.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    headline: 'Seamless Integration',
    body: 'Portfolio Evaluator integrates seamlessly into the SEI Advisor Desktop for a unified platform experience.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    headline: 'Streamlined Research',
    body: "Efficiently determine which investment strategy aligns with your client's tax sensitivity, risk tolerance, and goals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const CHECKLIST = [
  'Make informed investment decisions with confidence',
  'Save time with streamlined research workflows',
  'Access expert insights and market research',
  'Deliver personalized client solutions efficiently',
]

export default function ETFEvaluationPage() {
  return (
    <>
      <Nav />

      <section
        className="pe-hero"
        style={{ backgroundImage: 'url(/journey-3/HeroSection.png)' }}
      >
        <div className="pe-hero-content">
          <div className="pe-hero-eyebrow">Advisor Technology</div>
          <h1 className="pe-hero-headline">Portfolio Evaluator</h1>
          <p className="pe-hero-subheadline">
            Identify best-fit investment strategies for your clients with streamlined research
            and expert insights—all in one intuitive platform.
          </p>
          <a href="/3-enterprise-ria/etf-evaluation/results" className="pe-hero-cta">Get Started</a>
        </div>
      </section>

      <section className="pe-features">
        <div className="container">
          <div className="pe-features-header">
            <h2 className="pe-features-title">Six Ways to Enhance Client Relationships</h2>
            <p className="pe-features-subtitle">
              Portfolio Evaluator streamlines your investment research process with powerful tools
              designed for financial advisors.
            </p>
          </div>
          <div className="pe-features-grid">
            {FEATURES.map(f => (
              <div key={f.headline}>
                <div className="pe-feature-icon">{f.icon}</div>
                <div className="pe-feature-headline">{f.headline}</div>
                <p className="pe-feature-body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pe-research">
        <div className="container">
          <div className="pe-research-inner">
            <div>
              <h2 className="pe-research-title">Investment Research Made Simple</h2>
              <p className="pe-research-body">
                Portfolio Evaluator helps you identify the best-fit investment strategies for your
                clients, no matter their timeline or goal. Our streamlined platform enables you to
                make efficient and informed decisions together with your clients.
              </p>
              <ul className="pe-research-list">
                {CHECKLIST.map(item => (
                  <li key={item} className="pe-research-item">
                    <span className="pe-research-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pe-research-media">
              <img
                src="/journey-3/Evaluation"
                alt="Advisors reviewing investment research with a client"
                className="pe-research-img"
              />
              <div className="pe-research-trust">
                <div className="pe-research-trust-label">Trusted by</div>
                <div className="pe-research-trust-number">7,000+</div>
                <div className="pe-research-trust-sublabel">Financial Advisors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StayConnected />
      <Footer />
      <Animations />
    </>
  )
}
