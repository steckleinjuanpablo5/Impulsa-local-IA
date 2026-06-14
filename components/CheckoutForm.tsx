'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Send, AlertCircle } from 'lucide-react'
import { saveOrder } from '@/lib/orders'

interface Props {
  packageId: string
  packageName: string
  price: number
}

export default function CheckoutForm({ packageId, packageName, price }: Props) {
  const router = useRouter()
  const [form, setForm] = useState({ nombre: '', negocio: '', whatsapp: '', correo: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'Obligatorio'
    if (!form.negocio.trim()) e.negocio = 'Obligatorio'
    if (!form.whatsapp.trim()) e.whatsapp = 'Obligatorio'
    else if (!/^\d{10,15}$/.test(form.whatsapp.replace(/\s/g, ''))) e.whatsapp = 'Número no válido'
    if (form.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = 'Correo no válido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId,
          customerName: form.nombre,
          businessName: form.negocio,
          whatsapp: form.whatsapp,
          email: form.correo,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Error al procesar la solicitud')
        setStatus('error')
        return
      }

      if (data.mode === 'stripe' && data.url) {
        window.location.href = data.url
        return
      }

      // Simulated mode
      await saveOrder({
        packageId,
        packageName,
        price,
        currency: 'mxn',
        customerName: form.nombre,
        businessName: form.negocio,
        whatsapp: form.whatsapp,
        email: form.correo,
      })

      router.push('/checkout/success')
    } catch {
      setErrorMsg('Error de conexión. Intenta de nuevo.')
      setStatus('error')
    }
  }

  const fields = [
    { name: 'nombre', label: 'Nombre completo', placeholder: 'Tu nombre', type: 'text', required: true },
    { name: 'negocio', label: 'Nombre del negocio', placeholder: 'Ej: Taquería El Buen Sazón', type: 'text', required: true },
    { name: 'whatsapp', label: 'WhatsApp', placeholder: '10 dígitos', type: 'tel', required: true },
    { name: 'correo', label: 'Correo electrónico', placeholder: 'tucorreo@ejemplo.com', type: 'email', required: false },
  ]

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {fields.map(({ name, label, placeholder, type, required }) => (
        <div key={name}>
          <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            id={name} name={name} type={type}
            value={form[name as keyof typeof form]}
            onChange={handleChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors[name] ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
          />
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
        </div>
      ))}

      {(status === 'error' || errorMsg) && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-100 rounded-xl">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-600 text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="pt-2 space-y-3">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
        >
          {status === 'loading' ? (
            <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Procesando...</>
          ) : (
            <><Send className="w-4 h-4" />Continuar con compra simulada</>
          )}
        </button>

        <a
          href={`/paquetes/${packageId}#contacto`}
          className="block w-full py-3 text-center border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold rounded-xl transition-colors text-sm"
        >
          Solicitar asesoría antes de comprar
        </a>
      </div>

      <p className="text-xs text-slate-400 text-center pt-1">
        Modo simulación — no se realizan cargos reales ni se procesa información de pago.
      </p>
    </form>
  )
}
