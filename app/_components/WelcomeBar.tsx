'use client'
import { useState } from 'react'
import { clearSegment } from '@/app/actions'
import { getSegmentMeta } from '@/lib/segments'

export default function WelcomeBar({ segment }: { segment: string }) {
  const [dismissed, setDismissed] = useState(false)
  const meta = getSegmentMeta(segment)
  if (dismissed || !meta) return null

  return (
    <div className="welcome-bar">
      <div className="welcome-bar-inner">
        <span>Welcome back &mdash; your experience is personalized for <strong>{meta.label}</strong>.</span>
        <a href={`/${segment}`}>Go to your page &rarr;</a>
        <button className="welcome-bar-dismiss" onClick={() => setDismissed(true)} aria-label="Dismiss">&times;</button>
      </div>
    </div>
  )
}
