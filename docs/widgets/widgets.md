# Widgets

## Stats overview

Each stat is a Material **card** on the pane tone, rounded 12dp with no elevation. A `Stat`
descends from the schema component, so it takes the [section](/schemas/sections) variants:

```php
use Filament\Widgets\StatsOverviewWidget\Stat;

Stat::make('Revenue', '$12,400')
    ->description('7% up from last month')
    ->outlined();
```

`elevated()`, `filled()`, `outlined()` and `variant()` all behave as they do on a section.

| Part | What it takes |
| --- | --- |
| Label | Title-small on the variant ink |
| Value | Headline-medium on the plain ink |
| Description | Body-small on the variant ink |

## Charts

Chart colors are bound to the scheme rather than to Filament's palette, so a chart follows a source
color change like everything else:

| Part | Role |
| --- | --- |
| Fill | Primary container |
| Border | Primary |
| Grid | Outline variant |
| Text | On-surface variant |

## Account and info widgets

The account widget's heading and the Filament info widget's version take title-medium, and the user
name body-medium on the variant ink.
