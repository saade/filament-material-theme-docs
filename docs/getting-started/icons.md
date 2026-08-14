# Icons

The theme replaces Filament's Heroicons with Google's Material Design icons. Install the set to
turn it on:

```bash
composer require codeat3/blade-google-material-design-icons
```

It is a suggestion rather than a dependency, so nothing is shipped until you ask for it. Without
it the panel keeps Filament's Heroicons and nothing breaks.

Once installed it applies on its own. To keep Heroicons anyway:

```php
use Saade\FilamentMaterialTheme\FilamentMaterialThemePlugin;

FilamentMaterialThemePlugin::make()
    ->icons(false);
```

`icons()` takes a bool or a closure, evaluated per request.

## What it covers

All 159 of Filament's icon aliases, drawn from 68 outlined Material icons: the sidebar toggle,
action group triggers, table sort and filter controls, modal close buttons, notification
statuses, and the rest.

Icons you pass yourself are left alone, since they are not aliases:

```php
use Filament\Support\Icons\Heroicon;

Action::make('create')->icon(Heroicon::OutlinedPlus);   // still a Heroicon
Action::make('create')->icon('gmdi-add-o');             // Material
```

The set is [`codeat3/blade-google-material-design-icons`](https://github.com/codeat3/blade-google-material-design-icons),
so `gmdi-*` names are available to your own components too.
