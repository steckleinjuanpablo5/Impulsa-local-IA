import Link from 'next/link'
import { XCircle, ArrowLeft, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compra cancelada | Impulsa Local IA',
}

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
            <XCircle className="w-10 h-10 text-slate-400" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900 mb-3">La compra no fue completada</h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Puedes regresar a ver los paquetes o solicitar asesoría si quieres
            resolver dudas antes de continuar. No se realizó ningún cargo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/#paquetes"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver paquetes
          </Link>
          <Link
            href="/#contacto"
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold rounded-xl transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar asesoría
          </Link>
        </div>
      </div>
    </div>
  )
}
