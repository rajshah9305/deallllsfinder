import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calgary Hotel Deal Finder',
  description: 'Find the cheapest hotels in Calgary with the best value for money',
  keywords: 'Calgary hotels, cheap hotels Calgary, hotel deals, budget accommodation Calgary',
  openGraph: {
    title: 'Calgary Hotel Deal Finder',
    description: 'Find the cheapest hotels in Calgary with the best value for money',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}