'use client'
import { useState } from 'react'
import type { PersonalizationPrompt } from '@/lib/types'

export default function PersonalizeFurther({ data }: { data: PersonalizationPrompt }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="personalize-further section">
      <div className="container">
        <div className="personalize-inner">
          <div className="personalize-label">{data.label}</div>
          <div className="personalize-question">{data.question}</div>
          <div className="personalize-options">
            {data.options.map(opt => (
              <button
                key={opt}
                className={`personalize-option${active === opt ? ' active' : ''}`}
                onClick={() => setActive(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
