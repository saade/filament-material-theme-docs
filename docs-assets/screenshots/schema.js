/*
 * Every image the documentation embeds, keyed by the path it is written to under
 * docs/public/screenshots/{theme}/. `url` is relative to BASE_URL, so the panel
 * these are captured from can be swapped without touching an entry.
 *
 * The anchors are classes rather than ids because Filament gives a section an id
 * of its own and that one wins; a class merges. They are added in the demo panel
 * with ->extraAttributes(['class' => 'shot-...']).
 *
 * `tight` crops to the union of the element's children instead of the element's
 * own box: an actions row stretches to the full width of the content column, so
 * capturing it whole would leave most of the image empty.
 */
export default {
    'buttons/common': {
        url: 'components/buttons',
        selector: '.shot-buttons-common',
        tight: true,
    },
    'buttons/common-icons': {
        url: 'components/buttons',
        selector: '.shot-buttons-common-icons',
        tight: true,
    },
    'buttons/common-disabled': {
        url: 'components/buttons',
        selector: '.shot-buttons-common-disabled',
        tight: true,
    },
    'buttons/sizes': {
        url: 'components/buttons',
        selector: '.shot-buttons-sizes',
        tight: true,
    },
    'buttons/colors': {
        url: 'components/buttons',
        selector: '.shot-buttons-colors',
        tight: true,
    },
    'buttons/colors-tonal': {
        url: 'components/buttons',
        selector: '.shot-buttons-colors-tonal',
        tight: true,
    },
    'buttons/icon': {
        url: 'components/buttons',
        selector: '.shot-buttons-icon',
        tight: true,
    },
    'buttons/fab': {
        url: 'components/buttons',
        selector: '.shot-buttons-fab',
        tight: true,
    },
    /* Its own field label sits 8dp above it, so the frame has to stop short of that. */
    'buttons/segmented': {
        url: 'components/buttons',
        selector: '.shot-buttons-segmented',
        padding: 4,
    },
    'buttons/segmented-multiple': {
        url: 'components/buttons',
        selector: '.shot-buttons-segmented-multiple',
        padding: 4,
    },
    'buttons/grouped': {
        url: 'components/buttons',
        selector: '.shot-buttons-grouped',
        tight: true,
    },
}
