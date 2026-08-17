# Component index

Every Filament component the theme touches, what it maps to in Material, and what it adds. A blank
API column means the component is restyled and nothing has to be called.

## Actions

| Filament | Material | Variants | API |
| --- | --- | --- | --- |
| [`Action`](/actions/buttons) | Button | Filled *(default)*, Tonal, Elevated, Outlined, Text, FAB, Extended FAB | `filledButton()`, `tonal()`, `elevated()`, `fab()`, `extendedFab()`, `variant()` |
| [`Action`](/actions/buttons) with `iconButton()` | Icon button | Standard *(default)*, Filled, Tonal, Elevated, Outlined | The same set |
| [`Action`](/actions/modals) modal | Dialog, side sheet, bottom sheet | Dialog *(default)* | `bottomSheet()` |
| [`ActionGroup`](/actions/grouping) | Menu | Menu button *(default)*, kebab icon button, split button, FAB menu | Every button variant, plus `splitButton()`, `fabMenu()` |

## Schemas

| Filament | Material | Variants | API |
| --- | --- | --- | --- |
| [`Section`](/schemas/sections) | Card | Pane tone *(default)*, Elevated, Filled, Outlined | `elevated()`, `filled()`, `outlined()`, `variant()` |
| [`Fieldset`](/schemas/fieldset) | Card with a legend | The same four | The same set |
| [`Tabs`](/schemas/tabs) | Tabs | Primary *(default)*, Secondary | `secondary()`, `variant()` |
| [`Wizard`](/schemas/wizard) | Stepper | | |
| [`Callout`](/schemas/callout) | Container on a color role | | |
| [`Divider`](/schemas/divider) | Divider | Full width *(default)*, Inset, Middle inset | `inset()`, `middleInset()`, `variant()` |
| `Text`, `Icon`, `Image`, `UnorderedList` | Type scale and surface roles | | |
| `FusedGroup` | Clipped, rounded group | | |

## Forms

| Filament | Material | Variants | API |
| --- | --- | --- | --- |
| [`TextInput`](/forms/text-input) | Text field | Outlined *(default)*, Filled, Search | `outlined()`, `filledField()`, `search()`, `variant()` |
| [`Textarea`](/forms/textarea) | Text field | The same three | The same set |
| [`Select`](/forms/select) | Menu, on a text field | The field's three | The same set |
| [`Checkbox`](/forms/checkbox), `CheckboxList` | Checkbox | | |
| [`Radio`](/forms/radio) | Radio button | | |
| [`Toggle`](/forms/toggle) | Switch | | |
| [`ToggleButtons`](/forms/toggle-buttons) | Button group, or segmented button with `grouped()` | | |
| [`DatePicker`, `TimePicker`, `DateTimePicker`](/forms/date-time-picker) | Docked date picker, time input | | |
| [`Slider`](/forms/slider) | Slider (Expressive anatomy) | | |
| [`TagsInput`](/forms/tags-input) | Chips in a text field | | |
| [`KeyValue`](/forms/key-value) | Table of text fields | | |
| [`ColorPicker`](/forms/color-picker) | Menu sheet | | |
| [`FileUpload`](/forms/file-upload) | Surfaces, plus a modal editor | | |
| [`RichEditor`](/forms/rich-editor) | Toolbar, docked and floating | | |
| [`MarkdownEditor`](/forms/markdown-editor) | Toolbar | | |
| [`Repeater`, `Builder`](/forms/repeater) | Cards, plus a menu for the block picker | | |
| [`CodeEditor`](/forms/code-editor) | Outlined container | | |
| [`OneTimeCodeInput`](/forms/text-input#one-time-code) | Outlined fields per digit | | |
| `TableSelect`, `ModalTableSelect` | Chips in a field, plus a modal | | |

## Tables

| Filament | Material | Variants | API |
| --- | --- | --- | --- |
| [`Table`](/tables/table) | List on a card | | |
| [`Column`](/misc/badges) with `badge()` | Chip | Filled *(default)*, Outlined, Elevated | `filledBadge()`, `outlinedBadge()`, `elevatedBadge()`, `variant()` |
| [Filters](/tables/filters) | Menu carrying a form | | |
| [Search](/tables/search) | Search | Always the search pill | |
| [Pagination](/tables/pagination) | Rounded targets, current on the secondary container | | |
| Column manager, grouping, summaries | Menu, list bands | | |

## Infolists

| Filament | Material | Variants | API |
| --- | --- | --- | --- |
| [`Entry`](/infolists/entries) | Type scale on a surface | | |
| [`Entry`](/misc/badges) with `badge()` | Chip | Filled *(default)*, Outlined, Elevated | `filledBadge()`, `outlinedBadge()`, `elevatedBadge()`, `variant()` |

## Panels

| Filament | Material | Variants | API |
| --- | --- | --- | --- |
| [Sidebar](/panels/navigation) | Navigation drawer, rail when collapsed | | |
| [Topbar](/panels/navigation#topbar) | Top app bar, flat until scrolled | | |
| [Global search](/panels/global-search) | Search, over a dialog surface | | |
| [Notifications](/notifications/notifications) | Snackbar | | |
| Database notifications | List on a surface | | |
| [Empty states](/panels/pages#empty-states) | Icon, headline and body on the canvas | | |
| [Simple pages](/panels/pages#simple-pages) | Card on the canvas | | |
| Breadcrumbs, page header | Type scale | | |
| [Tooltips](/misc/tooltips) | Plain tooltip | | |
| [Loading](/misc/loading) | Restyled, not replaced | | |

## Widgets

| Filament | Material | Variants | API |
| --- | --- | --- | --- |
| [Stats overview](/widgets/widgets) | Card | Pane tone *(default)*, Elevated, Filled, Outlined | `elevated()`, `filled()`, `outlined()`, `variant()` |
| [Charts](/widgets/widgets#charts) | Roles bound to the scheme | | |
| Account and info widgets | Type scale | | |

## Not implemented

Material components Filament has no equivalent for, and the theme does not add: linear and circular
progress indicators, carousel, navigation bar, bottom app bar, the full-screen search view, the date
range picker and the time picker's dial. Filament's own loading indicator is restyled rather than
replaced. The [divider](/schemas/divider) is the one component the theme ships rather than restyles.
