
module.exports = {
  isI18n(node) {
    return (
        node.type === 'MemberExpression' &&
        node.object.type === 'Identifier' &&
        node.object.name === 'i18n' &&
        node.property.type === 'Identifier' &&
        node.property.name === '_'
    );
  }
}
