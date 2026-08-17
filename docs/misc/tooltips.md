# Tooltips

A tooltip renders as Material's **plain tooltip**: the inverse surface, body-small, rounded 4dp, and
no caret.

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

Neither of Material's tooltips has a caret, and the one the underlying library draws is hardcoded
for a light container, so it is removed rather than recolored.

`tooltip()` works wherever Filament offers it: actions, columns, entries and form fields.
