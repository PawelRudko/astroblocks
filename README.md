# astroblocks

**Ready-made Astro sections you change by _talking_ — not coding.**

astroblocks is a copy-paste kit of polished, responsive [Astro](https://astro.build) sections. Every block ships with a shared design system and an AI "brain" ([`AGENTS.md`](./AGENTS.md)), so you can drop a block in and just tell Claude Code (or any coding agent) what to change — colors, copy, spacing, layout. The code stays yours. No lock-in, no npm package to wire up.

## What's inside

Section components live in [`src/components/sections/`](./src/components/sections):

| Category | Blocks |
|---|---|
| Nav | `NavBar` |
| Hero | `HeroCentered`, `HeroSplit` |
| Team | `TeamGrid` (carousel) |
| Blog | `BlogGrid` |
| Card | `CardHover` (slide-up panel), `CardList` |
| FAQ | `FAQ` (accordion) |

A live gallery (`/` teaser + `/blocks` full library) with per-block previews and one-click copy is included.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4322
```

Open the folder in **Claude Code** and start editing by chat:

> "Copy the HeroSplit block and make the headline two lines, swap the button to secondary."

The agent reads [`AGENTS.md`](./AGENTS.md) (design tokens, type scale, button system, conventions) and keeps every change on-system.

## Using a single block

Each section is one self-contained `.astro` file with **scoped styles**. To reuse a block in your own project:

1. Copy the block file from `src/components/sections/`.
2. Make sure your project defines the shared **design tokens** and the H1–H6 + `.btn` system — see the `<style is:global>` in [`src/layouts/Layout.astro`](./src/layouts/Layout.astro), or hand `AGENTS.md` to your agent and ask it to port the tokens.
3. Pass content through props (blocks never hardcode copy).

## The design system

Everything a block needs to stay consistent — colors, radii, the Inter type scale, the three button styles, motion rules — is documented in [`AGENTS.md`](./AGENTS.md). That single file is what makes the kit *editable by conversation*: agents read it and follow it instead of guessing.

## Tech

Plain Astro · scoped CSS · zero required runtime dependencies · light, Keystatic-inspired theme · Inter + JetBrains Mono.

---

Built by [Pawel Rudko](https://github.com/PawelRudko).
