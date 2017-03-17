var rule = require('../no-i18n-without-context');
var RuleTester = require('eslint').RuleTester;
var readFileSync = require('fs').readFileSync;
var resolve = require('path').resolve;
var parserOptions = {
    sourceType: "module",
    ecmaVersion: 6,
};

var ruleTester = new RuleTester();
ruleTester.run('no-i18n-without-context', rule, {
  valid: ['valid.js'].map(function(path) {
      return {
          parserOptions: parserOptions,
          code: readFileSync(resolve(__dirname, './no-i18n-without-context/', path), 'utf8'),
      };
  }),
  invalid: ['invalid.js'].map(function(path) {
      return {
          parserOptions: parserOptions,
          code: readFileSync(resolve(__dirname, './no-i18n-without-context/', path), 'utf8'),
          errors: [
              { ruleId: 'no-i18n-without-context', message: 'Context should be provided for i18n strings.' },
              { ruleId: 'no-i18n-without-context', message: 'Context should be provided for i18n strings.' },
              { ruleId: 'no-i18n-without-context', message: 'Context should be provided for i18n strings.' },
              { ruleId: 'no-i18n-without-context', message: 'Context should be provided for i18n strings.' },
              { ruleId: 'no-i18n-without-context', message: 'Context should be provided for i18n strings.' },
          ],
      };
  }),
});
