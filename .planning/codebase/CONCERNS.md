# Codebase Concerns

**Analysis Date:** 2026-10-24

## Tech Debt

**Duplicate Root Page Variants:**
- Issue: Multiple prototype page files linger in the application directory alongside the main entry point
- Files: `src/app/page-final.tsx`, `src/app/page-refined.tsx`, `src/app/page-fixed.tsx`, `src/app/globals-fixed.css`
- Impact: Confuses developers on canonical implementation; increases maintenance overhead and dead code surface
- Fix approach: Delete obsolete variant files and keep only canonical `src/app/page.tsx` and `src/app/globals.css`

**Header & Footer Duplication:**
- Issue: `src/app/page.tsx` hardcodes an internal `<header>` and `<footer>` block even though `src/app/layout.tsx` already mounts global `<Header />` and `<Footer />` components
- Files: `src/app/page.tsx`, `src/app/layout.tsx`
- Impact: Results in duplicate navigation bars and footers rendered on the landing page
- Fix approach: Remove the duplicate `<header>` and `<footer>` JSX elements from `src/app/page.tsx`

**Version Alignment (React 18 vs Next 16):**
- Issue: `package.json` specifies Next.js `^16.4.2` with React `^18.2.0`. Next.js 15+ targets React 19 as its primary baseline
- Files: `package.json`
- Impact: Potential peer dependency warnings and mismatched typing in asynchronous server features
- Fix approach: Align React and Next.js dependencies or configure peer dependency resolution cleanly

## Known Bugs

**Asynchronous Route Params in Next.js 16:**
- Symptoms: Synchronous property access on dynamic segment `params` will throw warnings or runtime exceptions in Next.js 15/16
- Files: `src/app/work/[slug]/page.tsx:4`, `src/app/insights/[slug]/page.tsx:1`
- Trigger: Navigating to `/work/project-alpha` or `/insights/scalable-web-apps`
- Workaround: Update page props to `params: Promise<{ slug: string }>` and `await params` before accessing `slug`

**Broken Service Link (404 Error):**
- Symptoms: Clicking "WordPress & CMS" on the services overview results in a 404 page
- Files: `src/app/services/page.tsx:6`
- Trigger: Navigating to `/services/wordpress-development`
- Workaround: Either create `src/app/services/wordpress-development/page.tsx` or update the link to point to an active service route

**Dead Contact Form Submission:**
- Symptoms: Submitting the form on `/contact` performs a browser GET reload and fails to record leads or notify anyone
- Files: `src/app/contact/page.tsx:9-25`
- Trigger: User fills out form on `/contact` and clicks "Send Message"
- Workaround: Replace the inert `<form>` with the active `ProjectInquiryForm` component or wire `submitInquiry` into it

## Security Considerations

**Unauthenticated Admin Endpoints:**
- Risk: Anyone on the internet can navigate to `/admin` or `/admin/leads` and view all sensitive lead inquiries (names, email addresses, project descriptions)
- Files: `src/app/admin/page.tsx`, `src/app/admin/leads/page.tsx`
- Current mitigation: None
- Recommendations: Implement Next.js middleware or Supabase Auth session validation to protect `/admin/*` routes

**Missing Input Validation on Server Action:**
- Risk: Malformed or malicious payloads can be directly inserted into Supabase without sanitization; spam can trigger costly Resend emails
- Files: `src/app/actions/submit-inquiry.ts`
- Current mitigation: Basic HTML `required` attributes in client form
- Recommendations: Validate `FormData` server-side using `zod` (already in `package.json`) and enforce email syntax, character limits, and rate limiting

**Missing Rate Limiting / CAPTCHA on Public Inquiries:**
- Risk: Automated bots can spam the contact form, exhausting Resend quotas and spamming the business inbox
- Files: `src/app/actions/submit-inquiry.ts`, `src/components/ProjectInquiryForm.tsx`
- Current mitigation: None
- Recommendations: Introduce Turnstile/reCAPTCHA and IP-based rate limiting (e.g., Upstash Ratelimit)

## Performance Bottlenecks

**Unoptimized Remote Images:**
- Problem: `next.config.js` allows images from `images.unsplash.com` and `**.supabase.co`, but components frequently use unstyled divs instead of Next.js `<Image />` with `sizes` and responsive loading
- Files: `src/app/work/page.tsx`, `next.config.js`
- Cause: Missing responsive `next/image` usage
- Improvement path: Migrate image placeholders to `<Image />` components with defined aspect ratios and WebP/AVIF formats

**ScrollTrigger Script Overhead:**
- Problem: GSAP and ScrollTrigger are loaded alongside Framer Motion on the client side
- Files: `src/components/HorizontalScroll.tsx`
- Cause: Dual animation library bundle footprint
- Improvement path: Consolidate animation requirements or dynamically import heavy GSAP bundles only on viewports where horizontal scroll is enabled

## Fragile Areas

**Database Schema Coupling:**
- Files: `src/app/actions/submit-inquiry.ts`, `src/app/admin/leads/page.tsx`, `src/app/work/[slug]/page.tsx`
- Why fragile: Queries reference raw table names (`leads`, `projects`) and column names (`project_summary`, `challenge`, `approach`) without generated TypeScript database types (`supabase gen types typescript`)
- Safe modification: Any column rename or schema change in Supabase immediately causes silent runtime failures
- Test coverage: 0% test coverage

## Scaling Limits

**Transactional Email Quota:**
- Current capacity: Free/entry tier Resend sending limits
- Limit: Spikes in inquiry submissions can exhaust daily sending quotas
- Scaling path: Introduce queueing or background worker with webhook retry policy

## Dependencies at Risk

**React 18 vs Next 16:**
- Package: `react` (v18.2.0) vs `next` (v16.4.2)
- Risk: Next.js 16 App Router relies on modern React 19 primitives (e.g. async components, updated hooks)
- Impact: Incompatibility warnings or hydration issues
- Migration plan: Upgrade `react` and `react-dom` to `@19` when stable or pin Next.js to matching 14/15 LTS releases

## Missing Critical Features

**Git Repository Initialization:**
- Problem: Repository is not currently tracked by git (`fatal: not a git repository`)
- Blocks: Version control, change diffing, CI/CD automation, and GSD atomic commits

**SEO & OpenGraph Metadata:**
- Problem: No dynamic `generateMetadata` exports, OpenGraph tags, or structured schema data in `src/app/layout.tsx` or service pages
- Blocks: Search engine indexing, social link previews, and organic discoverability

**App Router Error & Loading States:**
- Problem: Absence of `error.tsx` or `loading.tsx` boundary files
- Blocks: Graceful error recovery when Supabase queries fail or network latency occurs

## Test Coverage Gaps

**Server Actions & Data Mutations:**
- What's not tested: `submitInquiry` action error handling, Supabase insertions, and Resend delivery failure branches
- Files: `src/app/actions/submit-inquiry.ts`
- Risk: Database schema changes or invalid credentials fail silently in production without regression alerts
- Priority: High

**Dynamic Routes & Not Found Transitions:**
- What's not tested: `CaseStudyPage` behavior when project slug does not exist
- Files: `src/app/work/[slug]/page.tsx`
- Risk: Unhandled database exceptions can cause HTTP 500 instead of HTTP 404
- Priority: Medium

---

*Concerns audit: 2026-10-24*
