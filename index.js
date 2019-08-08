"use strict"

module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "selector-max-id": 0,
    "declaration-no-important": true,
    "max-empty-lines": 2,
    "no-descending-specificity": null,
    "at-rule-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "string-quotes": "single",
    "function-url-quotes": "always",
    "font-family-name-quotes": "always-where-recommended",
    "selector-attribute-quotes": "always",
    "max-nesting-depth": [
      3,
      {
        "ignore": [
          "pseudo-classes"
        ]
      }
    ],
    "selector-max-compound-selectors": 3,
    "selector-class-pattern": [
      "^[a-z0-9\\-_]+$",
      {
        "message": "Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)"
      }
    ]
  },
}
