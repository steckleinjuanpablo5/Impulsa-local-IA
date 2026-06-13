# Impulsa Local IA

Solución de presencia digital impulsada por inteligencia artificial para pequeños negocios locales.

## ¿Qué es?

Impulsa Local IA es una landing page y demo funcional que muestra cómo los pequeños negocios pueden tener presencia digital accesible y profesional, incluyendo:

- Página web inteligente
- Catálogo digital
- Formulario de pedidos y reservaciones
- Generador de contenido para redes sociales (simulado)
- Chatbot de preguntas frecuentes (simulado)
- Formulario de contacto con guardado en Supabase o localStorage

## Tecnologías

- **Next.js 15** con App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Supabase** (opcional) con fallback a localStorage
- **Lucide React** para iconos

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

El sitio estará disponible en http://localhost:3000

## Configurar Supabase (opcional)

1. Crea un proyecto en supabase.com
2. Copia `.env.example` a `.env.local` y llena tus credenciales:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
   ```
3. Ejecuta el SQL de `supabase/schema.sql` en el editor SQL de tu proyecto Supabase.

> Si no configuras Supabase, el formulario de contacto guardará los leads en localStorage del navegador.

## Build de producción

```bash
npm run build
npm start
```

## Desplegar en Vercel

### Opción A: Desde GitHub

1. Sube el proyecto a GitHub
2. Entra a vercel.com, conecta tu cuenta de GitHub e importa el repositorio
3. Agrega las variables de entorno si usas Supabase
4. Haz clic en Deploy

### Opción B: Desde CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Funciones demo (no usan IA real)

| Función | Tipo |
|---|---|
| Generador de contenido | Simulación con plantillas locales |
| Chatbot | Respuestas predefinidas |
| Catálogo | Datos de ejemplo estáticos |
| Formulario de contacto | Supabase o localStorage según configuración |

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en localhost:3000 |
| `npm run build` | Build de producción |
| `npm start` | Servidor de producción |
| `npm run lint` | Verificación de código con ESLint |

## Qué mejorar en la siguiente versión

- Conectar el generador de contenido con la API de Claude (Anthropic)
- Panel de administración para ver leads y pedidos
- Autenticación para dueños de negocio
- Catálogo editable en tiempo real
- Integración real con WhatsApp Business API
