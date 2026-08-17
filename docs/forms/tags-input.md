# Tags input

A `TagsInput` renders its field as a [text field](/forms/text-input) and each tag as a Material
**chip** on the secondary container.

<Shot name="text-fields/tags-input" alt="A tags input with two entered tags shown as badges" />

```php
use Filament\Forms\Components\TagsInput;

TagsInput::make('tags')->placeholder('Add a tag');
```

The remove button on a tag is fully rounded and carries a state layer of its own. See
[badges](/misc/badges) for the shapes a badge takes elsewhere.
