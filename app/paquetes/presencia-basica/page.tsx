import type { Metadata } from 'next'
import PackagePage from '@/components/PackagePage'

export const metadata: Metadata = {
  title: 'Paquete Presencia Básica — $7,900 MXN | Impulsa Local IA',
  description: 'Página web profesional para negocios locales que todavía no tienen presencia en internet. Diseño responsive, SEO básico y botón de WhatsApp.',
}

export default function PresenciaBasicaPage() {
  return (
    <PackagePage
      pkg={{
        name: 'Presencia Básica',
        price: '$7,900',
        slug: 'presencia-basica',
        delivery: '5 a 7 días hábiles',
        description: 'Para negocios que necesitan verse profesionales en internet y que sus clientes encuentren información clara en un solo lugar.',
        problem: 'Muchos negocios locales dependen de WhatsApp o recomendaciones de boca en boca. Sin una página web, los clientes no encuentran información básica como horarios, precios o ubicación, y el negocio pierde credibilidad ante clientes que buscan en internet.',
        ideal: 'Negocios pequeños que todavía no tienen página web o que tienen una desactualizada.',
        includes: [
          'Página web informativa de una sección',
          'Diseño responsive (celular, tablet y computadora)',
          'Información del negocio: nombre, descripción, servicios principales',
          'Horarios de atención',
          'Ubicación con enlace a Google Maps',
          'Botón de contacto directo por WhatsApp',
          'Sección de servicios o productos principales',
          'SEO básico (título, descripción, metadatos)',
          'Formulario de contacto sencillo',
        ],
        deliverables: [
          'Sitio web publicado y listo para compartir',
          'URL del sitio para usar en redes sociales y tarjetas',
          'Diseño adaptado a los colores y nombre de tu negocio',
          'Acceso para actualizar datos básicos en el futuro',
        ],
        requirements: [
          'Nombre del negocio y descripción breve',
          'Horarios de atención',
          'Dirección o zona donde se ubica',
          'Número de WhatsApp de contacto',
          'Lista de servicios o productos principales con precios (si los tienes)',
          'Logo o nombre en texto (el diseño lo creamos nosotros)',
          'Color o estilo preferido (opcional)',
        ],
      }}
    />
  )
}
