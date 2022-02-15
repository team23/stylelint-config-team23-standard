'use strict';

module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        /**
         * Limit the number of ID selectors in a selector.
         */
        'selector-max-id': 0,

        /**
         * Disallow !important within declarations.
         */
        'declaration-no-important': true,

        /**
         * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
         * It is recommended turning this rule off if you use a lot of nesting.
         */
        'no-descending-specificity': null,

        /**
         * Limit the depth of nesting.
         */
        'max-nesting-depth': [
            3,
            {
                ignore: [
                    /**
                     * Ignore rules where the first selector in each selector list item is a pseudo-class
                     */
                    'pseudo-classes',
                ],
            },
        ],

        /**
         * Limit the number of compound selectors in a selector.
         */
        'selector-max-compound-selectors': 3,

        /**
         * Specify a pattern for class selectors.
         */
        'selector-class-pattern': [
            '^[a-z0-9\\-_]+$',
            {
                message: 'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
            },
        ],

        /**
         * Disable stylistic issues as these rules will be deprecated or removed in the future
         * See: https://stylelint.io/user-guide/rules/list/#stylistic-issues
         */
        'max-empty-lines': null,
        'string-quotes': null,
        'value-keyword-case': null,
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
        indentation: null,
        linebreaks: null,
        'max-line-length': null,
        'no-eol-whitespace': null,
        'no-missing-end-of-source-newline': null,
        'no-empty-first-line': null,
        'no-extra-semicolons': null,
    },
};
