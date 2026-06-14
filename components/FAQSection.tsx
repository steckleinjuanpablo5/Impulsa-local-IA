'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿El precio es mensual?',
    a: 'No. Los paquetes son de pago único por implementación inicial. Servicios externos como dominio, hosting, pasarela de pago o herramientas de IA real pueden cotizarse aparte si el negocio los requiere.',
  },
  {
    q: '¿El pago en línea ya funciona?',
    a: 'En esta versión el flujo de compra es una simulación. La integración real con Stripe o Mercado Pago puede activarse en una siguiente etapa cuando el proyecto salga de modo demo.',
  },
  {
    q: '¿Qué pasa después de comprar?',
    a: 'Se recopila la información del negocio —logotipo, servicios, horarios y datos de contacto— y se inicia el proceso de implementación del paquete seleccionado.',
  },
  {
    q: '¿Puedo pedir factura?',
    a: 'Sí, puede considerarse como parte del proceso comercial real. Para el demo académico solo se muestra el flujo de compra simulado.',
  },
  {
    q: '¿El precio incluye dominio y hosting?',
    a: 'Dominio, hosting, correo empresarial, WhatsApp API, pasarela de pago o herramientas externas pueden cotizarse aparte según las necesidades de cada negocio.',
  },
  {
    q: '¿Puedo agregar una pasarela de pago real después?',
    a: 'Sí. La estructura está preparada para conectar Stripe o Mercado Pago en producción. Solo se requieren las claves de producción y un proceso de activación comercial.',
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
