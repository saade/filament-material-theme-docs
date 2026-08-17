# Rich editor

A `RichEditor` renders its toolbars as Material **toolbars**, a component introduced by Material 3
Expressive. The docked toolbar is square against the editor it belongs to; the floating one is a
pill above the content at elevation 3.

<Shot name="text-fields/rich-editor" alt="A rich editor with its toolbar above the content area" />

```php
use Filament\Forms\Components\RichEditor;

RichEditor::make('body');
```

## Behavior

| Part | What it takes |
| --- | --- |
| Toolbar | Surface-container, controls 8dp apart |
| Tool | Fully rounded, transparent, with a state layer |
| Active tool | Secondary container, whether marked by class or by `aria-pressed` |
| Dropdown tool menu | The [menu](/actions/grouping) sheet at elevation 2 |
| Content | Body-large on the plain ink |
| Custom block | Surface-container-low, with its heading in title-small |

Material draws a toolbar 64dp tall. That is not carried over here: these wrap onto a second line,
and a fixed height would either clip the wrap or leave the single-line case half empty.

## Rendered output

Content rendered back out through Filament's prose class takes the type scale: headings from the
headline and title styles, links in primary, code on surface-container-high, and quotes behind a
2dp rule in the outline-variant color.
