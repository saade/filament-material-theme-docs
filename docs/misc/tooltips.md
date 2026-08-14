# Tooltips

<Shot name="tooltips/plain" alt="A button with its tooltip shown above it" />

```php
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;

Action::make('info')
    ->label('Hover me')
    ->outlined()
    ->tooltip('A plain tooltip.');

Action::make('info')
    ->icon(Heroicon::OutlinedInformationCircle)
    ->iconButton()
    ->tooltip('Tooltips work on icon buttons too.');
```
