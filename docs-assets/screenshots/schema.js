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
/*
 * A modal has to be opened before there is anything to capture, and only the one
 * that is open is worth selecting, so every entry here is the same shape.
 */
const dialog = (file, trigger) => ({
    [file]: {
        url: 'components/dialogs',
        selector: '.fi-modal-open .fi-modal-window',
        async before(page) {
            await page.click(`.${trigger}`)
            await page.waitForSelector('.fi-modal-open .fi-modal-window', { visible: true })
        },
    },
})

/*
 * Collapsed by the toggle rather than by writing the stored preference, because
 * every fresh document resets that preference and a reload would undo it. This
 * way the change lasts exactly as long as the page it was made on.
 */
const collapseRail = async (page) => {
    /* The toggle lives in the topbar when there is one and in the sidebar when there
       is not, and the other is rendered but hidden. */
    await page.evaluate(() => {
        [...document.querySelectorAll('[class*="close-collapse-sidebar-btn"]')]
            .find((button) => button.offsetParent !== null)
            .click()
    })

    await page.waitForFunction(
        () => document.querySelector('.fi-sidebar').getBoundingClientRect().width < 120,
    )
}

/*
 * A capture taller than the viewport carries the bar that follows the scroll
 * across the middle of it, since the bar is painted wherever the scroll left it.
 */
const hideTopbar = (page) => page.addStyleTag({ content: '.fi-topbar { display: none }' })

/* Every page has several dropdown panels in it, so the one being opened is named. */
const MENU_PANEL = '.fi-dropdown:has(.shot-open-menu) .fi-dropdown-panel'

/*
 * A dropdown opens on mousedown and closes again on the click that follows, so a
 * whole click leaves it shut. Only the first half is sent.
 */
const openDropdown = async (page, trigger, panel) => {
    await page.evaluate((selector) => {
        document
            .querySelector(selector)
            .closest('.fi-dropdown-trigger')
            .dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    }, trigger)

    await page.waitForSelector(panel, { visible: true })
}

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
    'buttons/fab-extended': {
        url: 'components/buttons',
        selector: '.shot-buttons-fab-extended',
    },
    /* A toggle button sits close under its own field label, so the frame has to stop
       short of it. */
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
    'buttons/segmented-icons': {
        url: 'components/buttons',
        selector: '.shot-buttons-segmented-icons',
        padding: 4,
    },
    'buttons/segmented-colors': {
        url: 'components/buttons',
        selector: '.shot-buttons-segmented-colors',
        padding: 4,
    },
    'buttons/group': {
        url: 'components/buttons',
        selector: '.shot-buttons-group',
        padding: 4,
    },
    'buttons/group-multiple': {
        url: 'components/buttons',
        selector: '.shot-buttons-group-multiple',
        padding: 4,
    },
    'buttons/group-icons': {
        url: 'components/buttons',
        selector: '.shot-buttons-group-icons',
        padding: 4,
    },
    'buttons/group-colors': {
        url: 'components/buttons',
        selector: '.shot-buttons-group-colors',
        padding: 4,
    },
    'buttons/grouped': {
        url: 'components/buttons',
        selector: '.shot-buttons-grouped',
        tight: true,
    },
    'buttons/split': {
        url: 'components/buttons',
        selector: '.shot-buttons-split',
        tight: true,
    },
    /* Framed on the one button whose menu is open, since the panel covers the two
       beside it. */
    'buttons/split-open': {
        url: 'components/buttons',
        selector: ['.shot-buttons-split .fi-btn-group', '.shot-buttons-split .fi-dropdown-panel'],
        padding: 4,
        before: (page) => openDropdown(
            page,
            '.shot-buttons-split .md-split-button-menu',
            '.shot-buttons-split .fi-dropdown-panel',
        ),
    },
    'buttons/fab-menu': {
        url: 'components/buttons',
        selector: '.shot-buttons-fab-menu',
        tight: true,
    },
    'buttons/fab-menu-open': {
        url: 'components/buttons',
        selector: '.shot-buttons-fab-menu',
        tight: true,
        before: (page) => openDropdown(
            page,
            '.shot-buttons-fab-menu .md-fab',
            '.shot-buttons-fab-menu .fi-dropdown-panel',
        ),
    },

    /* The three lengths only read against each other, and against the text they
       divide, so they are framed as one column rather than one rule at a time. */
    'dividers/variants': {
        url: 'components/dividers',
        selector: [
            '.shot-divider-full-width',
            '.shot-dividers-first',
            '.shot-dividers-last',
        ],
        padding: 24,
    },

    'cards/default': {
        url: 'components/cards',
        selector: '.shot-cards-default',
    },
    'cards/elevated': {
        url: 'components/cards',
        selector: '.shot-cards-elevated',
    },
    'cards/filled': {
        url: 'components/cards',
        selector: '.shot-cards-filled',
    },
    'cards/outlined': {
        url: 'components/cards',
        selector: '.shot-cards-outlined',
    },

    'chips/filled': {
        url: 'components/chips',
        selector: '.shot-chips-filled',
        tight: true,
    },
    'chips/outlined': {
        url: 'components/chips',
        selector: '.shot-chips-outlined',
        tight: true,
    },
    'chips/elevated': {
        url: 'components/chips',
        selector: '.shot-chips-elevated',
        tight: true,
    },

    'text-fields/outlined': {
        url: 'components/text-fields',
        selector: '.shot-fields-outlined',
    },
    'text-fields/filled': {
        url: 'components/text-fields',
        selector: '.shot-fields-filled',
    },
    'text-fields/affixes': {
        url: 'components/text-fields',
        selector: '.shot-fields-affixes',
    },
    'text-fields/prefix-icon': {
        url: 'components/text-fields',
        selector: '.shot-fields-prefix-icon',
    },
    'text-fields/helper': {
        url: 'components/text-fields',
        selector: '.shot-fields-helper',
    },
    'text-fields/disabled': {
        url: 'components/text-fields',
        selector: '.shot-fields-disabled',
    },
    'text-fields/error': {
        url: 'components/text-fields',
        selector: '.shot-fields-error',
    },
    'text-fields/textarea': {
        url: 'components/text-fields',
        selector: '.shot-fields-textarea',
    },
    'text-fields/search': {
        url: 'components/search',
        selector: '.shot-fields-search',
    },
    'text-fields/tags-input': {
        url: 'components/text-fields',
        selector: '.shot-tags-input',
    },
    'text-fields/rich-editor': {
        url: 'components/text-fields',
        selector: '.shot-rich-editor',
    },
    'text-fields/markdown-editor': {
        url: 'components/text-fields',
        selector: '.shot-markdown-editor',
    },
    'text-fields/color-picker': {
        url: 'components/text-fields',
        selector: '.shot-color-picker',
    },
    'text-fields/key-value': {
        url: 'components/text-fields',
        selector: '.shot-key-value',
    },
    'text-fields/file-upload': {
        url: 'components/text-fields',
        selector: '.shot-file-upload',
    },

    'tabs/primary': {
        url: 'components/tabs',
        selector: '.shot-tabs-primary',
    },
    'tabs/secondary': {
        url: 'components/tabs',
        selector: '.shot-tabs-secondary',
    },

    ...dialog('dialogs/basic', 'shot-open-dialog-basic'),
    ...dialog('dialogs/icon', 'shot-open-dialog-icon'),
    ...dialog('dialogs/wide', 'shot-open-dialog-wide'),
    ...dialog('dialogs/side-sheet', 'shot-open-side-sheet'),
    ...dialog('dialogs/bottom-sheet', 'shot-open-bottom-sheet'),

    'badges/attached': {
        url: 'components/badges',
        selector: '.shot-badges-attached',
        tight: true,
    },

    'callouts/callout': {
        url: 'components/callouts',
        selector: '.shot-callout-primary',
    },
    'callouts/colors': {
        url: 'components/callouts',
        selector: ['.shot-callout-primary', '.shot-callout-info'],
    },

    'checkbox/single': {
        url: 'components/checkbox',
        selector: '.shot-checkbox-single',
    },
    'checkbox/list': {
        url: 'components/checkbox',
        selector: '.shot-checkbox-list',
    },

    'date-pickers/date': {
        url: 'components/date-time-pickers',
        selector: '.shot-date-picker',
    },
    'date-pickers/panel': {
        url: 'components/date-time-pickers',
        selector: '.fi-fo-date-time-picker-panel',
        async before(page) {
            await page.click('.shot-date-picker .fi-fo-date-time-picker-trigger')
            await page.waitForSelector('.fi-fo-date-time-picker-panel', { visible: true })
        },
    },
    'date-pickers/date-time': {
        url: 'components/date-time-pickers',
        selector: '.shot-date-time-picker',
    },
    /* The panel is scoped to its own field, since all three fields hold one. */
    'date-pickers/date-time-panel': {
        url: 'components/date-time-pickers',
        selector: '.shot-date-time-picker .fi-fo-date-time-picker-panel',
        async before(page) {
            await page.click('.shot-date-time-picker .fi-fo-date-time-picker-trigger')
            await page.waitForSelector('.shot-date-time-picker .fi-fo-date-time-picker-panel', {
                visible: true,
            })
        },
    },
    'date-pickers/time': {
        url: 'components/date-time-pickers',
        selector: '.shot-time-picker',
    },
    'date-pickers/time-panel': {
        url: 'components/date-time-pickers',
        selector: '.shot-time-picker .fi-fo-date-time-picker-panel',
        async before(page) {
            await page.click('.shot-time-picker .fi-fo-date-time-picker-trigger')
            await page.waitForSelector('.shot-time-picker .fi-fo-date-time-picker-panel', {
                visible: true,
            })
        },
    },

    'progress/spinner': {
        url: 'components/loading-progress',
        selector: '.shot-loading',
        tight: true,
        async before(page) {
            await page.click('.shot-loading button')
            await page.waitForSelector('.shot-loading .fi-loading-indicator', { visible: true })
        },
    },

    'menus/menu': {
        url: 'components/menus',
        selector: MENU_PANEL,
        before: (page) => openDropdown(page, '.shot-open-menu', MENU_PANEL),
    },
    'menus/select': {
        url: 'components/menus',
        selector: '.shot-select',
    },
    'menus/select-open': {
        url: 'components/menus',
        selector: ['.shot-select', '.shot-select .fi-dropdown-panel'],
        async before(page) {
            await page.click('.shot-select .fi-select-input-btn')
            await page.waitForSelector('.shot-select .fi-dropdown-panel', { visible: true })
        },
    },
    'menus/select-multiple': {
        url: 'components/menus',
        selector: '.shot-select-multiple',
    },
    /* A plain select is the browser's own control, so the listbox belongs to a
       searchable one, which is where Filament renders a sheet of its own. */
    'menus/listbox': {
        url: 'components/menus',
        selector: ['.shot-select-searchable', '.shot-select-searchable .fi-dropdown-panel'],
        async before(page) {
            await page.click('.shot-select-searchable .fi-select-input-btn')
            await page.waitForSelector('.shot-select-searchable .fi-dropdown-panel', {
                visible: true,
            })
        },
    },

    'radio/options': {
        url: 'components/radio-button',
        selector: '.shot-radio',
    },

    'repeater/items': {
        url: 'components/repeater',
        selector: '.shot-repeater',
    },
    'repeater/fieldset': {
        url: 'components/repeater',
        selector: '.shot-fieldset',
    },

    'sliders/continuous': {
        url: 'components/sliders',
        selector: '.shot-slider-continuous',
    },
    'sliders/discrete': {
        url: 'components/sliders',
        selector: '.shot-slider-discrete',
    },
    'sliders/range': {
        url: 'components/sliders',
        selector: '.shot-slider-range',
    },
    /* The value indicator is raised by the handle rather than standing over it,
       so the pointer has to stay on the handle for it to be in the frame. */
    'sliders/tooltip': {
        url: 'components/sliders',
        selector: '.shot-slider-discrete',
        hover: true,
        before: (page) => page.hover('.shot-slider-discrete .noUi-handle'),
    },
    'sliders/vertical': {
        url: 'components/sliders',
        selector: '.shot-slider-vertical',
    },
    'sliders/vertical-discrete': {
        url: 'components/sliders',
        selector: '.shot-slider-vertical-discrete',
    },
    'sliders/vertical-range': {
        url: 'components/sliders',
        selector: '.shot-slider-vertical-range',
    },

    'notification/success': {
        url: 'components/snackbar',
        selector: '.fi-no-notification',
        async before(page) {
            await page.click('.fi-ac button')
            await page.waitForSelector('.fi-no-notification', { visible: true })
        },
    },
    /* All four at once, since the point of the section is that only the icon
       changes with the status. */
    'notification/statuses': {
        url: 'components/snackbar',
        selector: ['.fi-no-notification:first-of-type', '.fi-no-notification:last-of-type'],
        async before(page) {
            await page.evaluate(() => {
                document.querySelectorAll('.fi-ac button').forEach((button) => button.click())
            })
            await page.waitForFunction(
                () => document.querySelectorAll('.fi-no-notification').length === 4,
            )
        },
    },

    'stepper/wizard': {
        url: 'components/stepper',
        selector: '.shot-stepper',
    },

    'switch/on': {
        url: 'components/switch',
        selector: '.shot-switch-on',
    },
    'switch/off': {
        url: 'components/switch',
        selector: '.shot-switch-off',
    },
    'switch/icons-on': {
        url: 'components/switch',
        selector: '.shot-switch-icons-on',
    },
    'switch/icons-off': {
        url: 'components/switch',
        selector: '.shot-switch-icons-off',
    },
    /* The first and the last of the six, whose union is the grid holding them. */
    'switch/colors': {
        url: 'components/switch',
        selector: ['.shot-switch-color-primary', '.shot-switch-color-info'],
    },
    'switch/off-colors': {
        url: 'components/switch',
        selector: ['.shot-switch-off-default', '.shot-switch-off-danger'],
    },

    /*
     * The whole panel, for the documentation's own hero rather than for a
     * component page: the app bar, the drawer and a screen of real components in
     * one frame. It comes from the demo's promo stage, which is composed for
     * exactly this.
     */
    'hero/panel': {
        url: 'promo/stage',
        selector: '.fi-ta-table',
        viewport: [1180, 780],
    },

    /* The two Styles pages, which show the scheme itself rather than a component
       drawn from it. Framed on the card, since the heading is what says which
       part of the scheme is on show. */
    'theming/pinning': {
        url: 'styles/dynamic-color',
        selector: '.fi-section:has(.md-pinning)',
        /* Pinned rather than at rest: the point of the page is what happens when
           an accent is named, and the code block below repeats it back. Each is
           given a color of its own, since pinning both to the seed would leave
           three rows of the same swatches.
         *
         * Set through the component rather than typed into the fields. The page
         * is live on a debounce, and a field written into while the round trip
         * for the last one is still out has its value patched away underneath.
         */
        async before(page) {
            await page.evaluate(async () => {
                const component = window.Livewire.all().find((c) => c.name.endsWith('dynamic-color'))

                await component.$wire.set('data.pin_secondary', true)
                await component.$wire.set('data.secondary', '#625B71')
                await component.$wire.set('data.pin_tertiary', true)
                await component.$wire.set('data.tertiary', '#7D5260')
            })

            await page.waitForFunction(
                () => document.querySelector('.md-pinning-code')?.textContent.includes("->tertiary('#7D5260')"),
            )

            await hideTopbar(page)
        },
    },

    'theming/roles': {
        url: 'styles/tokens',
        selector: '.fi-section:has(.md-gallery-swatches)',
        before: hideTopbar,
    },
    'theming/typescale': {
        url: 'styles/tokens',
        selector: '.fi-section:has(.md-gallery-typescale)',
        before: hideTopbar,
    },
    'theming/shape': {
        url: 'styles/tokens',
        selector: '.fi-section:has(.md-gallery-shape)',
        before: hideTopbar,
    },

    'tooltips/plain': {
        url: 'components/tooltips',
        selector: ['.shot-tooltip .fi-btn', '.tippy-box'],
        async before(page) {
            await page.hover('.shot-tooltip button')
            await page.waitForSelector('.tippy-box', { visible: true })
        },
        hover: true,
    },

    'tables/table': {
        url: 'components/tables',
        selector: '.fi-ta-ctn',
    },
    'tables/header': {
        url: 'components/tables',
        selector: '.fi-ta-header-ctn',
    },
    'tables/rows': {
        url: 'components/tables',
        selector: '.fi-ta-table',
    },
    'tables/row-actions': {
        url: 'components/tables',
        selector: '.fi-ta-row .fi-ta-actions',
    },
    'tables/filters': {
        url: 'components/tables',
        selector: '.fi-ta-filters',
        async before(page) {
            await page.evaluate(() => {
                document
                    .querySelector('.fi-ta-filters-dropdown .fi-icon-btn')
                    .closest('.fi-dropdown-trigger')
                    .dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
            })
            await page.waitForSelector('.fi-ta-filters', { visible: true })
        },
    },
    /* Selecting a row swaps the toolbar for the bulk actions it offers. */
    'tables/selection': {
        url: 'components/tables',
        selector: '.fi-ta-selection-indicator',
        async before(page) {
            await page.click('.fi-ta-row .fi-ta-record-checkbox')
            await page.waitForSelector('.fi-ta-selection-indicator', { visible: true })
        },
    },
    'tables/confirmation': {
        url: 'components/tables',
        selector: '.fi-modal-open .fi-modal-window',
        async before(page) {
            await page.click('.fi-ta-row .fi-ta-actions .fi-icon-btn.fi-color-danger')
            await page.waitForSelector('.fi-modal-open .fi-modal-window', { visible: true })
        },
    },

    'navigation/sidebar': {
        url: 'components/buttons',
        selector: '.fi-sidebar',
    },
    'navigation/sidebar-collapsed': {
        url: 'components/buttons',
        selector: '.fi-sidebar',
        before: collapseRail,
    },
    /* The sidebar and the sheet it docks are two elements, framed as one shape. */
    'navigation/sidebar-collapsed-group': {
        url: 'components/buttons',
        selector: ['.fi-sidebar', '.fi-sidebar-group .fi-dropdown-panel'],
        async before(page) {
            await collapseRail(page)
            await page.click('.fi-sidebar-group-dropdown-trigger-btn')
            await page.waitForSelector('.fi-sidebar-group .fi-dropdown-panel', { visible: true })
        },
    },
    'navigation/topbar': {
        url: 'components/text-fields',
        selector: '.fi-topbar',
    },
    'navigation/topbar-scrolled': {
        url: 'components/text-fields',
        selector: '.fi-topbar',
        async before(page) {
            await page.evaluate(() => window.scrollTo(0, 400))
            await page.waitForFunction(() => document.documentElement.classList.contains('md-scrolled'))
        },
    },
}
