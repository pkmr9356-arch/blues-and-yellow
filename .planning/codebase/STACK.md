# Technology Stack

**Analysis Date:** 2026-10-24

## Languages

**Primary:**
- TypeScript 5.3.0 - Full application code across UI components, server actions, and library utilities (`tsconfig.json`, `src/`)

**Secondary:**
- JavaScript (ES6+ / Node CJS) - Build and toolchain configuration files (`next.config.js`, `tailwind.config.js`, `postcss.config.js`)
- CSS3 / PostCSS - Utility stylesheets and custom design tokens (`src/app/globals.css`, `src/app/globals-fixed.css`)

## Runtime

**Environment:**
- Node.js v24.22.0 (target `ES2017` in `tsconfig.json`)

**Package Manager:**
- npm 11.19.1
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.4.2 - React fullstack framework utilizing App Router (`src/app/`), Server Components, and Server Actions (`src/app/actions/submit-inquiry.ts`)
- React 18.2.0 - UI rendering engine (`package.json`)
- React DOM 18.2.0 - Web rendering target (`package.json`)

**Testing:**
- Not installed - No test runner (Jest, Vitest, Cypress, Playwright) configured or installed in `package.json`

**Build/Dev:**
- Next CLI - `next dev`, `next build`, `next start`, `next lint` (`package.json`)
- Tailwind CSS 3.4.1 - Utility-first styling framework (`tailwind.config.js`)
- PostCSS 8.4.32 & Autoprefixer 10.4.16 - CSS processing pipeline (`postcss.config.js`)
- ESLint 8.55.0 (`eslint-config-next` 16.4.2) - Linting engine (`package.json`)

## Key Dependencies

**Critical:**
- `@supabase/supabase-js` (v2.39.0) & `@supabase/ssr` (v0.12.7) - Backend client and SSR helpers for database access (`src/lib/supabase-server.ts`)
- `resend` (v3.2.0) - Transactional email service for lead notifications (`src/app/actions/submit-inquiry.ts`)
- `zod` (v3.22.4) - TypeScript-first schema declaration and data validation (`package.json`)

**UI & Animation:**
- `framer-motion` (v14.6.0) - Component animations and mobile menu transitions (`src/components/Header.tsx`, `src/app/page.tsx`)
- `gsap` (v3.15.0) & `@gsap/react` (v2.1.2) - High-performance timeline and ScrollTrigger pinning (`src/components/HorizontalScroll.tsx`)

## Configuration

**Environment:**
- Environment variable schema outlined in `.env.example` and `.env.local.example`
- Key configs required:
  - `NEXT_PUBLIC_SUPABASE_URL`: Public Supabase API URL
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Public anonymous client API key
  - `SUPABASE_SERVICE_ROLE_KEY`: Privileged backend database service key
  - `RESEND_API_KEY`: API key for email delivery
  - `NEXT_PUBLIC_SITE_URL`: Base application URL for canonical linking

**Build:**
- `next.config.js`: Configures remote image domains for Supabase Storage (`**.supabase.co`) and Unsplash (`images.unsplash.com`)
- `tailwind.config.js`: Custom color palette (`navy`, `blue`, `yellow`, `off-white`, `cream`), spacing scales, and custom font definitions
- `tsconfig.json`: Compiler options with path mapping `@/* -> ./src/*`

## Platform Requirements

**Development:**
- Node.js >= 18.0.0
- npm package manager

**Production:**
- Vercel or Node.js server capable of hosting Next.js 16 App Router with server actions support

---

*Stack analysis: 2026-10-24*
