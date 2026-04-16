import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#4A3728',
          dark: '#3D2914',
          light: '#6B5344',
          muted: '#8B7355',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(74, 55, 40, 0.08)',
        'soft-lg': '0 8px 40px -8px rgba(74, 55, 40, 0.1)',
        'card': '0 2px 16px -4px rgba(74, 55, 40, 0.06)',
        'card-hover': '0 12px 40px -12px rgba(74, 55, 40, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
