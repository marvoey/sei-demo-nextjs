const COLORS = ['color-1', 'color-2', 'color-3', 'color-4'] as const

const ARTICLES = [
  { type: 'Podcast', category: 'Asset Management', initials: 'SS', author: 'Sneha Shah', authorTitle: 'Executive Vice President, Head of New Business Ventures', headline: 'Building the Next Wave.', excerpt: 'How AI, tokenization, and innovation drive new wealth tech business models.' },
  { type: 'Podcast', category: 'Financial Advisors', initials: 'ML', author: 'Michael Lane', authorTitle: 'Executive Vice President, Head of Asset Management', headline: 'Human-led, AI-Enabled Advice.', excerpt: 'How AI can scale advice while advisors build trust, insight, and better client outcomes.' },
  { type: 'Article', category: 'Banks & Wealth Managers', initials: 'JB', author: 'Jeffrey Benfield', authorTitle: 'Chief Product Officer', headline: 'Harnessing momentum in wealth.', excerpt: 'What it takes to modernize client experience while transaction volumes and expectations rise.' },
  { type: 'Article', category: 'Asset Management', initials: 'SL', author: 'Sean Lawlor', authorTitle: 'Head of Traditional Investment Manager Services', headline: 'Data transparency: The new currency in asset management.', excerpt: 'Why data transparency is critical to scalable, resilient operations in asset management.' },
]

export default function ExpertInsights() {
  return (
    <section className="insights section">
      <div className="container">
        <div className="insights-header">
          <div>
            <div className="section-eyebrow">Expert Insights</div>
            <div className="insights-headline">Perspectives from SEI Leadership</div>
          </div>
          <a href="#" className="insights-all-cta">View all insights &rarr;</a>
        </div>
        <div className="insights-grid">
          {ARTICLES.map((a, i) => (
            <div key={a.author} className="insight-card">
              <div className={`insight-card-image ${COLORS[i]}`}>
                <div className="insight-avatar">{a.initials}</div>
              </div>
              <div className="insight-card-body">
                <span className="insight-type">{a.type}</span>
                <span className="insight-category">{a.category}</span>
                <div className="insight-headline">{a.headline}</div>
                <div className="insight-excerpt">{a.excerpt}</div>
                <div className="insight-author">{a.author}</div>
                <div className="insight-author-title">{a.authorTitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
