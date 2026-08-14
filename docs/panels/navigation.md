# Navigation

## Sidebar

<Shot name="navigation/sidebar" alt="The expanded sidebar with grouped destinations" />

```php
use Filament\Navigation\NavigationGroup;
use Filament\Support\Icons\Heroicon;

$panel->navigationGroups([
    NavigationGroup::make('Components')
        ->icon(Heroicon::OutlinedPlusCircle)
        ->collapsible(),
]);
```

A collapsible group renders as a control with a chevron; one that is not renders as a section
header.

::: warning An icon on the group means no icons on its items
Filament throws if a navigation group and the items inside it both carry icons.
:::

## Collapsed sidebar

<Shot name="navigation/sidebar-collapsed" alt="The collapsed sidebar showing icons above labels" />

```php
$panel->sidebarCollapsibleOnDesktop();
```

A collapsed group opens its destinations as a sheet docked against the sidebar, rather than as a
floating dropdown:

<Shot name="navigation/sidebar-collapsed-group" alt="The collapsed sidebar with a group's destinations docked against it as a full height sheet" />

## Topbar

<Shot name="navigation/topbar" alt="The topbar at rest, flat against the page" />

<Shot name="navigation/topbar-scrolled" alt="The topbar once the page has scrolled, raised and tinted" />

```php
$panel->topbar(false);
```

## API

Nothing here is a theme method. It follows from the panel:

| Method | Effect |
| --- | --- |
| `sidebarCollapsibleOnDesktop()` | Lets the sidebar collapse at 1024px and up |
| `topbar(false)` | Removes the topbar |
| `navigationGroups([...])` | Groups destinations; `collapsible()` makes a group a control |
