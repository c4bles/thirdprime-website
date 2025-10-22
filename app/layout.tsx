import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Third Prime Technologies',
  description: 'Complexity Decoded. Some complexity hides in plain sight. Some is invisible by nature.',
  keywords: ['complexity', 'technology', 'cybersecurity', 'wealth management', 'dark matter'],
  authors: [{ name: 'Third Prime Technologies Ltd' }],
  creator: 'Third Prime Technologies Ltd',
  publisher: 'Third Prime Technologies Ltd',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thirdprime.io',
    title: 'Third Prime Technologies',
    description: 'Complexity Decoded. Some complexity hides in plain sight. Some is invisible by nature.',
    siteName: 'Third Prime Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Third Prime Technologies',
    description: 'Complexity Decoded. Some complexity hides in plain sight. Some is invisible by nature.',
  },
  icons: {
    icon: '/images/thirdprime-logo.png',
    shortcut: '/images/thirdprime-logo.png',
    apple: '/images/thirdprime-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}