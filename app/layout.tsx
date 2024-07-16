// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { cn } from '@/lib/utils'
import { DM_Serif_Display, Fraunces } from 'next/font/google'
import './globals.css'

const fontHeading = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400',
})

const fontBody = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

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