# Pardon My SaaS — Book Plan

## Concept

**Title:** Pardon My SaaS: Building Dashboards with AI, Not Tableau
**Author:** Xavier Conzet

A practitioner's guide to replacing expensive, rigid SaaS BI tools with AI-assisted HTML dashboards. Bold, irreverent, and practical — the book makes an argument, then shows you how to act on it.

---

## The Companion Model

This book is designed to pair with the course at:
`data-with-xavier.github.io/teaching/pardon-my-saas.html`

They cover different cognitive modes and neither requires the other — but together they deliver something neither can alone.

| | Book | Course |
|---|---|---|
| **Mode** | Reading, understanding, thinking | Building, prompting, iterating |
| **Question answered** | Why does this work? | How do I build this? |
| **Format** | Narrative chapters with case studies | Interactive modules with copyable prompts |
| **Best used** | Before class, on the couch, as reference | During lab, with Claude open on the other screen |
| **Standalone value** | Yes — practitioners who aren't in the class | Yes — students who skip the reading |
| **Together** | Full understanding + full skill | The intended experience |

**Cross-reference convention:**
- Every course module opens with: *"Before starting this module, read Chapter X of Pardon My SaaS."*
- Every book chapter ends with: *"Ready to build? Open Module X of the course."*

---

## Target Audience

**Primary:** Students in BUAN 610 – Data Narratives at the University of St. Thomas. No prior experience assumed.

**Secondary:** Data analysts, business professionals, and anyone who has ever waited six weeks for a Tableau dashboard and thought "there has to be a better way."

**Not for:** Engineers who want to build production BI infrastructure. This book is for the people who need dashboards, not the people who build the systems behind them.

---

## Tone and Voice

- **Irreverent but substantive.** The title is a pun. The content is serious. Don't apologize for either.
- **Direct.** Make claims. "Tableau is the wrong tool for most of what people use it for." Not "some may argue that alternative approaches exist."
- **Practitioner-first.** Theory earns its place by making you better at building. If a concept doesn't change what a student does, cut it or shorten it.
- **First person, conversational.** Write like you're talking to a smart student who has limited time and no patience for filler.
- **No fluff.** No "in this chapter, we will explore..." No "as we have seen..." Open strong, make the point, move on.

**The brand in one sentence:** Bold enough to tell Tableau it's not needed. Practical enough to prove it.

---

## Chapter Outline

Each chapter maps to a course module. The book goes deeper on the *why*; the course handles the *how*.

---

### Introduction — Pardon My SaaS

**Course module:** None (book-only)
**Purpose:** Set the stage. Make the argument. Tell the reader what they're going to get.

**Topics:**
- The $400k question: what companies actually spend on BI tools
- The lock-in problem: your work, their format
- What changed: why AI makes this possible now, and why it wasn't three years ago
- How to use this book alongside the course
- What you'll be able to do by the last page

**Tone:** Provocative. This is the pitch. If the reader isn't nodding along by page 5, the book isn't doing its job.

---

### Chapter 1 — Why Pardon My SaaS?

**Course module:** Module 00
**Purpose:** The full argument for why SaaS BI tools are the wrong default, and what AI-assisted HTML dashboards offer instead.

**Topics:**
- A brief history of how Tableau, Power BI, and Looker became the default
- The real cost: licensing, lock-in, and the queue (the 6-week wait for a dashboard)
- What "human + AI collaboration" actually means — and what it doesn't
- The portfolio argument: you own what you build
- Case study: what it looks like when an analyst builds their own dashboard vs. requests one

**Key argument:** The bottleneck in enterprise BI isn't visualization — it's the queue. AI eliminates the queue.

---

### Chapter 2 — Your Toolkit

**Course module:** Module 01
**Purpose:** Conceptual overview of the tools and why each one is in the stack. The course handles step-by-step setup; the book explains the reasoning.

**Topics:**
- Why GitHub, not Dropbox: version control as a professional habit
- GitHub Pages: publishing as a first-class citizen, not an afterthought
- Claude Desktop vs. Claude Code: thinking partner vs. builder
- VS Code and Live Server: why your editing environment matters
- The workflow loop: describe → build → preview → iterate → publish

**Key idea:** The tools aren't arbitrary. Each one solves a specific problem that would otherwise slow you down or limit what you can build.

---

### Chapter 3 — The Grammar of Visualization

**Course module:** Module 02
**Purpose:** A deep, narrative treatment of visualization principles. The course has tutorials; the book has the theory that makes the tutorials meaningful.

**Topics:**
- Why visualization is a language, not a decoration
- Tufte's core principles in full:
  - Data-ink ratio: every pixel earns its place
  - Lie Factor: how charts deceive without technically lying
  - Chartjunk: the visual noise that obscures signal
  - Small multiples: one of the most underused patterns in BI
- Chart selection: the map from data type to chart type
- Color as communication: sequential, categorical, diverging — and what rainbow palettes actually communicate (nothing)
- Titles that make arguments vs. titles that describe axes
- The ethics of visualization: truncated axes, dual-axis manipulation, correlation presented as causation
- What great looks like: The Pudding, NYT Graphics, The Economist, Our World in Data

**Key idea:** A chart is an argument. Every design decision either strengthens or weakens that argument.

---

### Chapter 4 — Anatomy of a Dashboard

**Course module:** Module 03
**Purpose:** What makes a dashboard work as a system — not just individual charts, but layout, hierarchy, and flow.

**Topics:**
- The difference between a collection of charts and a dashboard
- Visual hierarchy: what the eye sees first, second, third — and why it matters
- KPI cards: when to use them, what they should say, what they should never say
- Layout patterns: sidebar + main, top nav, single column, card grid
- The dashboard spec: why consistent design makes you faster, not slower
- What HTML gives you that Tableau doesn't: full control over every pixel
- Responsive design basics: what happens when someone opens your dashboard on a phone

**Key idea:** A dashboard is a communication product. Design it for the person who reads it, not the person who builds it.

---

### Chapter 5 — Your First Real Dashboard

**Course module:** Module 04
**Purpose:** Walk through the full arc of Project 1 — not as a tutorial, but as a narrative of the decisions made and why.

**Topics:**
- How to read a dataset before you write a single prompt
- The brief: understanding what the stakeholder actually needs vs. what they asked for
- Starting with structure, not aesthetics
- The prompt iteration loop: what good iteration looks like and what it doesn't
- When to stop iterating: the point of diminishing returns
- Fetching data from GitHub vs. embedding it: the tradeoffs
- How to know when a dashboard is done

**Key idea:** The first draft of a prompt is never the best prompt. The skill is knowing what to change and how to describe it.

---

### Chapter 6 — Your Visual Identity

**Course module:** Module 04.5
**Purpose:** The philosophy behind the dashboard spec — why consistency is a professional signal, and how to build a design system without being a designer.

**Topics:**
- Why every new Claude conversation starts cold — and what to do about it
- Design systems: what they are, why large companies have them, and why you should too
- Building a personal spec: color theory basics, typography for data, layout vocabulary
- The spec as a living document: how it should evolve over your career
- What your visual identity says about you as an analyst

**Key idea:** Consistency isn't a design constraint — it's a credibility signal. Inconsistent dashboards look like they were made by someone who wasn't sure what they were doing.

---

### Chapter 7 — From Dashboard to Story

**Course module:** Module 05
**Purpose:** The full theory of data narrative — what it is, why it's different from a dashboard, and how to do it well.

**Topics:**
- Dashboards vs. narratives: explore vs. argue
- The structure of a data story: thesis, evidence, conclusion
- What WSJ, NYT, and The Pudding do that most analysts don't
- The lede: how to open a data story (and how most people get it wrong)
- Chart as evidence: the chart serves the argument, not the other way around
- Prose and charts woven together: how to write transitions that don't repeat the chart
- The ethics of narrative: making an argument vs. manipulating a conclusion

**Key idea:** A data narrative is journalism. It has a point of view, it uses evidence, and it respects the reader enough to be honest about what the data does and doesn't show.

---

### Chapter 8 — Making It Interactive

**Course module:** Module 06
**Purpose:** When and why to add interactivity — and the principles that separate useful interactivity from interactivity for its own sake.

**Topics:**
- The case for interactivity: when static isn't enough
- Filters, tabs, and search: the three most useful patterns
- The rule of least surprise: interactive elements should behave exactly as expected
- Don't make the user do math: if they have to compare two numbers to understand what's happening, the dashboard has failed
- When NOT to add interactivity: the dashboard that tries to do everything does nothing well
- Prompting for behavior, not just appearance: how to describe interactivity to Claude

**Key idea:** Interactivity is a feature with a cost. Every filter you add is a decision you're pushing to the reader. Only do it when the reader genuinely needs to make that decision.

---

### Chapter 9 — The Capstone Mindset

**Course module:** Module 07
**Purpose:** How to approach independent, open-ended data work — the mindset, not the mechanics.

**Topics:**
- Choosing a dataset that's worth the work
- How to form a thesis before you build anything
- The project brief: why planning on paper saves hours in Claude
- What makes a portfolio piece vs. a homework assignment
- The README as a cover letter: how to talk about what you built
- Presenting your work: what to lead with, what to leave out

**Key idea:** The capstone is the first time you make all the decisions. The skill isn't building the dashboard — it's knowing what to build.

---

### Chapter 10 — Publishing, Portfolio, and What's Next

**Course module:** Module 08
**Purpose:** How to turn a collection of GitHub repos into a professional portfolio — and where to go from here.

**Topics:**
- GitHub Pages as a portfolio platform: what it can and can't do
- Making your portfolio employer-ready: READMEs, project descriptions, visual consistency
- Embedding dashboards anywhere: iframes and beyond
- The enterprise reality: how this workflow scales inside a company
  - Access control and authentication
  - Internal hosting vs. GitHub Pages
  - Row-level security and when you need a backend
  - Governance, discoverability, and the "single source of truth" problem
  - The cost savings argument: licensing, the queue, and the ROI of analyst autonomy
- What comes after this book: Cursor, Observable Framework, Streamlit, React + Recharts
- The future of AI + BI: where this is all heading

**Key idea:** The tools will change. The skill — knowing how to describe what you want and iterate until it's right — won't.

---

### Appendix A — Prompt Recipe Book

A curated collection of the most reliable prompts from the course, organized by use case. Designed to be dog-eared.

- Starting a new dashboard (with spec)
- Fixing broken code
- Iterating on design
- Adding interactivity
- Switching to fetched data
- Writing a data narrative
- Exploring a new dataset
- Writing a README

---

### Appendix B — Visualization Quick Reference

One-page reference: chart type → when to use it. Tufte's principles summarized. Color palette cheat sheet.

---

### Appendix C — The Enterprise Playbook

For readers who want to bring this approach into a large company. Covers:
- The architecture swap (S3 + CloudFront, SSO, internal APIs)
- The cost savings calculation
- The governance model
- How to pitch it to a CTO

---

## Writing Guidelines

### Structure of Each Chapter

1. **Opening hook** — a specific anecdote, statistic, or provocative claim. Not "in this chapter we will discuss." Drop the reader into something.
2. **The argument** — what this chapter is trying to convince the reader of
3. **The content** — theory, examples, case studies. Goes deeper than the course.
4. **The bridge to practice** — connects the theory to what students will build
5. **Chapter close** — one paragraph. Restate the key idea. No summary lists.
6. **Course callout** — *"Ready to put this into practice? Open Module X of the course."*

### What to Include That the Course Doesn't

- Case studies: real (anonymized) or fictional scenarios of dashboards succeeding or failing
- Historical context: how the BI industry got to where it is
- The enterprise perspective: what these principles look like at scale
- Deeper dives on theory (especially visualization principles and data narrative)
- The author's own opinion, clearly stated

### What NOT to Repeat From the Course

- Step-by-step setup instructions (the course has these)
- Copyable prompts (the course has these)
- Data files and project briefs (the course has these)
- Deliverable checklists (the course has these)

If a student reads a book chapter and then opens the course module, they should feel like the book prepared them — not like they read the same thing twice.

---

## Publishing Workflow — Leanpub

### Why Leanpub
- Write in Markdown, publish PDF/epub/mobi automatically
- Pay-what-you-want pricing or fixed price
- Author keeps 80% of revenue
- Easy to update as tools evolve (Claude API pricing changes, new features, etc.)
- Student discount codes for BUAN 610

### Setup
1. Create account at leanpub.com
2. Create new book, connect to a GitHub repo (Leanpub reads from a `/manuscript` folder)
3. Write chapters as individual `.md` files: `chapter-01.md`, `chapter-02.md`, etc.
4. `Book.txt` in `/manuscript` controls chapter order
5. Publish a preview early — share with students for feedback before final

### Suggested Repo Structure

```
pardon-my-saas-book/          ← separate repo from the course site
├── manuscript/
│   ├── Book.txt              ← chapter order
│   ├── introduction.md
│   ├── chapter-01.md         ← Why Pardon My SaaS?
│   ├── chapter-02.md         ← Your Toolkit
│   ├── chapter-03.md         ← Grammar of Visualization
│   ├── chapter-04.md         ← Anatomy of a Dashboard
│   ├── chapter-05.md         ← Your First Real Dashboard
│   ├── chapter-06.md         ← Your Visual Identity
│   ├── chapter-07.md         ← From Dashboard to Story
│   ├── chapter-08.md         ← Making It Interactive
│   ├── chapter-09.md         ← The Capstone Mindset
│   ├── chapter-10.md         ← Publishing, Portfolio, What's Next
│   ├── appendix-a.md         ← Prompt Recipe Book
│   ├── appendix-b.md         ← Visualization Quick Reference
│   └── appendix-c.md         ← The Enterprise Playbook
└── resources/
    ├── figures/              ← chart screenshots, diagrams
    └── notes/               ← research notes, drafts
```

### Pricing Recommendation
- Minimum: $0 (pay-what-you-want)
- Suggested: $15
- BUAN 610 student code: free or $0 minimum

---

## Sequencing — What to Write When

### Phase 1: Write while teaching (Semester 1)
Write each chapter the week before teaching the corresponding module. Teaching reveals what students actually need explained — use that to improve the chapter before it goes to press.

**Priority chapters first:**
1. Introduction + Chapter 1 (before the semester starts)
2. Chapter 3 (Visualization) — the most original content
3. Chapter 7 (Data Narrative) — central to the course identity

### Phase 2: Revise after first semester
After running the course once, you'll know:
- Which concepts students struggled with (needs more depth in the book)
- Which prompts reliably worked (promote to appendix)
- What questions came up that aren't addressed (add to relevant chapters)

### Phase 3: Publish
Publish on Leanpub with a "in progress" label. Leanpub readers understand and expect iterative publishing. Let students from the second semester buy it and give feedback before calling it final.

---

## The Elevator Pitch

*Pardon My SaaS: Building Dashboards with AI, Not Tableau is a practitioner's guide to building fully custom, AI-assisted data dashboards — without Tableau, Power BI, or any SaaS BI subscription (okay, fine, you need Claude). Paired with a free interactive course, it teaches analysts, students, and business professionals to describe what they want, let Claude Code build it, and publish it on GitHub Pages — for a fraction of the cost of traditional BI tools, with none of the lock-in.*
