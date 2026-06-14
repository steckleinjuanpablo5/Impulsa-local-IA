import { notFound } from 'next/navigation'
import { getPackage, formatPrice } from '@/lib/packages'
import type { Metadata } from 'next'
import CheckoutForm from '@/components/CheckoutForm'
import { Zap, Clock, Shield, Check } from 'lucide-react'
import Link from 'next/link'

interface Props {
  params: Promise<{ paquete: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { paquete } = await params
  const pkg = getPackage(paquete)
  if (!pkg) return {}
  return {
    title: `Checkout: ${pkg.name} — ${formatPrice(pkg.price)} | Impulsa Local IA`,
  }
}

export default async function CheckoutPage({ params }: Props) {
  const { paquete } = await params
  const pkg = getPackage(paquete)
  if (!pkg) notFound()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-slate-900 text-sm">Impulsa<span className="text-blue-600"> Local IA</span></span>
          </Link>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-amber-700 text-xs font-medium">Modo simulación</span>
          </div>
        </div>
      </div>

      {/* Simulation banner */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-center">
        <p className="text-amber-800 text-xs font-medium">
          Modo simulación: este flujo no realiza cargos reales. Ningún dato de pago es procesado.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Order summary */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Resumen de compra</p>
              <h2 className="text-xl font-extrabold text-slate-900 mb-1">{pkg.name}</h2>
              <p className="text-slate-500 text-sm mb-4">{pkg.description}</p>

              <div className="text-3xl font-black text-slate-900 mb-1">{formatPrice(pkg.price)}</div>
              <p className="text-slate-400 text-xs mb-4">Pago único por implementación</p>

              <div className="flex items-center gap-2 text-slate-400 text-xs mb-5">
                <Clock className="w-3.5 h-3.5" />
                Entrega: {pkg.delivery}
              </div>

              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Incluye</p>
              <ul className="space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-400">
                  Dominio, hosting y servicios externos se cotizan aparte si el negocio los requiere.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h1 className="text-xl font-bold text-slate-900 mb-1">Completa tu solicitud</h1>
              <p className="text-slate-500 text-sm mb-6">
                Llena tus datos para registrar el paquete. Te contactaremos para iniciar la implementación.
              </p>
              <CheckoutForm packageId={pkg.id} packageName={pkg.name} price={pkg.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
