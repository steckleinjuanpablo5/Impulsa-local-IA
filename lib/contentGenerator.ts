const templates: Record<string, { fb: string; ig: string; wa: string }[]> = {
  default: [
    {
      fb: 'Tenemos algo especial para ti en {negocio}. ¡Visítanos y descubre todo lo que tenemos preparado! Calidad, servicio y atención personalizada te esperan.',
      ig: '¿Listo para vivir una experiencia diferente? En {negocio} lo hacemos posible. ¡Ven y compruébalo tú mismo!',
      wa: 'Hola, te compartimos una novedad de {negocio}. Escríbenos y con gusto te damos más información.',
    },
  ],
  promocion: [
    {
      fb: '¡Gran promoción en {negocio}! No dejes pasar esta oportunidad única. Oferta por tiempo limitado, ¡aprovéchala hoy mismo y visítanos!',
      ig: '¡Oferta especial! En {negocio} tenemos algo increíble para ti. Descuentos exclusivos por tiempo limitado. ¡No te lo pierdas!',
      wa: 'Hola, tenemos una promoción especial en {negocio} por tiempo limitado. Escríbenos para conocer todos los detalles.',
    },
  ],
  padre: [
    {
      fb: 'Este Día del Padre consiente a papá con algo especial. En {negocio} tenemos la opción perfecta para celebrarlo con amor y calidad. ¡Visítanos!',
      ig: 'Papá merece lo mejor. Celebra el Día del Padre en {negocio} y sorpréndelo con nuestra promoción especial por tiempo limitado.',
      wa: 'Hola, este Día del Padre tenemos una promoción especial en {negocio} para ti. Escríbenos y te compartimos todos los detalles.',
    },
  ],
  madre: [
    {
      fb: 'Este Día de la Madre demuéstrale cuánto la quieres con algo especial de {negocio}. Porque ella lo merece todo. ¡Celebra con nosotros!',
      ig: 'Mamá merece lo mejor del mundo. En {negocio} tenemos algo muy especial para celebrarla este Día de la Madre.',
      wa: 'Hola, en {negocio} tenemos una promoción especial para el Día de la Madre. Escríbenos para más información.',
    },
  ],
  descuento: [
    {
      fb: '¡Descuento especial en {negocio}! Ahorra en tus productos y servicios favoritos. Oferta válida por tiempo limitado, ¡no la dejes ir!',
      ig: 'Ahorra más en {negocio}. Descuentos especiales que no querrás perderte. ¡Aprovecha hoy mismo!',
      wa: 'Hola, en {negocio} tenemos descuentos especiales disponibles ahora. Contáctanos para más detalles.',
    },
  ],
  menu: [
    {
      fb: '¿Ya conoces nuestro menú en {negocio}? Platillos preparados con ingredientes frescos y mucho sabor. ¡Ven y disfruta una experiencia deliciosa!',
      ig: 'Sabores que conquistan. En {negocio} cada platillo es una experiencia única. ¡Reserva tu lugar hoy!',
      wa: 'Hola, en {negocio} tenemos opciones deliciosas para ti hoy. Escríbenos para ver el menú completo.',
    },
  ],
  nuevo: [
    {
      fb: '¡Novedad en {negocio}! Acabamos de agregar algo que estabas esperando. Ven y sé de los primeros en disfrutarlo.',
      ig: 'Algo nuevo llegó a {negocio}. ¡Descúbrelo antes que nadie y vívelo en persona!',
      wa: 'Hola, tenemos una novedad en {negocio} que te va a encantar. Escríbenos para saber más.',
    },
  ],
}

function detectKeywords(idea: string): string {
  const lower = idea.toLowerCase()
  if (lower.includes('padre') || lower.includes('papá') || lower.includes('papa')) return 'padre'
  if (lower.includes('madre') || lower.includes('mamá') || lower.includes('mama')) return 'madre'
  if (lower.includes('promo') || lower.includes('oferta') || lower.includes('especial')) return 'promocion'
  if (lower.includes('descuento') || lower.includes('rebaja')) return 'descuento'
  if (lower.includes('menú') || lower.includes('menu') || lower.includes('platillo') || lower.includes('comida')) return 'menu'
  if (lower.includes('nuevo') || lower.includes('nueva') || lower.includes('novedad') || lower.includes('lanzamiento')) return 'nuevo'
  return 'default'
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export interface GeneratedContent {
  facebook: string
  instagram: string
  whatsapp: string
}

export function generateContent(idea: string, negocio: string = 'nuestro negocio'): GeneratedContent {
  const key = detectKeywords(idea)
  const options = templates[key] || templates.default
  const template = options[Math.floor(Math.random() * options.length)]

  const replace = (text: string) => text.replace(/{negocio}/g, capitalize(negocio))

  return {
    facebook: replace(template.fb),
    instagram: replace(template.ig),
    whatsapp: replace(template.wa),
  }
}
