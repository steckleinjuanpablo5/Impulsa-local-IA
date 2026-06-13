import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null

export interface Lead {
  nombre: string
  negocio: string
  tipo_negocio?: string
  whatsapp: string
  correo?: string
  mensaje?: string
}

export async function saveLead(lead: Lead): Promise<{ success: boolean; error?: string }> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('leads').insert([lead])
    if (error) return { success: false, error: error.message }
    return { success: true }
  }

  // Fallback: localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('impulsa_leads') || '[]')
    existing.push({ ...lead, created_at: new Date().toISOString() })
    localStorage.setItem('impulsa_leads', JSON.stringify(existing))
    return { success: true }
  } catch {
    return { success: false, error: 'Error al guardar localmente' }
  }
}
