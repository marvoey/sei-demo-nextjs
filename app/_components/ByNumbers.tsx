'use client'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

const STATS = [
  { val: '$1.9T',  label: 'Assets Under Management & Administration', short: 'AUM & AUA',          target: '1.9',  prefix: '$', suffix: 'T',  barHeight: 80 },
  { val: '58',     label: 'Years of Institutional Experience',        short: 'Years in Service',    target: '58',                               barHeight: 38 },
  { val: '2,000+', label: 'Industry Experts Worldwide',              short: 'Global Professionals', target: '2000',              suffix: '+', comma: 'true', barHeight: 70 },
  { val: '130+',   label: 'Countries Served',                        short: 'Global Reach',         target: '130',               suffix: '+',  barHeight: 52 },
]

export default function ByNumbers() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setAnimated(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="by-numbers section" ref={sectionRef}>
      <div className="container">
        <div className="by-numbers-header">
          <div className="by-numbers-header-left">
            <div className="by-numbers-eyebrow">Scale &amp; Impact</div>
            <div className="by-numbers-headline">Depth you can feel.<br />Reach you can measure.</div>
          </div>
          <div className="by-numbers-header-right">
            <p className="by-numbers-sub">End-to-end capability, global coverage&mdash;across platforms, products, and time zones.</p>
          </div>
        </div>
        <div className="by-numbers-grid">
          {STATS.map(s => (
            <div key={s.val} className="by-numbers-stat">
              <div
                className="by-numbers-val"
                data-target={s.target}
                {...(s.prefix ? { 'data-prefix': s.prefix } : {})}
                {...(s.suffix ? { 'data-suffix': s.suffix } : {})}
                {...(s.comma  ? { 'data-comma':  s.comma  } : {})}
              >
                {s.val}
              </div>
              <div className="by-numbers-label">{s.label}</div>
              <div className="by-numbers-short">{s.short}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="by-numbers-bars-area">
        <div className="by-numbers-bars-grid">
          {STATS.map((s, i) => (
            <div key={s.val} className="by-numbers-bar-col">
              <div
                className={`by-numbers-bar${animated ? ' by-numbers-bar--animated' : ''}`}
                style={{ '--bar-h': `${s.barHeight}%`, '--bar-delay': `${i * 0.12}s` } as CSSProperties}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
