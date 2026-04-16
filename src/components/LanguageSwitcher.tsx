'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-20 md:top-6 right-16 md:right-16 z-50 flex gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1.5 border border-brown/10 shadow-soft">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium italic transition-colors ${
          language === 'es' ? 'bg-brown text-white' : 'text-brown-muted hover:text-brown'
        }`}
      >
        Español
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium italic transition-colors ${
          language === 'en' ? 'bg-brown text-white' : 'text-brown-muted hover:text-brown'
        }`}
      >
        English
      </button>
    </div>
  )
}
