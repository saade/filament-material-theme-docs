# Toggle

<Shot name="switch/on" alt="A switch in its on state, the track filled and the handle grown to carry a check" />

<Shot name="switch/off" alt="A switch in its off state, a small handle on an outlined track" />

```php
use Filament\Forms\Components\Toggle;

Toggle::make('notifications');
```

The handle grows when the switch turns on, and again while it is held down.

## With icons

Given icons of its own, the switch carries those in place of the check, and keeps the larger handle
on both sides of the track:

<Shot name="switch/icons-on" alt="A switch turned on, its handle carrying an eye icon" />

<Shot name="switch/icons-off" alt="The same switch turned off, its handle carrying a crossed out eye" />

```php
use Filament\Support\Icons\Heroicon;

Toggle::make('visible')
    ->onIcon(Heroicon::OutlinedEye)
    ->offIcon(Heroicon::OutlinedEyeSlash);
```

## Colors

<Shot name="switch/colors" alt="Six switches turned on, in primary, secondary, success, warning, danger and info" />

```php
Toggle::make('notifications')->onColor('success');
```

`onColor()` reaches the track, the handle and the mark on it. `gray` is the exception, which
Filament emits no color classes for on a toggle.

### Off

An unselected switch is neutral until a color is asked for. Given one, it takes that color's
container for the track and its accent for the outline and the handle:

<Shot name="switch/off-colors" alt="Two switches turned off, one neutral and one in danger" />

```php
Toggle::make('notifications')->offColor('danger');
```
