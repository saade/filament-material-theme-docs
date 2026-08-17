# Loading

A loading indicator takes the primary color, and an overlay over a section that is loading takes 70%
of the surface.

<Shot name="progress/spinner" alt="A button showing its loading spinner while the action runs" />

```php
use Filament\Actions\Action;

Action::make('import')
    ->label('Run something slow')
    ->tonal()
    ->action(fn () => /* ... */);
```

Filament swaps a button's icon for the indicator while its action runs, so nothing has to be called
for it. Material's progress indicators are not implemented; what Filament ships is restyled, not
replaced.
