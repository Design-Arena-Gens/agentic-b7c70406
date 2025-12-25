# AMZ-Resurrect AI

Reasoning-first SaaS to resurrect suspended Amazon KSA/UAE seller accounts with investigator-grade Plans of Action.

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui + Lucide Icons
- Supabase (PostgreSQL) for persistence
- Vercel AI SDK + OpenAI o1-preview / GPT-4o for reasoning output

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Create a `.env` file

   ```bash
   cp .env.example .env
   ```

   Fill in `OPENAI_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and optionally override `OPENAI_MODEL`.

3. Run database migrations on Supabase using `db/schema.sql`.

4. Start the dev server

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` for the landing page or `/dashboard` for the POA generator workspace.

## Project Structure

```
app/
  api/generate-appeal/route.ts   # Edge route streaming reasoning POA
  dashboard/page.tsx             # Client dashboard UI
  page.tsx                       # Marketing landing page
components/
  AppealForm.tsx                 # Intake form hooked to AI stream
  POAPreview.tsx                 # Paper-style markdown preview
  ui/*                           # shadcn/ui primitives
db/schema.sql                    # Supabase DDL
lib/                             # Prompts, constants, utils
styles/globals.css               # Tailwind base styles
```

## Scripts

- `npm run dev` – Run local development
- `npm run build` – Build production bundle
- `npm start` – Launch production server
- `npm run lint` – Lint the project
- `npm run typecheck` – Type safety check

## Deployment

Deploy to Vercel with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b7c70406
```

After deployment, verify:

```bash
curl https://agentic-b7c70406.vercel.app
```

## Supabase Schema

SQL for tables resides in `db/schema.sql`. Apply via Supabase SQL editor or CLI.

## Growth Sprints

See root documentation or product brief for the 7-day community growth playbook.
