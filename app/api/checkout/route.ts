import { NextRequest, NextResponse } from 'next/server'
import { getPackage } from '@/lib/packages'

const stripeEnabled =
  process.env.NEXT_PUBLIC_ENABLE_STRIPE_TEST_CHECKOUT === 'true' &&
  !!process.env.STRIPE_SECRET_KEY

function isTestKey(key: string): boolean {
  return key.startsWith('sk_test_')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { packageId, customerName, businessName, whatsapp, email } = body

    // Validate package from internal source — never trust frontend price
    const pkg = getPackage(packageId)
    if (!pkg) {
      return NextResponse.json({ error: 'Paquete no válido' }, { status: 400 })
    }

    // Simulated flow (Stripe not configured)
    if (!stripeEnabled) {
      return NextResponse.json({
        mode: 'simulated',
        packageId: pkg.id,
        packageName: pkg.name,
        price: pkg.price,
        currency: pkg.currency,
        customerName,
        businessName,
        whatsapp,
        email,
      })
    }

    // Stripe test-only flow
    const secretKey = process.env.STRIPE_SECRET_KEY!

    if (!isTestKey(secretKey)) {
      return NextResponse.json(
        { error: 'SEGURIDAD: Solo se permiten claves de prueba (sk_test_...). No se usarán claves live en esta etapa.' },
        { status: 403 }
      )
    }

    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey)

    const origin = req.headers.get('origin') || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      currency: pkg.currency,
      line_items: [
        {
          price_data: {
            currency: pkg.currency,
            product_data: {
              name: `Impulsa Local IA — ${pkg.name}`,
              description: pkg.description,
            },
            unit_amount: pkg.price * 100, // centavos
          },
          quantity: 1,
        },
      ],
      metadata: {
        packageId: pkg.id,
        packageName: pkg.name,
        businessName: businessName ?? '',
        whatsapp: whatsapp ?? '',
        demo: 'true',
      },
      customer_email: email || undefined,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel?paquete=${pkg.id}`,
    })

    return NextResponse.json({ mode: 'stripe', url: session.url })
  } catch (err) {
    console.error('[checkout] error:', err)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
