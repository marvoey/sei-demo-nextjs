import Nav from '@/app/_components/Nav'
import RecommendedContent from '@/app/_components/RecommendedContent'
import TrustedByRIA from '@/app/_components/TrustedByRIA'
import ConsultationBanner from '@/app/_components/ConsultationBanner'
import AdvisorTools from '@/app/_components/AdvisorTools'
import StayConnected from '@/app/_components/StayConnected'
import Footer from '@/app/_components/Footer'
import Animations from '@/app/_components/Animations'

export const metadata = {
  title: 'Recommendations — BD Breakaway — SEI',
  description: 'Expert recommendations for advisors navigating the BD breakaway journey with SEI.',
}

export default function RecommendationsPage() {
  return (
    <>
      <Nav />
      <RecommendedContent />
      <TrustedByRIA />
      <ConsultationBanner />
      <AdvisorTools />
      <StayConnected />
      <Footer />
      <Animations />
    </>
  )
}
