'use client'

import { useRef, useState, useEffect } from 'react'
import type { SpotlightData } from '@/lib/types'

const VIDEOS = [
  { id: 'FjqXhetY45A', label: 'Dakota Live', cover: '/journey-2/Image (Inside SEI_ Dakota Live Interview).png' },
  { id: 'FjqXhetY45A', label: 'Dakota Live', cover: '/journey-2/Image (Inside SEI_ Dakota Live Interview).png' },
  { id: 'FjqXhetY45A', label: 'Dakota Live', cover: '/journey-2/Image (Inside SEI_ Dakota Live Interview).png' },
]

interface Props {
  data: SpotlightData
}

export default function ExecutiveSpotlight({ data }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(1)
  const [playing, setPlaying] = useState<number | null>(null)

  const scrollToCard = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement
    if (!card) return
    const scrollLeft = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2
    track.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToCard(active)
  }, [active])

  const activateCard = (i: number) => {
    setPlaying(null)
    setActive(i)
  }

  const handlePlayClick = (i: number, e: React.MouseEvent) => {
    e.stopPropagation()
    if (i !== active) {
      setPlaying(null)
      setActive(i)
      setTimeout(() => setPlaying(i), 480)
    } else {
      setPlaying(i)
    }
  }

  return (
    <>
      <section className="spotlight">
        <div className="section-eyebrow">{data.eyebrow}</div>

        <div className="spotlight-carousel-outer">
          <div ref={trackRef} className="spotlight-carousel-track">
            {VIDEOS.map((video, i) => (
              <div
                key={i}
                className={`spotlight-card${i === active ? ' spotlight-card--active' : ''}`}
                onClick={() => i !== active && activateCard(i)}
              >
                {playing === i ? (
                  <iframe
                    className="spotlight-card-iframe"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    title={video.label}
                  />
                ) : (
                  <>
                    <img src={video.cover} alt={video.label} className="spotlight-card-img" />
                    <div className="spotlight-card-overlay" />
                    <button
                      className="spotlight-card-play"
                      aria-label="Play video"
                      onClick={(e) => handlePlayClick(i, e)}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </button>
                    <span className="spotlight-card-label">{video.label}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="spotlight-below">
        <div className="container">
          <div className="spotlight-text">
            <h2 className="spotlight-headline">{data.headline}</h2>
            <p className="spotlight-body">{data.body}</p>
          </div>
        </div>
      </div>
    </>
  )
}
