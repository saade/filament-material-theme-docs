# Fieldset

Takes the [section](/schemas/sections) variants.

<Shot name="repeater/fieldset" alt="A fieldset containing two fields" />

```php
use Filament\Schemas\Components\Fieldset;

Fieldset::make('Address')->schema([
    TextInput::make('street'),
    TextInput::make('city'),
]);

Fieldset::make('Address')->outlined();
Fieldset::make('Address')->elevated();
Fieldset::make('Address')->filled();
```
