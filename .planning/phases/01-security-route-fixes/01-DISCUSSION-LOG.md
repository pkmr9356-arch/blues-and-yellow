# Phase 1: Security & Route Fixes - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-10-24
**Phase:** 1-Security & Route Fixes
**Areas discussed:** Admin Access Control, Next.js 16 Dynamic Route Migration, Service Route Integrity, Inquiry Validation & Abuse Prevention

---

## Admin Access & Protection Mechanism

| Option | Description | Selected |
|--------|-------------|----------|
| Supabase Auth Session | Server-enforced middleware check using `@supabase/ssr` cookies redirecting unauthorized visitors to `/admin/login` | ✓ |
| Passcode Secret / Env Var | Simple password header check | |
| Defer / Local Only | Disable admin routes or keep unauthenticated | |

**User's choice:** Supabase Auth with server-side middleware enforcement to safeguard customer PII.
**Notes:** Admin dashboard and leads viewer must not be accessible publicly under any circumstances.

---

## Next.js 16 Dynamic Route Migration & 404 Handling

| Option | Description | Selected |
|--------|-------------|----------|
| Await `params` Promise | Migrate dynamic page signatures to `Promise<{ slug: string }>` and `await params` | ✓ |
| Suppress warnings | Leave as-is | |

**User's choice:** Full conformance with Next.js 16 asynchronous `params` convention across `/work/[slug]` and `/insights/[slug]`.
**Notes:** Graceful `notFound()` fallback when records do not exist in database.

---

## Service Catalog Completeness

| Option | Description | Selected |
|--------|-------------|----------|
| Add missing WordPress service page | Create `src/app/services/wordpress-development/page.tsx` adhering to existing service layout | ✓ |
| Remove card from index | Delete link from `/services` | |

**User's choice:** Add `wordpress-development` page to eliminate 404 errors while preserving agency service offerings.

---

## Inquiry Validation & Anti-Abuse

| Option | Description | Selected |
|--------|-------------|----------|
| Zod validation + Throttling | Server-side schema validation with email regex, length limits, and anti-spam throttling | ✓ |
| Client-only validation | Rely on HTML `required` attributes | |

**User's choice:** Strict server-side Zod validation and rate throttling to avoid junk database entries and runaway Resend email quotas.

---

## Deferred Ideas
- CRM lead status lifecycle (`contacted`, `closed`)
- Rich markdown portfolio editor for admin
