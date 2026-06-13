import DemoGenerator from './DemoGenerator'
import ChatbotDemo from './ChatbotDemo'
import CatalogDemo from './CatalogDemo'

export default function DemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Demo interactivo</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Prueba las herramientas en acción
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Estas demos son simulaciones para que veas cómo funcionaría en tu negocio real.
            No usan inteligencia artificial conectada ni datos reales.
          </p>
        </div>

        <div className="space-y-8">
          {/* Generator */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Generador de contenido para redes</h3>
            <DemoGenerator />
          </div>

          {/* Chatbot + Catalog */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Chatbot de atención</h3>
              <ChatbotDemo />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Catálogo digital</h3>
              <CatalogDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
