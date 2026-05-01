import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SEI | Financial value is created between the lines.',
  description: 'Explore integrated solutions that align investing, operations, and insight at enterprise scale.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <div className="hero-glow-trail" />
        <div className="hero-glow" />
      </body>
    </html>
  )
}
