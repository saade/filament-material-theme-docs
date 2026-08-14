# Radio

<Shot name="radio/options" alt="Two radio options with the first selected" />

```php
use Filament\Forms\Components\Radio;

Radio::make('plan')->options([
    'a' => 'Option A',
    'b' => 'Option B',
]);
```

## Descriptions

```php
Radio::make('plan')
    ->options(['a' => 'Option A', 'b' => 'Option B'])
    ->descriptions(['a' => 'What this one means.']);
```
