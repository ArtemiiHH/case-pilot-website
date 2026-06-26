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

This Privacy Policy explains how CasePilot ("we", "us", or "our"), operated by [Your Full Name], collects and uses personal data about the lawyers and legal professionals ("users") who sign up to use our platform. It does not cover client data entered by users into the platform — that data is controlled exclusively by the user.

---

## 1. Who we are

CasePilot is operated by [Your Full Name], contactable at [your@email.com]. We are the data controller only in respect of the account data described below.

---

## 2. What data we collect about you (the lawyer)

When you sign up and use CasePilot, we collect:

- Your name and email address
- Your law firm or practice name and logo (if provided)
- Billing information, processed by our payment provider [e.g. Stripe]
- Usage data such as login timestamps and feature activity

We do **not** have access to, or control over, any client data you enter into the platform.

---

## 3. What we do not control

CasePilot is a tool for legal professionals to manage their own client cases. Any personal data you enter about your clients — including names, email addresses, and case details — is stored in your account on Supabase and is under your sole control as the data controller. We act only as a data processor in respect of that data, as set out in our Data Processing Agreement.

---

## 4. Why we collect your data and our lawful basis

We process your account data to:

- Create and manage your CasePilot account
- Provide and improve the platform
- Send you service-related communications (e.g. billing receipts, updates)

Our lawful basis is **performance of a contract** (providing you the service you signed up for) and **legitimate interests** (maintaining and improving the platform).

---

## 5. Who we share your data with

We use the following third-party providers who may process your account data on our behalf:

- **Supabase** — database and infrastructure hosting
- **[Stripe or your payment provider]** — payment processing
- **[Any email provider, e.g. Resend / SendGrid]** — transactional email delivery

Each provider is bound by appropriate data processing terms.

---

## 6. How long we keep your data

We retain your account data for as long as your account is active, and for up to [e.g. 2 years] after account closure for legitimate business purposes such as billing records. You may request deletion at any time.

---

## 7. Your rights

You have the right to access, correct, or delete your account data, restrict or object to processing, and data portability. To exercise any right, contact [your@email.com].

---

## 8. Changes to this policy

We may update this policy from time to time. We will notify you of significant changes by email or via the platform.

---

---

# Terms of Service

**Last updated:** [Date]
**Effective:** [Date]

These Terms of Service ("Terms") govern your access to and use of CasePilot, a case management platform operated by [Your Full Name] ("we", "us", or "our"). By creating an account, you agree to these Terms.

---

## 1. The service

CasePilot is a SaaS platform that allows legal professionals to manage client cases, track case stages, and share status updates with clients via secure tracking links. We provide the platform as a tool only — we do not provide legal advice, and we are not a party to any relationship between you and your clients.

---

## 2. Your account

You must provide accurate information when signing up. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. Notify us immediately at [your@email.com] if you suspect unauthorised access.

---

## 3. Your responsibilities as a data controller

By using CasePilot to store client data, you acknowledge that:

- You are the **data controller** for all client personal data you enter into the platform
- You are responsible for ensuring you have a lawful basis to process your clients' data
- You are responsible for complying with GDPR and any other applicable data protection law in your jurisdiction
- You must have your own Privacy Policy in place for your clients

We act as your **data processor** in respect of client data. Our Data Processing Agreement, available at [link or "on request"], governs this relationship and must be accepted before using the platform with real client data.

---

## 4. Acceptable use

You agree not to:

- Use CasePilot for any unlawful purpose
- Enter data into the platform without a lawful basis to process it
- Attempt to access other users' accounts or data
- Reverse engineer, copy, or redistribute any part of the platform
- Introduce malicious code or attempt to disrupt the service

---

## 5. Platform availability

We aim to keep CasePilot available at all times but do not guarantee uninterrupted access. We are not liable for losses arising from downtime or third-party infrastructure failures (including those of Supabase or other providers).

---

## 6. Intellectual property

CasePilot, including its design, code, and branding, is the property of [Your Full Name]. Your firm name, logo, and content you upload remain your own. You grant us a limited licence to display your branding within the platform solely for the purpose of delivering the service (e.g. showing your logo in client-facing emails).

---

## 7. Payment and cancellation

[Add your pricing and cancellation terms here when you have them. For example: subscription terms, refund policy, what happens to data on cancellation.]

---

## 8. Limitation of liability

To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential losses arising from your use of CasePilot. Our total liability to you shall not exceed the amount you paid us in the 3 months preceding the claim. Nothing in these terms excludes liability for fraud or gross negligence.

---

## 9. Governing law

These Terms are governed by the laws of the Republic of Cyprus. Any disputes shall be subject to the exclusive jurisdiction of the courts of Cyprus.

---

## 10. Changes to these terms

We may update these Terms from time to time. We will notify you of material changes by email or via the platform. Continued use after changes take effect constitutes acceptance.

---

## 11. Contact

For any questions about these Terms, contact [your@email.com].

---

---

# Data Processing Agreement (DPA)

**Between:** [Your Full Name], operating CasePilot ("Processor")
**And:** The legal professional or firm using CasePilot ("Controller")

---

## 1. Purpose

This DPA governs the processing of personal data by CasePilot on behalf of the Controller, as required by GDPR Article 28.

---

## 2. Nature of processing

CasePilot stores and displays client personal data (names, email addresses, case details) entered by the Controller, solely for the purpose of providing the case management service.

---

## 3. Processor obligations

CasePilot agrees to:

- Process client data only on documented instructions from the Controller
- Ensure that persons authorised to process the data are bound by confidentiality
- Implement appropriate technical and organisational security measures
- Assist the Controller in responding to data subject rights requests where reasonably possible
- Delete or return all personal data upon termination of the service, at the Controller's choice
- Make available all information necessary to demonstrate compliance with this DPA

---

## 4. Sub-processors

CasePilot uses Supabase as a sub-processor for database hosting. Supabase's data processing terms are available at supabase.com/privacy. We will notify you of any changes to sub-processors.

---

## 5. Data transfers

Client data is stored on Supabase infrastructure. Supabase is compliant with GDPR and provides appropriate safeguards for any international data transfers.

---

## 6. Governing law

This DPA is governed by the laws of the Republic of Cyprus.
