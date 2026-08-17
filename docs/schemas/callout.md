# Callout

A `Callout` renders on the container tone of the color it carries. Given no color it sits on
surface-container-high, the same tone `gray` resolves to.

<Shot name="callouts/callout" alt="A callout with a heading and a line of description" />

```php
use Filament\Schemas\Components\Callout;

Callout::make('Heads up')
    ->color('warning')
    ->description('A callout is tinted with the color it carries.');
```

## Colors

<Shot name="callouts/colors" alt="Callouts in primary, success, warning, danger and info" />

```php
Callout::make('Primary')->color('primary');
Callout::make('Success')->color('success');
Callout::make('Warning')->color('warning');
Callout::make('Danger')->color('danger');
Callout::make('Info')->color('info');
```

The container comes from the color's container role and every part of the callout, heading, text,
icon and footer, takes its on-container pair. `success`, `warning` and `info` are added by the theme
and move with the source color. See [theming](/getting-started/theming).
