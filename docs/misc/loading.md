# Loading

<Shot name="progress/spinner" alt="A button showing its loading spinner while the action runs" />

```php
use Filament\Actions\Action;

Action::make('import')
    ->label('Run something slow')
    ->tonal()
    ->action(fn () => /* ... */);
```
