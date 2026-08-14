# Text input

## Variants

| Variant | Modifier |
| --- | --- |
| Outlined | none, or `->outlined()` |
| Filled | `->filledField()` |
| Search | `->search()` |

### Outlined

<Shot name="text-fields/outlined" alt="An outlined text input" />

```php
use Filament\Forms\Components\TextInput;

TextInput::make('name');
```

### Filled

<Shot name="text-fields/filled" alt="A filled text input on a tinted container with a rule beneath it" />

```php
TextInput::make('name')->filledField();
```

### Search

<Shot name="text-fields/search" alt="A search field drawn as a rounded pill with a leading magnifying glass" />

```php
TextInput::make('query')->search();
```

The table search, per-column search and global search fields take this without being asked. See
[search](/tables/search).

```php
use Saade\FilamentMaterialTheme\Enums\FieldVariant;

TextInput::make('name')->variant(FieldVariant::Filled);
TextInput::make('name')->variant('filled');
```

## States

<Shot name="text-fields/helper" alt="A text input with supporting text beneath it" />

```php
TextInput::make('name')->helperText('Supporting text sits under the field.');
```

<Shot name="text-fields/error" alt="A text input in its error state with a red outline and message" />

```php
TextInput::make('email')->email();
```

<Shot name="text-fields/disabled" alt="A disabled text input with a faded outline" />

```php
TextInput::make('name')->disabled();
```

## Affixes

<Shot name="text-fields/affixes" alt="A text input with a currency prefix and a decimal suffix" />

```php
TextInput::make('price')->prefix('R$')->suffix('.00');
```

<Shot name="text-fields/prefix-icon" alt="A text input with a leading person icon" />

```php
use Filament\Support\Icons\Heroicon;

TextInput::make('name')->prefixIcon(Heroicon::OutlinedUser);
```

## API

| Method | On | Result |
| --- | --- | --- |
| `outlined()` | `Field` | Outlined |
| `filledField()` | `Field` | Filled |
| `search()` | `Field` | Search |
| `variant(FieldVariant\|string)` | `Field` | Any of the above by name |

| Case | Value |
| --- | --- |
| `FieldVariant::Outlined` | `outlined` |
| `FieldVariant::Filled` | `filled` |
| `FieldVariant::Search` | `search` |

Registered on `Filament\Forms\Components\Field`, so every form field takes them.

::: info Why `filledField()` and not `filled()`
`filled()` is Filament's validation rule, and the [card](/schemas/sections) variant on the shared
schema component.
:::
