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
    BookDemo/         BookDemo.jsx + BookDemo.module.css
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
<BookDemo>        Centered H2 + subtext + Calendly inline embed
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

### BookDemo

- Section id: `book-demo`
- `border-top: 1px solid var(--gray-200)`, `padding: 100px 40px`
- Inner content constrained to var(--max), text-align center
- H2 "See CasePilot in action" + subtitle "30 minutes. I'll walk you through the tool live."
- Calendly inline embed: `useEffect` loads Calendly's widget CSS and JS into `document.head` on mount, removes them on unmount
- Embed rendered as `<div class="calendly-inline-widget" data-url={CALENDLY_URL} />`, height 700px
- Replace `CALENDLY_URL` constant (`https://calendly.com/your-link`) with the real Calendly link when ready
- At 768px: section padding drops to 60px vertical, embed height grows to 900px to fit the widget

### Footer

- `border-top: 1px solid var(--gray-200)`, flex row, space-between, `padding: 32px 40px`
- Left: "CasePilot" logo text
- Center: Privacy · Terms · Contact links (gray-600, no underline)
- Right: "© 2026 CasePilot" in gray-400
- Update email `hello@casepilot.io` when domain is confirmed

## Buttons

| Class convention | Style                                               | Use                |
| ---------------- | --------------------------------------------------- | ------------------ |
| `.btnDark`       | black bg, white text, 10px radius, 8px/18px padding | Primary CTA        |
| `.btnGhost`      | transparent bg, gray-200 border, gray-600 text      | Secondary / Log in |
| `.btnLarge`      | adds 13px/28px padding, 15px font-size              | Hero CTAs only     |

## Responsive (breakpoint: 768px)

- Nav: padding drops to 20px sides
- HowItWorks `.stepsGrid`: collapses to 1 column, gap 48px; screenshot slots switch to `aspect-ratio: 16/9`
- ClientView: collapses to 1 column, padding drops to 60px vertical
- WhoItsFor card grid: collapses to 1 column
- BookDemo: section padding drops to 60px vertical, embed height grows to 900px
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

- Wire the Waitlist form when a backend endpoint is ready — both Waitlist and BookDemo (Calendly) can share the same endpoint for lead capture
- Suggested: simple Node/Express route or a serverless function (Vercel functions, Netlify functions)
- Do not add `axios` or any HTTP library until then — keep dependencies minimal for now

# Legal Pages — CasePilot

> Replace all `[bracketed]` placeholders with your actual details before publishing.

---

# Privacy Policy

**Last updated:** [Date]  
**Effective:** [Date]

This Privacy Policy explains how [Your Law Firm Name] ("we", "us", or "our") collects, uses, and protects personal data when you use CasePilot, our case management platform. We are committed to complying with the EU General Data Protection Regulation (GDPR) and applicable Cypriot data protection law.

---

## 1. Who we are

The data controller is [Your Law Firm Name], registered at [Registered Address, Cyprus], registration number [Reg. No.]. For data protection enquiries, contact us at [privacy@yourfirm.com].

---

## 2. What data we collect

We collect and store the following personal data about clients:

- First name and last name
- Email address
- Case type (e.g. Personal Injury, Immigration, Criminal Defence)
- Case stage and update history
- Notes added by the assigned lawyer

We do not collect sensitive special-category data (such as health, biometric, or financial data) through this platform.

---

## 3. Why we collect it and our lawful basis

We process your data to manage and administer your legal case. Our lawful basis under GDPR Article 6 is:

- **Performance of a contract** — to deliver the legal services you engaged us for
- **Legitimate interests** — to maintain accurate case records and communicate updates to you
- **Legal obligation** — where applicable law requires us to retain certain records

---

## 4. How long we keep your data

We retain client data for [e.g. 7 years] from the date your case is closed, in accordance with legal professional obligations and applicable limitation periods. After this period, data is securely deleted.

---

## 5. Who we share data with

We do not sell or share your personal data with third parties for marketing. Data may be shared with:

- Our database and hosting provider ([e.g. Supabase / Firebase]), with whom we have a Data Processing Agreement
- Courts, regulatory bodies, or authorities where required by law
- Other legal professionals engaged by your firm on your matter, under confidentiality obligations

---

## 6. Your rights under GDPR

You have the right to: access your data, correct inaccurate data, request erasure (subject to legal retention obligations), restrict or object to processing, and data portability. To exercise any right, contact [privacy@yourfirm.com]. You also have the right to lodge a complaint with the Cyprus Commissioner for Personal Data Protection.

---

## 7. Security

We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure, or destruction. Access to case data is restricted to authorised staff only.

---

## 8. Changes to this policy

We may update this policy from time to time. The current version will always be available within CasePilot. Significant changes will be communicated to you directly.

---

---

# Terms of Service

**Last updated:** [Date]  
**Effective:** [Date]

These Terms of Service govern your use of CasePilot, operated by [Your Law Firm Name]. By accessing the platform, you agree to these terms.

---

## 1. Who may use CasePilot

CasePilot is a private platform. Access is granted only to authorised lawyers and staff of [Your Law Firm Name], and to clients who have been issued a case tracking link. Unauthorised access or sharing of login credentials is prohibited.

---

## 2. The service

CasePilot provides a case management interface allowing lawyers to create and update client cases, and clients to view the status of their matter via a secure tracking link. The platform does not constitute legal advice. All advice is provided separately through your engagement with the firm.

---

## 3. Client tracking links

Each client receives a unique tracking link to view their case status. This link should be kept confidential. [Your Law Firm Name] is not responsible for unauthorised access resulting from a client sharing their tracking link with others.

---

## 4. Acceptable use

You agree not to:

- Attempt to access cases or data you are not authorised to view
- Use the platform for any unlawful purpose
- Introduce malicious code or attempt to disrupt the service
- Misrepresent your identity or affiliation

---

## 5. Data and confidentiality

Case data stored in CasePilot is confidential and subject to legal professional privilege where applicable. All staff with access to the platform are bound by professional and contractual confidentiality obligations. Our handling of personal data is described in our Privacy Policy.

---

## 6. Availability and liability

We aim to keep CasePilot available at all times but cannot guarantee uninterrupted access. We are not liable for losses arising from platform downtime, data loss due to third-party infrastructure failure, or use of the platform contrary to these terms. Nothing in these terms limits liability for fraud, gross negligence, or any liability that cannot be excluded by law.

---

## 7. Intellectual property

CasePilot and all associated software, design, and content are the property of [Your Law Firm Name]. You may not copy, modify, or redistribute any part of the platform without prior written consent.

---

## 8. Governing law

These terms are governed by the laws of the Republic of Cyprus. Any disputes shall be subject to the exclusive jurisdiction of the courts of Cyprus.

---

## 9. Changes to these terms

We may update these terms from time to time. Continued use of CasePilot after changes are posted constitutes acceptance of the updated terms.

---

## 10. Contact

For any questions about these terms, contact us at [legal@yourfirm.com].
