# Pardon My SaaS — Web Course Plan

## Context
Xavier teaches BUAN 610 – Data Narratives at the University of St. Thomas. He wants to create an interactive, Udemy-style web course on his personal site (`data-with-xavier.github.io`) that teaches students to build HTML dashboards using Claude Code — replacing Tableau/Power BI entirely. Students range from complete beginners (no GitHub, no Claude, no coding experience) to more technical folks. The course lives at a dedicated sub-page URL and doubles as a portfolio-builder: students host their finished dashboards on GitHub Pages.

---

## Course Title
**Pardon My SaaS: Build Stunning Dashboards with AI — No Tableau Required**

---

## Core Thesis
- SaaS BI tools (Tableau, Power BI, Looker) are expensive, rigid, and lock you in
- Claude Code lets anyone build fully custom dashboards as HTML files
- The workflow is human + AI collaborating — students are the driver, Claude is the co-pilot
- Students leave with a live GitHub portfolio of real dashboards

---

## File Structure

```
data-with-xavier.github.io/
├── teaching.html              ← updated: BUAN 610 + "Pardon My SaaS" course card
└── teaching/
    ├── pardon-my-saas.html    ← new: full interactive course page
    └── data/                  ← new: downloadable data files for each project
        ├── sales-data.csv          (Project 1)
        ├── narrative-data.csv      (Project 2)
        ├── sports-data.csv         (Project 3)
        └── dashboard-spec-template.md  (Module 3.5)
```

---

## Dashboard Tech Approach
**Single `.html` files** — HTML + CSS + JavaScript, using Chart.js via CDN

**Data loading arc (progressive):**
1. Hardcoded JSON embedded in the HTML (zero friction, instant results)
2. Fetch from a GitHub raw URL (real data, no backend needed)
3. Fetch from a public API (live/dynamic data — introduced in "What's Next")

**Browser security note addressed in course:** Browsers block loading local CSV files. Data files are hosted in the student's own GitHub repo; dashboards fetch from the raw URL. Everything is version-controlled.

---

## Course Structure

### Module 0: Why Pardon My SaaS?
- The real cost of BI tools
- What AI-assisted development means
- What you'll build and publish by the end
- No prior experience required

### Module 1: Your Toolkit — Starting from Zero
- Create GitHub account + repo named `[username].github.io`
- Enable GitHub Pages (repo is live in minutes)
- Install Claude Code, authenticate with Claude Pro account
- Build your portfolio home page with Claude (first thing live on the internet with your name)
- Getting unstuck: what to do when Claude gives broken code

### Module 2: Dashboard Foundations
- Anatomy of an HTML dashboard
- First chart with Chart.js via prompting
- Layout, color, and style via prompting
- Embedding JSON data vs. fetching from GitHub
- Mini-project: personal stats dashboard

### Module 3: Project 1 — Sales & Budget Tracker
- Data file: `sales-data.csv`
- Multiple chart types, hardcoded → fetched data arc
- Focus: prompt iteration and design refinement
- Deliverable: live GitHub Pages dashboard

### Module 3.5: Build Your Dashboard Spec
- After Project 1 — students feel the pain of starting from scratch
- Create `dashboard-spec.md` defining color palette, fonts, layout, style
- From Project 2 onward: paste spec at the start of every Claude session

### Module 4: Project 2 — Data Narrative (WSJ-style)
- Data file: `narrative-data.csv` (college tuition vs. household income)
- Prose-driven article with embedded charts — not a control panel
- Teaches: data storytelling, reading flow, typography, the "thesis first" approach
- Deliverable: live GitHub Pages narrative page

### Module 5: Project 3 — Interactive Dashboard
- Data file: `sports-data.csv`
- Filters, tab navigation, dynamic chart updates
- Focus: interactivity via JavaScript events, prompting for behavior not just visuals
- Deliverable: live GitHub Pages interactive dashboard

### Module 6: Capstone — Student's Choice
- Student brings own dataset and topic
- Format: dashboard, narrative, or hybrid
- Deliverable: portfolio-centerpiece + polished GitHub README

### Module 7: Portfolio & What's Next
- Polish portfolio home page with all project cards
- Writing good READMEs
- Embedding dashboards in a website (iframes)
- Other tools: Cursor, Observable, Streamlit
- Prompt cheat sheet (copyable, at bottom of course page)

---

## Key Pedagogical Decisions
- **No assumed knowledge** — GitHub, Claude Code, and HTML all introduced from zero
- **Show the prompts** — every lesson displays the exact prompts used, not just the output
- **Model the back-and-forth** — mistakes, corrections, and iteration shown (not just happy path)
- **Portfolio as the North Star** — every project framed as something to show employers
- **Claude Pro accounts required** — rate limits framed positively: write fewer, better prompts
- **Getting unstuck** — dedicated section models the debugging loop for beginners

---

## Build Phases
1. **Session 1** — page structure, design, accordion UI, all modules (content complete)
2. **Session 2** — data files, teaching.html update, COURSE_PLAN.md
3. **Future** — add actual week-by-week slides/PDFs as course runs

---

## What "Done" Looks Like
- A student with zero prior experience completes Module 1 and has a live GitHub Pages site
- Every project module produces a working, publicly hosted HTML dashboard
- The capstone is portfolio-ready for a job application or grad school
- Students never need Tableau, Power BI, or any paid BI subscription
