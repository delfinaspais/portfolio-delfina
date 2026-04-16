'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { useLanguage } from '@/context/LanguageContext'
import type { Project } from '@/data/projects'

export default function Projects() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 w-full min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold text-brown mb-12 text-center"
        >
          {t.projects.title}
        </motion.h2>

        {/* Featured - grid 2 cols */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Others - grid 3 cols */}
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + featured.length}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
