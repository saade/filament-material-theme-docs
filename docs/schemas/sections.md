# Sections

A `Section` renders as a Material **card**. Default: the panel's own pane tone, which is already
Material's filled card on the surface a page frames its content with.

## Variants

| Variant | Material name | Modifier | Container | Elevation |
| --- | --- | --- | --- | --- |
| *(default)* | Filled card, on the pane tone | none | surface-container-low | 0 |
| Elevated | Elevated card | `->elevated()` | surface-container-low | 1 |
| Filled | Filled card | `->filled()` | surface-container-highest | 0 |
| Outlined | Outlined card | `->outlined()` | surface, with a 1dp outline | 0 |

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

`variant()` takes the same set by name, for when the variant is data:

```php
use Saade\FilamentMaterialTheme\Enums\CardVariant;

Section::make('Details')->variant(CardVariant::Elevated);
Section::make('Details')->variant('elevated');
```

| Case | Value |
| --- | --- |
| `CardVariant::Elevated` | `elevated` |
| `CardVariant::Filled` | `filled` |
| `CardVariant::Outlined` | `outlined` |

## Combining

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

The heading is title-medium and the description body-medium on the variant ink. A collapse control
is an icon button with a state layer.

## Where else the variants apply

Registered on `Filament\Schemas\Components\Component`, which nearly everything in a schema descends
from. Three of those render the variant:

- a `Section`
- a [`Fieldset`](/schemas/fieldset)
- a stats overview [widget](/widgets/widgets) card

On anything else the class is set but nothing is drawn from it.

::: warning On a field, these mean the text input
A `Field` descends from the same component, and Filament's macro lookup takes the closest
registration, so `TextInput::make('x')->outlined()` is the
[outlined text input](/forms/text-input), not an outlined card. `filled()` on a field is Filament's
validation rule, which is why the filled field is [`filledField()`](/forms/text-input).
:::

## Filament compatibility

`heading()`, `description()`, `icon()`, `collapsible()`, `collapsed()`, `compact()`, `columns()`,
`columnSpan()`, `aside()`, `footer()`, `visible()` and `extraAttributes()` all behave as they do
without the theme. The variant is carried in the same attribute bag `extraAttributes()` writes to,
and merges rather than replaces, so both can be used on one component.

## API

| Method | On | Result |
| --- | --- | --- |
| `elevated()` | `Component` | Elevated card |
| `filled()` | `Component` | Filled card |
| `outlined()` | `Component` | Outlined card |
| `variant(CardVariant\|string)` | `Component` | Any of the above by name |
