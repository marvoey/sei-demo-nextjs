import type { BusinessAuditData } from '@/lib/types'

export default function BusinessAudit({ data }: { data: BusinessAuditData }) {
  return (
    <section className="business-audit">
      <div className="container">
        <div className="business-audit-inner">
          <div className="business-audit-text">
            <div className="business-audit-headline">{data.headline}</div>
            <p className="business-audit-body">{data.body}</p>
          </div>
          <a href="#" className="business-audit-cta">{data.cta}</a>
        </div>
      </div>
    </section>
  )
}
