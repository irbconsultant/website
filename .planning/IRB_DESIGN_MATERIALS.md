# IRB Consultant Limited — Complete Design Materials
> Drop this file into your Claude Code session alongside `logo.png`.
> This is the single source of truth for all visual decisions.

---

## 1. Logo

### File
- **Filename:** `logo.png`
- **Place at:** `public/logo.png` in the Vite project
- **Canvas size:** 2000×2000px (high-res, safe to use at any scale)
- **Background:** Pure white `#FFFFFF`

### What the logo is
- **Lettermark:** `iR.B`
- **i** — lowercase, charcoal — represents a person figure (dot = head, stem = body)
- **R** — sage green — the central, dominant letter
- **dot separator** — sage green — sits between R and B
- **B** — charcoal — bold, squared
- **CONSULTANT** — tracked sand/warm beige label beneath the mark (in brand docs; not in the PNG file itself)

### Logo colors (verified from actual PNG pixels)
| Element | Brand Spec Hex | Actual Rendered Hex | RGB |
|---------|---------------|---------------------|-----|
| i + B letters | `#252F3F` | `#1E283C` | 30, 40, 60 |
| R letter + dots | `#6B9080` | `#648C78` | 100, 140, 120 |
| Background | `#FFFFFF` | `#FFFFFF` | 255, 255, 255 |

> Use the **brand spec hex values** (`#252F3F`, `#6B9080`) in all CSS — the pixel difference is anti-aliasing.

### Logo usage rules
| Situation | Treatment |
|-----------|-----------|
| White / light background | Use `logo.png` as-is |
| Dark / charcoal background | CSS filter: `brightness(0) invert(1)` then tint sage — OR use separate dark variant |
| Nav (desktop) | 120px wide |
| Nav (mobile) | 80px wide |
| Favicon | Use the `iR` mark only on a charcoal square |
| Minimum size | 80px wide (full logo), 24px (icon only) |
| Clear space | Padding equal to the height of the dot above the `i` on all sides |

### Logo DON'Ts
- Never stretch or distort
- Never rotate
- Never add drop shadows or gradients
- Never place on busy/photographic backgrounds
- Never recolor

---

## 2. Color Palette

### Full palette with all usage contexts

```css
:root {
  /* ─── Core Brand Colors ─── */
  --color-charcoal:   #252F3F;  /* Primary: i + B in logo, headings, body text, dark sections bg */
  --color-sage:       #6B9080;  /* Accent: R in logo, links, hover states, highlights, dividers */
  --color-sand:       #C8B898;  /* Supporting: subtext, labels, borders, muted UI */
  --color-offwhite:   #F0EDE4;  /* Light: alternate section bg, card fills, dark-mode text */
  --color-white:      #FFFFFF;  /* Base: primary page background, documents */

  /* ─── Semantic Aliases ─── */
  --color-primary:          var(--color-charcoal);
  --color-accent:           var(--color-sage);
  --color-supporting:       var(--color-sand);
  --color-background:       var(--color-white);
  --color-background-alt:   var(--color-offwhite);
  --color-text-primary:     var(--color-charcoal);
  --color-text-secondary:   #5A6475;   /* slightly lighter charcoal for body copy */
  --color-text-muted:       var(--color-sand);
}
```

### Color usage rules (strict)
| Context | Color |
|---------|-------|
| Page / document background | `#FFFFFF` or `#F0EDE4` |
| Primary headings & body text | `#252F3F` |
| Links & interactive elements | `#6B9080` |
| Hover / focus states | `#6B9080` at 85% opacity |
| Secondary / muted text | `#5A6475` |
| Labels, captions, metadata | `#C8B898` |
| Table alternating rows | `#F0EDE4` |
| **Buttons — primary** | bg `#252F3F`, text `#FFFFFF` |
| **Buttons — secondary** | bg `#6B9080`, text `#FFFFFF` |
| **Buttons — ghost** | bg transparent, border + text `#252F3F` |
| Dividers / borders | `#C8B898` at 50% opacity |
| Dark section background | `#252F3F` |
| Dark section text | `#F0EDE4` |
| Dark section accent text | `#6B9080` |
| Dark section muted text | `#C8B898` |

### Color DON'Ts
- Never use pure black `#000000` — use `#252F3F`
- Never use more than 3 colors in a single layout zone
- Never add gradients to any brand element
- Never use purple, blue, or any color outside the palette

---

## 3. Typography

### Font
**Saira** — Google Fonts
- URL: https://fonts.google.com/specimen/Saira
- Weights needed: 300, 400, 500, 600, 700, 800

### Import in `index.html`
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### Import in CSS
```css
@import url('https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600;700;800&display=swap');
font-family: 'Saira', sans-serif;
```

### Type scale (exact, from brand kit)
| Role | Weight | Desktop | Mobile | Letter Spacing |
|------|--------|---------|--------|----------------|
| Display / Hero | 800 ExtraBold | 56px | 36px | -0.5px |
| H1 | 700 Bold | 40px | 28px | -0.3px |
| H2 | 600 SemiBold | 28px | 22px | 0px |
| H3 | 600 SemiBold | 20px | 18px | 0px |
| Body | 400 Regular | 16px | 15px | 0.1px |
| Small / Caption | 400 Regular | 13px | 12px | 0.2px |
| Label / Eyebrow | 500 Medium | 11px | 10px | 3px + UPPERCASE |
| Button | 600 SemiBold | 14px | 14px | 1px + UPPERCASE |

### CSS font tokens
```css
:root {
  --font-family:  'Saira', sans-serif;

  /* Shorthand: weight size/line-height family */
  --font-display: 800 56px/1.1  var(--font-family);
  --font-h1:      700 40px/1.2  var(--font-family);
  --font-h2:      600 28px/1.3  var(--font-family);
  --font-h3:      600 20px/1.4  var(--font-family);
  --font-body:    400 16px/1.7  var(--font-family);
  --font-small:   400 13px/1.6  var(--font-family);
  --font-label:   500 11px/1.4  var(--font-family);
  --font-button:  600 14px/1    var(--font-family);
}
```

### Typography DON'Ts
- Never use any font other than Saira
- Never use Inter, Roboto, Arial, or system fonts
- Never use pure bold (900) — max is 800 ExtraBold
- Never set body text in sand or offwhite on white backgrounds (contrast failure)

---

## 4. Spacing System

```css
:root {
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   16px;
  --space-lg:   24px;
  --space-xl:   40px;
  --space-2xl:  64px;
  --space-3xl:  96px;
}
```

---

## 5. Border Radius

```css
:root {
  --radius-sm:  4px;   /* buttons, small tags */
  --radius-md:  8px;   /* cards, inputs */
  --radius-lg:  12px;  /* large cards, modals */
  --radius-xl:  20px;  /* pill shapes */
}
```

---

## 6. Shadows

```css
:root {
  --shadow-sm:  0 1px 3px  rgba(37, 47, 63, 0.08);
  --shadow-md:  0 4px 16px rgba(37, 47, 63, 0.10);
  --shadow-lg:  0 8px 32px rgba(37, 47, 63, 0.12);
}
```

---

## 7. Component Patterns

### Eyebrow / Section Label
```css
.eyebrow {
  font: var(--font-label);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-sage);
  display: flex;
  align-items: center;
  gap: 8px;
}
/* Optional leading line: */
.eyebrow::before {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: var(--color-sage);
}
```

### Button — Primary
```css
.btn-primary {
  font: var(--font-button);
  letter-spacing: 1px;
  text-transform: uppercase;
  background: var(--color-charcoal);
  color: var(--color-white);
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}
.btn-primary:hover { background: var(--color-sage); }
```

### Button — Secondary / Accent
```css
.btn-secondary {
  background: var(--color-sage);
  color: var(--color-white);
  /* same padding, radius, font as primary */
}
.btn-secondary:hover { background: #5a7d6e; } /* sage darkened ~10% */
```

### Button — Ghost
```css
.btn-ghost {
  background: transparent;
  color: var(--color-charcoal);
  border: 1px solid var(--color-charcoal);
}
.btn-ghost:hover {
  background: var(--color-charcoal);
  color: var(--color-white);
}
```

### Card
```css
.card {
  background: var(--color-white);
  border: 0.5px solid rgba(200, 184, 152, 0.5); /* sand at 50% */
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

### Dark Card (on charcoal section)
```css
.card-dark {
  background: rgba(240, 237, 228, 0.07); /* offwhite at 7% */
  border: 0.5px solid rgba(240, 237, 228, 0.15);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}
```

### Stat Block (left border accent)
```css
.stat-block {
  border-left: 2px solid var(--color-sage);
  padding-left: 16px;
}
.stat-block .number {
  font: var(--font-display);
  color: var(--color-offwhite); /* on dark sections */
}
.stat-block .number em {
  color: var(--color-sage);
  font-style: normal;
}
.stat-block .label {
  font: var(--font-label);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-sand);
  margin-top: 4px;
}
```

---

## 8. Section Layout Reference

### Section spacing
- **Desktop:** `padding: 80px 64px`
- **Tablet:** `padding: 60px 40px`
- **Mobile:** `padding: 48px 20px`
- **Max content width:** `1200px`, centered with `margin: 0 auto`

### Section color alternation (top to bottom)
| # | Section | Background |
|---|---------|------------|
| Nav | Navigation | `#FFFFFF` (sticky) |
| 1 | Hero | `#FFFFFF` |
| 2 | Services | `#F0EDE4` (off-white) |
| 3 | About | `#252F3F` (charcoal — the ONE dark band) |
| 4 | Contact | `#FFFFFF` |
| 5 | Footer | `#252F3F` (charcoal) |

---

## 9. Tailwind Config (if used instead of plain CSS)

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#252F3F',
        sage:     '#6B9080',
        sand:     '#C8B898',
        offwhite: '#F0EDE4',
      },
      fontFamily: {
        sans: ['Saira', 'sans-serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '800' }],
        'h1':      ['40px', { lineHeight: '1.2', letterSpacing: '-0.3px', fontWeight: '700' }],
        'h2':      ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3':      ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'label':   ['11px', { lineHeight: '1.4', letterSpacing: '3px',  fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
```

---

## 10. Animation Guidelines

```css
/* Fade-up on scroll (apply via Intersection Observer) */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children: add delay via inline style or nth-child */
.reveal:nth-child(2) { transition-delay: 0.1s; }
.reveal:nth-child(3) { transition-delay: 0.2s; }

/* Nav background on scroll */
.nav {
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.nav.scrolled {
  background: rgba(255,255,255,0.96);
  box-shadow: 0 1px 12px rgba(37,47,63,0.08);
  backdrop-filter: blur(8px);
}
```

---

## 11. Quick Reference Cheatsheet

```
COLORS
  Charcoal  #252F3F  — headings, text, dark bg
  Sage      #6B9080  — accent, links, hover
  Sand      #C8B898  — labels, muted, borders
  Off-white #F0EDE4  — alt bg, card fills
  White     #FFFFFF  — primary bg

FONT: Saira (Google Fonts)
  800 / Display — 56px desktop, 36px mobile
  700 / H1      — 40px desktop, 28px mobile
  600 / H2      — 28px desktop, 22px mobile
  400 / Body    — 16px, 1.7 line-height
  500 / Label   — 11px, 3px tracking, UPPERCASE

LOGO FILE: public/logo.png
  Light bg → use as-is
  Dark bg  → CSS: filter brightness(0) invert(1)
  Nav size → 120px wide desktop / 80px mobile

SECTION ORDER
  Nav (white, sticky)
  → Hero (white, split layout)
  → Services (off-white, numbered cards)
  → About (CHARCOAL DARK BAND)
  → Contact (white, two person cards)
  → Footer (charcoal)
```

---

*IRB Consultant Limited — Design Materials v1.0 — May 2026*
*Source: Brand Design Kit + logo.png pixel analysis*
