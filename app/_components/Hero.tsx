interface HeroProps {
  eyebrow?: string
  headline: string
  subheadline: string
  bold?: boolean
  ctas?: React.ReactNode
  genericHeadline?: string
  genericSubheadline?: string
}

export default function Hero({ eyebrow, headline, subheadline, bold, ctas, genericHeadline, genericSubheadline }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-glow" />
      <div className="hero-content">
        {eyebrow && <div className="hero-eyebrow">{eyebrow}</div>}
        <h1
          className={`hero-headline${bold ? ' hero-headline--bold' : ''}`}
          {...(genericHeadline ? { 'data-personalized': headline, 'data-generic': genericHeadline } : {})}
        >
          {headline}
        </h1>
        <p
          className="hero-subheadline"
          {...(genericSubheadline ? { 'data-personalized': subheadline, 'data-generic': genericSubheadline } : {})}
        >
          {subheadline}
        </p>
        {ctas ?? (
          <a href="#" className="hero-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.7 }}>
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
            SEI Assistant &mdash; Ask a question
          </a>
        )}
      </div>
    </section>
  )
}
