import { Zap } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Demo', href: '#demo' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Impulsa<span className="text-blue-400"> Local IA</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
              Presencia digital inteligente y accesible para pequeños negocios locales.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-xs text-slate-600">
            Proyecto académico desarrollado para pequeños negocios locales. &copy; {new Date().getFullYear()} Impulsa Local IA.
          </p>
        </div>
      </div>
    </footer>
  )
}
