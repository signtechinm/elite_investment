# Elite Investment Website — Phase-by-Phase Development Plan

## 0. Project definition

Build a static, multi-page company portfolio website for Elite Investment, a Türkiye-based trading and joint-venture house connecting Turkish manufacturers with buyers and partners across the Gulf, Africa, and Europe.

The site should feel settled, discreet, deliberate, and accountable. It should communicate trust before ambition. The visual language is editorial and institutional: generous whitespace, controlled typography, quiet motion, strong alignment, and restrained use of imagery.

### Proposed stack

- Next.js with App Router and TypeScript
- Static generation (`output: 'export'`) for simple hosting
- Tailwind CSS
- shadcn/ui for accessible primitives only where useful
- Framer Motion for entrance, scroll, and page-transition motion
- `next/image` for local optimized image assets
- Local brand SVGs from `Elite-Investment-Brand-Kit-v2/01-svg-master`
- No CMS in phase one; all content stored in typed local data modules

### Non-goals for phase one

- No login, dashboard, deal room, or investor portal
- No public deal values, counterparties, margins, or unverifiable performance claims
- No animated 3D logo recreation
- No client-side database or contact form backend
- No use of the logo rebuilt as text; supplied SVG artwork remains authoritative

## 1. Brand decisions translated into the website

### Core palette

| Token | Hex | Use |
|---|---|---|
| Forest | `#052C2A` | Primary dark grounds, footer, hero panels, headings on light backgrounds |
| Jade | `#0B5955` | Links, rules, selected states, secondary surfaces |
| Signature Gold | `#B08D4F` | Only the supplied lockup details and very limited identity accents; never a background |
| Slate | `#2B3A38` | Body text and quiet UI text |
| Mist | `#E3EBEA` | Panels, cards, table backgrounds, borders |
| Paper | `#FAFAF7` | Main page ground |

Gold must not become a decorative gradient, button fill, oversized heading color, or background. The supplied full-colour logo already contains the required gold rule and square dot.

### Typography

- Libre Baskerville: supplied/loaded only for display headings and section titles.
- Cormorant Garamond: pull quotes, short editorial statements, and selected page introductions.
- Arial: body copy, labels, navigation, buttons, metadata, forms, and legal text.
- Default body size: 16px with `1.6` line-height.
- Small UI text: 12–14px, never below 12px.
- Page title: clamp between 42px and 72px depending on viewport; target 56px desktop.
- Section title: 30–44px; target 36px desktop.
- Card title: 20–26px; target 22px desktop.
- Avoid oversized “startup” typography. Titles should occupy a clear editorial hierarchy, not dominate every viewport.

### Voice rules

Use short declarative sentences. Lead with facts and numbers where available. Name risk before the reader discovers it. Do not use “world-class”, “leading”, “premier”, “one-stop solution”, or “synergies”. Running copy uses “Elite Investment” with an undotted I; only the supplied wordmark uses the Turkish dotted capital.

## 2. Site map and page responsibilities

### Primary pages

1. `/` — Home: establish trust, explain the house, and route visitors to the right relationship.
2. `/about` — About: explain the firm’s role, principles, and Turkey-to-market position.
3. `/capabilities` — Capabilities: show how Elite originates, structures, and supports transactions.
4. `/markets` — Markets: describe the corridor model across Türkiye, the Gulf, Africa, and Europe.
5. `/approach` — Approach: show the working process from first brief to accountable follow-through.
6. `/insights` — Insights index: editorial notes and practical observations; static content in phase one.
7. `/insights/[slug]` — Individual insight page template.
8. `/contact` — Contact: discreet enquiry route with contact details and a concise enquiry form presentation.

### Utility pages

- `/privacy`
- `/terms`
- `not-found`

### Global navigation

Desktop: logo, About, Capabilities, Markets, Approach, Insights, and a single Contact action.

Mobile: compact horizontal lockup plus menu button. The menu should open as a full-height Forest panel with a clear close action and large but not oversized link text.

## 3. Information architecture and page content

## 3.1 Home (`/`)

### Hero

Eyebrow: `TRADE · JOINT VENTURES · TURKEY`

Headline: `The confidence to make the next contract.`

Supporting copy: `Elite Investment connects Turkish manufacturing with buyers and partners across the Gulf, Africa and Europe. We originate, structure and stay accountable to the work after the introduction.`

Primary CTA: `Discuss an opportunity`

Secondary CTA: `How we work`

Visual: a quiet, full-width architectural or material image with a Forest overlay. Prefer a custom image of a stone, paper, or architectural threshold rather than generic finance imagery. Use a slow parallax offset of no more than 8%.

### Trust statement

`A house for transactions that need more than an introduction.`

Three restrained proof points:

- `01` Cross-border origination
- `02` Transaction structuring
- `03` Long-term alignment

### Corridor section

Heading: `Between people who have never met.`

Copy: `A manufacturer in Bursa. A buyer in Abu Dhabi. A partner assembling a venture neither side could build alone. Elite makes the commercial distance legible, then stays close to the commitments that follow.`

Visual: an understated route/corridor graphic made in CSS/SVG, not a generic world map. Use lines in Jade and labels in Slate. Keep it calm and documentary.

### Capabilities preview

Three cards linking to `/capabilities`:

- `Originate` — Find the right counterparties and define the real brief.
- `Structure` — Turn a promising conversation into a workable transaction.
- `Stay accountable` — Keep names, dates and risks visible after agreement.

### Closing CTA

Heading: `Start with the situation as it is.`

Copy: `Tell us what needs to move, who needs to be aligned, and where the uncertainty sits.`

CTA: `Make an enquiry`

## 3.2 About (`/about`)

### Hero

Title: `A commercial house between markets.`

Copy: `Elite Investment is a Türkiye-based trading and joint-venture house. We work between Turkish manufacturing and the markets that need reliable access to it.`

### Story section

Heading: `The product is confidence.`

Copy: `Nobody can see confidence until it fails. Our work is to make the obligations, timing and risks clear before that point. The result is not a louder transaction. It is a transaction with fewer surprises.`

### Values

Use four numbered editorial rows, not icon-heavy cards:

1. `Deliberate` — Nothing is rushed to market. Offers are checked before they are sent.
2. `Discreet` — Counterparties, volumes and margins are treated as private working information.
3. `Accountable` — Commitments have a date and a name attached.
4. `Bilingual` — We translate between commercial cultures, including the uncomfortable parts.

### Founder / firm note

Reserve a modular block for a named leadership statement once approved. Until then use a firm-level statement and avoid invented credentials.

## 3.3 Capabilities (`/capabilities`)

### Hero

Title: `From first brief to next step.`

Copy: `Our role changes with the situation. Sometimes it begins with a manufacturer. Sometimes with a buyer. The work is to make the opportunity specific enough to act on.`

### Capability modules

1. `Origination` — Market mapping, counterparty identification, initial qualification, and commercial brief development.
2. `Trade facilitation` — Supplier-buyer introductions, requirement translation, documentation coordination, and delivery context.
3. `Transaction structuring` — Commercial terms, responsibilities, timing, and risk checkpoints.
4. `Joint-venture formation` — Partner alignment, purpose definition, and a clear route from interest to operating plan.
5. `Position alignment` — Staying involved where Elite takes a position in the venture it helps build.

Each module gets: short description, “what we make clear” list, and a small factual outcome placeholder. Do not publish performance numbers until supplied and approved.

### Boundary statement

`We do not make the risk disappear. We make it visible early enough to manage.`

## 3.4 Markets (`/markets`)

### Hero

Title: `One corridor. Several commercial cultures.`

Copy: `The work sits between Turkish production and the procurement, investment and partnership realities of the Gulf, Africa and Europe.`

### Market panels

- `Türkiye` — Manufacturing depth, supplier context, and production-side relationships.
- `Gulf` — Procurement discipline, decision pathways, and long-term partnership expectations.
- `Africa` — Market-specific operating realities and the importance of dependable local alignment.
- `Europe` — Structured counterparties, documentation, and cross-border continuity.

Avoid implying that each region behaves as one market. Add a note: `Every corridor has its own law, timing, language and risk profile. We begin by understanding the specific one in front of us.`

### Visual

Use a quiet interactive corridor diagram with accessible text equivalents. On mobile, convert the diagram to a vertical sequence of market nodes.

## 3.5 Approach (`/approach`)

### Hero

Title: `A measured way to move.`

Copy: `The process is simple to describe. The discipline is in what happens between the steps.`

### Process timeline

1. `Listen` — Define the requirement, authority, timing and non-negotiables.
2. `Qualify` — Check the counterparties, constraints and commercial fit.
3. `Frame` — Set the responsibilities, risks and next decision in writing.
4. `Coordinate` — Keep the right people, documents and dates moving together.
5. `Stay close` — Follow through after the introduction or agreement.

Use a scroll-linked progress line. The active step changes through Jade, while the rest remain Mist/Slate. No rapid or distracting animation.

### Risk section

Heading: `The risk belongs in the room.`

Copy: `Timing, specifications, payment, logistics and decision rights are not footnotes. They shape whether a transaction can work. We surface them early.`

## 3.6 Insights (`/insights`)

### Purpose

Create a modest, editorial archive that demonstrates thinking without pretending to be a news publication. Start with 3–5 evergreen articles.

### Initial article titles

- `The first question is not “Can it ship?”`
- `What a useful commercial brief contains`
- `Why introductions are the beginning of the work`
- `Four dates that keep a cross-border transaction honest`
- `Where trust becomes a process`

Each article includes category, date, reading time, a short summary, and one restrained feature image or material crop.

## 3.7 Contact (`/contact`)

### Hero

Title: `Bring us the situation.`

Copy: `A concise first note is enough. Tell us where you are, what needs to move, and what is not yet clear.`

### Enquiry fields

- Name
- Company
- Work email
- Market / corridor
- What are you exploring?
- Preferred follow-up method

Phase one can render the form with a mailto or static form provider integration placeholder. The UI must include privacy consent text and a clear success/error state when the backend is connected.

### Direct contact block

Reserve approved business email, phone, registered address, and office hours. Do not invent these values; use content placeholders until supplied.

## 4. Component system

Build the following reusable components before page assembly:

- `SiteHeader`
- `MobileMenu`
- `SiteFooter`
- `LogoLockup`
- `Eyebrow`
- `PageHero`
- `SectionIntro`
- `EditorialCard`
- `CapabilityRow`
- `MarketPanel`
- `ProcessTimeline`
- `CorridorDiagram`
- `InsightCard`
- `Button` / `TextLink`
- `ScrollReveal`
- `ParallaxMedia`
- `Cookie/PrivacyNotice` if required by deployment

Use shadcn/ui for Button, Sheet, Input, Textarea, and accessible form primitives. Keep the visible design custom to the Elite system; do not ship default shadcn styling.

## 5. Motion and interaction rules

Motion supports orientation and calmness. It should not feel like a technology demo.

- Page load: logo/header fades in first, hero content follows with a 100–160ms stagger.
- Scroll reveal: opacity plus 12–20px vertical movement, 500–700ms duration.
- Parallax: image layers move 4–8% of their container height; disable for reduced-motion users.
- Page transitions: short opacity/translate transition, never a full-screen loading animation.
- Timeline: progress line grows as the section enters the viewport.
- Hover: links underline or shift a few pixels; cards lift no more than 4px.
- Avoid continuous looping animation except a very slow ambient image movement where it improves the composition.
- Implement `prefers-reduced-motion: reduce` for every animated component.

## 6. Image and asset plan

### Use supplied brand assets

- Header light background: `01-svg-master/lockup-horizontal/lockup-h-primary.svg` or appropriate Forest variant.
- Dark background: `lockup-h-reversed.svg`.
- Compact/mobile: approved stacked lockup or emblem depending on width.
- Favicon and app icons: `06-favicon-app-icon`.
- Never use the JPEG logo files where an SVG is suitable.

### Generate or source editorial imagery

Create a small image set with a consistent, quiet art direction:

1. Stone architectural threshold / seal-like surface for the home hero.
2. Turkish manufacturing detail: steel, textile, machinery, or hands reviewing a specification; no staged handshake.
3. Port/logistics detail with restrained composition for capabilities.
4. Paper, ledger, or table detail for approach/insights.
5. Architectural horizon or corridor image for markets.

Images should use deep greens, mineral neutrals, warm paper, and natural light. Avoid stock imagery of suits, globes, handshakes, arrows, or currency. Generate only where it produces a distinctive editorial result; otherwise use carefully licensed assets.

## 7. Responsive layout specification

- Content max width: 1180–1240px.
- Desktop gutters: 64–80px.
- Tablet gutters: 40px.
- Mobile gutters: 20–24px.
- Section vertical spacing: 120–160px desktop, 80–112px mobile.
- Grid: 12 columns desktop, 6 tablet, single-column mobile with intentional two-up exceptions.
- Hero minimum height: 640px desktop, 560px mobile; never force text below the fold.
- Buttons: minimum 44px height; touch targets at least 44px.
- Body measure: 58–72 characters per line for long copy.

## 8. Accessibility and quality requirements

- Semantic landmarks and one `h1` per page.
- Visible keyboard focus states in Jade or a compliant high-contrast treatment.
- Alt text for every meaningful image; decorative imagery marked appropriately.
- Text contrast checked against Paper, Mist, Forest, and Jade backgrounds.
- Keyboard-accessible mobile menu and form controls.
- Reduced-motion support.
- Turkish dotted logo only as an image asset; plain `Elite Investment` in accessible body text and metadata.
- Open Graph image and page-specific metadata for every route.
- No layout shift from un-sized images or font loading.

## 9. Delivery phases

### Phase 1 — Audit and content foundation

Inventory brand assets, confirm contact/legal information, approve the site map, and replace all placeholder business facts with confirmed values. Deliverable: approved content matrix and asset manifest.

### Phase 2 — Project foundation

Create the Next.js app, TypeScript types, Tailwind tokens, font setup, route structure, static metadata, and asset folders. Deliverable: deployable shell with no visual polish required yet.

### Phase 3 — Design system and shell

Implement global colors, typography, spacing, header, mobile menu, footer, buttons, links, logo variants, and motion primitives. Deliverable: one fully responsive shell page.

### Phase 4 — Core pages

Build Home, About, Capabilities, Markets, and Approach from the approved modules and copy. Deliverable: complete primary navigation journey.

### Phase 5 — Editorial and contact

Build the Insights index/detail template, Contact page, privacy/terms placeholders, form states, and metadata. Deliverable: complete public website content surface.

### Phase 6 — Visual asset production

Add approved image assets, crop variants, responsive image sizes, OG image, favicon/app icons, and final logo usage. Deliverable: coherent image language across all routes.

### Phase 7 — Motion and refinement

Tune entrance reveals, parallax, process timeline, hover states, page transitions, and reduced-motion fallbacks. Deliverable: calm, polished interaction layer.

### Phase 8 — QA and launch

Run responsive checks, keyboard/accessibility checks, metadata checks, broken-link checks, Lighthouse review, build/export validation, and a final brand compliance pass. Deliverable: static production build ready for hosting.

## 10. Acceptance checklist

- All primary pages exist and are reachable from navigation.
- No page reads like a generic one-page startup template.
- Page titles stay within the defined restrained type scale.
- Supplied vector logos are used without modification or retyping.
- Gold is not used as a background or general decoration.
- Body copy uses plain “Elite Investment”; the dotted capital is reserved for the supplied wordmark.
- Every page has a clear purpose, a strong next action, and a mobile layout.
- Motion is calm, useful, and disabled or reduced when requested by the user’s system.
- No invented company facts, client names, financial claims, phone numbers, or addresses remain before launch.
- Static export/build passes without warnings that affect the public experience.

## 11. Open inputs needed before final launch

- Approved registered entity name
- Approved office address
- Contact email and phone number
- Leadership/founder information, if it should be public
- Confirmed markets and service boundaries
- Privacy and terms copy
- Decision on contact form provider or mail routing
- Any approved case studies, figures, partner marks, or testimonials

