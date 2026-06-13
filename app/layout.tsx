import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Impulsa Local IA | Presencia digital inteligente para negocios locales',
  description:
    'Creamos páginas web, catálogos digitales, pedidos, reservaciones, contenido para redes y atención automática con IA para pequeños negocios locales.',
  keywords: 'presencia digital, negocios locales, página web, catálogo digital, IA, pequeños negocios',
  openGraph: {
    title: 'Impulsa Local IA | Presencia digital inteligente para negocios locales',
    description:
      'Creamos páginas web, catálogos digitales, pedidos, reservaciones, contenido para redes y atención automática con IA para pequeños negocios locales.',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
