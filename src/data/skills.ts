import type { LocalizedString } from '@/types/language'

export interface SkillCategory {
  id: string
  name: LocalizedString
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: { es: 'Frontend', en: 'Frontend' },
    skills: ['React', 'Next.js', 'Svelte', 'SvelteKit', 'Flutter', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
  },
  {
    id: 'backend',
    name: { es: 'Backend', en: 'Backend' },
    skills: ['Node.js', 'NestJS', 'Express', 'TypeScript'],
  },
  {
    id: 'database',
    name: { es: 'Base de datos', en: 'Database' },
    skills: ['PostgreSQL', 'Prisma ORM'],
  },
  {
    id: 'apis',
    name: { es: 'APIs y servicios', en: 'APIs & services' },
    skills: ['Firebase', 'Google APIs', 'WhatsApp API', 'Auth0', 'MercadoPago', 'Stripe'],
  },
  {
    id: 'tools',
    name: { es: 'Herramientas', en: 'Tools' },
    skills: ['Git', 'Railway', 'Vercel', 'Vitest', 'Playwright'],
  },
]
