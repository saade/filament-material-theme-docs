# Filters

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

The trigger carries a count as a [badge](/misc/badges), and the indicators shown above the table
render as badges.

Filters are ordinary fields, so a `SelectFilter` is a [select](/forms/select) and needs
`native(false)` for Filament's own listbox.
