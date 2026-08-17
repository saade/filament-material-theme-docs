# Tabs

`Tabs` renders as Material **tabs**. Default variant: **primary**.

## Variants

| Variant | Material name | Modifier | Active tab |
| --- | --- | --- | --- |
| Primary | Primary tabs | none | Primary label over a 3dp indicator, rounded at the top, inset from the tab's edges |
| Secondary | Secondary tabs | `->secondary()` | On-surface label over a 2dp rule across the whole tab |

### Primary

<Shot name="tabs/primary" alt="Three tabs with a short rounded indicator under the active one" />

```php
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;

Tabs::make('details')->tabs([
    Tab::make('Overview')->schema([/* ... */]),
    Tab::make('History')->schema([/* ... */]),
]);
```

### Secondary

<Shot name="tabs/secondary" alt="Three tabs with a full width rule under the active one" />

```php
Tabs::make('details')
    ->secondary()
    ->tabs([
        Tab::make('Shipping')->schema([/* ... */]),
        Tab::make('Billing')->schema([/* ... */]),
    ]);
```

Material puts secondary tabs below a primary set, to divide content already inside a tab.

```php
use Saade\FilamentMaterialTheme\Enums\TabsVariant;

Tabs::make('details')->variant(TabsVariant::Secondary);
Tabs::make('details')->variant('secondary');
```

| Case | Value | Result |
| --- | --- | --- |
| `TabsVariant::Primary` | `primary` | The default, adds nothing |
| `TabsVariant::Secondary` | `secondary` | Secondary tabs |

Passing `TabsVariant::Primary` is a no-op rather than an error, so a variant held in a variable can
be either without the calling code branching.

## Behavior

The strip is a 48dp row on the container it sits in, with a divider under it and no elevation of its
own. Each tab is title-small on the variant ink and answers hover, focus and press with a state
layer.

`contained()` sits the strip flush inside a card, and the theme rounds its top corners to match so
the first and last tab's state layer stays inside the card:

```php
Tabs::make('details')->contained()->tabs([/* ... */]);
```

A count on a tab renders as a small pill. See [badges](/misc/badges).

## Where else tabs appear

The same strip renders a page's sub-navigation when the panel uses tabs for it, and the tabs above a
table. Neither takes the variant methods, since the theme registers them on `Tabs` alone.

## API

| Method | On | Result |
| --- | --- | --- |
| `secondary()` | `Tabs` | Secondary tabs |
| `variant(TabsVariant\|string)` | `Tabs` | Either variant by name |
