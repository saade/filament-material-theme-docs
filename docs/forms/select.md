# Select

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
operating system. The theme cannot style it. `searchable()` and `multiple()` imply Filament's own
listbox, so they do not need it.
:::

## Searchable

<Shot name="menus/listbox" alt="A searchable select with its listbox open and a search field above the options" />

```php
Select::make('type')
    ->searchable()
    ->options(['a' => 'Option A', 'b' => 'Option B']);
```

## Multiple

<Shot name="menus/select-multiple" alt="A multiple select with two chosen values shown as badges" />

```php
Select::make('types')
    ->multiple()
    ->options(['a' => 'Option A', 'b' => 'Option B']);
```

Chosen values render as [badges](/misc/badges).
