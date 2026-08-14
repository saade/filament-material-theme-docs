# Slider

## Continuous

<Shot name="sliders/continuous" alt="A slider with a filled track and a round handle" />

```php
use Filament\Forms\Components\Slider;

Slider::make('volume')
    ->range(0, 100)
    ->fillTrack();
```

## Discrete

<Shot name="sliders/discrete" alt="A slider marked at every tenth value with a tooltip over the handle" />

```php
use Filament\Forms\Components\Slider\Enums\PipsMode;

Slider::make('rating')
    ->range(0, 100)
    ->step(10)
    ->fillTrack()
    ->tooltips()
    ->pips(PipsMode::Values)
    ->pipsValues([0, 20, 40, 60, 80, 100])
    ->steppedPips();
```

## Range

<Shot name="sliders/range" alt="A slider with two handles and the span between them filled" />

```php
Slider::make('price')
    ->range(0, 100)
    ->fillTrack([false, true, false])
    ->minDifference(10)
    ->tooltips();
```
