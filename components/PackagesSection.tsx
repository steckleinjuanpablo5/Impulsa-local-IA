import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Presencia Básica',
    description: 'Para el negocio que quiere empezar a existir en internet.',
    highlight: false,
    features: [
      'Página web informativa',
      'Datos de contacto',
      'Horarios',
      'Ubicación',
      'Botón de WhatsApp',
    ],
  },
  {
    name: 'Negocio Digital',
    description: 'Para el negocio que quiere vender y atender en línea.',
    highlight: true,
    features: [
      'Página web completa',
      'Catálogo digital',
      'Formulario de pedidos o reservaciones',
      'Diseño responsive',
      'Información del negocio organizada',
    ],
  },
  {
    name: 'IA Local',
    description: 'Para el negocio que quiere automatizar y crecer con inteligencia.',
    highlight: false,
    features: [
      'Todo lo del plan anterior',
      'Generador de contenido con IA',
      'Chatbot de preguntas frecuentes',
      'Panel básico de solicitudes',
      'Herramientas para mejorar la atención',
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
            Cada paquete puede ajustarse según el tamaño y necesidades de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 border transition-all ${
                pkg.highlight
                  ? 'bg-blue-600 border-blue-500 shadow-xl shadow-blue-600/20 scale-105'
                  : 'bg-white border-slate-100 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.highlight && (
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold mb-3">
                  Más popular
                </div>
              )}
              <h3 className={`text-xl font-extrabold mb-2 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-6 ${pkg.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                {pkg.description}
              </p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span className={`text-sm ${pkg.highlight ? 'text-blue-100' : 'text-slate-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block text-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  pkg.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Solicitar información
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Los paquetes pueden ajustarse según el tamaño y necesidades de cada negocio.
        </p>
      </div>
    </section>
  )
}
