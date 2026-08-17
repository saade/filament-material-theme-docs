# Color picker

A `ColorPicker` renders its panel on the Material **menu** sheet: surface-container at elevation 2,
rounded 12dp.

<Shot name="text-fields/color-picker" alt="A color picker field showing its current color as a swatch" />

```php
use Filament\Forms\Components\ColorPicker;

ColorPicker::make('brand');
```

The field itself is a [text input](/forms/text-input) and takes its variants.
