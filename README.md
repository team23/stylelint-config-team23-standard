# stylelint-config-team23-standard

> Standard CSS linting config for TEAM23

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard), which is the default error checking plus a lot of style checking rules.
The style checking rules are disabled by also extending [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier).

Our custom ruleset is defined in the [`index.js`](./index.js).

## See also

For linting SCSS there is [`stylelint-config-team23-scss`](https://github.com/team23/stylelint-config-team23-scss.git)
which extends these rules with rules for SCSS.

## Installation

npm:

```bash
# latest version
npm install --save-dev @team23/stylelint-config-team23-standard

# specific version
npm install --save-dev @team23/stylelint-config-team23-standard@1.0.5
```

## Usage

If you've installed `stylelint-config-team23-standard` locally within your project, just set your stylelint config to:

```json
{
    "extends": "@team23/stylelint-config-team23-standard"
}
```

If you use a version prior to v1.0.3, use

```json
{
    "extends": "stylelint-config-team23-standard"
}
```

instead.

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `selector-max-id` rule to allow one id selector in rules
(default is: no id selectors allowed):

```json
{
    "extends": "@team23/stylelint-config-team23-standard",
    "rules": {
        "selector-max-id": 1
    }
}
```

## Proposing rule changes

For proposing changes to the ruleset please open either

-   a merge request
-   a ticket

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
