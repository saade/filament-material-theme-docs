# API reference

Everything the theme adds, in one place. All of it is registered when the package boots, so there
is nothing to import.

Each set is registered on the class Filament's macro lookup starts walking parents from, which is
what makes every subclass inherit it: `CreateAction`, `EditAction` and the rest all take the
button variants, and every form field takes the field ones.

## Actions

`Filament\Actions\Action`

| Method | Result | See |
| --- | --- | --- |
| `filledButton()` | Filled button | [Buttons](/actions/buttons) |
| `tonal()` | Filled tonal button | [Buttons](/actions/buttons) |
| `elevated()` | Elevated button | [Buttons](/actions/buttons) |
| `fab()` | Floating action button | [Buttons](/actions/buttons) |
| `extendedFab()` | Extended floating action button | [Buttons](/actions/buttons) |
| `variant(ButtonVariant\|string)` | Any button variant by name | [Buttons](/actions/buttons) |
| `bottomSheet(bool\|Closure = true)` | Bottom sheet, turning on `slideOver()` too | [Modals](/actions/modals) |

Applied without being called: any action where `isOutlined()` is true gets the outlined treatment,
which is what makes an outlined icon button work, since Filament drops the flag when it renders
one.

## Fields

`Filament\Forms\Components\Field`

| Method | Result | See |
| --- | --- | --- |
| `outlined()` | Outlined text input | [Text input](/forms/text-input) |
| `filledField()` | Filled text input | [Text input](/forms/text-input) |
| `search()` | Search | [Text input](/forms/text-input) |
| `variant(FieldVariant\|string)` | Any field variant by name | [Text input](/forms/text-input) |

## Schema components

`Filament\Schemas\Components\Component`, which sections, fieldsets and fields all descend from

| Method | Result | See |
| --- | --- | --- |
| `elevated()` | Elevated section | [Sections](/schemas/sections) |
| `filled()` | Filled section | [Sections](/schemas/sections) |
| `outlined()` | Outlined section | [Sections](/schemas/sections) |
| `variant(CardVariant\|string)` | Any section variant by name | [Sections](/schemas/sections) |

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
| `filledBadge()` | Filled badge | [Badges](/misc/badges) |
| `outlinedBadge()` | Outlined badge | [Badges](/misc/badges) |
| `elevatedBadge()` | Elevated badge | [Badges](/misc/badges) |
| `variant(ChipVariant\|string)` | Any badge variant by name | [Badges](/misc/badges) |

## Names that collide

Three of these sets would meet on the same name, and the lookup walks the closest parent first, so
the narrower registration wins. Where that would be ambiguous, the theme renames rather than
relying on it:

| Written as | Because |
| --- | --- |
| `filledButton()` | Keeps the button apart from the card's `filled()` and the field's variant |
| `filledField()` | `filled()` is already Filament's validation rule on a field |
| `outlinedBadge()`, `filledBadge()`, `elevatedBadge()` | An `Entry` descends from the schema component, so a bare `outlined()` on one would resolve to an outlined section |

`outlined()` and `elevated()` are deliberately shared: on a `Field` they mean the text input, on a
`Section` they mean the section, and on an `Action` they mean the button. Each resolves to the closest
registration, so the call reads the same wherever it appears.

## Enums

`Saade\FilamentMaterialTheme\Enums`

| Enum | Cases |
| --- | --- |
| `ButtonVariant` | `Elevated`, `Filled`, `Tonal`, `Outlined`, `Text`, `Fab`, `ExtendedFab` |
| `CardVariant` | `Elevated`, `Filled`, `Outlined` |
| `ChipVariant` | `Filled`, `Outlined`, `Elevated` |
| `FieldVariant` | `Filled`, `Outlined`, `Search` |
| `TabsVariant` | `Primary`, `Secondary` |

Every one is a backed string enum, and every `variant()` takes either the case or its value.
`ButtonVariant::Outlined` and `ButtonVariant::Text` resolve to Filament's own `outlined()` and
`link()` rather than adding anything, and `TabsVariant::Primary` is a no-op, so a variant held in a
variable can be any case without the calling code branching.

## Plugin

`Saade\FilamentMaterialTheme\FilamentMaterialThemePlugin`

| Method | Default | Effect |
| --- | --- | --- |
| `source(string\|Closure)` | `#1B48A5` | The color the whole scheme is derived from |
| `variant(string\|Closure)` | `tonalSpot` | Which of Material's nine derivations to use |
| `contrast(float\|Closure)` | `0.0` | `-1` reduced through `1` high |
| `icons(bool\|Closure)` | `true` | Uses Material icons, when the set is installed |
| `getScheme()` | | The three resolved values as a `MaterialScheme` |
| `hasIcons()` | | Whether Material icons are wanted |
| `getId()` | | `filament-material-theme` |

Closures are evaluated per request. See [theming](/getting-started/theming) and
[icons](/getting-started/icons).

## Scheme

`Saade\FilamentMaterialTheme\Color\MaterialScheme`

```php
MaterialScheme::make(
    source: '#6750A4',
    variant: 'tonalSpot',
    contrast: 0.0,
);
```

Immutable, with `source`, `variant` and `contrast` readable as properties, `toArray()` for the
payload the browser receives, and `MaterialScheme::DEFAULT_SOURCE` for the fallback.
