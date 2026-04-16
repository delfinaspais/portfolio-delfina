'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Language } from '@/types/language'

export type { Language } from '@/types/language'

const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Skills',
      projects: 'Proyectos',
      background: 'Background',
      experience: 'Experiencia',
      contact: 'Contacto',
      seeMore: 'Ver más →',
    },
    hero: {
      greeting: 'Hola, soy',
      subtitle: 'Full-Stack Developer',
      description: 'Desarrollo aplicaciones web y móviles con React, Next.js, NestJS y Flutter.',
      viewProjects: 'Ver proyectos',
      contact: 'Contactar',
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy Delfina Spais Bretón, fullstack developer con + 3 años de experiencia construyendo aplicaciones web y móviles. Me especializo en backend con Node.js, NestJS y TypeScript, y en frontend con React, Next.js y Flutter.',
      p2: 'Tengo experiencia de punta a punta: arquitectura de sistemas, desarrollo, bases de datos, integraciones externas y despliegue en producción. Me apasiona crear soluciones escalables y bien estructuradas.',
      p3: 'Además del desarrollo, soy música — violonchelista e instructora en orquestas juveniles, y bajista sesionista - lo que me aporta habilidades en organización, enseñanza y trabajo en equipo.',
      p2Short: 'Tengo experiencia de punta a punta: arquitectura de sistemas, desarrollo, bases de datos, integraciones externas y despliegue en producción.',
      readMore: 'Leer más →',
    },
    projects: {
      title: 'Proyectos',
      viewDemo: 'Ver demo',
      code: 'Código',
      viewDetails: 'Ver detalles',
    },
    skills: {
      title: 'Tecnologías',
    },
    experience: {
      title: 'Experiencia',
      tabExperience: 'e x p e r i e n c i a',
      tabFormation: 'f o r m a c i ó n',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tenés un proyecto en mente? Me encantaría conversar.',
    },
    background: {
      title: 'Background',
      subtitle: 'd o s ~ l e n g u a j e s',
      next: 'Siguiente',
      prev: 'Anterior',
      slideDot: 'Diapositiva',
    },
    a11y: {
      closeModal: 'Cerrar',
      previousImage: 'Imagen anterior',
      nextImage: 'Imagen siguiente',
      imageNumber: 'Imagen',
      toggleMenu: 'Abrir o cerrar menú',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      background: 'Background',
      experience: 'Experience',
      contact: 'Contact',
      seeMore: 'See more →',
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Full-Stack Developer',
      description: 'I develop web and mobile applications with React, Next.js, NestJS and Flutter.',
      viewProjects: 'View projects',
      contact: 'Contact',
    },
    about: {
      title: 'About me',
      p1: 'Full-Stack Developer with 3 years of experience building web and mobile applications. I specialize in backend with Node.js, NestJS and TypeScript, and frontend with React, Next.js and Flutter.',
      p2: 'I have end-to-end experience: system architecture, development, databases, external integrations and production deployment. I am passionate about creating scalable and well-structured solutions.',
      p3: 'Besides development, I am a musician — cellist and instructor in provincial orchestras— which brings me skills in organization, teaching and teamwork.',
      p2Short: 'I have end-to-end experience: system architecture, development, databases, external integrations and production deployment.',
      readMore: 'Read more →',
    },
    projects: {
      title: 'Projects',
      viewDemo: 'View demo',
      code: 'Code',
      viewDetails: 'View details',
    },
    skills: {
      title: 'Technologies',
    },
    experience: {
      title: 'Experience',
      tabExperience: 'e x p e r i e n c e',
      tabFormation: 'e d u c a t i o n',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind? I\'d love to chat.',
    },
    background: {
      title: 'Background',
      subtitle: 'Two languages',
      next: 'Next',
      prev: 'Previous',
      slideDot: 'Slide',
    },
    a11y: {
      closeModal: 'Close',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      imageNumber: 'Image',
      toggleMenu: 'Toggle menu',
    },
  },
}

type Translations = typeof translations.es

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved === 'es' || saved === 'en') setLanguageState(saved)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])
  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
