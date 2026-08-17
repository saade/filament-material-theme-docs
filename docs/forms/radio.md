# Radio

A `Radio` renders as a Material **radio button**: a 20dp circle with a 2dp outline, and a 10dp dot
inside it when selected.

<Shot name="radio/options" alt="Two radio options with the first selected" />

```php
use Filament\Forms\Components\Radio;

Radio::make('plan')->options([
    'a' => 'Option A',
    'b' => 'Option B',
]);
```

The selected radio keeps its outline and gains the dot inside it, rather than filling the whole
circle the way Filament draws it.

## Descriptions

```php
Radio::make('plan')
    ->options(['a' => 'Option A', 'b' => 'Option B'])
    ->descriptions(['a' => 'What this one means.']);
```

Labels are body-large on the plain ink, descriptions body-small on the variant ink.
