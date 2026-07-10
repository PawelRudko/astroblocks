# Astroblocks — mózg kitu (instrukcja dla agenta AI)

To jest „mózg" kitu. Kiedy użytkownik prosi o zmianę albo dodanie sekcji, trzymaj się tych zasad,
żeby wszystko było spójne z systemem — **nie zmyślaj wartości**, sięgaj po tokeny niżej.

Działa z każdym agentem (Claude Code czyta to przez `CLAUDE.md`, Codex czyta `AGENTS.md` wprost,
Cursor/Copilot można wskazać na ten plik). Sekcje to zwykłe pliki `.astro` — zero lock-inu do narzędzia.

## Design tokens (używaj ich, nie hardcode losowych kolorów)

| Token | Wartość | Do czego |
|---|---|---|
| Tło | `#FFFFFF` | główne tło (jasny motyw) |
| Powierzchnia 2 | `#F5F5F3` | subtelne wypełnienia |
| Tekst | `#21201C` | nagłówki, opisy, nav |
| Faint | `#9B9890` | eyebrowy, bardzo subtelne labelki |
| Linia | `rgba(24,24,27,0.10)` / `0.16` | ramki, dividery |
| **Przycisk main (indygo)** | `#5B5BD6` (hover `#4E4EC8`), tekst `#FFF` | CTA / główna akcja |
| Przycisk secondary | białe tło + ramka `line-strong` + tekst `#21201C` | druga akcja |
| Akcent tekstowy (lawenda) | `#7C6CD0` | wyróżnione słowo w nagłówku przez `<em>` |
| Pastele geo (hero/footer) | lav `#D3C6F9` · peach `#FAC6BD` · butter `#FED888` · mint `#BEE3BF` · sky `#B4E0EA` · rose `#F3C6E2` | tła geometryczne |
| Wariant „dark" sekcji | tło `#0A0A0C`/`#0E0E11`, akcent lime `#CBF24A` | ciemne sekcje (np. HeroSplit dark) |

- **Radius:** przyciski/inputy `12px`, karty/sekcje `16px`.
- **Font:** tylko **Inter** (`'Inter Variable'`) do nagłówków i body; **JetBrains Mono** do eyebrowów/labelek/kodu. Nie wprowadzaj innego fontu display bez prośby.

## Typografia — system nagłówków H1–H6 (globalny w Layout)

Wszystkie nagłówki: **Inter, `font-weight: 600` (semibold, NIE bold), kolor `#21201C` (czarny)**.

| Tag | Rozmiar | Uwagi |
|---|---|---|
| **H1** | `48px` (clamp do 3rem) | hero, line-height 1.05 |
| **H2** | `24px` (1.5rem) | nagłówek sekcji |
| **H3** | `20px` (1.25rem) | pod-nagłówek |
| **H4** | `18px` | |
| **H5** | `16px` | |
| **H6** | `14px` | |

- Używaj **semantycznych tagów** `<h1>`–`<h6>` — styl przychodzi z globala, nie duplikuj.
- **Body/opisy:** `17px`, `line-height: 1.4`, kolor `#21201C`.
- **Eyebrow:** JetBrains Mono, `0.72rem`, UPPERCASE, `letter-spacing: 0.16em`, kolor `faint`.
- Wyróżnienie w nagłówku = `<em>` (nie italic) w kolorze lawendy `#7C6CD0` (globalnie).

## Przyciski — 3 rodzaje (globalne w Layout)

Rozmiar/kształt jak w hero: niewielkie, `radius 12px`, `padding 0.55rem 1rem`, `weight 600`, `size 0.9rem`. `.btn--sm` = mniejszy.

1. **`.btn .btn--primary`** — MAIN: tło indygo `#5B5BD6`, hover `#4E4EC8`, tekst biały.
2. **`.btn .btn--secondary`** — SECONDARY: białe tło + ramka, hover `border-color: text` + tło `#faf9f7`. (`.btn--ghost` to alias.)
3. **`.btn .btn--link`** — LINK: bez tła/ramki, tekst + strzałka; hover → kolor indygo + strzałka odjeżdża (`gap` rośnie).

Przyciski kopiujące mają **ikonkę copy** (`.btn__ico`) + `<span class="btn__label">…</span>` (JS podmienia sam label).

## Animacje (styl premium, „nie przekombinuj")

- Wejście sekcji: subtelny **staggered fade-up** (`translateY 18px → 0`, opacity, ~0.7s, delay per element `--d`).
- Zawsze guard `@media (prefers-reduced-motion: reduce)` → pokaż stan końcowy.
- Wzór: patrz `HeroCentered.astro` (keyframes `hcRise` / `hcMedia`).

## Konwencje kodu

- Każda sekcja = **jeden plik `.astro`** w `src/components/sections/`.
- Style zawsze **scoped** (`<style>` w komponencie), **mobile-first**, breakpoint `720px`.
- Treść **przez propsy** — nie hardcode'uj tekstu w markupie.
- Warianty: prop `variant="light" | "dark"`.
- Animacje: **zawsze** guard `@media (prefers-reduced-motion: reduce)`.
- Zdjęcia: przez props; placeholder demo = `/placeholder-landscape.svg`.
- **Pauzy: używaj `–` (półpauza), NIE `—` (długa pauza).**

## Dodanie nowej sekcji (żeby wpadła do galerii)

1. Stwórz `src/components/sections/NazwaSekcji.astro` (propsy + scoped style).
2. Dopisz wpis w `src/data/sections.ts`: `{ id, name, category, file, demo: {…propsy…} }`.
3. Zarejestruj komponent w mapie w `src/pages/preview/[id].astro`.
4. Gotowe — karta w galerii, filtr kategorii, etykieta `KATEGORIA 01` i przycisk „Kopiuj" robią się same.

## Typowe prośby i jak je realizować

- „zrób jaśniejszą / ciemniejszą wersję" → użyj propa `variant`, nie odwracaj kolorów ręcznie.
- „zmień główny przycisk" → trzymaj `.btn--primary` (indygo), secondary = `.btn--ghost`.
- „dodaj sekcję X jak nr N" → skopiuj wzorzec z `src/components/sections/`, dopisz do registry (patrz wyżej).
- „dodaj animację wejścia" → `IntersectionObserver` + klasa `.reveal` + guard reduced-motion.
- „zmień kolor na …" → jeśli pasuje token, użyj tokenu; hardcode tylko gdy user poda konkretny hex.

## Czego NIE robić

- Nie hardcode'uj losowych kolorów — sięgaj po tokeny.
- Nie zmieniaj Inter na inny font display (chyba że user wprost prosi).
- Nie usuwaj guardów `prefers-reduced-motion`.
- Nie używaj długiej pauzy `—` (ma być `–`).
- Nie rób „generycznego AI-looku" — trzymaj system: jasne tło, indygo akcent, czysty Inter, dużo powietrza.
