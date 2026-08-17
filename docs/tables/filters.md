# Filters

A table's filters open in the [menu](/actions/grouping) sheet, carrying a form rather than rows.

<Shot name="tables/filters" alt="An open filter panel with a select filter inside it" />

```php
use Filament\Tables\Filters\SelectFilter;

$table->filters([
    SelectFilter::make('status')->options([
        'Active' => 'Active',
        'Away' => 'Away',
        'Retired' => 'Retired',
    ]),
]);
```

The sheet gives up its own row padding, since the form inside it is the thing that knows how much
room it wants, and the action that applies the filters sits at the trailing edge, where every other
confirming action in the theme sits.

The trigger carries a count as a [badge](/misc/badges), and the indicators above the table render
as badges with their label in label-large on the variant ink.

Filters are ordinary fields, so a `SelectFilter` is a [select](/forms/select) and needs
`native(false)` for Filament's own listbox.
