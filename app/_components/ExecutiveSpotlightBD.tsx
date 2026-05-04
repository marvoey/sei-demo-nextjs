import type { SpotlightData } from '@/lib/types'

interface Props {
  data: SpotlightData
  image: string
  overlayTitle?: string
}

export default function ExecutiveSpotlightBD({ data, image, overlayTitle }: Props) {
  return (
    <section className="esbd">
      <div className="container">
        <div className="esbd-eyebrow">
          <span className="esbd-eyebrow-dash" />
          {data.eyebrow}
        </div>
        <div className="esbd-row">
          <div className="esbd-media">
            <img src={image} alt={data.attribution} className="esbd-img" />
            <div className="esbd-gradient" />
            {overlayTitle && (
              <div className="esbd-overlay-title">{overlayTitle}</div>
            )}
            <div className="esbd-play">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span className="esbd-tag">{data.tag}</span>
          </div>

          <div className="esbd-content">
            <h2 className="esbd-headline">{data.headline}</h2>
            <p className="esbd-subhead">{data.body}</p>
            <blockquote className="esbd-quote">
              &ldquo;{data.quote}&rdquo;
            </blockquote>
            <div className="esbd-attribution">
              <span className="esbd-name">{data.attribution}</span>
              <span className="esbd-title">{data.attributionTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
