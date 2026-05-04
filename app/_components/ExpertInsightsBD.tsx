const ARTICLES = [
  {
    type: 'Podcast',
    category: 'Financial Advisors',
    img: '/journey-2/insights/Michael%20Lane.png',
    author: 'Michael Lane',
    authorTitle: 'Executive Vice President, Head of Asset Management',
    headline: 'Human-led, AI-Enabled Advice.',
    excerpt: 'How AI can scale advice while advisors build trust, insight, and better client outcomes.',
  },
  {
    type: 'Article',
    category: 'Asset Management',
    img: '/journey-2/insights/Sean%20Lawlor.png',
    author: 'Sean Lawlor',
    authorTitle: 'Head of Traditional Investment Manager Services',
    headline: 'Data transparency: The new currency in asset management.',
    excerpt: 'Why data transparency is critical to scalable, resilient operations in asset management.',
  },
  {
    type: 'Article',
    category: 'Banks & Wealth Managers',
    img: '/journey-2/insights/Jeffrey%20Benfield.png',
    author: 'Jeffrey Benfield',
    authorTitle: 'Chief Product Officer',
    headline: 'Harnessing momentum in wealth.',
    excerpt: 'What it takes to modernize client experience while transaction volumes and expectations rise.',
  },
  {
    type: 'Podcast',
    category: 'Asset Management',
    img: '/journey-2/insights/Sneha%20Shah.png',
    author: 'Sneha Shah',
    authorTitle: 'Executive Vice President, Head of New Business Ventures',
    headline: 'Building the Next Wave.',
    excerpt: 'How AI, tokenization, and innovation drive new wealth tech business models.',
  },
]

const PodcastIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
    <path d="M7.76 7.76a6 6 0 0 0 0 8.49" />
    <path d="M20.49 3.51a12 12 0 0 1 0 16.98" />
    <path d="M3.51 3.51a12 12 0 0 0 0 16.98" />
  </svg>
)

const ArticleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

export default function ExpertInsightsBD() {
  return (
    <section className="insights-bd section">
      <div className="container">
        <div className="insights-bd-header">
          <div>
            <div className="section-eyebrow">Expert Insights</div>
            <div className="insights-bd-headline">Perspectives from SEI Leadership</div>
          </div>
          <a href="#" className="insights-bd-all-cta">View all insights &rarr;</a>
        </div>
        <div className="insights-bd-grid">
          {ARTICLES.map(a => (
            <div key={a.author} className="insight-bd-card">
              <div className="insight-bd-image">
                <img src={a.img} alt={a.author} />
                <div className="insight-bd-gradient" />
                <div className="insight-bd-badge">
                  {a.type === 'Podcast' ? <PodcastIcon /> : <ArticleIcon />}
                  {a.type}
                </div>
                <div className="insight-bd-person">
                  <div className="insight-bd-name">{a.author}</div>
                  <div className="insight-bd-role">{a.authorTitle}</div>
                </div>
              </div>
              <div className="insight-bd-body">
                <div className="insight-bd-category">{a.category}</div>
                <div className="insight-bd-headline">{a.headline}</div>
                <div className="insight-bd-excerpt">{a.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
