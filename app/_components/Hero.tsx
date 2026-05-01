interface HeroProps {
  eyebrow?: string
  headline: string
  subheadline: string
  ctas?: React.ReactNode
  genericHeadline?: string
  genericSubheadline?: string
  video?: string
  personalized?: boolean
}

export default function Hero({ eyebrow, headline, subheadline, ctas, genericHeadline, genericSubheadline, video, personalized }: HeroProps) {
  const sectionClass = personalized ? 'hero-personalized section' : 'hero'
  return (
    <section className={sectionClass}>
      {video && <video className="hero-bg-img" src={video} autoPlay muted loop playsInline aria-hidden="true" />}
      <div className="hero-bg-pattern" />
      <div className="hero-content">
        {eyebrow && <div className="hero-eyebrow">{eyebrow}</div>}
        <h1
          className="hero-headline"
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
            <svg className="hero-cta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.7 }}>
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
            SEI Assistant &mdash; Ask a question
          </a>
        )}
      </div>
    </section>
  )
}
