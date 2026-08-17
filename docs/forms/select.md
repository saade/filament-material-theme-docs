# Select

A `Select` renders its listbox as a Material **menu**, and its field as a
[text field](/forms/text-input).

<Shot name="menus/select" alt="A closed select field" />

<Shot name="menus/select-open" alt="An open select listbox with the chosen option marked" />

```php
use Filament\Forms\Components\Select;

Select::make('type')
    ->native(false)
    ->options([
        'a' => 'Option A',
        'b' => 'Option B',
    ]);
```

::: warning `native(false)` is required
Filament renders a native `<select>` by default, whose dropdown belongs to the browser and the
operating system. No stylesheet can reach it. `searchable()` and `multiple()` imply Filament's own
listbox, so they do not need it.
:::

## Behavior

The panel is the [menu](/actions/grouping) sheet: surface-container at elevation 2, holding 48dp
rows. The chosen option is marked with the secondary container rather than a check, which is how
Material marks a selected menu item. The placeholder and the "no results" message take the variant
ink.

## Searchable

<Shot name="menus/listbox" alt="A searchable select with its listbox open and a search field above the options" />

```php
Select::make('type')
    ->searchable()
    ->options(['a' => 'Option A', 'b' => 'Option B']);
```

The search box at the head of the panel is divided from the options by a hairline.

## Multiple

<Shot name="menus/select-multiple" alt="A multiple select with two chosen values shown as badges" />

```php
Select::make('types')
    ->multiple()
    ->options(['a' => 'Option A', 'b' => 'Option B']);
```

Chosen values render inside the field as outlined [badges](/misc/badges) on the surface-container-low
tone, each with a state layer on its remove button. `TableSelect` and `ModalTableSelect` render
their chosen values the same way.

## Filament compatibility

`options()`, `searchable()`, `multiple()`, `preload()`, `relationship()`, `createOptionForm()`,
`getOptionLabelFromRecordUsing()`, `disabled()`, `placeholder()` and the rest behave as they do
without the theme. The field takes the [text input](/forms/text-input) variants, since they are
registered on every `Field`:

```php
Select::make('type')->native(false)->filledField();
```
