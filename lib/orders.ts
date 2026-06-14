import { isSupabaseConfigured, supabase } from './supabase'

export interface SimulatedOrder {
  orderId: string
  packageId: string
  packageName: string
  price: number
  currency: string
  customerName: string
  businessName: string
  whatsapp: string
  email: string
  status: 'simulated'
  stripeSessionId?: string
  createdAt: string
}

function generateOrderId(): string {
  return `SIM-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
}

export async function saveOrder(order: Omit<SimulatedOrder, 'orderId' | 'createdAt' | 'status'>): Promise<SimulatedOrder> {
  const full: SimulatedOrder = {
    ...order,
    orderId: generateOrderId(),
    status: 'simulated',
    createdAt: new Date().toISOString(),
  }

  // Save to Supabase if configured
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('demo_orders').insert([{
        package_id: full.packageId,
        package_name: full.packageName,
        amount: full.price,
        currency: full.currency,
        customer_name: full.customerName,
        business_name: full.businessName,
        whatsapp: full.whatsapp,
        email: full.email,
        status: full.status,
        stripe_session_id: full.stripeSessionId ?? null,
      }])
    } catch {
      // Supabase error is non-fatal — localStorage backup handles persistence
    }
  }

  // Always save to localStorage as backup
  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('impulsa_orders') || '[]')
    existing.push(full)
    localStorage.setItem('impulsa_orders', JSON.stringify(existing))
    localStorage.setItem('impulsa_last_order', JSON.stringify(full))
  }

  return full
}

export function getLastOrder(): SimulatedOrder | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem('impulsa_last_order')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}
