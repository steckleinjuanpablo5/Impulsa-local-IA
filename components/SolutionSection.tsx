import { Globe, BookOpen, CalendarCheck, Sparkles, MessageCircle, LayoutDashboard, CheckCircle } from 'lucide-react'

const items = [
  { icon: Globe, label: 'Página web inteligente' },
  { icon: BookOpen, label: 'Catálogo digital' },
  { icon: CalendarCheck, label: 'Pedidos o reservaciones' },
  { icon: Sparkles, label: 'Generador de contenido con IA' },
  { icon: MessageCircle, label: 'Chatbot para preguntas frecuentes' },
  { icon: LayoutDashboard, label: 'Formulario para captar clientes' },
]

export default function SolutionSection() {
  return (
    <section id="solucion" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">La solución</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Una solución accesible para que cualquier negocio tenga presencia digital
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Impulsa Local IA reúne todo lo que un pequeño negocio necesita para estar en
              internet de forma profesional, organizada y sin pagar desarrollos caros ni
              depender de herramientas complicadas.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
            >
              Empezar ahora
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100"
              >
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-slate-700 text-sm font-medium">{label}</span>
              </div>
            ))}
            <div className="col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
              <p className="text-white text-sm font-medium">
                Todo en un solo lugar, accesible y listo para funcionar desde el primer día.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
