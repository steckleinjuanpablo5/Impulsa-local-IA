import ContactForm from './ContactForm'
import { MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info side */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Contacto</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              ¿Listo para llevar tu negocio a internet?
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Cuéntanos sobre tu negocio y preparamos una demo personalizada para que veas
              exactamente cómo quedaría tu presencia digital.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Respuesta rápida</p>
                  <p className="text-slate-500 text-sm">Te contactamos en menos de 24 horas hábiles.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Demo personalizada</p>
                  <p className="text-slate-500 text-sm">Preparamos la demo con los datos de tu negocio real.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Sin compromiso</p>
                  <p className="text-slate-500 text-sm">La demo es gratuita y sin compromisos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
