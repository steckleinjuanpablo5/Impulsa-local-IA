const steps = [
  {
    number: '01',
    title: 'Conocemos tu negocio',
    description: 'Platicamos contigo para entender qué vendes, quiénes son tus clientes y qué necesitas mostrar en internet.',
  },
  {
    number: '02',
    title: 'Creamos tu presencia digital',
    description: 'Diseñamos tu página web con catálogo, horarios, contacto y la información más importante de tu negocio.',
  },
  {
    number: '03',
    title: 'Activamos catálogo, pedidos y chatbot',
    description: 'Configuramos las funciones que necesitas: pedidos, reservaciones y chatbot para atender a tus clientes de forma automática.',
  },
  {
    number: '04',
    title: 'Te ayudamos a publicar y atraer clientes',
    description: 'Te enseñamos a usar el generador de contenido para mantener activas tus redes y seguir creciendo.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Proceso</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Así funciona Impulsa Local IA
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Un proceso sencillo y acompañado para que tu negocio esté en internet sin complicaciones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-blue-800 z-0" />
              )}
              <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-600/50 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-extrabold text-sm">{step.number}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
