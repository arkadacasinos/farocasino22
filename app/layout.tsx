import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import './faro-landing.css'

const _inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'], variable: '--font-playfair' })

const SITE_URL = 'https://farocasino22.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Faro Casino — официальный сайт, рабочее зеркало и вход в Фаро казино играть',
  description:
    'Faro casino: обзор бренда Faro Casino — официальный сайт, рабочее зеркало Фаро казино и игра онлайн. Рассказываем простыми словами, где играть в Фаро казино без блокировок и лишних сложностей.',
  generator: 'v0.app',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Faro Casino — официальный сайт и рабочее зеркало Фаро казино',
    description:
      'Faro casino: где искать официальный сайт, зеркало и как начать играть в Фаро казино онлайн.',
    url: SITE_URL,
    siteName: 'Faro Casino',
    locale: 'ru_RU',
    type: 'website',
    images: ['/images/faro-hero.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="6c87b3440e91e90e" />
        {/* HEAD_SLOT: reserved for future verification/meta tags — do not add third-party scripts here */}
      </head>
      <body className={`${_inter.variable} ${_playfair.variable} antialiased font-sans`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
