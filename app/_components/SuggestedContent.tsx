import type { SuggestedCard } from '@/lib/types'

interface Props {
  cards: SuggestedCard[]
}

export default function SuggestedContent({ cards }: Props) {
  return (
    <section className="suggested section">
      <div className="container">
        <div className="suggested-eyebrow">Curated for You</div>
        <div className="suggested-label">Suggested Content</div>
        <div className="suggested-grid">
          {cards.map(card => (
            <div key={card.headline} className="suggested-card">
              <div className="suggested-tag">{card.tag}</div>
              <div className="suggested-headline">{card.headline}</div>
              <p className="suggested-body">{card.body}</p>
              <a href="#" className="suggested-cta">{card.cta} &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
