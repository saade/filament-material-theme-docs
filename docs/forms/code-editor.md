# Code editor

A `CodeEditor` renders as an outlined container: transparent behind a 1dp outline, rounded 4dp, with
its text on the plain ink.

```php
use Filament\Forms\Components\CodeEditor;

CodeEditor::make('snippet');
```

The same treatment applies to a code entry in an [infolist](/infolists/entries), which sits on
surface-container-highest instead, being read rather than edited.
