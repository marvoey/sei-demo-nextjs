export const SEGMENTS = {
  'bd-breakaway': {
    id: 'bd-breakaway',
    label: 'BD Breakaway',
    icon: '📈',
    desc: 'Moving from a broker-dealer to independence',
  },
  'enterprise-ria': {
    id: 'enterprise-ria',
    label: 'Enterprise RIA',
    icon: '🏢',
    desc: 'Established independent advisory firm at scale',
  },
} as const

export type SegmentId = keyof typeof SEGMENTS

export const VALID_SEGMENTS = Object.keys(SEGMENTS) as SegmentId[]

export function getSegmentMeta(id: string) {
  return SEGMENTS[id as SegmentId] ?? null
}
