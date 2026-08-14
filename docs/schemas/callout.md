# Callout

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

`success`, `warning` and `info` are added by the theme and move with the source color. See
[theming](/getting-started/theming).
