# IRB Consultant Limited — Website

Single-page marketing website for **I.R.B Consultant Limited**, a Hong Kong-registered consulting firm bridging software technology and financial advisory.

**Live:** [irbconsultant.com](https://irbconsultant.com)

---

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | React 18 | Component structure, zero bloat |
| Bundler | Vite 5 | Fast dev server, optimised build |
| Styles | Plain CSS (custom properties) | Full design token control, no framework overhead |
| Fonts | Saira — Google Fonts | Brand font |
| Hosting | GitHub Pages | Free, reliable, HTTPS via Let's Encrypt |
| CI/CD | GitHub Actions | Auto-deploy on every push to `main` |

No backend. No database. No external API dependencies.

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

---

## Project Structure

```
├── .github/
│   └── workflows/deploy.yml     Auto-deploy to GitHub Pages on push to main
├── .planning/                   Brand specs & design materials (not deployed)
│   ├── IRB_WEBSITE_BUILD_SPEC.md
│   └── IRB_DESIGN_MATERIALS.md
├── public/
│   ├── logo.png                 iR.B lettermark (2000×2000px, white bg)
│   ├── CNAME                    Custom domain: irbconsultant.com
│   ├── robots.txt               Allows all crawlers including AI bots
│   ├── sitemap.xml              Single-URL sitemap for SEO
│   └── llms.txt                 Structured summary for LLM crawlers (llmstxt.org)
├── src/
│   ├── App.jsx                  Root: assembles sections + scroll-reveal observer
│   ├── main.jsx                 React entry point
│   ├── index.css                All design tokens + component styles
│   └── components/
│       ├── Nav.jsx              Sticky nav, scroll opacity, mobile hamburger
│       ├── Hero.jsx             Split layout: headline + floating service cards
│       ├── Services.jsx         Three numbered service cards
│       ├── About.jsx            Dark charcoal band: pull quote + stat blocks
│       ├── Contact.jsx          Two contact cards with mailto links
│       └── Footer.jsx           Copyright footer
├── index.html                   HTML shell: meta, Open Graph, JSON-LD, Saira font
├── vite.config.js
└── package.json
```

---

## Deployment

Every push to `main` triggers GitHub Actions → builds → deploys to `gh-pages` branch → live at `irbconsultant.com`.

### First-time GitHub setup

1. Create a new **public** repository on GitHub (e.g. `irbconsultant-website`)

2. Push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: IRB Consultant website"
   git remote add origin https://github.com/YOUR-ORG/YOUR-REPO.git
   git push -u origin main
   ```

3. Go to the repo → **Settings → Pages**
   - Source: `gh-pages` branch
   - Custom domain: `irbconsultant.com`
   - Check **Enforce HTTPS**

GitHub Pages will automatically provision a free TLS certificate via Let's Encrypt within minutes.

---

## Custom Domain — DNS via Squarespace

In **Squarespace Domains → DNS Settings**, add these records:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `YOUR-ORG.github.io` |

DNS propagation: 15 minutes to 48 hours.

---

## Brand

All design tokens live as CSS custom properties in [`src/index.css`](src/index.css).

| Token | Value | Role |
|-------|-------|------|
| `--color-charcoal` | `#252F3F` | Headings, text, dark backgrounds |
| `--color-sage` | `#6B9080` | Accents, links, hover states |
| `--color-sand` | `#C8B898` | Labels, muted text |
| `--color-offwhite` | `#F0EDE4` | Alternate backgrounds |
| Font | Saira (Google Fonts) | All typography |

Full brand guide: [`.planning/IRB_DESIGN_MATERIALS.md`](.planning/IRB_DESIGN_MATERIALS.md)

---

## Updating Content

| What | File | Where |
|------|------|-------|
| Service descriptions | [`src/components/Services.jsx`](src/components/Services.jsx) | `services` array, lines 1–16 |
| About paragraph | [`src/components/About.jsx`](src/components/About.jsx) | `about-body` paragraph |
| Contact emails / names | [`src/components/Contact.jsx`](src/components/Contact.jsx) | `contacts` array, lines 1–16 |
| Hero headline | [`src/components/Hero.jsx`](src/components/Hero.jsx) | `hero-headline` h1 |
| Page meta / SEO | [`index.html`](index.html) | `<head>` section |
| LLM summary | [`public/llms.txt`](public/llms.txt) | Plain text |

---

## SEO & AI Search

- **`robots.txt`** — explicitly allows all crawlers including GPTBot, Claude-Web, PerplexityBot
- **`llms.txt`** — structured markdown per [llmstxt.org](https://llmstxt.org) for AI web crawlers
- **`sitemap.xml`** — single-URL sitemap for Google/Bing indexing
- **JSON-LD** in `index.html` — `ProfessionalService` schema with founders and contact points
- **Open Graph** — social preview tags for sharing

---

*I.R.B Consultant Limited · Hong Kong · Est. 2025*
