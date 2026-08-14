# Textarea

Takes the [text input](/forms/text-input) variants.

<Shot name="text-fields/textarea" alt="A textarea with a label and a bordered container" />

```php
use Filament\Forms\Components\Textarea;

Textarea::make('notes')->rows(4);
Textarea::make('notes')->filledField();
```
