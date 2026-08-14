# Toggle buttons

## Single select

<Shot name="buttons/segmented" alt="A toggle button with three options and the middle one selected" />

```php
use Filament\Forms\Components\ToggleButtons;

ToggleButtons::make('period')
    ->inline()
    ->grouped()
    ->options(['a' => 'Day', 'b' => 'Week', 'c' => 'Month']);
```

## Multi select

<Shot name="buttons/segmented-multiple" alt="A toggle button with two of its three options selected" />

```php
ToggleButtons::make('style')
    ->inline()
    ->grouped()
    ->multiple()
    ->options(['a' => 'Bold', 'b' => 'Italic', 'c' => 'Underline']);
```

## With icons

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

## With colors

<Shot name="buttons/segmented-colors" alt="A toggle button whose options each carry their own color" />

```php
ToggleButtons::make('status')
    ->inline()
    ->grouped()
    ->options(['a' => 'Draft', 'b' => 'Review', 'c' => 'Published'])
    ->colors(['a' => 'gray', 'b' => 'warning', 'c' => 'success']);
```
