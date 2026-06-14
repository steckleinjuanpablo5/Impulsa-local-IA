import { Search, ArrowRight } from 'lucide-react'

export default function DiagnosticoSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-700 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Search className="w-7 h-7 text-white" />
        </div>
        <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Diagnóstico gratuito</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          ¿No sabes qué necesita tu negocio?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          No tienes que decidir solo. Cuéntanos sobre tu negocio y te decimos qué funciones
          te convienen más, qué paquete se adapta a tu situación y por dónde empezar.
          Sin costo y sin compromiso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Quiero mi diagnóstico gratuito
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
          >
            Ver el demo primero
          </a>
        </div>
        <p className="text-blue-300 text-xs mt-6">
          Respondemos en menos de 24 horas hábiles.
        </p>
      </div>
    </section>
  )
}
