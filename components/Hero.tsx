import { ArrowRight, Eye, ShoppingCart, Sparkles, MessageCircle } from 'lucide-react'

const indicators = [
  { icon: Eye, label: 'Catálogo activo', color: 'text-emerald-600 bg-emerald-50' },
  { icon: ShoppingCart, label: 'Pedidos en línea', color: 'text-blue-600 bg-blue-50' },
  { icon: Sparkles, label: 'Contenido con IA', color: 'text-purple-600 bg-purple-50' },
  { icon: MessageCircle, label: 'Chatbot respondiendo', color: 'text-amber-600 bg-amber-50' },
]

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Presencia digital inteligente para negocios locales
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              Tu negocio local,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                listo para vender
              </span>{' '}
              y atender en internet.
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Creamos páginas web inteligentes, catálogos digitales, pedidos, reservaciones,
              contenido para redes y atención automática con IA para pequeños negocios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
              >
                <Eye className="w-4 h-4" />
                Ver demo
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visual panel card */}
          <div className="lg:flex justify-center hidden">
            <div className="w-full max-w-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  IL
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Panel digital</p>
                  <p className="text-slate-400 text-xs">Tu negocio en línea</p>
                </div>
                <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>

              <div className="space-y-3 mb-5">
                {indicators.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl ${color.split(' ')[1]} border border-white/5`}
                  >
                    <div className={`${color.split(' ')[0]}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{label}</span>
                    <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full" />
                  </div>
                ))}
              </div>

              <div className="bg-blue-600/20 rounded-xl p-4 border border-blue-500/30">
                <p className="text-blue-200 text-xs font-medium mb-1">Visitas hoy</p>
                <p className="text-white text-2xl font-bold">247</p>
                <p className="text-emerald-400 text-xs mt-1">+18% vs ayer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
