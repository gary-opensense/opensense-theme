# Opensense theme for shadcn-svelte

## What this is

The Opensense look, as a theme for apps built with **Tailwind CSS 4** and **shadcn-svelte** (Svelte 5, bits-ui). It has two parts:

1. **The theme:** one CSS file, `src/lib/theme/opensense.css`, plus small styling changes to some shadcn components.
2. **A components page:** every shadcn-svelte component rendered in the theme, in light and dark mode, so you can see how everything looks before using it.

Use it as the reference when styling an app with shadcn-svelte, or copy the theme into one. `CLAUDE.md` describes how to apply it to an existing shadcn + Tailwind 4 app.

```sh
npm install
npm run dev
```

`npm run build` writes a static site to `dist/`.

## What's added on top of stock shadcn-svelte

shadcn-svelte copies plain component source into your app, styled by a handful of CSS variables. This repo adds:

- **The Opensense theme file** (`src/lib/theme/opensense.css`):
  - the Opensense colors under their app names, plus the `--brand-*` brand colors
  - the Rubik font and the Opensense type sizes, corner radii and shadows
  - shadcn's color variables set to Opensense values
  - a dark mode based on the Opensense app's navy sidebar
- **Status colors:** stock shadcn only has `destructive` (red). The theme adds `success` (brand mint), `info` (violet) and `warning`, and Button, Badge and Alert get those as variants, for example `<Button variant="success">`.
- **Opensense styling on 22 components:** alert, badge, breadcrumb, button, button-group, card, checkbox, dialog, dropdown-menu, field, input, input-group, label, native-select, popover, radio-group, sheet, table, textarea, toggle, toggle-group and tooltip (42 files). The changes are control heights, radius, borders, focus rings, tinted alerts, menu spacing and table padding. Their props and variants are otherwise unchanged from stock.
- **Everything else** in `src/lib/components/ui` is exactly what the shadcn CLI generates, so it gets its look from the theme's colors alone.

## The components page

The page lists every component from the [shadcn-svelte docs](https://www.shadcn-svelte.com/docs/components), A–Z, with a light/dark toggle in the header. `#/<name>` jumps to one, for example `#/select`.

- Each section is a file in `src/gallery/examples/`. The file name is the slug, and adding a file adds a section. A file can export `title` or `note` from `<script module>`.
- Combobox, date picker and data table are compositions, as in the docs. Data table shows the look without the docs' TanStack data layer.
- Form is left out because it needs SvelteKit (formsnap/superforms). The Field section shows its look.
- Combobox note: inside a Popover, give `Command` the `disableInitialScroll` prop. Otherwise, opening it scrolls the page to the top.

## Where things live

- `src/lib/theme/opensense.css` is the theme: palette, semantic tokens, light and dark modes, type scale, radii, shadows and base typography. To use it in another Tailwind 4 app, import it after Tailwind:
  ```css
  @import "tailwindcss";
  @import "tw-animate-css";
  @import "./lib/theme/opensense.css";
  ```
- `src/lib/components/ui/*` contains the shadcn-svelte components (vega style). Their APIs (variants, sizes, props) are stock, with one addition: **Button, Badge and Alert** also have `success`, `info` and `warning` variants, because stock shadcn only has `destructive`. Some components are restyled for the Opensense look: control sizes, radius, focus rings, borders, and the tinted alerts.
- `src/gallery/` holds the components page.

## Theme notes

- **Root font size:** the Opensense app uses a 14px root. Here the root stays at 16px and the body is 14px, so Tailwind's spacing scale behaves normally (`p-4` = 16px). Theme sizes are converted to render at the same pixel values.
- **Type scale:** `text-sm` is the 14px body size (it's what shadcn uses). The rest are the Opensense sizes: `text-md` 12.46px, `text-base` 15.75px (h4), `text-lg` 17.5px (h3), `text-xl` 19.25px (h2), `text-2xl` 21px (h1), `text-3xl` 24.5px.
- **Palette:** Tailwind's default palette is replaced by the Opensense colors under their app names (`gray-0…1000`, `blue-0…500`, `green`, `yellow`, `orange`, `red`, plus `capri`, `opal`, `sandy` and others). Tailwind's `violet` is kept.
- **Brand colors:** the app's `--brand-*` variables are defined under the same names (`--brand-primary`, `--brand-success`, `--brand-info`, `--brand-warning`, `--brand-danger`, `--brand-capri`, `--brand-carbon`, `--brand-opal`, `--brand-sandy`, `--brand-green`). They're also available as `bg-brand-*` / `text-brand-*` utilities.
- **Status colors:** `success` (brand mint), `info` (`violet-400`), `warning` and `destructive` are available as component variants (Button, Badge, Alert) and as utilities, for example `bg-success text-success-foreground`. Each has `-subtle` and `-border` tints and an `-emphasis` shade. Use `-emphasis` when the color is text, for example `text-destructive-emphasis`; it meets contrast in both modes.
- **Components use semantic tokens**, not palette colors, for interface chrome. Examples: `bg-control`, `border-control-border`, `text-control-foreground`, `bg-subtle` and `text-faint`. That's what lets dark mode work.

## Dark mode

Put `class="dark"` on `<html>`. In this app, `index.html` applies the saved choice (or the OS setting) before first paint, and the header has a toggle.

- **Where the colors come from:** surfaces use the Opensense app sidebar navy (`#172331` page, `#1a2b3d` cards and controls, `#24364b` dividers). Brand and status colors keep their values. Tints re-mix against the navy, and `-emphasis` lightens each hue.
- **Forcing light on a region:** add `class="light"` to an element and everything inside it uses the light tokens.
- **Elevation:** `shadow-panel` gains a 1px outline in dark mode, because a glow barely shows on navy.
- **Contrast:** the text/background pairs the components use meet WCAG AA in both modes.

## Adding shadcn components

```sh
npx shadcn-svelte@latest add <name>
```

- The CLI may want to re-add shared components that are restyled here (button, input, dialog…). Answer **no** to overwriting existing files, or the Opensense styling and the extra status variants are lost.
- Running `init` asks for a design-system preset interactively. This project is already initialized (`components.json`), so you don't need it.

## GitHub Pages

`.github/workflows/pages.yml` builds and deploys on every push to `main`. One-time setup in the GitHub repo: **Settings → Pages → Source: GitHub Actions**. The site is then served at `https://<owner>.github.io/opensense-theme/`.

- The workflow sets `BASE_PATH=/<repo-name>/` for the build (see `vite.config.ts`). Locally, base is `/`.
- Navigation uses hash URLs (`#/select`), so no 404 fallback page is needed.
