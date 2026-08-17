# Entries

An infolist entry is text on a surface, so the type scale is most of the mapping. Nothing here is a
theme method, except the badge variants an entry shares with a table column.

| Part | What it takes |
| --- | --- |
| Entry label | Body-small on the variant ink |
| Entry content | Body-medium on the plain ink |
| Text entry | Body-medium on the plain ink; an affix or a limited-list message body-small on the variant ink |
| Placeholder | Body-medium in the outline color |
| Code entry | Surface-container-highest, rounded 4dp |
| Image entry | Rounded 8dp |
| Color entry | A circle behind a hairline |
| Repeatable entry item | A 1dp outline-variant border, rounded 12dp |

```php
use Filament\Infolists\Components\TextEntry;

TextEntry::make('status')->badge();
TextEntry::make('summary');
```

## Badges

An entry renders a badge as a Material **chip**, and takes the same three container variants a table
column does:

```php
use Saade\FilamentMaterialTheme\Enums\ChipVariant;

TextEntry::make('status')->badge()->outlinedBadge();
TextEntry::make('status')->badge()->elevatedBadge();
TextEntry::make('status')->badge()->variant(ChipVariant::Filled);
```

See [badges](/misc/badges) for the variants and their API.

::: info Why the names end in `Badge`
An `Entry` descends from the schema component that carries the [card](/schemas/sections) variants,
so a bare `outlined()` on one would give an outlined card.
:::

## Prose

Long-form content rendered through Filament's prose class takes the type scale: headings from the
headline and title styles, body-large text, links in primary, inline code on surface-container-high,
and quotes behind a 2dp rule in the outline-variant color.
