'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 w-full">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold text-brown mb-8 text-center"
        >
          {t.about.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brown-light space-y-4 text-lg md:text-xl leading-relaxed"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </motion.div>
      </div>
    </section>
  )
}
