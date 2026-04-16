'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Project } from '@/data/projects'
import { useLanguage } from '@/context/LanguageContext'
import { pickLocalized } from '@/types/language'

interface ProjectCardProps {
  project: Project
  index: number
  onClick?: () => void
}

function CardImage({ src, alt, fallbackLetter }: { src: string; alt: string; fallbackLetter: string }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-brown/5 to-brown/10 flex items-center justify-center">
        <span className="text-6xl font-display font-semibold text-brown/20">{fallbackLetter}</span>
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={() => setError(true)}
    />
  )
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { t, language } = useLanguage()
  return (
    <motion.article
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-brown/10 ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="aspect-[16/10] relative bg-brown/5 overflow-hidden">
        <CardImage src={project.image} alt={project.title} fallbackLetter={project.title.charAt(0)} />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-display text-2xl font-semibold text-brown mb-2 group-hover:text-brown-dark transition-colors">
          {project.title}
        </h3>
        <p className="text-brown-light text-base mb-4 line-clamp-2">
          {pickLocalized(project.description, language)}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 text-sm bg-brown/10 text-brown-light rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-base font-medium text-brown hover:text-brown-dark transition-colors"
            >
              {t.projects.code} →
            </a>
          )}
          {onClick && (
            <span className="text-sm text-brown-muted group-hover:text-brown transition-colors">
              {t.projects.viewDetails} →
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
