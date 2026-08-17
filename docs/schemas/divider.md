# Divider

A rule that separates content inside a schema. Filament has no component for one, so the theme
ships it:

<Shot name="dividers/variants" alt="Three dividers between lines of text: one edge to edge, one indented at the leading edge, one indented at both" />

```php
use Saade\FilamentMaterialTheme\Schemas\Components\Divider;

Divider::make();
```

## Variants

The three differ only in where the rule starts and ends.

| Variant | Modifier |
| --- | --- |
| Full width | the default |
| Inset | `->inset()` |
| Middle inset | `->middleInset()` |

```php
Divider::make();                 // edge to edge
Divider::make()->inset();        // indented at the leading edge
Divider::make()->middleInset();  // indented at both
```

An inset divider lines up with the text of the list it divides, rather than with the container.

`variant()` takes the same set by name, for when the variant is data:

```php
use Saade\FilamentMaterialTheme\Enums\DividerVariant;

Divider::make()->variant(DividerVariant::Inset);
Divider::make()->variant('inset');
```

| Case | Value |
| --- | --- |
| `DividerVariant::FullWidth` | `full-width` |
| `DividerVariant::Inset` | `inset` |
| `DividerVariant::MiddleInset` | `middle-inset` |

## API

| Method | Result |
| --- | --- |
| `inset()` | Indents the rule at the leading edge |
| `middleInset()` | Indents it at both |
| `variant(DividerVariant\|string\|Closure)` | Any of the three by name |
| `getVariant()` | The resolved `DividerVariant` |

`variant()` takes a closure as well, evaluated when the schema renders.

A divider spans the whole row, since a rule that stops at a column edge is a border. Everything else
a schema component takes applies as usual, `visible()` and `extraAttributes()` included.
