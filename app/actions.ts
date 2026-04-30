'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { VALID_SEGMENTS, type SegmentId } from '@/lib/segments'

export async function chooseSegment(segment: string) {
  if (!VALID_SEGMENTS.includes(segment as SegmentId)) return
  const store = await cookies()
  store.set('sei_segment', segment, { path: '/', maxAge: 60 * 60 * 24 * 30 })
  redirect(`/${segment}`)
}

export async function clearSegment() {
  const store = await cookies()
  store.delete('sei_segment')
  redirect('/')
}
