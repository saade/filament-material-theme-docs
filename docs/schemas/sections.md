# Sections

## Variants

| Variant | Modifier |
| --- | --- |
| *(default)* | none |
| Elevated | `->elevated()` |
| Filled | `->filled()` |
| Outlined | `->outlined()` |

### Default

<Shot name="cards/default" alt="A card on the panel's resting content tone" />

```php
use Filament\Schemas\Components\Section;

Section::make('Details')->schema([
    // ...
]);
```

### Elevated

<Shot name="cards/elevated" alt="A card raised off the page by a shadow" />

```php
Section::make('Details')->elevated();
```

### Filled

<Shot name="cards/filled" alt="A strongly tinted card with no shadow" />

```php
Section::make('Details')->filled();
```

### Outlined

<Shot name="cards/outlined" alt="A card with a hairline border" />

```php
Section::make('Details')->outlined();
```

## Usage

```php
Section::make('Shipping')
    ->description('Where this order is going.')
    ->outlined()
    ->columns(2)
    ->collapsible()
    ->schema([
        TextInput::make('street'),
        TextInput::make('city'),
    ]);
```

```php
use Saade\FilamentMaterialTheme\Enums\CardVariant;

Section::make('Details')->variant(CardVariant::Elevated);
Section::make('Details')->variant('elevated');
```

## API

| Method | On | Result |
| --- | --- | --- |
| `elevated()` | `Component` | Elevated |
| `filled()` | `Component` | Filled |
| `outlined()` | `Component` | Outlined |
| `variant(CardVariant\|string)` | `Component` | Any of the above by name |

| Case | Value |
| --- | --- |
| `CardVariant::Elevated` | `elevated` |
| `CardVariant::Filled` | `filled` |
| `CardVariant::Outlined` | `outlined` |

Registered on `Filament\Schemas\Components\Component`, so a [fieldset](/schemas/fieldset) and a
stats widget take them too.

::: warning On a field, these mean the text input
A `Field` descends from the same component, and Filament's macro lookup takes the closest
registration, so `TextInput::make('x')->outlined()` is the
[outlined text input](/forms/text-input), not an outlined card.
:::
