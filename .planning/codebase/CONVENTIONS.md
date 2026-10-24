# Coding Conventions

**Analysis Date:** 2026-10-24

## Naming Patterns

**Files:**
- React Components: PascalCase (`src/components/ProjectInquiryForm.tsx`, `src/components/Header.tsx`)
- Server Actions & Lib Utilities: kebab-case (`src/app/actions/submit-inquiry.ts`, `src/lib/supabase-server.ts`)
- Next.js Route Files: Standard lowercase filenames (`page.tsx`, `layout.tsx`)

**Functions:**
- React Component Functions: PascalCase matching the component/route domain (`export default function Header()`, `export default function CaseStudyPage()`)
- Server Actions and Utilities: camelCase verb phrases (`submitInquiry()`, `createClient()`, `handleSubmit()`)

**Variables:**
- Local variables and state: camelCase (`mobileMenuOpen`, `leadData`, `currentYear`)
- Static constants: camelCase or UPPER_CASE (`navLinks`, `footerLinks`, `RESEND_API_KEY`)

**Types:**
- Interfaces & Type Aliases: PascalCase (`SegmentProps`, `RootLayoutProps`)

## Code Style

**Formatting:**
- Indentation: 2 spaces
- Quotes: Single quotes for JavaScript/TypeScript strings (`'use client'`, `'next/link'`)
- Semicolons: Standard semicolons enforced
- Tailwind CSS: Class names concatenated in JSX `className` props, adhering to mobile-first responsive utility prefixes (`md:flex`, `lg:grid-cols-5`)

**Linting:**
- Tool: ESLint v8.55.0 with `eslint-config-next` v16.4.2
- Command: `npm run lint`

## Import Organization

**Order:**
1. Runtime Directives (`'use client'` or `'use server'`)
2. Framework & React core (`react`, `next/link`, `next/navigation`)
3. Third-party dependencies (`framer-motion`, `gsap`, `resend`, `@supabase/supabase-js`)
4. Internal Aliased Modules (`@/components/...`, `@/lib/...`, `@/app/actions/...`)
5. Global Stylesheets (`@/app/globals.css`)

**Path Aliases:**
- `@/*` maps directly to `./src/*` as configured in `tsconfig.json`

## Error Handling

**Patterns:**
- **Server Actions:** Return an explicit status object rather than letting errors bubble unhandled:
  ```typescript
  if (error) {
    return { success: false, error: 'Database error' };
  }
  return { success: true };
  ```
- **Dynamic RSC Routes:** Guard against null records or query errors using Next.js `notFound()`:
  ```typescript
  if (error || !project) {
    notFound();
  }
  ```
- **Client Forms:** Track error status state (`'idle' | 'submitting' | 'success' | 'error'`) and display localized error feedback.

## Logging

**Framework:**
- Native Node.js/Browser `console`

**Patterns:**
- Errors logged at call sites or caught at framework boundaries; no external logging transport currently attached.

## Comments

**When to Comment:**
- Section delimiters in JSX layouts (`{/* Feature sections */}`, `{/* Mobile Menu */}`)
- Explanations for non-trivial animation timelines or third-party workarounds (e.g., GSAP ScrollTrigger cleanups in `src/components/HorizontalScroll.tsx`)

**JSDoc/TSDoc:**
- Minimal JSDoc comments observed; typing is primarily handled directly via TypeScript interfaces and type annotations.

## Function Design

**Size:**
- Presentational components remain concise (mostly 30–120 lines).

**Parameters:**
- Direct prop destructuring with typed interfaces:
  ```typescript
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  })
  ```

**Return Values:**
- JSX elements for components
- Plain serializable objects `{ success: boolean, error?: string }` for Server Actions

## Module Design

**Exports:**
- Default exports for React components and App Router route pages
- Named exports for Server Actions (`export async function submitInquiry`) and utilities (`export function createClient`)

**Barrel Files:**
- Not used. Modules are directly imported from their concrete file paths (`@/components/Header`, `@/lib/supabase-server`).

---

*Convention analysis: 2026-10-24*
