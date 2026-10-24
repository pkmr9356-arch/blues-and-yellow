---
phase: 10-hero-redesign-horizontal-scroll
plan: 10-01
subsystem: frontend-hero
tags: [hero, editorial, typography, erode, inline-media, horizontal-scroll, gsap]
provides:
  - Editorial "sentence-as-layout" hero in src/app/page.tsx
  - Inline media aperture with looping studio video and poster frame
  - Asymmetric 12-column layout eliminating desktop void
  - Self-hosted Erode WOFF2 fonts and Next.js 16 font optimization
  - Next.js 16 src/proxy.ts migration protecting admin routes
  - Preserved GSAP HorizontalScroll design asset
actuals:
  tasks: 2
  commits: 0
tech-stack:
  patterns: [sentence-as-layout, inline-aperture, asymmetric-grid, fail-closed-proxy]
key-files:
  created:
    - src/proxy.ts
    - src/app/fonts/Erode-Regular.woff2
    - src/app/fonts/Erode-Medium.woff2
    - src/app/fonts/Erode-SemiBold.woff2
    - src/app/fonts/Erode-Bold.woff2
  modified:
    - src/app/page.tsx
    - src/app/layout.tsx
    - src/app/globals.css
    - tailwind.config.js
duration: 45min
completed: 2026-10-24
status: complete
---

# Phase 10: Plan 10-01 Summary

**Transformed the Blues&Yellow homepage hero into an editorial "sentence-as-layout" composition with an inline media aperture, while strictly protecting the GSAP horizontal-scroll section.**

## Accomplishments

1. **Editorial Sentence-as-Layout Hero**:
   - Replaced generic vertical stack and standalone 16:9 video container with an editorial headline: `<h1>Digital [aperture] experiences that move businesses</h1>`.
   - Embedded an inline media aperture (`h-[0.82em] w-[2.2em] sm:w-[2.5em] md:w-[2.7em]`) nested within display typography (`font-serif` Erode 700, tracking `-0.03em`), featuring the authentic looping studio video (`/images/tbilisi-life-georgia-travel-canon-camera-eosm27.webm`) and poster frame.
   - Built an asymmetric 12-column supporting layout: left 7 columns hold the proposition text and high-contrast pill CTAs (`/start-a-project`, `/work`); right 5 columns hold an architectural "Engineering standards" panel on a neutral `bg-slate-50` surface.
   - Eliminated the awkward desktop void, rest shadows, 1px box outlines, and generic eyebrow kicker tags per anti-slop guidelines.

2. **Protected GSAP Horizontal Scroll Asset**:
   - Strictly protected `src/components/HorizontalScroll.tsx` without changing its ScrollTrigger timeline, pinning parameters, text highlights, SVGs (`CurveIcon`, `StarIcon`, `WaveIcon`, `CircleIcon`), authentic agency narrative, mobile horizontal scroll, or `prefers-reduced-motion` accessible fallback.
   - Seamless background transition from clean white hero ground into `#0f172a` navy pinned scroll section.

3. **Font Self-Hosting & Lint Resolution**:
   - Self-hosted Erode WOFF2 fonts (weights 400, 500, 600, 700) in `src/app/fonts/`.
   - Replaced `<link>` CDN tags in `src/app/layout.tsx` with `next/font/local` and `next/font/google` (Inter).
   - `npm run lint` passes with 0 errors and 0 warnings.

4. **Next.js 16 Proxy Migration**:
   - Migrated `src/middleware.ts` to `src/proxy.ts` exporting `proxy()` function.
   - Completely resolved Next.js 16 deprecation warning while preserving cookie refresh, admin allowlist verification, redirects, and matcher `['/admin', '/admin/:path*']`.

5. **Multi-Viewport Responsive Verification**:
   - Verified at 390px (mobile), 768px (tablet), and 1440px (desktop) via Taste Skill inspector (`inspect.mjs`).
   - Headline fits cleanly on 2 lines across all viewports (`clamp(1.85rem, 5.2vw, 5.5rem)`).
   - Production build compiled 21 routes cleanly in 16.2s.
