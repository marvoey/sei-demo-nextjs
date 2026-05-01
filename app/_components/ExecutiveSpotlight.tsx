import type { SpotlightData } from '@/lib/types'

interface Props {
  data: SpotlightData
  imageLabel?: string
  image?: string
}

export default function ExecutiveSpotlight({ data, imageLabel = 'Inside SEI: Dakota Live', image }: Props) {
  return (
    <section className="spotlight section">
      <div className="container">
        <div className="spotlight-inner">
          <div className="spotlight-image">
            {image && <img src={image} alt={imageLabel} className="spotlight-img" />}
            <div className="spotlight-image-overlay" />
            <button className="spotlight-play" aria-label="Play video">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </button>
            <span className="spotlight-image-label">{imageLabel}</span>
          </div>
          <div className="spotlight-meta">
            <div className="section-eyebrow">{data.eyebrow}</div>
            <div className="spotlight-label">{data.tag}</div>
            <h2 className="spotlight-headline">{data.headline}</h2>
            <p className="spotlight-body">{data.body}</p>
            <blockquote className="spotlight-quote">&ldquo;{data.quote}&rdquo;</blockquote>
            <div className="spotlight-attribution">
              <span className="spotlight-attribution-name">{data.attribution}</span>
              <span className="spotlight-attribution-title">{data.attributionTitle}</span>
            </div>
            <a href="#" className="spotlight-cta">
              {data.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
