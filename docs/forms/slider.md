# Slider

A `Slider` renders as a Material **slider**, in the anatomy it took with Material 3 Expressive: a
16dp track carrying a 4dp handle, rather than a hairline carrying a disc. The figures are the XS
size, which is the one that belongs in a form.

## Continuous

<Shot name="sliders/continuous" alt="A slider with a filled track and a narrow bar for a handle" />

```php
use Filament\Forms\Components\Slider;

Slider::make('volume')
    ->range(0, 100)
    ->fillTrack();
```

The handle holds a 6dp gap on either side, cut through both halves of the track, and narrows while
it is being dragged. Where the track runs out, Material's stop indicator marks the end.

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
rather than standing over it at rest. It is a container in its own right, 48x44dp on the inverse
surface, and it grows out of the handle it belongs to.

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

<Shot name="sliders/vertical" alt="A vertical slider with the lower part of the track filled" />

```php
Slider::make('volume')
    ->range(0, 100)
    ->vertical()
    ->fillTrack();
```

Stood on end the value grows upward, so the stop indicator moves to the top.

<Shot name="sliders/vertical-discrete" alt="A vertical slider with its steps marked down the side" />

<Shot name="sliders/vertical-range" alt="A vertical slider with two handles and the span between them filled" />

## Notes

The gap beside the handle is painted in the surface the slider sits on, which the theme reads from a
variable. A slider dropped onto a container of a different tone can say so:

```php
Slider::make('volume')->extraAttributes(['style' => '--md-slider-surface: var(--md-sys-color-surface-container-high)']);
```
