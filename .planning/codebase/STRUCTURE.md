# Codebase Structure

**Analysis Date:** 2026-10-24

## Directory Layout

```
Blues&Yellow/
├── .planning/                  # GSD planning directory & documentation
│   └── codebase/               # Codebase maps and architectural documentation
├── .taste-skill/               # Design exploration data and direction specifications
│   ├── direction.json          # Selected brand direction metadata
│   └── inspect/                # Visual inspection outputs
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── about/              # About agency page
│   │   │   └── page.tsx
│   │   ├── actions/            # Server actions
│   │   │   └── submit-inquiry.ts
│   │   ├── admin/              # Admin dashboard
│   │   │   ├── page.tsx
│   │   │   └── leads/          # Admin leads viewer
│   │   │       └── page.tsx
│   │   ├── contact/            # Contact page
│   │   │   └── page.tsx
│   │   ├── insights/           # Blog and insights articles
│   │   │   ├── page.tsx
│   │   │   └── [slug]/         # Dynamic article detail page
│   │   │       └── page.tsx
│   │   ├── services/           # Services catalog & individual service routes
│   │   │   ├── page.tsx
│   │   │   ├── digital-strategy/
│   │   │   │   └── page.tsx
│   │   │   ├── maintenance/
│   │   │   │   └── page.tsx
│   │   │   ├── mobile-app-development/
│   │   │   │   └── page.tsx
│   │   │   ├── seo/
│   │   │   │   └── page.tsx
│   │   │   ├── web-applications/
│   │   │   │   └── page.tsx
│   │   │   └── website-development/
│   │   │       └── page.tsx
│   │   ├── start-a-project/    # Project inquiry intake page
│   │   │   └── page.tsx
│   │   ├── work/               # Portfolio case studies
│   │   │   ├── page.tsx
│   │   │   └── [slug]/         # Dynamic project case study page
│   │   │       └── page.tsx
│   │   ├── globals.css         # Canonical design tokens & Tailwind imports
│   │   ├── layout.tsx          # App root layout
│   │   └── page.tsx            # Agency landing page
│   ├── components/             # Reusable React components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HorizontalScroll.tsx
│   │   ├── ProjectInquiryForm.tsx
│   │   └── ServicesGrid.tsx
│   └── lib/                    # Shared libraries and utilities
│       └── supabase-server.ts  # Supabase client instantiation
├── next.config.js              # Next.js framework configuration
├── package.json                # Project dependencies and script declarations
├── postcss.config.js           # PostCSS Tailwind plugin configuration
├── tailwind.config.js          # Tailwind styling and theme customization
└── tsconfig.json               # TypeScript configuration with path aliases
```

## Directory Purposes

**`src/app/`:**
- Purpose: Application routing and page definitions via Next.js App Router conventions
- Contains: `layout.tsx`, `page.tsx`, nested route directories, and Server Actions
- Key files: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

**`src/app/actions/`:**
- Purpose: Server Actions for processing mutations on the server side
- Contains: TypeScript modules marked with `'use server'`
- Key files: `src/app/actions/submit-inquiry.ts`

**`src/components/`:**
- Purpose: Reusable presentation and interactive components
- Contains: Header, navigation, footer, interactive forms, animation sections
- Key files: `src/components/Header.tsx`, `src/components/ProjectInquiryForm.tsx`

**`src/lib/`:**
- Purpose: Backend service wrappers and utility helpers
- Contains: Database clients, SDK configurations, shared helpers
- Key files: `src/lib/supabase-server.ts`

**`.planning/`:**
- Purpose: GSD development planning, specifications, and codebase maps
- Contains: Markdown files documenting requirements, architecture, and task states

## Key File Locations

**Entry Points:**
- `src/app/layout.tsx`: Root layout mounted for all pages
- `src/app/page.tsx`: Root home page for the agency

**Configuration:**
- `next.config.js`: Next.js image domain configurations
- `tailwind.config.js`: Tailwind theme extensions, colors, font families
- `tsconfig.json`: TypeScript compiler options and `@/*` path mapping

**Core Logic:**
- `src/app/actions/submit-inquiry.ts`: Lead validation, Supabase persistence, Resend notification
- `src/lib/supabase-server.ts`: Supabase client initialization factory

**Testing:**
- Not configured: No test directory or test suites currently present

## Naming Conventions

**Files:**
- React Components: PascalCase (`Header.tsx`, `ProjectInquiryForm.tsx`)
- Server Actions & Utilities: kebab-case (`submit-inquiry.ts`, `supabase-server.ts`)
- Next.js Routing conventions: lowercase standard filenames (`page.tsx`, `layout.tsx`)

**Directories:**
- Route folders: kebab-case (`start-a-project`, `digital-strategy`, `mobile-app-development`)
- Dynamic routes: bracketed slug (`[slug]`)
- Organization folders: lowercase (`components`, `actions`, `lib`)

## Where to Add New Code

**New Feature / Route:**
- Primary code: Create new route directory in `src/app/<feature-name>/page.tsx`
- Form Actions: Place backend mutation in `src/app/actions/<action-name>.ts`
- Tests: When testing framework is added, colocate tests as `page.test.tsx` or in `__tests__/`

**New Component/Module:**
- Shared UI component: Place in `src/components/<ComponentName>.tsx`
- Page-specific subcomponent: Place either in `src/components/` or a localized folder under the route

**Utilities:**
- Shared clients or helpers: Place in `src/lib/<utility-name>.ts`

## Special Directories

**`.next/`:**
- Purpose: Next.js compiler cache and production build artifacts
- Generated: Yes
- Committed: No

**`.taste-skill/`:**
- Purpose: Design exploration data, aesthetic tokens, and inspection assets
- Generated: Yes
- Committed: Yes

---

*Structure analysis: 2026-10-24*
