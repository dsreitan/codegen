const _ = require('lodash')
const transform = require('./transform')

const generateEnum = (src) => {
  const transformed = src.map(transform.escapeName)
  return _.sortBy(transformed, ['name', 'id'])
}

exports.generateUnits = (src) => {
  const transformed = src.map(transform.renameForCompatibility)
  return generateEnum(transformed)
}

exports.generateAbilities = (src) => {
  const transformed = src.filter((it) => it.buttonname).map(transform.pickAbilityName)
  const generated = generateEnum(transformed)

  // NOTE (alkurbatov): Some abilities have unique names, but different IDs.
  // Usually we need the very first occurence in the list.
  const unique = _.uniqWith(generated, (arrVal, othVal) => arrVal.name === othVal.name && arrVal.index > othVal.index)

  // NOTE (alkurbatov): Some abilities are hard to check for uniqueness.
  // Do dirty work and fix it by hand.
  return unique.filter((it) => it.id !== 3670)
}

exports.generateUpgrades = (src) => {
  const upgrades = generateEnum(src)

  // NOTE (alkurbatov): Some upgrades have unique names, but different IDs.
  // Usually we need the very first occurence in the list.
  return _.uniqBy(upgrades, 'name')
}

exports.generateBuffs = (src) => generateEnum(src)

exports.generateEffects = (src) => generateEnum(src)
