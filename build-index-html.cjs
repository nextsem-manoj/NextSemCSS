const fs = require('fs');
const path = require('path');

const days = JSON.parse(fs.readFileSync(path.join(__dirname, 'days-curriculum.json'), 'utf-8'));

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Mastery • Day 1 Lesson | NextSem</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-body: #060913;
      --bg-card: #0d1424;
      --bg-card-sub: #131d33;
      --border: #1e293b;
      --border-accent: #38bdf8;
      
      --accent: #38bdf8;
      --accent-green: #10b981;
      
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      
      --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-body);
      color: var(--text-main);
      font-family: var(--font-sans);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      line-height: 1.6;
    }

    /* Fixed Minimalist Top Navbar */
    header {
      background: rgba(13, 20, 36, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .brand-title {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .brand-badge {
      background: linear-gradient(135deg, #0284c7, #38bdf8);
      color: #fff;
      font-size: 0.75rem;
      font-weight: 900;
      padding: 3px 8px;
      border-radius: 6px;
    }

    /* Navigation Action Buttons: Home, Prev, Next ONLY */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn-nav {
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      font-family: var(--font-sans);
    }

    .btn-nav:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent);
      background: var(--bg-card-sub);
      transform: translateY(-1px);
    }

    .btn-nav:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .btn-nav.btn-primary {
      background: #0284c7;
      color: #ffffff;
      border-color: #38bdf8;
    }
    .btn-nav.btn-primary:hover {
      background: #0369a1;
      color: #ffffff;
    }

    /* Lesson Main Reader Container */
    main {
      flex: 1;
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
      padding: 36px 20px 80px 20px;
    }

    /* Day Banner */
    .day-banner {
      margin-bottom: 28px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 24px;
    }

    .day-pill {
      display: inline-block;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      color: var(--accent);
      font-size: 0.80rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 12px;
    }

    .lesson-title {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: -0.02em;
      line-height: 1.25;
      color: #ffffff;
      margin-bottom: 8px;
    }

    .lesson-subtitle {
      font-size: 1.1rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    /* Clean Card Sections */
    .section-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .card-label {
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
      margin-bottom: 10px;
      display: block;
    }

    .mental-model-text {
      font-size: 1.05rem;
      font-weight: 600;
      color: #ffffff;
      line-height: 1.5;
    }

    .concept-text {
      font-size: 1rem;
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .key-points-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .key-point-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 0.95rem;
      color: #e2e8f0;
      line-height: 1.5;
    }

    .point-icon {
      color: var(--accent-green);
      font-weight: 900;
      margin-top: 2px;
    }

    /* Live Interactive Code & Output */
    .code-container {
      background: #090d16;
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      margin-top: 20px;
    }

    .code-header {
      background: var(--bg-card-sub);
      padding: 10px 18px;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--text-muted);
    }

    .copy-btn {
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.4);
      color: var(--accent);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .copy-btn:hover {
      background: var(--accent);
      color: #000;
    }

    pre code {
      display: block;
      padding: 18px;
      font-family: var(--font-mono);
      font-size: 0.88rem;
      line-height: 1.6;
      color: #38bdf8;
      overflow-x: auto;
      white-space: pre;
    }

    /* Live Output Box */
    .preview-box {
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      background: #020617;
      margin-top: 20px;
    }

    .preview-header {
      background: var(--bg-card-sub);
      padding: 8px 18px;
      border-bottom: 1px solid var(--border);
      font-size: 0.80rem;
      font-weight: 700;
      color: var(--text-muted);
    }

    .preview-iframe {
      width: 100%;
      height: 220px;
      border: none;
      background: transparent;
    }

    /* Pro Tip & Task Cards */
    .highlight-card {
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: 12px;
      padding: 18px 20px;
      margin-bottom: 24px;
    }
    .highlight-card .h-title {
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--accent-green);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 6px;
    }
    .highlight-card p {
      font-size: 0.95rem;
      color: #e2e8f0;
      line-height: 1.5;
    }

    /* Bottom Large Navigation Bar */
    .bottom-nav {
      border-top: 1px solid var(--border);
      padding-top: 28px;
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    @media (max-width: 640px) {
      .lesson-title { font-size: 1.5rem; }
      .lesson-subtitle { font-size: 0.95rem; }
      header { padding: 0 16px; }
      main { padding: 20px 16px 60px 16px; }
      .bottom-nav { flex-direction: column; width: 100%; }
      .bottom-nav .btn-nav { width: 100%; justify-content: center; }
    }
  </style>
</head>
<body>

  <!-- Top Navbar: Brand + Home, Prev, Next Buttons ONLY -->
  <header>
    <div class="brand-title">
      <span class="brand-badge">CSS</span>
      <span>NextSem Academy</span>
    </div>

    <div class="nav-actions">
      <a class="btn-nav" href="https://nextsem-staging.web.app/" title="Go to Home">🏠 Home</a>
      <button class="btn-nav" id="topPrevBtn" onclick="navigateDay(-1)">← Prev</button>
      <button class="btn-nav btn-primary" id="topNextBtn" onclick="navigateDay(1)">Next →</button>
    </div>
  </header>

  <!-- Main Lesson Content Body (Clearly Visible, Zero Clutter) -->
  <main>

    <!-- Day Header -->
    <div class="day-banner">
      <span class="day-pill" id="lessonDayPill">Day 01 • Lesson</span>
      <h1 class="lesson-title" id="lessonTitle">CSS3 Introduction &amp; Rule Syntax</h1>
      <p class="lesson-subtitle" id="lessonSubtitle">Understanding selectors, declaration blocks, and stylesheets</p>
    </div>

    <!-- Mental Model Card -->
    <div class="section-card">
      <span class="card-label">Core Mental Model</span>
      <p class="mental-model-text" id="lessonAnalogy"></p>
    </div>

    <!-- Lesson Concept Card -->
    <div class="section-card">
      <span class="card-label">Concept Breakdown</span>
      <p class="concept-text" id="lessonConcept"></p>
      
      <span class="card-label" style="margin-top: 20px;">Key Takeaways</span>
      <ul class="key-points-list" id="lessonKeyPoints"></ul>
    </div>

    <!-- Live Code Section -->
    <div class="section-card">
      <span class="card-label">Working CSS Code</span>
      <div class="code-container">
        <div class="code-header">
          <span>style.css</span>
          <button class="copy-btn" onclick="copyCssCode()">📋 Copy CSS</button>
        </div>
        <pre><code id="lessonCssCode"></code></pre>
      </div>

      <div class="preview-box">
        <div class="preview-header">Live Output Preview</div>
        <iframe id="lessonPreviewIframe" class="preview-iframe" sandbox="allow-scripts allow-same-origin"></iframe>
      </div>
    </div>

    <!-- Pro Tip Card -->
    <div class="highlight-card">
      <div class="h-title">💡 Senior Engineer Pro-Tip</div>
      <p id="lessonProTip"></p>
    </div>

    <!-- Daily Task Card -->
    <div class="highlight-card" style="background: rgba(56, 189, 248, 0.08); border-color: rgba(56, 189, 248, 0.25);">
      <div class="h-title" style="color: var(--accent);">🎯 Today's Hands-On Task</div>
      <p id="lessonChallenge"></p>
    </div>

    <!-- Bottom Navigation Bar: Prev, Home, Next -->
    <div class="bottom-nav">
      <button class="btn-nav" id="bottomPrevBtn" onclick="navigateDay(-1)">← Previous Lesson</button>
      <a class="btn-nav" href="https://nextsem-staging.web.app/">🏠 Return to Staging Home</a>
      <button class="btn-nav btn-primary" id="bottomNextBtn" onclick="navigateDay(1)">Next Lesson →</button>
    </div>

  </main>

  <!-- Inlined Curriculum Data -->
  <script id="curriculum-data" type="application/json">
${JSON.stringify(days)}
  </script>

  <script>
    const DAYS = JSON.parse(document.getElementById('curriculum-data').textContent);
    let currentIdx = 0; // Starts strictly at Day 1 (index 0)

    window.addEventListener('DOMContentLoaded', () => {
      // Check query param e.g. ?day=1
      const params = new URLSearchParams(window.location.search);
      const dayParam = parseInt(params.get('day'), 10);
      if (!isNaN(dayParam) && dayParam >= 1 && dayParam <= DAYS.length) {
        currentIdx = dayParam - 1;
      }
      renderLesson(currentIdx);
    });

    function renderLesson(idx) {
      const item = DAYS[idx];
      if (!item) return;

      const padded = item.day < 10 ? '0' + item.day : item.day;
      document.getElementById('lessonDayPill').textContent = \`Day \${padded} • \${item.weekTitle}\`;
      document.getElementById('lessonTitle').textContent = item.title;
      document.getElementById('lessonSubtitle').textContent = item.subtitle;
      document.getElementById('lessonAnalogy').textContent = item.analogy;
      document.getElementById('lessonConcept').textContent = item.concept;
      document.getElementById('lessonProTip').textContent = item.proTip;
      document.getElementById('lessonChallenge').textContent = item.challenge;

      // Key points
      const ul = document.getElementById('lessonKeyPoints');
      ul.innerHTML = item.keyPoints.map(kp => \`
        <li class="key-point-item">
          <span class="point-icon">✓</span>
          <span>\${kp}</span>
        </li>
      \`).join('');

      // Code block
      document.getElementById('lessonCssCode').textContent = item.starterCss;

      // Render live preview iframe
      const iframe = document.getElementById('lessonPreviewIframe');
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const htmlDoc = \`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              margin: 0;
              padding: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background-color: transparent;
              color: #f8fafc;
              font-family: system-ui, sans-serif;
              box-sizing: border-box;
            }
            \${item.starterCss}
          </style>
        </head>
        <body>
          \${item.starterHtml}
        </body>
        </html>
      \`;
      doc.open();
      doc.write(htmlDoc);
      doc.close();

      // Update Nav Buttons
      const isFirst = idx === 0;
      const isLast = idx === DAYS.length - 1;
      
      document.getElementById('topPrevBtn').disabled = isFirst;
      document.getElementById('bottomPrevBtn').disabled = isFirst;
      
      document.getElementById('topNextBtn').disabled = isLast;
      document.getElementById('bottomNextBtn').disabled = isLast;

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function navigateDay(offset) {
      const next = currentIdx + offset;
      if (next >= 0 && next < DAYS.length) {
        currentIdx = next;
        renderLesson(currentIdx);
        // Update URL query quietly without page refresh
        const url = new URL(window.location);
        url.searchParams.set('day', DAYS[currentIdx].day);
        window.history.pushState({}, '', url);
      }
    }

    function copyCssCode() {
      const code = document.getElementById('lessonCssCode').textContent;
      navigator.clipboard.writeText(code).then(() => {
        alert('CSS code copied to clipboard!');
      });
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf-8');
console.log('Successfully generated clean, clutter-free Day 1 lesson page.');
