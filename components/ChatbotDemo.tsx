'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, User, Send } from 'lucide-react'
import { detectIntent, getBotResponse, getIntentLabel } from '@/lib/chatbotIntent'

interface Message {
  role: 'user' | 'bot'
  text: string
  intent?: string
  source?: 'ai' | 'local'
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
    { role: 'bot', text: '¡Hola! Soy el asistente de este negocio, impulsado por IA. Puedes preguntarme sobre horarios, precios, pedidos, reservaciones o lo que necesites.', source: 'ai' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
    setLoading(true)

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })

      if (res.ok) {
        const data = await res.json()
        setMessages((prev) => [...prev, {
          role: 'bot',
          text: data.response,
          intent: data.intent,
          source: 'ai',
        }])
      } else {
        throw new Error('API error')
      }
    } catch {
      // Fallback to local intent detection
      const intent = detectIntent(trimmed)
      setMessages((prev) => [...prev, {
        role: 'bot',
        text: getBotResponse(intent),
        intent: getIntentLabel(intent),
        source: 'local',
      }])
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setMessages([{ role: 'bot', text: '¡Hola! Soy el asistente de este negocio, impulsado por IA. Puedes preguntarme sobre horarios, precios, pedidos o lo que necesites.', source: 'ai' }])
    setInput('')
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-sm">Asistente del negocio</h3>
          <p className="text-cyan-200 text-xs">Powered by Claude AI · Anthropic</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs text-cyan-100">En línea</span>
        </div>
      </div>

      <div className="flex-1 h-64 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'bot' && (
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            <div className="flex flex-col gap-1 max-w-[78%]">
              <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-sm'
                  : 'bg-white text-slate-700 border border-slate-100 shadow-sm rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
              {msg.intent && (
                <span className="text-xs text-slate-400 pl-1">
                  Intención: <span className="text-blue-500 font-medium">{msg.intent}</span>
                  {msg.source === 'ai' && <span className="ml-1 text-purple-400">· IA</span>}
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
        {loading && (
          <div className="flex gap-2 justify-start">
            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="px-4 pt-3 pb-1 border-t border-slate-100 bg-white">
        <p className="text-xs text-slate-400 mb-2">Preguntas rápidas:</p>
        <div className="flex flex-wrap gap-1.5">
          {quickQuestions.map((q) => (
            <button key={q} onClick={() => sendMessage(q)} disabled={loading}
              className="px-2.5 py-1 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full border border-blue-100 transition-colors disabled:opacity-50">
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-3 border-t border-slate-100 bg-white flex gap-2">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          placeholder="Escribe tu pregunta..."
          disabled={loading}
          className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-50" />
        <button onClick={() => sendMessage(input)} disabled={!input.trim() || loading}
          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white rounded-xl transition-colors" aria-label="Enviar">
          <Send className="w-4 h-4" />
        </button>
        <button onClick={reset} className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl text-xs transition-colors">
          Reiniciar
        </button>
      </div>
    </div>
  )
}
