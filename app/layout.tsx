import { Analytics } from '@vercel/analytics/next'
import { Sora, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Airlie Beach Removalists',
  description: 'Professional moving services in Airlie Beach and surrounding areas',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/truck-3d.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/truck-3d.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/truck-3d.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f37828' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} bg-background`}>
      <body className="antialiased font-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
