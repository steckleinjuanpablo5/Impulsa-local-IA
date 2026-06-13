import { AlertTriangle, Clock, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Sin página web ni catálogo claro',
    description:
      'La mayoría de los clientes buscan en Google antes de visitar un negocio. Sin presencia digital, pierdes clientes antes de que lleguen.',
    color: 'text-red-500 bg-red-50',
  },
  {
    icon: Clock,
    title: 'Pierden tiempo respondiendo las mismas preguntas',
    description:
      'Horarios, precios, ubicación, disponibilidad... responder esto por WhatsApp todo el día consume horas que podrías invertir en tu negocio.',
    color: 'text-amber-500 bg-amber-50',
  },
  {
    icon: TrendingDown,
    title: 'No aprovechan internet para atraer nuevos clientes',
    description:
      'Las recomendaciones son valiosas, pero limitadas. Sin una presencia digital, tu alcance siempre dependerá de lo que alguien cuente a otro.',
    color: 'text-blue-500 bg-blue-50',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">El problema</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Muchos negocios locales dependen solo de WhatsApp
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Redes sociales y recomendaciones no son suficientes. Los negocios que no tienen una
            presencia digital ordenada dejan escapar clientes, ventas y oportunidades todos los días.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className={`w-12 h-12 ${color.split(' ')[1]} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${color.split(' ')[0]}`} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
