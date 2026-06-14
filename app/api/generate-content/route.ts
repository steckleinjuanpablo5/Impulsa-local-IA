import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  const { idea, negocio } = await req.json()
  console.log('[generate-content] llamada recibida, key configurada:', !!process.env.ANTHROPIC_API_KEY)

  if (!idea?.trim()) {
    return NextResponse.json({ error: 'Idea requerida' }, { status: 400 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('[generate-content] ANTHROPIC_API_KEY no está definida en el entorno')
    return NextResponse.json({ error: 'API no configurada' }, { status: 503 })
  }

  const prompt = `Eres un experto en marketing digital para pequeños negocios locales de México.

Genera 3 textos de contenido para redes sociales sobre la siguiente idea:
Idea: "${idea}"
Nombre del negocio: "${negocio || 'el negocio'}"

Requisitos:
- Lenguaje natural, cercano y comercial en español mexicano
- Sin exageraciones ni palabras como "revolucionario" o "increíble"
- Máximo 2-3 oraciones por texto
- Incluye el nombre del negocio de forma natural

Responde ÚNICAMENTE con un JSON válido con esta estructura exacta:
{
  "facebook": "texto para Facebook aquí",
  "instagram": "texto para Instagram aquí",
  "whatsapp": "texto para WhatsApp aquí"
}`

  try {
    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = message.content[0].type === 'text' ? message.content[0].text : ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('Respuesta no válida')

    const result = JSON.parse(jsonMatch[0])
    return NextResponse.json({ ...result, source: 'ai' })
  } catch (err) {
    console.error('[generate-content]', err)
    return NextResponse.json({ error: 'Error al generar contenido' }, { status: 500 })
  }
}
