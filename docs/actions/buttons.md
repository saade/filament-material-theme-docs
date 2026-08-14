# Buttons

<Shot name="buttons/common" alt="Filled, tonal, elevated, outlined and text buttons side by side" />

## Variants

| Variant | Modifier |
| --- | --- |
| Filled | `->filledButton()` |
| Filled tonal | `->tonal()` |
| Elevated | `->elevated()` |
| Outlined | `->outlined()` |
| Text | `->link()` |

```php
use Filament\Actions\Action;

Action::make('save')->filledButton();
Action::make('draft')->tonal();
Action::make('export')->elevated();
Action::make('cancel')->outlined();
Action::make('learnMore')->link();
```

`outlined()` and `link()` are Filament's own. A plain `Action::make()` is already filled, so
`filledButton()` is only needed to put a button back to filled when something else has changed it.

`variant()` takes the same set by name, for when the variant is data:

```php
use Saade\FilamentMaterialTheme\Enums\ButtonVariant;

Action::make('save')->variant(ButtonVariant::Tonal);
Action::make('save')->variant('tonal');
```

| Case | Value |
| --- | --- |
| `ButtonVariant::Filled` | `filled` |
| `ButtonVariant::Tonal` | `tonal` |
| `ButtonVariant::Elevated` | `elevated` |
| `ButtonVariant::Outlined` | `outlined` |
| `ButtonVariant::Text` | `text` |
| `ButtonVariant::Fab` | `fab` |
| `ButtonVariant::ExtendedFab` | `extended-fab` |

### With an icon

<Shot name="buttons/common-icons" alt="The same five buttons, each with a leading plus icon" />

```php
use Filament\Support\Icons\Heroicon;

Action::make('create')->icon(Heroicon::OutlinedPlus)->filledButton();
```

### Disabled

<Shot name="buttons/common-disabled" alt="Filled, tonal, outlined and text buttons in their disabled state" />

```php
Action::make('publish')->filledButton()->disabled();
```

## Sizes

<Shot name="buttons/sizes" alt="Five buttons from extra small to extra large" />

```php
use Filament\Support\Enums\Size;

Action::make('xs')->size(Size::ExtraSmall);
Action::make('sm')->size(Size::Small);
Action::make('md');                          // the default
Action::make('lg')->size(Size::Large);
Action::make('xl')->size(Size::ExtraLarge);
```

## Colors

<Shot name="buttons/colors" alt="Filled buttons in primary, success, warning, danger, info and gray" />

```php
Action::make('save')->color('primary');   // the default
Action::make('approve')->color('success');
Action::make('review')->color('warning');
Action::make('delete')->color('danger');
Action::make('details')->color('info');
Action::make('dismiss')->color('gray');
```

Colors and variants compose:

<Shot name="buttons/colors-tonal" alt="The same six colors as tonal buttons" />

```php
Action::make('approve')->color('success')->tonal();
```

## Icon buttons

<Shot name="buttons/icon" alt="Standard, filled, tonal, elevated and outlined icon buttons" />

```php
Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton();
Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton()->filledButton();
Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton()->tonal();
Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton()->elevated();
Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton()->outlined();
```

## Floating action buttons

<Shot name="buttons/fab" alt="Small, medium and large floating action buttons, then two extended ones" />

```php
Action::make('compose')->icon(Heroicon::OutlinedPlus)->fab();
Action::make('compose')->icon(Heroicon::OutlinedPlus)->fab()->size(Size::Small);
Action::make('compose')->icon(Heroicon::OutlinedPlus)->fab()->size(Size::Large);
```

`fab()` renders as an icon button, so it needs an `icon()`. `Size::ExtraSmall` resolves to the
small FAB and `Size::ExtraLarge` to the large one.

### Extended

<Shot name="buttons/fab-extended" alt="An extended floating action button with an icon and a label" />

```php
Action::make('compose')
    ->label('Compose')
    ->icon(Heroicon::OutlinedPencil)
    ->extendedFab()
    ->color('info');
```

`extendedFab()` renders as a labelled button, so it needs both an `icon()` and a `label()`.

## API

| Method | On | Result |
| --- | --- | --- |
| `filledButton()` | `Action` | Filled |
| `tonal()` | `Action` | Filled tonal |
| `elevated()` | `Action` | Elevated |
| `fab()` | `Action` | FAB, rendered as an icon button |
| `extendedFab()` | `Action` | Extended FAB, rendered as a labelled button |
| `variant(ButtonVariant\|string)` | `Action` | Any of the above by name |

Registered on the base `Action`, so `CreateAction`, `EditAction` and the rest answer to all of them.

`md-outlined` is applied without being called to any action where `isOutlined()` is true, which is
what makes an outlined icon button work.

::: info Why `filledButton()` and not `filled()`
`filled()` is the [card](/schemas/sections) variant, registered on the schema component. The theme
keeps the three filled variants apart by name: `filledButton()` on an action, `filledField()` on a
field, `filledBadge()` on a column or entry.
:::
