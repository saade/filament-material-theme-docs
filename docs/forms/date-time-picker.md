# Date-time picker

::: warning `native(false)` is required
Filament renders a native input by default, which is the browser's own picker. The theme cannot
style it.
:::

## Date

<Shot name="date-pickers/date" alt="A closed date field" />

<Shot name="date-pickers/panel" alt="An open calendar panel with circular day cells, the selected date filled and today ringed" />

```php
use Filament\Forms\Components\DatePicker;

DatePicker::make('published_at')->native(false);
```

## Time

<Shot name="date-pickers/time" alt="A closed time field" />

<Shot name="date-pickers/time-panel" alt="An open time panel with the hour, minute and second in separate fields" />

```php
use Filament\Forms\Components\TimePicker;

TimePicker::make('starts_at')->native(false);
```

## Both

<Shot name="date-pickers/date-time" alt="A closed date and time field" />

<Shot name="date-pickers/date-time-panel" alt="An open panel with the calendar above the time fields" />

```php
use Filament\Forms\Components\DateTimePicker;

DateTimePicker::make('starts_at')->native(false);
```
