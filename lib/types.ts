export interface Article {
  type: string
  category: string
  author: string
  initials: string
  authorTitle: string
  headline: string
  excerpt: string
}

export interface HeroData {
  eyebrow?: string
  headline: string
  subheadline: string
  cta?: string
}

export interface SpotlightData {
  eyebrow: string
  tag: string
  headline: string
  body: string
  quote: string
  attribution: string
  attributionTitle: string
  cta: string
}

export interface SuggestedCard {
  tag: string
  headline: string
  body: string
  cta: string
}

export interface PersonalizationPrompt {
  label: string
  question: string
  options: string[]
}

export interface BusinessAuditData {
  headline: string
  body: string
  cta: string
}

export interface FooterColumn {
  heading: string
  links: string[]
}

export interface ContentData {
  label: string
  hero: HeroData
  executiveSpotlight?: SpotlightData
  suggestedContent?: SuggestedCard[]
  personalizationPrompt?: PersonalizationPrompt
  businessAudit?: BusinessAuditData
  nav: { links: string[]; utilityLinks: string[] }
  expertInsights: {
    eyebrow: string
    headline: string
    cta: string
    articles: Article[]
  }
  footer: {
    columns: FooterColumn[]
    legal: string[]
    copyright: string
  }
  _meta: { segment: string; fetchMs: number }
}
