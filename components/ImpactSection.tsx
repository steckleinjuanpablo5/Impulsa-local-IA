import { Star, Clock, TrendingUp, Users, Globe, Zap } from 'lucide-react'

const benefits = [
  { icon: Star, title: 'Mejor imagen profesional', desc: 'Tu negocio se ve serio y confiable desde el primer momento.' },
  { icon: Users, title: 'Más claridad para clientes', desc: 'Todo lo que el cliente necesita saber, disponible en un solo lugar.' },
  { icon: Clock, title: 'Menos tiempo respondiendo', desc: 'El chatbot responde las preguntas repetidas por ti, las 24 horas.' },
  { icon: TrendingUp, title: 'Más oportunidades de venta', desc: 'Un catálogo digital y formularios activos atrapan clientes que ya estaban buscando.' },
  { icon: Globe, title: 'Presencia digital accesible', desc: 'Sin pagar desarrollos caros ni depender de agencias grandes.' },
  { icon: Zap, title: 'Herramientas fáciles de usar', desc: 'Diseñadas para que cualquier persona pueda manejarlas sin ser técnico.' },
]

export default function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Impacto</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Lo que cambia en tu negocio
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Resultados concretos que notas desde los primeros días de tener presencia digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 text-sm">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Purpose banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Nuestro propósito</h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
            Impulsar a los pequeños negocios locales para que puedan competir, crecer y conectar
            con más clientes a través de herramientas digitales accesibles e inteligentes.
          </p>
        </div>
      </div>
    </section>
  )
}
