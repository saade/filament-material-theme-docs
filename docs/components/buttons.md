# Buttons

Buttons let people take action. Material gives them five containers, ranked by emphasis, plus
three specialized forms: the icon button, the floating action button, and the segmented button.

Filament renders every one of these as an `Action`, so the variant is chosen on the action itself.

<Shot name="buttons/common" alt="Filled, tonal, elevated, outlined and text buttons side by side" />

## Choosing a variant

Material ranks the five common buttons by how much attention they ask for. Put at most one
high-emphasis button in a view; if two actions look equally important, neither reads as the one to
take.

| Variant | Emphasis | Use it for | Call |
| --- | --- | --- | --- |
| Filled | Highest | The one action a screen exists to perform | `->filledButton()` |
| Filled tonal | High | An important action that is not *the* action | `->tonal()` |
| Elevated | Medium | A button that has to separate from a busy or patterned background | `->elevated()` |
| Outlined | Medium | The secondary half of a pair, next to a filled button | `->outlined()` |
| Text | Lowest | The least important action, or one repeated many times in a list | `->link()` |

`outlined()` and `link()` are Filament's own methods. The theme maps them onto Material's outlined
and text buttons rather than adding names of its own, so existing panels get them without changing
a line.

::: tip A plain action is already filled
`Action::make('save')` with nothing else renders as a filled button. `filledButton()` exists to
put a button *back* to filled when something else would otherwise change it: a shared
`configureUsing`, or a variant applied further up.
:::

```php
use Filament\Actions\Action;

Action::make('save')->filledButton();
Action::make('draft')->tonal();
Action::make('export')->elevated();
Action::make('cancel')->outlined();
Action::make('learnMore')->link();
```

### With an icon

An icon goes in front of the label and takes the label's color. Filament tints icons gray by
default; the theme stops that, because in Material the icon is part of the label.

<Shot name="buttons/common-icons" alt="The same five buttons, each with a leading plus icon" />

```php
use Filament\Support\Icons\Heroicon;

Action::make('create')
    ->icon(Heroicon::OutlinedPlus)
    ->filledButton();
```

### Disabled

A disabled button keeps its shape and drops its container to a flat tint of the surface color.
Text and outlined buttons have no container to drop, so only their label dims. Outlined keeps a
faded border so the target stays visible.

<Shot name="buttons/common-disabled" alt="Filled, tonal, outlined and text buttons in their disabled state" />

```php
Action::make('publish')
    ->filledButton()
    ->disabled();
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

| Size | Height | Label |
| --- | --- | --- |
| `Size::ExtraSmall` | 28dp | `label-medium` |
| `Size::Small` | 32dp | `label-medium` |
| *(default)* | 40dp | `label-large` |
| `Size::Large` | 48dp | `title-medium` |
| `Size::ExtraLarge` | 56dp | `title-medium` |

::: warning This ramp is not Material Expressive's
Material Expressive runs its own five sizes from 32dp to 136dp, with 56dp as the medium. The theme
keeps 40dp as the medium because that is where every button in a Filament panel already sits;
adopting the Expressive scale outright would resize the whole panel and put a 136dp button in a
toolbar. The label styles come from the type scale, so the ramp still reads as Material.
:::

## Colors

Every Filament color resolves through the scheme, so all of them move when the brand color
changes. `success`, `warning` and `info` have no Material role of their own, so the theme adds
them as custom colors and harmonizes them toward the brand hue. They shift with it rather than
sitting on top of it as stock green, amber and blue.

<Shot name="buttons/colors" alt="Filled buttons in primary, success, warning, danger, info and gray" />

```php
Action::make('save')->color('primary');   // the default
Action::make('approve')->color('success');
Action::make('review')->color('warning');
Action::make('delete')->color('danger');
Action::make('details')->color('info');
Action::make('dismiss')->color('gray');
```

A color and a variant compose. On a filled button the color becomes the container; on a tonal
one it becomes the container's *tone*, so the same six colors read much quieter.

<Shot name="buttons/colors-tonal" alt="The same six colors as tonal buttons" />

```php
Action::make('approve')
    ->color('success')
    ->tonal();
```

## Icon buttons

An icon button is a 40dp target with no label. It takes the same container variants as a common
button, so the emphasis ladder is the same one.

<Shot name="buttons/icon" alt="Standard, filled, tonal, elevated and outlined icon buttons" />

```php
Action::make('favorite')
    ->icon(Heroicon::OutlinedHeart)
    ->iconButton()
    ->tooltip('Add to favorites');

Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton()->filledButton();
Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton()->tonal();
Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton()->elevated();
Action::make('favorite')->icon(Heroicon::OutlinedHeart)->iconButton()->outlined();
```

An icon button carries no label, so give it a `tooltip()`. It is the only name a screen reader
and a hovering mouse have to go on.

## Floating action buttons

The FAB is the one action a screen promotes above the rest. It sits on the primary container tone
at elevation 3, and raises a step further on hover. Material sizes it in three steps, and each
step carries its own corner from the shape scale, so a small FAB is not simply a scaled-down large
one.

<Shot name="buttons/fab" alt="Small, medium and large floating action buttons, then two extended ones" />

```php
Action::make('compose')
    ->icon(Heroicon::OutlinedPlus)
    ->fab();
```

| Call | Size | Corner |
| --- | --- | --- |
| `->fab()->size(Size::Small)` | 40dp | `corner-medium` |
| `->fab()` | 56dp | `corner-large` |
| `->fab()->size(Size::Large)` | 96dp | `corner-extra-large` |

`Size::ExtraSmall` resolves to the small FAB and `Size::ExtraLarge` to the large one, so the five
Filament sizes map onto Material's three without erroring.

### Extended

An extended FAB adds a label beside the icon and grows to fit it. Reach for it when the action
needs naming, because a bare icon rarely carries a verb.

```php
Action::make('compose')
    ->label('Compose')
    ->icon(Heroicon::OutlinedPencil)
    ->extendedFab();

Action::make('star')
    ->label('Tertiary')
    ->icon(Heroicon::OutlinedStar)
    ->extendedFab()
    ->color('info');
```

`fab()` renders as an icon button and `extendedFab()` as a labeled one, so give the first an
`icon()` and the second both an `icon()` and a `label()`.

## Segmented buttons

A segmented button chooses between a small set of related options. Material draws it as a single
outlined shell with a shared stroke between segments, and marks the selection with the secondary
container rather than the accent, because it is a choice, not an action.

Filament renders this as a `ToggleButtons` form field; there is no theme method to call.

One segment at a time:

<Shot name="buttons/segmented" alt="A segmented button with three options and the middle one selected" />

```php
use Filament\Forms\Components\ToggleButtons;

ToggleButtons::make('period')
    ->label('Single select')
    ->inline()
    ->grouped()
    ->options(['a' => 'Day', 'b' => 'Week', 'c' => 'Month']);
```

Or several, with `->multiple()`:

<Shot name="buttons/segmented-multiple" alt="A segmented button with two of its three options selected" />

```php
ToggleButtons::make('style')
    ->label('Multi select')
    ->inline()
    ->grouped()
    ->multiple()
    ->options(['a' => 'Bold', 'b' => 'Italic', 'c' => 'Underline']);
```

A selected segment also takes a check mark. Filament renders no such icon, so the theme draws it
and reserves the space for it on both sides of the label, which is what keeps the group from
changing width as the selection moves. The check is what makes a multi-select group readable:
without it, several tinted segments next to each other read as one long fill.

### With icons

Pass `->icons()` alongside the options, keyed the same way.

<Shot name="buttons/segmented-icons" alt="A segmented button whose options carry icons, with the selected one showing a check" />

```php
ToggleButtons::make('layout')
    ->label('With icons')
    ->inline()
    ->grouped()
    ->options(['a' => 'List', 'b' => 'Grid', 'c' => 'Map'])
    ->icons([
        'a' => Heroicon::OutlinedListBullet,
        'b' => Heroicon::OutlinedSquares2x2,
        'c' => Heroicon::OutlinedMap,
    ]);
```

Where a segment carries an icon of its own, the check takes that icon's place rather than sitting
beside it. Material specifies the swap, and it means the segment keeps its width through the
change, so nothing shifts as the selection moves along the group.

`->grouped()` is what produces the connected shell. Without it the options render as separate
buttons.

## Grouped buttons

An `ActionGroup` collects actions behind one trigger. Given a label and `->button()` it renders as
a common button that opens a menu; left bare it renders as the kebab icon button Filament uses in
table rows.

<Shot name="buttons/grouped" alt="A menu button and a kebab icon button" />

```php
use Filament\Actions\ActionGroup;

ActionGroup::make([
    Action::make('edit')->label('Edit')->icon(Heroicon::OutlinedPencil),
    Action::make('duplicate')->label('Duplicate')->icon(Heroicon::OutlinedDocumentDuplicate),
    Action::make('delete')->label('Delete')->icon(Heroicon::OutlinedTrash)->color('danger'),
])
    ->label('Menu')
    ->button();
```

The panel it opens is drawn as a Material menu. Adjacent buttons that Filament groups together
take Material's connected group: one fully rounded shell, square joints, and a hairline between
the segments rather than a shadow around them.

## Behavior

**States.** Every button expresses hover, focus and press as a translucent layer of its own
content color over its container, not as a different background. That means a variant declares
its colors once and all three states follow, including after the palette changes at runtime.
Elevated is the exception that also moves: it rests at elevation 1 and lifts to 2 on hover, and
the FAB rests at 3 and lifts to 4.

**Disabled.** Only a button that paints a container when enabled paints one when disabled. A text
button, an outlined button and a bare icon button keep nothing behind their label, so they dim the
label instead of laying a gray block where there was none.

**Reduced motion.** State-layer transitions are removed under `prefers-reduced-motion`.

## API

Methods the theme adds to `Filament\Actions\Action`:

| Method | Result |
| --- | --- |
| `filledButton()` | Filled button |
| `tonal()` | Filled tonal button |
| `elevated()` | Elevated button |
| `fab()` | Floating action button, rendered as an icon button |
| `extendedFab()` | Extended floating action button, rendered as a labeled button |
| `variant(ButtonVariant\|string)` | Any of the above by name |

`variant()` takes the `Saade\FilamentMaterialTheme\Enums\ButtonVariant` enum or its string value,
which is useful when the variant is data rather than a literal:

```php
use Saade\FilamentMaterialTheme\Enums\ButtonVariant;

Action::make('save')->variant(ButtonVariant::Tonal);
Action::make('save')->variant('tonal');
```

| Case | Value | Renders as |
| --- | --- | --- |
| `ButtonVariant::Filled` | `filled` | Filled |
| `ButtonVariant::Tonal` | `tonal` | Filled tonal |
| `ButtonVariant::Elevated` | `elevated` | Elevated |
| `ButtonVariant::Outlined` | `outlined` | Outlined, delegating to Filament's `outlined()` |
| `ButtonVariant::Text` | `text` | Text, delegating to Filament's `link()` |
| `ButtonVariant::Fab` | `fab` | FAB |
| `ButtonVariant::ExtendedFab` | `extended-fab` | Extended FAB |

Filament methods the theme maps onto Material variants, listed here because they are how you reach
those variants: `outlined()`, `link()`, `iconButton()`, `size()`, `color()`, `icon()`, `badge()`.

::: info Why `filledButton()` and not `filled()`
The bare `filled()` belongs to cards, which are reached through the schema
component every field and section descends from. The theme keeps the filled variants apart by
name: `filledButton()` on an action, `filledField()` on a field, `filledBadge()` on a column or
entry, so that a call always resolves to the component you meant, whatever it is nested in.

Every variant method is registered on the class Filament's macro lookup starts walking parents
from, so `CreateAction`, `EditAction` and the rest answer to all of them.
:::
