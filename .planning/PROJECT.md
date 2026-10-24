# Blues&Yellow

## What This Is

Blues&Yellow is the official digital agency and web technology studio website built with Next.js 16, React, and Tailwind CSS. It highlights the agency's portfolio, service offerings (website development, web applications, mobile apps, digital strategy), and captures prospective client project inquiries.

## Core Value

Preserve current business purpose, features, integrations, and useful design work while methodically resolving security vulnerabilities, broken functionality, and code hygiene before applying visual polish.

## Business Context

- **Customer**: Startups, entrepreneurs, and growing businesses looking for premium digital strategy, design, and engineering services.
- **Revenue model**: High-touch digital agency contracts, fixed-scope projects, and retained web development engagements.
- **Success metric**: Reliable capture and conversion of high-intent project inquiries via website intake flows.

## Requirements

### Validated

- ✓ Next.js App Router presentation architecture with dynamic routing for `/work` and `/services` — existing
- ✓ Supabase PostgreSQL client integration for `leads` and `projects` tables — existing
- ✓ Project inquiry submission via Next.js Server Action (`submitInquiry`) with Resend email notification — existing
- ✓ Custom branding design tokens with Tailwind CSS and Fontshare Erode typography — existing
- ✓ GSAP ScrollTrigger and Framer Motion animation foundations — existing
- ✓ Secure Admin endpoints (`/admin` and `/admin/leads`) using Supabase Auth session protection and fail-closed allowlist — v1.0
- ✓ Fix Next.js 16 breaking change in dynamic route params (`src/app/work/[slug]/page.tsx`, `src/app/insights/[slug]/page.tsx`) by properly awaiting asynchronous `params` — v1.0
- ✓ Resolve 404 broken route link on services overview for `/services/wordpress-development` — v1.0
- ✓ Wire `/contact` page form to active `ProjectInquiryForm` and validate inputs server-side with Zod — v1.0
- ✓ Eliminate duplicate `<header>` and `<footer>` on home page (`src/app/page.tsx`) and clean up dead prototype files (`page-final.tsx`, `page-refined.tsx`, `page-fixed.tsx`, `globals-fixed.css`) — v1.0
- ✓ Implement rate limiting and bot honeypot safeguards on lead inquiry endpoints — v1.0
- ✓ Add dynamic SEO metadata, OpenGraph tags, and App Router `loading.tsx` / `error.tsx` boundary states — v1.0

### Active

- [ ] (Milestone v1.0 Complete — Ready to plan v1.1)

### Out of Scope

- Complete aesthetic overhaul or discarding established design tokens — preserve useful existing brand work
- Replacing Supabase or Resend with alternative service providers — maintain established integrations
- Multi-tenant client invoicing / billing portal — deferred to future milestones

## Context

- **Stack**: Next.js 16.4.2 (App Router), React 18.2.0, Tailwind CSS 3.4.1, Node v24.22.0.
- **Backend Services**: Supabase (PostgreSQL BaaS), Resend (transactional email dispatch).
- **Codebase Map**: Verified 7-document map residing in `.planning/codebase/`.
- **Primary Technical Debt & Security**: Detailed in `.planning/codebase/CONCERNS.md`, specifically unauthenticated admin endpoints and Next.js 16 route parameter breaking changes.

## Constraints

- **Security**: The `/admin` and `/admin/leads` paths must never expose customer PII to unauthorized public visitors.
- **Compatibility**: Must conform to Next.js 16 asynchronous conventions (`params` as a Promise).
- **Preservation**: Do not rewrite working pages or discard existing brand copy, typography, and styling tokens.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Implement Supabase Auth for `/admin` | Leverages already installed `@supabase/supabase-js` and `@supabase/ssr` without new vendor dependencies | ✓ Good |
| Improvements prioritized: Security & Fixes before Polish | Ensures platform stability, data privacy, and working conversion funnels before visual enhancements | ✓ Good |
| Clean up duplicate home page shell | Resolves header/footer flashing and double rendering while maintaining single source of truth in `layout.tsx` | ✓ Good |
| Reusable ProjectInquiryForm | Unifies lead intake, Zod validation, and honeypot across /contact and /start-a-project | ✓ Good |
| App Router Resilience Boundaries | loading.tsx and error.tsx provide user recovery and visual feedback during latency | ✓ Good |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-10-24 after v1.0 milestone*
