# 1.0.2

-   the package name changed from `stylelint-config-team23-standard` to `@team23/stylelint-config-team23-standard`
-   the package is now available via npm!
-   update readme to include more details about how to install the package

# 1.0.1

-   updates to `stylelint` from 14.5.1 to 14.6.0

# 1.0.0

## Dependencies

-   updated `stylelint` from `^13.7.2` to `^14.5.0`
-   updated `stylelint-config-standard` from `^20.0.0` to `^25.0.0`
-   updated `stylelint` peer dependency to `^14.4.0`, i.e. removed support for older versions
-   added `stylelint-config-prettier` dependency

## Changes to linting rules

-   increased `max-nesting-depth` to 4.

-   added rules:

```js
'at-rule-disallowed-list': ['debug'],
'selector-type-no-unknown': null,
'function-no-unknown': null,
'no-empty-source': null,
```

-   removed duplicate rules that were or became standard in stylelint-config-standard or stylelint-config-recommended:

```js
'property-no-vendor-prefix': true,
'at-rule-no-vendor-prefix': true,
'selector-no-vendor-prefix': true,
'value-no-vendor-prefix': true,
'function-url-quotes': 'always',
'font-family-name-quotes': 'always-where-recommended',
'selector-attribute-quotes': 'always',
```

-   by adding `stylelint-config-prettier`, all rules that might cause conflict when using prettier are disabled.

-   disabled all stylistic rules as recommended by stylelint [here](https://stylelint.io/user-guide/rules/list/#stylistic-issues), by changing

```js
'max-empty-lines': 2,
'string-quotes': 'single',
'value-keyword-case': [
  'lower',
  {
    ignoreProperties: ['font-family', '/^\\$font-family-.*/']
  }
]
```

to

```js
'max-empty-lines': null,
'string-quotes': null,
'value-keyword-case': null,
```

-   and by adding the following to disable all other stylistic rules which might come with stylelint-config-standard. Those should be handled by a pretty printer instead.

```js
'function-name-case': null,
'custom-property-empty-line-before': null,
'selector-type-case': null,
'rule-empty-line-before': null,
'at-rule-empty-line-before': null,
'comment-empty-line-before': null,
'comment-whitespace-inside': null,
'color-hex-case': null,
'function-comma-newline-after': null,
'function-comma-newline-before': null,
'function-comma-space-after': null,
'function-comma-space-before': null,
'function-max-empty-lines': null,
'function-parentheses-newline-inside': null,
'function-parentheses-space-inside': null,
'function-whitespace-after': null,
'number-leading-zero': null,
'number-no-trailing-zeros': null,
'unit-case': null,
'value-list-comma-newline-after': null,
'value-list-comma-newline-before': null,
'value-list-comma-space-after': null,
'value-list-comma-space-before': null,
'value-list-max-empty-lines': null,
'property-case': null,
'declaration-bang-space-after': null,
'declaration-bang-space-before': null,
'declaration-colon-newline-after': null,
'declaration-colon-space-after': null,
'declaration-colon-space-before': null,
'declaration-empty-line-before': null,
'declaration-block-semicolon-newline-after': null,
'declaration-block-semicolon-newline-before': null,
'declaration-block-semicolon-space-after': null,
'declaration-block-semicolon-space-before': null,
'declaration-block-trailing-semicolon': null,
'block-closing-brace-empty-line-before': null,
'block-closing-brace-newline-after': null,
'block-closing-brace-newline-before': null,
'block-closing-brace-space-after': null,
'block-closing-brace-space-before': null,
'block-opening-brace-newline-after': null,
'block-opening-brace-newline-before': null,
'block-opening-brace-space-after': null,
'block-opening-brace-space-before': null,
'selector-attribute-brackets-space-inside': null,
'selector-attribute-operator-space-after': null,
'selector-attribute-operator-space-before': null,
'selector-combinator-space-after': null,
'selector-combinator-space-before': null,
'selector-descendant-combinator-no-non-space': null,
'selector-max-empty-lines': null,
'selector-pseudo-class-case': null,
'selector-pseudo-class-parentheses-space-inside': null,
'selector-pseudo-element-case': null,
'selector-list-comma-newline-after': null,
'selector-list-comma-newline-before': null,
'selector-list-comma-space-after': null,
'selector-list-comma-space-before': null,
'media-feature-colon-space-after': null,
'media-feature-colon-space-before': null,
'media-feature-name-case': null,
'media-feature-parentheses-space-inside': null,
'media-feature-range-operator-space-after': null,
'media-feature-range-operator-space-before': null,
'media-query-list-comma-newline-after': null,
'media-query-list-comma-newline-before': null,
'media-query-list-comma-space-after': null,
'media-query-list-comma-space-before': null,
'at-rule-name-case': null,
'at-rule-name-newline-after': null,
'at-rule-name-space-after': null,
'at-rule-semicolon-newline-after': null,
'at-rule-semicolon-space-before': null,
'indentation': null,
'linebreaks': null,
'max-line-length': null,
'no-eol-whitespace': null,
'no-missing-end-of-source-newline': null,
'no-empty-first-line': null,
'no-extra-semicolons': null,
```

## Changes to stylelint-config-standard

The update from stylelint-config-standard from version 20.0.0 to 25.0.0 introduced the following changes in stylelint-config-standard:

**added:**

```js
'alpha-value-notation': [
  'percentage',
  {
    exceptProperties: ['opacity'],
  },
],
'at-rule-no-vendor-prefix': true,
'color-function-notation': 'modern',
'custom-media-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected custom media query name to be kebab-case',
  },
],
'custom-property-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected custom property name to be kebab-case',
  },
],
'declaration-block-no-redundant-longhand-properties': true,
'function-url-quotes': 'always',
'hue-degree-notation': 'angle',
'keyframes-name-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected keyframe name to be kebab-case',
  },
],
'max-line-length': 120,
'media-feature-name-no-vendor-prefix': true,
'no-empty-first-line': true,
'no-irregular-whitespace': true,
'number-max-precision': 4,
'property-no-vendor-prefix': true,
'selector-attribute-quotes': 'always',
'selector-class-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected class selector to be kebab-case',
  },
],
'selector-id-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected id selector to be kebab-case',
  },
],
'selector-no-vendor-prefix': true,
'shorthand-property-no-redundant-values': true,
'string-quotes': 'double',
'value-no-vendor-prefix': true,
```

**removed:** none

**updated:** none

## Changes to stylelint-config-recommended

As stylelint-config-standard depends on stylelint-config-recommended and the stylelint-config-recommended dependency was updated from version 3.0.0 to 6.0.0 in stylelint-config-standard version 25.0.0, the following changes are introduced to stylelint-config-recommended:

**added:**

```js
'custom-property-no-missing-var-function': true,
'declaration-block-no-duplicate-custom-properties': true,
'named-grid-areas-no-invalid': true,
'no-invalid-position-at-import-rule': true,
'no-irregular-whitespace': true,
```

**removed:**

```js
'function-calc-no-invalid': true,
```

**udpated:**

from

```js
'selector-type-no-unknown': true,
```

to

```js
'selector-type-no-unknown': [
  true,
  {
    ignore: ['custom-elements'],
  },
],
```

# 0.2.0

-   Update to use stylelint 13 and stylelint-config standard 20

# 0.1.0

-   Initial release
