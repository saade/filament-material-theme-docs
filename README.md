# filament-material-theme-docs

Documentation for [`saade/filament-material-theme`](https://github.com/saade/filament-material-theme),
a Material Design 3 theme for Filament.

It lives apart from the package so it can be published with GitHub Pages while the package
itself stays private.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # docs/.vitepress/dist
npm run preview    # serve the built site
```

## Screenshots

Every image on the component pages is captured from a running panel rather than drawn by hand,
so the documentation cannot drift from what the theme renders. `docs-assets/screenshots/schema.js`
lists each image as a page URL and a CSS selector, and `script.js` drives Puppeteer over the list
once per theme.

```bash
npm run screenshots
```

The default target is the demo panel at `https://saade-plugins-demo.test/material`, which has to
be serving before the script runs. Point it elsewhere with environment variables:

```bash
BASE_URL=https://example.test/admin AUTH_EMAIL=you@example.com AUTH_PASSWORD=secret npm run screenshots
```

Images are written to `docs/public/screenshots/{light,dark}/` and committed, because the panel
they come from is not reachable from CI.

The anchors the selectors bind to are classes the demo panel adds with
`->extraAttributes(['class' => 'shot-...'])`. They are classes rather than ids because Filament
puts an id of its own on a section and that one wins.
