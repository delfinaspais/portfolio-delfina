import type { LocalizedString } from '@/types/language'

export interface Project {
  id: string
  title: string
  description: LocalizedString
  longDescription?: LocalizedString
  image: string
  images?: string[]
  tags: string[]
  links?: {
    demo?: string
    repo?: string
  }
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'clinera',
    title: 'Clinera',
    description: {
      es: 'SaaS para clínicas y centros médicos en Chile. Gestión de turnos, pacientes, reportes, suscripciones y notificaciones.',
      en: 'SaaS for clinics and medical centers in Chile. Appointments, patients, reports, subscriptions and notifications.',
    },
    longDescription: {
      es: 'Plataforma SaaS completa para clínicas y centros médicos. Desarrollé toda la arquitectura backend desde cero con arquitectura multi-tenant, autenticación JWT con 5 roles, integración con Firebase, Google Calendar y WhatsApp Business API.',
      en: 'Full SaaS platform for clinics and medical centers. I built the entire backend architecture from scratch with multi-tenant design, JWT auth with 5 roles, and integrations with Firebase, Google Calendar and the WhatsApp Business API.',
    },
    image: '/projects/clinera.jpg',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Firebase', 'Railway'],
    featured: true,
  },
  {
    id: 'orien-crm',
    title: 'Orien CRM',
    description: {
      es: 'CRM para gestión de afiliados de salud y auditorías de autorizaciones médicas.',
      en: 'CRM for health affiliate management and medical authorization audits.',
    },
    longDescription: {
      es: 'Aplicación web CRM con módulos de Contact Center, Auditoría y Búsqueda de Afiliados. Frontend desarrollado con SvelteKit y Svelte 5, RBAC con 7 roles de usuario.',
      en: 'Web CRM with Contact Center, Audit and Affiliate Search modules. Frontend built with SvelteKit and Svelte 5, RBAC with 7 user roles.',
    },
    image: '/projects/orien-crm.jpg',
    tags: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind', 'DaisyUI'],
    featured: true,
  },
  {
    id: 'msc-amoblamientos',
    title: 'MSC Amoblamientos',
    description: {
      es: 'E-commerce de muebles con autenticación Auth0 e integración MercadoPago.',
      en: 'Furniture e-commerce with Auth0 authentication and Mercado Pago integration.',
    },
    image: '/projects/msc-3.png',
    images: ['/projects/msc.png', '/projects/msc-2.png', '/projects/msc-3.png'],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Auth0', 'MercadoPago', 'Vercel'],
    featured: false,
  },
  {
    id: 'coming-out',
    title: 'Coming Out? App',
    description: {
      es: 'Aplicación móvil desarrollada con Flutter.',
      en: 'Mobile app built with Flutter.',
    },
    image: '/projects/coming-out.jpg',
    tags: ['Flutter', 'Dart'],
    featured: false,
  },
  {
    id: 'lambda-solution',
    title: 'Lambda Solution',
    description: {
      es: 'Desarrollo frontend de aplicaciones web y móviles para múltiples clientes.',
      en: 'Frontend development for web and mobile apps for multiple clients.',
    },
    image: '/projects/lambda-1.png',
    images: ['/projects/lambda-1.png', '/projects/lambda-2.png', '/projects/lambda-3.png'],
    tags: ['Flutter', 'React', 'Dart', 'APIs'],
    featured: false,
  },
]
