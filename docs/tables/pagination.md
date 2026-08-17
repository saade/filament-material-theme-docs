# Pagination

A table's pagination renders as a row of fully rounded 40dp targets, marked with the secondary
container rather than the accent. Nothing here is a theme method.

| Part | What it takes |
| --- | --- |
| Page button | Fully rounded, 40dp square, label-large on the variant ink, with a state layer |
| Current page | Secondary container, ink on its on-container pair, read from `aria-current` |
| Previous and next | The same target, without a container of their own |
| Overview text | Body-medium on the variant ink |
| The row itself | Divided from the table by a hairline in the outline-variant color |

```php
$table
    ->paginated([10, 25, 50])
    ->defaultPaginationPageOption(25);
```

The records-per-page select is a [select](/forms/select), so its listbox is the
[menu](/actions/grouping) sheet.
