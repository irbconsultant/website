# IRB Consultant Limited — Website Build Spec
> Hand this file to Claude Code as your first message. It contains the full context needed to build the site.

---

## Project Summary

Build a **single-page marketing website** for **I.R.B Consultant Limited**, a Hong Kong-registered consulting firm.

- **Domain:** irbconsultant.com (registered via Squarespace)
- **Hosting:** GitHub Pages
- **Stack:** Vite + React (deploy via GitHub Actions)
- **Language:** English only
- **Background:** White (`#FFFFFF`) — matches the company logo

---

## Brand Identity

### Colors (use exactly — from brand kit)
```css
--color-charcoal:   #252F3F;   /* primary text, headings, dark sections bg */
--color-sage:       #6B9080;   /* accent, links, hover states, highlights */
--color-sand:       #C8B898;   /* subtext, labels, muted elements */
--color-offwhite:   #F0EDE4;   /* alternate section backgrounds, card fills */
--color-white:      #FFFFFF;   /* primary background */
--color-text-secondary: #5A6475;
```

### Typography
- **Font:** Saira — Google Fonts
- **Import:** `https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600;700;800&display=swap`
- **Scale:**
  - Display/Hero: 800 weight, 56px desktop / 36px mobile, -0.5px tracking
  - H1: 700, 40px / 28px
  - H2: 600, 28px / 22px
  - Body: 400, 16px / 15px, 0.1px tracking, 1.7 line-height
  - Label/Eyebrow: 500, 11px, 3px tracking, UPPERCASE
  - Button: 600, 14px, 1px tracking, UPPERCASE

### Logo
- File: `logo.png` (white background, iR.B lettermark — charcoal i + sage R + charcoal B)
- Use at 120px wide in nav, 80px minimum
- On dark sections: use logo.png with a light treatment or invert it
- Do NOT stretch, rotate, or add effects

---

## Page Structure (Single Page, 5 Sections)

### 1. Navigation (sticky, white background)
- **Left:** Logo image (`logo.png`) + company name "IRB CONSULTANT" in Saira 700
- **Right:** Nav links — `Services | About Us | Contact Us` — plus a solid CTA button "Contact Us" (charcoal bg, white text)
- Smooth scroll to sections on click
- On mobile: hamburger menu

### 2. Hero Section (split layout)
- **Left side:**
  - Eyebrow label: `HONG KONG · EST. 2025` (sage, uppercase, tracked)
  - Main headline (display size, 800 weight, charcoal):
    ```
    Innovation
    Driven by People.
    ```
    — "People." in sage green
  - Subtext (body size, secondary color):
    ```
    IRB Consultant bridges technology and finance — two disciplines, one firm.
    We believe innovation only works when it's grounded in human connection.
    ```
  - CTA button: "Get in Touch →" → smooth scrolls to Contact section (charcoal bg, white text)

- **Right side:** Two floating service cards (staggered layout):
  - Card 1 (off-white bg):
    - Label: `TECHNOLOGY`
    - Title: `Software & Dev Consulting`
    - Name: `Itay Ben Ner`
  - Card 2 (charcoal bg, light text):
    - Label: `FINANCE`
    - Title: `Accounting & Financial Advisory`
    - Name: `Reut Ben Ner`

### 3. Services Section
- **Layout:** Left column = big bold header; Right column = numbered service list
- **Left:**
  - Eyebrow: `WHAT WE DO`
  - Heading: `Two disciplines.` / `One firm.` (second line in sage)
  - Short description paragraph
- **Right:** Three numbered cards (1. 2. 3.)
  - **1. Software & Technology Consulting**
    - Description: [PLACEHOLDER — to be filled by client]
    - Sub-tag: `Itay Ben Ner · itay@irbconsultant.com`
  - **2. Finance & Accounting Consulting**
    - Description: [PLACEHOLDER — to be filled by client]
    - Sub-tag: `Reut Ben Ner · reut@irbconsultant.com`
  - **3. Cross-Border Business Support**
    - Description: HK–Israel business operations, setup, and strategic consulting.
    - Sub-tag: `Both Partners · irbconsultant.com`

### 4. About Section (full-width dark charcoal band)
- Background: `#252F3F`
- **Layout:** Left = quote + body text; Right = three stat blocks
- **Left:**
  - Eyebrow: `ABOUT IRB` (sage)
  - Pull quote (H1 size, off-white):
    ```
    We believe innovation only matters when it's driven by real human thinking.
    ```
    — "real human thinking." in sage
  - Body paragraph (sand color):
    ```
    Founded by Itay and Reut Ben Ner, IRB Consultant is a Hong Kong-registered firm
    combining software expertise and financial advisory under one roof. We work as
    independent consultants — lean, focused, and deeply invested in the success of
    every client. [Full copy to be updated by client]
    ```
- **Right:** Three stat blocks (border-left: 2px solid sage):
  - `HK·IL` / `Cross-Border Focus`
  - `2+` / `Service Lines`
  - `50%` / `Tech · Finance Split`

### 5. Contact Section
- **Header:**
  - Eyebrow: `CONTACT US`
  - Heading: `Talk to the right person.`
- **Two cards side by side:**
  - **Card 1 — Itay Ben Ner**
    - Avatar: initials "IB" (charcoal circle)
    - Name: Itay Ben Ner
    - Role: Software & Technology Consulting
    - Email: `itay@irbconsultant.com`
    - Button: "Send Email →" → `mailto:itay@irbconsultant.com`
    - Top accent bar: charcoal
  - **Card 2 — Reut Ben Ner**
    - Avatar: initials "RB" (sage circle)
    - Name: Reut Ben Ner
    - Role: Finance & Accounting Consulting
    - Email: `reut@irbconsultant.com`
    - Button: "Send Email →" → `mailto:reut@irbconsultant.com`
    - Top accent bar: sage

### Footer
- Background: charcoal (`#252F3F`)
- Left: `iR.B CONSULTANT` in sage
- Center: `© 2025 I.R.B Consultant Limited · Incorporated in Hong Kong`
- Right: `irbconsultant.com`

---

## Interactions & Animations
- Smooth scroll navigation (all anchor links)
- On scroll: fade-in + slide-up for each section (use Intersection Observer)
- Nav: background opacity animates in on scroll (starts transparent, becomes white with shadow)
- Service cards: subtle hover lift (transform: translateY(-4px))
- CTA buttons: hover → sage green background transition
- Hero cards: slight stagger animation on load (card 2 appears 200ms after card 1)

---

## Responsive Breakpoints
- **Desktop:** ≥ 1024px — full split layouts as described
- **Tablet:** 768px–1023px — stack hero vertically, keep service layout
- **Mobile:** < 768px — single column everything, hamburger nav, hero text 36px

---

## Tech Stack & File Structure

```
irb-website/
├── public/
│   └── logo.png              ← place logo here
├── src/
│   ├── App.jsx               ← main single-page component
│   ├── main.jsx
│   ├── index.css             ← CSS variables, resets, global styles
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── About.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml        ← GitHub Actions deploy to gh-pages
├── vite.config.js
├── package.json
└── index.html
```

---

## GitHub Pages + Squarespace Domain Setup

### Step 1: Vite config for GitHub Pages
```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // use '/' since we have a custom domain
})
```

### Step 2: GitHub Actions deploy workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: irbconsultant.com   # ← your custom domain
```

### Step 3: Add CNAME file
Create `/public/CNAME` with content:
```
irbconsultant.com
```

### Step 4: Squarespace DNS Settings
In Squarespace Domains → DNS Settings, add these records:
| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

### Step 5: GitHub repo settings
- Go to repo Settings → Pages
- Source: `gh-pages` branch
- Custom domain: `irbconsultant.com`
- Check "Enforce HTTPS"

---

## Assets Needed
- [ ] `logo.png` — the iR.B lettermark (already designed, white background)
- [ ] Final service descriptions for all 3 services (currently placeholders)
- [ ] Final about paragraph copy (currently placeholder)

---

## What to Tell Claude Code

Paste this entire file as your first message to Claude Code, then say:

> "Please build this complete Vite + React website according to this spec. Start by scaffolding the project structure, then build each component. Use the exact brand colors and Saira font. Make it production-ready and deploy-ready for GitHub Pages."

---

*IRB Consultant Limited — Website Spec v1.0 — May 2026*
*Prepared via Claude.ai planning session*
