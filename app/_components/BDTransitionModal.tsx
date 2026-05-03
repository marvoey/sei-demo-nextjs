'use client'
import { useEffect, useState } from 'react'

interface Props {
  question: string
  options: string[]
  storageKey: string
  triggerDelayMs?: number
}

export default function BDTransitionModal({ question, options, storageKey, triggerDelayMs = 6000 }: Props) {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (localStorage.getItem(storageKey)) return
    const t = setTimeout(() => setVisible(true), triggerDelayMs)
    return () => clearTimeout(t)
  }, [storageKey, triggerDelayMs])

  const handleSelect = (option: string) => {
    setSelected(option)
    localStorage.setItem(storageKey, option)
    setTimeout(() => setVisible(false), 300)
  }

  const dismiss = () => setVisible(false)

  return (
    <div
      className={`bd-modal-overlay${visible ? ' visible' : ''}`}
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label={question}
    >
      <div className="bd-modal-card" onClick={e => e.stopPropagation()}>
        <div className="bd-modal-header">
          <span className="bd-modal-question">{question}</span>
          <button className="bd-modal-dismiss" onClick={dismiss} aria-label="Dismiss">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 9L8 2L15 9" />
            </svg>
          </button>
        </div>
        <div className="bd-modal-body">
          <div className="bd-modal-grid">
            {options.map(opt => (
              <button
                key={opt}
                className={`bd-modal-option${selected === opt ? ' selected' : ''}`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
