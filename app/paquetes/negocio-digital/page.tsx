import type { Metadata } from 'next'
import PackagePage from '@/components/PackagePage'

export const metadata: Metadata = {
  title: 'Paquete Negocio Digital — $14,900 MXN | Impulsa Local IA',
  description: 'Catálogo digital, pedidos y reservaciones para restaurantes, barberías, consultorios y tiendas locales.',
}

export default function NegocioDigitalPage() {
  return (
    <PackagePage
      pkg={{
        name: 'Negocio Digital',
        price: '$14,900',
        slug: 'negocio-digital',
        delivery: '8 a 12 días hábiles',
        description: 'Para negocios que quieren mostrar mejor sus productos o servicios y recibir solicitudes de clientes de forma ordenada.',
        problem: 'Tener una página básica no es suficiente si los clientes no pueden ver tu catálogo, hacer un pedido o agendar una cita. Sin estas funciones, el negocio sigue dependiendo de llamadas, mensajes sueltos de WhatsApp y procesos manuales que consumen tiempo.',
        ideal: 'Restaurantes, barberías, consultorios, tiendas locales y servicios que necesitan mostrar catálogo, recibir pedidos o agendar clientes.',
        includes: [
          'Todo lo del Paquete Presencia Básica',
          'Catálogo digital de productos o servicios con precios',
          'Formulario de pedidos o reservaciones',
          'Sección de promociones activas',
          'Captura de solicitudes con datos de contacto del cliente',
          'Diseño responsive completo',
          'Información del negocio organizada por secciones',
        ],
        deliverables: [
          'Sitio web con catálogo funcional',
          'Formulario de pedidos o reservaciones activo',
          'Sección de promociones personalizable',
          'Los datos de solicitudes llegan al correo o panel del negocio',
          'Diseño adaptado a los colores, nombre y estilo de tu negocio',
        ],
        requirements: [
          'Todo lo del Paquete Básico',
          'Lista de productos o servicios con descripción y precio',
          'Fotos de productos o servicios (si las tienes; si no, las adaptamos)',
          'Información de promociones activas (si aplica)',
          'Preferencia: ¿pedidos, reservaciones o ambos?',
          'Correo donde recibir las solicitudes de clientes',
        ],
      }}
    />
  )
}
