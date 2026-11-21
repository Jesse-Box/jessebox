# Modern vanilla CSS in Astro: what to use, what to skip

Research for [#160](https://github.com/Jesse-Box/jessebox/issues/160) (map [#157](https://github.com/Jesse-Box/jessebox/issues/157)). Facts only. The decision belongs to [#161](https://github.com/Jesse-Box/jessebox/issues/161).

Researched November 2026. Browser support comes from the [web-features](https://github.com/web-platform-dx/web-features) dataset v3.47.0, the data behind Baseline ([web.dev/baseline](https://web.dev/baseline)). In the tables:

- **Widely** means "Baseline Widely available". The feature has worked in all major browsers for at least 30 months.
- **Newly** means "Baseline Newly available". It works in all major browsers, but has done so for less than 30 months.
- **Limited** means at least one major browser does not support it yet.

## Starting point: the current site

- `src/styles/tokens.css` holds design tokens as custom properties on `:root`: colours, a space scale, radii, font stacks, a modular font-size scale, line heights and weights. It also defines `--breakpoint-0..2`, but those tokens **cannot be used inside `@media`**, because `var()` only works in property values ([MDN `var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/var)). `global.css` repeats the breakpoints as literal numbers (`600px`, `1000px`, `1500px`, `2100px`).
- `src/styles/global.css` imports `normalize.css` v8.0.1. That project's last commit was in November 2018 ([necolas/normalize.css](https://github.com/necolas/normalize.css)).
- `global.css` holds 3 `@font-face` rules (GT Flexa, GT Alpina; woff2 + woff). None of them sets `font-display`, `font-weight` or `font-style`.
- At each breakpoint, `body` font-size jumps to a new fixed value (`1.0625rem` → … → `1.9411rem`). That pattern is what `clamp()` fluid type replaces.
- One global stylesheet is imported by `Layout.tsx`, with BEM class names.

## How Astro handles CSS (the parts that matter)

Source: [Astro docs – Styles and CSS](https://docs.astro.build/en/guides/styling/) and the [`scopedStyleStrategy` config reference](https://docs.astro.build/en/reference/configuration-reference/#scopedstylestrategy). Current Astro is 7.x, which builds on Vite 8.

| Mechanism | What it does |
|---|---|
| **Scoped `<style>`** in a `.astro` file | Scoped by default. Astro adds a `data-astro-cid-*` attribute to each selector, so `h1 {}` compiles to `h1[data-astro-cid-x] {}`. Styles don't leak out, and they **don't reach child components**. The docs say "it is okay to use low-specificity selectors like `h1 {}`". |
| `scopedStyleStrategy` | `'attribute'` (default, +1 class specificity), `'class'` (+1), or `'where'` (+0, wraps the scope in `:where()`). The docs describe `'where'` as giving "more control over specificity, but requires … layers and other tools". |
| `<style is:global>` / `:global(...)` | Opts out of scoping, either for a whole block or for one selector. The docs: "Scoped styles should be used as often as possible. Global styles should be used only as-needed." `:global()` is the suggested way to style rendered Markdown inside a component. |
| `import '../styles/global.css'` in frontmatter | Global stylesheet that Astro bundles and minifies. The docs suggest importing it in the Layout, "before other imports so that it has the lowest precedence". Imported CSS "can leak": importing a component applies its CSS even if the component is never rendered. |
| `<link>` to `/public/*.css` | Skips Astro processing. It has the lowest precedence in source order. |
| Cascade order Astro guarantees | `<link>` tags → imported styles → **scoped styles last**. When specificity is equal, scoped styles win. |
| `define:vars={{…}}` | Passes frontmatter values into a `<style>` block as custom properties. |
| `class:list` | Combines class names conditionally. |
| **CSS Modules** | Documented for **React/Preact** (`.jsx`/`.tsx`): `import s from './x.module.css'`. Plain global CSS imports also work in React components. Astro's own docs show CSS Modules only for framework components, because `.astro` files already have scoping. |
| Preprocessors / PostCSS | Sass/Less/Stylus work if you install them. PostCSS is built in through Vite (`postcss.config.cjs`). Lightning CSS can replace PostCSS as the transformer (`vite.css.transformer: "lightningcss"`). |
| Production bundling | One CSS chunk per page plus shared chunks. Chunks under 4 kB are inlined as `<style>`. Configure with `build.inlineStylesheets` and `vite.build.assetsInlineLimit`. |

**Build-time lowering: a fact worth knowing.** Vite 8's default `build.target` is `'baseline-widely-available'`, which means `chrome111, edge111, firefox114, safari16.4, ios16.4` ([Vite build options](https://vite.dev/config/build-options#build-target)). `build.cssTarget` defaults to the same value. CSS is minified by Lightning CSS by default (`build.cssMinify: 'lightningcss'`). Lightning CSS "compiles [nesting] to un-nested style rules" when the targets lack support ([Lightning CSS transpilation](https://lightningcss.dev/transpilation.html)). The targets also cover colour functions, `light-dark()` and media range syntax. So with default settings you can **write** nested CSS and the build will likely ship flattened CSS for those older targets. You can raise `build.cssTarget` to ship nesting as written. Vite's guidance: "author plain, future-standards-compliant CSS" ([Vite features](https://vite.dev/guide/features#css-pre-processors)).

## Fonts: Astro Fonts API vs hand-written `@font-face`

Sources: [Astro docs – Using custom fonts](https://docs.astro.build/en/guides/fonts/) and the [`fonts` config reference](https://docs.astro.build/en/reference/configuration-reference/#fonts).

- Astro now has a stable **Fonts API**. You set `fonts: [...]` in `astro.config.mjs`, and `fontProviders.local()` supports self-hosted files kept in `src/`, such as licensed GT fonts. Astro generates the `@font-face` rules, exposes each family as a CSS variable (`cssVariable: "--font-x"`), and emits it through a `<Font cssVariable=… preload />` component in `<head>`.
- What the Fonts API adds over hand-written CSS: optional preload links, **automatically generated metric-matched fallback fonts** to reduce layout shift (`optimizedFallbacks`, on by default; based on the last generic fallback, e.g. `sans-serif`), and hashed files in `_astro/fonts` that can be cached long-term. It also handles variable-font weight ranges (`weight: "100 900"`).
- Hand-written `@font-face` still works (Widely, since 2019). If you keep it, MDN recommends adding `font-display` (Widely, since 2022; e.g. `swap`) and declaring `font-weight`/`font-style` per face ([MDN `@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face), [MDN `font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)). woff2 alone covers every Baseline browser. The `woff` fallback in the current CSS is legacy.

## Feature-by-feature

| Feature | Baseline (web-features) | What it gives this site | Overlap / caveats |
|---|---|---|---|
| **Custom properties** (`--token`) | Widely (2017 → high 2019) | Already in use for tokens. Can be overridden per component or per media query, and read in scoped styles. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | Can't be used in media/container query conditions or selectors ([MDN `var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/var)). |
| **`@property`** (registered custom properties) | **Newly** (2024-07-09; Firefox 128 last). Widely around Jan 2027 | Gives a token a type (`<color>`, `<length>`), an initial value and inheritance. Its main practical use is **animating/transitioning custom properties**, such as gradients. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) | Not needed for plain tokens. Unregistered properties work fine for tokens. |
| **Native nesting** | Widely (low 2023-12-11, high 2026-06-11; Chrome 120 / Safari 17.2 / Firefox 117 for the current relaxed syntax) | `.card { &__title {} }` does **not** work like Sass. Native nesting has no string concatenation, so **BEM `&__element` is not supported**. It covers `&:hover`, `& .child`, nested `@media` inside a rule, and similar. [MDN nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting) | Inside Astro scoped styles, element selectors are already short. With default Vite targets the minifier may flatten nesting at build (see above). |
| **Cascade layers** `@layer` | Widely (2022 → 2024) | Order whole groups of styles, e.g. `@layer reset, tokens, base, components, utilities;`, so later layers win regardless of specificity. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) | **Unlayered styles beat all layered styles** (normal declarations). Astro scoped styles are emitted unlayered, so they win over any layered global CSS. Layers mostly matter for ordering global sheets, or together with `scopedStyleStrategy: 'where'`. |
| **Container queries** (size) | Widely (2023-02-14 → 2025-08-14) | A component adapts to the width of its **container**, not the viewport (`container-type: inline-size; @container (width > 30rem)`). Also `cqi`/`cqw` units. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) | Media queries remain right for page-level layout. Container *style* queries are **Newly** (2026-05-19). Scroll-state queries are Limited. |
| **`:has()`** | Widely (low 2023-12-19, high 2026-06-19; Firefox 121 last) | "Parent" selector: style a card that `:has(img)`, a form that `:has(:invalid)`, `body:has(dialog[open])`. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) | Can replace some modifier classes or JS toggles. |
| **`:is()` / `:where()`** | Widely (2021 → 2023) | Group selectors. `:where()` has zero specificity, which makes it a common building block for low-specificity resets/bases. [MDN :where](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) | Astro's `'where'` scoping strategy is built on it. |
| **`@scope`** | **Newly** (2026-03-24; Safari 26.4 / Chrome 143 / Firefox 146) | Native component scoping with "donut" lower bounds. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope) | Duplicates what Astro scoped `<style>` already does at build time. |
| **`clamp()` / `min()` / `max()`** | Widely (2020 → 2023) | Fluid type and spacing, e.g. `font-size: clamp(1.0625rem, 0.9rem + 0.8vw, 1.94rem)`. One line replaces the 4 stepped `body` font-size breakpoints. [MDN clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) | Keep a `rem` term in the middle value so text still scales with browser zoom. Pure `vw` fails [WCAG 1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). |
| **Media query range syntax** `(width >= 40rem)` | Widely (2023 → 2025-09) | Easier to read than `min-width`. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4) | Default Vite targets may lower it at build. |
| **Logical properties** (`margin-inline`, `padding-block`) | Widely (2021 → 2024) | Writing-mode-aware spacing. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) | Mostly a style choice for a left-to-right English site. |
| **Subgrid** | Widely (2023-09 → 2026-03) | Aligns nested items (such as card titles in a grid) to the parent grid. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid) | Only matters if the layout uses card grids. |
| **OKLCH / `color-mix()`** | Widely (2023-05 → 2025-11) | Perceptually even colour scales. Derive hover/tint shades from one token (`color-mix(in oklch, var(--accent) 80%, black)`). [MDN oklch](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch), [MDN color-mix](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) | Relative colour syntax (`oklch(from …)`) is only **Newly** (2024-09). |
| **`light-dark()`** + `color-scheme` | Widely (2024-05-13 → 2026-11-13) | Dark mode in the token file: `--bg: light-dark(#f9fafb, #111)`. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) | Only relevant if dark mode is wanted. `prefers-color-scheme` is Widely (2020). |
| **`text-wrap: balance`** | Widely (2024-05 → 2026-11) | Balanced heading line breaks; one line of CSS. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) | `text-wrap: pretty` is **Limited** (it degrades harmlessly). |
| **`:focus-visible`**, **`prefers-reduced-motion`** | Widely | Keyboard-only focus rings, and switching motion off for users who ask for that. | Baseline accessibility hygiene. |
| **View transitions** (same-document) | Newly (2025-10) | Animated state changes. Astro has its own `<ClientRouter />` wrapper ([Astro view transitions](https://docs.astro.build/en/guides/view-transitions/)). | **Cross-document** view transitions (`@view-transition`) are **Limited**. |
| Anchor positioning, `if()`, scroll-state queries | Limited | — | Not yet usable without fallbacks. |

## Resets

- **normalize.css** v8.0.1 (2018) makes browser defaults consistent but keeps them. Most of the bugs it fixed are in browsers below Baseline today (IE, old Edge, old Safari). See its [README](https://github.com/necolas/normalize.css).
- "Modern resets" are short hand-written files (about 10–30 rules) that usually set `box-sizing: border-box` ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)), remove default margins, set `img, svg, video { display: block; max-inline-size: 100% }`, set `font: inherit` on form controls, and `text-wrap: balance` on headings. They are often wrapped in `:where()` or `@layer reset` so they never win specificity fights. No standards body publishes one. They are community conventions, so pick one and own it as part of `global.css`.

## BEM in an Astro world (facts, not a recommendation)

- BEM solves global name collisions by naming convention. Astro scoped `<style>` solves the same problem by compiling scope attributes in. Inside an `.astro` component, short class names (`.title`) or bare element selectors cannot collide with other components ([Astro docs](https://docs.astro.build/en/guides/styling/#scoped-styles)).
- BEM still applies where styles are global: `global.css`, `is:global` blocks, and React islands that use plain CSS imports. CSS Modules solve the same problem for React islands.
- Astro warns that passing a `class` to a child component lets parent scope cascade into the child. Its advice is to "use unique class names in the child component", where a BEM-style prefix helps.
- Native nesting can't build BEM names (`&__el`). BEM and nesting combine only as `.block { & .block__el {} }`, or by not nesting.

## Commonly cited "skip for a small site" items (with reasons from the sources)

- **CSS-in-JS / Tailwind**: excluded by the map.
- **Sass/Less**: Astro supports them, but nesting, variables (custom properties) and `color-mix()` now cover the main reasons people used them. Vite recommends plain standards CSS.
- **`@scope`**: Newly available, and duplicates Astro scoping.
- **`@property`**: Newly available. Only needed to animate custom properties.
- **PostCSS plugins**: not required. Vite's Lightning CSS minifier already does target-based lowering and vendor prefixing.
- **`woff` fallback files, normalize.css**: they target browsers outside today's Baseline.

## Open questions for #161

- One `global.css` (tokens + reset + base type) plus scoped `<style>` per component, versus keeping BEM in global files?
- Layers: is `@layer reset, base` worth it if almost all component CSS is scoped (unlayered, so it wins anyway)?
- Leave `scopedStyleStrategy` on the default `'attribute'`, or switch to `'where'` together with layers?
- Fonts: the Astro Fonts API with `fontProviders.local()` (generated fallbacks, preload), or hand-written `@font-face` with `font-display`?
- Leave `build.cssTarget` on default (nesting flattened), or raise it?
- Breakpoint tokens can't live in custom properties. Will breakpoints be literal numbers, or will container queries and `clamp()` mostly replace them?
