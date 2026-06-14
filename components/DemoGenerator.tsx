'use client'

import { useState } from 'react'
import { Sparkles, Copy, Check, Share2, Camera, MessageCircle } from 'lucide-react'
import { generateContent, GeneratedContent } from '@/lib/contentGenerator'

const examples = [
  'Promoción del Día del Padre',
  'Descuento de fin de semana',
  'Nuevo menú de verano',
  'Apertura de temporada',
]

interface PlatformCardProps {
  platform: string
  icon: React.ReactNode
  text: string
  color: string
}

function PlatformCard({ platform, icon, text, color }: PlatformCardProps) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className={`rounded-xl border ${color} p-4`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold text-sm">{platform}</span>
        </div>
        <button onClick={copy} className="p-1.5 rounded-lg hover:bg-black/5 transition-colors text-slate-500" aria-label={`Copiar texto para ${platform}`}>
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

export default function DemoGenerator() {
  const [idea, setIdea] = useState('')
  const [negocio, setNegocio] = useState('')
  const [result, setResult] = useState<GeneratedContent | null>(null)
  const [loading, setLoading] = useState(false)
  const [source, setSource] = useState<'ai' | 'local' | null>(null)

  const generate = async () => {
    if (!idea.trim()) return
    setLoading(true)
    setResult(null)

    try {
      const res = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea, negocio }),
      })

      if (res.ok) {
        const data = await res.json()
        setResult({ facebook: data.facebook, instagram: data.instagram, whatsapp: data.whatsapp })
        setSource('ai')
      } else {
        throw new Error('API error')
      }
    } catch {
      // Fallback to local simulation
      setResult(generateContent(idea, negocio || 'tu negocio'))
      setSource('local')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-white" />
        <div>
          <h3 className="text-white font-bold">Generador de contenido con IA</h3>
          <p className="text-purple-200 text-xs">Powered by Claude · Anthropic</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="idea" className="block text-sm font-medium text-slate-700 mb-1">¿Sobre qué quieres publicar?</label>
            <input id="idea" type="text" value={idea} onChange={(e) => setIdea(e.target.value)}
              placeholder="Ej: Promoción del Día del Padre"
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              onKeyDown={(e) => e.key === 'Enter' && generate()} />
          </div>
          <div>
            <label htmlFor="negocio" className="block text-sm font-medium text-slate-700 mb-1">Nombre de tu negocio (opcional)</label>
            <input id="negocio" type="text" value={negocio} onChange={(e) => setNegocio(e.target.value)}
              placeholder="Ej: Barbería El Estilo"
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-2">Ejemplos rápidos:</p>
          <div className="flex flex-wrap gap-2">
            {examples.map((ex) => (
              <button key={ex} onClick={() => setIdea(ex)}
                className="px-3 py-1 text-xs bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-600 rounded-full border border-slate-200 hover:border-purple-200 transition-colors">
                {ex}
              </button>
            ))}
          </div>
        </div>

        <button onClick={generate} disabled={!idea.trim() || loading}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-300 disabled:to-slate-300 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
          {loading ? (
            <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Generando con IA...</>
          ) : (
            <><Sparkles className="w-4 h-4" />Generar contenido</>
          )}
        </button>

        {result && (
          <div className="space-y-3 pt-2">
            {source === 'ai' && (
              <div className="flex items-center gap-2 text-xs text-purple-600 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Generado con Claude AI
              </div>
            )}
            {source === 'local' && (
              <div className="text-xs text-slate-400">Generado con plantillas locales (sin conexión a IA)</div>
            )}
            <PlatformCard platform="Facebook" icon={<Share2 className="w-4 h-4 text-blue-600" />} text={result.facebook} color="border-blue-100 bg-blue-50/50" />
            <PlatformCard platform="Instagram" icon={<Camera className="w-4 h-4 text-pink-600" />} text={result.instagram} color="border-pink-100 bg-pink-50/50" />
            <PlatformCard platform="WhatsApp" icon={<MessageCircle className="w-4 h-4 text-emerald-600" />} text={result.whatsapp} color="border-emerald-100 bg-emerald-50/50" />
          </div>
        )}
      </div>
    </div>
  )
}
