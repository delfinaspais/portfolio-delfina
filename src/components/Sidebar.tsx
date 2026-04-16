'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const navLinks = [
  { href: '/sobremi', key: 'about' as const },
  { href: '/proyectos', key: 'projects' as const },
  { href: '/background', key: 'background' as const },
  { href: '/skills', key: 'skills' as const },
  { href: '/experiencia', key: 'experience' as const },
  { href: '/contacto', key: 'contact' as const },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-30 flex-col bg-white/55 backdrop-blur-xl border-r border-brown/10 text-brown z-50">
        <div className="p-6">
          <Link href="/" className="block">
            <Image
              src="/projects/logo.png"
              alt="Delfina Spais"
              width={200}
              height={200}
              className="h-20 w-auto object-contain"
            />
          </Link>
        </div>
        <nav className="flex-1 px-6">
          <ul className="flex flex-col gap-14">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-base md:text-lg transition-colors ${
                    pathname === link.href ? 'text-brown font-medium' : 'text-brown-muted hover:text-brown'
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-6 space-y-6">
          <div className="flex gap-4">
            <a
              href="mailto:delfina.spais@gmail.com"
              className="text-brown-muted hover:text-brown transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/delfinaspais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-muted hover:text-brown transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <Link href="/sobremi" className="text-sm text-brown-muted hover:text-brown transition-colors block">
            {t.nav.seeMore}
          </Link>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/55 backdrop-blur-xl border-b border-brown/10">
        <nav className="px-6 py-4 flex items-center justify-between">
          <Link href="/" className="block">
            <Image
              src="/projects/logo.png"
              alt="Delfina Spais"
              width={56}
              height={56}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 rounded-lg hover:bg-brown/5 transition-colors text-brown"
            aria-label={t.a11y.toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-brown/10"
            >
              <ul className="px-6 py-4 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-base text-brown-muted hover:text-brown transition-colors py-2"
                    >
                      {t.nav[link.key]}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 flex gap-4">
                  <a href="mailto:delfina.spais@gmail.com" className="text-base text-brown-muted hover:text-brown">Email</a>
                  <a href="https://linkedin.com/in/delfinaspais" target="_blank" rel="noopener noreferrer" className="text-base text-brown-muted hover:text-brown">LinkedIn</a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
