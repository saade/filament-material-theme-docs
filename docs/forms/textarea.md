# Textarea

A `Textarea` renders as a Material **text field** in the same three variants as the
[text input](/forms/text-input), stretched to its rows rather than centered on one line.

<Shot name="text-fields/textarea" alt="A textarea with a label and a bordered container" />

```php
use Filament\Forms\Components\Textarea;

Textarea::make('notes')->rows(4);
Textarea::make('notes')->filledField();
```
