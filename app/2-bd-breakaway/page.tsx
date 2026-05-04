import Nav from '@/app/_components/Nav'
import Hero from '@/app/_components/Hero'
import ExecutiveSpotlightBD from '@/app/_components/ExecutiveSpotlightBD'
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
        video="/journey-2/Hero-Video.mp4"
        variant="orange"
        ctas={<></>}
      />
      <ExecutiveSpotlightBD
        data={executiveSpotlight}
        image="/journey-2/Image-Randy-Morris-CFP.png"
        overlayTitle="Partnering with purpose"
      />
      {suggestedContent && <SuggestedContent cards={suggestedContent} />}
      {businessAudit && <BusinessAudit data={businessAudit} backgroundImage="/journey-2/OrangeSection.png" />}
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
