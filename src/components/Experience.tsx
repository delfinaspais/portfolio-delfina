'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { formation } from '@/data/formation'
import { useLanguage } from '@/context/LanguageContext'
import { pickLocalized, pickLocalizedOrString } from '@/types/language'

function FormationImage({ src }: { src: string }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-brown/5">
        <span className="text-3xl text-brown/20">📜</span>
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt=""
      fill
      className="object-contain"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={() => setError(true)}
    />
  )
}

export default function Experience() {
  const { t, language } = useLanguage()
  const [tab, setTab] = useState<'experience' | 'formation'>('experience')

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 w-full">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold text-brown mb-8 text-center"
        >
          {t.experience.title}
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setTab('experience')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              tab === 'experience' ? 'bg-brown text-white' : 'bg-brown/10 text-brown-muted hover:text-brown'
            }`}
          >
            {t.experience.tabExperience}
          </button>
          <button
            onClick={() => setTab('formation')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              tab === 'formation' ? 'bg-brown text-white' : 'bg-brown/10 text-brown-muted hover:text-brown'
            }`}
          >
            {t.experience.tabFormation}
          </button>
        </div>

        {tab === 'experience' && (
          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-brown/20" />
            <div className="space-y-12">
              {experience.map((item) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className="absolute left-0 w-3 h-3 rounded-full bg-brown top-1.5" />
                  <div className="bg-white rounded-2xl p-6 border border-brown/10 shadow-card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-brown text-xl">
                        {item.role}
                      </h3>
                      <span className="text-base text-brown-muted font-medium">
                        {pickLocalized(item.period, language)}
                      </span>
                    </div>
                    <p className="text-brown-muted text-base mb-3">{item.company}</p>
                    <p className="text-brown-light text-base leading-relaxed">
                      {pickLocalized(item.description, language)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {tab === 'formation' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formation.map((item, i) => (
              <motion.article
                key={item.title.es + i}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-brown/10 shadow-card overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] relative bg-brown/5 shrink-0 overflow-hidden">
                  {item.image ? (
                    <FormationImage src={item.image} />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl text-brown/20">📜</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display font-semibold text-brown text-lg mb-1">
                    {pickLocalized(item.title, language)}
                  </h3>
                  {item.institution && (
                    <p className="text-brown-muted text-sm mb-1">
                      {pickLocalizedOrString(item.institution, language)}
                    </p>
                  )}
                  {item.period && (
                    <p className="text-brown-muted text-sm mb-2">{item.period}</p>
                  )}
                  {item.description && (
                    <p className="text-brown-light text-sm leading-relaxed mt-auto">
                      {pickLocalized(item.description, language)}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
