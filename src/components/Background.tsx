export default function Background() {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/projects/background.png'), linear-gradient(180deg, #FDFCFB 0%, #FAF8F5 50%, #F7F4EF 100%)`,
        backgroundColor: '#FDFCFB',
      }}
    />
  )
}
