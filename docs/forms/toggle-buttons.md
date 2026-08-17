# Toggle buttons

`grouped()` picks the shape. Left off, the options render as Material's button group; with it, as a
segmented button.

## Button group

<Shot name="buttons/group" alt="Three filled options held apart, the selected one fully rounded" />

```php
use Filament\Forms\Components\ToggleButtons;

ToggleButtons::make('period')
    ->inline()
    ->options(['a' => 'Day', 'b' => 'Week', 'c' => 'Month']);
```

The options are filled and held apart rather than sharing a stroke, and the group takes its shape
from its ends. Choosing one rounds it off completely, which is what marks it as chosen.

### Multi select

<Shot name="buttons/group-multiple" alt="Three options with the first two rounded off and filled" />

```php
ToggleButtons::make('style')
    ->inline()
    ->multiple()
    ->options(['a' => 'Bold', 'b' => 'Italic', 'c' => 'Underline']);
```

### With icons

<Shot name="buttons/group-icons" alt="Three options each with a leading icon, the selected one filled and rounded" />

```php
use Filament\Support\Icons\Heroicon;

ToggleButtons::make('layout')
    ->inline()
    ->options(['a' => 'List', 'b' => 'Grid', 'c' => 'Map'])
    ->icons([
        'a' => Heroicon::OutlinedListBullet,
        'b' => Heroicon::OutlinedSquares2x2,
        'c' => Heroicon::OutlinedMap,
    ]);
```

An option keeps its icon when it is chosen, since the shape is what marks the selection.

### With colors

<Shot name="buttons/group-colors" alt="Three options with the selected one filled in success" />

```php
ToggleButtons::make('status')
    ->inline()
    ->options(['a' => 'Draft', 'b' => 'Review', 'c' => 'Published'])
    ->colors(['a' => 'gray', 'b' => 'warning', 'c' => 'success']);
```

The color reaches the option that is chosen; the rest stay on the neutral container.

## Segmented button

<Shot name="buttons/segmented" alt="A toggle button with three options and the middle one selected" />

```php
ToggleButtons::make('period')
    ->inline()
    ->grouped()
    ->options(['a' => 'Day', 'b' => 'Week', 'c' => 'Month']);
```

### Multi select

<Shot name="buttons/segmented-multiple" alt="A toggle button with two of its three options selected" />

```php
ToggleButtons::make('style')
    ->inline()
    ->grouped()
    ->multiple()
    ->options(['a' => 'Bold', 'b' => 'Italic', 'c' => 'Underline']);
```

### With icons

<Shot name="buttons/segmented-icons" alt="A toggle button whose options carry icons, with the selected one showing a check" />

```php
use Filament\Support\Icons\Heroicon;

ToggleButtons::make('layout')
    ->inline()
    ->grouped()
    ->options(['a' => 'List', 'b' => 'Grid', 'c' => 'Map'])
    ->icons([
        'a' => Heroicon::OutlinedListBullet,
        'b' => Heroicon::OutlinedSquares2x2,
        'c' => Heroicon::OutlinedMap,
    ]);
```

The check replaces the icon rather than sitting beside it, so the segment keeps its width.

### With colors

<Shot name="buttons/segmented-colors" alt="A toggle button whose options each carry their own color" />

```php
ToggleButtons::make('status')
    ->inline()
    ->grouped()
    ->options(['a' => 'Draft', 'b' => 'Review', 'c' => 'Published'])
    ->colors(['a' => 'gray', 'b' => 'warning', 'c' => 'success']);
```
