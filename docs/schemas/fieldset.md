# Fieldset

A `Fieldset` renders as a Material **card** with its label as a legend. Default: no container, a
1dp outline-variant border rounded 12dp, and the legend in title-small on the variant ink.

<Shot name="repeater/fieldset" alt="A fieldset containing two fields" />

```php
use Filament\Schemas\Components\Fieldset;

Fieldset::make('Address')->schema([
    TextInput::make('street'),
    TextInput::make('city'),
]);
```

## Variants

It takes the [section](/schemas/sections) variants, which replace the border with a card container:

```php
Fieldset::make('Address')->elevated();
Fieldset::make('Address')->filled();
Fieldset::make('Address')->outlined();
```

The required mark on a fieldset label takes the error role, as it does on a field.
