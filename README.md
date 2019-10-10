# stylelint-config-team23-standard

> Standard CSS config for TEAM23

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard), which is the default
error checking plus a lot of style checking rules.

## Proposing rule changes

For proposing changes to the ruleset please open either

-   a merge request
-   a ticket

## see also

For linting SCSS there is [`stylelint-config-team23-scss`](https://github.com/team23/stylelint-config-team23-scss.git)
which extends these rules with rules for SCSS.

## Installation

```bash
npm install git+https://github.com/team23/stylelint-config-team23-standard.git --save-dev
```

## Usage

If you've installed `stylelint-config-team23-standard` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-team23-standard"
}
```

If you've globally installed `stylelint-config-team23-standard` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-team23-standard` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-team23-standard"
}
```

Since [stylelint 9.7.0](https://github.com/stylelint/stylelint/blob/9.7.0/CHANGELOG.md#970), you can simply use the globally installed configuration name instead of the absolute path:

```json
{
  "extends": "stylelint-config-team23-standard"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `selector-max-id` rule to allow one id selector in rules
(default is: no id selectors allowed): 

```json
{
  "extends": "stylelint-config-team23-standard",
  "rules": {
    "selector-max-id": 1
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

