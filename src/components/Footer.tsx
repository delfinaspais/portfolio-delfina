export default function Footer() {
  return (
    <footer className="border-t border-blush/40 bg-sand/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-mist">
            © {new Date().getFullYear()} Delfina Spais
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:delfina.spais@gmail.com"
              className="text-sm text-slate hover:text-charcoal transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/delfinaspais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate hover:text-charcoal transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
