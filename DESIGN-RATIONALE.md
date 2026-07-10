# DESIGN-RATIONALE — landing „sekcje"

## Kategoria i odbiorca
Marketing / narzędzie dla projektantów. Odbiorca: designer z Figma/Webflow/Framer,
który robi ładne strony, ale nie chce pisać kodu — gotowy „dyrygować" AI zamiast klikać panele.

## Referencje (kierunek)
- **Editorial dark / craft** — serif display + dużo powietrza (przeciw generycznemu SaaS „Inter everywhere").
- **shadcn / registry** — model copy-paste sekcji zamiast czarnej skrzynki npm.
- **section.tools (Paweł)** — karta-podgląd + „Copy component", tu przeniesione na żywy Astro + AI.

## Paleta (dark-first)
| Rola | Hex | Kontrast |
|---|---|---|
| bg | `#0C0C0E` | — |
| text | `#ECEAE3` | ~15:1 na bg ✓ |
| accent (acid lime) | `#CBF24A` | wysoki na bg ✓ |
| muted | `#8F8C83` | ~5:1 ✓ |

Akcent lime celowo **nie** jest indigo/violet (główny „AI tell"). Granat `#17375E` + złoto `#D4A017` jako wariant premium/event.

## Typografia
- Display: **Fraunces Variable** (400/500 + italic dla akcentów) — editorial gravitas.
- Body: **Inter Variable** (400–600).
- Mono: **JetBrains Mono** — eyebrowy, labelki, kod.
- Self-hosted przez Fontsource (bez CDN, działa offline).

## Hero
Asymetryczny split. Lewa: editorial headline z italic-akcentem „rozmową". Prawa: **żywe demo** —
prompt wpisuje się na oczach użytkownika, po czym sekcja przebudowuje się (granat + złoto).
To jest realny moment produktu, nie stock ilustracja. Jeden focal point.

## Motion budget
- Scroll reveal (translateY + opacity), pojedynczo, `IntersectionObserver`.
- Demo hero: typing + zmiana stanu sekcji (reveal informacji, nie dekoracja).
- Wszystko za guardem `prefers-reduced-motion` → stan końcowy pokazany od razu.

## Debata (skrót)
1. **Hero: split** — split pokazuje produkt (demo) obok obietnicy; centered byłby generyczny.
2. **Kolor: lime, nie indigo** — indigo to AI-default; lime = design-forward, wyróżnia się.
3. **Type: Fraunces+Inter+JBMono** — serif display = rzemiosło, nie kolejny Inter-only.
4. **Tekstura: grain + hairline** — subtelny szum zabija płaski generyczny render.
5. **Motion: measured** — demo niesie sens (edycja rozmową), reszta oszczędna.
6. **Gęstość: editorial** — dużo powietrza, jeden komunikat na sekcję.
7. **Dark default** — pasuje do „studio/craft" i do estetyki narzędzi dla devów/designerów.
