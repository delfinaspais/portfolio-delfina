import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-brown/10">
        <Hero />
      </div>
      <div className="flex-1 flex items-center">
        <AboutPreview />
      </div>
    </div>
  )
}
