export interface Package {
  id: string
  name: string
  price: number
  currency: string
  description: string
  delivery: string
  includes: string[]
}

export const PACKAGES: Record<string, Package> = {
  'presencia-basica': {
    id: 'presencia-basica',
    name: 'Presencia Básica',
    price: 7900,
    currency: 'mxn',
    description: 'Para negocios que necesitan verse profesionales en internet y que sus clientes encuentren información clara.',
    delivery: '5 a 7 días hábiles',
    includes: [
      'Página web informativa',
      'Diseño responsive',
      'Horarios y ubicación',
      'Botón de WhatsApp',
      'Sección de servicios principales',
      'SEO básico',
      'Formulario de contacto sencillo',
    ],
  },
  'negocio-digital': {
    id: 'negocio-digital',
    name: 'Negocio Digital',
    price: 14900,
    currency: 'mxn',
    description: 'Para negocios que quieren mostrar sus productos o servicios y recibir solicitudes de clientes de forma ordenada.',
    delivery: '8 a 12 días hábiles',
    includes: [
      'Todo lo del Paquete Básico',
      'Catálogo digital de productos o servicios',
      'Formulario de pedidos o reservaciones',
      'Sección de promociones activas',
      'Captura de solicitudes de clientes',
      'Información del negocio organizada',
    ],
  },
  'ia-local': {
    id: 'ia-local',
    name: 'IA Local',
    price: 24900,
    currency: 'mxn',
    description: 'Para negocios que quieren herramientas inteligentes para atender mejor y crear contenido más rápido.',
    delivery: '12 a 18 días hábiles',
    includes: [
      'Todo lo del Paquete Digital',
      'Generador de contenido para redes sociales',
      'Chatbot de preguntas frecuentes',
      'Panel básico de solicitudes',
      'Recomendaciones de contenido',
      'Preparado para futuras integraciones de IA',
      'Estructura lista para escalar',
    ],
  },
}

export function getPackage(id: string): Package | null {
  return PACKAGES[id] ?? null
}

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString('es-MX')} MXN`
}
