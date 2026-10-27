# CLAUDE.md

Guidance for Claude Code working in this repo, or using it to theme another app.

## What this repo is

The Opensense theme for **Tailwind CSS 4 + shadcn-svelte** (Svelte 5, bits-ui, shadcn "vega" style), plus a components page that renders every shadcn-svelte component in the theme. It is a **reference and source**, not a package: other apps take the theme by copying files from here.

- `src/lib/theme/opensense.css` holds the whole theme. It is the source of truth for colors, type, radius, shadows and dark mode.
- `src/lib/components/ui/` holds the shadcn-svelte components. 42 files in 22 components differ from stock (listed below); everything else is exactly what the CLI generates.
- `src/gallery/` holds the components page. Each `examples/<slug>.svelte` file is one section, picked up automatically.

Commands: `npm run dev` · `npm run build` · `npx svelte-check --tsconfig ./tsconfig.app.json`. Both build and svelte-check must pass with 0 errors. There are no tests; verify visually in the browser, in light **and** dark mode.

## Applying the theme to an existing shadcn + Tailwind 4 app

Work in this order and check with the user at the decision points; don't guess them.

### 1. Check the target app

- **Tailwind 4:** CSS-first config (`@import "tailwindcss"`, `@theme`). Tailwind 3 apps (`tailwind.config.js`) need the tokens ported into the config, which is a bigger job; tell the user before starting.
- **shadcn flavor:** check `components.json`.
  - shadcn-svelte (Svelte 5) matches this repo directly.
  - React shadcn/ui can use the CSS file as-is, but the component class changes have to be hand-ported to the `.tsx` files.
  - The `"style"` key says which shadcn style generated the components (`vega` here). A missing key means an older generation; its class strings differ, so merge class changes by hand instead of copying files.
- **Existing theme:** find the stylesheet with shadcn's `:root { --background … }`, `.dark { … }` and `@theme inline { --color-background … }` blocks. The theme replaces these.
- **How dark mode is toggled:** the theme expects a `dark` class on `<html>`.
- **Default palette usage:** grep for Tailwind's default palette classes (`text-gray-500`, `bg-blue-600`, `ring-blue-500`, …). The theme removes the default palette (see step 2).

### 2. Add the theme CSS

1. Copy `src/lib/theme/opensense.css` into the target, for example `src/lib/theme/`.
2. Import it after Tailwind, then **delete the target's own shadcn token blocks** (`:root`, `.dark`, `@theme inline`), since they conflict with the theme's:
   ```css
   @import "tailwindcss";
   @import "tw-animate-css";
   @import "./lib/theme/opensense.css";
   ```
   Keep the target's unrelated CSS, including `@custom-variant` lines such as `data-open`. But drop its own `@custom-variant dark …`, because the theme defines one.
3. **Font:** the file imports `@fontsource-variable/rubik`, so add that dependency. If the app renders inside a **shadow DOM**, `@font-face` doesn't work there. Load Rubik in the host page instead, for example with a Google Fonts `<link>`, and remove the import.
4. Settle these decisions with the user, because each changes existing screens:
   - **Default palette:** the line `--color-*: initial;` in the first `@theme` block removes Tailwind's default colors, and the Opensense `gray`/`blue`/`green`/`yellow`/`orange`/`red` scales use the same names with different values. If the app uses default palette classes, either keep Tailwind's palette (replace that line with `--color-gray-*: initial;` and so on for just the six families the theme defines), or map the classes to Opensense or semantic colors.
   - **Type scale:** the theme redefines `text-xs`, `text-base`, `text-lg`, `text-xl`, `text-2xl` and `text-3xl` (only `text-sm` = 14px is unchanged) and adds `text-md`. Existing `text-xs` text becomes 10.5px. If the app relies on Tailwind's default sizes, consider keeping Tailwind's scale and adding only `--text-md`.
   - **Base element styles:** the `@layer base` block styles `body` (14px), `h1`–`h6`, `small`, `a:not([data-slot])`, `mark` and `hr`. If the app renders user content (rich text, previews), these leak into it. Scope them to the app's interface or drop them.

### 3. Apply the component changes

For each modified file below, compare **target file vs. stock vs. this repo**:
- **Target file is stock:** copy this repo's version.
- **Target file is customized:** merge this repo's class and variant changes into it by hand. Never overwrite the target's own edits.
- **Target lacks the component:** skip it unless the user wants it added.

To get stock files for comparison, run `npx shadcn-svelte@latest add <name> -y -o` in a **throwaway copy** of the target project. Never run it with `-o` in the real app: it overwrites customized shared files (button, input, dialog…). The raw registry JSON is not a substitute, because it contains unresolved `$UI$`, `$UTILS$` and icon placeholders.

Modified files (relative to `src/lib/components/ui/`):

```
alert/            alert.svelte alert-title.svelte alert-description.svelte alert-action.svelte
badge/            badge.svelte
breadcrumb/       breadcrumb-link.svelte breadcrumb-list.svelte breadcrumb-separator.svelte
button/           button.svelte
button-group/     button-group-text.svelte
card/             card.svelte card-header.svelte card-title.svelte card-footer.svelte
checkbox/         checkbox.svelte
dialog/           dialog-content.svelte dialog-footer.svelte dialog-overlay.svelte dialog-title.svelte
dropdown-menu/    dropdown-menu-content.svelte dropdown-menu-item.svelte
field/            field.svelte field-description.svelte field-error.svelte
input/            input.svelte
input-group/      input-group.svelte
label/            label.svelte
native-select/    native-select.svelte
popover/          popover-content.svelte
radio-group/      radio-group-item.svelte
sheet/            sheet-content.svelte sheet-header.svelte sheet-overlay.svelte sheet-title.svelte
table/            table-cell.svelte table-head.svelte table-header.svelte table-row.svelte
textarea/         textarea.svelte
toggle/           toggle.svelte
toggle-group/     toggle-group-item.svelte
tooltip/          tooltip-content.svelte
```

What the changes are, so you can merge them by intent:

- **Status variants (the only API addition):** Button, Badge and Alert get `success`, `info` and `warning` next to `destructive`. Button and Badge fills use `bg-<status> text-<status>-foreground`; Button hover/active is `color-mix` toward white 15%/20%. Alert variants are tints: `bg-<status>-subtle border-<status>-border text-tinted-foreground` plus `[--alert-accent:var(--<status>-emphasis)]`, which `alert-title` and the icon use for their color.
- **Controls** (button, input, textarea, native-select, input-group, toggle, checkbox, radio):
  - Opensense sizing: buttons `h-9 px-4`, `rounded-md` = 5.25px; inputs `rounded-sm` = 3.5px.
  - focus: `border-primary` plus `ring-2 ring-primary` on inputs, `ring-4 ring-ring/50` on buttons
  - semantic surfaces: `bg-control`, `border-control-border`, `text-control-foreground`, `bg-control-pressed`
  - disabled: `bg-muted`, `text-disabled-foreground`, `opacity-65`
- **Overlays** (dialog, sheet, popover, dropdown, tooltip): `shadow-panel`, `rounded-lg` = 7px, `border-popover-border`, `bg-black/50` backdrops, roomier menu items, and the tooltip on `bg-tooltip`.
- **Card, table, breadcrumb, field, label:** a flat bordered card with 16px padding; roomy table cells (`px-6 py-4`) with a `bg-subtle` header band; regular-weight labels; `text-md` field help text, and errors in `text-destructive` (`-emphasis` in dark mode).

### 4. Verify

- Run the target's type check and build.
- Compare it in the browser, in light and dark mode, against this repo's components page (`npm run dev` here).
- Check contrast for any new text/background pairs. Status color used **as text** must use `-emphasis` (for example `text-destructive-emphasis`); raw `text-success` or `text-info` on white fails WCAG AA.

## Token cheat sheet

- **shadcn:** `background`, `foreground`, `card`, `popover`, `primary` (+`-hover`, `-active`), `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `chart-1…5`, `sidebar-*`
- **Status:** `success`, `info`, `warning`, `destructive`, `primary`, `secondary`, each with `-foreground`, `-subtle`, `-border` and `-emphasis`. `--tinted-foreground` is the body text on a tint.
- **Controls / chrome:** `control`, `control-pressed`, `control-border`, `control-border-hover`, `control-foreground`, `control-foreground-hover`, `subtle`, `subtle-foreground`, `faint`, `disabled-foreground`, `link`, `link-hover`, `tooltip`, `popover-border`, `table-border`, `highlight`, `shadow-panel`
- **Brand:** `--brand-primary`, `-success`, `-info`, `-warning`, `-danger`, `-capri`, `-carbon`, `-opal`, `-sandy`, `-green` (as `bg-brand-*`), plus `--color-actions`
- **Modes:** `.dark` on `<html>` switches to the navy palette; `.light` on any element forces light tokens inside it.

Use semantic tokens for interface chrome, never palette colors like `bg-white` or `text-gray-700`; palette colors break dark mode.

## Working on this repo

- **Adding a component:** `npx shadcn-svelte@latest add <name>`, answering **no** to overwriting existing files. Then add `src/gallery/examples/<name>.svelte`. To be safe, back up `src/lib/components/ui` first and diff afterwards, then restore anything the CLI replaced.
- **`init`:** asks for a preset interactively and can't be scripted; this repo is already initialized.
- **Known gotchas:**
  - Inside a Popover, `Command` needs `disableInitialScroll`, or opening it scrolls the page to the top (see the combobox example).
  - The Sonner `Toaster` gets `theme` from the app's state (`src/theme-mode.svelte.ts`), because `mode-watcher` isn't used.
- **GitHub Pages:** `.github/workflows/pages.yml` deploys on push to `main` with `BASE_PATH=/<repo>/`. Navigation uses hash URLs, so no 404 page is needed.
