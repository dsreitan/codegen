const _ = require('lodash')
const transform = require('./transform')

exports.generateEnum = (src) => {
  const transformed = src.map(transform.escapeName)
  return _.sortBy(transformed, ['name', 'id'])
}

exports.generateUnits = (src) => {
  const transformed = src.map(transform.renameForCompatibility)
  return exports.generateEnum(transformed)
}

exports.generateAbilities = (src) => {
  const transformed = src.filter((it) => it.buttonname).map(transform.pickAbilityName)

  // NOTE (alkurbatov): Some abilities have unique names, but different IDs.
  // Usually we need the very first occurence in the list.
  const unique = _.uniqWith(transformed, (arrVal, othVal) => arrVal.name === othVal.name && arrVal.index > othVal.index)

  // NOTE (alkurbatov): Some abilities are hard to check for uniqueness.
  // Do dirty work and fix it by hand.
  const patched = unique.filter((it) => it.id !== 3670)

  return exports.generateEnum(patched)
}
