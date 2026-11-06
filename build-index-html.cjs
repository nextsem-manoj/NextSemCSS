const fs = require('fs');
const path = require('path');

const days = JSON.parse(fs.readFileSync(path.join(__dirname, 'days-curriculum.json'), 'utf-8'));

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS3 30-Day Master Journey &amp; Interactive Studio | NextSem</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-base: #070b14;
      --bg-surface: #0e1526;
      --bg-card: #141e34;
      --bg-hover: #1c2a47;
      --border: rgba(255, 255, 255, 0.08);
      --border-focus: #38bdf8;

      --accent-cyan: #38bdf8;
      --accent-emerald: #10b981;
      --accent-purple: #a855f7;
      --accent-amber: #f59e0b;
      --accent-rose: #f43f5e;

      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;

      --font-ui: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-code: 'JetBrains Mono', monospace;
    }

    body.light-theme {
      --bg-base: #f8fafc;
      --bg-surface: #ffffff;
      --bg-card: #f1f5f9;
      --bg-hover: #e2e8f0;
      --border: #cbd5e1;
      --border-focus: #0284c7;
      --text-main: #0f172a;
      --text-muted: #475569;
      --text-dim: #94a3b8;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-ui);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* Top Navigation Header */
    header {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border);
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      flex-shrink: 0;
      z-index: 50;
      position: sticky;
      top: 0;
      backdrop-filter: blur(12px);
    }

    .brand-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }

    .brand-logo {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, #0284c7, #38bdf8);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      color: #fff;
      box-shadow: 0 4px 14px rgba(56, 189, 248, 0.4);
    }

    .brand-title {
      font-size: 1.05rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .brand-sub {
      font-size: 0.72rem;
      color: var(--text-muted);
      font-weight: 600;
      display: block;
    }

    /* Center Navigation Tabs */
    .nav-mode-tabs {
      display: flex;
      background: var(--bg-card);
      padding: 3px;
      border-radius: 10px;
      border: 1px solid var(--border);
      gap: 4px;
    }

    .mode-tab-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 7px 14px;
      border-radius: 7px;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .mode-tab-btn:hover {
      color: var(--text-main);
    }

    .mode-tab-btn.active {
      background: var(--accent-cyan);
      color: #070b14;
      box-shadow: 0 2px 8px rgba(56, 189, 248, 0.3);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn-header {
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.80rem;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }
    .btn-header:hover {
      border-color: var(--accent-cyan);
      transform: translateY(-1px);
    }

    /* Progress Pill */
    .progress-pill {
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: var(--accent-emerald);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.74rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* View Container */
    .view-section {
      display: none;
      flex: 1;
    }
    .view-section.active-view {
      display: flex;
      flex-direction: column;
    }

    /* ─── 30 DAYS VIEW LAYOUT ─── */
    .curriculum-subbar {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border);
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .week-chips {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .week-chip {
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .week-chip:hover, .week-chip.active {
      background: rgba(56, 189, 248, 0.15);
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }

    .days-search-input {
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-family: inherit;
      outline: none;
      width: 220px;
      transition: border-color 0.2s;
    }
    .days-search-input:focus {
      border-color: var(--accent-cyan);
    }

    .curriculum-body {
      display: grid;
      grid-template-columns: 330px 1fr;
      flex: 1;
      min-height: calc(100vh - 124px);
      overflow: hidden;
    }

    /* Left Days Drawer */
    .days-sidebar {
      background: var(--bg-surface);
      border-right: 1px solid var(--border);
      overflow-y: auto;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .day-card-item {
      padding: 10px 12px;
      border-radius: 10px;
      background: var(--bg-card);
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      position: relative;
    }
    .day-card-item:hover {
      background: var(--bg-hover);
      border-color: var(--border);
    }
    .day-card-item.active {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.4);
    }

    .day-badge-num {
      background: #1e293b;
      color: #38bdf8;
      border: 1px solid #334155;
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 7px;
      border-radius: 6px;
      white-space: nowrap;
      margin-top: 2px;
    }
    .day-card-item.active .day-badge-num {
      background: var(--accent-cyan);
      color: #070b14;
    }

    .day-item-meta {
      flex: 1;
      min-width: 0;
    }

    .day-item-title {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--text-main);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .day-item-hindi {
      font-size: 0.72rem;
      color: var(--text-muted);
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .day-item-time {
      font-size: 0.68rem;
      color: var(--accent-emerald);
      font-weight: 700;
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .day-check-btn {
      background: transparent;
      border: none;
      color: #475569;
      cursor: pointer;
      font-size: 0.95rem;
      padding: 2px;
      transition: color 0.2s;
    }
    .day-check-btn.checked {
      color: var(--accent-emerald);
    }

    /* Right Day Workspace */
    .day-workspace {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      background: var(--bg-base);
    }

    .day-header-banner {
      background: linear-gradient(180deg, var(--bg-surface) 0%, transparent 100%);
      padding: 20px 24px 16px 24px;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      flex-wrap: wrap;
    }

    .day-title-block h1 {
      font-size: 1.35rem;
      font-weight: 900;
      letter-spacing: -0.01em;
      margin-top: 6px;
    }

    .day-title-block .hindi-subtitle {
      font-size: 0.90rem;
      color: var(--accent-cyan);
      font-weight: 600;
      margin-top: 4px;
    }

    .day-nav-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .nav-day-btn {
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 0.80rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .nav-day-btn:hover:not(:disabled) {
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }
    .nav-day-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .mark-done-btn {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid var(--accent-emerald);
      color: var(--accent-emerald);
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 0.80rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.2s;
    }
    .mark-done-btn.is-done {
      background: var(--accent-emerald);
      color: #04101e;
    }

    /* Day Content Grid */
    .day-grid-content {
      padding: 20px 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    /* Explanation Left Card */
    .explanation-panel {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .analogy-card {
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: 12px;
      padding: 14px 18px;
    }

    .analogy-title {
      font-size: 0.74rem;
      font-weight: 800;
      color: var(--accent-cyan);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }

    .analogy-text {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--text-main);
      line-height: 1.4;
    }

    .concept-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 18px;
    }

    .section-label {
      font-size: 0.74rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-dim);
      margin-bottom: 8px;
      display: block;
    }

    .concept-desc {
      font-size: 0.88rem;
      color: #cbd5e1;
      line-height: 1.6;
    }

    .key-points-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 10px;
    }

    .key-point-item {
      font-size: 0.84rem;
      color: var(--text-main);
      display: flex;
      align-items: flex-start;
      gap: 8px;
      line-height: 1.5;
    }

    .key-point-icon {
      color: var(--accent-emerald);
      font-weight: 900;
      font-size: 0.9rem;
      margin-top: 1px;
    }

    .tips-and-challenges {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .protip-box {
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: 10px;
      padding: 12px 14px;
    }
    .protip-box .box-head {
      color: var(--accent-emerald);
      font-size: 0.75rem;
      font-weight: 800;
      margin-bottom: 4px;
    }
    .protip-box p {
      font-size: 0.80rem;
      color: #cbd5e1;
      line-height: 1.4;
    }

    .challenge-box {
      background: rgba(245, 158, 11, 0.08);
      border: 1px solid rgba(245, 158, 11, 0.25);
      border-radius: 10px;
      padding: 12px 14px;
    }
    .challenge-box .box-head {
      color: var(--accent-amber);
      font-size: 0.75rem;
      font-weight: 800;
      margin-bottom: 4px;
    }
    .challenge-box p {
      font-size: 0.80rem;
      color: #cbd5e1;
      line-height: 1.4;
    }

    /* Interactive Live Studio Right Card */
    .studio-panel {
      background: var(--bg-surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 480px;
    }

    .studio-panel-header {
      background: var(--bg-card);
      border-bottom: 1px solid var(--border);
      padding: 8px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .editor-tabs {
      display: flex;
      gap: 6px;
    }

    .editor-tab {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 0.76rem;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
    }
    .editor-tab.active {
      background: var(--bg-surface);
      color: var(--accent-cyan);
    }

    .studio-controls {
      display: flex;
      gap: 6px;
    }

    .studio-tool-btn {
      background: var(--bg-surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .studio-tool-btn:hover {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }

    /* Live Output & Code split */
    .sandbox-split {
      display: grid;
      grid-template-rows: 220px 1fr;
      flex: 1;
      overflow: hidden;
    }

    .live-preview-container {
      background: #020617;
      border-bottom: 1px solid var(--border);
      position: relative;
      overflow: hidden;
    }

    .preview-iframe {
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
    }

    .code-editor-wrap {
      display: flex;
      flex-direction: column;
      background: #090d16;
      flex: 1;
      overflow: hidden;
    }

    .code-textarea {
      flex: 1;
      background: transparent;
      border: none;
      color: #38bdf8;
      font-family: var(--font-code);
      font-size: 0.82rem;
      line-height: 1.5;
      padding: 12px;
      resize: none;
      outline: none;
      overflow-y: auto;
      white-space: pre;
    }

    /* ─── 117 TIPS & PROJECTS VIEWS (Preserved) ─── */
    .legacy-tips-view {
      display: grid;
      grid-template-columns: 320px 1fr;
      flex: 1;
      min-height: calc(100vh - 64px);
    }

    .tips-sidebar {
      background: var(--bg-surface);
      border-right: 1px solid var(--border);
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .search-box {
      padding: 12px;
      border-bottom: 1px solid var(--border);
    }
    .search-input {
      width: 100%;
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.80rem;
      outline: none;
      font-family: inherit;
    }

    .category-pills {
      padding: 8px 12px;
      display: flex;
      gap: 4px;
      overflow-x: auto;
      border-bottom: 1px solid var(--border);
    }
    .cat-pill {
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.70rem;
      font-weight: 700;
      white-space: nowrap;
      cursor: pointer;
    }
    .cat-pill.active {
      background: rgba(56, 189, 248, 0.15);
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }

    .tips-list {
      flex: 1;
      overflow-y: auto;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .tip-item {
      padding: 8px 12px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid transparent;
    }
    .tip-item:hover { background: var(--bg-hover); }
    .tip-item.active {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.35);
    }
    .tip-item-name { font-size: 0.80rem; font-weight: 700; }
    .tip-item-cat { font-size: 0.68rem; color: var(--text-dim); }

    .tips-workspace {
      display: flex;
      flex-direction: column;
    }
    .workspace-header {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border);
      padding: 10px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .projects-grid-view {
      padding: 24px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 20px;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .project-card:hover {
      border-color: var(--accent-cyan);
      transform: translateY(-2px);
    }
    .project-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    .project-icon { font-size: 24px; }
    .project-title { font-size: 1.05rem; font-weight: 800; color: #f8fafc; }
    .project-desc { font-size: 0.84rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 14px; }
    .project-link-label { font-size: 0.80rem; font-weight: 800; color: var(--accent-cyan); }

    /* Responsive adjustments */
    @media (max-width: 960px) {
      .curriculum-body { grid-template-columns: 1fr; }
      .days-sidebar { max-height: 220px; }
      .day-grid-content { grid-template-columns: 1fr; }
      .tips-and-challenges { grid-template-columns: 1fr; }
      .legacy-tips-view { grid-template-columns: 1fr; }
      .tips-sidebar { max-height: 240px; }
      .brand-sub { display: none; }
    }
  </style>
</head>
<body>

  <!-- Top Header -->
  <header>
    <a href="#" class="brand-wrap">
      <div class="brand-logo">CSS</div>
      <div>
        <div class="brand-title">
          <span>NextSem CSS Mastery</span>
          <span class="progress-pill" id="headerProgressPill">Day 1/30 (3%)</span>
        </div>
        <span class="brand-sub">Structured Day-Wise Curriculum • Easy &amp; Practical</span>
      </div>
    </a>

    <!-- Navigation Mode Switcher -->
    <div class="nav-mode-tabs">
      <button class="mode-tab-btn active" onclick="switchView('days')" id="tabViewDays">
        📅 30 Days Lessons
      </button>
      <button class="mode-tab-btn" onclick="switchView('tips')" id="tabViewTips">
        🔬 117+ Tips Studio
      </button>
      <button class="mode-tab-btn" onclick="switchView('projects')" id="tabViewProjects">
        🎨 4 Project Studios
      </button>
    </div>

    <!-- Actions -->
    <div class="header-actions">
      <a class="btn-header" href="https://nextsem-staging.web.app/" title="Staging Home">🏠 Staging</a>
      <button class="btn-header" onclick="toggleTheme()" id="themeToggleBtn" title="Toggle Dark/Light">🌙</button>
      <a class="btn-header" href="https://github.com/nextsem-manoj/css" target="_blank" title="GitHub">🐙 Repo</a>
    </div>
  </header>

  <!-- ════════════ VIEW 1: 30 DAYS LESSONS (DEFAULT) ════════════ -->
  <section class="view-section active-view" id="viewDaysSection">
    
    <!-- Week Filter & Search Sub-bar -->
    <div class="curriculum-subbar">
      <div class="week-chips">
        <button class="week-chip active" onclick="filterWeek('all')">All 30 Days</button>
        <button class="week-chip" onclick="filterWeek(1)">Week 1: Fundamentals (Days 1–7)</button>
        <button class="week-chip" onclick="filterWeek(2)">Week 2: Flexbox &amp; Positioning (Days 8–14)</button>
        <button class="week-chip" onclick="filterWeek(3)">Week 3: Grid &amp; Bento (Days 15–21)</button>
        <button class="week-chip" onclick="filterWeek(4)">Week 4: Animations &amp; UI (Days 22–30)</button>
      </div>
      <input type="text" id="daysSearchInput" class="days-search-input" placeholder="🔍 Search topic (e.g. flexbox, box model)..." oninput="searchDays(this.value)">
    </div>

    <!-- Body Split: Days Drawer + Study Room -->
    <div class="curriculum-body">
      
      <!-- Left Drawer: 30 Days List -->
      <aside class="days-sidebar" id="daysListContainer"></aside>

      <!-- Right Classroom / Workspace -->
      <main class="day-workspace">
        
        <!-- Day Banner Header -->
        <div class="day-header-banner">
          <div class="day-title-block">
            <span class="day-badge-num" id="currentDayBadge" style="display:inline-block; font-size: 0.80rem;">Day 01 • Week 1</span>
            <h1 id="currentDayTitle">CSS3 Introduction &amp; Syntax</h1>
            <div class="hindi-subtitle" id="currentDayHindi">CSS क्या है और कैसे काम करता है?</div>
          </div>
          <div class="day-nav-controls">
            <button class="nav-day-btn" id="prevDayBtn" onclick="navigateDay(-1)">← Prev Day</button>
            <button class="mark-done-btn" id="markDoneBtn" onclick="toggleCurrentDayDone()">Mark Done ✓</button>
            <button class="nav-day-btn" id="nextDayBtn" onclick="navigateDay(1)">Next Day →</button>
          </div>
        </div>

        <!-- 2-Column Content: Explanation + Interactive Sandbox -->
        <div class="day-grid-content">
          
          <!-- Left Explanation Column -->
          <div class="explanation-panel">
            
            <!-- Real-Life Analogy -->
            <div class="analogy-card">
              <div class="analogy-title">💡 Real-Life Analogy (आसान भाषा में)</div>
              <div class="analogy-text" id="currentAnalogy">HTML = Body Skeleton 🦴 | CSS = Designer Clothes &amp; Makeup 👔✨</div>
            </div>

            <!-- Concept Card -->
            <div class="concept-card">
              <span class="section-label">Core Concept (सरल व्याख्या)</span>
              <p class="concept-desc" id="currentConcept">Loading...</p>
              
              <ul class="key-points-list" id="currentKeyPointsList"></ul>
            </div>

            <!-- Tips & Challenge row -->
            <div class="tips-and-challenges">
              <div class="protip-box">
                <div class="box-head">💡 Pro-Tip</div>
                <p id="currentProTip">Loading pro-tip...</p>
              </div>
              <div class="challenge-box">
                <div class="box-head">🎯 Today's Mini Task</div>
                <p id="currentChallenge">Loading challenge...</p>
              </div>
            </div>

          </div>

          <!-- Right Interactive Code Studio Column -->
          <div class="studio-panel">
            <div class="studio-panel-header">
              <div class="editor-tabs">
                <button class="editor-tab active" id="tabCssCode" onclick="switchEditorTab('css')">style.css</button>
                <button class="editor-tab" id="tabHtmlCode" onclick="switchEditorTab('html')">index.html</button>
              </div>
              <div class="studio-controls">
                <button class="studio-tool-btn" onclick="resetCurrentCode()">🔄 Reset</button>
                <button class="studio-tool-btn" onclick="copyActiveCode()">📋 Copy</button>
              </div>
            </div>

            <div class="sandbox-split">
              <!-- Live Preview Output Frame -->
              <div class="live-preview-container">
                <iframe id="dayPreviewIframe" class="preview-iframe" sandbox="allow-scripts allow-same-origin"></iframe>
              </div>

              <!-- Live Editable Code Editor -->
              <div class="code-editor-wrap">
                <textarea id="liveCodeTextarea" class="code-textarea" spellcheck="false" oninput="onCodeEdited()"></textarea>
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  </section>

  <!-- ════════════ VIEW 2: 117+ TIPS STUDIO (PRESERVED) ════════════ -->
  <section class="view-section" id="viewTipsSection">
    <div class="legacy-tips-view">
      <aside class="tips-sidebar">
        <div class="search-box">
          <input type="text" id="tipsSearchInput" class="search-input" placeholder="🔍 Search 117+ tips (e.g. bento, hover)..." oninput="searchTips(this.value)">
        </div>
        <div class="category-pills" id="tipsCategoryPills"></div>
        <div class="tips-list" id="tipsList"></div>
      </aside>
      <main class="tips-workspace">
        <div class="workspace-header">
          <h2 id="tipTitle" style="font-size:1.05rem;">Select a Tip</h2>
          <div style="display:flex; gap:6px;">
            <button class="studio-tool-btn" onclick="reloadTipPreview()">🔄 Reload</button>
            <button class="studio-tool-btn" onclick="copyTipCode()">📋 Copy</button>
          </div>
        </div>
        <div class="sandbox-split" style="flex:1;">
          <div class="live-preview-container" style="height:320px;">
            <iframe id="tipPreviewIframe" class="preview-iframe" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
          <div class="code-editor-wrap">
            <textarea id="tipCodeDisplay" class="code-textarea" readonly></textarea>
          </div>
        </div>
      </main>
    </div>
  </section>

  <!-- ════════════ VIEW 3: 4 PROJECT STUDIOS (PRESERVED) ════════════ -->
  <section class="view-section" id="viewProjectsSection">
    <div class="projects-grid-view">
      <a href="./projects/01-modern-layouts-bento-studio/index.html" class="project-card">
        <div class="project-header">
          <div class="project-icon">📐</div>
          <div class="project-title">Modern Layouts &amp; Bento Grid</div>
        </div>
        <p class="project-desc">Apple &amp; Vercel Bento grids, Container Queries adaptive cards, and zero-JS CSS Masonry.</p>
        <span class="project-link-label">Launch Studio →</span>
      </a>

      <a href="./projects/02-creative-ui-components-kit/index.html" class="project-card">
        <div class="project-header">
          <div class="project-icon">🎨</div>
          <div class="project-title">Creative UI Components Kit</div>
        </div>
        <p class="project-desc">3D perspective cards, glassmorphism 2.0, soft UI neumorphism, and rotating conic borders.</p>
        <span class="project-link-label">Launch UI Kit →</span>
      </a>

      <a href="./projects/03-animations-loaders-studio/index.html" class="project-card">
        <div class="project-header">
          <div class="project-icon">⚡</div>
          <div class="project-title">Animations &amp; Loaders Lab</div>
        </div>
        <p class="project-desc">Quantum orbital spinners, cyberpunk glitch effects, skeleton shimmer, and fluid morphing blobs.</p>
        <span class="project-link-label">Launch Lab →</span>
      </a>

      <a href="./projects/04-modern-selectors-lab/index.html" class="project-card">
        <div class="project-header">
          <div class="project-icon">🔬</div>
          <div class="project-title">Modern Selectors &amp; Features</div>
        </div>
        <p class="project-desc">Parent validation via :has(), sibling hover dimming, native CSS nesting, and OKLCH color mixing.</p>
        <span class="project-link-label">Launch Lab →</span>
      </a>
    </div>
  </section>

  <!-- Inlined Curriculum Data -->
  <script id="curriculum-data" type="application/json">
${JSON.stringify(days)}
  </script>

  <script>
    // ── DATA & STATE ──
    const DAYS_DATA = JSON.parse(document.getElementById('curriculum-data').textContent);
    let currentDayIndex = 0;
    let activeWeekFilter = 'all';
    let currentEditorTab = 'css'; // 'css' | 'html'
    let currentEditedCss = '';
    let currentEditedHtml = '';
    let completedDays = JSON.parse(localStorage.getItem('nextsem_css_completed_days') || '[]');

    // Tips state
    let allTips = [];
    let filteredTips = [];
    let currentTipIndex = 0;

    // ── INITIALIZATION ──
    window.addEventListener('DOMContentLoaded', async () => {
      // Check saved theme
      const savedTheme = localStorage.getItem('nextsem_css_theme');
      if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggleBtn').textContent = '☀️';
      }

      // Check last visited day
      const lastDay = parseInt(localStorage.getItem('nextsem_css_last_day') || '1', 10);
      const initialIdx = DAYS_DATA.findIndex(d => d.day === lastDay);
      currentDayIndex = initialIdx !== -1 ? initialIdx : 0;

      renderDaysSidebar();
      loadDay(currentDayIndex);
      updateProgressPill();

      // Load 117 tips in background for tips view
      loadTipsData();
    });

    // ── PROGRESS TRACKER ──
    function updateProgressPill() {
      const total = DAYS_DATA.length;
      const done = completedDays.length;
      const pct = Math.round((done / total) * 100);
      const pill = document.getElementById('headerProgressPill');
      if (pill) {
        pill.textContent = \`Day \${DAYS_DATA[currentDayIndex].day}/\${total} (\${pct}% Done)\`;
      }
    }

    function toggleCurrentDayDone() {
      const dayNum = DAYS_DATA[currentDayIndex].day;
      const idx = completedDays.indexOf(dayNum);
      if (idx === -1) {
        completedDays.push(dayNum);
      } else {
        completedDays.splice(idx, 1);
      }
      localStorage.setItem('nextsem_css_completed_days', JSON.stringify(completedDays));
      renderDaysSidebar();
      updateDoneButtonState();
      updateProgressPill();
    }

    function updateDoneButtonState() {
      const dayNum = DAYS_DATA[currentDayIndex].day;
      const isDone = completedDays.includes(dayNum);
      const btn = document.getElementById('markDoneBtn');
      if (isDone) {
        btn.classList.add('is-done');
        btn.textContent = 'Completed ✓';
      } else {
        btn.classList.remove('is-done');
        btn.textContent = 'Mark Done ✓';
      }
    }

    // ── DAYS SIDEBAR RENDER ──
    function renderDaysSidebar() {
      const container = document.getElementById('daysListContainer');
      const query = (document.getElementById('daysSearchInput')?.value || '').toLowerCase();
      
      const filtered = DAYS_DATA.filter(item => {
        const matchesWeek = activeWeekFilter === 'all' || item.week === activeWeekFilter;
        const matchesQuery = !query || 
          item.title.toLowerCase().includes(query) || 
          item.hindiTitle.toLowerCase().includes(query) ||
          \`day \${item.day}\`.includes(query);
        return matchesWeek && matchesQuery;
      });

      container.innerHTML = filtered.map(item => {
        const actualIndex = DAYS_DATA.findIndex(d => d.day === item.day);
        const isActive = actualIndex === currentDayIndex;
        const isDone = completedDays.includes(item.day);
        const paddedDay = item.day < 10 ? '0' + item.day : item.day;

        return \`
          <div class="day-card-item \${isActive ? 'active' : ''}" onclick="selectDayByIndex(\${actualIndex})">
            <span class="day-badge-num">D\${paddedDay}</span>
            <div class="day-item-meta">
              <div class="day-item-title">\${item.title}</div>
              <div class="day-item-hindi">\${item.hindiTitle}</div>
              <div class="day-item-time">⏱️ \${item.time}</div>
            </div>
            <button class="day-check-btn \${isDone ? 'checked' : ''}" onclick="event.stopPropagation(); toggleDayDoneFromList(\${item.day})">
              \${isDone ? '✓' : '○'}
            </button>
          </div>
        \`;
      }).join('');
    }

    function toggleDayDoneFromList(dayNum) {
      const idx = completedDays.indexOf(dayNum);
      if (idx === -1) completedDays.push(dayNum);
      else completedDays.splice(idx, 1);
      localStorage.setItem('nextsem_css_completed_days', JSON.stringify(completedDays));
      renderDaysSidebar();
      updateDoneButtonState();
      updateProgressPill();
    }

    function selectDayByIndex(index) {
      currentDayIndex = index;
      loadDay(currentDayIndex);
      renderDaysSidebar();
    }

    function navigateDay(offset) {
      const nextIdx = currentDayIndex + offset;
      if (nextIdx >= 0 && nextIdx < DAYS_DATA.length) {
        selectDayByIndex(nextIdx);
      }
    }

    // ── LOAD DAY WORKSPACE ──
    function loadDay(index) {
      const day = DAYS_DATA[index];
      if (!day) return;

      localStorage.setItem('nextsem_css_last_day', day.day);

      const padded = day.day < 10 ? '0' + day.day : day.day;
      document.getElementById('currentDayBadge').textContent = \`Day \${padded} • \${day.weekTitle}\`;
      document.getElementById('currentDayTitle').textContent = day.title;
      document.getElementById('currentDayHindi').textContent = day.hindiTitle;
      document.getElementById('currentAnalogy').textContent = day.analogy;
      document.getElementById('currentConcept').textContent = day.concept;
      document.getElementById('currentProTip').textContent = day.proTip;
      document.getElementById('currentChallenge').textContent = day.challenge;

      // Key points
      const keyPointsList = document.getElementById('currentKeyPointsList');
      keyPointsList.innerHTML = day.keyPoints.map(kp => \`
        <li class="key-point-item">
          <span class="key-point-icon">✓</span>
          <span>\${kp}</span>
        </li>
      \`).join('');

      // Nav buttons state
      document.getElementById('prevDayBtn').disabled = index === 0;
      document.getElementById('nextDayBtn').disabled = index === DAYS_DATA.length - 1;

      // Reset code states
      currentEditedCss = day.starterCss;
      currentEditedHtml = day.starterHtml;

      updateEditorView();
      renderLivePreview();
      updateDoneButtonState();
      updateProgressPill();
    }

    function switchEditorTab(tab) {
      currentEditorTab = tab;
      document.getElementById('tabCssCode').classList.toggle('active', tab === 'css');
      document.getElementById('tabHtmlCode').classList.toggle('active', tab === 'html');
      updateEditorView();
    }

    function updateEditorView() {
      const textarea = document.getElementById('liveCodeTextarea');
      textarea.value = currentEditorTab === 'css' ? currentEditedCss : currentEditedHtml;
      textarea.style.color = currentEditorTab === 'css' ? '#38bdf8' : '#f59e0b';
    }

    function onCodeEdited() {
      const textarea = document.getElementById('liveCodeTextarea');
      if (currentEditorTab === 'css') {
        currentEditedCss = textarea.value;
      } else {
        currentEditedHtml = textarea.value;
      }
      renderLivePreview();
    }

    function resetCurrentCode() {
      const day = DAYS_DATA[currentDayIndex];
      currentEditedCss = day.starterCss;
      currentEditedHtml = day.starterHtml;
      updateEditorView();
      renderLivePreview();
    }

    function copyActiveCode() {
      const textarea = document.getElementById('liveCodeTextarea');
      navigator.clipboard.writeText(textarea.value).then(() => {
        const copyBtn = event.target;
        const original = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✓';
        setTimeout(() => copyBtn.textContent = original, 1500);
      });
    }

    function renderLivePreview() {
      const iframe = document.getElementById('dayPreviewIframe');
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
              box-sizing: border-box;
            }
            \${currentEditedCss}
          </style>
        </head>
        <body>
          \${currentEditedHtml}
        </body>
        </html>
      \`;

      doc.open();
      doc.write(htmlDoc);
      doc.close();
    }

    function filterWeek(week) {
      activeWeekFilter = week;
      document.querySelectorAll('.week-chip').forEach(btn => {
        btn.classList.toggle('active', (week === 'all' && btn.textContent.includes('All')) || (btn.textContent.includes(\`Week \${week}\`)));
      });
      renderDaysSidebar();
    }

    function searchDays(val) {
      renderDaysSidebar();
    }

    // ── TOP VIEW SWITCHER ──
    function switchView(viewName) {
      document.getElementById('viewDaysSection').classList.toggle('active-view', viewName === 'days');
      document.getElementById('viewTipsSection').classList.toggle('active-view', viewName === 'tips');
      document.getElementById('viewProjectsSection').classList.toggle('active-view', viewName === 'projects');

      document.getElementById('tabViewDays').classList.toggle('active', viewName === 'days');
      document.getElementById('tabViewTips').classList.toggle('active', viewName === 'tips');
      document.getElementById('tabViewProjects').classList.toggle('active', viewName === 'projects');
    }

    // ── THEME TOGGLE ──
    function toggleTheme() {
      const isLight = document.body.classList.toggle('light-theme');
      document.getElementById('themeToggleBtn').textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('nextsem_css_theme', isLight ? 'light' : 'dark');
      renderLivePreview();
      if (allTips.length > 0) renderTipPreview();
    }

    // ── 117+ TIPS INTEGRATION (VIEW 2) ──
    async function loadTipsData() {
      try {
        let res;
        try {
          res = await fetch('./tips.json');
          if (!res.ok) throw new Error('tips.json 404');
        } catch (_) {
          res = await fetch('/api/tips');
        }
        allTips = await res.json();
        filteredTips = [...allTips];

        renderTipsCategories();
        renderTipsList();
        if (allTips.length > 0) selectTip(0);
      } catch (err) {
        console.warn('Tips data load deferred:', err);
      }
    }

    function renderTipsCategories() {
      const cats = ['All', ...new Set(allTips.map(t => t.category).filter(Boolean))];
      const pillsContainer = document.getElementById('tipsCategoryPills');
      if (!pillsContainer) return;
      pillsContainer.innerHTML = cats.map(c => \`
        <button class="cat-pill \${c === 'All' ? 'active' : ''}" onclick="filterTipCategory('\${c}', this)">\${c}</button>
      \`).join('');
    }

    function filterTipCategory(cat, btn) {
      document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      filteredTips = cat === 'All' ? [...allTips] : allTips.filter(t => t.category === cat);
      renderTipsList();
      if (filteredTips.length > 0) selectTip(0);
    }

    function searchTips(q) {
      const query = (q || '').toLowerCase();
      filteredTips = allTips.filter(t => t.title.toLowerCase().includes(query) || (t.category && t.category.toLowerCase().includes(query)));
      renderTipsList();
      if (filteredTips.length > 0) selectTip(0);
    }

    function renderTipsList() {
      const container = document.getElementById('tipsList');
      if (!container) return;
      container.innerHTML = filteredTips.map((tip, idx) => \`
        <div class="tip-item \${idx === currentTipIndex ? 'active' : ''}" onclick="selectTip(\${idx})">
          <div>
            <div class="tip-item-name">\${tip.title}</div>
            <div class="tip-item-cat">\${tip.category || 'CSS'}</div>
          </div>
          <span style="font-size:0.70rem; color:var(--text-dim);">#\${tip.id}</span>
        </div>
      \`).join('');
    }

    function selectTip(idx) {
      currentTipIndex = idx;
      const tip = filteredTips[idx];
      if (!tip) return;

      document.getElementById('tipTitle').textContent = tip.title;
      document.getElementById('tipCodeDisplay').value = tip.cssCode || '/* No CSS code provided */';

      renderTipPreview();
      renderTipsList();
    }

    function renderTipPreview() {
      const tip = filteredTips[currentTipIndex];
      if (!tip) return;
      const iframe = document.getElementById('tipPreviewIframe');
      const doc = iframe.contentDocument || iframe.contentWindow.document;

      const html = \`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              margin: 0;
              padding: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background-color: transparent;
              color: white;
              font-family: sans-serif;
            }
            \${tip.cssCode || ''}
          </style>
        </head>
        <body>
          \${tip.htmlCode || '<div>Tip Preview</div>'}
        </body>
        </html>
      \`;
      doc.open();
      doc.write(html);
      doc.close();
    }

    function reloadTipPreview() {
      renderTipPreview();
    }

    function copyTipCode() {
      const val = document.getElementById('tipCodeDisplay').value;
      navigator.clipboard.writeText(val);
      alert('Tip code copied to clipboard!');
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf-8');
console.log('Successfully generated complete Day-Wise index.html in c:\\Users\\Manoj\\nextsemorg\\css\\index.html');
