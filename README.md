# IY Finance Solutions Website

Marketing website for IY Finance Solutions — debt counselling, personal loans,
funeral cover, legal insurance, credit clearance and financial assessments.

**Stack:** Static HTML · CSS · vanilla JavaScript (no build step — open
`index.html` in a browser or serve the folder with any static server).

## Structure

```
index.html                  Single-page site
assets/
├── css/
│   ├── variables.css       Design tokens (colours, spacing, shadows)
│   ├── reset.css           CSS reset & global foundation
│   ├── typography.css      Headings, text utilities, section headings
│   ├── layout.css          Container, sections, grids
│   ├── header.css          Header, nav, loader, progress bar, back-to-top
│   ├── components.css      Buttons, cards, services, about, contact, footer
│   ├── hero.css            Hero section
│   ├── sections.css        Founder, process, testimonials, FAQ, CTA, forms
│   ├── animations.css      Keyframes, reveal-on-scroll, hover effects
│   └── responsive.css      Breakpoint overrides
├── js/
│   ├── app.js              Loader, progress bar, smooth scroll, footer year
│   ├── navigation.js       Sticky header, mobile menu
│   ├── animations.js       Scroll reveal, counters, parallax, tilt, ripple
│   └── forms.js            Enquiry form validation + mailto submission
└── images/
    ├── logo.svg            Brand mark
    ├── favicon.svg         Browser tab icon
    └── og-image.jpg        Social share image (auto-generated placeholder)
```

## Before Going Live — TODO

- [ ] **Founder section** (`#founder` in `index.html`): replace the
      placeholder story, quote and `[Founder Name]` tokens. Optionally add
      `assets/images/founder.jpg` (see the comment in the HTML).
- [ ] **Testimonials** (`#testimonials`): replace placeholders with genuine
      client reviews — fabricated testimonials breach FAIS advertising rules.
- [ ] **og-image.jpg**: auto-generated placeholder; replace with a designed
      1200×630 image when available.
- [ ] **Form delivery**: the enquiry form currently opens the visitor's email
      app (mailto). For direct delivery, wire `assets/js/forms.js` to a form
      backend (e.g. Formspree, or your own endpoint).

## Registered Details

INQUBEKO YEZIBUSISO (PTY) LTD · Reg No. 2015/045860/07 · FSP 49179 · NCRCP8769
