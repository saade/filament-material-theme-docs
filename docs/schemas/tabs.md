# Tabs

## Variants

| Variant | Modifier |
| --- | --- |
| Primary | none |
| Secondary | `->secondary()` |

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

## Usage

Contained tabs sit flush inside a card:

```php
Tabs::make('details')->contained()->tabs([/* ... */]);
```

A count on a tab renders as a small pill. See [badges](/misc/badges).

## API

| Method | On | Result |
| --- | --- | --- |
| `secondary()` | `Tabs` | Secondary tabs |
| `variant(TabsVariant\|string)` | `Tabs` | Either variant by name |

| Case | Value | Result |
| --- | --- | --- |
| `TabsVariant::Primary` | `primary` | The default, adds nothing |
| `TabsVariant::Secondary` | `secondary` | Secondary tabs |

```php
use Saade\FilamentMaterialTheme\Enums\TabsVariant;

Tabs::make('details')->variant(TabsVariant::Secondary);
```

Passing `TabsVariant::Primary` is a no-op rather than an error, so a variant held in a variable can
be either without branching.
