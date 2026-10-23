# Roadmap: Blues&Yellow

## Overview

Stabilize and elevate the Blues&Yellow agency web platform by addressing critical security vulnerabilities and Next.js 16 functional breakages first, cleaning structural code hygiene, unifying lead capture mechanisms, and finishing with SEO and visual polish while preserving existing brand tokens and animations.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Security & Route Fixes** - Protect admin endpoints, await Next.js 16 dynamic route params, fix broken services link, and validate server action inputs
- [ ] **Phase 2: Codebase Hygiene & Shell Consistency** - Remove duplicate header/footer in home page and delete orphaned prototype variant files
- [ ] **Phase 3: Lead Intake & Contact Unification** - Unify `/contact` and `/start-a-project` inquiry forms with interactive feedback and Resend delivery
- [ ] **Phase 4: SEO, Resilience & Visual Polish** - Implement metadata, OpenGraph tags, loading/error boundaries, and verify responsive design and animations

## Phase Details

### Phase 1: Security & Route Fixes
**Goal**: Secure admin routes with Supabase Auth, fix Next.js 16 dynamic route parameter handling, resolve 404 service links, and enforce Zod validation on Server Actions.
**Mode**: mvp
**Depends on**: Nothing (first phase)
**Requirements**: [SEC-01, SEC-02, SEC-03, SEC-04, ROUT-01, ROUT-02, ROUT-03]
**Success Criteria** (what must be TRUE):
  1. Unauthenticated visits to `/admin` or `/admin/leads` are blocked and redirected to an admin authentication view.
  2. Dynamic routes `/work/[slug]` and `/insights/[slug]` await `params` as required in Next.js 16, resolving cleanly without runtime warnings or errors.
  3. All services links on `/services` route to valid destinations without producing a 404 error.
  4. Server Action `submitInquiry` validates input format using Zod and rejects malformed or abusive submissions.
**Plans**: 2 plans

Plans:
- [ ] 01-01: Admin Route Authentication & Middleware with Supabase
- [ ] 01-02: Next.js 16 Async Dynamic Route Fixes, Services Route Fix & Server Action Zod Validation

### Phase 2: Codebase Hygiene & Shell Consistency
**Goal**: Normalize global layout structure by eliminating redundant header/footer markup from `src/app/page.tsx` and pruning dead prototype variant files.
**Mode**: mvp
**Depends on**: Phase 1
**Requirements**: [HYG-01, HYG-02]
**Success Criteria** (what must be TRUE):
  1. The agency landing page (`/`) renders a single header and footer provided by `src/app/layout.tsx`.
  2. Orphaned prototype files (`page-final.tsx`, `page-refined.tsx`, `page-fixed.tsx`, `globals-fixed.css`) are safely purged.
**Plans**: 1 plan

Plans:
- [ ] 02-01: Layout Shell Normalization & Dead File Pruning

### Phase 3: Lead Intake & Contact Unification
**Goal**: Unify client lead intake flows across `/contact` and `/start-a-project` with full client status feedback and reliable Supabase/Resend delivery.
**Mode**: mvp
**Depends on**: Phase 2
**Requirements**: [INTK-01, INTK-02, INTK-03]
**Success Criteria** (what must be TRUE):
  1. The `/contact` route uses an active, interactive form wired to `submitInquiry` rather than an inert HTML form.
  2. Inbound inquiries provide clear UI feedback for submitting, success confirmation, and validation errors.
  3. Inquiries persist accurately to the Supabase `leads` table and trigger Resend email alerts.
**Plans**: 1 plan

Plans:
- [ ] 03-01: Unified Contact Form Integration & Notification Flow

### Phase 4: SEO, Resilience & Visual Polish
**Goal**: Equip the platform with Next.js metadata, OpenGraph tags, App Router fault-tolerant boundaries, and responsive visual polish while preserving brand typography and animations.
**Mode**: mvp
**Depends on**: Phase 3
**Requirements**: [POL-01, POL-02, POL-03]
**Success Criteria** (what must be TRUE):
  1. Core pages export Next.js `metadata` with descriptive titles, descriptions, and OpenGraph social previews.
  2. App Router implements `loading.tsx` and `error.tsx` boundary files to handle network latency and unexpected query failures gracefully.
  3. Brand colors, Erode typography, and GSAP/Framer Motion animations render consistently across mobile and desktop devices.
**Plans**: 2 plans

Plans:
- [ ] 04-01: SEO Metadata & App Router Error/Loading Boundaries
- [ ] 04-02: Responsive Visual Polish & Animation Verification

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Security & Route Fixes | 0/2 | Not started | - |
| 2. Codebase Hygiene & Shell Consistency | 0/1 | Not started | - |
| 3. Lead Intake & Contact Unification | 0/1 | Not started | - |
| 4. SEO, Resilience & Visual Polish | 0/2 | Not started | - |
