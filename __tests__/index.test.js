'use strict';

import { beforeEach, describe, expect, it } from 'vitest';
import config from '../index.js';
import fs from 'fs';
import stylelint from 'stylelint';

const validCss = fs.readFileSync('./__tests__/css-valid.css', 'utf-8');
const invalidCss = fs.readFileSync('./__tests__/css-invalid.css', 'utf-8');

const expectedWarnings = [
    'Unexpected at-rule "debug" (at-rule-disallowed-list)',
    'Unexpected unknown at-rule "@debug" (at-rule-no-unknown)',
    'Unexpected !important (declaration-no-important)',
    'Unexpected !important (declaration-no-important)',
    'Unexpected !important (declaration-no-important)',
    'Unexpected !important (declaration-no-important)',
    'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
    'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
    'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
    'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
    'Expected ".header__nav-link .icon .svg .path" to have no more than 3 compound selectors (selector-max-compound-selectors)',
    'Expected ".item" to have no more than 3 compound selectors (selector-max-compound-selectors)',
    'Expected ".link" to have no more than 3 compound selectors (selector-max-compound-selectors)',
    'Expected ".footer .container .row .col .content" to have no more than 3 compound selectors (selector-max-compound-selectors)',
    'Expected "#main-header" to have no more than 0 ID selectors (selector-max-id)',
    'Expected "#header #nav" to have no more than 0 ID selectors (selector-max-id)',
];

describe('flags no warnings with valid css', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: validCss,
            config,
        });
    });

    it('did not error', () => result.then(
        data => expect(data.errored).toBeFalsy(),
    ));

    it('flags no warnings', () => result.then(
        data => expect(data.results[0].warnings).toHaveLength(0),
    ));
});

describe('flags warnings with invalid css', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidCss,
            config,
        });
    });

    it('should flag as errored', () => result.then(data => {
        expect(data.errored).toBeTruthy();
    }));

    it('should flag the correct number of warnings', () => result.then(
        data => {
            const expectedWarningCount = 16;
            expect(data.results[0].warnings.length).toBe(expectedWarningCount);
        },
    ));

    it.each(expectedWarnings)('should contain warning: "%s"', async expectedWarning => {
        const _result = await result;
        const warnings = _result.results[0].warnings.map(warning => warning.text);
        expect(warnings).toContain(expectedWarning);
    });
});
