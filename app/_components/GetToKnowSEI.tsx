const PILLARS = [
  { num: '01', head: 'What we do', body: 'We help financial services firms overcome disparate systems, inefficient operations, and rising expectations.' },
  { num: '02', head: 'Why we do it', body: 'Accelerating transformation for better client outcomes.' },
  { num: '03', head: "How we're different", body: 'The clarity of a whole-ecosystem vantage point.' },
  { num: '04', head: 'Who we do it for', body: 'Partners across the wealth and investment spectrum.' },
]

export default function GetToKnowSEI() {
  return (
    <section className="know-sei section">
      <div className="container">
        <div className="section-eyebrow">Get to Know SEI</div>
        <h2 className="section-headline">Built for every layer of the wealth ecosystem.</h2>
        <p className="section-body">When capital moves, expectations rise around control, transparency, and consistency. SEI partners with organizations at the center of investing and wealth to support disciplined execution and long-term reliability.</p>
        <div className="know-sei-grid">
          {PILLARS.map(p => (
            <div key={p.num} className="know-pillar">
              <div className="know-pillar-num">{p.num}</div>
              <div className="know-pillar-head">{p.head}</div>
              <p className="know-pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
