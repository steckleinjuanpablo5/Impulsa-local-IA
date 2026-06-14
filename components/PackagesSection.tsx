import { Check, Clock, ArrowRight } from 'lucide-react'

const packages = [
  {
    name: 'Presencia Básica',
    price: '$7,900',
    currency: 'MXN',
    tag: null,
    description: 'Para negocios que necesitan verse profesionales en internet y que sus clientes encuentren información clara.',
    ideal: 'Negocios pequeños que todavía no tienen página web.',
    delivery: '5 a 7 días hábiles',
    href: '/paquetes/presencia-basica',
    highlight: false,
    features: [
      'Página web informativa',
      'Diseño responsive',
      'Horarios y ubicación',
      'Botón de WhatsApp',
      'Sección de servicios principales',
      'SEO básico',
      'Formulario de contacto sencillo',
    ],
  },
  {
    name: 'Negocio Digital',
    price: '$14,900',
    currency: 'MXN',
    tag: 'Más solicitado',
    description: 'Para negocios que quieren mostrar sus productos o servicios y recibir solicitudes de clientes de forma ordenada.',
    ideal: 'Restaurantes, barberías, consultorios, tiendas locales y servicios que necesitan catálogo, pedidos o citas.',
    delivery: '8 a 12 días hábiles',
    href: '/paquetes/negocio-digital',
    highlight: true,
    features: [
      'Todo lo del plan Básico',
      'Catálogo digital de productos o servicios',
      'Formulario de pedidos o reservaciones',
      'Sección de promociones',
      'Captura de solicitudes de clientes',
      'Información del negocio organizada',
    ],
  },
  {
    name: 'IA Local',
    price: '$24,900',
    currency: 'MXN',
    tag: 'Completo',
    description: 'Para negocios que quieren herramientas inteligentes para atender mejor, crear contenido más rápido y diferenciarse.',
    ideal: 'Negocios que quieren diferenciarse, ahorrar tiempo en comunicación y estar listos para crecer.',
    delivery: '12 a 18 días hábiles',
    href: '/paquetes/ia-local',
    highlight: false,
    features: [
      'Todo lo del plan Digital',
      'Generador de contenido para redes',
      'Chatbot de preguntas frecuentes',
      'Panel básico de solicitudes',
      'Recomendaciones de contenido',
      'Preparado para futuras integraciones de IA',
      'Estructura lista para escalar',
    ],
  },
]

export default function PackagesSection() {
  return (
    <section id="paquetes" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Paquetes</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Elige lo que tu negocio necesita hoy
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Precio único por implementación. Sin mensualidades obligatorias. Sin sorpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border flex flex-col transition-all ${
                pkg.highlight
                  ? 'bg-blue-600 border-blue-500 shadow-2xl shadow-blue-600/25 md:scale-105'
                  : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
              }`}
            >
              <div className="p-6 flex-1">
                {pkg.tag && (
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    pkg.highlight ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {pkg.tag}
                  </div>
                )}

                <h3 className={`text-xl font-extrabold mb-1 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.name}
                </h3>

                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-4xl font-black ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm font-medium mb-1 ${pkg.highlight ? 'text-blue-200' : 'text-slate-400'}`}>
                    {pkg.currency}
                  </span>
                </div>

                <p className={`text-sm mb-1 ${pkg.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                  {pkg.description}
                </p>

                <div className={`flex items-center gap-1.5 text-xs mb-4 ${pkg.highlight ? 'text-blue-200' : 'text-slate-400'}`}>
                  <Clock className="w-3.5 h-3.5" />
                  Entrega estimada: {pkg.delivery}
                </div>

                <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${pkg.highlight ? 'text-blue-200' : 'text-slate-400'}`}>
                  Incluye
                </p>
                <ul className="space-y-2 mb-4">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-blue-200' : 'text-blue-500'}`} />
                      <span className={`text-sm ${pkg.highlight ? 'text-blue-100' : 'text-slate-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={`text-xs rounded-xl p-3 mb-4 ${pkg.highlight ? 'bg-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                  <span className={`font-semibold ${pkg.highlight ? 'text-blue-200' : 'text-slate-500'}`}>Ideal para: </span>
                  <span className={pkg.highlight ? 'text-blue-100' : 'text-slate-500'}>{pkg.ideal}</span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <a
                  href={pkg.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    pkg.highlight
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Ver paquete
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8 max-w-2xl mx-auto">
          Los precios corresponden a la implementación inicial. Servicios externos como dominio, hosting, pasarela de pago,
          WhatsApp API o herramientas de IA real pueden cotizarse por separado si el negocio los requiere.
        </p>
      </div>
    </section>
  )
}
