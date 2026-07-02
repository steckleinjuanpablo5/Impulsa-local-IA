import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

// Diagnostic endpoint — temporary. Reveals whether ANTHROPIC_API_KEY is present
// in the running environment and whether a real call to Claude succeeds.
// Does NOT expose the key itself. Remove after debugging.
export async function GET() {
  const key = process.env.ANTHROPIC_API_KEY
  const hasKey = !!key
  const keyLength = key?.length ?? 0

  if (!hasKey) {
    return NextResponse.json({ hasKey, keyLength, test: 'skipped (no key in this environment)' })
  }

  try {
    const client = new Anthropic({ apiKey: key })
    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 8,
      messages: [{ role: 'user', content: 'Responde solo: ok' }],
    })
    const sample = msg.content[0]?.type === 'text' ? msg.content[0].text : ''
    return NextResponse.json({ hasKey, keyLength, test: 'ok', model: msg.model, sample })
  } catch (err) {
    const e = err as { name?: string; status?: number; message?: string }
    return NextResponse.json({
      hasKey,
      keyLength,
      test: 'error',
      errorName: e?.name ?? null,
      errorStatus: e?.status ?? null,
      errorMessage: e?.message ?? String(err),
    })
  }
}
