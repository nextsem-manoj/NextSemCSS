# 🎨 NextSem CSS — 117+ Modern CSS Tips & Interactive Studios

[![GitHub Repository](https://img.shields.io/badge/GitHub-nextsem--manoj%2Fcss-38bdf8?style=flat-square&logo=github)](https://github.com/nextsem-manoj/css)
[![CSS3](https://img.shields.io/badge/CSS-Modern%20Spec%202026-10b981?style=flat-square&logo=css3)](https://github.com/nextsem-manoj/css)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0%20Zero%20NPM-a855f7?style=flat-square)](https://github.com/nextsem-manoj/css)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=flat-square)](LICENSE)

An interactive, production-grade **CSS Engineering & UI Laboratory** containing **117+ curated CSS tips, micro-interactions, and 4 dedicated interactive project studios**. Built with 100% pure CSS3, modern specifications (Container Queries, `:has()`, `@starting-style`, `@property`, `subgrid`, `color-mix()`), and zero external npm package dependencies.

---

## 🌟 Ecosystem Architecture

```
css/
├── index.html                   # 🚀 Master Ecosystem Hub & 117+ Tips Studio
├── tips-studio.html             # Standalone 117+ Tips Explorer
├── server.mjs                   # Zero-dependency Node.js HTTP server & API
├── package.json                 # Project configuration
├── README.md                    # Platform documentation
├── tips/                        # 117+ Isolated CSS Tips & Micro-Interactions
│   ├── ContainerQueries/        # @container adaptive responsive cards
│   ├── HasSelectorParent/       # :has() parent styling & sibling dimming
│   ├── BentoGridCard/           # High-density Bento Grid card
│   ├── GlassmorphismCard/       # Frosted glass 2.0 with backdrop-filter
│   ├── ScrollDrivenAnimation/   # Pure CSS scroll-driven progress & reveals
│   ├── StartingStyleTransitions/# @starting-style smooth entry from display:none
│   ├── SubgridLayout/           # CSS Grid subgrid row alignment
│   ├── ColorMixOklch/           # Perceptual color-mix() in OKLCH
│   ├── TextGradientShimmer/     # Animated gradient text shimmer
│   ├── ModernToggleSwitch/      # iOS-style spring toggle switch
│   └── ... (107+ classic tips)
└── projects/                    # 4 Dedicated Specialized Project Studios
    ├── 01-modern-layouts-bento-studio/ # Bento Grids, Container Queries & Masonry
    ├── 02-creative-ui-components-kit/  # 3D Tilt, Neumorphism, Conic Glow, Mac Dock
    ├── 03-animations-loaders-studio/   # Quantum Spinners, Glitch Text & Blobs
    └── 04-modern-selectors-lab/        # :has() validation, nesting & specificity
```

---

## 🔬 The 4 Dedicated Project Studios

### 1. 📐 Modern Layouts & Bento Grid Studio (`/projects/01-modern-layouts-bento-studio/`)
* **Apple & Vercel Bento Grids**: Multi-span fluid responsive cards with glowing hover highlights.
* **Container Queries Playground**: Live width slider to observe card layouts reorganizing dynamically based on parent container width rather than the viewport.
* **Pure CSS Masonry**: Column-count and `break-inside: avoid` eliminating the need for bulky JavaScript isotope libraries.

### 2. 🎨 Creative UI Components Kit (`/projects/02-creative-ui-components-kit/`)
* **3D Perspective Tilt Cards**: `preserve-3d` and perspective transforms with Z-space text elevation.
* **Rotating Conic Gradient Borders**: Pure CSS light borders utilizing `@property --angle`.
* **Soft UI Neumorphism**: Convex, concave, and inset pressed states using multi-light source shadows.
* **Spring Elastic Switches**: Hardware-accelerated `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curves.
* **Mac OS Floating Dock**: Smooth magnification effect with `backdrop-filter: blur()`.

### 3. ⚡ CSS Animations & Loaders Studio (`/projects/03-animations-loaders-studio/`)
* **Quantum Triple-Orbit Loader**: 3 concentric rings with staggered counter-rotations.
* **Cyberpunk Glitch Effect**: Multi-layered RGB split slice animations using `@keyframes` and `clip-path`.
* **Skeleton Shimmer Placeholders**: Fluid wave animation for loading avatars and text lines.
* **Liquid Morphing Blob**: Smooth continuous organic shape shifting via 8-axis `border-radius`.
* **Waveform Equalizer**: Staggered `scaleY` jumping bars for audio/media indicators.

### 4. 🔬 Modern CSS Selectors Lab (`/projects/04-modern-selectors-lab/`)
* **Zero-JS Form Validation**: Parent card borders and backgrounds react to `:valid` and `:invalid` states using `:has()`.
* **Sibling Hover Dimming**: Focuses the hovered pill while dimming all siblings (`:has(:hover) :not(:hover)`).
* **Native CSS Nesting**: Direct hierarchical nesting supported natively without preprocessors.
* **OKLCH Color Space**: Predictable color mixing and palettes with `color-mix()`.

---

## 🚀 Quick Start Guide

### 1. Clone the Repository
```bash
git clone https://github.com/nextsem-manoj/css.git
cd css
```

### 2. Start the Local Server
Zero dependencies required! Run with Node.js built-in HTTP server:
```bash
npm run dev
# or
node server.mjs
```

### 3. Open in Browser
* **Localhost**: [http://localhost:3006/](http://localhost:3006/)
* **Network IP**: `http://192.168.29.170:3006/`

---

## 📊 Tips Categories Overview

| Category | Count | Key Features |
| :--- | :---: | :--- |
| **Layout & Flexbox** | 22+ | Bento Grids, Container Queries, Subgrid, Centering, Responsive Holy Grail |
| **Buttons & Hovers** | 26+ | Conic Borders, Gradient Fill, Glow Pulsing, Magnetic Hover, Ripple |
| **Animations & Loaders** | 20+ | Orbitals, Glitch, Scroll-Driven Progress, Morphing Blobs, Shimmer |
| **Modern CSS Specs** | 10+ | `:has()` Relational, `@starting-style`, `@property`, Native Nesting, OKLCH |
| **Borders & Shadows** | 15+ | Glassmorphism, Neumorphism, Gradient Borders, Multi-Layer Depth |
| **Forms & Inputs** | 12+ | Spring Switches, Custom Checkboxes, Color Pickers, Float Labels |
| **Typography & Text** | 10+ | Text Shimmer, Neon Glow, Truncate Ellipsis, Justify Alignment |
| **Images & Media** | 8+ | Aspect Ratio, Frosted Glass Blur, Mirror Reflections, Filters |

---

## 👨‍💻 Author & Maintainer

* **Lead Engineer**: Er. Manoj Kumar
* **Organization**: [NextSem Technologies](https://nextsem.online)
* **GitHub**: [@nextsem-manoj](https://github.com/nextsem-manoj)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
