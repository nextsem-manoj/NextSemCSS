const fs = require('fs');
const path = require('path');

const curriculum = [
  {
    day: 1,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "CSS3 Introduction & Syntax",
    hindiTitle: "CSS क्या है और कैसे काम करता है?",
    time: "15 Mins",
    concept: "CSS (Cascading Style Sheets) web pages ko visually style karta hai. Agar HTML kisi ghar ki eent aur cement (skeleton) hai, toh CSS us ghar ka paint, marble, lights aur decoration hai.",
    analogy: "HTML = Body Skeleton 🦴 | CSS = Designer Clothes & Makeup 👔✨",
    keyPoints: [
      "Selector browser ko batata hai kahan style lagana hai (e.g. h1, p, button).",
      "Declaration block `{ }` me property aur value likhi jaati hai: `color: #38bdf8;`",
      "Harr line ke end me semicolon `;` lagana bilkul zaroori hai!"
    ],
    starterHtml: `<div class="hero-card">
  <h1>Welcome to CSS Mastery! 🚀</h1>
  <p>Learn modern web styling in 30 days.</p>
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
  font-family: sans-serif;
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
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}

.cta-btn:hover {
  opacity: 0.85;
}`,
    proTip: "Hamesha External CSS (`<link rel=\"stylesheet\" href=\"style.css\">`) use karein production websites ke liye taaki code reusable aur clean rahe.",
    challenge: "Button ka background color `#38bdf8` (Cyan) aur border-radius `20px` karke dekhein."
  },
  {
    day: 2,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "CSS Selectors (Tag, Class, ID & Universal)",
    hindiTitle: "Selectors: Element ko chunne ke tarike",
    time: "20 Mins",
    concept: "CSS Selectors se hum specific HTML elements ko target karte hain. Class `.` reusable hoti hai (kai elements par lag sakti hai), jabki ID `#` pure page par ek hi element ke liye hoti hai.",
    analogy: "Tag = Sabhi Students 🧑‍🎓 | Class = Uniform Pehne Group 👕 | ID = Roll Number 01 🆔",
    keyPoints: [
      "Universal Selector `*` pure page ke sabhi elements par apply hota hai.",
      "Class Selector `.` (dot) reusable styling ke liye best practice hai.",
      "ID Selector `#` (hash) highest priority rakhta hai, ise kam se kam use karein."
    ],
    starterHtml: `<div class="container">
  <h2 id="special-title">Product Catalog</h2>
  <div class="card active">Card 1: Featured Pro</div>
  <div class="card">Card 2: Standard Plan</div>
  <div class="card">Card 3: Free Starter</div>
</div>`,
    starterCss: `/* Universal Reset */
* {
  box-sizing: border-box;
  font-family: sans-serif;
}

.container {
  padding: 20px;
  background: #090d16;
  border-radius: 12px;
}

/* ID Selector */
#special-title {
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

/* Specific Active Class */
.card.active {
  background: #0284c7;
  color: white;
  border-color: #38bdf8;
  font-weight: bold;
}`,
    proTip: "ID selectors ki specificity bahut high hoti hai, isliye styles override karna mushkil hota hai. Layouts me 95% Class selectors hi use karein.",
    challenge: "Ek naya class `.card.warning` banayein jiska border `#ef4444` (Red) ho."
  },
  {
    day: 3,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "The CSS Box Model & Border-Box",
    hindiTitle: "Box Model: Content, Padding, Border aur Margin",
    time: "25 Mins",
    concept: "Browser me har HTML element ek rectangular box hota hai jisme 4 layers hoti hain: 1. Content, 2. Padding (andar ka space), 3. Border (deewar), 4. Margin (bahar ka space).",
    analogy: "Ek courier parcel 📦: Content = Item andar | Padding = Bubble wrap | Border = Gatta box | Margin = Do dabbo ke beech ka distance.",
    keyPoints: [
      "Padding element ke background color ke andar hoti hai.",
      "Margin transparent hoti hai aur padosi elements ko door karti hai.",
      "`box-sizing: border-box;` lagane se padding aur border width ke andar hi rehte hain, layout nahi toot ta!"
    ],
    starterHtml: `<div class="box-wrapper">
  <div class="box standard">
    <h3>Content Area</h3>
    <p>Padding (Inside) + Border + Margin (Outside)</p>
  </div>
</div>`,
    starterCss: `* {
  box-sizing: border-box; /* The Golden CSS Rule */
  margin: 0;
  padding: 0;
  font-family: sans-serif;
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
  
  /* 1. Inside Space (Padding) */
  padding: 24px;
  
  /* 2. Wall (Border) */
  border: 3px solid #10b981;
  border-radius: 8px;
  
  /* 3. Outside Space (Margin) */
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
    proTip: "Hamesha apni CSS file ke top par `* { box-sizing: border-box; }` reset rule likhein. Isse layout calculate karna 10 guna aasan ho jaata hai.",
    challenge: "Padding ko `40px` karein aur dekhein ki card ka total size border-box ki wajah se control me rehta hai."
  },
  {
    day: 4,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "Colors, RGBA & Modern Gradients",
    hindiTitle: "Colors, Opacity aur Gradients",
    time: "20 Mins",
    concept: "CSS me colors Hex code (`#38bdf8`), RGB (`rgb(56, 189, 248)`), RGBA (with alpha transparency), aur linear/radial gradients se banaye jaate hain.",
    analogy: "RGBA me 'A' (Alpha) ek transparent glass ki tarah hai: 1.0 = solid, 0.5 = adha transparent, 0.0 = gayab.",
    keyPoints: [
      "Hex Code: 6 digits (RRGGBB).",
      "RGBA me 4th value opacity (0 to 1) hoti hai: `rgba(0,0,0,0.5)`.",
      "Gradients ek smooth color transition banate hain: `linear-gradient(angle, color1, color2)`."
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
  font-family: sans-serif;
}

.chip {
  padding: 16px 20px;
  border-radius: 10px;
  font-weight: bold;
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
    proTip: "Background gradient ke sath text white rakhein aur halka drop-shadow add karein taaki readability best ho.",
    challenge: "Linear gradient ka direction `to right` se badal kar `to bottom right` karke naya color mix banayein."
  },
  {
    day: 5,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "Typography, Web Fonts & Text Hierarchy",
    hindiTitle: "Fonts, Text Size aur Heading Hierarchy",
    time: "20 Mins",
    concept: "Achi typography website ko professional banati hai. `font-family`, `font-size`, `font-weight`, aur `line-height` milkar text ko readable aur appealing banate hain.",
    analogy: "Typography ek book ki printing ki tarah hai: Title bada aur bold, body text aasan aur aakho ko sukoon dene wala.",
    keyPoints: [
      "`font-size: 1rem;` = 16px (standard root scale).",
      "`line-height: 1.6;` text ki do lines ke beech readable gap rakhta hai.",
      "`letter-spacing: -0.02em;` modern headings ko sleek look deta hai."
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
  line-height: 1.6; /* Critical for easy reading */
  margin-bottom: 16px;
}

.read-more {
  color: #10b981;
  font-weight: 700;
  text-decoration: none;
  font-size: 14px;
}`,
    proTip: "Paragraph text ke liye hamesha `line-height: 1.5` se `1.7` use karein. Isse mobile screen par text ghusa-ghusa nahi dikhta.",
    challenge: "`h1` me `letter-spacing: 0.05em;` aur `text-transform: uppercase;` try karein."
  },
  {
    day: 6,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "Display (Block, Inline, Inline-Block & None)",
    hindiTitle: "Display Properties: Elements screen par kaise baithenge",
    time: "20 Mins",
    concept: "`display` property decide karti hai element nayi line se shuru hoga ya text ke sath chalega. Block = poori line gherna, Inline = sirf apna text gherna, Inline-block = dono ke fayde!",
    analogy: "Block = Bus ki poori seat gherna 🪑 | Inline = Chhota sa hath-bag 👜 | Inline-Block = Bag jiska custom size hum set kar sakte hain.",
    keyPoints: [
      "`block` (div, p, h1): Nayi line leta hai aur full width gher leta hai.",
      "`inline` (span, a): Line me chalta hai, ispar width aur height kaam nahi karti.",
      "`inline-block`: Line me bhi chalta hai aur width/height/padding bhi accept karta hai!",
      "`display: none`: Element ko poori tarah screen se gayab kar deta hai."
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
  font-family: sans-serif;
  color: #f1f5f9;
}

.block-demo {
  display: block;
  background: #3b82f6;
  color: white;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 6px;
  font-weight: bold;
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
  font-weight: bold;
  margin: 0 4px;
  /* Width works on inline-block! */
}`,
    proTip: "Buttons aur Badges ke liye hamesha `display: inline-block` ya `inline-flex` use karein taaki unki padding aur alignment clean rahe.",
    challenge: "Block element par `display: inline-block;` lagakar dekhein ki woh full width chhodkar content ke barabar ho jaata hai."
  },
  {
    day: 7,
    week: 1,
    weekTitle: "Week 1: Fundamentals & Box Model",
    title: "Weekly Project 1: Developer Profile Card",
    hindiTitle: "प्रोजेक्ट 1: मॉडर्न डेवलपर प्रोफाइल कार्ड",
    time: "30 Mins",
    concept: "Pehle 6 dino ke seekhe hue Box Model, Colors, Typography aur Display ko combine karke ek complete professional Developer Profile Card banayein.",
    analogy: "Saare basics ko cement karke pehla working component banana! 🏆",
    keyPoints: [
      "Avatar image with circular border-radius 50%.",
      "Gradient badge for designation.",
      "Clean stat counters using inline-block spacing."
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
  font-family: sans-serif;
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
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

.follow-btn:hover {
  transform: translateY(-2px);
}`,
    proTip: "Card me `box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);` add karne se subtle 3D floating effect milta hai.",
    challenge: "Stats row me ek 4th stat '⭐ 5.0 Rating' add karke dekhein."
  },
  {
    day: 8,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "CSS Units (px, rem, em, %, vw & vh)",
    hindiTitle: "CSS Units: Kab px aur kab rem use karein?",
    time: "20 Mins",
    concept: "Pixels (`px`) fixed hote hain, jabki `rem` root font size par depend karta hai. Responsive websites me typography aur padding ke liye `rem` best practice hai.",
    analogy: "Pixel = Steel ka paimana 📏 (never flexes) | REM = Rubber band 🧵 (browser zoom hone par automatically scale hota hai).",
    keyPoints: [
      "`1rem` = standard 16px (browser default).",
      "`100vw` = screen ki poori width (100% of Viewport Width).",
      "`100vh` = screen ki poori height (100% of Viewport Height)."
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
  font-family: sans-serif;
  color: white;
}

.unit-card {
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
}

.px-box {
  background: #3b82f6;
  width: 200px; /* Fixed, will not stretch */
}

.rem-box {
  background: #10b981;
  width: 15rem; /* Scales with user font size preference */
}

.percent-box {
  background: #a855f7;
  width: 100%; /* Fluid, fills parent container */
}`,
    proTip: "Font-size, padding aur margins ke liye `rem` use karein; 1px borders ke liye `px` use karein.",
    challenge: "Container ko `max-width: 600px; margin: 0 auto;` dekar dekhein ki screen par center kaise hota hai."
  },
  {
    day: 9,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Positioning (Static, Relative, Absolute, Fixed & Sticky)",
    hindiTitle: "Positioning: Elements ko apni marzi se kisi bhi jagah bithana",
    time: "25 Mins",
    concept: "Normal flow todkar kisi element ko bilkul upar, kone me ya screen par chipkane ke liye `position` use hoti hai. Absolute tabhi kaam karta hai jab parent `relative` ho!",
    analogy: "Relative = Apni kursi par thoda khisakna 🪑 | Absolute = Room ke kisi bhi kone me ja kar khade hona 📍.",
    keyPoints: [
      "`relative`: Element apni jagah par rehta hai par anchor ban jaata hai.",
      "`absolute`: Parent ke respect me `top: 0; right: 0;` par chala jaata hai.",
      "`fixed`: Screen scroll karne par bhi ek hi jagah chipka rehta hai (e.g. Chat bot button).",
      "`sticky`: Scroll hote hue top par aakar chipak jaata hai."
    ],
    starterHtml: `<div class="post-card">
  <span class="badge-absolute">New</span>
  <h3>Featured Story</h3>
  <p>Learn how relative and absolute work as best friends in modern UI card design.</p>
</div>`,
    starterCss: `.post-card {
  /* Critical Anchor Point */
  position: relative;
  
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 24px;
  color: white;
  font-family: sans-serif;
}

/* Absolute inside Relative Parent */
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
    proTip: "Jab bhi kisi badge ya close icon ko card ke kone me lagana ho: Parent ko `position: relative` aur badge ko `position: absolute` do!",
    challenge: "Badge ko `top: 12px; right: 12px;` se badal kar `bottom: 12px; right: 12px;` karke dekhein."
  },
  {
    day: 10,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Z-Index & Stacking Context (Layers Ka Khel)",
    hindiTitle: "Z-Index: Kaun sa element kiske upar dikhega",
    time: "20 Mins",
    concept: "Z-index 3D depth control karta hai (screen ke andar ya bahar). Jiska z-index zyada hoga, woh dusre element ke upar dikhega.",
    analogy: "Taash ke patte (Cards) 🃏: Jise sabse baad me upar rakha, wohi sabse upar dikhega.",
    keyPoints: [
      "`z-index` sirf unhi elements par kaam karta hai jinka `position` static na ho (relative, absolute, fixed).",
      "Higher number = Front layer (`z-index: 50` stays on top of `z-index: 10`).",
      "Modals aur Dropdowns hamesha high z-index mangte hain."
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
  font-family: sans-serif;
}

.layer {
  position: absolute;
  width: 200px;
  padding: 16px;
  border-radius: 8px;
  font-weight: bold;
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
    proTip: "Random numbers (jaise 999999) use karne se bachein. Ek structured scale use karein: Base (1), Dropdown (10), Sticky Nav (50), Modal (100).",
    challenge: "Layer-1 ka z-index `40` karke dekhein ki woh sabse peeche se aakar sabse aage aa jaati hai."
  },
  {
    day: 11,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Flexbox Fundamentals (Direction, Justify & Align)",
    hindiTitle: "Flexbox Part 1: Row, Justify Content aur Align Items",
    time: "25 Mins",
    concept: "Flexbox 1-dimensional layout tool hai jo elements ko ek seedhi line (row ya column) me effortlessly arrange aur center karta hai. CSS me centering ka sabse aasan formula Flexbox hai!",
    analogy: "Assembly line me bacho ko height aur spacing se khada karna 🧑‍🤝‍🧑.",
    keyPoints: [
      "`display: flex;` parent ko flex-container bana deta hai.",
      "`justify-content` horizontal alignment (main-axis) control karta hai (`center`, `space-between`).",
      "`align-items` vertical alignment (cross-axis) control karta hai (`center`)."
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
  /* The Magic Flexbox Container */
  display: flex;
  justify-content: space-between; /* Space out ends */
  align-items: center;            /* Center vertically */
  
  background: #0f172a;
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid #1e293b;
  font-family: sans-serif;
  color: white;
}

.logo {
  font-weight: 800;
  color: #38bdf8;
}

.nav-links {
  display: flex;
  gap: 16px; /* Super easy spacing between items */
  font-size: 14px;
  color: #94a3b8;
}

.sign-btn {
  background: #10b981;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}`,
    proTip: "Do items ke beech spacing dene ke liye `gap: 16px;` use karein; puraani margin tricks bhool jaiye!",
    challenge: "`justify-content: space-between;` ko `justify-content: center;` aur `gap: 24px;` karke dekhein."
  },
  {
    day: 12,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Flexbox Advanced (Wrap, Grow, Shrink & Basis)",
    hindiTitle: "Flexbox Part 2: Wrapping aur Flex Grow",
    time: "25 Mins",
    concept: "Jab items zyada ho jayein toh `flex-wrap: wrap;` unhe agali line me bhej deta hai. `flex: 1;` item ko bachi hui space lene ke liye bolta hai.",
    analogy: "Word processor me type karna: jab line bhar jaati hai, words automatically nayi line par aa jaate hain 📝.",
    keyPoints: [
      "`flex-wrap: wrap;` se items mobile par screen ke bahar nahi bhagte.",
      "`flex: 1;` elements ko barabar-barabar available width me faila deta hai.",
      "`flex-shrink: 0;` element ko dabne (chhota hone) se rokta hai."
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
  flex-wrap: wrap; /* Automatically wraps to next line */
  gap: 10px;
  
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #1e293b;
  font-family: sans-serif;
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
    proTip: "Responsive card grids me `flex: 1 1 250px;` use karein: iska matlab min-width 250px rahegi aur baaki space card stretch karke fill karega.",
    challenge: "`tag-cloud` me `justify-content: center;` add karke tags ko center me arrange karein."
  },
  {
    day: 13,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "Weekly Project 2: Responsive Navbar with Breadcrumbs",
    hindiTitle: "प्रोजेक्ट 2: रेस्पॉन्सिव नेविगेशन बार और ब्रेडक्रम्स",
    time: "30 Mins",
    concept: "Flexbox ka real-world production level component: Ek professional desktop & mobile navbar breadcrumbs ke sath.",
    analogy: "Website ka GPS Navigation System 🧭.",
    keyPoints: [
      "Sticky positioning taaki scroll karne par top par tiki rahe.",
      "Breadcrumbs path (Home > Class > Subject).",
      "Dynamic action buttons with flex alignment."
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
  font-family: sans-serif;
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
  font-weight: bold;
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
    proTip: "Breadcrumb navigation user ko batati hai ki woh website me kis gehrai par hain. Isse bounce rate kam hota hai.",
    challenge: "Breadcrumb ke pehle `Home` link par hover karne par color `#10b981` (Green) karke dekhein."
  },
  {
    day: 14,
    week: 2,
    weekTitle: "Week 2: Positioning, Layouts & Flexbox",
    title: "CSS Grid Fundamentals (Columns, Rows & fr Units)",
    hindiTitle: "CSS Grid Part 1: Columns, Rows aur fr Units",
    time: "25 Mins",
    concept: "Flexbox 1-D hota hai (sirf row ya column), jabki CSS Grid 2-Dimensional layout system hai jo ek sath Rows aur Columns dono ko control karta hai. `fr` ka matlab 'fraction of free space'.",
    analogy: "Excel spreadsheet ka table jisme cells me content fix hota hai 📊.",
    keyPoints: [
      "`display: grid;` grid system activate karta hai.",
      "`grid-template-columns: repeat(3, 1fr);` 3 barabar columns banata hai.",
      "`gap: 16px;` rows aur columns ke beech clean space deta hai."
    ],
    starterHtml: `<div class="grid-3col">
  <div class="grid-cell cell-1">Column 1 (1fr)</div>
  <div class="grid-cell cell-2">Column 2 (1fr)</div>
  <div class="grid-cell cell-3">Column 3 (1fr)</div>
</div>`,
    starterCss: `.grid-3col {
  /* 2D Grid Setup */
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal tracks */
  gap: 14px;
  
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  font-family: sans-serif;
}

.grid-cell {
  background: #1e293b;
  border: 1px solid #334155;
  padding: 24px;
  border-radius: 8px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}

.cell-1 { border-top: 3px solid #38bdf8; }
.cell-2 { border-top: 3px solid #10b981; }
.cell-3 { border-top: 3px solid #f59e0b; }`,
    proTip: "Percentage (%) use karne ke bajay `fr` (fraction) use karein. `fr` gaps aur borders ko automatically subtract karke barabar divide karta hai.",
    challenge: "`grid-template-columns: 2fr 1fr 1fr;` karke dekhein ki pehla column double wide kaise banta hai."
  },
  {
    day: 15,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "CSS Grid Advanced (Repeat, Minmax & Template Areas)",
    hindiTitle: "CSS Grid Part 2: Auto-Fit, Minmax aur Bento Layout",
    time: "25 Mins",
    concept: "`repeat(auto-fit, minmax(200px, 1fr))` CSS Grid ka sabse powerful formula hai. Yeh bina kisi media query ke responsive grid cards bana deta hai!",
    analogy: "Ek smart bookshelf 📚: jab shelf chhota ho toh kitaabein niche aa jaati hain, jab bada ho toh ek line me fail jaati hain.",
    keyPoints: [
      "`minmax(200px, 1fr)`: Minimum 200px rahega, maximum failkar 1fr le lega.",
      "`auto-fit`: Screen par jitne cards fit ho sakein utne columns auto bana deta hai.",
      "Zero media queries needed for basic responsive card grids!"
    ],
    starterHtml: `<div class="auto-responsive-grid">
  <div class="card">Card 01</div>
  <div class="card">Card 02</div>
  <div class="card">Card 03</div>
  <div class="card">Card 04</div>
</div>`,
    starterCss: `.auto-responsive-grid {
  display: grid;
  /* The Universal Zero-Media-Query Responsive Grid */
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  
  background: #020617;
  padding: 20px;
  border-radius: 12px;
  font-family: sans-serif;
}

.card {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border: 1px solid #334155;
  padding: 20px;
  border-radius: 8px;
  color: #38bdf8;
  font-weight: bold;
  text-align: center;
}`,
    proTip: "Jab bhi dynamic content ho jahan cards ki sankhya fix na ho, hamesha `repeat(auto-fit, minmax(...))` use karein.",
    challenge: "Minimum width ko `140px` se badal kar `180px` karein aur preview me columns ka behavior dekhein."
  },
  {
    day: 16,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "Weekly Project 3: Apple & Vercel Bento Grid Showcase",
    hindiTitle: "प्रोजेक्ट 3: मॉडर्न बेन्टो ग्रिड लेआउट (Apple / Vercel Style)",
    time: "35 Mins",
    concept: "Bento Grid modern websites (Apple, Linear, Vercel) ka trending design pattern hai jisme cards different sizes ke hote hain (kuch 2 columns cover karte hain, kuch 2 rows).",
    analogy: "Japanese Bento Box 🍱 jisme chawal, sabzi aur salad alag-alag aakar ke dabbo me arrange hote hain.",
    keyPoints: [
      "`grid-column: span 2;` card ko do columns jitna chauda banata hai.",
      "`grid-row: span 2;` card ko do rows jitna lamba banata hai.",
      "Visual hierarchy: sabse important feature card ko `span 2` dein."
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
  font-family: sans-serif;
  color: white;
}

.bento-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  padding: 20px;
  border-radius: 12px;
}

/* Bento Hero Spans 2 Columns */
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
    proTip: "Bento Grids me `border-radius: 16px;` aur subtle outer borders (`rgba(255,255,255,0.08)`) se aesthetic clean lagti hai.",
    challenge: "Ek naya card '🐙 GitHub Repos' add karein aur usko 1 column assign karein."
  },
  {
    day: 17,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "Pseudo-Classes (:hover, :focus, :active, :checked)",
    hindiTitle: "Pseudo-Classes: Mouse aur User Actions par styling",
    time: "20 Mins",
    concept: "Pseudo-class kisi element ki special state ko style karti hai, jaise jab mouse uspar hover kare (`:hover`), jab button click ho raha ho (`:active`), ya input par focus ho (`:focus`).",
    analogy: "Light ka switch 💡: Normal = Band | Press kiya = On | Chhod diya = Normal.",
    keyPoints: [
      "`:hover`: Mouse aane par change hone wali properties.",
      "`:focus`: Form input select hone par accessibility ring highlight.",
      "`:active`: Click dabane ke waqt ki state (e.g. Button dabne ka animation)."
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
  font-family: sans-serif;
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

/* Pseudo-Class: Focus */
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
  font-weight: bold;
  cursor: pointer;
  transition: all 0.15s ease;
}

/* Pseudo-Class: Hover */
.interactive-btn:hover {
  background: #7dd3fc;
  transform: translateY(-1px);
}

/* Pseudo-Class: Active (Clicked state) */
.interactive-btn:active {
  transform: scale(0.97);
}`,
    proTip: "Form inputs me `outline: none;` ke sath hamesha custom `:focus` state zaroor dein taaki keyboard users ko pata chale focus kahan hai.",
    challenge: "Button ke `:active` state par background color `#0284c7` karke dekhein."
  },
  {
    day: 18,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "Pseudo-Elements (::before & ::after Magic)",
    hindiTitle: "Pseudo-Elements: Bina HTML ke nayi cheez create karna",
    time: "25 Mins",
    concept: "Pseudo-elements HTML me extra tags likhe bina CSS se cosmetic elements insert karte hain. `::before` element se pehle aur `::after` element ke baad inject karta hai. Hamesha `content: \"\";` likhna zaroori hota hai!",
    analogy: "Jacket par extra badge ya medal pin karna bina naye kapde sile 🎖️.",
    keyPoints: [
      "`content: \"\";` pseudo-element ke liye mandatory property hai.",
      "Custom underline animations, decorative dots, aur quote marks ke liye best.",
      "HTML clean rehta hai aur design CSS me manage hota hai."
    ],
    starterHtml: `<div class="quote-card">
  <p class="quote-text">CSS is not just about making things look good; it is about building clean interfaces that users love.</p>
  <span class="live-pill">Live Update</span>
</div>`,
    starterCss: `.quote-card {
  background: #0f172a;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #1e293b;
  font-family: sans-serif;
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

/* Pseudo-Element ::before for Quote Bar */
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
  font-weight: bold;
}

/* Pseudo-Element ::before for Glowing Green Dot */
.live-pill::before {
  content: "";
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}`,
    proTip: "Agar pseudo-element screen par na dikhe, toh check karein ki kya aapne `content: \"\";` likha hai ya nahi!",
    challenge: "`live-pill::before` ka color `#ef4444` (Red live dot) karke dekhein."
  },
  {
    day: 19,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "CSS Transitions & Timing Curves",
    hindiTitle: "Transitions: Jhatke se nahi, makkhan jaise smooth changes",
    time: "20 Mins",
    concept: "Jab koi property change hoti hai (jaise hover par background color), toh Transition use jhatke (snap) ke bajay smooth animation ke sath badalti hai.",
    analogy: "Fan switch: Ekdum band hona vs dheere-dheere smooth rukhna 🌀.",
    keyPoints: [
      "`transition: property duration timing-function;`",
      "Shorthand: `transition: all 0.3s ease;`",
      "`cubic-bezier` se natural bouncy physics create hoti hai."
    ],
    starterHtml: `<div class="transition-demo">
  <button class="smooth-btn">Hover for Smooth Physics 🚀</button>
</div>`,
    starterCss: `.transition-demo {
  background: #090d16;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  font-family: sans-serif;
}

.smooth-btn {
  background: #0284c7;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  
  /* The Transition Formula */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, box-shadow 0.3s ease;
}

.smooth-btn:hover {
  background: #38bdf8;
  color: #020617;
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.4);
}`,
    proTip: "Sabhi cheezon par `transition: all` lagane se performance slow ho sakti hai. Specific properties transition karein jaise `transform, opacity` jo GPU-accelerated hoti hain.",
    challenge: "Transition duration `0.3s` se `0.6s` karke slow-motion hover dekhein."
  },
  {
    day: 20,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "2D Transforms (Translate, Rotate, Scale & Skew)",
    hindiTitle: "2D Transforms: Ghumana, Khinchana aur Bada Karna",
    time: "20 Mins",
    concept: "Transforms elements ko 2D space me move (`translate`), rotate (`rotate`), scale (`scale`), aur skew karti hain bina surrounding layout ko disturb kiye.",
    analogy: "Photograph ko frame me thoda sa tilt karna ya zoom in karna 🖼️.",
    keyPoints: [
      "`transform: translateY(-5px);` card ko lift up karta hai.",
      "`transform: scale(1.1);` element ko 10% bada karta hai.",
      "`transform: rotate(45deg);` element ko 45 degree ghumata hai."
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
  font-family: sans-serif;
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
  font-weight: bold;
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
    proTip: "`transform` browser ke GPU (Graphics Processor) par chalta hai, isliye yeh animation 60FPS ultra-smooth deti hai.",
    challenge: "`rotate-box` ko `rotate(180deg)` karke ulta karke dekhein."
  },
  {
    day: 21,
    week: 3,
    weekTitle: "Week 3: CSS Grid, Bento & UI Systems",
    title: "Weekly Project 4: Interactive 3D Perspective Card Flip",
    hindiTitle: "प्रोजेक्ट 4: 3D पर्सपेक्टिव कार्ड फ्लिप एनीमेशन",
    time: "35 Mins",
    concept: "CSS 3D properties (`perspective`, `transform-style: preserve-3d`, `rotateY`) se hover karne par card ka peeche ka hissa flip hokar samne aane lagta hai.",
    analogy: "Visiting card ko haath me palatna 🪪.",
    keyPoints: [
      "`perspective: 1000px;` 3D depth camera activate karta hai.",
      "`backface-visibility: hidden;` ulti side ko chhupa deta hai.",
      "`transform: rotateY(180deg);` card ko 180 degree palat deta hai."
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
  perspective: 1000px; /* 3D Camera */
  margin: 0 auto;
  font-family: sans-serif;
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
  backface-visibility: hidden; /* Hides reverse side */
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
  font-weight: bold;
  cursor: pointer;
}`,
    proTip: "Flip cards marketing landing pages par pricing plans aur member features highlight karne ke liye bahut engaging hote hain.",
    challenge: "`rotateY(180deg)` ko `rotateX(180deg)` karke vertical flip test karein."
  },
  {
    day: 22,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "CSS Keyframe Animations & Infinite Pulses",
    hindiTitle: "Keyframe Animations: Infinite chalne wale animations",
    time: "25 Mins",
    concept: "Transitions sirf tab chalti hain jab koi user interact kare (hover). `@keyframes` se hum timeline animation banate hain jo page load hote hi automatically ya indefinitely chalti rehti hai.",
    analogy: "Movie ka storyboard: 0% par actor kahan hai, 50% par kahan jump karega, aur 100% par landing 🎬.",
    keyPoints: [
      "`@keyframes animationName { 0% { } 100% { } }`",
      "`animation: pulseGlow 2s infinite ease-in-out;`",
      "`animation-iteration-count: infinite;` animation ko endlessly loop karta hai."
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
  font-family: sans-serif;
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
  
  /* Applying the Keyframe Animation */
  animation: beaconPulse 2s infinite ease-out;
}

.inner-dot {
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 12px #10b981;
}

/* Defining the Keyframe Timeline */
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
  font-weight: bold;
}`,
    proTip: "Pulse beacons live servers, online status indicators, aur new feature alerts ke liye industry standard hain.",
    challenge: "Beacon ka color `#10b981` (Green) se badal kar `#38bdf8` (Cyan) karein."
  },
  {
    day: 23,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Responsive Design & Mobile-First Media Queries",
    hindiTitle: "Responsive Web Design: Mobile aur Desktop dono me perfect",
    time: "25 Mins",
    concept: "Responsive design ka matlab hai ki website mobile phone (chhoti screen) se lekar 4K monitor (badi screen) tak bina toote smoothly adapt kare. Media queries screen width ke hisab se style badalti hain.",
    analogy: "Paani ki tarah 🌊: Glass me dalo toh glass ka aakar, bottle me dalo toh bottle ka aakar.",
    keyPoints: [
      "`@media (min-width: 768px)`: Tablet aur desktop ke liye styles.",
      "Mobile-First: Pehle mobile ke liye simple styles likhein, fir screen badi hone par columns banayein.",
      "`viewport` meta tag HTML me hona zaroori hai."
    ],
    starterHtml: `<div class="responsive-banner">
  <div class="banner-content">
    <h2>Mobile First Experience</h2>
    <p>On phone: 1 Column Stacked. On Desktop: 2 Column Side-by-Side.</p>
  </div>
  <button class="banner-cta">Get Started</button>
</div>`,
    starterCss: `/* 1. Base Mobile Styles */
.responsive-banner {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 20px;
  color: white;
  font-family: sans-serif;
  
  /* Mobile: Stack vertically */
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
  font-weight: bold;
  cursor: pointer;
}

/* 2. Desktop Enhancement (min-width: 600px) */
@media (min-width: 600px) {
  .responsive-banner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 24px 30px;
  }
}`,
    proTip: "Hamesha `min-width` queries use karein (`Mobile-First`), `max-width` queries se code ulta aur complex ho jaata hai.",
    challenge: "Media query ke andar h2 ka font-size `24px` karke dekhein."
  },
  {
    day: 24,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "CSS Variables (Custom Properties) & Design Tokens",
    hindiTitle: "CSS Variables: Ek jagah badlo, poori website me change",
    time: "20 Mins",
    concept: "CSS Variables (`--variable-name`) se hum brand colors aur spacing values ko ek jagah `:root` me define karte hain aur `var(--name)` se use karte hain. Agar brand color badalna ho toh sirf 1 line change karni padti hai!",
    analogy: "Global master key 🔑 jo poore building ke doors ek sath unlock karti hai.",
    keyPoints: [
      "`:root { --brand-color: #38bdf8; }` global scope banata hai.",
      "`var(--brand-color)` se property apply hoti hai.",
      "Dark mode aur white-label themes ke liye CSS Variables backbone hain."
    ],
    starterHtml: `<div class="theme-box">
  <h2 class="title">Centralized Design Tokens</h2>
  <p class="desc">Change the CSS variable in :root to re-skin this entire card instantly.</p>
  <button class="action-btn">Themed Button</button>
</div>`,
    starterCss: `/* Define Design Tokens in :root */
:root {
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
  font-family: sans-serif;
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
    proTip: "Variables me fallback value bhi de sakte hain: `var(--accent, #38bdf8)`.",
    challenge: "`:root` me `--primary-accent` ko `#ec4899` (Hot Pink) karke dekhein: Title, Border aur Button sab ek sath badal jayenge!"
  },
  {
    day: 25,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Light & Dark Mode Theming System",
    hindiTitle: "Dark Mode aur Light Mode: CSS Variables se live theme switch",
    time: "25 Mins",
    concept: "Body par `.light-theme` class lagate hi CSS Variables ki values swap ho jaati hain, jisse pure website ka theme bina kisi extra CSS file ke switch ho jaata hai.",
    analogy: "Room ki light switch on/off karna 💡.",
    keyPoints: [
      "Dark theme default `:root` me rakhein.",
      "`body.light-theme` me background aur text variables swap karein.",
      "100% smooth transition ke sath theme switch hota hai."
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

/* Light Theme Overrides */
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
  font-family: sans-serif;
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
  font-weight: bold;
}`,
    proTip: "Theme preference ko user ke browser me `localStorage.setItem('theme', 'dark')` karke save karein taaki page reload par bhi theme retain rahe.",
    challenge: "Light mode me `--app-card` ka border color dark gray dekar dekhein."
  },
  {
    day: 26,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "CSS Math Functions (calc, clamp, min & max)",
    hindiTitle: "CSS Math: calc() aur clamp() se fluid sizing",
    time: "20 Mins",
    concept: "`calc()` mathematical calculations karta hai (e.g. `100% - 40px`). `clamp(min, preferred, max)` responsive font sizes ke liye magical formula hai jo screen ke sath naturally bada-chhota hota hai bina media queries ke!",
    analogy: "Elastic waist band jo 28 se 36 size tak sabko comfortable fit ho 👖.",
    keyPoints: [
      "`calc(100% - 20px)` me plus/minus ke dono side space hona mandatory hai!",
      "`font-size: clamp(1.2rem, 3vw, 2.5rem);` fluid typography ka sabse modern formula hai.",
      "Min aur Max values screen ko extra chhota ya extra bada hone se rokti hain."
    ],
    starterHtml: `<div class="math-demo">
  <h1 class="fluid-heading">Fluid Clamp Typography</h1>
  <p class="calc-box">Width: calc(100% - 40px) with auto-centering.</p>
</div>`,
    starterCss: `.math-demo {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  font-family: sans-serif;
  text-align: center;
}

/* Fluid Heading using clamp() */
.fluid-heading {
  font-size: clamp(1.2rem, 4vw, 2.2rem);
  color: #38bdf8;
  font-weight: 900;
  margin-bottom: 12px;
}

/* Precise Width using calc() */
.calc-box {
  width: calc(100% - 30px);
  margin: 0 auto;
  background: #1e293b;
  color: #94a3b8;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
}`,
    proTip: "`calc(100% - 20px)` me agar aapne space nahi diya (jaise `100%-20px`), toh browser error dekar style ignore kar dega!",
    challenge: "`clamp(1rem, 2vw, 1.5rem)` ko paragraph text par apply karke dekhein."
  },
  {
    day: 27,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Modern Next-Gen Selectors (:has, :is, :where)",
    hindiTitle: "Next-Gen Selectors: :has() se Parent Selector ki azaadi",
    time: "25 Mins",
    concept: "Puraane CSS me parent ko child ke basis par style nahi kiya ja sakta tha (JavaScript lagti thi). Ab `:has()` selector se hum parent ko style kar sakte hain bina single line of JS ke!",
    analogy: "Ghar me agar guest aaya hai toh pure ghar ki light jalana 🏠💡.",
    keyPoints: [
      "`card:has(img)`: Sirf un cards ko style karega jisme image maujood hai.",
      "`form:has(:invalid)`: Agar form me koi input galat hai toh form ka border red kar do.",
      "Modern Chrome, Firefox, Safari sabhi me fully supported hai."
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
  font-family: sans-serif;
  color: white;
}

.field-card {
  background: #1e293b;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.2s;
}

/* The Magic :has() Parent Selector */
.field-card:has(input:invalid) {
  border-color: #ef4444; /* Highlights entire card in Red! */
  background: rgba(239, 68, 68, 0.08);
}

.field-card:has(input:valid) {
  border-color: #10b981; /* Highlights card in Green! */
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
    proTip: "`:has()` modern frontend developers ke liye superpowers jaisa hai jo 100 lines of state management code ko bacha deta hai.",
    challenge: "Card me `:has(input:focus)` add karke card ka shadow highlight karein."
  },
  {
    day: 28,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Glassmorphism & Frosted Glass Effects",
    hindiTitle: "Glassmorphism: iOS aur macOS jaisa frosted glass look",
    time: "20 Mins",
    concept: "Glassmorphism modern UI me frosted glass (dhundhla kanch) effect deta hai jisme peeche ka background blur hota hai aur aage ka card transparent rehta hai.",
    analogy: "Sardi ke mausam me gaadi ke sheeshe par aayi dhundh 🌫️.",
    keyPoints: [
      "`backdrop-filter: blur(12px);` peeche ki background ko blur karta hai.",
      "Semi-transparent background: `background: rgba(255, 255, 255, 0.08);`",
      "Subtle white border: `border: 1px solid rgba(255, 255, 255, 0.15);`"
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
  font-family: sans-serif;
}

/* Colorful Glowing Orbs Behind Glass */
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

/* The Frosted Glass Card */
.glass-card {
  position: relative;
  z-index: 10;
  width: 280px;
  padding: 24px;
  border-radius: 16px;
  
  /* The 3 Golden Rules of Glassmorphism */
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
}`,
    proTip: "Safari support ke liye `-webkit-backdrop-filter: blur(...)` lagana mat bhooliye!",
    challenge: "Blur ko `16px` se badal kar `24px` karke dekhein."
  },
  {
    day: 29,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Custom Scrollbars & Text Overflow Ellipsis",
    hindiTitle: "Custom Scrollbars aur Text Truncation",
    time: "20 Mins",
    concept: "Default browser scrollbars mote aur ajeeb lagte hain. CSS se hum sleek dark scrollbars bana sakte hain, aur lambe text ko single line me cut karke `...` (ellipsis) dikha sakte hain.",
    analogy: "Choti screen par lambi movie ka title fit karna 🎞️.",
    keyPoints: [
      "`::-webkit-scrollbar` width aur background color set karta hai.",
      "`::-webkit-scrollbar-thumb` ghumne wale handle ko style karta hai.",
      "`text-overflow: ellipsis; white-space: nowrap; overflow: hidden;` single line truncation formula hai."
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
  font-family: sans-serif;
  color: white;
}

h4 {
  font-size: 13px;
  color: #38bdf8;
  margin-bottom: 8px;
}

/* 1. Single Line Ellipsis Formula */
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

/* 2. Custom Scrollbar Styling */
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

/* Scrollbar Track & Thumb */
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
    proTip: "Ellipsis lagate waqt agar `white-space: nowrap;` na ho, toh text wrap hokar truncation fail ho jaati hai.",
    challenge: "Scrollbar thumb ka color `#10b981` (Emerald Green) karke dekhein."
  },
  {
    day: 30,
    week: 4,
    weekTitle: "Week 4: Animations, Responsive & Pro UI",
    title: "Capstone: Nextsem 30-Day Certificate & Full Hero UI",
    hindiTitle: "अंतिम कैपस्टोन: 30-Day CSS मास्टर सर्टिफिकेट और लैंडिंग पेज",
    time: "40 Mins",
    concept: "Badhaai ho! Aapne CSS3 ke sabhi core aur advanced concepts (Selectors, Box Model, Flexbox, Grid, Bento, Pseudo-elements, Animations, Responsive & Variables) master kar liye hain. Yeh final capstone project aapke sabhi skills ko showcase karta hai.",
    analogy: "Trophy Ceremony 🏆: Ek complete portfolio-ready project!",
    keyPoints: [
      "All 30 days completed badge.",
      "Live interactive responsive certificate preview.",
      "Ready to build real-world web applications and frontend production code!"
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
  font-family: sans-serif;
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
  font-weight: bold;
}

.instructor {
  font-style: italic;
}`,
    proTip: "Apne GitHub README aur Portfolio par is project ka live link add karein: `https://github.com/nextsem-manoj/css`.",
    challenge: "Student tag me apna naam add karein aur certificate ka border gold `#f59e0b` karke celebrate karein!"
  }
];

const dest = path.join(__dirname, 'days-curriculum.json');
fs.writeFileSync(dest, JSON.stringify(curriculum, null, 2), 'utf-8');
console.log(`Generated ${curriculum.length} days of structured CSS curriculum at ${dest}`);
