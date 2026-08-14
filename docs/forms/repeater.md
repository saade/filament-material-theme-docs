# Repeater

Setting a [card variant](/schemas/sections) on an item is not how to change one.

<Shot name="repeater/items" alt="A repeater with two items, each a nested card with its own fields" />

```php
use Filament\Forms\Components\Repeater;

Repeater::make('rows')
    ->schema([
        TextInput::make('label'),
        Select::make('type')->native(false)->options(['a' => 'A', 'b' => 'B']),
    ])
    ->defaultItems(2);
```

A builder renders the same way, and its block picker is a [dropdown](/actions/grouping).
