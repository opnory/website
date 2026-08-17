# Opnory Website

Production-ready marketing website for **Opnory** — AI Service Desk for Modern Teams.

Built with React, TypeScript, Vite, and modern CSS. Designed for deployment to Cloudflare Pages.

## Features

- **Static site** — No backend, no database, no paid services
- **TypeScript** — Full type safety
- **React 18** — Modern React with concurrent features
- **Vite** — Fast development and optimized production builds
- **Modern CSS** — Custom properties, fluid typography, responsive grid/flexbox
- **Accessible** — Semantic HTML, keyboard navigation, focus states, reduced motion support
- **SEO-ready** — Meta tags, Open Graph, Twitter cards, JSON-LD structured data, sitemap, robots.txt
- **Performance optimized** — Small bundle size, no heavy dependencies, CSS-based animations

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Output is written to `dist/` — ready for static hosting.

## Project Structure

```
├── public/
│   ├── favicon.svg          # App icon
│   ├── og-image.svg         # Open Graph image
│   ├── robots.txt           # Crawler directives
│   └── sitemap.xml          # Site map
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with chat preview
│   │   ├── Product.tsx      # Four core capabilities
│   │   ├── HowItWorks.tsx   # Workflow visualization
│   │   ├── Examples.tsx     # Three example interactions
│   │   ├── Security.tsx     # Security principles & architecture
│   │   ├── Integrations.tsx # Integration categories
│   │   ├── Deployment.tsx   # Deployment & ownership
│   │   ├── EarlyAccess.tsx  # CTA section with email reveal
│   │   └── Footer.tsx       # Site footer
│   ├── styles/
│   │   └── global.css       # Design tokens, utilities, component styles
│   ├── App.tsx              # Root component with SEO metadata
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── .gitignore
```

## Design System

### Colors (CSS Custom Properties)

| Token | Dark | Light |
|-------|------|-------|
| `--color-bg` | `#0a0b0d` | `#fafbfc` |
| `--color-bg-elevated` | `#111316` | `#ffffff` |
| `--color-border` | `#24282e` | `#d0d5dd` |
| `--color-text-primary` | `#e6e8eb` | `#101828` |
| `--color-text-secondary` | `#8b9199` | `#475467` |
| `--color-accent` | `#00d4a8` | `#00996e` |

Dark mode is default; light mode via `prefers-color-scheme`.

### Spacing Scale

`--space-xs` through `--space-4xl` (0.25rem – 6rem)

### Typography

- System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`)
- Mono: `'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace`
- Fluid type scale via custom properties

## Cloudflare Pages Deployment

### Via Dashboard

1. Push this repository to GitHub/GitLab
2. In Cloudflare Pages, **Create a project** → Connect to Git
3. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 (or 20)
4. Deploy

### Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy dist --project-name=opnory
```

### Environment Variables

No environment variables required for the static site.

### Custom Domain

Add `opnory.com` as a custom domain in Cloudflare Pages → Settings → Custom Domains.

## SEO & Metadata

The site includes:

- **Title:** `Opnory — AI Service Desk for Modern Teams`
- **Description:** `Opnory provides company-aware IT support, governed access requests, and self-service automation where employees already work.`
- **Canonical URL:** `https://opnory.com`
- **Open Graph** tags for social sharing
- **Twitter Card** tags
- **JSON-LD** structured data (SoftwareApplication)
- **robots.txt** and **sitemap.xml** in `public/`

Update `lastmod` in `public/sitemap.xml` when content changes.

## Accessibility

- Semantic HTML5 elements (`header`, `main`, `section`, `article`, `footer`, `nav`)
- Heading hierarchy (h1 → h2 → h3)
- Keyboard-navigable interactive elements
- Visible `:focus-visible` states
- WCAG AA contrast ratios
- `prefers-reduced-motion` respected
- ARIA labels where needed
- Descriptive link/button text

## Performance

- **Bundle size:** ~53 KB gzipped JS, ~3.9 KB gzipped CSS
- **No external fonts** — system font stack
- **No heavy animation libraries** — CSS transitions/keyframes only
- **SVG icons inline** — no icon font requests
- **Code splitting** via Vite (single chunk for this SPA)
- **Source maps** enabled for debugging

Target: Lighthouse Performance ≥ 90

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |

## License

© 2026 Opnory. All rights reserved.