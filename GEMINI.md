<!-- GSD:project-start source:PROJECT.md -->

## Project

**Blues&Yellow**

Blues&Yellow is the official digital agency and web technology studio website built with Next.js 16, React, and Tailwind CSS. It highlights the agency's portfolio, service offerings (website development, web applications, mobile apps, digital strategy), and captures prospective client project inquiries.

**Core Value:** Preserve current business purpose, features, integrations, and useful design work while methodically resolving security vulnerabilities, broken functionality, and code hygiene before applying visual polish.

### Constraints

- **Security**: The `/admin` and `/admin/leads` paths must never expose customer PII to unauthorized public visitors.
- **Compatibility**: Must conform to Next.js 16 asynchronous conventions (`params` as a Promise).
- **Preservation**: Do not rewrite working pages or discard existing brand copy, typography, and styling tokens.

<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->

## Technology Stack

## Languages

- TypeScript 5.3.0 - Full application code across UI components, server actions, and library utilities (`tsconfig.json`, `src/`)
- JavaScript (ES6+ / Node CJS) - Build and toolchain configuration files (`next.config.js`, `tailwind.config.js`, `postcss.config.js`)
- CSS3 / PostCSS - Utility stylesheets and custom design tokens (`src/app/globals.css`, `src/app/globals-fixed.css`)

## Runtime

- Node.js v24.22.0 (target `ES2017` in `tsconfig.json`)
- npm 11.19.1
- Lockfile: `package-lock.json` present

## Frameworks

- Next.js 16.4.2 - React fullstack framework utilizing App Router (`src/app/`), Server Components, and Server Actions (`src/app/actions/submit-inquiry.ts`)
- React 18.2.0 - UI rendering engine (`package.json`)
- React DOM 18.2.0 - Web rendering target (`package.json`)
- Not installed - No test runner (Jest, Vitest, Cypress, Playwright) configured or installed in `package.json`
- Next CLI - `next dev`, `next build`, `next start`, `next lint` (`package.json`)
- Tailwind CSS 3.4.1 - Utility-first styling framework (`tailwind.config.js`)
- PostCSS 8.4.32 & Autoprefixer 10.4.16 - CSS processing pipeline (`postcss.config.js`)
- ESLint 8.55.0 (`eslint-config-next` 16.4.2) - Linting engine (`package.json`)

## Key Dependencies

- `@supabase/supabase-js` (v2.39.0) & `@supabase/ssr` (v0.12.7) - Backend client and SSR helpers for database access (`src/lib/supabase-server.ts`)
- `resend` (v3.2.0) - Transactional email service for lead notifications (`src/app/actions/submit-inquiry.ts`)
- `zod` (v3.22.4) - TypeScript-first schema declaration and data validation (`package.json`)
- `framer-motion` (v14.6.0) - Component animations and mobile menu transitions (`src/components/Header.tsx`, `src/app/page.tsx`)
- `gsap` (v3.15.0) & `@gsap/react` (v2.1.2) - High-performance timeline and ScrollTrigger pinning (`src/components/HorizontalScroll.tsx`)

## Configuration

- Environment variable schema outlined in `.env.example` and `.env.local.example`
- Key configs required:
- `next.config.js`: Configures remote image domains for Supabase Storage (`**.supabase.co`) and Unsplash (`images.unsplash.com`)
- `tailwind.config.js`: Custom color palette (`navy`, `blue`, `yellow`, `off-white`, `cream`), spacing scales, and custom font definitions
- `tsconfig.json`: Compiler options with path mapping `@/* -> ./src/*`

## Platform Requirements

- Node.js >= 18.0.0
- npm package manager
- Vercel or Node.js server capable of hosting Next.js 16 App Router with server actions support

<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

## Naming Patterns

- React Components: PascalCase (`src/components/ProjectInquiryForm.tsx`, `src/components/Header.tsx`)
- Server Actions & Lib Utilities: kebab-case (`src/app/actions/submit-inquiry.ts`, `src/lib/supabase-server.ts`)
- Next.js Route Files: Standard lowercase filenames (`page.tsx`, `layout.tsx`)
- React Component Functions: PascalCase matching the component/route domain (`export default function Header()`, `export default function CaseStudyPage()`)
- Server Actions and Utilities: camelCase verb phrases (`submitInquiry()`, `createClient()`, `handleSubmit()`)
- Local variables and state: camelCase (`mobileMenuOpen`, `leadData`, `currentYear`)
- Static constants: camelCase or UPPER_CASE (`navLinks`, `footerLinks`, `RESEND_API_KEY`)
- Interfaces & Type Aliases: PascalCase (`SegmentProps`, `RootLayoutProps`)

## Code Style

- Indentation: 2 spaces
- Quotes: Single quotes for JavaScript/TypeScript strings (`'use client'`, `'next/link'`)
- Semicolons: Standard semicolons enforced
- Tailwind CSS: Class names concatenated in JSX `className` props, adhering to mobile-first responsive utility prefixes (`md:flex`, `lg:grid-cols-5`)
- Tool: ESLint v8.55.0 with `eslint-config-next` v16.4.2
- Command: `npm run lint`

## Import Organization

- `@/*` maps directly to `./src/*` as configured in `tsconfig.json`

## Error Handling

- **Server Actions:** Return an explicit status object rather than letting errors bubble unhandled:
- **Dynamic RSC Routes:** Guard against null records or query errors using Next.js `notFound()`:
- **Client Forms:** Track error status state (`'idle' | 'submitting' | 'success' | 'error'`) and display localized error feedback.

## Logging

- Native Node.js/Browser `console`
- Errors logged at call sites or caught at framework boundaries; no external logging transport currently attached.

## Comments

- Section delimiters in JSX layouts (`{/* Feature sections */}`, `{/* Mobile Menu */}`)
- Explanations for non-trivial animation timelines or third-party workarounds (e.g., GSAP ScrollTrigger cleanups in `src/components/HorizontalScroll.tsx`)
- Minimal JSDoc comments observed; typing is primarily handled directly via TypeScript interfaces and type annotations.

## Function Design

- Presentational components remain concise (mostly 30–120 lines).
- Direct prop destructuring with typed interfaces:
- JSX elements for components
- Plain serializable objects `{ success: boolean, error?: string }` for Server Actions

## Module Design

- Default exports for React components and App Router route pages
- Named exports for Server Actions (`export async function submitInquiry`) and utilities (`export function createClient`)
- Not used. Modules are directly imported from their concrete file paths (`@/components/Header`, `@/lib/supabase-server`).

<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

## System Overview

```text

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

- Server Components by default for static content and data fetching (`src/app/about/page.tsx`, `src/app/work/[slug]/page.tsx`)
- Explicit `'use client'` directives for animated UI and forms (`src/components/Header.tsx`, `src/components/ProjectInquiryForm.tsx`, `src/app/page.tsx`)
- Server Actions for form mutation (`src/app/actions/submit-inquiry.ts`), eliminating traditional dedicated API route handlers
- Token-based design styling using Tailwind CSS with custom CSS variables (`src/app/globals.css`, `tailwind.config.js`)

## Layers

- Purpose: Interactive navigation, animations, client-side validation, form submission feedback
- Location: `src/components/` and client pages
- Contains: React components with framer-motion, GSAP, and state hooks
- Depends on: Server Actions (`submitInquiry`), Tailwind utilities
- Used by: End users in browser
- Purpose: Route resolution, layout composition, server-side data fetching
- Location: `src/app/`
- Contains: App router pages, layouts, dynamic segment templates (`[slug]`)
- Depends on: `src/lib/supabase-server.ts`, `src/components/`
- Used by: Next.js HTTP server engine
- Purpose: Form handling, database insertion, notification dispatch
- Location: `src/app/actions/`
- Contains: Server Actions marked with `'use server'`
- Depends on: `src/lib/supabase-server.ts`, Resend SDK
- Used by: `src/components/ProjectInquiryForm.tsx`
- Purpose: External client instantiation and database abstraction
- Location: `src/lib/`
- Contains: Supabase client provider (`src/lib/supabase-server.ts`)
- Depends on: `@supabase/supabase-js`, environment variables
- Used by: Server pages and server actions

## Data Flow

### Primary Request Path (Lead Inquiry Submission)

### Secondary Flow Name (Case Study Dynamic Fetch)

- Component-level React `useState` for local interactive state (`src/components/Header.tsx`, `src/components/ProjectInquiryForm.tsx`)
- Server-driven database state in Supabase (`leads`, `projects`)

## Key Abstractions

- Purpose: Standardized return contract `{ success: boolean, error?: string }` for mutations
- Examples: `src/app/actions/submit-inquiry.ts`
- Pattern: Discriminated result payload
- Purpose: Centralized credential resolution and client creation for server contexts
- Examples: `src/lib/supabase-server.ts`
- Pattern: Factory function

## Entry Points

- Location: `src/app/layout.tsx`
- Triggers: All inbound HTTP requests to any route
- Responsibilities: Mounts font CDN, renders `<Header />`, wraps children in `<main>`, renders `<Footer />`
- Location: `src/app/page.tsx`
- Triggers: Route `/`
- Responsibilities: Main agency landing page presenting hero, service overviews, and contact links

## Architectural Constraints

- **Next.js Version Constraints:** Running Next.js 16.4.2 (`package.json`) where route `params` are asynchronous Promises in App Router pages.
- **Global State:** No Redux or global context store; architecture relies on React Server Components for data propagation and local hooks for interactivity.
- **Authentication:** No authentication boundary currently wraps `/admin` or `/admin/leads`.

## Anti-Patterns

### Header & Footer Redundancy

### Synchronous Next 16 Route Params

### Dead Alternate Files

## Error Handling

- Server Action returns `{ success: false, error: 'Database error' }` instead of throwing unhandled exceptions (`src/app/actions/submit-inquiry.ts:26`)
- `notFound()` trigger for missing database rows in dynamic routes (`src/app/work/[slug]/page.tsx:13`)

## Cross-Cutting Concerns

<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.agents/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-fast` for a trivial task inline, with no subagents and no PLAN.md
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
