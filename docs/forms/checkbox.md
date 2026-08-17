# Checkbox

A `Checkbox` renders as a Material **checkbox**: an 18dp box with a 2dp outline, filling with the
primary role when checked.

<Shot name="checkbox/single" alt="A checked checkbox with its label" />

```php
use Filament\Forms\Components\Checkbox;

Checkbox::make('subscribed');
```

Filament sizes the control from the type scale, which lands on 16dp; Material draws it at 18dp,
where the 2dp outline takes a fifth of the box rather than a quarter.

## States

| State | What changes |
| --- | --- |
| Checked | Fills with primary, mark on the on-primary role |
| Indeterminate | The same fill, with Filament's dash |
| Focus | A 2dp primary ring, offset 2dp |
| Disabled | The outline drops to 38% of on-surface |

## List

<Shot name="checkbox/list" alt="A list of three checkbox options with the first checked" />

```php
use Filament\Forms\Components\CheckboxList;

CheckboxList::make('options')->options([
    'a' => 'Option A',
    'b' => 'Option B',
    'c' => 'Option C',
]);
```

Each option is a row with a state layer of its own, its label in body-large and its description in
body-small on the variant ink. `searchable()` adds a message row that takes the same ink.
