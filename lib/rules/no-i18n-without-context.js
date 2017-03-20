//------------------------------------------------------------------------------
// Rule Definition
//
// This rule ensures we don't define i18n strings without context
// This should fail: i18n._('test')
// This should pass: i18n._('test', 'my super awesome test string context')
//------------------------------------------------------------------------------

const isI18n = require('../utils').isI18n;

function isValidBinaryExpression(arg) {
  return arg.type === 'BinaryExpression' && arg.operator === '+' && isValidString(arg.left) && isValidString(arg.right);
}

function isValidStringLiteral(arg) {
  return arg.type === 'Literal' && typeof arg.value === 'string' && arg.value.length;
}

function isValidTemplateLiteral(arg) {
  return arg.type === 'TemplateLiteral' && (arg.quasis.length > 1 || arg.quasis[0].value.raw.length);
}

function isValidString(arg) {
  return isValidStringLiteral(arg) || isValidTemplateLiteral(arg) || isValidBinaryExpression(arg);
}

function validateArgs(args) {
  // invalid if second argument is not passed in
  if (args.length < 2) {
     return false;
  }
  return isValidString(args[1]);
}

module.exports = function(context) {
    return {
        CallExpression: function (node) {
            if (!isI18n(node.callee) || validateArgs(node.arguments)) {
              return;
            }
            context.report(node, 'Context should be provided for i18n strings.');
        },
    };
};
