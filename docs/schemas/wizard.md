# Wizard

<Shot name="stepper/wizard" alt="A three step wizard header with the first step active" />

```php
use Filament\Schemas\Components\Wizard;
use Filament\Schemas\Components\Wizard\Step;

Wizard::make([
    Step::make('Details')->schema([TextInput::make('name')]),
    Step::make('Address')->schema([TextInput::make('street')]),
    Step::make('Review')->schema([Text::make('Nothing to review.')]),
]);
```
