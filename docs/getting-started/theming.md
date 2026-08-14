# Theming

Material derives a whole scheme from one color. Every role, in both modes, follows from it, so the
theme carries three values instead of a hundred and eighteen and can change them at runtime without
a rebuild.

## The source color

```php
use Saade\FilamentMaterialTheme\FilamentMaterialThemePlugin;

FilamentMaterialThemePlugin::make()
    ->source('#6750A4');
```

This is the seed, not the primary. Material derives the primary from it, along with the secondary,
the tertiary, every background shade and every border color. Handing it your brand color is the
whole of theming in the usual case.

The default is `#1B48A5`.

## Scheme variants

```php
FilamentMaterialThemePlugin::make()
    ->source('#6750A4')
    ->variant('tonalSpot');
```

Material publishes nine ways of deriving a scheme from a source, and they differ in how much of the
source's chroma survives into the result. `tonalSpot` is the default and the most restrained.
`fidelity` and `content` keep the source closest, which is what to use when the brand color has to
be recognizable rather than merely present.

::: tip A very saturated brand color will be muted
`tonalSpot` clamps chroma, so a vivid source comes out considerably quieter than it went in. That
is the variant working as specified, not a bug. If the exact color matters, use `fidelity`.
:::

## Contrast

```php
FilamentMaterialThemePlugin::make()
    ->contrast(0.5);
```

Runs from `-1` for reduced contrast through `0`, the default, to `1` for high contrast. Material
treats this as a user preference rather than a design decision, which is worth remembering before
hardcoding anything other than `0`.

## Per request

Every one of the three takes a closure, evaluated per request, so a panel can hand it a color its
users have chosen:

```php
FilamentMaterialThemePlugin::make()
    ->source(fn (): string => auth()->user()?->brand_color ?? '#6750A4')
    ->variant(fn (): string => auth()->user()?->scheme ?? 'tonalSpot')
    ->contrast(fn (): float => auth()->user()?->contrast ?? 0.0);
```

## At runtime

The scheme is built in the browser, so it can be replaced without a page load:

```js
document.dispatchEvent(
    new CustomEvent('material-theme:update', {
        detail: { source: '#0B57D0', scheme: 'vibrant', contrast: 0 },
    }),
)
```

Everything that reads a role updates at once, in both modes.

## Success, warning and info

Material has no role for these, and Filament expects all three. The theme adds them as custom
colors and runs them through the same harmonization as the rest of the scheme, so they shift toward
the brand hue instead of sitting on top of it as stock green, amber and blue.

They are reached the way any Filament color is:

```php
Action::make('approve')->color('success');
```

## Dark mode

Both modes are derived from the same source, so there is nothing to configure. Material's container
roles are a single ladder that reads correctly either way: a higher container is more tinted in
light and lighter in dark.

## Reading the scheme

`getScheme()` returns the three values the plugin resolved, which is useful if something else in
the app needs to match:

```php
$scheme = $panel->getPlugin('filament-material-theme')->getScheme();

$scheme->source;    // '#6750A4'
$scheme->variant;   // 'tonalSpot'
$scheme->contrast;  // 0.0
```

`MaterialScheme` is immutable, and `MaterialScheme::DEFAULT_SOURCE` holds the fallback.
