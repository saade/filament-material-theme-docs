# Building the site's assets

Everything under `docs-assets/` produces something committed to `docs/public/`. None of it runs in
CI: the panel the images come from is not reachable from a runner, so the output is checked in and
rebuilt by hand when the theme changes.

## Screenshots

Every image on the component pages is captured from a running panel rather than drawn by hand, so
the documentation cannot drift from what the theme renders. `screenshots/schema.js` lists each image
as a page URL and a CSS selector; `script.js` drives Puppeteer over the list once per theme.

```bash
npm run screenshots
```

The default target is the demo panel at `https://saade-plugins-demo.test/material`, which has to be
serving before the script runs. Point it elsewhere with environment variables:

```bash
BASE_URL=https://example.test/admin AUTH_EMAIL=you@example.com AUTH_PASSWORD=secret npm run screenshots
```

`ONLY` narrows the run to the entries whose name matches, for iterating on one image:

```bash
ONLY='buttons/fab' npm run screenshots
```

Images are written to `docs/public/screenshots/{light,dark}/`.

### Writing an entry

| Key | What it does |
| --- | --- |
| `url` | The demo page, relative to `BASE_URL` |
| `selector` | What to frame. An array frames the union of several boxes |
| `tight` | Crops to the union of the element's children, for a row that stretches to the column |
| `padding` | Overrides the 16px margin, for a control that sits close under its own label |
| `before` | A hook that opens a menu, fills a field or hovers something before the shot |
| `hover` | Keeps the pointer where the hook left it, when the hover is the thing being captured |
| `viewport` | Frames the viewport rather than a box inside it; an array sizes that frame |

The anchors the selectors bind to are classes the demo panel adds with
`->extraAttributes(['class' => 'shot-...'])`. They are classes rather than ids because Filament puts
an id of its own on a section and that one wins.

A hook makes the page dirty, so the entry after it reloads: an opened menu is still open otherwise.

## Demo links

Each component page carries a "See live" link to the demo panel it was captured from. The target is
read off the first screenshot on the page, since `schema.js` already names the URL every image came
from, so the two cannot drift. A page can override it, or opt out, in its frontmatter:

```md
---
demo: components/tables   # or false
---
```

The address comes from the environment, so it can differ per deployment: `DEMO_URL` in `.env`
locally, a repository variable of the same name in the deploy workflow. With neither, it falls back
to the public demo.

## Favicons

```bash
node docs-assets/favicon/generate.mjs
```

`favicon/favicon.svg` is the theme's mark redrawn for small sizes: the same shapes given more of the
square, since the version on the cover loses its quarter disc below about 20px.
`favicon/apple-touch-icon.svg` is the same mark on a full-bleed ground, since iOS masks the corners
itself and ignores transparency.

The script rasterizes through Puppeteer and packs the `.ico` itself, so the set rebuilds anywhere the
docs build, with no system tools involved. It writes `favicon.ico` (16, 32, 48), `favicon.svg` and
`apple-touch-icon.png` to `docs/public/`.

## Cover art

The cover and social images are rendered from the demo app rather than from here, by
`plugins/material-theme/scripts/cover.mjs` in that repository, and copied into `docs/public/art/`.
