import FeatureCard from './FeatureCard'
import {
  Globe,
  BookOpen,
  CalendarCheck,
  ShoppingBag,
  Sparkles,
  MessageCircle,
  LayoutDashboard,
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Página web inteligente',
    description:
      'Una página profesional que muestra tu negocio, servicios, horarios, ubicación y formas de contacto. Diseñada para verse perfecta en celular y computadora.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: BookOpen,
    title: 'Catálogo digital',
    description:
      'Muestra todos tus productos o servicios con precios, fotos y descripción. Tus clientes pueden verlo desde su celular sin descargar nada.',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    icon: CalendarCheck,
    title: 'Reservaciones',
    description:
      'Permite a tus clientes agendar una cita, mesa o servicio directamente desde tu página web, sin necesidad de llamar.',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: ShoppingBag,
    title: 'Pedidos',
    description:
      'Activa un formulario de pedidos para que tus clientes puedan ordenar productos o servicios en línea de forma sencilla y organizada.',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  {
    icon: Sparkles,
    title: 'Generador de contenido con IA',
    description:
      'Escribe una idea y el sistema genera publicaciones listas para Facebook, Instagram y WhatsApp. Ahorra tiempo y mantén activas tus redes.',
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-50',
  },
  {
    icon: MessageCircle,
    title: 'Chatbot para clientes',
    description:
      'Un asistente automático que responde preguntas frecuentes en tu página: horarios, precios, ubicación y más. Sin que tengas que estar pendiente.',
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
  },
  {
    icon: LayoutDashboard,
    title: 'Panel básico de solicitudes',
    description:
      'Visualiza de forma ordenada todos los pedidos, reservaciones y mensajes que lleguen a través de tu página web.',
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-50',
  },
]

export default function FeaturesSection() {
  return (
    <section id="funciones" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Funciones</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Todo lo que tu negocio necesita en un solo lugar
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Cada función está diseñada para ayudarte a atraer más clientes, ahorrar tiempo y
            verte profesional desde el primer día.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
