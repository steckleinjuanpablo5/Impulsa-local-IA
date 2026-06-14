'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { saveLead, Lead } from '@/lib/supabase'

const tiposNegocio = [
  'Restaurante o fonda',
  'Barbería o peluquería',
  'Consultorio médico o dental',
  'Tienda local o abarrotes',
  'Emprendimiento personal',
  'Servicio independiente',
  'Negocio familiar',
  'Otro',
]

const paqueteLabels: Record<string, string> = {
  'presencia-basica': 'Presencia Básica — $7,900 MXN',
  'negocio-digital': 'Negocio Digital — $14,900 MXN',
  'ia-local': 'IA Local — $24,900 MXN',
}

export default function ContactForm() {
  const [paqueteInteres, setPaqueteInteres] = useState(() => {
    if (typeof window === 'undefined') return ''
    const p = new URLSearchParams(window.location.search).get('paquete')
    return p && paqueteLabels[p] ? paqueteLabels[p] : ''
  })
  const [form, setForm] = useState<Lead & { correo: string; mensaje: string }>({
    nombre: '',
    negocio: '',
    tipo_negocio: '',
    whatsapp: '',
    correo: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')


  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es obligatorio'
    if (!form.negocio.trim()) e.negocio = 'El nombre del negocio es obligatorio'
    if (!form.whatsapp.trim()) e.whatsapp = 'El WhatsApp es obligatorio'
    else if (!/^\d{10,15}$/.test(form.whatsapp.replace(/\s/g, ''))) e.whatsapp = 'Ingresa un número válido (10-15 dígitos)'
    if (form.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = 'Correo no válido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    const mensajeFinal = paqueteInteres
      ? `Paquete de interés: ${paqueteInteres}${form.mensaje ? '\n\n' + form.mensaje : ''}`
      : form.mensaje
    const result = await saveLead({ ...form, mensaje: mensajeFinal })
    setStatus(result.success ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">¡Solicitud recibida!</h3>
        <p className="text-slate-500 max-w-md">
          Gracias, recibimos tu solicitud. Te contactaremos para preparar una demo de tu negocio.
        </p>
        <button onClick={() => setStatus('idle')} className="mt-6 px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {paqueteInteres && (
        <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
          <p className="text-blue-700 text-sm font-medium">
            Paquete de interés: <span className="font-bold">{paqueteInteres}</span>
          </p>
          <button type="button" onClick={() => setPaqueteInteres('')} className="ml-auto text-blue-400 hover:text-blue-600 text-xs">
            Quitar
          </button>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            id="nombre" name="nombre" type="text" value={form.nombre} onChange={handleChange}
            placeholder="Tu nombre"
            className={`w-full px-3 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.nombre ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
          />
          {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
        </div>
        <div>
          <label htmlFor="negocio" className="block text-sm font-medium text-slate-700 mb-1">
            Nombre del negocio <span className="text-red-500">*</span>
          </label>
          <input
            id="negocio" name="negocio" type="text" value={form.negocio} onChange={handleChange}
            placeholder="Ej: Taquería El Buen Sazón"
            className={`w-full px-3 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.negocio ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
          />
          {errors.negocio && <p className="text-red-500 text-xs mt-1">{errors.negocio}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="tipo_negocio" className="block text-sm font-medium text-slate-700 mb-1">Tipo de negocio</label>
          <select id="tipo_negocio" name="tipo_negocio" value={form.tipo_negocio} onChange={handleChange}
            className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option value="">Selecciona una opción</option>
            {tiposNegocio.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-1">
            WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange}
            placeholder="10 dígitos sin espacios"
            className={`w-full px-3 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.whatsapp ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
          />
          {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="correo" className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
        <input
          id="correo" name="correo" type="email" value={form.correo} onChange={handleChange}
          placeholder="tucorreo@ejemplo.com"
          className={`w-full px-3 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.correo ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
        />
        {errors.correo && <p className="text-red-500 text-xs mt-1">{errors.correo}</p>}
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-1">¿Qué necesita tu negocio?</label>
        <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} rows={4}
          placeholder="Cuéntanos un poco sobre tu negocio y qué te gustaría tener..."
          className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-red-600 text-sm">Ocurrió un error al enviar. Intenta de nuevo.</p>
        </div>
      )}

      <button type="submit" disabled={status === 'loading'}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
        {status === 'loading' ? (
          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Enviando...</>
        ) : (
          <><Send className="w-4 h-4" />Solicitar demo</>
        )}
      </button>
    </form>
  )
}
