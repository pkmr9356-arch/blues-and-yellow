# Blues&Yellow

> A modern digital agency and web technology studio demonstration platform built with Next.js 16, React 18, TypeScript, Tailwind CSS, GSAP, Framer Motion, Supabase, and Resend.

---

## Table of Contents

- [Project Status](#project-status)
- [Feature Highlights](#feature-highlights)
- [Technology Stack](#technology-stack)
- [Architecture Overview](#architecture-overview)
- [Implemented Routes](#implemented-routes)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [Third-Party Integrations](#third-party-integrations)
  - [Supabase Setup](#supabase-setup)
  - [Resend Email Setup](#resend-email-setup)
- [Deployment Notes](#deployment-notes)
- [Security Architecture](#security-architecture)
- [Media Attributions & Acknowledgments](#media-attributions--acknowledgments)
- [License](#license)
- [Demonstration Disclaimer](#demonstration-disclaimer)

---

## Project Status

**Blues&Yellow is a demonstration and reference architecture platform.** It is designed to model a premium digital agency web experience, complete with editorial layouts, high-performance animations, form intake pipelines, and security proxy gating.

The portfolio case studies, benchmark statistics, and client quotes contained within the project represent reference architectural showcases and demonstrations rather than historical commercial client contracts.

---

## Feature Highlights

- **Editorial "Sentence-as-Layout" Hero**: The homepage hero integrates typography as structure with an inline 16:9 media aperture video loop, moving away from generic centered landing-page templates.
- **GSAP ScrollTrigger Horizontal Pin**: A dedicated, pinning horizontal-scroll section in `src/components/HorizontalScroll.tsx` featuring an interactive capabilities narrative, responsive mobile fallback, and automatic `prefers-reduced-motion` detection.
- **Framer Motion Micro-Interactions**: Smooth drawer transitions and modal animations in `src/components/Header.tsx` and interactive callouts.
- **8 Dedicated Capability Pages**: In-depth service offerings with structured technical summaries, deliverables, and conversion funnels.
- **Dynamic Portfolio Showcase**: App Router dynamic segments (`/work/[slug]`) with asynchronous parameter unwrapping conforming to Next.js 16 conventions.
- **Unified Lead Intake & Anti-Spam Pipeline**: Client form validation via `src/components/ProjectInquiryForm.tsx` backed by server-side Zod validation, invisible bot honeypot filtering, and discriminated status feedback (`idle`, `submitting`, `success`, `error`).
- **Administrative Security Proxy**: Cryptographic session verification and fail-closed allowlist routing guarding `/admin` and `/admin/leads` via `src/proxy.ts`.
- **Self-Hosted Local Typography**: Locally served WOFF2 fonts (Erode display serif in 400, 500, 600, and 700 weights) and Inter via `next/font`, eliminating runtime layout shift (CLS < 0.01) and external CDN requests.

---

## Technology Stack

The application is built on the following verified dependencies from `package.json`:

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `16.4.2` | App Router, Server Components, Turbopack, Server Actions |
| **UI Library** | [React](https://react.dev/) / [React DOM](https://react.dev/) | `18.2.0` | Component rendering engine |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.3.0` | End-to-end type safety |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `3.4.1` | Utility-first design tokens and responsive classes |
| **Post-Processing** | PostCSS / Autoprefixer | `8.4.32` / `10.4.16` | CSS transformation pipeline |
| **Animation (Scroll)** | [GSAP](https://gsap.com/) & `@gsap/react` | `3.15.0` / `2.1.2` | High-performance ScrollTrigger pinning & timeline |
| **Animation (UI)** | [Framer Motion](https://www.framer.com/motion/) | `14.6.0` | Mobile drawer transitions & layout state animations |
| **Backend / Auth** | `@supabase/supabase-js` / `@supabase/ssr` | `2.39.0` / `0.12.7` | PostgreSQL database client and SSR cookie management |
| **Transactional Email** | [Resend](https://resend.com/) | `3.2.0` | Email dispatch for prospective lead inquiries |
| **Validation** | [Zod](https://zod.dev/) | `3.22.4` | Server Action schema validation & input sanitization |
| **Linting** | ESLint & `eslint-config-next` | `8.55.0` / `16.4.2` | Static code analysis |

---

## Architecture Overview

```text
├── public/
│   ├── images/              # Optimized photographs, webm loops, and credits.json
│   └── fonts/               # (Legacy/public asset assets)
├── src/
│   ├── app/                 # Next.js 16 App Router routes, layouts, and error boundaries
│   │   ├── (legal)/         # /privacy-policy, /terms
│   │   ├── actions/         # Next.js Server Actions ('use server')
│   │   ├── admin/           # Administrative portal and /admin/leads management
│   │   ├── fonts/           # Local Erode WOFF2 fonts (Regular, Medium, SemiBold, Bold)
│   │   ├── insights/        # Editorial articles and dynamic [slug] reader
│   │   ├── services/        # 8 dedicated service capability subpages
│   │   ├── work/            # Portfolio catalog and dynamic [slug] case study viewer
│   │   ├── globals.css      # Core brand CSS variables and Tailwind layers
│   │   ├── layout.tsx       # Root layout mounting persistent Header and Footer
│   │   └── page.tsx         # Homepage with editorial hero and horizontal scroll
│   ├── components/          # Reusable Client & Server components (Header, Footer, Forms)
│   ├── lib/                 # Supabase client provider and admin authorization guards
│   └── proxy.ts             # Next.js 16 Proxy (Middleware) guarding /admin routes
├── .planning/               # GSD project plans, architecture specifications, and verification
├── next.config.js           # Turbopack root definition and remote image domains
├── tailwind.config.js       # Brand color palette (navy, blue, yellow) and font tokens
└── tsconfig.json            # Path alias mapping (@/* -> ./src/*)
```

---

## Implemented Routes

All 21 App Router routes compile cleanly and have been validated against production builds:

- **Core & Intake**:
  - `/` — Agency homepage with editorial hero, agency pillars, and horizontal-scroll narrative
  - `/about` — Studio philosophy, team values, and engineering standards
  - `/contact` — Interactive lead capture form with status feedback
  - `/start-a-project` — Dedicated project scoping intake funnel
  - `/privacy-policy` — Data protection and privacy disclosures
  - `/terms` — Commercial terms of service
- **Capabilities & Services (`/services`)**:
  - `/services` — Complete service catalog
  - `/services/website-development` — Custom marketing websites and CMS platforms
  - `/services/web-applications` — High-throughput SaaS web applications
  - `/services/wordpress-development` — Headless and custom WordPress engineering
  - `/services/mobile-app-development` — Cross-platform iOS and Android apps
  - `/services/seo` — Technical SEO and organic growth engineering
  - `/services/digital-strategy` — Product roadmapping and technical architecture
  - `/services/maintenance` — Retained support, SLAs, and performance optimization
- **Portfolio & Case Studies (`/work`)**:
  - `/work` — Project directory with capability filters
  - `/work/[slug]` — Dynamic case study viewer (`/work/project-alpha`, `/work/project-beta`, `/work/project-gamma`)
- **Insights & Editorial (`/insights`)**:
  - `/insights` — Technical writing and engineering articles
  - `/insights/[slug]` — Dynamic article template (`/insights/scalable-web-apps`, `/insights/seo-best-practices`, `/insights/design-systems-scale`)
- **Administration & Security (`/admin`)**:
  - `/admin/login` — Administrator authentication portal
  - `/admin` — Protected administrative dashboard *(Requires verified admin session)*
  - `/admin/leads` — Protected lead management table *(Requires verified admin session)*

---

## Prerequisites

- **Node.js**: `>= 18.0.0` (Node.js 20+ LTS recommended)
- **Package Manager**: `npm` (`>= 9.0.0`)
- **Git**: For version control and deployment workflows

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pkmr9356-arch/blues-and-yellow.git
   cd blues-and-yellow
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

---

## Environment Configuration

Copy the example environment template to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your local credentials in `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Admin Allowlist (comma-separated emails permitted into /admin)
ADMIN_EMAILS=admin@example.com

# Resend Email API
RESEND_API_KEY=re_your_api_key

# Application Base URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> [!NOTE]
> Never commit `.env.local` or real API keys to version control. The repository's `.gitignore` automatically excludes all `.env*` files except `.env.example` and `.env.local.example`.

---

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Starts the Next.js local development server with Turbopack on `http://localhost:3000`.
- **`npm run build`**: Runs TypeScript type checking and generates an optimized production build using Turbopack.
- **`npm run start`**: Starts the Next.js production server (requires running `npm run build` first).
- **`npm run lint`**: Runs ESLint with flat config across `src/` to verify code quality.

---

## Third-Party Integrations

### Supabase Setup

The application uses Supabase for database persistence (`leads` table) and authentication for `/admin`. To enable real backend functionality:

1. **Database Schema**: Ensure the `leads` table exists in your Supabase project:
   ```sql
   create table public.leads (
     id uuid default gen_random_uuid() primary key,
     name text not null,
     email text not null,
     project_summary text not null,
     internal_notes text,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );
   ```

2. **Atomic Rate-Limiting Function**: The Server Action calls the stored procedure `submit_lead_atomic`. Ensure this PostgreSQL function is defined in your Supabase project or adjusted for your database setup.

3. **Admin User Role**: For users authorized to access `/admin`, assign the role `'admin'` in their Supabase Auth `app_metadata` (`raw_app_meta_data = '{"role": "admin"}'`), and ensure their email is listed in the `ADMIN_EMAILS` environment variable.

### Resend Email Setup

The lead submission Server Action sends notification emails via Resend:

1. Create an API key in your [Resend Dashboard](https://resend.com/).
2. Verify DNS records (DKIM, SPF, MX) for your sending domain (`bluesandyellow.agency` or your custom domain).
3. If sending from a different address, update the `from` and `to` properties in `src/app/actions/submit-inquiry.ts`.

---

## Deployment Notes

### Hosting on Vercel or Node.js Servers

1. **Connect Repository**: Link the repository to your Vercel project or deployment platform.
2. **Environment Variables**: Add all variables documented in `.env.example` to your platform's environment settings (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_EMAILS`, `RESEND_API_KEY`, and `NEXT_PUBLIC_SITE_URL`).
3. **Build Command**: `next build` (or `npm run build`).
4. **Output Directory**: `.next` (standard Next.js output).

> [!TIP]
> Next.js 16 emits an advisory during build regarding React 18 support deprecation in upcoming Next.js 17. React 18 is retained intentionally in this release to maintain compatibility with `@react-email/render` (used by Resend).

---

## Security Architecture

- **Fail-Closed Route Proxy**: `src/proxy.ts` evaluates all requests matching `/admin/:path*`. Unauthenticated requests or users without administrator privileges are rejected and redirected to `/admin/login`.
- **Server Action Validation**: `submitInquiry` in `src/app/actions/submit-inquiry.ts` sanitizes and validates all inputs using Zod prior to database operations.
- **Bot Honeypot Defense**: An invisible honeypot field (`bot_field`) discards spam automated submissions silently without executing database writes or sending outbound emails.
- **Defense in Depth**: Even if proxy routing is bypassed, individual administrative server pages (`src/app/admin/page.tsx` and `src/app/admin/leads/page.tsx`) independently verify session tokens and authorization via `isAuthorizedAdmin`.

---

## Media Attributions & Acknowledgments

All media assets in `public/images/` are documented with verified licenses in `public/images/credits.json`:

1. **"Modern architecture in Toronto"** (`modern-architecture-in-toronto.jpg`)
   - **Creator**: ThomasLendt
   - **License**: [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)
   - **Source**: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Modern_architecture_in_Toronto.jpg)

2. **"Domusstudio architecture office"** (`domusstudio-architecture-office.jpg`)
   - **Creator**: Mds08011
   - **License**: [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)
   - **Source**: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Domusstudio_architecture_office.jpg)

3. **"[View from Photographer's Studio]"** (`view-from-photographer-s-studio.jpg`)
   - **Creator**: Gustave Le Gray (1820–1884), French
   - **Date**: 1851–54
   - **License**: [Creative Commons Zero (CC0 1.0 Universal) / Public Domain](https://creativecommons.org/publicdomain/zero/1.0/)
   - **Source**: [The Metropolitan Museum of Art (Accession 1982.1184.28)](https://www.metmuseum.org/art/collection/search/283259)

4. **"Frederick Osterling Architectural Studio"** (`frederick-osterling-architectural-studio-2015-06-17.jpg`)
   - **Creator**: Cbaile19
   - **License**: [Creative Commons Zero (CC0 1.0 Universal) / Public Domain](https://creativecommons.org/publicdomain/zero/1.0/)
   - **Source**: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Frederick_Osterling_Architectural_Studio,_2015-06-17,_02.jpg)

5. **"Tbilisi life"** (`tbilisi-life-georgia-travel-canon-camera-eosm27.webm`)
   - **Creator**: Mostafameraji
   - **License**: [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)
   - **Source**: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tbilisi_life_Georgia_travel_canon_camera_eosm_27.webm)

*Notice: Material licensed under CC BY-SA 4.0 requires adaptations to be distributed under identical terms.*

**Typography**:
- **Erode**: Designed by Indian Type Foundry, distributed via Fontshare. Free for personal and commercial use under Fontshare terms.
- **Inter**: Designed by Rasmus Andersson, distributed under the [SIL Open Font License 1.1](https://openfontlicense.org/).

---

## License

No project-level open source license has been specified for the Blues&Yellow application codebase. All proprietary rights in the application code are retained.

Third-party libraries, dependencies, fonts, and media assets retain their respective licenses and terms as documented in `package.json` and `public/images/credits.json`.

---

## Demonstration Disclaimer

This repository is maintained as a demonstration platform and reference implementation. The company profiles, client case studies, benchmark statistics, and marketing copy are demonstration assets designed to illustrate full-stack architecture, animation engineering, and editorial design patterns. They do not constitute representations of active client relationships.
