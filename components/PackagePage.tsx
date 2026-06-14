'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Clock, ArrowRight, X, Zap, ChevronLeft } from 'lucide-react'

export interface PackageData {
  name: string
  price: string
  description: string
  problem: string
  includes: string[]
  ideal: string
  deliverables: string[]
  delivery: string
  requirements: string[]
  slug: string
}

export default function PackagePage({ pkg }: { pkg: PackageData }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">
            <ChevronLeft className="w-4 h-4" />
            Volver al sitio
          </Link>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900 text-sm">Impulsa<span className="text-blue-600"> Local IA</span></span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-8 md:p-12 mb-8 text-white">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Paquete</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{pkg.name}</h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-6">{pkg.description}</p>
          <div className="flex items-end gap-2">
            <span className="text-5xl md:text-6xl font-black text-white">{pkg.price}</span>
            <span className="text-blue-300 text-lg mb-2">MXN — pago único</span>
          </div>
          <div className="flex items-center gap-2 mt-3 text-slate-400 text-sm">
            <Clock className="w-4 h-4" />
            Entrega estimada: {pkg.delivery}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            {/* Problem */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">¿Qué problema resuelve?</h2>
              <p className="text-slate-500 leading-relaxed">{pkg.problem}</p>
            </div>

            {/* Includes */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Qué incluye</h2>
              <ul className="space-y-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Qué recibe el cliente al final</h2>
              <ul className="space-y-2">
                {pkg.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-slate-600 text-sm">
                    <span className="text-blue-400 mt-0.5">→</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Qué necesitamos de ti para empezar</h2>
              <ul className="space-y-2">
                {pkg.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-slate-600 text-sm">
                    <span className="text-amber-400 mt-0.5">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-20">
              <div className="text-3xl font-black text-slate-900 mb-1">{pkg.price}</div>
              <div className="text-sm text-slate-400 mb-1">MXN — pago único por implementación</div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-5">
                <Clock className="w-3.5 h-3.5" />
                {pkg.delivery}
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 mb-3"
              >
                Comprar paquete
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`/?paquete=${pkg.slug}#contacto`}
                className="block w-full py-3 text-center border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-semibold rounded-xl transition-colors text-sm"
              >
                Solicitar asesoría
              </a>

              <div className="mt-4 p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-400 text-center">
                  Servicios externos (dominio, hosting, pasarela de pago) pueden cotizarse aparte.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Ideal para</p>
                <p className="text-sm text-slate-600">{pkg.ideal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">Simulación de compra</h3>
              <button onClick={() => setShowModal(false)} className="p-1.5 hover:bg-slate-100 rounded-lg">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
              <p className="text-blue-800 text-sm">
                Esta es una simulación de compra. La pasarela de pago se integrará en una siguiente etapa.
              </p>
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Por ahora puedes solicitar asesoría y te contactaremos para preparar la implementación de tu paquete.
            </p>
            <div className="flex gap-3">
              <a
                href={`/?paquete=${pkg.slug}#contacto`}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center text-sm transition-colors"
              >
                Solicitar asesoría
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-3 border border-slate-200 text-slate-600 rounded-xl text-sm hover:bg-slate-50 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
