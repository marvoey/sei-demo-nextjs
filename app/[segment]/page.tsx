import { notFound } from 'next/navigation'
import { VALID_SEGMENTS } from '@/lib/segments'
import { fetchContent } from '@/lib/cms'
import Animations from '../_components/Animations'
import Nav from '../_components/Nav'
import Footer from '../_components/Footer'
import Hero from '../_components/Hero'
import ExecutiveSpotlight from '../_components/ExecutiveSpotlight'
import ExpertInsights from '../_components/ExpertInsights'
import SuggestedContent from '../_components/SuggestedContent'
import PersonalizeFurther from '../_components/PersonalizeFurther'
import BusinessAudit from '../_components/BusinessAudit'
import CmsBar from '../_components/CmsBar'

export default async function PersonalizedPage({
  params,
}: {
  params: Promise<{ segment: string }>
}) {
  const { segment } = await params

  if (!VALID_SEGMENTS.includes(segment as (typeof VALID_SEGMENTS)[number])) {
    notFound()
  }

  const content = await fetchContent(segment)
  const isBD = segment === 'bd-breakaway'

  return (
    <>
      <CmsBar segment={segment} fetchMs={content._meta.fetchMs} />
      <Nav />
      <Hero
        eyebrow={isBD ? undefined : 'SEI Enterprise'}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        personalized
        genericHeadline="Grow your practice with confidence."
        genericSubheadline="Explore integrated solutions designed for financial advisors at every stage."
        ctas={
          isBD ? (
            <a href="#" className="hero-cta-primary">Explore the case study &rarr;</a>
          ) : (
            <div className="hero-ctas">
              <a href="#" className="hero-cta-primary">{content.hero.cta}</a>
              <a href="#" className="hero-cta">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.7 }}>
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                </svg>
                SEI Assistant &mdash; Ask a question
              </a>
            </div>
          )
        }
      />
      {content.suggestedContent && <SuggestedContent cards={content.suggestedContent} />}
      {content.executiveSpotlight && (
        <ExecutiveSpotlight data={content.executiveSpotlight} />
      )}
      <ExpertInsights />
      {content.personalizationPrompt && <PersonalizeFurther data={content.personalizationPrompt} />}
      {content.businessAudit && <BusinessAudit data={content.businessAudit} />}
      <Footer />
      <Animations personalized />
    </>
  )
}
