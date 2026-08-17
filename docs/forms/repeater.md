# Repeater

A `Repeater` renders each item as a Material **card**: surface-container-low behind a 1dp
outline-variant border, rounded 12dp. A `Builder` renders the same way.

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

The item header carries its label in title-small, and its collapse and expand controls are fully
rounded icon buttons with a state layer. The control that adds an item between two others takes the
primary color.

A builder's block picker is the [menu](/actions/grouping) sheet.

::: info The card variants are for sections
`Repeater::make('rows')->outlined()` sets a [card variant](/schemas/sections) on the repeater as a
whole, not on its items, and nothing is drawn from it. Item styling is not configurable through the
theme.
:::
