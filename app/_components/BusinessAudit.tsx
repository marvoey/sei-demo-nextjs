import type { BusinessAuditData } from '@/lib/types'

interface Props {
  data: BusinessAuditData
  backgroundImage?: string
}

export default function BusinessAudit({ data, backgroundImage }: Props) {
  const sectionClass = `business-audit${backgroundImage ? ' business-audit--image' : ''}`
  const style = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : undefined

  return (
    <section className={sectionClass} style={style}>
      <div className="container">
        <div className="business-audit-inner">
          <div className="business-audit-text">
            <div className="business-audit-headline">{data.headline}</div>
            <p className="business-audit-body">{data.body}</p>
          </div>
          <a href="#" className="business-audit-cta">{data.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
