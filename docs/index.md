---
layout: home

hero:
  name: Filament Material Theme
  text: Material Design 3 for Filament
  tagline: Every panel component redrawn to Material's spec, and a whole color scheme derived from one brand color.
  actions:
    - theme: brand
      text: Components
      link: /components/buttons
    - theme: alt
      text: View on GitHub
      link: https://github.com/saade/filament-material-theme

features:
  - title: Material components, not a repaint
    details: Buttons, cards, chips, text fields, tabs, sheets and navigation are rebuilt to the shapes and measurements Material publishes, rather than tinted to look approximately right.
  - title: Variants you ask for by name
    details: Material ships most components in more than one form. Each one is reached through a method on the Filament component that renders it, so a caller never carries a class string around.
  - title: Dynamic color
    details: The whole scheme, every role in both modes, is derived at runtime from a single source color, so changing the brand color changes the panel without a rebuild.
---
