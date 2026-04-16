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
      es: 'Participación en el desarrollo de Orien CRM, un CRM orientado al sector salud para la gestión de afiliados y la auditoría de autorizaciones médicas. Construí interfaces y flujos en SvelteKit y Svelte 5 con TypeScript, estilado con Tailwind CSS y DaisyUI, incluyendo módulos como centro de contacto, auditoría y búsqueda de afiliados, con control de acceso por roles (RBAC) y siete perfiles de usuario.',
      en: 'I contributed to Orien CRM, a health-sector CRM for affiliate management and medical authorization audits. I built interfaces and flows in SvelteKit and Svelte 5 with TypeScript, styled with Tailwind CSS and DaisyUI, including contact center, audit and affiliate search modules, with role-based access control (RBAC) and seven user profiles.',
    },
    longDescription: {
      es: 'En ORIEN trabajé en el producto Orien CRM, una aplicación web para equipos operativos y de cumplimiento en salud. El sistema centraliza la gestión de afiliados y apoya procesos de revisión y auditoría de autorizaciones médicas, reduciendo fricción entre áreas y estandarizando la información que ven los distintos roles.\n\nMi foco estuvo en el frontend: diseño e implementación de pantallas y flujos de trabajo en SvelteKit y Svelte 5 con TypeScript, priorizando claridad operativa, consistencia visual y buen rendimiento. Para la UI utilicé Tailwind CSS y DaisyUI, alineado a un diseño sobrio y usable en entornos corporativos.\n\nColaboré en módulos clave como centro de contacto (seguimiento y gestión de interacciones), auditoría (trazabilidad y revisión de autorizaciones) y búsqueda de afiliados (consulta y validación de datos de afiliación). Además participé en la capa de seguridad y permisos, implementando RBAC con siete roles para limitar acciones y datos según responsabilidad.',
      en: 'At ORIEN I worked on Orien CRM, a web application for operational and compliance teams in healthcare. The system centralizes affiliate management and supports review and audit workflows for medical authorizations, reducing friction between teams and standardizing what each role sees.\n\nMy focus was the frontend: designing and implementing screens and workflows in SvelteKit and Svelte 5 with TypeScript, prioritizing operational clarity, visual consistency and performance. For the UI I used Tailwind CSS and DaisyUI, aligned with a sober, corporate-friendly design.\n\nI contributed to key modules such as the contact center (tracking and managing interactions), audit (traceability and review of authorizations) and affiliate search (querying and validating membership data). I also worked on the security and permissions layer, implementing RBAC with seven roles to scope actions and data by responsibility.',
    },
    image: '/projects/orien-2.png',
    images: ['/projects/orien-2.png', '/projects/orien-1.png', '/projects/orien-3.png'],
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
