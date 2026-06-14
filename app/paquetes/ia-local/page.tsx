import type { Metadata } from 'next'
import PackagePage from '@/components/PackagePage'

export const metadata: Metadata = {
  title: 'Paquete IA Local — $24,900 MXN | Impulsa Local IA',
  description: 'Generador de contenido, chatbot y panel de solicitudes para negocios locales que quieren diferenciarse y ahorrar tiempo.',
}

export default function IALocalPage() {
  return (
    <PackagePage
      pkg={{
        name: 'IA Local',
        price: '$24,900',
        slug: 'ia-local',
        delivery: '12 a 18 días hábiles',
        description: 'Para negocios que quieren una presencia digital más completa, con herramientas inteligentes para atender mejor y crear contenido más rápido.',
        problem: 'Atender clientes, crear publicaciones para redes y responder siempre las mismas preguntas consume horas al día. Sin herramientas que automaticen parte de ese trabajo, el dueño del negocio termina siendo el único que resuelve todo, lo que limita el crecimiento.',
        ideal: 'Negocios que quieren diferenciarse, ahorrar tiempo en comunicación con clientes y tener una estructura lista para seguir creciendo.',
        includes: [
          'Todo lo del Paquete Negocio Digital',
          'Generador de contenido para Facebook, Instagram y WhatsApp',
          'Chatbot de preguntas frecuentes con detección de intención',
          'Panel básico de solicitudes recibidas',
          'Flujo demo de pedidos o reservaciones',
          'Recomendaciones de contenido según temporada',
          'Interpretación básica de mensajes de clientes',
          'Preparación para futuras integraciones de IA real',
          'Estructura lista para escalar',
        ],
        deliverables: [
          'Sitio web completo con todas las funciones del plan Digital',
          'Generador de contenido funcionando con plantillas inteligentes',
          'Chatbot configurado con preguntas frecuentes del negocio',
          'Panel básico para ver solicitudes recibidas',
          'Documento de recomendaciones para seguir creciendo digitalmente',
        ],
        requirements: [
          'Todo lo del Paquete Negocio Digital',
          'Lista de preguntas frecuentes que recibe el negocio',
          'Horarios, ubicación, métodos de pago y políticas del negocio',
          'Tono de comunicación preferido (formal, amigable, cercano)',
          'Redes sociales donde publica el negocio (si las tiene)',
          'Tipo de contenido que más le interesa generar (promociones, menú, servicios)',
        ],
      }}
    />
  )
}
