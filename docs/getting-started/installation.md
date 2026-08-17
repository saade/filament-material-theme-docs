# Installation

## Install the package

```bash
composer require saade/filament-material-theme
```

## Create a custom theme

The theme is a stylesheet, so the panel needs one of Filament's custom themes to import it into. If
the panel does not have one yet, Filament will make it:

```bash
php artisan make:filament-theme
```

That writes a CSS entry point and registers it in `vite.config.js`. Import the theme at the end of
it, after Filament's own stylesheet:

```css
@import "../../../../vendor/filament/filament/resources/css/theme.css";

@source '../../../../app/Filament/**/*';
@source '../../../../resources/views/**/*';

@import "../../../../vendor/saade/filament-material-theme/resources/css/theme.css"; // [!code ++]
```

::: warning Order matters, and so does `@source`
Filament imports Tailwind with `source(none)`, so nothing is scanned for classes unless it is named
in an `@source` line. Keep the ones `make:filament-theme` generated, and add any directory whose
Blade views render into this panel, published vendor views included.

The theme's import goes last, so its rules land after Filament's.
:::

Build the stylesheet:

```bash
npm run build
```

## Register the plugin

```php
use Saade\FilamentMaterialTheme\FilamentMaterialThemePlugin;

public function panel(Panel $panel): Panel
{
    return $panel
        ->viteTheme('resources/css/filament/admin/theme.css')
        ->plugin(
            FilamentMaterialThemePlugin::make()
                ->source('#6750A4')
        );
}
```

The stylesheet alone gives you the shapes, the typography and the layout, on the palette baked into
it. The plugin is what derives the color scheme from your source color and ships it to the browser,
so without it that default palette is what you get. See [theming](/getting-started/theming) for what
else it takes.

## What you get without calling anything

Every Filament component is restyled as soon as the stylesheet is imported. Buttons, cards, fields,
menus, tables, dialogs, the sidebar and the top app bar all take their Material form with no code
changes. Filament's own icons stay as they are unless you install the Material set; see
[icons](/getting-started/icons).

The methods documented in these pages are for the cases where Material ships a component in more
than one form and you have to say which one you want. They are registered when the package boots,
so there is nothing to import and nothing to register per component. The
[component index](/reference/components) lists what is restyled and what is configurable.

## Requirements

| | |
| --- | --- |
| PHP | 8.2 or later |
| Filament | v4 or v5 |
| A custom panel theme | Required, since the package ships a stylesheet |
| `codeat3/blade-google-material-design-icons` | Optional, for [Material icons](/getting-started/icons) |
