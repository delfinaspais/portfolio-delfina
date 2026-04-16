'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutPreview() {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-24 h-full">
      <div className="max-w-xl ml-auto text-right">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl font-semibold text-brown mb-6 text-center"
        >
          {t.about.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-brown-light space-y-4 text-lg md:text-xl leading-relaxed"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2Short}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            href="/sobremi"
            className="text-brown font-medium text-lg hover:text-brown-dark transition-colors"
          >
            {t.about.readMore}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
