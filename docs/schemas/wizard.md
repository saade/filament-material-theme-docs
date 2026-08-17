# Wizard

A `Wizard` header renders as a Material **stepper**. There is nothing to call.

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

## States

Each step's marker carries its state as a container:

| Step | Marker |
| --- | --- |
| Upcoming | Surface-container-highest, label on the variant ink |
| Active | Primary, label on the plain ink |
| Completed | Primary container |

The header is divided from the content by a hairline, and so is the footer, which Filament leaves
open. Separators between steps are drawn as a chevron in the outline-variant color rather than as a
filled rule.
