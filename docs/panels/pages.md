# Pages

## Layout

A page has no surface of its own: the content field is the canvas, and everything on it is a card.
With a topbar and navigation present, the field tucks into the corner the two of them leave.

| Layer | Role |
| --- | --- |
| Chrome, the drawer and app bar | Surface-container |
| Canvas, the content field | Surface |
| Pane, a section or table | Surface-container-low |
| Pane header, a summary row | Surface-container |

## Empty states

An empty page, table or relation manager centers Filament's empty state: the icon in a
surface-container-high circle on the variant ink, the heading in title-medium, the description in
body-medium on the variant ink, and its actions [buttons](/actions/buttons).

## Simple pages

The login, registration and password reset pages, and any other simple layout, put their card on
the pane tone rounded 28dp over the canvas, with the heading in headline-small emphasized.

## Everything else on a page

| Part | What it takes |
| --- | --- |
| Text in a schema | Body-medium on the plain ink |
| Unordered list | Body-medium on the variant ink |
| Icon in a schema | The variant ink |
| Image in a schema | Rounded 12dp |
| Fused control group | Rounded 12dp, clipped so its children share the corner |
| Skip link | A fully rounded primary pill |
| Text selection | The primary container |
| Focus ring | The primary color |
| Scrollbars | A thin outline-variant thumb, darkening on hover |
