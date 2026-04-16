'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { useLanguage } from '@/context/LanguageContext'
import { pickLocalized } from '@/types/language'

export default function Skills() {
  const { t, language } = useLanguage()
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 w-full">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold text-brown mb-12 text-center"
        >
          {t.skills.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-brown/10 shadow-card"
            >
              <h3 className="font-display font-semibold text-brown mb-4 text-xl">
                {pickLocalized(category.name, language)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-base bg-brown/5 text-brown-light rounded-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
