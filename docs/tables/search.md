# Search

Material's **search** is a pill on its own container tone rather than a text field: 48dp tall, fully
rounded, on surface-container-high, with no rule between a leading icon and the query.

<Shot name="text-fields/search" alt="A search field drawn as a rounded pill with a leading magnifying glass" />

## Applied without being called

- the table's search field
- a table column's individual search field
- the [global search](/panels/global-search) field

## Asked for

Any field takes the same shape through the [text input](/forms/text-input) variant:

```php
use Filament\Forms\Components\TextInput;
use Filament\Support\Icons\Heroicon;

TextInput::make('query')
    ->search()
    ->placeholder('Search')
    ->prefixIcon(Heroicon::OutlinedMagnifyingGlass);
```

## API

| Method | On | Result |
| --- | --- | --- |
| `search()` | `Field` | Search |
| `variant(FieldVariant::Search)` | `Field` | The same, by name |
