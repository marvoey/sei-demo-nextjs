const PILLARS = [
  {
    head: 'What We Do',
    body: 'We help financial services firms overcome disparate systems, inefficient operations, and rising expectations.',
  },
  {
    head: 'Why We Do It',
    body: 'We help break through complexity to accelerate transformation and deliver outcomes that matter.',
  },
  {
    head: "How We're Different",
    body: 'We see the whole map, leveraging our vantage point across the wealth ecosystem to deliver clarity and insight.',
  },
  {
    head: 'Who We Do It For',
    body: 'We partner with asset managers, banks and wealth managers, advisors, and institutional investors to unlock scalable growth.',
  },
]

export default function GetToKnowSEI() {
  return (
    <section className="know-sei section">
      <div className="container">
        <div className="know-sei-header">
          <div>
            <div className="section-eyebrow">Get to Know SEI</div>
            <h2 className="section-headline">Built for every layer of the wealth ecosystem.</h2>
          </div>
          <p className="section-body">When capital moves, expectations rise around control, transparency, and consistency. SEI partners with organizations at the center of investing and wealth to support disciplined execution and long-term reliability.</p>
        </div>
        <div className="know-sei-grid">
          {PILLARS.map(p => (
            <div key={p.head} className="know-pillar">
              <div className="know-pillar-head">{p.head}</div>
              <div className="know-pillar-reveal">
                <p className="know-pillar-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
