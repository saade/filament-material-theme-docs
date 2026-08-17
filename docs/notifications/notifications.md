# Notifications

A `Notification` renders as a Material **snackbar**: the inverse surface at elevation 3, rounded
4dp, so it reads as temporary over any page.

<Shot name="notification/success" alt="A notification with a status icon, title, body and action" />

```php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved')
    ->body('A notification with a body and an action.')
    ->success()
    ->send();
```

| Part | What it takes |
| --- | --- |
| Container | Inverse surface, elevation 3 |
| Title | Body-medium on the inverse on-surface role |
| Body and date | The same ink at 80% |
| Action | A text button in the inverse primary color |
| Close control | A fully rounded target with a state layer |

## Status

<Shot name="notification/statuses" alt="Four notifications whose icons differ by status while the container stays the same" />

```php
Notification::make()->title('Saved')->success()->send();
Notification::make()->title('Check this')->warning()->send();
Notification::make()->title('Failed')->danger()->send();
Notification::make()->title('Heads up')->info()->send();
```

Material has no colored snackbar, so the container never changes: status is carried by the icon, in
the status color's container tone. Containers follow the surface while the inverse surface opposes
it, which is what keeps the pair legible in both modes.

## Database notifications

The notifications panel is the exception. Its entries are not passing messages, so they render on
surface-container-low with the plain ink, rounded 12dp and flat, and an unread marker in the primary
color.

```php
$panel->databaseNotifications();
```
