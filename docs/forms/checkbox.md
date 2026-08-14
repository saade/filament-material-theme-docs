# Checkbox

<Shot name="checkbox/single" alt="A checked checkbox with its label" />

```php
use Filament\Forms\Components\Checkbox;

Checkbox::make('subscribed');
```

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
