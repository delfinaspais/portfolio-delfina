'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="flex items-center px-6 md:px-12 lg:px-16 py-24 h-full">
      <div className="max-w-xl text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brown-muted font-medium mb-4 text-lg"
        >
          {t.hero.greeting}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-semibold text-brown mb-4"
        >
          Delfina Spais
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-brown-light mb-8"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-brown-muted mb-12 text-lg"
        >
          {t.hero.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-start"
        >
          <a
            href="/proyectos"
            className="px-10 py-4 text-lg border border-brown/30 text-brown rounded-2xl font-medium hover:bg-brown/5 transition-colors"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="/contacto"
            className="px-10 py-4 text-lg bg-brown text-white rounded-2xl font-medium hover:bg-brown-dark transition-colors shadow-soft"
          >
            {t.hero.contact}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
