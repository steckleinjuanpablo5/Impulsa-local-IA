'use client'

import { useState } from 'react'
import { CheckCircle, ArrowRight, Home } from 'lucide-react'
import Link from 'next/link'
import { getLastOrder, SimulatedOrder } from '@/lib/orders'
import { formatPrice } from '@/lib/packages'

const steps = [
  'Confirmamos la información del negocio.',
  'Recopilamos logotipo, servicios, horarios y datos de contacto.',
  'Preparamos el diseño inicial.',
  'Activamos el sitio y las funciones contratadas.',
  'Revisamos los detalles finales contigo.',
]

export default function SuccessPage() {
  const [order] = useState<SimulatedOrder | null>(() => getLastOrder())

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">
            Compra simulada registrada correctamente
          </h1>
          <p className="text-slate-500 text-sm text-center mb-6">
            Este flujo fue creado para fines demostrativos. No se realizó ningún cargo real.
          </p>

          {order && (
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">{order.packageName}</span>
                <span className="text-sm font-black text-slate-900">{formatPrice(order.price)}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Negocio: {order.businessName}</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">Simulado</span>
              </div>
            </div>
          )}

          <div>
            <p className="text-sm font-semibold text-slate-700 mb-3">Siguientes pasos:</p>
            <ol className="space-y-2">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
          </Link>
          <Link
            href="/#contacto"
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-semibold rounded-xl transition-colors text-sm"
          >
            Solicitar diagnóstico
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-xs text-slate-400 text-center mt-5">
          No se realizó ningún cobro. Esta es una simulación para fines demostrativos.
        </p>
      </div>
    </div>
  )
}
