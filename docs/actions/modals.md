# Modals

| Modal | Modifier |
| --- | --- |
| Modal | none |
| Slide-over | `->slideOver()` |
| Bottom sheet | `->bottomSheet()` |

## Modal

<Shot name="dialogs/basic" alt="A modal with a heading, a description and two actions" />

```php
use Filament\Actions\Action;

Action::make('confirm')
    ->modalHeading('Modal title')
    ->modalDescription('A short line about what this modal is asking.')
    ->modalSubmitActionLabel('Action 1')
    ->modalCancelActionLabel('Action 2')
    ->action(fn () => /* ... */);
```

### With a hero icon

<Shot name="dialogs/icon" alt="A modal led by a warning icon above the heading" />

```php
use Filament\Support\Icons\Heroicon;

Action::make('archive')
    ->modalIcon(Heroicon::OutlinedExclamationTriangle)
    ->modalHeading('Careful')
    ->modalDescription('This will archive the record.')
    ->action(fn () => /* ... */);
```

The icon keeps its own color on a destructive modal.

### Width

<Shot name="dialogs/wide" alt="A wider modal containing a form field" />

```php
use Filament\Support\Enums\Width;

Action::make('edit')
    ->modalWidth(Width::FiveExtraLarge)
    ->schema([TextInput::make('name')])
    ->action(fn () => /* ... */);
```

## Slide-over

<Shot name="dialogs/side-sheet" alt="A slide-over docked to the trailing edge of the screen" />

```php
Action::make('edit')
    ->slideOver()
    ->modalHeading('Edit record')
    ->schema([TextInput::make('name')])
    ->action(fn () => /* ... */);
```

## Bottom sheet

<Shot name="dialogs/bottom-sheet" alt="A bottom sheet docked to the bottom edge of the screen" />

```php
Action::make('edit')
    ->bottomSheet()
    ->modalHeading('Edit record')
    ->schema([TextInput::make('name')])
    ->action(fn () => /* ... */);
```

It takes a condition, evaluated every time the modal renders rather than once when the action is
built:

```php
Action::make('edit')->bottomSheet(fn (): bool => $this->isCompact);
```

Passing `false` leaves the action as a modal. Width is still yours to set with `modalWidth()`.

## API

| Method | On | Result |
| --- | --- | --- |
| `bottomSheet(bool\|Closure = true)` | `Action` | Bottom sheet |

::: info It turns on `slideOver()` too
`bottomSheet()` calls `slideOver()`, which is what gives it the sheet's header, close button and
scrolling. `isModalSlideOver()` therefore returns `true` for a bottom sheet, which matters if you
branch on it.
:::
