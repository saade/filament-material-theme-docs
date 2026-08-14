# Search

One of the [text input](/forms/text-input) variants.

<Shot name="text-fields/search" alt="A search field drawn as a rounded pill with a leading magnifying glass" />

```php
use Filament\Forms\Components\TextInput;
use Filament\Support\Icons\Heroicon;

TextInput::make('query')
    ->search()
    ->placeholder('Search')
    ->prefixIcon(Heroicon::OutlinedMagnifyingGlass);
```

## Applied without being called

- the table's search field
- a table column's individual search field
- the global search field

## API

| Method | On | Result |
| --- | --- | --- |
| `search()` | `Field` | Search |
| `variant(FieldVariant::Search)` | `Field` | The same, by name |
