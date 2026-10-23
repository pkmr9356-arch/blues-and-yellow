# Phase 1: Security & Route Fixes - Context

**Gathered:** 2026-10-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 resolves immediate security risks and functional breakages across the existing Next.js 16 application without altering brand styling, page content, or established service integrations. Specifically:
- Enforce server-side authentication on `/admin` and `/admin/leads` to protect customer lead records.
- Migrate dynamic route parameters in `src/app/work/[slug]/page.tsx` and `src/app/insights/[slug]/page.tsx` to asynchronous Promises per Next.js 16 requirements.
- Resolve the 404 dead link on `/services` by providing the missing `wordpress-development` destination.
- Enforce server-side Zod validation and submission rate-limiting/anti-spam safeguards on the `submitInquiry` Server Action while preserving Supabase database storage and Resend notification delivery.

</domain>

<decisions>
## Implementation Decisions

### Admin Access & Lead Data Protection
- **D-01: Server-Enforced Authentication for Admin Routes** — **Reversibility:** costly — Protection must occur server-side before any customer lead data is queried or rendered. Use Next.js middleware and Supabase SSR auth (`@supabase/ssr` / cookies) to check active sessions. Any unauthenticated access to `/admin` or `/admin/leads` must redirect immediately to `/admin/login`.
- **D-02: Admin Login Interface** — **Reversibility:** reversible — Provide a dedicated, clean `/admin/login` page styled with existing brand design tokens (Navy `#0F1729`, Blue `#2563EB`, Erode/Inter typography). Authenticate admin credentials against Supabase Auth (`supabase.auth.signInWithPassword`), maintaining cookie sessions.

### Next.js 16 Route Compatibility
- **D-03: Asynchronous Dynamic Route Parameters** — **Reversibility:** reversible — Update component signatures in `src/app/work/[slug]/page.tsx` and `src/app/insights/[slug]/page.tsx` from `{ params }: { params: { slug: string } }` to `{ params }: { params: Promise<{ slug: string }> }`. Await `params` (`const { slug } = await params;`) before query execution.
- **D-04: Graceful 404 Fallback for Dynamic Routes** — **Reversibility:** reversible — When a requested case study slug does not exist in Supabase or an article slug is missing, invoke Next.js `notFound()` to trigger standard 404 handling rather than crashing with 500 errors.

### Service Route Completeness
- **D-05: Missing WordPress & CMS Service Page** — **Reversibility:** reversible — Implement `src/app/services/wordpress-development/page.tsx` adhering to the exact layout, container widths, CTA buttons, and typography established across existing service detail routes (`website-development`, `web-applications`, etc.).

### Lead Intake Validation & Abuse Prevention
- **D-06: Server-Side Zod Validation** — **Reversibility:** reversible — Validate incoming form payloads in `src/app/actions/submit-inquiry.ts` using `zod` schema:
  - `name`: string, min 2 chars, max 100 chars, trimmed.
  - `email`: string, valid email syntax, max 255 chars, lowercase.
  - `message`: string, min 10 chars, max 5000 chars, trimmed.
  - Return `{ success: false, error: 'Validation failed: ...' }` when invalid, without writing to Supabase or triggering Resend.
- **D-07: Anti-Abuse Throttling & Honeypot** — **Reversibility:** reversible — Implement honeypot field check (reject submission silently or with error if hidden bot field is filled) and submission throttling (IP / timestamp guard) to prevent runaway Resend email dispatch costs.

### Preservation Invariants
- **D-08: Integration & Aesthetic Preservation** — **Reversibility:** one-way — Do not alter working Supabase queries or change Resend recipient addresses (`hello@bluesandyellow.agency`). Preserve all Tailwind theme definitions, color codes, Fontshare font imports, and animation hooks.

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

</code_context>

<specifics>
## Specific Ideas

- The admin interface should remain clean, utilitarian, and agency-branded without bloated external dashboard UI dependencies.
- Error feedback on inquiry forms must be localized and actionable (e.g., "Please provide a valid email address").

</specifics>

<deferred>
## Deferred Ideas

- Lead status CRM updates (`status: contacted`, `status: closed`) deferred to Phase 3 or v2.
- Rich markdown editor for dynamic portfolio management in admin panel deferred to v2.
- Re-styling or tweaking homepage hero layouts deferred to Phase 2/4.

</deferred>

---

*Phase: 01-Security & Route Fixes*
*Context gathered: 2026-10-24*
