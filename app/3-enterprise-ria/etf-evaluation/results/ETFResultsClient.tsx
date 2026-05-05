'use client'

import { useState } from 'react'
import Nav from '@/app/_components/Nav'
import Footer from '@/app/_components/Footer'
import Animations from '@/app/_components/Animations'

// ─── Data ───────────────────────────────────────────────────────────────────

interface ETF {
  ticker: string
  name: string
  expenseRatio: string
  ytd: string
  color: string
  fillColor: string
  radar: number[] // [Strategy, Liquidity, Volatility, Expense Ratio, Performance, Sponsor]
  barData: { taxEfficiency: number; averageCost: number; consistencyScore: number; compliance: number }
}

const ETFS: ETF[] = [
  {
    ticker: 'SEIV',
    name: 'SEI Enhanced U.S. Large Cap Value Factor ETF',
    expenseRatio: '0.0945%',
    ytd: '4.64%',
    color: '#BE0000',
    fillColor: 'rgba(190,0,0,0.12)',
    radar: [0.82, 0.88, 0.55, 0.68, 0.72, 0.60],
    barData: { taxEfficiency: 78, averageCost: 65, consistencyScore: 72, compliance: 85 },
  },
  {
    ticker: 'LEND',
    name: 'SEI High Yield Bond & Alternative Credit ETF',
    expenseRatio: '0.0945%',
    ytd: '4.64%',
    color: '#8B9AB0',
    fillColor: 'rgba(139,154,176,0.18)',
    radar: [0.65, 0.72, 0.80, 0.55, 0.78, 0.85],
    barData: { taxEfficiency: 65, averageCost: 72, consistencyScore: 58, compliance: 78 },
  },
  {
    ticker: 'ANGU',
    name: 'SEI Ang Research Enhanced U.S. Large Cap ETF',
    expenseRatio: '0.0945%',
    ytd: '4.64%',
    color: '#6B7280',
    fillColor: 'rgba(107,114,128,0.14)',
    radar: [0.70, 0.60, 0.75, 0.88, 0.65, 0.78],
    barData: { taxEfficiency: 82, averageCost: 68, consistencyScore: 65, compliance: 80 },
  },
]

// ─── Radar chart geometry ────────────────────────────────────────────────────

const CX = 240, CY = 220, R = 155
const RADAR_AXES = ['Strategy', 'Liquidity', 'Volatility', 'Expense Ratio', 'Performance', 'Sponsor']
// Start at top (90°) and step clockwise by 60° each axis
const ANGLES = RADAR_AXES.map((_, i) => Math.PI / 2 - (i * Math.PI) / 3)

function polyPoints(values: number[]): string {
  return values
    .map((v, i) => `${CX + R * v * Math.cos(ANGLES[i])},${CY - R * v * Math.sin(ANGLES[i])}`)
    .join(' ')
}

function gridPoints(scale: number): string {
  return ANGLES
    .map((a) => `${CX + R * scale * Math.cos(a)},${CY - R * scale * Math.sin(a)}`)
    .join(' ')
}

// ─── Radar chart component ────────────────────────────────────────────────────

function RadarChart({ selected }: { selected: Set<string> }) {
  const LABEL_SCALE = 1.22
  const GRIDS = [0.25, 0.5, 0.75, 1.0]

  return (
    <svg viewBox="0 0 480 440" width="100%" aria-label="ETF strategy radar chart">
      {/* Grid hexagons */}
      {GRIDS.map(scale => (
        <polygon
          key={scale}
          points={gridPoints(scale)}
          fill="none"
          stroke={scale === 1 ? '#D1D5DC' : '#E5E7EB'}
          strokeWidth={scale === 1 ? 1.5 : 1}
        />
      ))}

      {/* Axis spokes */}
      {ANGLES.map((angle, i) => (
        <line
          key={i}
          x1={CX} y1={CY}
          x2={CX + R * Math.cos(angle)}
          y2={CY - R * Math.sin(angle)}
          stroke="#E5E7EB"
          strokeWidth="1"
        />
      ))}

      {/* Axis labels */}
      {RADAR_AXES.map((label, i) => {
        const angle = ANGLES[i]
        const lx = CX + R * LABEL_SCALE * Math.cos(angle)
        const ly = CY - R * LABEL_SCALE * Math.sin(angle)
        const anchor = lx > CX + 15 ? 'start' : lx < CX - 15 ? 'end' : 'middle'
        return (
          <text
            key={label}
            x={lx}
            y={ly + 4}
            textAnchor={anchor}
            fontSize="12"
            fill="#6B7280"
            fontFamily="inherit"
          >
            {label}
          </text>
        )
      })}

      {/* ETF polygon layers — always rendered, opacity transitions on toggle */}
      {ETFS.map(etf => (
        <polygon
          key={etf.ticker}
          points={polyPoints(etf.radar)}
          fill={etf.fillColor}
          stroke={etf.color}
          strokeWidth="1.5"
          opacity={selected.has(etf.ticker) ? 1 : 0}
          style={{ transition: 'opacity 0.3s ease' }}
        />
      ))}
    </svg>
  )
}

// ─── Bar chart component ──────────────────────────────────────────────────────

const BAR_KEYS = ['taxEfficiency', 'averageCost', 'consistencyScore', 'compliance'] as const
const BAR_LABELS = [['Tax', 'Efficiency'], ['Average', 'Cost'], ['Consistency', 'Score'], ['Compliance']]
const CURRENT_VALUES = [42, 55, 30, 48]

function BarChart({ seiValues }: { seiValues: number[] }) {
  const CHART_H = 150
  const BAR_W = 24
  const GAP = 6
  const GROUP_W = 130
  const START_X = 10
  const TOP_PAD = 10
  const BASE_Y = TOP_PAD + CHART_H

  return (
    <svg viewBox="0 0 560 220" width="100%" style={{ maxWidth: '620px' }} aria-label="Portfolio comparison bar chart">
      {/* Subtle grid lines */}
      {[50, 100].map(level => {
        const y = BASE_Y - (level / 100) * CHART_H
        return (
          <line key={level} x1={START_X} y1={y} x2={550} y2={y}
            stroke="#F3F4F6" strokeWidth="1" />
        )
      })}

      {BAR_LABELS.map((labelLines, i) => {
        const gx = START_X + i * GROUP_W + (GROUP_W - BAR_W * 2 - GAP) / 2
        const seiH = Math.round((seiValues[i] / 100) * CHART_H)
        const curH = Math.round((CURRENT_VALUES[i] / 100) * CHART_H)

        return (
          <g key={i}>
            <rect x={gx} y={BASE_Y - seiH} width={BAR_W} height={seiH} fill="#3BB97E" rx="1" />
            <rect x={gx + BAR_W + GAP} y={BASE_Y - curH} width={BAR_W} height={curH} fill="#FDBA74" rx="1" />
            {labelLines.map((line, li) => (
              <text
                key={li}
                x={gx + BAR_W + GAP / 2}
                y={BASE_Y + 18 + li * 14}
                textAnchor="middle"
                fontSize="11"
                fill="#6B7280"
                fontFamily="inherit"
              >
                {line}
              </text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

// ─── Static content ───────────────────────────────────────────────────────────

const INSIGHTS = [
  {
    num: 1,
    tag: 'LIGULA',
    headline: 'Smart Beta Performance During Rising Rates and Market Volatility',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed eleifend felis and met with a range of clients. My visit took place amidst a whirlwind of geopolitical turmoil, highlighted by the European stock markets, which made our lively...',
  },
  {
    num: 2,
    tag: 'LIGULA',
    headline: 'Smart Beta Performance During Rising Rates and Market Volatility',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed eleifend felis and met with a range of clients. My visit took place amidst a whirlwind of geopolitical turmoil, highlighted by the European stock markets, which made our lively...',
  },
  {
    num: 3,
    tag: 'LIGULA',
    headline: 'Smart Beta Performance During Rising Rates and Market Volatility',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed eleifend felis and met with a range of clients. My visit took place amidst a whirlwind of geopolitical turmoil, highlighted by the European stock markets, which made our lively...',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ETFResultsClient() {
  const [selected, setSelected] = useState<Set<string>>(new Set(ETFS.map(e => e.ticker)))

  const toggle = (ticker: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(ticker) && next.size > 1) {
        next.delete(ticker)
      } else {
        next.add(ticker)
      }
      return next
    })
  }

  const selectedETFs = ETFS.filter(e => selected.has(e.ticker))
  const seiBarValues = BAR_KEYS.map(key =>
    Math.round(selectedETFs.reduce((sum, e) => sum + e.barData[key], 0) / selectedETFs.length)
  )

  return (
    <>
      <Nav />

      {/* Page title bar */}
      <div className="pe-res-bar">
        <div className="pe-res-bar-inner">Portfolio Evaluator</div>
      </div>

      {/* Recommended Investments */}
      <section className="pe-rec-section">
        <div className="container">
          <div className="pe-rec-top">
            <h1 className="pe-rec-headline">Recommended Investments</h1>
            <p className="pe-rec-sub">2 strategies match your criteria</p>
          </div>

          <div className="pe-rec-form">
            <div className="pe-rec-form-eyebrow">Stay Connected</div>
            <div className="pe-rec-form-row">
              <div className="pe-rec-form-field">
                <label className="pe-rec-form-label" htmlFor="pe-email">Business Email</label>
                <input className="pe-rec-form-input" id="pe-email" type="email" placeholder="yourname@company.com" autoComplete="email" />
              </div>
              <div className="pe-rec-form-field">
                <label className="pe-rec-form-label" htmlFor="pe-password">Password</label>
                <input className="pe-rec-form-input" id="pe-password" type="password" placeholder="••••••" autoComplete="new-password" />
              </div>
              <button className="pe-rec-form-btn" type="button">Create Account</button>
            </div>
          </div>
        </div>

        <div className="pe-options-area">
          <div className="container">
            <div className="pe-options-grid">
              {[ETFS[0], ETFS[1]].map((etf, idx) => (
                <div key={etf.ticker} className="pe-option-card">
                  <div className="pe-option-label">Option {idx + 1}</div>
                  <div className="pe-option-inner">
                    <div className="pe-option-ticker">{etf.ticker}</div>
                    <div className="pe-option-name">{etf.name}</div>
                    <div className="pe-option-actions">
                      <button className="pe-option-buy" type="button">Buy</button>
                      <button className="pe-option-meeting" type="button">
                        Book Meeting
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ETFs For You — interactive */}
      <section className="pe-etf-section">
        <div className="container">
          <div className="pe-etf-section-header">
            <div className="pe-etf-section-title">ETFs For You</div>
            <button className="pe-etf-tab" type="button">Strategy</button>
          </div>
          <div className="pe-etf-layout">
            <div className="pe-etf-list">
              {ETFS.map(etf => {
                const isActive = selected.has(etf.ticker)
                return (
                  <div
                    key={etf.ticker}
                    className={`pe-etf-item${isActive ? ' active' : ''}`}
                    onClick={() => toggle(etf.ticker)}
                    role="checkbox"
                    aria-checked={isActive}
                    tabIndex={0}
                    onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && toggle(etf.ticker)}
                  >
                    <div className="pe-etf-item-left">
                      <div className="pe-etf-indicator" style={{ background: etf.color }} />
                      <div>
                        <div className="pe-etf-ticker">{etf.ticker}</div>
                        <div className="pe-etf-name">{etf.name}</div>
                        <div className="pe-etf-meta">
                          <span>Expense Ratio: {etf.expenseRatio}</span>
                          <span>YTD: {etf.ytd}</span>
                        </div>
                      </div>
                    </div>
                    <span className="pe-etf-check" aria-hidden="true">
                      {isActive && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="pe-radar-wrap">
              <RadarChart selected={selected} />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Comparison */}
      <section className="pe-portfolio-section">
        <div className="container">
          <div className="pe-portfolio-box">
            <div className="pe-portfolio-header">
              <div className="pe-portfolio-title">Portfolio Comparison</div>
              <div className="pe-portfolio-legend">
                <div className="pe-portfolio-legend-item">
                  <div className="pe-portfolio-dot" style={{ background: '#3BB97E' }} />
                  With SEI ETF Solution
                </div>
                <div className="pe-portfolio-legend-item">
                  <div className="pe-portfolio-dot" style={{ background: '#FDBA74' }} />
                  Current State
                </div>
              </div>
            </div>
            <BarChart seiValues={seiBarValues} />
          </div>
        </div>
      </section>

      {/* Strategy Insights */}
      <section className="pe-insights-section">
        <div className="container">
          <div className="pe-insights-title">Strategy Insights</div>
          <div className="pe-insights-grid">
            {INSIGHTS.map(insight => (
              <div key={insight.num} className="pe-insight-card">
                <div className="pe-insight-top">
                  <div className="pe-insight-num">{insight.num}</div>
                  <div className="pe-insight-tag">{insight.tag}</div>
                </div>
                <div className="pe-insight-headline">{insight.headline}</div>
                <p className="pe-insight-body">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Animations />
    </>
  )
}
