import contentData from './content.json'
import type { ContentData } from './types'

export async function fetchContent(segment: string): Promise<ContentData> {
  const start = Date.now()
  const segments = contentData.segments as Record<string, unknown>
  const segmentData = (segments[segment] ?? segments['default']) as Record<string, unknown>
  return {
    ...contentData.shared,
    ...segmentData,
    _meta: { segment, fetchMs: Date.now() - start },
  } as ContentData
}
