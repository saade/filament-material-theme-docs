# Notifications

<Shot name="notification/success" alt="A notification with a status icon, title, body and action" />

```php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved')
    ->body('A notification with a body and an action.')
    ->success()
    ->send();
```

## Status

<Shot name="notification/statuses" alt="Four notifications whose icons differ by status while the container stays the same" />

```php
Notification::make()->title('Saved')->success()->send();
Notification::make()->title('Check this')->warning()->send();
Notification::make()->title('Failed')->danger()->send();
Notification::make()->title('Heads up')->info()->send();
```

The database notifications panel is the exception, and renders on an ordinary surface.
