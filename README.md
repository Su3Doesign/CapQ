# CapQ — Glass Morphism Astro Build

A premium, interactive **glass morphism** coming-soon page built on **Astro.js** + **Tailwind CSS** + **GSAP** + **Lenis**.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Astro 4.x (static output) |
| Styling | Tailwind CSS 3.4 |
| Animation | GSAP 3.12 + ScrollTrigger |
| Smooth Scroll | Lenis 1.1 |
| Fonts | Bricolage Grotesque, Familjen Grotesk, Caveat, JetBrains Mono |

## Glass Effects

- **`.glass-panel`** — Frosted glass with CSS pseudo-element borders, multi-layer shadow, and mouse-tracking specular highlight via CSS custom properties
- **`.glass-card`** — 3D tilt cards with perspective transforms, chromatic aberration edges, and top-edge light reflection
- **`.glass-deep`** — Darker glass variant for nav/footer with higher blur
- **`.glass-noise`** — Subtle SVG noise texture overlay for physical glass realism
- **`.glass-chromatic`** — Lime/green chromatic glow on hover
- **Mouse-tracking reflection** — Radial gradient follows cursor across all glass surfaces via `--mouse-x` / `--mouse-y` CSS vars
- **3D Tilt** — Cards tilt toward cursor with `perspective(1000px)` on hover

## Features

- Floating glass orbs with blur + backdrop-filter
- Infinite marquee ticker with glass pill tags
- Scroll-triggered reveals via GSAP ScrollTrigger
- Hero entrance timeline with staggered animations
- WhatsApp pre-filled message form with validation
- Reduced-motion support (`prefers-reduced-motion`)
- Custom scrollbar styling
- Grain texture overlay

## Install & Run

```bash
cd capq-glass-astro
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Output goes to `dist/`.

## Structure

```
src/
  layouts/
    Layout.astro       # Root layout, fonts, GSAP/Lenis init, glass CSS
  components/
    GlassNav.astro     # Fixed glass nav bar
    GlassHero.astro    # Hero section with floating orbs
    GlassForm.astro    # Callback enquiry form in glass panel
    GlassTicker.astro  # Marquee product tags
    GlassProducts.astro # Product grid in glass cards
    GlassFooter.astro  # Footer with glass badge cluster
  pages/
    index.astro        # Page composition
```

## Contact

- WhatsApp: [+91 79952 90768](https://wa.me/917995290768)
- Call: +91 79952 90768
- Mon–Sat, 9am–7pm
