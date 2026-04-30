'use client'
import { useEffect, useState, useTransition } from 'react'
import { chooseSegment } from '@/app/actions'
import { SEGMENTS } from '@/lib/segments'

export default function PersonalizationModal({ show }: { show: boolean }) {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (!show) return
    const t = setTimeout(() => setVisible(true), 1400)
    return () => clearTimeout(t)
  }, [show])

  const handleContinue = () => {
    if (!selected) return
    startTransition(() => { chooseSegment(selected) })
  }

  const close = () => setVisible(false)

  const segments = Object.values(SEGMENTS)

  return (
    <div
      className={`modal-overlay${visible ? ' visible' : ''}`}
      onClick={close}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-question"
    >
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-progress">
          <div className="modal-progress-fill" />
        </div>
        <div className="modal-header">
          <div className="modal-logo">SEI<span>.</span></div>
          <div className="modal-step-label">Step 1 of 1 &mdash; Personalize your experience</div>
          <div className="modal-question" id="modal-question">What best describes your advisory practice?</div>
          <div className="modal-sub">We&rsquo;ll tailor your experience to what matters most to you.</div>
        </div>
        <div className="modal-options">
          {segments.map(seg => (
            <button
              key={seg.id}
              className={`modal-option${selected === seg.id ? ' selected' : ''}`}
              onClick={() => setSelected(seg.id)}
            >
              <span className="modal-option-icon">{seg.icon}</span>
              <span className="modal-option-text">
                <span className="modal-option-label">{seg.label}</span>
                <span className="modal-option-desc">{seg.desc}</span>
              </span>
              <span className="modal-check" />
            </button>
          ))}
        </div>
        <div className="modal-footer">
          <button
            className="modal-continue"
            disabled={!selected || isPending}
            onClick={handleContinue}
          >
            {isPending ? 'Loading your experience…' : 'Continue'}
          </button>
          <button className="modal-skip" onClick={close}>Skip for now</button>
        </div>
      </div>
    </div>
  )
}
