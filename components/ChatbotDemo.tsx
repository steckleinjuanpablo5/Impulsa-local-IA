'use client'

import { useState } from 'react'
import { MessageCircle, Bot, User } from 'lucide-react'

interface Message {
  role: 'user' | 'bot'
  text: string
}

const questions = [
  { label: '¿Cuál es el horario?', answer: 'Estamos abiertos de lunes a sábado de 9:00 a.m. a 8:00 p.m. y los domingos de 10:00 a.m. a 4:00 p.m. ¡Con gusto te atendemos!' },
  { label: '¿Dónde están ubicados?', answer: 'Nos encuentras en la calle principal de la colonia Centro. También puedes ver nuestra ubicación exacta en el mapa de nuestra página.' },
  { label: '¿Puedo hacer un pedido?', answer: 'Claro que sí. Puedes hacer tu pedido aquí mismo en el formulario de pedidos o escribirnos y te atendemos al momento.' },
  { label: '¿Cómo puedo reservar?', answer: 'Para reservar, llena el formulario de reservación con tu nombre, fecha y número de personas. Te confirmamos por WhatsApp en menos de una hora.' },
  { label: '¿Qué servicios ofrecen?', answer: 'Ofrecemos una variedad de servicios pensados para ti. Puedes ver el catálogo completo más arriba en esta misma página.' },
]

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente automático de este negocio. Elige una pregunta y te respondo al instante.' },
  ])

  const ask = (question: string, answer: string) => {
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: question },
      { role: 'bot', text: answer },
    ])
  }

  const reset = () => {
    setMessages([{ role: 'bot', text: '¡Hola! Soy el asistente automático de este negocio. Elige una pregunta y te respondo al instante.' }])
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-4 flex items-center gap-3">
        <MessageCircle className="w-5 h-5 text-white" />
        <div>
          <h3 className="text-white font-bold">Chatbot automático</h3>
          <p className="text-cyan-200 text-xs">Demo — respuestas predefinidas</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs text-cyan-100">En línea</span>
        </div>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'bot' && (
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            <div
              className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-sm'
                  : 'bg-white text-slate-700 border border-slate-100 shadow-sm rounded-tl-sm'
              }`}
            >
              {msg.text}
            </div>
            {msg.role === 'user' && (
              <div className="w-7 h-7 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <User className="w-4 h-4 text-slate-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick questions */}
      <div className="px-4 py-3 border-t border-slate-100 space-y-2">
        <p className="text-xs text-slate-400 font-medium">Preguntas frecuentes:</p>
        <div className="flex flex-wrap gap-2">
          {questions.map(({ label, answer }) => (
            <button
              key={label}
              onClick={() => ask(label, answer)}
              className="px-3 py-1.5 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full border border-blue-100 transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={reset}
            className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full border border-slate-200 transition-colors"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  )
}
