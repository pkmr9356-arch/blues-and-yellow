# Phase 1: Security & Route Fixes - Context

**Gathered:** 2026-10-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 resolves verified security vulnerabilities and Next.js 16 runtime incompatibilities without modifying brand aesthetics, styling tokens, or established service configurations:
- Enforce server-side authentication on `/admin` and `/admin/leads` using cryptographic user session validation (`auth.getUser()`) to prevent unauthorized access to customer lead PII.
- Ensure safe handling of post-login redirects on `/admin/login`, strictly rejecting open-redirect patterns.
- Migrate dynamic route parameters in `src/app/work/[slug]/page.tsx` and `src/app/insights/[slug]/page.tsx` to asynchronous Promises per Next.js 16 conventions.
- Resolve the 404 dead link on `/services` by providing the missing `wordpress-development` destination.
- Enforce server-side Zod validation, honeypot bot filtering, and deployment-compatible multi-tier rate limiting on the `submitInquiry` Server Action while preserving Supabase database storage and Resend notification delivery.

</domain>

<decisions>
## Implementation Decisions

### Admin Access & Lead Data Protection
- **D-01: Cryptographic Server-Side Auth & Strict Role Authorization** — **Reversibility:** costly — Merely checking cookie presence, calling `getSession()`, or checking authentication alone via `auth.getUser()` is insufficient because any registered user could access admin routes. Both Next.js middleware and server component boundaries (`/admin` and `/admin/leads`) must verify identity via `supabase.auth.getUser()` AND enforce a fail-closed admin authorization check (`isAuthorizedAdmin()`): `user.app_metadata?.role === 'admin'` AND the user's email must explicitly match the mandatory `ADMIN_EMAILS` allowlist (zero wildcard domain fallback; fails closed if unset or empty). If unauthorized or unauthenticated, access is blocked immediately with zero lead queries executed.
- **D-02: Open-Redirect Rejection on Admin Login** — **Reversibility:** reversible — The post-login redirect target (`next` query parameter) must be validated server-side. It must strictly be an internal path starting with `/admin` and cannot start with `//`, `/\`, or contain any protocol URI scheme (`https:`, `javascript:`, `data:`). Any invalid target defaults strictly to `/admin`.

### Next.js 16 Route Compatibility
- **D-03: Asynchronous Dynamic Route Parameters** — **Reversibility:** reversible — Update component signatures in `src/app/work/[slug]/page.tsx` and `src/app/insights/[slug]/page.tsx` from `{ params }: { params: { slug: string } }` to `{ params }: { params: Promise<{ slug: string }> }`. Await `params` (`const { slug } = await params;`) before query execution.
- **D-04: Graceful 404 Fallback for Dynamic Routes** — **Reversibility:** reversible — When a requested case study slug does not exist in Supabase or an article slug is missing, invoke Next.js `notFound()` to trigger standard 404 handling rather than crashing with 500 errors.

### Service Route Completeness
- **D-05: Missing WordPress & CMS Service Page** — **Reversibility:** reversible — Implement `src/app/services/wordpress-development/page.tsx` adhering to the exact layout, container widths, CTA buttons, and typography established across existing service detail routes (`website-development`, `web-applications`, etc.).

### Lead Intake Validation & Abuse Prevention
- **D-06: Robust Server-Side Zod Validation & Normalization** — **Reversibility:** reversible — Validate incoming form payloads in `src/app/actions/submit-inquiry.ts` using `zod` schema without stripping legitimate user content:
  - `name`: string, trimmed, min 2 chars, max 100 chars.
  - `email`: string, trimmed, lowercase, validated using Zod's RFC-compliant `z.string().email()`, max 255 chars.
  - `message`: string, trimmed, min 10 chars, max 5000 chars.
  - Reject payloads that fail validation immediately without writing to Supabase or invoking Resend.
  - Schema alignment: Inspected live Supabase `leads` table and confirmed `created_at` exists; confirmed that `service_interest_ids` does not exist in schema (column is `service_interests` or omitted), resolving a latent PostgREST schema cache error (`PGRST204`).
- **D-07: Genuinely Atomic Rate Limiting via PostgreSQL Advisory Lock** — **Reversibility:** reversible —
  - *Tier 1 (Bot Defense)*: Hidden honeypot field (`bot_field`) in `src/components/ProjectInquiryForm.tsx` that must be empty in `FormData`. If filled, reject immediately without database writes or email dispatch.
  - *Tier 2 & 3 (Genuinely Atomic PostgreSQL Transaction)*: Replace race-prone check-then-act logic with a proposed, unapplied PostgreSQL stored procedure `public.submit_lead_atomic`:
    1. Acquires a transaction-level advisory lock first (`pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtext('leads_intake_rate_limit_lock'))`), serializing checks in PostgreSQL's lock manager across all connections.
    2. Captures one `clock_timestamp()` value (`v_now`) immediately after acquiring the lock and uses it consistently for rolling-window checks and record creation.
    3. Evaluates the per-email rolling window: max 2 admitted submissions per 5 minutes using case-insensitive normalization against any existing records (`pg_catalog.lower(email) = pg_catalog.lower(p_email) AND created_at >= (v_now - pg_catalog.interval '5 minutes')`).
    4. Evaluates the global rolling window: max 10 admitted submissions per 60 seconds (`created_at >= (v_now - pg_catalog.interval '60 seconds')`).
    5. Inserts row with `status: 'new'`, `created_at = v_now`, `updated_at = v_now` ONLY if both limits pass, and returns `{ allowed: true, lead_id: v_lead_id }`.
    6. If limits fail, returns `{ allowed: false, error: ... }` with zero database writes and zero Resend email calls, eliminating TOCTOU race conditions under concurrent spikes.
  - *Admission vs. Delivery Boundary*: The database transaction atomically guarantees **rate-limit admission and an allocated notification slot**, NOT actual external Resend network dispatch or delivery. If strict dispatch timing or automatic asynchronous retries were required, that would necessitate a persistent out-of-process job queue (which would require an additional migration and explicit user approval).
  - *Resend Delivery & Failure Policy*: Once admitted, the lead is committed to `public.leads`. The Server Action attempts `resend.emails.send(...)` in a `try/catch` block. If Resend errors or times out, the lead is preserved in `public.leads` with `internal_notes` recording the dispatch error. The customer receives `{ success: true }` so they do not resubmit duplicates; admins follow up via `/admin/leads`.
- **D-08: Database RLS, Role Distinction & Zero-Exposure Boundary** — **Reversibility:** one-way — To eliminate the verified vulnerability where the anonymous role can execute arbitrary CRUD against `leads` via PostgREST, an unapplied RLS lockdown migration will enable standard RLS (`ENABLE ROW LEVEL SECURITY` without `FORCE`) while revoking all direct privileges from `anon`, `authenticated`, and `public`. Zero privileges or permissive policies are granted to `anon` or `authenticated`, ensuring default-deny blocks all unauthorized access to customer PII.
  - *Distinction of Database Roles*:
    1. Active Session Role: Reported by `current_user` and `session_user` in the SQL Editor; indicates who the connected client is, but does not prove who owns the table or future functions.
    2. Table Owner of `public.leads`: Recorded in `pg_tables.tableowner`. Standard RLS exempts only the table owner and roles with `rolbypassrls`.
    3. Function Owner: Defaults to the creating session role unless altered. Executes `SECURITY DEFINER` statements with that role's identity and privileges.
    4. Required Privileges: Statements inside `public.submit_lead_atomic` perform only rolling counts and lead insertion, strictly requiring `SELECT` and `INSERT` on `public.leads` for the function owner (contains zero `UPDATE` statements). The separate Next.js Server Action (`src/app/actions/submit-inquiry.ts`) executes under `service_role` and requires `UPDATE` on `public.leads` to log Resend email dispatch failures in `internal_notes`. If the function owner is not the table owner and lacks `rolbypassrls`, it is subject to RLS policies.
  - *Verification Status*: **UNVERIFIED**. Because establishing the active role, table owner, function owner, and role attributes requires executing read-only SQL queries (`SELECT schemaname, tablename, tableowner FROM pg_tables...`, `SELECT current_user, session_user;`, `SELECT rolname, rolsuper, rolbypassrls FROM pg_roles...`) and no SQL execution is permitted during Phase 1 planning, these facts are unverified.
  - *Deployment Blocker*: Deployment remains **BLOCKED PENDING VERIFICATION** of the table owner and session role in the Supabase SQL Editor prior to running migrations.
  - *RLS Resolution (No Unverified Roles Granted)*: The narrowest explicit table privileges required by the documented workflow (`SELECT, INSERT, UPDATE` on `public.leads`, with `DELETE`, `TRUNCATE`, `REFERENCES`, and `TRIGGER` withheld) and an explicit RLS policy are granted strictly `TO service_role`. If the function owner is not the table owner and lacks `rolbypassrls`, the administrator must either set the function owner to the table owner (`ALTER FUNCTION ... OWNER TO <table_owner>;`) or create an explicit policy for that verified role only after verifying its identity. No unverified roles are granted access.
- **D-09: Accurate Reporting of Diagnostic Audit History** — **Reversibility:** permanent — Diagnostic audit probes executed during earlier planning turns modified live data in `public.leads` (inserting three temporary probe rows, updating one, and deleting them). Cleanup of those specific probe records is confirmed only to the extent supported by the recorded probe execution outputs. A subsequent read-only count confirmed that the table was empty at that specific check; this confirms the table was empty at that check, not that real customer data never existed prior to that check. No further mutating probes are permitted.

### Preservation Invariants
- **D-10: Integration & Aesthetic Preservation** — **Reversibility:** one-way — Do not alter working Supabase queries or change Resend recipient addresses (`hello@bluesandyellow.agency`). Preserve all Tailwind theme definitions, color codes (`navy`, `blue`, `yellow`), Fontshare font imports (`Erode`), and animation hooks (`framer-motion`, `gsap`). No new dependencies added to `package.json`.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Specifications & Constraints
- `.planning/PROJECT.md` — Core agency goals, constraints, and business context
- `.planning/REQUIREMENTS.md` § Security & Access Control, § Route Compatibility — Requirements SEC-01..04, ROUT-01..03
- `.planning/codebase/CONCERNS.md` § Security Considerations, § Known Bugs — Ground truth findings for admin access and async params

### Architecture & Integrations
- `.planning/codebase/ARCHITECTURE.md` § Component Responsibilities, § Layers, § Data Flow — Next.js App Router and Server Actions design
- `.planning/codebase/INTEGRATIONS.md` — Supabase client configuration and Resend email handling
- `.planning/codebase/CONVENTIONS.md` — Naming conventions, error handling contracts, and import styles

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/lib/supabase-server.ts`: Factory function `createClient()` initializes Supabase client with environment keys. Can be extended to support SSR cookie management via `@supabase/ssr`.
- `src/app/actions/submit-inquiry.ts`: Existing Server Action handles lead insertion to `leads` table and Resend email dispatch.
- `src/components/ProjectInquiryForm.tsx`: Form client component handling `'idle' | 'submitting' | 'success' | 'error'` states.

### Established Patterns
- Server Actions return `{ success: boolean, error?: string }` payload for error propagation.
- Brand design system uses Tailwind CSS with custom colors (`navy`, `blue`, `yellow`) and Fontshare Erode typography.
- App Router dynamic routes use Next.js `notFound()` for missing records.

### Integration Points
- `src/middleware.ts`: To be introduced to intercept requests to `/admin` and `/admin/leads` and enforce session tokens.
- `src/app/admin/login/page.tsx`: New route for admin credential entry.
- `src/app/admin/leads/page.tsx`: Protected server component rendering verified leads.
- `src/app/services/wordpress-development/page.tsx`: New route to satisfy link from `src/app/services/page.tsx`.

### Complete Planned Files Manifest (10 Files Total)
Required counts: Plan 01-01 = 2 CREATE + 3 MODIFY; Plan 01-02 = 1 CREATE + 4 MODIFY; Total = 10 files (3 CREATE, 7 MODIFY).

#### Plan 01-01 Files (5 files: 2 to CREATE, 3 to MODIFY)
1. `src/middleware.ts` — CREATE — Plan 01-01
   - *Filesystem verification*: Target file absent (verified); immediate parent directory `src/` verified present.
   - *Intended Change*: Next.js Edge/Node middleware intercepting `/admin/:path*` (excluding `/admin/login`). Enforces cryptographic session verification (`auth.getUser()`) and strict admin authorization (`isAuthorizedAdmin()`).
2. `src/app/admin/login/page.tsx` — CREATE — Plan 01-01
   - *Filesystem verification*: Target file absent (verified); nearest existing ancestor directory is `src/app/admin/` (verified present); subdirectory `login/` will be created when file is written.
   - *Intended Change*: Agency-branded administrative sign-in interface styled with existing design tokens (`navy`, `blue`, `cream`, Erode/Inter typography). Includes safe redirect validation (`getSafeRedirectPath`) and localized error feedback.
3. `src/lib/supabase-server.ts` — MODIFY — Plan 01-01
   - *Filesystem verification*: Target file present on disk (verified).
   - *Intended Change*: Export an SSR cookie-aware Supabase client helper (`createSupabaseServerClient`) using `@supabase/ssr` and Next.js `cookies()`, and export an explicit admin authorization helper `isAuthorizedAdmin()`, while strictly preserving existing `createClient()` export used by server actions.
4. `src/app/admin/page.tsx` — MODIFY — Plan 01-01
   - *Filesystem verification*: Target file present on disk (verified).
   - *Intended Change*: Server Component adding defense-in-depth authorization verification via `isAuthorizedAdmin(user)` and an admin sign-out control.
5. `src/app/admin/leads/page.tsx` — MODIFY — Plan 01-01
   - *Filesystem verification*: Target file present on disk (verified).
   - *Intended Change*: Server Component verifying `isAuthorizedAdmin(user)` before executing `.from('leads').select('*')` to guarantee no customer lead PII is returned to unauthorized visitors.

#### Plan 01-02 Files (5 files: 1 to CREATE, 4 to MODIFY)
6. `src/app/services/wordpress-development/page.tsx` — CREATE — Plan 01-02
   - *Filesystem verification*: Target file absent (verified); nearest existing ancestor directory is `src/app/services/` (verified present); subdirectory `wordpress-development/` will be created when file is written.
   - *Intended Change*: New service detail page matching layout, typography, container scale, and CTA structure of existing service pages, resolving 404 broken link from `/services`.
7. `src/app/work/[slug]/page.tsx` — MODIFY — Plan 01-02
   - *Filesystem verification*: Target file present on disk (verified).
   - *Intended Change*: Update `params` prop signature to `Promise<{ slug: string }>` and `await params` prior to Supabase query execution per Next.js 16 conventions; retain `notFound()`.
8. `src/app/insights/[slug]/page.tsx` — MODIFY — Plan 01-02
   - *Filesystem verification*: Target file present on disk (verified).
   - *Intended Change*: Update `params` prop signature to `Promise<{ slug: string }>` and make component `async` to `await params` per Next.js 16 conventions; retain `notFound()`.
9. `src/components/ProjectInquiryForm.tsx` — MODIFY — Plan 01-02
   - *Filesystem verification*: Target file present on disk (verified).
   - *Intended Change*: Add hidden honeypot input field (`bot_field`) within form markup so it is transmitted in `FormData`; provide localized, actionable error feedback.
10. `src/app/actions/submit-inquiry.ts` — MODIFY — Plan 01-02
    - *Filesystem verification*: Target file present on disk (verified).
    - *Intended Change*: Implement Zod schema validation, input normalization, honeypot checking, verified schema alignment (omitting non-existent `service_interest_ids`), and atomic RPC integration (`submit_lead_atomic`) with resilient Resend error handling.

</code_context>

<specifics>
## Specific Ideas

- The admin interface should remain clean, utilitarian, and agency-branded without bloated external dashboard UI dependencies.
- Error feedback on inquiry forms must be localized and actionable (e.g., "Please provide a valid email address").

</specifics>

<deferred>
## Deferred Ideas

- CRM lead status lifecycle (`contacted`, `closed`)
- Rich markdown portfolio editor for admin
- Dedicated external Redis instance (e.g. Upstash) if traffic exceeds single-database tier in future milestones

</deferred>

---

*Phase: 01-Security & Route Fixes*
*Context gathered: 2026-10-24*
