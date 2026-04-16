'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { backgroundSlides } from '@/data/background'
import { useLanguage } from '@/context/LanguageContext'
import { pickLocalized } from '@/types/language'

export default function BackgroundSection() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = backgroundSlides
  const total = slides.length

  const goPrev = () => setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1))

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentIndex, total])

  const currentSlide = slides[currentIndex]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-brown mb-2 text-center">
          {t.background.title}
        </h2>
        <p className="text-brown-muted text-lg mb-12 text-center">
          {t.background.subtitle}
        </p>

        {/* Carrusel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-brown/10 shadow-soft"
            >
              <p className="text-brown-light text-lg md:text-xl leading-relaxed text-center mb-4">
                {pickLocalized(currentSlide.text, language)}
              </p>
              {currentSlide.subtitle && (
                <p className="text-brown-muted text-center mb-6">
                  {pickLocalized(currentSlide.subtitle, language)}
                </p>
              )}
              {currentSlide.image && (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-brown/5 mt-6">
                  <BackgroundImage src={currentSlide.image} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Flechas */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 md:-left-12 p-2 rounded-full bg-white/90 hover:bg-white text-brown shadow-lg border border-brown/10 z-10"
            aria-label={t.background.prev}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 md:-right-12 p-2 rounded-full bg-white/90 hover:bg-white text-brown shadow-lg border border-brown/10 z-10"
            aria-label={t.background.next}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Puntos */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? 'bg-brown' : 'bg-brown/30 hover:bg-brown/50'
              }`}
              aria-label={`${t.background.slideDot} ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function BackgroundImage({ src }: { src: string }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-brown/5 to-brown/10 flex items-center justify-center">
        <span className="text-4xl text-brown/20">🎻</span>
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt=""
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 48rem"
      onError={() => setError(true)}
    />
  )
}
