import { UtensilsCrossed, Scissors, Stethoscope, ShoppingBag } from 'lucide-react'

const casos = [
  {
    icon: UtensilsCrossed,
    negocio: 'Restaurante',
    color: 'text-orange-600 bg-orange-50',
    border: 'border-orange-100',
    usos: [
      'Menú digital con precios actualizados',
      'Pedidos a domicilio o para llevar',
      'Promociones de temporada',
      'Reservaciones de mesa',
    ],
  },
  {
    icon: Scissors,
    negocio: 'Barbería',
    color: 'text-blue-600 bg-blue-50',
    border: 'border-blue-100',
    usos: [
      'Lista de servicios con precios',
      'Agenda de citas en línea',
      'Promociones por temporada',
      'WhatsApp directo para agendar',
    ],
  },
  {
    icon: Stethoscope,
    negocio: 'Consultorio',
    color: 'text-emerald-600 bg-emerald-50',
    border: 'border-emerald-100',
    usos: [
      'Información profesional y credenciales',
      'Citas en línea sin llamadas',
      'Ubicación y horarios claros',
      'Preguntas frecuentes automáticas',
    ],
  },
  {
    icon: ShoppingBag,
    negocio: 'Tienda local',
    color: 'text-purple-600 bg-purple-50',
    border: 'border-purple-100',
    usos: [
      'Catálogo de productos con precios',
      'Pedidos y envíos a domicilio',
      'Promociones y descuentos visibles',
      'Formulario para cotizaciones',
    ],
  },
]

export default function CasosUsoSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Casos de uso</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Funciona para todo tipo de negocio local
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Cada negocio tiene necesidades distintas. Aquí te mostramos cómo se adapta la solución a los más comunes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {casos.map(({ icon: Icon, negocio, color, border, usos }) => (
            <div key={negocio} className={`bg-white rounded-2xl p-6 border ${border} shadow-sm hover:shadow-md transition-all`}>
              <div className={`w-12 h-12 ${color.split(' ')[1]} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${color.split(' ')[0]}`} />
              </div>
              <h3 className="font-bold text-slate-900 mb-3">{negocio}</h3>
              <ul className="space-y-2">
                {usos.map((uso) => (
                  <li key={uso} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                    {uso}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            También trabajamos con emprendimientos, servicios independientes, negocios familiares y más.
          </p>
          <a href="#contacto" className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm">
            Cuéntanos sobre tu negocio
          </a>
        </div>
      </div>
    </section>
  )
}
