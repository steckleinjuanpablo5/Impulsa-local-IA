import { ShieldCheck, Banknote, Smartphone, Rocket, Clock, TrendingUp } from 'lucide-react'

const items = [
  { icon: Banknote, title: 'Sin mensualidades obligatorias', desc: 'El precio es por implementación. Pagas una vez y el sitio es tuyo.' },
  { icon: ShieldCheck, title: 'Solución accesible y transparente', desc: 'Sin contratos complicados ni letras chiquitas. Todo claro desde el inicio.' },
  { icon: Smartphone, title: 'Diseñada para negocios locales', desc: 'No es una plantilla genérica. Adaptamos cada proyecto al tipo de negocio.' },
  { icon: Clock, title: 'Entrega rápida', desc: 'Desde 5 días hábiles para el plan básico. Sin esperas innecesarias.' },
  { icon: Smartphone, title: 'Sitio responsive desde el primer día', desc: 'Se ve bien en celular, tablet y computadora. Sin configuración extra.' },
  { icon: TrendingUp, title: 'Preparado para crecer', desc: 'Puedes empezar con lo básico y agregar funciones cuando tu negocio lo necesite.' },
  { icon: Rocket, title: 'Publicado en internet el día de entrega', desc: 'Al finalizar, tu sitio ya está en línea y listo para compartir.' },
]

export default function ConfianzaSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Por qué elegirnos</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Una solución pensada para negocios reales
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            No pedimos experiencia técnica, ni contratos, ni mensualidades. Solo un buen negocio con ganas de crecer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
