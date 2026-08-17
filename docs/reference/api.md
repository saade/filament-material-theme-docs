# API reference

Everything the theme adds. All of it is registered when the package boots, so there is nothing to
import and nothing to register per component.

## Index

| Method | On | Purpose |
| --- | --- | --- |
| `filledButton()` | `Action`, `ActionGroup` | Filled button |
| `tonal()` | `Action`, `ActionGroup` | Filled tonal button |
| `elevated()` | `Action`, `ActionGroup`, `Component` | Elevated button, or elevated card |
| `fab()` | `Action`, `ActionGroup` | Floating action button |
| `extendedFab()` | `Action`, `ActionGroup` | Extended floating action button |
| `splitButton()` | `ActionGroup` | Leading action beside a menu of the rest |
| `fabMenu()` | `ActionGroup` | FAB opening its actions as separate buttons |
| `bottomSheet()` | `Action` | Modal docked to the bottom edge |
| `outlined()` | `Field`, `Component` | Outlined text field, or outlined card |
| `filledField()` | `Field` | Filled text field |
| `search()` | `Field` | Search field |
| `filled()` | `Component` | Filled card |
| `secondary()` | `Tabs` | Secondary tabs |
| `filledBadge()` | `Column`, `Entry` | Filled chip |
| `outlinedBadge()` | `Column`, `Entry` | Outlined chip |
| `elevatedBadge()` | `Column`, `Entry` | Elevated chip |
| `inset()` | `Divider` | Divider indented at the leading edge |
| `middleInset()` | `Divider` | Divider indented at both edges |
| `variant()` | All of the above classes | Any variant of that component by name |

## Actions

`Filament\Actions\Action`

| Method | Arguments | Result | See |
| --- | --- | --- | --- |
| `filledButton()` | | Filled button | [Buttons](/actions/buttons) |
| `tonal()` | | Filled tonal button | [Buttons](/actions/buttons) |
| `elevated()` | | Elevated button | [Buttons](/actions/buttons) |
| `fab()` | | FAB; turns on `iconButton()` | [Buttons](/actions/buttons#floating-action-buttons) |
| `extendedFab()` | | Extended FAB; turns on `button()` | [Buttons](/actions/buttons#extended) |
| `variant(ButtonVariant\|string)` | Case or value | Any button variant by name | [Buttons](/actions/buttons) |
| `bottomSheet(bool\|Closure = true)` | Condition, per render | Bottom sheet; turns on `slideOver()` | [Modals](/actions/modals) |

Every one except `bottomSheet()` is registered on `Filament\Actions\ActionGroup` as well, since a
group renders as a button. The group takes two of its own:

| Method | Result | See |
| --- | --- | --- |
| `splitButton()` | Rearranges the group into a button group of two halves | [Grouping](/actions/grouping#split-button) |
| `fabMenu()` | A FAB with a panel of separate buttons, opening upward | [Grouping](/actions/grouping#fab-menu) |

Applied without being called: any action where `isOutlined()` is true is marked for the stylesheet,
which is what makes an outlined icon button work, since Filament drops the flag when it renders one.

## Fields

`Filament\Forms\Components\Field`

| Method | Result | See |
| --- | --- | --- |
| `outlined()` | Outlined text field, the default | [Text input](/forms/text-input) |
| `filledField()` | Filled text field | [Text input](/forms/text-input) |
| `search()` | Search field | [Search](/tables/search) |
| `variant(FieldVariant\|string)` | Any field variant by name | [Text input](/forms/text-input) |

Written to the field wrapper with `extraFieldWrapperAttributes()`, merged rather than replaced.

## Schema components

`Filament\Schemas\Components\Component`, which sections, fieldsets, fields, entries and stats all
descend from

| Method | Result | See |
| --- | --- | --- |
| `elevated()` | Elevated card | [Sections](/schemas/sections) |
| `filled()` | Filled card | [Sections](/schemas/sections) |
| `outlined()` | Outlined card | [Sections](/schemas/sections) |
| `variant(CardVariant\|string)` | Any card variant by name | [Sections](/schemas/sections) |

Drawn on a `Section`, a `Fieldset` and a stats overview `Stat`. Elsewhere the class is set and
nothing is drawn from it.

## Tabs

`Filament\Schemas\Components\Tabs`

| Method | Result | See |
| --- | --- | --- |
| `secondary()` | Secondary tabs | [Tabs](/schemas/tabs) |
| `variant(TabsVariant\|string)` | Either tab variant by name | [Tabs](/schemas/tabs) |

## Columns and entries

`Filament\Tables\Columns\Column` and `Filament\Infolists\Components\Entry`

| Method | Result | See |
| --- | --- | --- |
| `filledBadge()` | Filled chip | [Badges](/misc/badges) |
| `outlinedBadge()` | Outlined chip | [Badges](/misc/badges) |
| `elevatedBadge()` | Elevated chip | [Badges](/misc/badges) |
| `variant(ChipVariant\|string)` | Any chip variant by name | [Badges](/misc/badges) |

Written to the table cell with `extraCellAttributes()`, and to the entry wrapper with
`extraEntryWrapperAttributes()`.

## Components the theme ships

`Saade\FilamentMaterialTheme\Schemas\Components\Divider`

| Method | Arguments | Result | See |
| --- | --- | --- | --- |
| `make()` | | A full-width divider, spanning the row | [Divider](/schemas/divider) |
| `inset()` | | Indented at the leading edge | [Divider](/schemas/divider) |
| `middleInset()` | | Indented at both | [Divider](/schemas/divider) |
| `variant(DividerVariant\|string\|Closure)` | Case, value or closure | Any of the three by name | [Divider](/schemas/divider) |
| `getVariant()` | | The resolved `DividerVariant` | [Divider](/schemas/divider) |

## Names that collide

Three sets would meet on the same name. Filament's macro lookup walks the closest parent first, so
the narrower registration wins; where that would be ambiguous, the theme renames rather than relying
on it:

| Written as | Because |
| --- | --- |
| `filledButton()` | Keeps the button apart from the card's `filled()` and the field's variant |
| `filledField()` | `filled()` is already Filament's validation rule on a field |
| `outlinedBadge()`, `filledBadge()`, `elevatedBadge()` | An `Entry` descends from the schema component, so a bare `outlined()` on one would resolve to an outlined card |

`outlined()` and `elevated()` are deliberately shared: on a `Field` they mean the text field, on a
`Section` the card, on an `Action` the button. Each resolves to the closest registration, so the
call reads the same wherever it appears.

## Enums

`Saade\FilamentMaterialTheme\Enums`

| Enum | Cases | Values |
| --- | --- | --- |
| `ButtonVariant` | `Elevated`, `Filled`, `Tonal`, `Outlined`, `Text`, `Fab`, `ExtendedFab` | `elevated`, `filled`, `tonal`, `outlined`, `text`, `fab`, `extended-fab` |
| `CardVariant` | `Elevated`, `Filled`, `Outlined` | `elevated`, `filled`, `outlined` |
| `ChipVariant` | `Filled`, `Outlined`, `Elevated` | `filled`, `outlined`, `elevated` |
| `FieldVariant` | `Filled`, `Outlined`, `Search` | `filled`, `outlined`, `search` |
| `TabsVariant` | `Primary`, `Secondary` | `primary`, `secondary` |
| `DividerVariant` | `FullWidth`, `Inset`, `MiddleInset` | `full-width`, `inset`, `middle-inset` |

Every one is a backed string enum, and every `variant()` takes either the case or its value. Passing
an unknown value throws, as `from()` does.

Three cases add nothing of their own: `ButtonVariant::Outlined` and `ButtonVariant::Text` resolve to
Filament's `outlined()` and `link()`, and `TabsVariant::Primary` is a no-op. A variant held in a
variable can therefore be any case without the calling code branching.

## Plugin

`Saade\FilamentMaterialTheme\FilamentMaterialThemePlugin`

| Method | Argument | Default | Effect |
| --- | --- | --- | --- |
| `make()` | | | Resolves the plugin from the container |
| `source(string\|Closure)` | Hex color | `#1B48A5` | The color the whole scheme is derived from |
| `variant(string\|Closure)` | One of nine names | `tonalSpot` | Which derivation to use |
| `contrast(float\|Closure)` | `-1` to `1` | `0.0` | Reduced through high contrast |
| `primary(string\|Closure\|null)` | Hex color | `null`, derived | Pins the primary accent, and takes over as the seed |
| `secondary(string\|Closure\|null)` | Hex color | `null`, derived | Pins the secondary accent |
| `tertiary(string\|Closure\|null)` | Hex color | `null`, derived | Pins the tertiary accent |
| `icons(bool\|Closure)` | Condition | `true` | Uses Material icons, when the set is installed |
| `getScheme()` | | | The three resolved values as a `MaterialScheme` |
| `hasIcons()` | | | Whether Material icons are wanted |
| `getId()` | | | `filament-material-theme` |

Closures are evaluated per request. See [theming](/getting-started/theming) and
[icons](/getting-started/icons).

The plugin registers one render hook, on `PanelsRenderHook::HEAD_START`, which prints the scheme for
the browser runtime. It is deliberately unscoped: a panel id is not a valid render hook scope, and
passing one silently drops the hook.

## Scheme

`Saade\FilamentMaterialTheme\Color\MaterialScheme`

```php
use Saade\FilamentMaterialTheme\Color\MaterialScheme;

MaterialScheme::make(
    source: '#6750A4',
    variant: 'tonalSpot',
    contrast: 0.0,
    primary: null,
    secondary: '#625B71',
    tertiary: null,
);
```

Immutable, with all six readable as properties, `toArray()` for the payload the browser receives,
and `MaterialScheme::DEFAULT_SOURCE` for the fallback. A pinned accent that was not named is left
out of `toArray()` entirely rather than sent as null, so the runtime can tell "derive this one"
apart from a color.

| Property | Type | Default |
| --- | --- | --- |
| `source` | `string` | `#1B48A5` |
| `variant` | `string` | `tonalSpot` |
| `contrast` | `float` | `0.0` |
| `primary` | `?string` | `null` |
| `secondary` | `?string` | `null` |
| `tertiary` | `?string` | `null` |

## Browser runtime

| API | Purpose |
| --- | --- |
| `material-theme:update` | A `CustomEvent` on `document`, carrying `{ source, scheme, contrast, primary, secondary, tertiary }` |
| `window.filamentMaterialThemeApply(scheme)` | The same, called directly |

The call returns without doing anything unless a `source` or a `primary` is given.

See [theming](/getting-started/theming#at-runtime).

## CSS

Custom properties, Tailwind utilities and the layers a panel is built from are documented under
[customization](/getting-started/customization).
