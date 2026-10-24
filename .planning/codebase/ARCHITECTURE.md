<!-- refreshed: 2026-10-24 -->
# Architecture

**Analysis Date:** 2026-10-24

## System Overview

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Client Layer (Browser)                                │
├──────────────────────┬──────────────────────┬───────────────────────────────┤
│   `Header`           │ `ProjectInquiryForm` │ `HorizontalScroll`            │
│  `src/components/`   │  `src/components/`   │  `src/components/`            │
└──────────┬───────────┴──────────┬───────────┴───────────────┬───────────────┘
           │                      │                           │
           ▼                      ▼                           ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Next.js App Router Layer (Server)                        │
│  Layout & Pages: `src/app/layout.tsx`, `src/app/page.tsx`                    │
│  Dynamic Routes: `src/app/work/[slug]/page.tsx`, `src/app/admin/leads/`      │
│  Server Actions: `src/app/actions/submit-inquiry.ts`                        │
└─────────────────────────────────┬───────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Data & External Services                                 │
│  Supabase PostgreSQL DB: `src/lib/supabase-server.ts`                        │
│  Resend Email API: `src/app/actions/submit-inquiry.ts`                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| `RootLayout` | Top-level HTML shell, font imports, persistent Header & Footer | `src/app/layout.tsx` |
| `Header` | Sticky navigation bar, scroll trigger detection, mobile menu | `src/components/Header.tsx` |
| `Footer` | Primary footer navigation, service links, copyright statement | `src/components/Footer.tsx` |
| `ProjectInquiryForm` | Client form handling lead capture, status states, and submission | `src/components/ProjectInquiryForm.tsx` |
| `HorizontalScroll` | GSAP ScrollTrigger horizontal text pin with reduced-motion fallback | `src/components/HorizontalScroll.tsx` |
| `ServicesGrid` | Catalog grid linking to specific service offerings | `src/components/ServicesGrid.tsx` |
| `submitInquiry` | Next.js Server Action saving leads to Supabase & emailing Resend | `src/app/actions/submit-inquiry.ts` |
| `createClient` | Factory initializing Supabase client with service or anon credentials | `src/lib/supabase-server.ts` |
| `CaseStudyPage` | Server component querying and rendering dynamic project case studies | `src/app/work/[slug]/page.tsx` |
| `AdminLeadsPage` | Server component displaying database leads table | `src/app/admin/leads/page.tsx` |

## Pattern Overview

**Overall:** Next.js App Router with React Server Components (RSC) and Server Actions.

**Key Characteristics:**
- Server Components by default for static content and data fetching (`src/app/about/page.tsx`, `src/app/work/[slug]/page.tsx`)
- Explicit `'use client'` directives for animated UI and forms (`src/components/Header.tsx`, `src/components/ProjectInquiryForm.tsx`, `src/app/page.tsx`)
- Server Actions for form mutation (`src/app/actions/submit-inquiry.ts`), eliminating traditional dedicated API route handlers
- Token-based design styling using Tailwind CSS with custom CSS variables (`src/app/globals.css`, `tailwind.config.js`)

## Layers

**Presentation Layer (Client):**
- Purpose: Interactive navigation, animations, client-side validation, form submission feedback
- Location: `src/components/` and client pages
- Contains: React components with framer-motion, GSAP, and state hooks
- Depends on: Server Actions (`submitInquiry`), Tailwind utilities
- Used by: End users in browser

**Application / Routing Layer (Server):**
- Purpose: Route resolution, layout composition, server-side data fetching
- Location: `src/app/`
- Contains: App router pages, layouts, dynamic segment templates (`[slug]`)
- Depends on: `src/lib/supabase-server.ts`, `src/components/`
- Used by: Next.js HTTP server engine

**Action / Business Layer:**
- Purpose: Form handling, database insertion, notification dispatch
- Location: `src/app/actions/`
- Contains: Server Actions marked with `'use server'`
- Depends on: `src/lib/supabase-server.ts`, Resend SDK
- Used by: `src/components/ProjectInquiryForm.tsx`

**Infrastructure / Data Layer:**
- Purpose: External client instantiation and database abstraction
- Location: `src/lib/`
- Contains: Supabase client provider (`src/lib/supabase-server.ts`)
- Depends on: `@supabase/supabase-js`, environment variables
- Used by: Server pages and server actions

## Data Flow

### Primary Request Path (Lead Inquiry Submission)

1. User submits inquiry form in browser (`src/components/ProjectInquiryForm.tsx:10`)
2. `handleSubmit` invokes Next.js Server Action `submitInquiry` (`src/app/actions/submit-inquiry.ts:8`)
3. Server Action instantiates Supabase client via `createClient` (`src/lib/supabase-server.ts:3`)
4. Data inserted into `leads` table (`src/app/actions/submit-inquiry.ts:20`)
5. Resend sends email notification to agency inbox (`src/app/actions/submit-inquiry.ts:30`)
6. Result object returned to client; UI transitions to confirmation state (`src/components/ProjectInquiryForm.tsx:22`)

### Secondary Flow Name (Case Study Dynamic Fetch)

1. Browser requests `/work/:slug` (`src/app/work/[slug]/page.tsx:4`)
2. Server Component queries `projects` table by `slug` using Supabase client (`src/app/work/[slug]/page.tsx:6`)
3. If not found or error, triggers `notFound()` from `next/navigation` (`src/app/work/[slug]/page.tsx:13`)
4. Page renders HTML with challenge, approach, solution, and outcomes (`src/app/work/[slug]/page.tsx:21`)

**State Management:**
- Component-level React `useState` for local interactive state (`src/components/Header.tsx`, `src/components/ProjectInquiryForm.tsx`)
- Server-driven database state in Supabase (`leads`, `projects`)

## Key Abstractions

**Server Action Result:**
- Purpose: Standardized return contract `{ success: boolean, error?: string }` for mutations
- Examples: `src/app/actions/submit-inquiry.ts`
- Pattern: Discriminated result payload

**Supabase Server Factory:**
- Purpose: Centralized credential resolution and client creation for server contexts
- Examples: `src/lib/supabase-server.ts`
- Pattern: Factory function

## Entry Points

**Root Layout Entry:**
- Location: `src/app/layout.tsx`
- Triggers: All inbound HTTP requests to any route
- Responsibilities: Mounts font CDN, renders `<Header />`, wraps children in `<main>`, renders `<Footer />`

**Home Page Entry:**
- Location: `src/app/page.tsx`
- Triggers: Route `/`
- Responsibilities: Main agency landing page presenting hero, service overviews, and contact links

## Architectural Constraints

- **Next.js Version Constraints:** Running Next.js 16.4.2 (`package.json`) where route `params` are asynchronous Promises in App Router pages.
- **Global State:** No Redux or global context store; architecture relies on React Server Components for data propagation and local hooks for interactivity.
- **Authentication:** No authentication boundary currently wraps `/admin` or `/admin/leads`.

## Anti-Patterns

### Header & Footer Redundancy

**What happens:** `src/app/page.tsx` and legacy page variations (`page-final.tsx`, `page-fixed.tsx`) explicitly declare `<header>` and `<footer>` tags, while `src/app/layout.tsx` already renders `<Header />` and `<Footer />`.
**Why it's wrong:** Causes duplicate headers and footers to render on the home page.
**Do this instead:** Remove manual header and footer elements from page templates and let `src/app/layout.tsx` govern global layout components.

### Synchronous Next 16 Route Params

**What happens:** `src/app/work/[slug]/page.tsx` and `src/app/insights/[slug]/page.tsx` read `params.slug` synchronously.
**Why it's wrong:** In Next.js 15+, dynamic route `params` must be awaited (`const { slug } = await params`).
**Do this instead:** Update dynamic page signatures to type `params` as `Promise<{ slug: string }>` and `await params`.

### Dead Alternate Files

**What happens:** Multiple variant files (`src/app/page-final.tsx`, `src/app/page-refined.tsx`, `src/app/page-fixed.tsx`, `src/app/globals-fixed.css`) linger in source.
**Why it's wrong:** Causes confusion about canonical implementations and bloats project tree.
**Do this instead:** Consolidate required features into canonical `page.tsx` and `globals.css`, removing scratch files.

## Error Handling

**Strategy:** Partial error boundaries and action return codes.

**Patterns:**
- Server Action returns `{ success: false, error: 'Database error' }` instead of throwing unhandled exceptions (`src/app/actions/submit-inquiry.ts:26`)
- `notFound()` trigger for missing database rows in dynamic routes (`src/app/work/[slug]/page.tsx:13`)

## Cross-Cutting Concerns

**Logging:** Standard console output on server errors.
**Validation:** Basic HTML form validation (`required` attributes); Zod dependency is present in `package.json` but not yet wired into `submitInquiry`.
**Authentication:** Absent across admin endpoints.

---

*Architecture analysis: 2026-10-24*
