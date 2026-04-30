import { NextRequest, NextResponse } from 'next/server'
import { fetchContent } from '@/lib/cms'
import { VALID_SEGMENTS, type SegmentId } from '@/lib/segments'

export async function GET(request: NextRequest) {
  const segment = request.nextUrl.searchParams.get('segment') ?? 'default'

  if (segment !== 'default' && !VALID_SEGMENTS.includes(segment as SegmentId)) {
    return NextResponse.json({ error: 'Unknown segment' }, { status: 400 })
  }

  const content = await fetchContent(segment)
  return NextResponse.json(content)
}
