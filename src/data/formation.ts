import type { LocalizedString } from '@/types/language'

export interface FormationItem {
  title: LocalizedString
  institution?: LocalizedString | string
  period?: string
  description?: LocalizedString
  image?: string
}

export const formation: FormationItem[] = [
  {
    title: { es: 'Fullstack Developer', en: 'Full-Stack Developer' },
    institution: 'SoyHenry',
    period: '2023',
    image: '/formation/diploma.jpg',
  },
  {
    title: { es: 'B2 First Certificate in English (FCE)', en: 'B2 First Certificate in English (FCE)' },
    institution: 'University of Cambridge',
    period: '2019',
    image: '/formation/first-certificate.jpg',
  },
  {
    title: { es: 'Certificación en Node.js', en: 'Node.js certification' },
    institution: { es: 'Online', en: 'Online' },
    period: '2022',
    image: '/formation/node-cert.jpg',
  },
]
