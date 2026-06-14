'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿El precio es mensual?',
    a: 'No. Los precios mostrados son por implementación inicial, un solo pago. Servicios externos como dominio, hosting, pasarela de pago o herramientas de IA real pueden cotizarse aparte si el negocio los requiere.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Solo necesitas el nombre de tu negocio, descripción, servicios o productos, horarios, número de WhatsApp y los colores o estilo que prefieres. Nosotros nos encargamos del diseño y la implementación.',
  },
  {
    q: '¿Puedo agregar más productos o servicios después?',
    a: 'Sí. El catálogo y el contenido pueden actualizarse. Dependiendo del tipo de cambio, puede incluirse en el mantenimiento o cotizarse por separado.',
  },
  {
    q: '¿Incluye dominio y hosting?',
    a: 'El sitio puede publicarse inicialmente en Vercel sin costo adicional. Si el negocio necesita un dominio propio (como tunegocio.com) o un hosting específico, se cotiza aparte.',
  },
  {
    q: '¿Puedo conectar pagos en línea después?',
    a: 'Sí. La estructura está preparada para integrar pasarelas de pago como Stripe, Mercado Pago o PayPal en una etapa posterior. En la versión actual los botones de compra son demostrativos.',
  },
  {
    q: '¿El chatbot usa inteligencia artificial real?',
    a: 'En esta versión es una simulación inteligente basada en detección de intención y palabras clave. En una siguiente etapa puede conectarse a una IA real como Claude o GPT.',
  },
  {
    q: '¿Puedo usarlo para mi restaurante, barbería o consultorio?',
    a: 'Sí. La solución está pensada específicamente para negocios locales de todo tipo: restaurantes, barberías, consultorios, tiendas, servicios independientes, emprendimientos y más.',
  },
  {
    q: '¿Cuánto tarda la entrega?',
    a: 'Depende del paquete: Presencia Básica de 5 a 7 días hábiles, Negocio Digital de 8 a 12 días hábiles, e IA Local de 12 a 18 días hábiles. Los tiempos aplican desde que el cliente entrega toda la información.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Preguntas frecuentes</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-slate-800 pr-4 text-sm">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
