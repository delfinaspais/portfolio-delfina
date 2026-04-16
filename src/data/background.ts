import type { LocalizedString } from '@/types/language'

export interface BackgroundSlide {
  text: LocalizedString
  subtitle?: LocalizedString
  image?: string
}

export const backgroundSlides: BackgroundSlide[] = [
  {
    text: {
      es: 'Practicar un instrumento y desarrollar software comparten la misma lógica: iteración constante, atención al detalle y mejora continua.',
      en: 'Practicing an instrument and building software share the same logic: constant iteration, attention to detail and continuous improvement.',
    },
    subtitle: {
      es: 'e n f o q u e  -  d i s c i p l i n a',
      en: 'f o c u s  -  d i s c i p l i n e',
    },
    image: '/background/1.png',
  },
  {
    text: {
      es: 'Años de estudio musical me enseñaron a sostener procesos largos. Esa constancia es la base de cómo escribo y mantengo código.',
      en: 'Years of musical study taught me to sustain long processes. That consistency is how I write and maintain code.',
    },
    subtitle: {
      es: 'e n f o q u e  -  a b s t r a c c i ó n',
      en: 'f o c u s  -  a b s t r a c t i o n',
    },
    image: '/background/2.png',
  },
  {
    text: {
      es: 'Leer una partitura y leer código requieren la misma habilidad: entender una estructura antes de ejecutarla.',
      en: 'Reading a score and reading code require the same skill: understanding a structure before you run it.',
    },
    image: '/background/3.jpg',
  },
  {
    text: {
      es: 'Tocar en conjunto implica escuchar, adaptarse y respetar tiempos. En equipos de desarrollo, trabajo de la misma manera.',
      en: 'Playing in an ensemble means listening, adapting and respecting timing. I work the same way on development teams.',
    },
    image: '/background/4.jpg',
  },
  {
    text: {
      es: 'Tocar y programar son formas distintas de resolver problemas complejos.',
      en: 'Playing and programming are different ways to solve complex problems.',
    },
    image: '/background/5.jpg',
  },
  {
    text: {
      es: 'La música me enseñó que el resultado final importa tanto como el proceso. El código también se escribe para ser usado, no solo para funcionar.',
      en: 'Music taught me that the final result matters as much as the process. Code is written to be used, not only to work.',
    },
    image: '/background/6.jpg',
  },
]
