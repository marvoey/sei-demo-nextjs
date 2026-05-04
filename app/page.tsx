import { cookies } from 'next/headers'
import Animations from './_components/Animations'
import Nav from './_components/Nav'
import Footer from './_components/Footer'
import Hero from './_components/Hero'
import ExecutiveSpotlight from './_components/ExecutiveSpotlight'
import GetToKnowSEI from './_components/GetToKnowSEI'
import TrustedBy from './_components/TrustedBy'
import ByNumbers from './_components/ByNumbers'
import ExpertInsights from './_components/ExpertInsights'
import StayConnected from './_components/StayConnected'
import WelcomeBar from './_components/WelcomeBar'

const DEFAULT_SPOTLIGHT = {
  eyebrow: 'Executive Spotlight',
  tag: 'Dakota Live',
  headline: 'Dakota Live: Inside SEI:',
  body: 'CEO Ryan Hicke–joined by Michael Lane, Head of Asset Management, and Sean Lawlor, Head of our Traditional Investment Managers business– shares insights on leadership, culture, and how SEI is prioritizing client-centric growth and innovation.',
  quote: 'Innovation across areas like alternatives, tokenization, data, and technology — including AI — is shaping better outcomes for clients.',
  attribution: 'Ryan Hicke',
  attributionTitle: 'Chief Executive Officer, SEI',
  cta: 'Watch the full conversation',
}

export default async function Home() {
  const cookieStore = await cookies()
  const segment = cookieStore.get('sei_segment')?.value ?? null

  return (
    <>
      {segment && <WelcomeBar segment={segment} />}
      <Nav />
      <Hero
        eyebrow="SEI Enterprise"
        headline="Financial value is created between the lines."
        subheadline="Explore integrated solutions that align investing, operations, and insight at enterprise scale."
        video="/hero-video.mp4"
      />
      <ExecutiveSpotlight data={DEFAULT_SPOTLIGHT} />
      <GetToKnowSEI />
      <TrustedBy />
      <ByNumbers />
      <ExpertInsights />
      <StayConnected />
      <Footer />
      <Animations />
    </>
  )
}
