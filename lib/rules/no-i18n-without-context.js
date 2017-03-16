//------------------------------------------------------------------------------
// Rule Definition
//
// This rule ensures we don't define i18n strings without context
// This should fail: i18n._('test'')
// This should pass: i18n._('test', 'my super awesome test string context')
//------------------------------------------------------------------------------

const isI18n = require('../utils').isI18n;

module.exports = function(context) {
    return {
        CallExpression: function (node) {
            if (!isI18n(node.callee) || node.arguments.length >= 2) {
              return;
            }
            context.report(node, 'Context should be provided for i18n strings');
        },
    };
};
