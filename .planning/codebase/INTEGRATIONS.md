# External Integrations

**Analysis Date:** 2026-10-24

## APIs & External Services

**Email Delivery:**
- Resend - Transactional email notifications for project inquiries
  - SDK/Client: `resend` v3.2.0 (`src/app/actions/submit-inquiry.ts`)
  - Auth: `RESEND_API_KEY`
  - Delivery target: Notifies `hello@bluesandyellow.agency` from `inquiries@bluesandyellow.agency`

**External Typography / CDN:**
- Fontshare (Indian Type Foundry) - Erode variable typography font family
  - Endpoints: `https://api.fontshare.com`, `https://cdn.fontshare.com`
  - Referenced in: `src/app/layout.tsx`

**External Media Hosts:**
- Unsplash & Supabase CDN - Remote image domains configured in `next.config.js`
  - Hostnames: `images.unsplash.com`, `**.supabase.co`

## Data Storage

**Databases:**
- Supabase (PostgreSQL BaaS)
  - Connection: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - Client: `@supabase/supabase-js` v2.39.0 initialized via `src/lib/supabase-server.ts`
  - Known tables:
    - `leads`: Stores contact submissions (`name`, `email`, `project_summary`, `service_interest_ids`, `status`, `created_at`) accessed in `src/app/actions/submit-inquiry.ts` and `src/app/admin/leads/page.tsx`
    - `projects`: Stores portfolio case studies (`slug`, `title`, `summary`, `challenge`, `approach`, `solution`, `outcomes`) accessed in `src/app/work/[slug]/page.tsx`

**File Storage:**
- Supabase Storage (configured via remote image pattern in `next.config.js`, no direct storage client bucket calls implemented yet)

**Caching:**
- Next.js default fetch cache and App Router React server component memoization

## Authentication & Identity

**Auth Provider:**
- Not implemented - No auth provider or middleware is configured.
  - Notice: Admin routes (`src/app/admin/page.tsx` and `src/app/admin/leads/page.tsx`) currently render without access control or session validation.

## Monitoring & Observability

**Error Tracking:**
- None configured (no Sentry, Datadog, or telemetry services installed)

**Logs:**
- Standard runtime output (Next.js server console and browser developer tools)

## CI/CD & Deployment

**Hosting:**
- Targeted for Vercel / Node.js container environments

**CI Pipeline:**
- None configured in repository (no `.github/workflows` present)

## Environment Configuration

**Required env vars:**
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL (`.env.example`)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Public anonymous API key (`.env.example`)
- `SUPABASE_SERVICE_ROLE_KEY`: Service role secret key for server-side database bypass (`.env.example`)
- `RESEND_API_KEY`: API key for Resend email dispatch (`.env.example`)
- `NEXT_PUBLIC_SITE_URL`: Application base URL for production links (`.env.example`)

**Secrets location:**
- `.env.local` for local execution (gitignored)

## Webhooks & Callbacks

**Incoming:**
- None configured

**Outgoing:**
- Synchronous outbound HTTP POST via Resend SDK on `submitInquiry` (`src/app/actions/submit-inquiry.ts`)

---

*Integration audit: 2026-10-24*
