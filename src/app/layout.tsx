import type { Metadata } from 'next'
import { Outfit, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import Sidebar from '@/components/Sidebar'
import Background from '@/components/Background'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Delfina Spais | Full-Stack Developer',
  description:
    'Delfina Spais — Full-Stack Developer (React, Next.js, NestJS, Flutter). Desarrolladora full-stack; portafolio bilingüe / bilingual portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSerifDisplay.variable}`}>
      <body className="min-h-screen flex font-sans text-brown relative">
        <Providers>
          <Background />
          <Sidebar />
          <LanguageSwitcher />
          <main className="flex-1 md:ml-48 pt-16 md:pt-0 relative z-0">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
