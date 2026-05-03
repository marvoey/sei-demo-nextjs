import Nav from '@/app/_components/Nav'
import Hero from '@/app/_components/Hero'
import ExecutiveSpotlight from '@/app/_components/ExecutiveSpotlight'
import SuggestedContent from '@/app/_components/SuggestedContent'
import BusinessAudit from '@/app/_components/BusinessAudit'
import ExpertInsights from '@/app/_components/ExpertInsights'
import Footer from '@/app/_components/Footer'
import Animations from '@/app/_components/Animations'
import BDTransitionModal from '@/app/_components/BDTransitionModal'
import content from '@/lib/content.json'

const { hero, executiveSpotlight, suggestedContent, businessAudit, personalizationPrompt } =
  content.segments['bd-breakaway']

export const metadata = {
  title: 'BD Breakaway — SEI',
  description: 'See how a BD-affiliated advisor built a thriving independent RIA with SEI.',
}

export default function BDBreakawayPage() {
  return (
    <>
      <Nav />
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        video="/hero-video.mp4"
        ctas={
          <a href="#" className="hero-cta hero-cta-primary">
            See the story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        }
      />
      <ExecutiveSpotlight
        data={executiveSpotlight}
        image="/dakota-live-interview.png"
        imageLabel="Dakota Live: Randy Morris, CFP®"
      />
      {suggestedContent && <SuggestedContent cards={suggestedContent} />}
      {businessAudit && <BusinessAudit data={businessAudit} />}
      <ExpertInsights />
      <Footer />
      <Animations />
      {personalizationPrompt && (
        <BDTransitionModal
          question={personalizationPrompt.question}
          options={personalizationPrompt.options}
          storageKey={personalizationPrompt.storageKey ?? 'sei_transition_type'}
          triggerDelayMs={personalizationPrompt.triggerDelayMs ?? 6000}
        />
      )}
    </>
  )
}
