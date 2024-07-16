// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import '@/global/global.css'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

import { IBM_Plex_Sans, Taviraj } from 'next/font/google'

const fontHeading = Taviraj({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400',
})

const fontBody = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400',
})
export const metadata: Metadata = {
  title: 'DisplayMason',
  description: 'DisplayMason brings intuitive display alignment to macOS. Press ⌘ + R and move your mouse to the edge of the screen where you want to snap your other display.',
  twitter: {
    card: 'summary_large_image',
    site: '@displaymason',
    creator: '@displaymason',
  },
  openGraph: {
    title: 'DisplayMason',
    description: 'DisplayMason brings intuitive display alignment to macOS. Press ⌘ + R and move your mouse to the edge of the screen where you want to snap your other display.',
    images: [
      {
        url: 'https://displaymason.com/header-image.png',
        width: 1200,
        height: 630,
        alt: 'DisplayMason',
      },],
    url: 'https://displaymason.com',
    type: 'website',
    siteName: 'DisplayMason',
  },
  keywords: ['display', 'alignment', 'macos', 'displaymason', 'productivity', 'developer', 'creative', 'designer'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}