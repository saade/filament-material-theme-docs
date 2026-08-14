# Badges

## Attached

<Shot name="badges/attached" alt="A badge on an icon button, on a tonal button and on an outlined button" />

```php
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;

Action::make('notifications')->icon(Heroicon::OutlinedBell)->iconButton()->badge(3);
Action::make('inbox')->label('Inbox')->tonal()->badge(12);
Action::make('errors')->label('Errors')->outlined()->badge(5)->badgeColor('danger');
```

Applies on an icon button, a button, a link, a tab and a sidebar item. Anywhere else it renders in the standalone form below.

## Variants

| Variant | Modifier |
| --- | --- |
| Filled | none, or `->filledBadge()` |
| Outlined | `->outlinedBadge()` |
| Elevated | `->elevatedBadge()` |

### Filled

<Shot name="chips/filled" alt="Six filled badges, one per color" />

```php
use Filament\Tables\Columns\TextColumn;

TextColumn::make('status')->badge();
TextColumn::make('status')->badge()->color('success');
```

### Outlined

<Shot name="chips/outlined" alt="Four outlined badges, one per color" />

```php
TextColumn::make('status')->badge()->outlinedBadge();
```

### Elevated

<Shot name="chips/elevated" alt="Four elevated badges, one per color" />

```php
TextColumn::make('status')->badge()->elevatedBadge();
```

## Usage

The same methods are on infolist entries:

```php
use Filament\Infolists\Components\TextEntry;

TextEntry::make('status')->badge()->outlinedBadge();
```

```php
use Saade\FilamentMaterialTheme\Enums\ChipVariant;

TextColumn::make('status')->badge()->variant(ChipVariant::Outlined);
TextColumn::make('status')->badge()->variant('outlined');
```

## API

| Method | On | Result |
| --- | --- | --- |
| `filledBadge()` | `Column`, `Entry` | Filled |
| `outlinedBadge()` | `Column`, `Entry` | Outlined |
| `elevatedBadge()` | `Column`, `Entry` | Elevated |
| `variant(ChipVariant\|string)` | `Column`, `Entry` | Any of the above by name |

| Case | Value |
| --- | --- |
| `ChipVariant::Filled` | `filled` |
| `ChipVariant::Outlined` | `outlined` |
| `ChipVariant::Elevated` | `elevated` |

A variant is set on the column or entry, not on a badge, so it applies to every badge that cell
renders.

::: info Why the names end in `Badge`
An `Entry` descends from the schema component that carries the [card](/schemas/sections) variants,
so a bare `outlined()` on one would give an outlined card.
:::
