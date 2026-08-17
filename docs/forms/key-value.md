# Key value

A `KeyValue` field renders as a table with a hairline border in the outline-variant color and its
header cells in title-small on the variant ink.

<Shot name="text-fields/key-value" alt="A key value field with a header row and one pair of inputs" />

```php
use Filament\Forms\Components\KeyValue;

KeyValue::make('meta');
```

Rows are [text inputs](/forms/text-input), and the reorder handle takes the same grab cursor and
variant ink as a table's.
