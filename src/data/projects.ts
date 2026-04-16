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
      es: 'Plataforma e-commerce (Full Stack)\n\nTienda online de muebles con autenticación e integración de pagos.',
      en: 'E-commerce Platform (Full Stack)\n\nOnline furniture store with authentication and payment integration.',
    },
    longDescription: {
      es: 'Desarrollo de aplicación e-commerce full-stack.\nConstruí APIs REST con Node.js y Express.\nImplementé autenticación con Auth0.\nIntegré MercadoPago para pagos online.\nDiseñé la base de datos relacional con PostgreSQL.\nDesarrollé una UI responsive con React.',
      en: 'Developed full-stack e-commerce application.\nBuilt REST APIs using Node.js and Express.\nImplemented authentication with Auth0.\nIntegrated MercadoPago for online payments.\nDesigned relational database with PostgreSQL.\nBuilt responsive UI using React.',
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
      es: 'App móvil para descubrir espacios LGBTQ+ friendly y compartir experiencias de la comunidad.',
      en: 'Mobile app to discover LGBTQ+ friendly places and share community experiences.',
    },
    longDescription: {
      es: 'Coming Out? es una aplicación móvil pensada para ayudar a descubrir espacios seguros y LGBTQ+ friendly a través de recomendaciones impulsadas por la comunidad.\n\nMi rol fue aportar al equipo en Flutter y Dart: armé y ajusté componentes de UI y colaboré en detalles de experiencia (UX/UI). También participé en pantallas e interfaces puntuales, alineadas al diseño del producto y a criterios de usabilidad.\n\nImpacto\n\n- Ayuda a encontrar espacios seguros y a sentir más confianza al explorar lugares nuevos.\n- Fomenta recomendaciones de la comunidad y un descubrimiento basado en la confianza.',
      en: 'Coming Out? is a mobile application designed to help users discover safe and LGBTQ+ friendly spaces through community-driven recommendations.\n\nI contributed as part of the team in Flutter and Dart: building and refining UI components, shipping work from the task board, and collaborating on UX/UI details. I also helped with specific screens and interfaces, aligned with the product design and usability goals.\n\nImpact\n\n- Helps users find safe spaces and feel more confident exploring new places.\n- Encourages community-driven recommendations and trust-based discovery.',
    },
    image: '/projects/coming-1.jpg',
    images: ['/projects/coming-1.jpg', '/projects/coming-2.jpg', '/projects/coming-3.jpg', '/projects/coming-4.jpg'],
    tags: ['Flutter', 'Dart', 'Mobile', 'UX', 'APIs'],
    featured: false,
  },
  {
    id: 'lambda-solution',
    title: 'Lambda Solution',
    description: {
      es: 'Desarrollo frontend (proyectos para clientes)\n\nAplicaciones web y móviles para múltiples clientes.',
      en: 'Frontend Developer (Client Projects)\n\nWeb and mobile applications for multiple clients.',
    },
    longDescription: {
      es: 'Desarrollo frontend con React y Flutter.\nConstrucción de componentes reutilizables y una arquitectura de UI escalable.\nIntegración de APIs y gestión de flujo de datos entre aplicaciones.\nColaboración en equipos Agile para entregar funcionalidades listas para producción.',
      en: 'Developed frontend applications using React and Flutter.\nBuilt reusable components and scalable UI architecture.\nIntegrated APIs and handled data flow across applications.\nCollaborated in Agile teams to deliver production-ready features.',
    },
    image: '/projects/lambda-1.png',
    images: ['/projects/lambda-1.png', '/projects/lambda-2.png', '/projects/lambda-3.png'],
    tags: ['Flutter', 'React', 'Dart', 'APIs'],
    featured: false,
  },
]
