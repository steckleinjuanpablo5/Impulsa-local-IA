'use client'

import { ShoppingBag } from 'lucide-react'

const products = [
  {
    name: 'Corte clásico',
    description: 'Corte de cabello con acabado profesional y lavado incluido.',
    price: '$180',
    tag: 'Popular',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Corte y barba',
    description: 'Corte completo más arreglo y perfilado de barba.',
    price: '$250',
    tag: 'Más pedido',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Paquete familiar',
    description: 'Cortes para hasta 3 personas con descuento especial incluido.',
    price: '$499',
    tag: 'Ahorro',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Promoción semanal',
    description: 'Corte + barba + tratamiento capilar por tiempo limitado.',
    price: '$299',
    tag: 'Oferta',
    tagColor: 'bg-pink-100 text-pink-700',
  },
]

export default function CatalogDemo() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 flex items-center gap-3">
        <ShoppingBag className="w-5 h-5 text-white" />
        <div>
          <h3 className="text-white font-bold">Catálogo digital</h3>
          <p className="text-amber-100 text-xs">Demo — Barbería El Estilo</p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="border border-slate-100 rounded-xl p-4 hover:border-amber-200 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-slate-900 text-sm">{product.name}</h4>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${product.tagColor}`}>
                  {product.tag}
                </span>
              </div>
              <p className="text-slate-500 text-xs mb-3 leading-relaxed">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-extrabold text-slate-900">{product.price}</span>
                <button
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                  onClick={() => alert('Demo: en tu página real, esto abriría el formulario de solicitud.')}
                >
                  <ShoppingBag className="w-3 h-3" />
                  Solicitar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-xs text-slate-400 text-center">
            Demo ilustrativo. En tu negocio real, los productos, precios y botones serán los tuyos.
          </p>
        </div>
      </div>
    </div>
  )
}
