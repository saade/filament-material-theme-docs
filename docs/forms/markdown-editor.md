# Markdown editor

A `MarkdownEditor` takes the same [toolbar](/forms/rich-editor) treatment as the rich editor, over
EasyMDE's own markup: the toolbar on surface-container, its buttons fully rounded with a state
layer, the active one on the secondary container.

<Shot name="text-fields/markdown-editor" alt="A markdown editor with its toolbar above the content area" />

```php
use Filament\Forms\Components\MarkdownEditor;

MarkdownEditor::make('body');
```

The editing surface, its cursor, its selection, the side-by-side preview and the status bar are all
bound to Material roles, so the editor follows a palette change like everything else.
