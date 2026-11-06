const fs = require('fs');
const path = require('path');

const curriculum = [
  {
    day: 1,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "CSS3 Introduction & Rule Syntax",
    subtitle: "Understanding selectors, declaration blocks, and stylesheets",
    time: "15 Mins",
    concept: "CSS (Cascading Style Sheets) controls how HTML elements are presented on screen. While HTML provides the semantic skeleton of a webpage, CSS provides typography, colors, layouts, and animations.",
    analogy: "HTML is the concrete structure of a building; CSS is the interior design, lighting, textures, and paint.",
    keyPoints: [
      "A CSS rule consists of a selector and a declaration block: `selector { property: value; }`",
      "Declarations always end with a semicolon (`;`), and values are separated by colons (`:`)",
      "External stylesheets (`<link rel=\"stylesheet\" href=\"style.css\">`) are the industry standard for clean, maintainable code."
    ],
    starterHtml: `<div class="hero-card">
  <h1>Welcome to CSS Mastery! 🚀</h1>
  <p>Learn modern web styling in 30 days from scratch.</p>
  <button class="cta-btn">Start Day 01</button>
</div>`,
    starterCss: `/* Day 01: CSS Basics */
.hero-card {
  background: #0f172a;
  color: #f8fafc;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #334155;
  font-family: system-ui, sans-serif;
}

h1 {
  color: #38bdf8;
  font-size: 24px;
  margin-bottom: 8px;
}

p {
  color: #94a3b8;
  font-size: 14px;
  margin-bottom: 20px;
}

.cta-btn {
  background: #10b981;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}

.cta-btn:hover {
  opacity: 0.85;
}`,
    proTip: "Always keep structure (HTML) and presentation (CSS) separated. Avoid inline style attributes on production web pages.",
    challenge: "Change the button background color to `#38bdf8` (Cyan) and give it a `border-radius: 20px;`."
  },
  {
    day: 2,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "CSS Selectors (Tag, Class, ID & Universal)",
    subtitle: "Targeting elements accurately with specificity hierarchy",
    time: "20 Mins",
    concept: "CSS Selectors target HTML elements to apply styles. Class selectors (`.`) are reusable across multiple elements, while ID selectors (`#`) must be unique per page. The Universal selector (`*`) matches every element.",
    analogy: "Tag = All Students in school | Class = Students wearing sports uniforms | ID = Student with Roll Number 1.",
    keyPoints: [
      "Universal selector `*` targets every DOM node; ideal for global resets.",
      "Class selector `.` is the workhorse of modern UI; modular and reusable.",
      "ID selector `#` has high specificity; avoid overusing it for general styling."
    ],
    starterHtml: `<div class="container">
  <h2 id="catalog-title">Product Catalog</h2>
  <div class="card active">Card 1: Featured Pro</div>
  <div class="card">Card 2: Standard Plan</div>
  <div class="card">Card 3: Free Starter</div>
</div>`,
    starterCss: `* {
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

.container {
  padding: 20px;
  background: #090d16;
  border-radius: 12px;
}

/* ID Selector */
#catalog-title {
  color: #f59e0b;
  font-size: 20px;
  margin-bottom: 16px;
}

/* Class Selector (Reusable) */
.card {
  background: #1e293b;
  color: #cbd5e1;
  padding: 12px 18px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #334155;
}

/* Chained Class Selector */
.card.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #38bdf8;
  font-weight: 700;
}`,
    proTip: "Avoid ID selectors for styling because their high specificity makes overriding difficult. Use classes for 99% of your styles.",
    challenge: "Create a new modifier class `.card.warning` with a red border `#ef4444`."
  },
  {
    day: 3,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "The CSS Box Model & Border-Box",
    subtitle: "Mastering content, padding, borders, margins, and sizing",
    time: "25 Mins",
    concept: "Every HTML element rendered in the browser is a rectangular box made of four concentric layers: Content, Padding (inner space), Border (boundary wall), and Margin (outer clearance).",
    analogy: "A shipping package: Content is the item inside, Padding is bubble wrap, Border is the cardboard box, and Margin is the clearance from neighboring boxes.",
    keyPoints: [
      "Padding adds breathing room inside the element boundary and shares its background color.",
      "Margin pushes adjacent elements away and is transparent.",
      "`box-sizing: border-box;` forces padding and borders inside the declared width, preventing layout breakage."
    ],
    starterHtml: `<div class="box-wrapper">
  <div class="box standard">
    <h3>Content Area</h3>
    <p>Padding (Inside) + Border + Margin (Outside)</p>
  </div>
</div>`,
    starterCss: `* {
  box-sizing: border-box; /* The Universal Reset */
  margin: 0;
  padding: 0;
  font-family: system-ui, sans-serif;
}

.box-wrapper {
  background: #0f172a;
  padding: 30px;
  border-radius: 12px;
}

.box {
  width: 100%;
  background: #1e293b;
  color: white;
  
  /* 1. Inside Space */
  padding: 24px;
  
  /* 2. Boundary Stroke */
  border: 3px solid #10b981;
  border-radius: 8px;
  
  /* 3. Outside Clearance */
  margin: 10px 0;
}

h3 {
  color: #10b981;
  margin-bottom: 8px;
}

p {
  color: #94a3b8;
  font-size: 14px;
}`,
    proTip: "Always put `*, *::before, *::after { box-sizing: border-box; }` at the very top of your global CSS.",
    challenge: "Increase padding to `40px` and observe how total width remains constant thanks to `border-box`."
  },
  {
    day: 4,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "Colors, RGBA & Modern Gradients",
    subtitle: "Color formats, alpha channel transparency, and smooth color stops",
    time: "20 Mins",
    concept: "CSS supports Hexadecimal codes (`#38bdf8`), RGB values (`rgb(56, 189, 248)`), RGBA with alpha transparency, and multi-stop linear/radial gradients.",
    analogy: "The alpha channel is like a tinted glass window: 1.0 is completely opaque, 0.5 is translucent, and 0.0 is completely invisible.",
    keyPoints: [
      "Hex codes use 6 characters (RRGGBB) from 00 to FF.",
      "RGBA adds an alpha opacity channel ranging from 0.0 to 1.0.",
      "Gradients blend colors smoothly across an angle: `linear-gradient(135deg, color1, color2)`."
    ],
    starterHtml: `<div class="gradient-showcase">
  <div class="chip hex">Hex Color</div>
  <div class="chip rgba">RGBA Glass</div>
  <div class="chip gradient">Linear Gradient</div>
</div>`,
    starterCss: `.gradient-showcase {
  background: #030712;
  padding: 30px;
  border-radius: 12px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  font-family: system-ui, sans-serif;
}

.chip {
  padding: 16px 20px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-align: center;
  flex: 1;
  min-width: 120px;
}

/* 1. Hex Color */
.hex {
  background-color: #0284c7;
  border: 1px solid #38bdf8;
}

/* 2. RGBA with Transparency */
.rgba {
  background-color: rgba(56, 189, 248, 0.2);
  border: 1px solid rgba(56, 189, 248, 0.6);
  color: #38bdf8;
}

/* 3. Linear Gradient */
.gradient {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
}`,
    proTip: "Use RGBA for semi-transparent overlay cards and modal backdrops so the background subtly shines through.",
    challenge: "Change the gradient angle from `135deg` to `to right` and blend from `#0284c7` to `#10b981`."
  },
  {
    day: 5,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "Typography, Web Fonts & Text Hierarchy",
    subtitle: "Font weights, line heights, letter spacing, and readable text scaling",
    time: "20 Mins",
    concept: "Typography gives character and clarity to user interfaces. Key properties include `font-family`, `font-size`, `font-weight`, and `line-height`.",
    analogy: "Like typesetting a newspaper: clear prominent headlines guide the eye, while comfortable line spacing makes body paragraphs effortless to read.",
    keyPoints: [
      "`font-size: 1rem;` equals standard 16px root font size.",
      "`line-height: 1.6;` provides comfortable vertical rhythm between text lines.",
      "`letter-spacing: -0.02em;` gives modern, tight tracking to large headings."
    ],
    starterHtml: `<article class="article-preview">
  <span class="badge">Nextsem Tech Guide</span>
  <h1>The Secret to Clean CSS Typography</h1>
  <p>Learn how proper line-height and font-scaling transform your application from amateur to enterprise-grade.</p>
  <a href="#" class="read-more">Continue Reading →</a>
</article>`,
    starterCss: `.article-preview {
  background: #0f172a;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #1e293b;
  font-family: system-ui, -apple-system, sans-serif;
}

.badge {
  display: inline-block;
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 12px;
}

h1 {
  color: #f8fafc;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-bottom: 10px;
}

p {
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.read-more {
  color: #10b981;
  font-weight: 700;
  text-decoration: none;
  font-size: 14px;
}`,
    proTip: "Never use a unitless line-height below 1.4 for body text. 1.5 to 1.7 is optimal for readable digital text.",
    challenge: "Set `text-transform: uppercase;` and `letter-spacing: 0.05em;` on `h1`."
  },
  {
    day: 6,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "Display (Block, Inline, Inline-Block & None)",
    subtitle: "Understanding natural document flow and element formatting contexts",
    time: "20 Mins",
    concept: "The `display` property determines how an element behaves in the document flow. Block elements start on a new line and expand full width. Inline elements flow with text. Inline-block combines both behaviors.",
    analogy: "Block is an entire reserved park bench; Inline is a small handbag on someone's lap; Inline-block is a suitcase with custom dimensions placed on the bench.",
    keyPoints: [
      "`block` (`div`, `p`, `h1`): Takes a new line and stretches across the full available parent width.",
      "`inline` (`span`, `a`): Flows inside sentences and ignores `width` and `height` properties.",
      "`inline-block`: Sits inline with text while fully respecting custom `width`, `height`, and `padding`.",
      "`display: none`: Removes the element completely from document rendering."
    ],
    starterHtml: `<div class="demo-box">
  <div class="block-demo">I am a Block element (Full width)</div>
  <p>
    Here is an <span class="inline-demo">Inline tag</span> and an 
    <span class="inline-block-demo">Inline-Block tag</span> inside text.
  </p>
</div>`,
    starterCss: `.demo-box {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
  color: #f1f5f9;
}

.block-demo {
  display: block;
  background: #3b82f6;
  color: white;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 6px;
  font-weight: 700;
}

.inline-demo {
  display: inline;
  background: #ef4444;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
}

.inline-block-demo {
  display: inline-block;
  background: #10b981;
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 700;
  margin: 0 4px;
}`,
    proTip: "Use `display: inline-block` or `inline-flex` for buttons and badges so their padding and alignment stay consistent.",
    challenge: "Set `display: inline-block;` on `.block-demo` and see it shrink to fit its content width."
  },
  {
    day: 7,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "Weekly Project 1: Developer Profile Card",
    subtitle: "Combining box model, typography, colors, and display into a production card",
    time: "30 Mins",
    concept: "Synthesize all concepts from Days 1 to 6 to construct a polished, modern Developer Profile Card component complete with avatar rings, badges, metrics, and call-to-actions.",
    analogy: "Assembling your first complete software component using the foundational bricks of CSS.",
    keyPoints: [
      "Circular avatar created using `border-radius: 50%` and linear gradient rings.",
      "Metrics counters aligned with flexbox and uppercase subtitle tracking.",
      "Subtle multi-stop box shadows for realistic floating depth."
    ],
    starterHtml: `<div class="profile-card">
  <div class="avatar-ring">
    <div class="avatar">MK</div>
  </div>
  <h2>Manoj Kumar</h2>
  <span class="role-badge">Lead Frontend Engineer</span>
  <p class="bio">Building open-source developer platforms and interactive educational studios at Nextsem.</p>
  <div class="stats-row">
    <div class="stat"><span class="num">30</span><span class="label">Days</span></div>
    <div class="stat"><span class="num">117</span><span class="label">Tips</span></div>
    <div class="stat"><span class="num">100%</span><span class="label">Open</span></div>
  </div>
  <button class="follow-btn">Connect on GitHub</button>
</div>`,
    starterCss: `.profile-card {
  max-width: 320px;
  margin: 0 auto;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  font-family: system-ui, sans-serif;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);
}

.avatar-ring {
  width: 72px;
  height: 72px;
  margin: 0 auto 14px;
  padding: 3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #38bdf8, #10b981);
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #0284c7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
}

h2 {
  color: #f8fafc;
  font-size: 20px;
  margin-bottom: 4px;
}

.role-badge {
  display: inline-block;
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 14px;
}

.bio {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 18px;
}

.stats-row {
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  border-top: 1px solid #1e293b;
  border-bottom: 1px solid #1e293b;
  margin-bottom: 18px;
}

.stat .num {
  display: block;
  font-size: 18px;
  font-weight: 800;
  color: #f8fafc;
}

.stat .label {
  font-size: 11px;
  color: #64748b;
  text-transform: uppercase;
}

.follow-btn {
  width: 100%;
  background: #10b981;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s;
}

.follow-btn:hover {
  transform: translateY(-2px);
}`,
    proTip: "Use `box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);` to give elevation and depth without cluttering borders.",
    challenge: "Add a 4th column in the stats row for '⭐ 5.0 Rating'."
  },
  {
    day: 8,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "CSS Units (px, rem, em, %, vw & vh)",
    subtitle: "Choosing the correct sizing unit for responsive web design",
    time: "20 Mins",
    concept: "Pixels (`px`) are fixed absolute units, while `rem` is relative to the root `<html>` font-size. Viewport units (`vw`, `vh`) represent 1% of the browser window's width and height.",
    analogy: "Pixel is a rigid steel ruler; REM is a calibrated scale that scales up when visually impaired users zoom their browser.",
    keyPoints: [
      "`1rem` equals 16px by default in standard desktop browsers.",
      "`100vw` spans 100% of the visible viewport width.",
      "`100vh` spans 100% of the visible viewport height."
    ],
    starterHtml: `<div class="units-container">
  <div class="unit-card px-box">Fixed Pixels (200px)</div>
  <div class="unit-card rem-box">Scalable REM (15rem)</div>
  <div class="unit-card percent-box">Responsive Width (100%)</div>
</div>`,
    starterCss: `.units-container {
  background: #090d16;
  padding: 1.5rem;
  border-radius: 0.75rem;
  font-family: system-ui, sans-serif;
  color: white;
}

.unit-card {
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
}

.px-box {
  background: #3b82f6;
  width: 200px;
}

.rem-box {
  background: #10b981;
  width: 15rem;
}

.percent-box {
  background: #a855f7;
  width: 100%;
}`,
    proTip: "Use `rem` for font sizes, padding, and margins; use `px` for fine hairline borders (like 1px or 2px).",
    challenge: "Give the container `max-width: 600px; margin: 0 auto;` and observe horizontal centering."
  },
  {
    day: 9,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Positioning (Static, Relative, Absolute, Fixed & Sticky)",
    subtitle: "Precise coordinate placement and anchoring in the viewport",
    time: "25 Mins",
    concept: "CSS positioning removes elements from standard layout flow. An element with `position: absolute` is placed relative to its closest positioned ancestor (`position: relative`).",
    analogy: "Relative is shifting in your chair; Absolute is walking to a specific coordinate in the room; Fixed is a sticker on your computer screen.",
    keyPoints: [
      "`relative`: Preserves natural flow space while acting as a coordinate anchor for children.",
      "`absolute`: Removed from natural flow; positioned via `top`, `right`, `bottom`, `left`.",
      "`fixed`: Glued to the viewport screen regardless of user scroll.",
      "`sticky`: Toggles dynamically between relative and fixed based on scroll position."
    ],
    starterHtml: `<div class="post-card">
  <span class="badge-absolute">New</span>
  <h3>Featured Story</h3>
  <p>Learn how relative and absolute work as best friends in modern UI card design.</p>
</div>`,
    starterCss: `.post-card {
  position: relative;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 24px;
  color: white;
  font-family: system-ui, sans-serif;
}

.badge-absolute {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 6px;
}

h3 {
  color: #38bdf8;
  margin-bottom: 8px;
}

p {
  color: #94a3b8;
  font-size: 14px;
}`,
    proTip: "Whenever placing a badge or close button in the corner of a card, always give the parent `position: relative` and the badge `position: absolute`.",
    challenge: "Reposition the badge to `bottom: 12px; right: 12px;`."
  },
  {
    day: 10,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Z-Index & Stacking Context Layers",
    subtitle: "Controlling three-dimensional depth and visual overlap",
    time: "20 Mins",
    concept: "The `z-index` property dictates the order of elements along the virtual 3D Z-axis facing the user. Elements with higher integer values render on top of lower ones.",
    analogy: "A deck of playing cards: the card placed latest on top obscures the cards underneath.",
    keyPoints: [
      "`z-index` only works on elements with a `position` other than `static`.",
      "Higher numbers render in front (`z-index: 50` is above `z-index: 10`).",
      "Always use a deliberate, structured scale (1, 10, 50, 100) instead of random values like 999999."
    ],
    starterHtml: `<div class="stack-wrapper">
  <div class="layer layer-1">Layer 1 (z-index: 10)</div>
  <div class="layer layer-2">Layer 2 (z-index: 20)</div>
  <div class="layer layer-3">Layer 3 (z-index: 30 - Top!)</div>
</div>`,
    starterCss: `.stack-wrapper {
  position: relative;
  height: 180px;
  background: #020617;
  border-radius: 12px;
  padding: 20px;
  font-family: system-ui, sans-serif;
}

.layer {
  position: absolute;
  width: 200px;
  padding: 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.layer-1 {
  background: #3b82f6;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.layer-2 {
  background: #10b981;
  top: 45px;
  left: 60px;
  z-index: 20;
}

.layer-3 {
  background: #ec4899;
  top: 70px;
  left: 100px;
  z-index: 30;
}`,
    proTip: "Use structured design tokens for layers: Background (0), Card (1), Dropdown (10), Sticky Nav (50), Modal Overlay (100).",
    challenge: "Give Layer 1 a `z-index: 40` and observe how it jumps in front of all other layers."
  },
  {
    day: 11,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Flexbox Fundamentals (Direction, Justify & Align)",
    subtitle: "One-dimensional alignment along the main and cross axes",
    time: "25 Mins",
    concept: "Flexbox is a 1-dimensional layout module that distributes space and aligns items along a single axis (row or column). It makes horizontal centering and spacing completely effortless.",
    analogy: "Arranging books on a shelf with adjustable bookends and uniform gaps.",
    keyPoints: [
      "`display: flex;` activates the flexbox container.",
      "`justify-content` aligns items along the main axis (`flex-start`, `center`, `space-between`).",
      "`align-items` aligns items along the cross axis (`stretch`, `center`, `baseline`)."
    ],
    starterHtml: `<div class="navbar-demo">
  <div class="logo">⚡ Nextsem</div>
  <div class="nav-links">
    <span>Home</span>
    <span>Courses</span>
    <span>Studios</span>
  </div>
  <button class="sign-btn">Sign In</button>
</div>`,
    starterCss: `.navbar-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f172a;
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid #1e293b;
  font-family: system-ui, sans-serif;
  color: white;
}

.logo {
  font-weight: 800;
  color: #38bdf8;
}

.nav-links {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #94a3b8;
}

.sign-btn {
  background: #10b981;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
}`,
    proTip: "Use `gap: 16px;` to space flex children evenly without needing margin overrides on child elements.",
    challenge: "Switch `justify-content: space-between;` to `justify-content: center;` with `gap: 24px;`."
  },
  {
    day: 12,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Flexbox Advanced (Wrap, Grow, Shrink & Basis)",
    subtitle: "Fluid multi-line flex layouts and dynamic proportional sizing",
    time: "25 Mins",
    concept: "`flex-wrap: wrap;` allows flex items to wrap across multiple lines when they run out of container space. The `flex` shorthand controls growth, shrinkage, and baseline width.",
    analogy: "Word processing: when typed words reach the margin, they wrap cleanly to the next line without overflowing.",
    keyPoints: [
      "`flex-wrap: wrap;` prevents items from shrinking past readable limits or overflowing screens.",
      "`flex: 1;` instructs an item to expand and consume all available remaining space.",
      "`flex-shrink: 0;` prevents critical elements (like icons or tags) from being squished."
    ],
    starterHtml: `<div class="tag-cloud">
  <span class="tag">HTML5</span>
  <span class="tag">CSS3</span>
  <span class="tag">JavaScript</span>
  <span class="tag">Flexbox Mastery</span>
  <span class="tag">CSS Grid</span>
  <span class="tag">Responsive Web Design</span>
  <span class="tag">Modern UI</span>
</div>`,
    starterCss: `.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #1e293b;
  font-family: system-ui, sans-serif;
}

.tag {
  background: #1e293b;
  color: #38bdf8;
  border: 1px solid #334155;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s;
}

.tag:hover {
  background: #0284c7;
  color: white;
  border-color: #38bdf8;
}`,
    proTip: "For responsive card rows, use `flex: 1 1 250px;` so cards stretch to fill rows but wrap when narrower than 250px.",
    challenge: "Add `justify-content: center;` to the tag cloud to center-align the wrapped tag items."
  },
  {
    day: 13,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Weekly Project 2: Responsive Navbar & Breadcrumbs",
    subtitle: "Constructing production navigation with breadcrumb trails",
    time: "30 Mins",
    concept: "Build an enterprise navigation bar featuring brand insignia, interactive breadcrumb hierarchy, and theme controls using Flexbox.",
    analogy: "The GPS dashboard of your web platform: always showing where the user is and where they can go.",
    keyPoints: [
      "Sticky positioning keeps navigation pinned to the top on page scroll.",
      "Semantic breadcrumb trails improve user orientation and reduce bounce rates.",
      "Flex alignment creates seamless distribution across desktop and mobile screens."
    ],
    starterHtml: `<header class="app-header">
  <div class="brand">
    <span class="brand-icon">⚡</span>
    <span class="brand-name">StudyGuide</span>
  </div>
  <nav class="breadcrumb">
    <a href="#">Home</a>
    <span class="sep">›</span>
    <a href="#">Frontend</a>
    <span class="sep">›</span>
    <span class="current">Day 13</span>
  </nav>
  <button class="theme-btn">🌙 Dark</button>
</header>`,
    starterCss: `.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  background: #090d16;
  border-bottom: 1px solid #1e293b;
  padding: 12px 20px;
  border-radius: 10px;
  font-family: system-ui, sans-serif;
  color: white;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 16px;
}

.brand-icon {
  color: #38bdf8;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}

.breadcrumb a {
  color: #94a3b8;
  text-decoration: none;
}

.breadcrumb .sep {
  color: #475569;
}

.breadcrumb .current {
  color: #38bdf8;
  font-weight: 700;
}

.theme-btn {
  background: #1e293b;
  border: 1px solid #334155;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}`,
    proTip: "Use `aria-label=\"Breadcrumb\"` on `<nav>` for maximum accessibility compliance.",
    challenge: "Add a hover color transition of `#10b981` to the breadcrumb links."
  },
  {
    day: 14,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "CSS Grid Fundamentals (Columns, Rows & fr Units)",
    subtitle: "Two-dimensional layout orchestration with fractional tracks",
    time: "25 Mins",
    concept: "While Flexbox handles one dimension, CSS Grid provides complete two-dimensional control over rows and columns simultaneously. The `fr` unit represents a fraction of available free space.",
    analogy: "A graphic design layout grid: precise columns and rows where content snaps cleanly into place.",
    keyPoints: [
      "`display: grid;` establishes a grid formatting context.",
      "`grid-template-columns: repeat(3, 1fr);` creates three equal column tracks.",
      "`gap: 14px;` defines clean spacing between rows and columns without margins."
    ],
    starterHtml: `<div class="grid-3col">
  <div class="grid-cell cell-1">Column 1 (1fr)</div>
  <div class="grid-cell cell-2">Column 2 (1fr)</div>
  <div class="grid-cell cell-3">Column 3 (1fr)</div>
</div>`,
    starterCss: `.grid-3col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

.grid-cell {
  background: #1e293b;
  border: 1px solid #334155;
  padding: 24px;
  border-radius: 8px;
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
}

.cell-1 { border-top: 3px solid #38bdf8; }
.cell-2 { border-top: 3px solid #10b981; }
.cell-3 { border-top: 3px solid #f59e0b; }`,
    proTip: "Prefer `fr` units over percentages. `fr` subtracts gaps and borders automatically before allocating track widths.",
    challenge: "Test `grid-template-columns: 2fr 1fr 1fr;` to give the first column double width."
  },
  {
    day: 15,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "CSS Grid Advanced (Repeat, Minmax & Auto-Fit)",
    subtitle: "Zero-media-query responsive card grids",
    time: "25 Mins",
    concept: "`repeat(auto-fit, minmax(180px, 1fr))` is CSS Grid's most powerful formula. It creates an intrinsically responsive grid that automatically refits cards without writing a single media query.",
    analogy: "A smart bookshelf that automatically reorganizes books into more columns when expanded, and fewer rows when contracted.",
    keyPoints: [
      "`minmax(180px, 1fr)` guarantees a minimum width of 180px while expanding up to 1fr.",
      "`auto-fit` creates as many tracks as will fit on screen.",
      "Zero media queries needed for fluid card layouts."
    ],
    starterHtml: `<div class="auto-responsive-grid">
  <div class="card">Card 01</div>
  <div class="card">Card 02</div>
  <div class="card">Card 03</div>
  <div class="card">Card 04</div>
</div>`,
    starterCss: `.auto-responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  background: #020617;
  padding: 20px;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

.card {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border: 1px solid #334155;
  padding: 20px;
  border-radius: 8px;
  color: #38bdf8;
  font-weight: 700;
  text-align: center;
}`,
    proTip: "Whenever designing a grid for dynamic database records, always use `repeat(auto-fit, minmax(...))`.",
    challenge: "Increase the minimum column width to `200px` and observe the layout rearrangement."
  },
  {
    day: 16,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "Weekly Project 3: Modern Bento Grid Showcase",
    subtitle: "Building modern Apple & Vercel style multi-span dashboard grids",
    time: "35 Mins",
    concept: "The Bento Grid pattern organizes features into varied visual rectangular compartments. Key features span 2 columns or rows to create visual hierarchy.",
    analogy: "A Japanese Bento Box: neatly partitioned sections with rice, proteins, and vegetables of proportional sizes.",
    keyPoints: [
      "`grid-column: span 2;` causes an item to span across two horizontal columns.",
      "`grid-row: span 2;` causes an item to span down two vertical rows.",
      "Establish visual hierarchy by granting prominent features extra span."
    ],
    starterHtml: `<div class="bento-container">
  <div class="bento-card bento-hero">
    <h3>🚀 Ultra-Fast Engine</h3>
    <p>Sub-millisecond static page hydration with zero runtime bloat.</p>
  </div>
  <div class="bento-card">
    <h3>🔒 Zero Ads</h3>
    <p>Distraction-free learning.</p>
  </div>
  <div class="bento-card">
    <h3>⚡ 117+ Tips</h3>
    <p>Live interactive sandboxes.</p>
  </div>
</div>`,
    starterCss: `.bento-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  background: #030712;
  padding: 20px;
  border-radius: 14px;
  font-family: system-ui, sans-serif;
  color: white;
}

.bento-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  padding: 20px;
  border-radius: 12px;
}

.bento-hero {
  grid-column: span 2;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  border-color: #6366f1;
}

h3 {
  color: #38bdf8;
  font-size: 16px;
  margin-bottom: 6px;
}

.bento-hero h3 {
  color: #a5b4fc;
  font-size: 20px;
}

p {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
}`,
    proTip: "Use subtle semi-transparent borders (`rgba(255, 255, 255, 0.08)`) and high corner radiuses (16px) for an authentic Bento aesthetic.",
    challenge: "Add a 4th card for '🐙 GitHub Open Source' and assign it to 1 column."
  },
  {
    day: 17,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "Pseudo-Classes (:hover, :focus, :active, :checked)",
    subtitle: "Styling dynamic user interactions and form states",
    time: "20 Mins",
    concept: "Pseudo-classes style elements based on temporary states: when the mouse hovers over an item (`:hover`), when an input receives keyboard focus (`:focus`), or during a mouse press (`:active`).",
    analogy: "A physical button that lights up when you touch it, presses down when clicked, and springs back when released.",
    keyPoints: [
      "`:hover`: Styles applied when mouse pointer hovers over an element.",
      "`:focus`: Essential accessibility indicator when an input or link is focused.",
      "`:active`: Styles active during the physical click or touch press."
    ],
    starterHtml: `<div class="interactive-form">
  <input type="text" class="custom-input" placeholder="Enter your name...">
  <button class="interactive-btn">Save Changes</button>
</div>`,
    starterCss: `.interactive-form {
  background: #0f172a;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: system-ui, sans-serif;
}

.custom-input {
  background: #1e293b;
  border: 1px solid #334155;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.custom-input:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
}

.interactive-btn {
  background: #38bdf8;
  color: #04101e;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}

.interactive-btn:hover {
  background: #7dd3fc;
  transform: translateY(-1px);
}

.interactive-btn:active {
  transform: scale(0.97);
}`,
    proTip: "Never remove `outline: none;` without providing an explicit custom `:focus` state. Keyboard navigation depends on it.",
    challenge: "Set `background: #0284c7;` on the button's `:active` state."
  },
  {
    day: 18,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "Pseudo-Elements (::before & ::after)",
    subtitle: "Injecting decorative cosmetic elements without extra HTML tags",
    time: "25 Mins",
    concept: "Pseudo-elements (`::before` and `::after`) generate virtual DOM elements directly via CSS. They require the `content: \"\";` property to display.",
    analogy: "Pinning a medal or badge onto a jacket without having to alter the cloth itself.",
    keyPoints: [
      "`content: \"\";` is strictly mandatory for pseudo-elements to render.",
      "Perfect for decorative callout bars, quote marks, and animated status dots.",
      "Keeps HTML markup clean and semantic."
    ],
    starterHtml: `<div class="quote-card">
  <p class="quote-text">CSS is not just about aesthetics; it is about building clean interfaces that users love.</p>
  <span class="live-pill">Live Update</span>
</div>`,
    starterCss: `.quote-card {
  background: #0f172a;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #1e293b;
  font-family: system-ui, sans-serif;
  color: white;
}

.quote-text {
  position: relative;
  font-style: italic;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 16px;
  padding-left: 20px;
}

.quote-text::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #10b981;
  border-radius: 2px;
}

.live-pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.live-pill::before {
  content: "";
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}`,
    proTip: "If a pseudo-element is invisible, double-check that you included `content: \"\";`.",
    challenge: "Change the live dot in `.live-pill::before` to `#ef4444` (red)."
  },
  {
    day: 19,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "CSS Transitions & Timing Curves",
    subtitle: "Creating smooth property interpolations and cubic-bezier physics",
    time: "20 Mins",
    concept: "Transitions interpolate CSS properties smoothly over time instead of snapping instantly. You define the property, duration, and timing curve.",
    analogy: "An elevator moving smoothly with gradual acceleration and deceleration versus an instant teleporter.",
    keyPoints: [
      "`transition: property duration timing-function;`",
      "Use `cubic-bezier` timing curves for natural spring-like elasticity.",
      "Animate GPU-accelerated properties (`transform`, `opacity`) for smooth 60fps performance."
    ],
    starterHtml: `<div class="transition-demo">
  <button class="smooth-btn">Hover for Smooth Physics 🚀</button>
</div>`,
    starterCss: `.transition-demo {
  background: #090d16;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  font-family: system-ui, sans-serif;
}

.smooth-btn {
  background: #0284c7;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, box-shadow 0.3s ease;
}

.smooth-btn:hover {
  background: #38bdf8;
  color: #020617;
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.4);
}`,
    proTip: "Avoid using `transition: all`. Specifically list `transform, opacity, background-color` to prevent layout thrashing.",
    challenge: "Increase the duration to `0.6s` to observe slow-motion physics."
  },
  {
    day: 20,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "2D Transforms (Translate, Rotate, Scale & Skew)",
    subtitle: "Hardware-accelerated coordinate transformations",
    time: "20 Mins",
    concept: "Transforms alter the visual geometry of an element in 2D space without affecting surrounding layout geometry.",
    analogy: "Tilting or zooming a picture frame on the wall without shifting neighboring pictures.",
    keyPoints: [
      "`transform: translateY(-6px);` lifts cards upward cleanly.",
      "`transform: scale(1.1);` enlarges an element by 10%.",
      "`transform: rotate(45deg);` turns an element clockwise."
    ],
    starterHtml: `<div class="transform-grid">
  <div class="box rotate-box">Rotate 15°</div>
  <div class="box scale-box">Scale 1.1x</div>
  <div class="box move-box">Translate Y</div>
</div>`,
    starterCss: `.transform-grid {
  display: flex;
  gap: 20px;
  background: #0f172a;
  padding: 30px;
  border-radius: 12px;
  justify-content: center;
  font-family: system-ui, sans-serif;
}

.box {
  width: 100px;
  height: 100px;
  background: #1e293b;
  border: 1px solid #334155;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.rotate-box:hover {
  transform: rotate(15deg);
  border-color: #38bdf8;
}

.scale-box:hover {
  transform: scale(1.15);
  border-color: #10b981;
}

.move-box:hover {
  transform: translateY(-10px);
  border-color: #ec4899;
}`,
    proTip: "`transform` runs on the GPU compositor thread, making it the most performance-friendly way to animate elements.",
    challenge: "Test `transform: rotate(180deg);` on the rotate box."
  },
  {
    day: 21,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "Weekly Project 4: Interactive 3D Perspective Card Flip",
    subtitle: "Combining perspective, 3D space, and backface visibility",
    time: "35 Mins",
    concept: "Using `perspective: 1000px`, `transform-style: preserve-3d`, and `rotateY(180deg)` creates an interactive double-sided card flip with real physical depth.",
    analogy: "Flipping a physical business card over in your hand to view the back side.",
    keyPoints: [
      "`perspective: 1000px;` establishes 3D camera focal distance.",
      "`backface-visibility: hidden;` conceals the reverse side when flipped.",
      "`rotateY(180deg)` smoothly flips the card along its vertical Y-axis."
    ],
    starterHtml: `<div class="flip-wrapper">
  <div class="flip-inner">
    <div class="flip-front">
      <span class="icon">💎</span>
      <h3>Pro Tier Access</h3>
      <p>Hover to see features</p>
    </div>
    <div class="flip-back">
      <h3>Unlimited Access</h3>
      <p>117+ Tips & Studios</p>
      <button class="join-btn">Enroll Free</button>
    </div>
  </div>
</div>`,
    starterCss: `.flip-wrapper {
  background-color: transparent;
  width: 240px;
  height: 200px;
  perspective: 1000px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-wrapper:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.flip-front {
  background: #0f172a;
  border: 1px solid #38bdf8;
  color: white;
}

.flip-front .icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.flip-back {
  background: linear-gradient(135deg, #0284c7, #10b981);
  color: white;
  transform: rotateY(180deg);
}

.join-btn {
  margin-top: 10px;
  background: white;
  color: #0284c7;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
}`,
    proTip: "Ensure the parent wrapper has `perspective` and the rotating inner container has `transform-style: preserve-3d`.",
    challenge: "Change `rotateY(180deg)` to `rotateX(180deg)` to test a vertical flip."
  },
  {
    day: 22,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "CSS Keyframe Animations & Infinite Pulses",
    subtitle: "Complex multi-step animation timelines and looped micro-interactions",
    time: "25 Mins",
    concept: "Unlike transitions that require user triggers, `@keyframes` timelines run automatically on page load or loop indefinitely.",
    analogy: "A director's timeline sheet specifying exactly where lights and actors move across scenes.",
    keyPoints: [
      "`@keyframes animationName { 0% { } 100% { } }` defines key steps.",
      "`animation-iteration-count: infinite;` loops the animation forever.",
      "`animation: pulseGlow 2s infinite ease-out;` provides shorthand application."
    ],
    starterHtml: `<div class="pulse-showcase">
  <div class="beacon-circle">
    <div class="inner-dot"></div>
  </div>
  <p class="status-text">Server Status: Online & Hydrated</p>
</div>`,
    starterCss: `.pulse-showcase {
  background: #030712;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  font-family: system-ui, sans-serif;
  color: white;
}

.beacon-circle {
  width: 60px;
  height: 60px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: beaconPulse 2s infinite ease-out;
}

.inner-dot {
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 12px #10b981;
}

@keyframes beaconPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    transform: scale(0.95);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
    transform: scale(1.1);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    transform: scale(0.95);
  }
}

.status-text {
  font-size: 14px;
  color: #10b981;
  font-weight: 700;
}`,
    proTip: "Use pulse beacons for online server status indicators and live notification markers.",
    challenge: "Change the beacon color from `#10b981` (Green) to `#38bdf8` (Cyan)."
  },
  {
    day: 23,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Responsive Web Design & Mobile-First Queries",
    subtitle: "Adaptive breakpoints from smartphones to 4K desktop displays",
    time: "25 Mins",
    concept: "Responsive design guarantees clean presentation across all screen sizes. Mobile-First approaches define base styles for small screens first, then expand with `min-width` media queries for larger viewports.",
    analogy: "Like water adapting to any vessel: expanding to fill a wide bowl or stacking cleanly inside a tall glass.",
    keyPoints: [
      "`@media (min-width: 600px)` targets tablets and larger screens.",
      "Always write mobile-first CSS with `min-width` to prevent bloated overrides.",
      "The HTML viewport meta tag is essential for mobile device scaling."
    ],
    starterHtml: `<div class="responsive-banner">
  <div class="banner-content">
    <h2>Mobile First Experience</h2>
    <p>On phones: 1 Column Stacked. On Desktop: 2 Column Side-by-Side.</p>
  </div>
  <button class="banner-cta">Get Started</button>
</div>`,
    starterCss: `.responsive-banner {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 20px;
  color: white;
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
}

.banner-content h2 {
  color: #38bdf8;
  font-size: 18px;
  margin-bottom: 6px;
}

.banner-content p {
  color: #94a3b8;
  font-size: 13px;
}

.banner-cta {
  background: #10b981;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

@media (min-width: 600px) {
  .responsive-banner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 24px 30px;
  }
}`,
    proTip: "Standard mobile-first breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl).",
    challenge: "Add a font-size increase for `h2` inside the `@media` block."
  },
  {
    day: 24,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "CSS Variables (Custom Properties) & Design Tokens",
    subtitle: "Centralized design tokens and reusable visual values",
    time: "20 Mins",
    concept: "CSS Variables (`--variable-name`) store reusable values in `:root`. Updating one variable instantly cascades throughout the entire application.",
    analogy: "A master color palette: change the master brand swatch once, and every sign across the campus changes automatically.",
    keyPoints: [
      "`:root { --brand-color: #38bdf8; }` creates a global variable.",
      "Access variables anywhere using `var(--brand-color)`.",
      "Fundamental building block for theme switchers and design systems."
    ],
    starterHtml: `<div class="theme-box">
  <h2 class="title">Centralized Design Tokens</h2>
  <p class="desc">Change the CSS variable in :root to re-skin this entire card instantly.</p>
  <button class="action-btn">Themed Button</button>
</div>`,
    starterCss: `:root {
  --primary-accent: #38bdf8;
  --surface-bg: #0f172a;
  --text-main: #f8fafc;
  --text-dim: #94a3b8;
}

.theme-box {
  background: var(--surface-bg);
  border: 1px solid var(--primary-accent);
  border-radius: 12px;
  padding: 24px;
  font-family: system-ui, sans-serif;
}

.title {
  color: var(--primary-accent);
  font-size: 20px;
  margin-bottom: 8px;
}

.desc {
  color: var(--text-dim);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
}

.action-btn {
  background: var(--primary-accent);
  color: #030712;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
}`,
    proTip: "Provide fallbacks when consuming variables: `color: var(--brand-accent, #38bdf8);`.",
    challenge: "Update `--primary-accent` in `:root` to `#ec4899` (Hot Pink) and observe instant re-theming."
  },
  {
    day: 25,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Light & Dark Mode Theming Systems",
    subtitle: "Zero-bundle-bloat theme swapping using CSS custom properties",
    time: "25 Mins",
    concept: "By toggling a `.light-theme` class on the body, CSS variable values are swapped out seamlessly without reloading stylesheets.",
    analogy: "Flipping a light switch in a room: surfaces shift from dark to illuminated without changing physical furniture.",
    keyPoints: [
      "Define dark theme defaults in `:root`.",
      "Override variables inside `body.light-mode`.",
      "Synchronize user theme preferences with `localStorage`."
    ],
    starterHtml: `<div class="theme-card">
  <h3>Nextsem Adaptive Theme</h3>
  <p>Toggle between Dark Canvas and Clean Light Mode.</p>
  <button class="preview-btn">Interactive Theme Component</button>
</div>`,
    starterCss: `:root {
  --app-bg: #090d16;
  --app-card: #141e34;
  --app-text: #f8fafc;
  --app-text-muted: #94a3b8;
  --app-accent: #10b981;
}

body.light-mode {
  --app-bg: #f8fafc;
  --app-card: #ffffff;
  --app-text: #0f172a;
  --app-text-muted: #475569;
  --app-accent: #059669;
}

.theme-card {
  background: var(--app-card);
  color: var(--app-text);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 24px;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
  transition: all 0.3s ease;
}

h3 {
  color: var(--app-accent);
  margin-bottom: 8px;
}

p {
  color: var(--app-text-muted);
  font-size: 14px;
  margin-bottom: 16px;
}

.preview-btn {
  background: var(--app-accent);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 700;
}`,
    proTip: "Add `transition: background-color 0.3s ease, color 0.3s ease;` to `body` for smooth theme transitions.",
    challenge: "Add a subtle shadow to `.theme-card` when in light mode."
  },
  {
    day: 26,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "CSS Math Functions (calc, clamp, min & max)",
    subtitle: "Dynamic calculations and fluid typography without media queries",
    time: "20 Mins",
    concept: "`calc()` handles mathematical operations on mixed units (e.g. `100% - 30px`). `clamp(min, preferred, max)` scales typography fluidly based on viewport width.",
    analogy: "An adjustable elastic waistband that comfortably fits sizes 28 through 36.",
    keyPoints: [
      "`calc(100% - 20px)` requires whitespace around operator symbols.",
      "`font-size: clamp(1.2rem, 4vw, 2.2rem);` creates modern fluid headings.",
      "Min and max prevent text from becoming unreadably tiny or oversized."
    ],
    starterHtml: `<div class="math-demo">
  <h1 class="fluid-heading">Fluid Clamp Typography</h1>
  <p class="calc-box">Width: calc(100% - 30px) with auto-centering.</p>
</div>`,
    starterCss: `.math-demo {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
  text-align: center;
}

.fluid-heading {
  font-size: clamp(1.2rem, 4vw, 2.2rem);
  color: #38bdf8;
  font-weight: 900;
  margin-bottom: 12px;
}

.calc-box {
  width: calc(100% - 30px);
  margin: 0 auto;
  background: #1e293b;
  color: #94a3b8;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
}`,
    proTip: "In `calc()`, you must always have spaces around `+` and `-`. `calc(100%-20px)` will be rejected by the browser.",
    challenge: "Apply `clamp(0.9rem, 1.5vw, 1.1rem)` to the paragraph text."
  },
  {
    day: 27,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Modern Next-Gen Selectors (:has, :is, :where)",
    subtitle: "The parent selector revolution and zero-JS state styling",
    time: "25 Mins",
    concept: "The `:has()` relational pseudo-class styles parent elements based on child contents, eliminating dozens of lines of JavaScript state toggling.",
    analogy: "Illuminating the entire house porch light automatically whenever someone steps onto the front welcome mat.",
    keyPoints: [
      "`.card:has(input:invalid)` styles the entire parent card red when form validation fails.",
      "Supported across all modern browsers (Chrome, Safari, Firefox).",
      "`:is()` and `:where()` simplify complex repetitive selector lists."
    ],
    starterHtml: `<div class="form-container">
  <div class="field-card">
    <label>Standard Email (Valid):</label>
    <input type="email" value="manoj@nextsem.online" required>
  </div>
  <div class="field-card">
    <label>Invalid Field Test:</label>
    <input type="email" value="not-an-email" required>
  </div>
</div>`,
    starterCss: `.form-container {
  background: #090d16;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-family: system-ui, sans-serif;
  color: white;
}

.field-card {
  background: #1e293b;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.field-card:has(input:invalid) {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
}

.field-card:has(input:valid) {
  border-color: #10b981;
}

label {
  display: block;
  font-size: 13px;
  margin-bottom: 6px;
  color: #cbd5e1;
}

input {
  width: 100%;
  background: #0f172a;
  border: 1px solid #334155;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  box-sizing: border-box;
}`,
    proTip: "`:has()` unlocks conditional styles like dimming sibling list items when one item is hovered: `.list:has(li:hover) li:not(:hover) { opacity: 0.5; }`.",
    challenge: "Add `.field-card:has(input:focus) { border-color: #38bdf8; }` to highlight active inputs."
  },
  {
    day: 28,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Glassmorphism & Frosted Glass Effects",
    subtitle: "Backdrop filters, semi-translucent surfaces, and ambient glow",
    time: "20 Mins",
    concept: "Glassmorphism blends semi-transparent surfaces with background blur filters to create an authentic frosted-glass aesthetic inspired by modern macOS and iOS interfaces.",
    analogy: "Looking through a frosted shower glass window at colorful ambient lights behind it.",
    keyPoints: [
      "`backdrop-filter: blur(16px);` blurs background elements behind the surface.",
      "Semi-translucent fill: `background: rgba(15, 23, 42, 0.65);`",
      "Subtle 1px border stroke with alpha transparency gives authentic glass edge definition."
    ],
    starterHtml: `<div class="glass-scene">
  <div class="ambient-orb orb-1"></div>
  <div class="ambient-orb orb-2"></div>
  <div class="glass-card">
    <span class="pill">Glassmorphism 2.0</span>
    <h3>Frosted Glass UI</h3>
    <p>Modern backdrop-filter blur combined with subtle alpha borders.</p>
  </div>
</div>`,
    starterCss: `.glass-scene {
  position: relative;
  height: 220px;
  background: #030712;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, sans-serif;
}

.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
}

.orb-1 {
  width: 120px;
  height: 120px;
  background: #38bdf8;
  top: 20px;
  left: 40px;
}

.orb-2 {
  width: 140px;
  height: 140px;
  background: #ec4899;
  bottom: 10px;
  right: 50px;
}

.glass-card {
  position: relative;
  z-index: 10;
  width: 280px;
  padding: 24px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  color: white;
}

.pill {
  font-size: 11px;
  font-weight: 700;
  color: #38bdf8;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: block;
}

h3 {
  font-size: 18px;
  margin-bottom: 6px;
}

p {
  color: #cbd5e1;
  font-size: 13px;
  line-height: 1.4;
}
`,
    proTip: "Always include `-webkit-backdrop-filter: blur(...);` alongside `backdrop-filter` for full Safari and iOS compatibility.",
    challenge: "Increase the blur radius to `24px` and observe the enhanced frosted effect."
  },
  {
    day: 29,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Custom Scrollbars & Text Truncation",
    subtitle: "Styling scroll tracks and handling overflow with graceful ellipses",
    time: "20 Mins",
    concept: "Default browser scrollbars look bulky. Custom scrollbar pseudo-elements provide sleek dark scroll tracks, while text truncation gracefully terminates long strings with ellipses (`...`).",
    analogy: "Fitting a long movie title onto a cinema marquee ticket without overflowing the paper boundaries.",
    keyPoints: [
      "`::-webkit-scrollbar` configures track width and base color.",
      "`::-webkit-scrollbar-thumb` styles the draggable pill handle.",
      "Single-line truncation formula: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`"
    ],
    starterHtml: `<div class="tools-container">
  <div class="truncate-demo">
    <h4>Single Line Truncation:</h4>
    <p class="truncate-text">This is an extremely long lesson title that will be gracefully truncated with three dots on small screens.</p>
  </div>
  <div class="scroll-demo">
    <h4>Custom Styled Scrollbar:</h4>
    <div class="scroll-box">
      <p>Item 1: CSS Grid Architecture</p>
      <p>Item 2: Flexbox Fundamentals</p>
      <p>Item 3: Glassmorphism UI</p>
      <p>Item 4: Modern Bento Box</p>
      <p>Item 5: 3D Perspective Card</p>
      <p>Item 6: Responsive Media Queries</p>
    </div>
  </div>
</div>`,
    starterCss: `.tools-container {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: system-ui, sans-serif;
  color: white;
}

h4 {
  font-size: 13px;
  color: #38bdf8;
  margin-bottom: 8px;
}

.truncate-text {
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #1e293b;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  color: #94a3b8;
}

.scroll-box {
  height: 90px;
  overflow-y: auto;
  background: #020617;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #1e293b;
  font-size: 13px;
  color: #cbd5e1;
}

.scroll-box p {
  margin-bottom: 6px;
}

.scroll-box::-webkit-scrollbar {
  width: 6px;
}

.scroll-box::-webkit-scrollbar-track {
  background: #0f172a;
}

.scroll-box::-webkit-scrollbar-thumb {
  background: #38bdf8;
  border-radius: 10px;
}`,
    proTip: "Text truncation fails if `white-space: nowrap;` is omitted because text will wrap instead of overflowing horizontally.",
    challenge: "Change the scrollbar thumb color to `#10b981` (Emerald Green)."
  },
  {
    day: 30,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Capstone: Nextsem 30-Day Master Certificate",
    subtitle: "Showcase project synthesizing all foundational and advanced styling skills",
    time: "40 Mins",
    concept: "Congratulations on mastering the complete modern CSS3 curriculum! You now possess thorough expertise in the Box Model, Flexbox, Grid, Bento layouts, pseudo-elements, animations, responsive design, and CSS variables.",
    analogy: "Graduation ceremony: an authentic portfolio-grade artifact demonstrating your frontend craftsmanship.",
    keyPoints: [
      "All 30 days completed mastery badge.",
      "Live interactive responsive certificate preview.",
      "Ready to build high-performance web applications and production interfaces."
    ],
    starterHtml: `<div class="capstone-badge">
  <div class="trophy-icon">🏆</div>
  <h2>CSS3 30-Day Master Certified</h2>
  <span class="student-tag">Graduated Student • Nextsem Academy</span>
  <p class="summary-text">Successfully completed 30 days of structured CSS mastery: Box Model, Flexbox, Grid, Bento Layouts, Keyframe Animations & Glassmorphism UI.</p>
  <div class="badge-footer">
    <span class="stamp">✓ Verified Open Source</span>
    <span class="instructor">Instructor: Er. Manoj Kumar</span>
  </div>
</div>`,
    starterCss: `.capstone-badge {
  background: linear-gradient(135deg, #090d16 0%, #172554 100%);
  border: 2px solid #38bdf8;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.25);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  font-family: system-ui, sans-serif;
  color: white;
}

.trophy-icon {
  font-size: 48px;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 12px #f59e0b);
}

h2 {
  font-size: 24px;
  color: #38bdf8;
  margin-bottom: 6px;
  font-weight: 900;
}

.student-tag {
  display: inline-block;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.summary-text {
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.6;
  max-width: 440px;
  margin: 0 auto 20px;
}

.badge-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 14px;
  font-size: 12px;
  color: #94a3b8;
}

.stamp {
  color: #10b981;
  font-weight: 700;
}

.instructor {
  font-style: italic;
}`,
    proTip: "Feature this repository and live certification link (`https://github.com/nextsem-manoj/css`) prominently in your developer portfolio.",
    challenge: "Personalize the student tag with your own name and change the certificate border to gold `#f59e0b`."
  }
];

const dest = path.join(__dirname, 'days-curriculum.json');
fs.writeFileSync(dest, JSON.stringify(curriculum, null, 2), 'utf-8');
console.log(`Generated ${curriculum.length} days of 100% English structured CSS curriculum at ${dest}`);
