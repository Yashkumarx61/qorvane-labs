# Qorvane Labs - Enterprise Digital Engineering Platform

Production-ready digital engineering platform for Qorvane Labs, featuring interactive project estimation engines, developer pod configurators, a floating AI assistant widget, and dynamic case study portfolio showcases. Built using Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.

## System Architecture Overview

The application follows Next.js App Router patterns, enforcing strict type-safety, component modularity, and server-side route boundary isolation.

### Key Architectural Layers

- `app/`: Next.js 14 App Router routes, page views, and API endpoints.
  - `app/api/chat/route.ts`: Edge-compatible serverless handler with Zod request schema validation, IP rate-limiting, and OpenAI API integration.
  - `app/contact/page.tsx`: Interactive multi-step project intake form supporting dual currency (INR/USD) calculations.
  - `app/portfolio/page.tsx`: Filterable client case study showcase with deep-dive technical architecture popups.
  - `app/solutions/page.tsx`: Commercial engagement model breakdown featuring the dedicated pod configurator.
  - `app/about/page.tsx`: Company overview highlighting engineering culture and operations.
- `components/`: Reusable UI modules and global application components.
  - `components/AiChatWidget.tsx`: Floating AI Assistant chatbot widget with Framer Motion transitions, starter prompts, and markdown rendering.
  - `components/Header.tsx`: Responsive navigation header with mega-menu service dropdowns and theme toggler.
  - `components/Footer.tsx`: Global footer directory containing site navigation, compliance badges, and contact details.
  - `components/ProjectEstimator.tsx`: Interactive project scope, module, and velocity estimator.
  - `components/PodConfigurator.tsx`: Interactive team pod composition builder.
- `data/`: Single sources of truth for contact details, portfolio case studies, and engineering services.
  - `data/contactData.ts`: Centralized site contact configuration (`siteContact`).
- `.github/workflows/ci.yml`: Automated GitHub Actions pipeline executing dependency installation, ESLint checks, and production builds.

## Technology Stack

- Framework: Next.js 14.2 (App Router)
- Language: TypeScript 5.7
- UI Library: React 18.3
- Styling: Tailwind CSS 3.4 + CSS Custom Variables
- State & Theme: `next-themes` (Dark/Light mode support)
- Motion & Animation: Framer Motion 11.18
- Icons: Lucide React
- Schema Validation: Zod 3.24
- Continuous Integration: GitHub Actions

## Single Source of Truth Configuration

All global contact details, official communication channels, and address records are managed centrally in `data/contactData.ts`:

- Official Email: `qorvanelabs@gmail.com`
- Official Phone / WhatsApp: `+91 9053088708`
- Office Address: Near IT Park, Sahastradhara Road, Dehradun, Uttarakhand 248013, India

## Getting Started

### Prerequisites

- Node.js version 18.17.0 or higher
- npm version 9.0.0 or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Yashkumarx61/qorvane-labs.git
cd qorvane-labs
npm install
```

### Local Development Server

Run the development server on port 3001:

```bash
npm run dev
```

Access the application in your browser at `http://localhost:3001`.

### Production Build & Type Checking

To compile the production build and verify TypeScript type safety:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

### Code Quality & Linting

To run static analysis and ESLint verification:

```bash
npm run lint
```

## Security & Hardening Controls

- Input Validation: All API request payloads are validated against strict Zod schemas.
- Abuse Throttling: Serverless endpoints enforce in-memory IP sliding-window rate limiting.
- HTTP Defense Headers: `next.config.mjs` configures Strict-Transport-Security (HSTS), Content-Security-Policy (CSP), X-Frame-Options (SAMEORIGIN), X-Content-Type-Options (nosniff), and Referrer-Policy.
- Secrets Isolation: Environment variables containing API keys (e.g. `OPENAI_API_KEY`) are kept strictly on the server execution boundary.
- Anchor Security: All outgoing external links enforce `target="_blank"` and `rel="noopener noreferrer"`.

## Continuous Integration Pipeline

The repository includes a automated GitHub Actions workflow (`.github/workflows/ci.yml`) triggered on pushes and pull requests to `main`. The pipeline runs on `ubuntu-latest` and executes:

1. Code checkout and Node.js environment setup.
2. Cached dependency installation via `npm ci`.
3. ESLint static analysis (`npm run lint`).
4. Next.js production build compilation (`npm run build`).

## License

Copyright (c) Qorvane Labs LLP. All rights reserved.
