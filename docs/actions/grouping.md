# Grouping actions

<Shot name="menus/menu" alt="An open menu with four rows, each with a leading icon" />

```php
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Support\Icons\Heroicon;

ActionGroup::make([
    Action::make('edit')->label('Edit')->icon(Heroicon::OutlinedPencil),
    Action::make('duplicate')->label('Duplicate')->icon(Heroicon::OutlinedDocumentDuplicate),
    Action::make('delete')->label('Delete')->icon(Heroicon::OutlinedTrash)->color('danger'),
])
    ->label('Open menu')
    ->button();
```

## The trigger

<Shot name="buttons/grouped" alt="A menu button and a kebab icon button" />

Given a label and `->button()` the group renders as a button. Left bare it renders as a kebab icon
button. Either takes every [button](/actions/buttons) variant:

```php
ActionGroup::make([/* ... */])->label('Menu')->button()->tonal();
```

## Where else this appears

The same sheet renders Filament's dropdown, the [select](/forms/select) listbox, a
[color picker](/forms/color-picker) and [date picker](/forms/date-time-picker) panel, the table's
column manager, [table filters](/tables/filters) and the global search results.
