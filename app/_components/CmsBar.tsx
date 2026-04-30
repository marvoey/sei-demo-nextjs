'use client'
import { useTransition } from 'react'
import { clearSegment } from '@/app/actions'
import { getSegmentMeta } from '@/lib/segments'

interface Props {
  segment: string
  fetchMs: number
}

export default function CmsBar({ segment, fetchMs }: Props) {
  const [isPending, startTransition] = useTransition()
  const meta = getSegmentMeta(segment)

  return (
    <div className="cms-bar">
      <div className="cms-bar-inner">
        <span className="cms-badge">CMS</span>
        <span className="cms-dot">·</span>
        <span>Personalized for: <span className="cms-segment-label">{meta?.label ?? segment}</span></span>
        <span className="cms-dot">·</span>
        <span className="cms-fetch">Content delivered in {fetchMs}ms</span>
        <div className="cms-bar-actions">
          <button
            className="cms-change"
            onClick={() => startTransition(() => { clearSegment() })}
            disabled={isPending}
          >
            {isPending ? 'Resetting…' : 'Change segment'}
          </button>
          <a href="/">Homepage</a>
        </div>
      </div>
    </div>
  )
}
