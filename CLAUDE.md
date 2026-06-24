# CasePilot Landing Page — CLAUDE.md

## Project overview
Static single-page marketing site for CasePilot, a case management tool for law firms.
Built with React + Vite. CSS Modules for all styling. No backend. No build-time dependencies beyond Vite and React.
Deploy to any static host (Vercel, Netlify, GitHub Pages) via `npm run build`.

## Stack
- React (Vite)
- CSS Modules — one `.module.css` per component, no global stylesheets except `:root` tokens
- No backend, no API calls, no form submission logic yet
- No TypeScript — plain `.jsx` files

## Project structure

```
src/
  components/
    Nav/              Nav.jsx + Nav.module.css
    Hero/             Hero.jsx + Hero.module.css
    ProductGraphic/   ProductGraphic.jsx + ProductGraphic.module.css
    HowItWorks/       HowItWorks.jsx + HowItWorks.module.css
    ClientView/       ClientView.jsx + ClientView.module.css
    WhoItsFor/        WhoItsFor.jsx + WhoItsFor.module.css
    Waitlist/         Waitlist.jsx + Waitlist.module.css
    Footer/           Footer.jsx + Footer.module.css
  App.jsx
  App.module.css      (global :root tokens only)
  main.jsx
vite.config.js
package.json
```

## Design system

Tokens live in `App.module.css` as `:root` CSS variables and are referenced across all module files.

```
--black:    #0a0a0a   (headings, buttons, active elements)
--white:    #ffffff   (backgrounds)
--gray-100: #f5f5f5   (section backgrounds, screenshot placeholders)
--gray-200: #e8e8e8   (borders, dividers, connectors)
--gray-400: #a0a0a0   (eyebrows, placeholders, secondary text)
--gray-600: #6b6b6b   (body copy, subtitles)
--blue:     #1a56db   (case stage titles — inside ProductGraphic and ClientView ONLY)
--radius:   10px
--max:      1100px    (max-width for all content containers)
```

Font: system stack — `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

## Page structure

```
<Nav>             Logo left | Log in (ghost) + Get Early Access (dark) right
<Hero>            Eyebrow → H1 → subtitle → two CTAs
<ProductGraphic>  Full client tracking page mockup (live JSX, not an image)
<HowItWorks>      3-column grid with screenshot slots
<ClientView>      Text left, mini mockup card right
<WhoItsFor>       Gray bg, 2-col card grid
<Waitlist>        Centered H2 + email input + button
<Footer>          Logo | Privacy · Terms · Contact | © year
```

## Components

### Nav
- Sticky, `border-bottom: 1px solid var(--gray-200)`, height 60px
- Left: logo text "CasePilot", 17px, weight 700
- Right: ghost button "Log in" + dark button "Get Early Access"
- Ghost button: transparent bg, `border: 1px solid var(--gray-200)`, color gray-600
- Do not add nav links — no other pages exist yet

### Hero
- Centered, `padding: 100px 40px 80px`, max-width var(--max)
- Eyebrow: uppercase, 13px, gray-600, letter-spacing 0.05em
- H1: `clamp(38px, 6vw, 68px)`, weight 700, `letter-spacing: -2px`, max-width 820px
- Subtitle: 18px, gray-600, max-width 540px
- Dark button "Get Early Access" → scrolls to `#waitlist`
- Ghost button "See how it works" → scrolls to `#how`

### ProductGraphic
- Max-width 860px, centered, `padding: 0 40px 80px`
- Outer wrapper: gray-200 bg, 16px radius, 24px padding
- Inner card: white bg, 12px radius, `box-shadow: 0 2px 24px rgba(0,0,0,0.06)`
- Content (all live JSX, never an `<img>`):
  - Firm header row: logo placeholder box left, firm name right, `border-bottom` gray-200
  - Case label (small gray text), stage title in `#1a56db`, "last updated" timestamp
  - Progress timeline: flex row of circle nodes (`.stepCircle`) and connector lines
    - Active nodes: black bg with white inner dot
    - Inactive nodes: white bg, gray-200 border
  - Update history box: `border: 1px solid var(--gray-200)`, rows with stage name + timestamp

### HowItWorks
- Section id: `how`
- Eyebrow + H2 "Three steps. No training required."
- `.stepsGrid` — CSS grid, 3 columns, gap 32px
- Each step column: step number (01/02/03) → H3 → `<p>` → screenshot slot div
- Screenshot slot: `aspect-ratio: 4/3`, gray-100 bg, 12px radius, `border: 1px solid var(--gray-200)`
- Leave placeholder content inside each slot with a visible label and a JSX comment:
  - `{/* Replace with: <img src="screenshot-add-case.png" alt="Add case form" /> */}`
  - `{/* Replace with: <img src="screenshot-send-update.png" alt="Send update panel" /> */}`
  - `{/* Replace with: <img src="screenshot-client-view.png" alt="Client tracking page" /> */}`
- When screenshots are ready, remove the placeholder div and uncomment the `<img>`

### ClientView
- 2-column CSS grid, gap 80px, `align-items: center`, `border-top: 1px solid var(--gray-200)`
- Left `.splitText`: eyebrow + H2 + body paragraph
- Right `.splitVisual`: gray-100 bg, 14px radius, 28px padding, contains `.miniCard`
- Mini card is live JSX (not an image): stage title in `#1a56db`, progress dot row, history rows
- Do not replace mini card with a screenshot

### WhoItsFor
- Full-width gray-100 background, `border-top: 1px solid var(--gray-200)`
- Inner content constrained to var(--max)
- 2-column card grid, gap 24px
- Cards: white bg, `border: 1px solid var(--gray-200)`, 10px radius, 28px/32px padding
- Current cards: "Solo practitioners" and "Small law firms"

### Waitlist
- Section id: `waitlist`
- Centered, `padding: 100px 40px`, text-align center
- H2 + subtitle paragraph + `.emailForm` row
- Email input: `width: 280px`, controlled with `useState` — store value, no submit handler
- Leave a clear `// TODO: wire up form submission when backend is added` comment
- Dark button label: "Request Access"

### Footer
- `border-top: 1px solid var(--gray-200)`, flex row, space-between, `padding: 32px 40px`
- Left: "CasePilot" logo text
- Center: Privacy · Terms · Contact links (gray-600, no underline)
- Right: "© 2026 CasePilot" in gray-400
- Update email `hello@casepilot.io` when domain is confirmed

## Buttons

| Class convention | Style | Use |
|---|---|---|
| `.btnDark` | black bg, white text, 10px radius, 8px/18px padding | Primary CTA |
| `.btnGhost` | transparent bg, gray-200 border, gray-600 text | Secondary / Log in |
| `.btnLarge` | adds 13px/28px padding, 15px font-size | Hero CTAs only |

## Responsive (breakpoint: 768px)

- Nav: padding drops to 20px sides
- HowItWorks `.stepsGrid`: collapses to 1 column, gap 48px; screenshot slots switch to `aspect-ratio: 16/9`
- ClientView: collapses to 1 column, padding drops to 60px vertical
- WhoItsFor card grid: collapses to 1 column
- Footer: stacks vertically, centered, gap 16px

## What not to change
- `#1a56db` is used only inside ProductGraphic and ClientView. Never anywhere else on the page.
- No color accents, no gradients, no box shadows outside the product graphic card.
- No animations or scroll effects unless explicitly requested.
- ProductGraphic and ClientView mini card must stay as live JSX — they render without any external image assets.
- No pricing section until pricing is decided.
- No testimonials until real quotes are collected from users.
- No nav links until additional pages exist.

## Adding the backend later
When the "Book a Demo" section is added:
- Add a `BookDemo` component following the same folder structure
- Wire the Waitlist form then too — both will likely share the same endpoint
- Suggested: simple Node/Express route or a serverless function (Vercel functions, Netlify functions)
- Do not add `axios` or any HTTP library until then — keep dependencies minimal for now
