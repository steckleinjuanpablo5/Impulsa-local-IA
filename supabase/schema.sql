-- Tabla principal de leads / solicitudes de contacto
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  negocio text not null,
  tipo_negocio text,
  whatsapp text not null,
  correo text,
  mensaje text,
  created_at timestamp with time zone default now()
);

-- Habilitar RLS
alter table leads enable row level security;

-- Policy: inserción pública (para que el formulario pueda guardar)
create policy "Insert leads publicly" on leads
  for insert with check (true);

-- Policy: lectura solo para usuarios autenticados (admin)
create policy "Read leads for authenticated users" on leads
  for select using (auth.role() = 'authenticated');

-- -------------------------------------------------------
-- Tablas opcionales (no bloquean el sitio si no existen)
-- -------------------------------------------------------

create table if not exists content_generations (
  id uuid primary key default gen_random_uuid(),
  idea text not null,
  negocio text,
  facebook text,
  instagram text,
  whatsapp text,
  created_at timestamp with time zone default now()
);

create table if not exists demo_orders (
  id uuid primary key default gen_random_uuid(),
  package_id text not null,
  package_name text not null,
  amount integer not null,
  currency text default 'mxn',
  customer_name text,
  business_name text,
  whatsapp text,
  email text,
  status text default 'simulated',
  stripe_session_id text,
  created_at timestamp with time zone default now()
);

create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  whatsapp text not null,
  fecha date,
  hora time,
  personas int default 1,
  notas text,
  created_at timestamp with time zone default now()
);
