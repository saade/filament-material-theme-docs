# Divider

Material's **divider**, which Filament has no component for. Everywhere else the theme restyles
markup Filament already renders; here there is none, so the rule ships as a schema component of its
own. Default variant: **full width**.

<Shot name="dividers/variants" alt="Three dividers between lines of text: one edge to edge, one indented at the leading edge, one indented at both" />

```php
use Saade\FilamentMaterialTheme\Schemas\Components\Divider;

Divider::make();
```

A 1dp rule in the outline-variant color, with no margin of its own.

## Variants

| Variant | Material name | Modifier | Inset |
| --- | --- | --- | --- |
| Full width | Full-width divider | none | none |
| Inset | Inset divider | `->inset()` | 16dp at the leading edge |
| Middle inset | Middle-inset divider | `->middleInset()` | 16dp at both |

```php
Divider::make();                 // edge to edge
Divider::make()->inset();        // indented at the leading edge
Divider::make()->middleInset();  // indented at both
```

An inset divider lines up with the text of the list it divides, rather than with the container.

`variant()` takes the same set by name, and unlike the other variant methods in the theme it also
takes a closure, evaluated when the schema renders:

```php
use Saade\FilamentMaterialTheme\Enums\DividerVariant;

Divider::make()->variant(DividerVariant::Inset);
Divider::make()->variant('inset');
Divider::make()->variant(fn (): string => $this->isCompact ? 'inset' : 'full-width');
```

| Case | Value |
| --- | --- |
| `DividerVariant::FullWidth` | `full-width` |
| `DividerVariant::Inset` | `inset` |
| `DividerVariant::MiddleInset` | `middle-inset` |

## Behavior

The component spans the whole row, since a rule that stops at a column edge is a border. It renders
its own markup rather than a Blade view, so it costs a single `<hr>`.

Everything a schema component takes applies as usual:

```php
Divider::make()
    ->visible(fn (): bool => $this->hasSections)
    ->extraAttributes(['class' => 'my-4']);
```

## API

| Method | Arguments | Result |
| --- | --- | --- |
| `make()` | | A full-width divider |
| `inset()` | | Indents the rule at the leading edge |
| `middleInset()` | | Indents it at both |
| `variant(DividerVariant\|string\|Closure)` | Case, value or closure | Any of the three by name |
| `getVariant()` | | The resolved `DividerVariant` |
