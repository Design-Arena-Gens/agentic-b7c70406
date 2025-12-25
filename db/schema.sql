create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  subscription_status text default 'trial' check (subscription_status in ('trial', 'pro', 'paused')),
  created_at timestamptz not null default now()
);

create table if not exists appeals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles (id) on delete cascade,
  seller_name text not null,
  asin text not null,
  violation_type text not null,
  root_cause_input text not null,
  generated_poa text,
  status text default 'draft' check (status in ('draft', 'submitted', 'resolved', 'escalated')),
  created_at timestamptz not null default now()
);

create index if not exists appeals_user_id_idx on appeals (user_id);
create index if not exists appeals_created_at_idx on appeals (created_at desc);
