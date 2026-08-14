# Table

<Shot name="tables/table" alt="A table with a heading, search, sortable columns, badges and row actions" />

```php
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

public function table(Table $table): Table
{
    return $table
        ->heading('Table')
        ->description('A container-low sheet whose rows are separated by a divider.')
        ->columns([
            TextColumn::make('name')->searchable()->sortable(),
            TextColumn::make('role')->sortable(),
        ]);
}
```

## Header

<Shot name="tables/header" alt="A table header with its heading, description, header action and search field" />

```php
$table
    ->heading('Table')
    ->description('A container-low sheet whose rows are separated by a divider.')
    ->headerActions([
        Action::make('add')->label('Add member')->icon(Heroicon::OutlinedPlus),
    ]);
```

Header actions are [buttons](/actions/buttons) and take every variant.

## Rows

<Shot name="tables/rows" alt="Table rows separated by dividers, with a sortable header row above" />

```php
TextColumn::make('name')->sortable();
TextColumn::make('status')->badge();
```

A status column renders as a [badge](/misc/badges).

## Row actions

<Shot name="tables/row-actions" alt="Edit and delete icon buttons at the end of a table row" />

```php
$table->recordActions([
    Action::make('edit')->icon(Heroicon::OutlinedPencil)->iconButton(),
    Action::make('delete')->icon(Heroicon::OutlinedTrash)->iconButton()->color('danger'),
]);
```

<Shot name="tables/confirmation" alt="A confirmation modal led by a trash icon" />

```php
Action::make('delete')
    ->icon(Heroicon::OutlinedTrash)
    ->iconButton()
    ->color('danger')
    ->requiresConfirmation()
    ->modalIcon(Heroicon::OutlinedTrash)
    ->modalHeading('Permanently delete?');
```

See [modals](/actions/modals).

## Selection

<Shot name="tables/selection" alt="The selection indicator showing how many rows are selected and the bulk actions available" />

```php
use Filament\Actions\BulkAction;

$table->toolbarActions([
    BulkAction::make('archive')->label('Archive')->icon(Heroicon::OutlinedArchiveBox),
]);
```

Selecting a row swaps the toolbar for the actions that apply to the selection.
