const STATS = [
  { val: '$1.9T', label: 'Assets Under Management & Administration', short: 'AUM & AUA' },
  { val: '58', label: 'Years of Institutional Experience', short: 'Years in Service' },
  { val: '2,000+', label: 'Industry Experts Worldwide', short: 'Global Professionals' },
  { val: '130+', label: 'Countries Served', short: 'Global Reach' },
]

export default function ByNumbers() {
  return (
    <section className="by-numbers section">
      <div className="container">
        <div className="by-numbers-header">
          <div className="by-numbers-eyebrow">Scale &amp; Impact</div>
          <div className="by-numbers-headline">Depth you can feel. Reach you can measure.</div>
          <div className="by-numbers-sub">End-to-end capability, global coverage&mdash;across platforms, products, and time zones.</div>
        </div>
        <div className="by-numbers-grid">
          {STATS.map(s => (
            <div key={s.val} className="by-numbers-stat">
              <div className="by-numbers-val">{s.val}</div>
              <div className="by-numbers-label">{s.label}</div>
              <div className="by-numbers-short">{s.short}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
