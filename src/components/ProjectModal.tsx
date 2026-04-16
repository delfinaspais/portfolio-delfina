'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/data/projects'
import { useLanguage } from '@/context/LanguageContext'
import { pickLocalized } from '@/types/language'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

function ProjectImage({ src, alt, fallbackLetter, objectFit = 'contain' }: { src: string; alt: string; fallbackLetter: string; objectFit?: 'contain' | 'cover' }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-brown/5 to-brown/10 flex items-center justify-center">
        <span className="text-8xl font-display font-semibold text-brown/20">{fallbackLetter}</span>
      </div>
    )
  }
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className={objectFit === 'contain' ? 'object-contain' : 'object-cover'}
        sizes="(max-width: 768px) 100vw, 48rem"
        onError={() => setError(true)}
      />
    </>
  )
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage()
  const images = project?.images?.length ? project.images : project ? [project.image] : []
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goPrev = () => setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const goNext = () => setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  useEffect(() => {
    if (project) setCurrentImageIndex(0)
  }, [project])

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (project && images.length > 1) {
        if (e.key === 'ArrowLeft') setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1))
        if (e.key === 'ArrowRight') setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1))
      }
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeydown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [project, onClose, images.length])

  return (
    <AnimatePresence>
      {project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-brown/10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-brown transition-colors"
            aria-label={t.a11y.closeModal}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Images - Carrusel */}
          <div className="relative aspect-video bg-brown/5 overflow-hidden min-h-[280px]">
            {images.length > 0 && (
              <ProjectImage
                src={images[currentImageIndex]}
                alt={project.title}
                fallbackLetter={project.title.charAt(0)}
                objectFit="contain"
              />
            )}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-brown shadow-lg transition-colors"
                  aria-label={t.a11y.previousImage}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-brown shadow-lg transition-colors"
                  aria-label={t.a11y.nextImage}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i) }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentImageIndex ? 'bg-brown' : 'bg-white/70 hover:bg-white'
                      }`}
                      aria-label={`${t.a11y.imageNumber} ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brown mb-4">
              {project.title}
            </h2>
            <p className="text-brown-light text-lg mb-4">
              {pickLocalized(project.description, language)}
            </p>
            {project.longDescription && (
              <p className="text-brown-muted text-base leading-relaxed mb-6">
                {pickLocalized(project.longDescription, language)}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 text-sm bg-brown/10 text-brown-light rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-brown/30 text-brown rounded-2xl font-medium hover:bg-brown/5 transition-colors"
                >
                  {t.projects.code} →
                </a>
            )}
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  )
}
