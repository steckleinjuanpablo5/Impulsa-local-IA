'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, User, Send } from 'lucide-react'
import { detectIntent, getBotResponse, getIntentLabel } from '@/lib/chatbotIntent'

interface Message {
  role: 'user' | 'bot'
  text: string
  intent?: string
}

const quickQuestions = [
  '¿Cuál es el horario?',
  '¿Dónde están ubicados?',
  '¿Puedo hacer un pedido?',
  '¿Cómo puedo reservar?',
  '¿Qué servicios ofrecen?',
  '¿Aceptan tarjeta?',
  '¿Hacen envíos?',
  '¿Tienen promociones?',
]

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente de este negocio. Puedes preguntarme sobre horarios, precios, pedidos, reservaciones o lo que necesites. También puedes usar las preguntas rápidas de abajo.' },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const intent = detectIntent(trimmed)
    const response = getBotResponse(intent)
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'bot', text: response, intent: getIntentLabel(intent) },
    ])
    setInput('')
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage(input)
  }

  const reset = () => {
    setMessages([{ role: 'bot', text: '¡Hola! Soy el asistente de este negocio. Puedes preguntarme sobre horarios, precios, pedidos, reservaciones o lo que necesites.' }])
    setInput('')
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-sm">Asistente del negocio</h3>
          <p className="text-cyan-200 text-xs">Demo con simulación de intención</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs text-cyan-100">En línea</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 h-64 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'bot' && (
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            <div className="flex flex-col gap-1 max-w-[78%]">
              <div
                className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-sm'
                    : 'bg-white text-slate-700 border border-slate-100 shadow-sm rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
              {msg.intent && (
                <span className="text-xs text-slate-400 pl-1">
                  Intención detectada: <span className="text-blue-500 font-medium">{msg.intent}</span>
                </span>
              )}
            </div>
            {msg.role === 'user' && (
              <div className="w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <User className="w-4 h-4 text-slate-600" />
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick questions */}
      <div className="px-4 pt-3 pb-1 border-t border-slate-100 bg-white">
        <p className="text-xs text-slate-400 mb-2">Preguntas rápidas:</p>
        <div className="flex flex-wrap gap-1.5">
          {quickQuestions.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="px-2.5 py-1 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full border border-blue-100 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-slate-100 bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Escribe tu pregunta..."
          className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim()}
          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white rounded-xl transition-colors"
          aria-label="Enviar mensaje"
        >
          <Send className="w-4 h-4" />
        </button>
        <button
          onClick={reset}
          className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl text-xs transition-colors"
        >
          Reiniciar
        </button>
      </div>
    </div>
  )
}
