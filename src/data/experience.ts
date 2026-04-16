import type { LocalizedString } from '@/types/language'

export interface ExperienceItem {
  company: string
  role: string
  period: LocalizedString
  description: LocalizedString
}

export const experience: ExperienceItem[] = [
  {
    company: 'OACG (Clinera)',
    role: 'Backend Developer',
    period: { es: '2025', en: '2025' },
    description: {
      es: 'SaaS para clínicas en Chile. Arquitectura backend completa con NestJS, multi-tenant, PostgreSQL, integraciones Firebase, Google Calendar, WhatsApp.',
      en: 'SaaS for clinics in Chile. Full backend architecture with NestJS, multi-tenant PostgreSQL, Firebase, Google Calendar and WhatsApp integrations.',
    },
  },
  {
    company: 'Orien CRM',
    role: 'Frontend Developer',
    period: { es: '2025–presente', en: '2025–present' },
    description: {
      es: 'CRM web para gestión de afiliados de salud. SvelteKit, Svelte 5, RBAC con 7 roles, módulos Contact Center, Auditoría y Búsqueda.',
      en: 'Web CRM for health affiliate management. SvelteKit, Svelte 5, RBAC with 7 roles, Contact Center, Audit and Search modules.',
    },
  },
  {
    company: 'Lambda Solution',
    role: 'Frontend Developer',
    period: { es: '2023–presente', en: '2023–present' },
    description: {
      es: 'Desarrollo frontend web y móvil con Flutter y React para múltiples clientes.',
      en: 'Web and mobile frontend development with Flutter and React for multiple clients.',
    },
  },
  {
    company: 'MSC Amoblamientos',
    role: 'Full-Stack Developer',
    period: { es: '2023', en: '2023' },
    description: {
      es: 'E-commerce con React, Node.js, Express, PostgreSQL, Auth0, MercadoPago. Deploy en Vercel.',
      en: 'E-commerce with React, Node.js, Express, PostgreSQL, Auth0, Mercado Pago. Deployed on Vercel.',
    },
  },
]
