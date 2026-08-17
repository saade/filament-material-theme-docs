# Global search

The global search field takes the [search](/tables/search) pill without being asked, and its results
open on a Material **dialog** surface: surface-container-high at elevation 3, rounded 28dp.

```php
use Filament\Tables\Columns\TextColumn;

TextColumn::make('name')->searchable();
```

| Part | What it takes |
| --- | --- |
| Result link | A [menu](/actions/grouping) row, rounded 12dp, with a state layer |
| Group header | Title-small on the variant ink |
| Result heading | Body-large on the plain ink |
| Detail label | Body-small on the variant ink |
| Detail value | Body-small on the plain ink |
| No results message | Body-medium on the variant ink |
