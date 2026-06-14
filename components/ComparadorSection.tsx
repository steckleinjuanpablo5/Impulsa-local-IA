import { Check, Minus } from 'lucide-react'

const rows = [
  { feature: 'Página web profesional', basica: true, digital: true, ia: true },
  { feature: 'Diseño responsive', basica: true, digital: true, ia: true },
  { feature: 'SEO básico', basica: true, digital: true, ia: true },
  { feature: 'Botón de WhatsApp', basica: true, digital: true, ia: true },
  { feature: 'Formulario de contacto', basica: true, digital: true, ia: true },
  { feature: 'Catálogo digital', basica: false, digital: true, ia: true },
  { feature: 'Pedidos o reservaciones', basica: false, digital: true, ia: true },
  { feature: 'Sección de promociones', basica: false, digital: true, ia: true },
  { feature: 'Generador de contenido', basica: false, digital: false, ia: true },
  { feature: 'Chatbot de preguntas frecuentes', basica: false, digital: false, ia: true },
  { feature: 'Panel de solicitudes', basica: false, digital: false, ia: true },
  { feature: 'Preparado para escalar', basica: false, digital: false, ia: true },
  { feature: 'Tiempo estimado', basica: '5–7 días', digital: '8–12 días', ia: '12–18 días' },
  { feature: 'Precio', basica: '$7,900', digital: '$14,900', ia: '$24,900' },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-blue-500 mx-auto" />
  if (value === false) return <Minus className="w-4 h-4 text-slate-300 mx-auto" />
  return <span className="text-slate-700 font-medium text-sm">{value}</span>
}

export default function ComparadorSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Comparador</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            ¿Cuál es el paquete correcto para ti?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Compara las diferencias entre los tres paquetes para tomar la mejor decisión.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-5 py-4 font-semibold text-slate-600 w-1/2">Función</th>
                <th className="px-4 py-4 text-center font-bold text-slate-700">Básica</th>
                <th className="px-4 py-4 text-center font-bold text-blue-600 bg-blue-50">Digital</th>
                <th className="px-4 py-4 text-center font-bold text-slate-700">IA Local</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const isPrice = row.feature === 'Precio'
                const isTime = row.feature === 'Tiempo estimado'
                return (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} ${isPrice ? 'border-t-2 border-slate-200 font-bold' : ''}`}
                  >
                    <td className={`px-5 py-3.5 text-slate-600 ${isPrice || isTime ? 'font-semibold text-slate-900' : ''}`}>
                      {row.feature}
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell value={row.basica} />
                    </td>
                    <td className="px-4 py-3.5 text-center bg-blue-50/50">
                      <Cell value={row.digital} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell value={row.ia} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          Precios por implementación inicial. Servicios externos pueden cotizarse aparte.
        </p>
      </div>
    </section>
  )
}
