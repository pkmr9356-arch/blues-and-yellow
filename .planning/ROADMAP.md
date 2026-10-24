# Roadmap: Blues&Yellow

## Overview

Stabilize and elevate the Blues&Yellow agency web platform by addressing critical security vulnerabilities and Next.js 16 functional breakages first (v1.0), followed by an end-to-end UI/UX Pro Max upgrade (v1.1) addressing design tokens, typography, accessibility, missing legal routes, component consolidation, and homepage storytelling.

## Milestones

- [x] **Milestone v1.0: Foundation, Security & Stability** (Phases 1-4 completed 2026-10-24)
- [x] **Milestone v1.1: UI/UX & Frontend Quality Implementation** (Phases 5-9 completed 2026-10-24)
- [x] **Milestone v1.2: Complete Premium Website Redesign & Quality Recovery** (Phases 10-13 completed 2026-10-24)

## Phases (Milestone v1.2)

- [x] **Phase 10: Creative Direction, Hero Redesign & Protected Horizontal-Scroll Elevation** - Transform hero into an editorial sentence-as-layout composition; preserve and polish the protected GSAP horizontal scroll.
- [x] **Phase 11: Site-Wide Editorial Redesign & Slop Elimination** - Elevate Services, Portfolio, About, Insights, and Contact routes; eliminate card grids, rest shadows, and generic marketing copy.
- [x] **Phase 12: Footer Defect Remediation & Open License Compliance** - Correct media credit license hyperlinks, complete service directory navigation, and achieve WCAG 2.1 AA contrast compliance.
- [x] **Phase 13: End-to-End Verification, Performance & Responsive QA** - Run build, ESLint, Taste Skill linter & inspector (390px, 768px, 1440px), and verify visual fidelity.

## Phases (Milestone v1.1)

- [x] **Phase 5: Design Tokens & Typography Foundation** - Consolidate token architecture, define missing CSS variables, and activate Erode typography in Tailwind.
- [x] **Phase 6: Accessibility, Navigation & Route Integrity** - Fix mobile navigation a11y, header logo contrast, form error announcements, and add privacy/terms legal routes.
- [x] **Phase 7: Component Consolidation & GSAP Horizontal Scroll** - Update ServicesGrid, replace beverage copy in HorizontalScroll with authentic agency copy, and improve case study showcases.
- [x] **Phase 8: Homepage & Service Pages UX Elevation** - Redesign homepage flow with elevated hero, agency pillars, integrated ServicesGrid, HorizontalScroll, and high-conversion CTAs.
- [x] **Phase 9: Comprehensive Verification & Quality Gates** - Validate token coverage, TypeScript types, Next.js production build, and generate final report.

## Phase Details (v1.1)

### Phase 5: Design Tokens & Typography Foundation
**Goal**: Resolve all undefined CSS variables, harmonize Tailwind and CSS custom properties, and activate Erode typography.
**Requirements**: [TOK-01, TYP-01]
**Success Criteria**:
  1. All `var(--navy)`, `var(--blue)`, `var(--border)`, etc. references resolve to verified brand hex codes in `globals.css`.
  2. Tailwind config provides `font-serif` / `font-display` mapped to `Erode` with sensible sans fallbacks.
  3. No broken button backgrounds or unstyled borders caused by invalid CSS variable resolution.

### Phase 6: Accessibility, Navigation & Route Integrity
**Goal**: Ensure WCAG AA compliance for header/logo contrast, accessible mobile drawer navigation, form error announcements, and valid legal routes.
**Requirements**: [A11Y-01, A11Y-02, ROUT-04, LEG-01]
**Success Criteria**:
  1. Header logo meets WCAG 2.1 AA contrast requirements against light ground.
  2. Mobile navigation provides `aria-expanded`, `aria-controls`, and `Escape` key dismissal.
  3. Inquiry form announces submission errors via `role="alert"` and marks invalid inputs with `aria-invalid`.
  4. Routes `/privacy-policy` and `/terms` exist and render accurate agency policy and terms content.
  5. All service subpage CTA buttons use Next.js `<Link>` instead of `<a href>`.

### Phase 7: Component Consolidation & GSAP Horizontal Scroll
**Goal**: Modernize orphaned components, eliminate beverage placeholder text, and integrate real agency capabilities.
**Requirements**: [COMP-01, COMP-02, WORK-01]
**Success Criteria**:
  1. `ServicesGrid.tsx` is updated with clean token classes and interactive card styling.
  2. `HorizontalScroll.tsx` text replaced with authentic agency capabilities narrative; reduced-motion fallback verified.
  3. `/work` portfolio gracefully handles empty database states with demonstration preview cards.

### Phase 8: Homepage & Service Pages UX Elevation
**Goal**: Transform the landing page into a cohesive, responsive, high-converting digital agency presentation.
**Requirements**: [HOME-01, HOME-02, HOME-03]
**Success Criteria**:
  1. Homepage features an elevated hero with Erode typography, agency pillars, integrated ServicesGrid, and HorizontalScroll.
  2. Clear CTA placement and mobile-first responsive design across 375px, 768px, and 1280px+ breakpoints.
  3. Animations leverage installed Framer Motion and GSAP without layout shifts or performance jank.

### Phase 9: Comprehensive Verification & Quality Gates
**Goal**: Verify all fixes across the site, confirm zero regressions, and run build checks.
**Requirements**: [VERIF-01]
**Success Criteria**:
  1. Zero unresolved CSS variable references in UI.
  2. TypeScript compilation passes cleanly.
  3. Next.js production build succeeds.
  4. Final execution report delivered.

