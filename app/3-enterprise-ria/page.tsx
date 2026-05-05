import Nav from '@/app/_components/Nav'
import Hero from '@/app/_components/Hero'
import SuggestedContent from '@/app/_components/SuggestedContent'
import BusinessAudit from '@/app/_components/BusinessAudit'
import ExpertInsightsBD from '@/app/_components/ExpertInsightsBD'
import Footer from '@/app/_components/Footer'
import Animations from '@/app/_components/Animations'
import ETFModal from '@/app/_components/ETFModal'
import content from '@/lib/content.json'

const { suggestedContent, businessAudit, personalizationPrompt } = content.segments['enterprise-ria']

export const metadata = {
  title: 'Enterprise RIA — SEI',
  description: 'Explore integrated solutions that align investing, operations, and insight at enterprise scale.',
}

export default function EnterpriseRIAPage() {
  return (
    <>
      <Nav />
      <Hero
        eyebrow="SEI Enterprise"
        headline="Financial value is created between the lines."
        subheadline="Explore integrated solutions that align investing, operations, and insight at enterprise scale."
        video="/hero-video.mp4"
      />
      {suggestedContent && <SuggestedContent cards={suggestedContent} />}
      {businessAudit && <BusinessAudit data={businessAudit} backgroundImage="/journey-2/OrangeSection.png" />}
      <ExpertInsightsBD />
      <Footer />
      <Animations />
      {personalizationPrompt && (
        <ETFModal
          question={personalizationPrompt.question}
          options={personalizationPrompt.options}
          storageKey={personalizationPrompt.storageKey ?? 'sei_etf_need'}
          triggerDelayMs={personalizationPrompt.triggerDelayMs ?? 6000}
          redirectMap={{
            'Evaluate how SEI ETFs fit into our portfolios': '/3-enterprise-ria/etf-evaluation',
          }}
        />
      )}
    </>
  )
}
