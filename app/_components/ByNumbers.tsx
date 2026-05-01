const STATS = [
  { val: '$1.9T', label: 'Assets Under Management & Administration', short: 'AUM & AUA',      target: '1.9',  prefix: '$', suffix: 'T' },
  { val: '58',    label: 'Years of Institutional Experience',        short: 'Years in Service', target: '58' },
  { val: '2,000+',label: 'Industry Experts Worldwide',              short: 'Global Professionals', target: '2000', suffix: '+', comma: 'true' },
  { val: '130+',  label: 'Countries Served',                        short: 'Global Reach',    target: '130',  suffix: '+' },
] as const

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
              <div
                className="by-numbers-val"
                data-target={s.target}
                {...('prefix' in s ? { 'data-prefix': s.prefix } : {})}
                {...('suffix' in s ? { 'data-suffix': s.suffix } : {})}
                {...('comma' in s ? { 'data-comma': s.comma } : {})}
              >
                {s.val}
              </div>
              <div className="by-numbers-label">{s.label}</div>
              <div className="by-numbers-short">{s.short}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
