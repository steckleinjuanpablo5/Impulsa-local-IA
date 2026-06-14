export type Intent =
  | 'horario'
  | 'ubicacion'
  | 'precio'
  | 'promocion'
  | 'pedido'
  | 'reservacion'
  | 'envio'
  | 'pago'
  | 'catalogo'
  | 'servicios'
  | 'disponibilidad'
  | 'factura'
  | 'garantia'
  | 'devolucion'
  | 'tiempo_entrega'
  | 'menu'
  | 'recomendacion'
  | 'humano'
  | 'queja'
  | 'desconocido'

interface IntentRule {
  intent: Intent
  keywords: string[]
}

const rules: IntentRule[] = [
  { intent: 'horario', keywords: ['horario', 'hora', 'abren', 'cierran', 'abierto', 'cerrado', 'atienden', 'cuando', 'horarios'] },
  { intent: 'ubicacion', keywords: ['ubicacion', 'ubicación', 'donde', 'dónde', 'dirección', 'direccion', 'mapa', 'llegar', 'estan', 'están', 'colonia', 'calle', 'zona'] },
  { intent: 'precio', keywords: ['precio', 'costo', 'cuanto', 'cuánto', 'vale', 'cobran', 'tarifa', 'presupuesto', 'cotizacion', 'cotización'] },
  { intent: 'promocion', keywords: ['promo', 'promocion', 'promoción', 'descuento', 'oferta', 'especial', 'padre', 'madre', 'navidad', 'temporada', 'liquidacion', 'rebaja'] },
  { intent: 'pedido', keywords: ['pedido', 'pedir', 'ordenar', 'orden', 'comprar', 'compra', 'quiero', 'necesito', 'solicitar'] },
  { intent: 'reservacion', keywords: ['reservar', 'reservacion', 'reservación', 'cita', 'agendar', 'apartar', 'mesa', 'turno'] },
  { intent: 'envio', keywords: ['envio', 'envío', 'entrega', 'domicilio', 'reparto', 'mandan', 'llegan', 'zona', 'reparten'] },
  { intent: 'pago', keywords: ['pago', 'pagar', 'tarjeta', 'efectivo', 'transferencia', 'spei', 'oxxo', 'aceptan', 'metodos', 'método', 'deposito', 'depósito'] },
  { intent: 'catalogo', keywords: ['catalogo', 'catálogo', 'productos', 'lista', 'ver', 'muestras', 'portafolio'] },
  { intent: 'servicios', keywords: ['servicio', 'servicios', 'que hacen', 'qué hacen', 'ofrecen', 'tienen', 'hacen'] },
  { intent: 'disponibilidad', keywords: ['disponible', 'disponibilidad', 'hay', 'stock', 'existencia', 'tienen disponible'] },
  { intent: 'factura', keywords: ['factura', 'facturar', 'facturacion', 'facturación', 'rfc', 'fiscal', 'cfdi'] },
  { intent: 'garantia', keywords: ['garantia', 'garantía', 'garantizan', 'calidad', 'seguro'] },
  { intent: 'devolucion', keywords: ['devolucion', 'devolución', 'cambio', 'devolver', 'regresar', 'reembolso'] },
  { intent: 'tiempo_entrega', keywords: ['cuanto tarda', 'cuánto tarda', 'tiempo', 'dias', 'días', 'cuando llega', 'cuándo llega'] },
  { intent: 'menu', keywords: ['menu', 'menú', 'platillo', 'platillos', 'comida', 'carta', 'opciones', 'comer'] },
  { intent: 'recomendacion', keywords: ['recomendas', 'recomiendas', 'recomienda', 'mejor', 'popular', 'favorito', 'sugieres'] },
  { intent: 'humano', keywords: ['persona', 'humano', 'asesor', 'hablar', 'comunicar', 'whatsapp', 'llamar', 'alguien'] },
  { intent: 'queja', keywords: ['queja', 'problema', 'mal', 'falla', 'reclamo', 'error', 'inconveniente', 'molestia'] },
]

export function detectIntent(message: string): Intent {
  const lower = message.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  for (const rule of rules) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.intent
    }
  }
  return 'desconocido'
}

const intentLabels: Record<Intent, string> = {
  horario: 'Horario de atención',
  ubicacion: 'Ubicación',
  precio: 'Precios',
  promocion: 'Promociones',
  pedido: 'Pedido',
  reservacion: 'Reservación',
  envio: 'Envíos',
  pago: 'Métodos de pago',
  catalogo: 'Catálogo',
  servicios: 'Servicios',
  disponibilidad: 'Disponibilidad',
  factura: 'Facturación',
  garantia: 'Garantías',
  devolucion: 'Cambios y devoluciones',
  tiempo_entrega: 'Tiempo de entrega',
  menu: 'Menú',
  recomendacion: 'Recomendación',
  humano: 'Contacto con persona',
  queja: 'Queja o problema',
  desconocido: 'Consulta general',
}

export function getIntentLabel(intent: Intent): string {
  return intentLabels[intent]
}

const responses: Record<Intent, string> = {
  horario: 'Nuestro horario de atención es de lunes a sábado de 9:00 a.m. a 8:00 p.m., y los domingos de 10:00 a.m. a 4:00 p.m. Esta información se personaliza según cada negocio.',
  ubicacion: 'Estamos en la zona principal del negocio. En una versión real aquí aparecería la dirección completa, colonia y un botón para abrir Google Maps directamente.',
  precio: 'Los precios varían según el producto o servicio. Puedes revisar el catálogo o decirme qué te interesa y con gusto te oriento mejor.',
  promocion: 'Sí, contamos con promociones activas. Por ejemplo, descuentos de temporada, combos especiales o fechas como Día del Padre. ¿Quieres que te comparta los detalles?',
  pedido: 'Claro. Puedes iniciar tu pedido desde el catálogo digital. En una versión real, el negocio recibirá tu solicitud con tus datos de contacto al instante.',
  reservacion: 'Con gusto. Para reservar solo necesitamos tu nombre, fecha, hora y número de contacto. ¿Cuándo te gustaría agendar?',
  envio: 'Sí, manejamos envíos a domicilio. El costo y las zonas de entrega se configuran según las reglas de cada negocio. ¿Me puedes indicar tu colonia?',
  pago: 'Aceptamos efectivo, transferencia bancaria y tarjeta. Los métodos de pago exactos pueden configurarse según las necesidades de cada negocio.',
  catalogo: 'Aquí puedes ver el catálogo más arriba en esta misma página. En una versión real, estaría actualizado con precios, fotos y disponibilidad en tiempo real.',
  servicios: 'Ofrecemos varios servicios pensados para nuestros clientes. Puedes ver el catálogo completo arriba o decirme qué necesitas y te oriento.',
  disponibilidad: 'Para confirmar disponibilidad en tiempo real, el sistema puede conectarse al inventario o agenda del negocio. Por ahora te puedo decir que contamos con disponibilidad para atenderte.',
  factura: 'Sí, podemos emitir factura. Para eso necesitaríamos tu RFC y datos fiscales. En una versión real este proceso quedaría integrado al sistema.',
  garantia: 'Nuestros servicios y productos están respaldados por la satisfacción del cliente. Si tienes alguna duda al respecto, con gusto te contactamos para aclararlo.',
  devolucion: 'Contamos con política de cambios y devoluciones. Si tienes un problema con tu pedido o servicio, dinos y lo resolvemos lo antes posible.',
  tiempo_entrega: 'El tiempo de entrega depende del tipo de pedido o servicio. En promedio puede ser de 1 a 3 días hábiles para pedidos locales.',
  menu: 'Nuestro menú cambia según temporada. Puedes verlo completo en el catálogo digital más arriba. ¿Hay algún platillo o servicio en especial que te interese?',
  recomendacion: 'Una de nuestras opciones más pedidas últimamente ha sido bien recibida por los clientes. ¿Quieres que te cuente más sobre ella?',
  humano: 'Claro, puedo ayudarte a contactar a alguien del negocio. En una versión real, aquí se abriría WhatsApp o se enviaría una notificación al panel del dueño.',
  queja: 'Lamentamos el inconveniente. Por favor comparte los detalles de tu problema y lo atendemos con prioridad. Tu experiencia es importante para nosotros.',
  desconocido: 'Puedo ayudarte con horarios, ubicación, precios, promociones, pedidos, reservaciones, envíos o formas de pago. ¿Sobre qué te gustaría saber?',
}

export function getBotResponse(intent: Intent): string {
  return responses[intent]
}
