# Astroblocks — the kit's brain (instructions for the AI agent)

This is the kit's "brain". When the user asks to change or add a section, stick to these rules
so everything stays consistent with the system — **don't make up values**, reach for the tokens below.

Works with any agent (Claude Code reads it via `CLAUDE.md`, Codex reads `AGENTS.md` directly,
Cursor/Copilot can be pointed at this file). Sections are plain `.astro` files — zero tool lock-in.

## Design tokens (use them, don't hardcode random colors)

| Token | Value | Used for |
|---|---|---|
| Background | `#FFFFFF` | main background (light theme) |
| Surface 2 | `#F5F5F3` | subtle fills |
| Text | `#21201C` | headings, copy, nav |
| Faint | `#9B9890` | eyebrows, very subtle labels |
| Line | `rgba(24,24,27,0.10)` / `0.16` | borders, dividers |
| **Main button (indigo)** | `#5B5BD6` (hover `#4E4EC8`), text `#FFF` | CTA / primary action |
| Secondary button | white bg + `line-strong` border + text `#21201C` | secondary action |
| Text accent (lavender) | `#7C6CD0` | highlighted word in a heading via `<em>` |
| Geo pastels (hero/footer) | lav `#D3C6F9` · peach `#FAC6BD` · butter `#FED888` · mint `#BEE3BF` · sky `#B4E0EA` · rose `#F3C6E2` | geometric backgrounds |
| Section "dark" variant | bg `#0A0A0C`/`#0E0E11`, lime accent `#CBF24A` | dark sections (e.g. HeroSplit dark) |

- **Radius:** buttons/inputs `12px`, cards/sections `16px`.
- **Font:** only **Inter** (`'Inter Variable'`) for headings and body; **JetBrains Mono** for eyebrows/labels/code. Don't introduce another display font unless asked.

## Typography — H1–H6 heading system (global in Layout)

All headings: **Inter, `font-weight: 600` (semibold, NOT bold), color `#21201C` (black)**.

| Tag | Size | Notes |
|---|---|---|
| **H1** | `48px` (clamp to 3rem) | hero, line-height 1.05 |
| **H2** | `24px` (1.5rem) | section heading |
| **H3** | `20px` (1.25rem) | sub-heading |
| **H4** | `18px` | |
| **H5** | `16px` | |
| **H6** | `14px` | |

- Use **semantic tags** `<h1>`–`<h6>` — the style comes from the global, don't duplicate it.
- **Body/copy:** `17px`, `line-height: 1.4`, color `#21201C`.
- **Eyebrow:** JetBrains Mono, `0.72rem`, UPPERCASE, `letter-spacing: 0.16em`, color `faint`.
- Highlight in a heading = `<em>` (not italic) in lavender `#7C6CD0` (globally).

## Buttons — 3 types (global in Layout)

Size/shape like in the hero: small, `radius 12px`, `padding 0.55rem 1rem`, `weight 600`, `size 0.9rem`. `.btn--sm` = smaller.

1. **`.btn .btn--primary`** — MAIN: indigo bg `#5B5BD6`, hover `#4E4EC8`, white text.
2. **`.btn .btn--secondary`** — SECONDARY: white bg + border, hover `border-color: text` + bg `#faf9f7`. (`.btn--ghost` is an alias.)
3. **`.btn .btn--link`** — LINK: no bg/border, text + arrow; hover → indigo color + the arrow slides away (`gap` grows).

Copy buttons have a **copy icon** (`.btn__ico`) + `<span class="btn__label">…</span>` (JS swaps just the label).

## Animations (premium style, "don't overdo it")

- Section entrance: a subtle **staggered fade-up** (`translateY 18px → 0`, opacity, ~0.7s, delay per element `--d`).
- Always guard `@media (prefers-reduced-motion: reduce)` → show the final state.
- Pattern: see `HeroCentered.astro` (keyframes `hcRise` / `hcMedia`).

## Code conventions

- Each section = **one `.astro` file** in `src/components/sections/`.
- Styles always **scoped** (`<style>` in the component), **mobile-first**, breakpoint `720px`.
- Content **through props** — don't hardcode text in the markup.
- Variants: prop `variant="light" | "dark"`.
- Animations: **always** guard `@media (prefers-reduced-motion: reduce)`.
- Images: through props; demo placeholder = `/placeholder-landscape.svg`.
- **Dashes: use `–` (en-dash), NOT `—` (em-dash).**

## Building the user's page — DEFAULT mode (assembling from ready-made blocks)

When someone says "add section X", "drop NavBar/Hero/FAQ onto the page", "add another block", or **pastes block code from the "Copy" button** — this is about **assembling the home page `/` from READY-MADE blocks** that already live in `src/components/sections/`. **Do NOT register anything in the gallery, do NOT create `/preview` subpages.** Do this:

1. Open **`src/pages/index.astro`** — this is the home page (the user's canvas).
2. Import the component at the top (frontmatter), e.g. `import NavBar from '../components/sections/NavBar.astro';`
3. Insert it **inside `<main>`**: `<NavBar {...props} />`. **Add further blocks BELOW** — sections stack one under another, in insertion order (like a normal web page).
4. With the first block **remove the empty canvas** (`<section class="empty">…</section>`).
5. Take props from the demo in `src/data/sections.ts` (the block's `demo` field) and adjust the text per the request.

Result: the user sees their sections at `http://localhost:4322/` — **not** at `/preview/...`. The `/preview` subpages are only gallery previews, NOT a place for the user's page.

## Adding a COMPLETELY NEW block to the library (only when creating a new section type)

Do this only when the user wants a **completely new** component that is NOT in `sections/`:

1. Create `src/components/sections/SectionName.astro` (props + scoped style).
2. Add an entry in `src/data/sections.ts`: `{ id, name, category, file, demo: {…props…} }`.
3. Done — everything else is automatic and scales to hundreds of blocks: the preview (`preview/[id].astro` auto-resolves the component by `file` via `import.meta.glob`), the copy source (`/raw/<id>` served on demand), the gallery card, category filter, `CATEGORY 01` label, lazy thumbnail and pagination. **Never** edit a component map or import list — just the file + the registry entry.

## Common requests and how to handle them

- "make a lighter / darker version" → use the `variant` prop, don't invert colors by hand.
- "change the main button" → keep `.btn--primary` (indigo), secondary = `.btn--ghost`.
- "add section X to the page" / "I pasted block X's code" → the block is already in `sections/`; do NOT create a duplicate and do NOT touch the gallery — import and insert `<X {...} />` in `src/pages/index.astro` (see "Building the user's page").
- "add a COMPLETELY NEW block type to the library" → copy the pattern from `src/components/sections/`, add it to the registry (see "Adding a COMPLETELY NEW block").
- "add an entrance animation" → `IntersectionObserver` + the `.reveal` class + a reduced-motion guard.
- "change the color to …" → if a token fits, use the token; hardcode only when the user gives a specific hex.

## What NOT to do

- Don't hardcode random colors — reach for the tokens.
- Don't swap Inter for another display font (unless the user explicitly asks).
- Don't remove the `prefers-reduced-motion` guards.
- Don't use the em-dash `—` (it should be `–`).
- Don't make a "generic AI look" — keep to the system: light background, indigo accent, clean Inter, lots of breathing room.
