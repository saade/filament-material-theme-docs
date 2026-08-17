# Slider

## Continuous

<Shot name="sliders/continuous" alt="A slider with a filled track and a narrow bar for a handle" />

```php
use Filament\Forms\Components\Slider;

Slider::make('volume')
    ->range(0, 100)
    ->fillTrack();
```

## Discrete

<Shot name="sliders/discrete" alt="A slider marked at every tenth value" />

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

### Value indicator

<Shot name="sliders/tooltip" alt="The same slider with the value raised above the handle it belongs to" />

`tooltips()` raises the value while the handle is hovered, dragged or focused from the keyboard,
rather than standing over it at rest.

## Range

<Shot name="sliders/range" alt="A slider with two handles and the span between them filled" />

```php
Slider::make('price')
    ->range(0, 100)
    ->fillTrack([false, true, false])
    ->minDifference(10)
    ->tooltips();
```

## Vertical

The same three stood on end, with the value growing upward.

<Shot name="sliders/vertical" alt="A vertical slider with the lower part of the track filled" />

```php
Slider::make('volume')
    ->range(0, 100)
    ->vertical()
    ->fillTrack();
```

<Shot name="sliders/vertical-discrete" alt="A vertical slider with its steps marked down the side" />

<Shot name="sliders/vertical-range" alt="A vertical slider with two handles and the span between them filled" />
