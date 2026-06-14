import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  if (!message?.trim()) {
    return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'API no configurada' }, { status: 503 })
  }

  const system = `Eres el asistente virtual de un pequeño negocio local en México.
Tu función es responder preguntas frecuentes de clientes de forma amable, breve y natural.

Contexto del negocio (demo):
- Horario: Lunes a sábado 9am–8pm, domingos 10am–4pm
- Servicios: Barbería (corte clásico $180, corte y barba $250, paquete familiar $499)
- Ubicación: Zona centro de la ciudad
- WhatsApp: disponible en horario de atención
- Métodos de pago: efectivo, transferencia y tarjeta

Reglas:
- Responde en máximo 2 oraciones
- Si no sabes algo, ofrece contactar a una persona del negocio
- No inventar información que no tienes
- Lenguaje natural y cercano, en español mexicano
- Al final de tu respuesta agrega en una nueva línea: "INTENCIÓN: [una de estas: horario, ubicación, precio, servicios, reservación, pedido, pago, envío, otro]"`

  try {
    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 200,
      system,
      messages: [{ role: 'user', content: message }],
    })

    const full = msg.content[0].type === 'text' ? msg.content[0].text : ''
    const lines = full.split('\n').filter(Boolean)
    const intentLine = lines.find((l) => l.startsWith('INTENCIÓN:'))
    const intent = intentLine ? intentLine.replace('INTENCIÓN:', '').trim() : 'otro'
    const response = lines.filter((l) => !l.startsWith('INTENCIÓN:')).join(' ').trim()

    return NextResponse.json({ response, intent })
  } catch (err) {
    console.error('[chatbot]', err)
    return NextResponse.json({ error: 'Error al procesar mensaje' }, { status: 500 })
  }
}
