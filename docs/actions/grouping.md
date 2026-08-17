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

## Split button

An action with a menu of related ones beside it. `splitButton()` takes the first action in the
group as the leading half and folds the rest into the trailing one:

<Shot name="buttons/split" alt="Filled, tonal and outlined split buttons, each a labeled button beside a smaller one carrying a caret" />

```php
ActionGroup::make([
    Action::make('save')->label('Save'),
    Action::make('saveAndClose')->label('Save and close'),
    Action::make('saveAsDraft')->label('Save as draft'),
])
    ->filledButton()
    ->splitButton();
```

It joins `button()` and `iconButton()` as a way of saying how the group renders, so there is no
separate leading action to pass.

<Shot name="buttons/split-open" alt="A split button with its menu open, the trailing half fully rounded" />

The inner corners open up under the pointer, and the trailing half goes fully round while its menu
is showing.

Both halves are styled together. A variant, a color or an outline given to the group reaches each
of them:

```php
ActionGroup::make([/* ... */])->tonal()->color('danger')->splitButton();
```

Given to the leading action instead, the trailing half follows it, so either place works:

```php
ActionGroup::make([
    Action::make('save')->label('Save')->tonal()->color('danger'),
    Action::make('saveAndClose')->label('Save and close'),
])->splitButton();
```

## FAB menu

A floating action button that opens the actions belonging to it.

<Shot name="buttons/fab-menu" alt="A floating action button with a plus icon" />

```php
ActionGroup::make([
    Action::make('note')->label('New note')->icon(Heroicon::OutlinedPencilSquare),
    Action::make('reminder')->label('New reminder')->icon(Heroicon::OutlinedClock),
    Action::make('list')->label('New list')->icon(Heroicon::OutlinedListBullet),
])
    ->icon(Heroicon::OutlinedPlus)
    ->fabMenu();
```

The trigger is a FAB, so the icon on the group is the one it carries; without one it falls back to
Filament's own.

<Shot name="buttons/fab-menu-open" alt="The same button open, showing three labeled pills stacked above it and a close icon in place of the plus" />

Open, the actions stand as separate buttons rather than rows of a menu, and the FAB carries a cross
until it closes again. The menu opens upward, which is the direction available to a button that
floats over the page; `dropdownPlacement()` afterwards overrides it.

```php
ActionGroup::make([/* ... */])->fabMenu()->dropdownPlacement('bottom-start');
```

## API

| Method | Result |
| --- | --- |
| `splitButton()` | The first action beside a button holding the rest |
| `fabMenu()` | A FAB opening its actions as separate buttons |

Both are registered on `Filament\Actions\ActionGroup`, which also takes every
[button](/actions/buttons) variant.
