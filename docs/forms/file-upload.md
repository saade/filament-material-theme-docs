# File upload

A `FileUpload` renders its drop area and each uploaded item as Material surfaces: the area on
surface-container-low rounded 12dp, and an item's panel on the secondary container.

<Shot name="text-fields/file-upload" alt="A file upload field with its drop area" />

```php
use Filament\Forms\Components\FileUpload;

FileUpload::make('attachment');
```

The image editor opens as a [modal](/actions/modals), on surface-container-high, with its control
panel groups titled in title-small.
