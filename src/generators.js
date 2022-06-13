const _ = require('lodash')
const transform = require('./transform')

const generateEnum = (src) => {
  const transformed = src.map(transform.escapeName)
  return _.sortBy(transformed, ['name', 'id'])
}

exports.generateUnits = (src) => {
  const transformed = src.map(transform.renameForCompatibility)
  const units = generateEnum(transformed)
  return _.uniqWith(units, (arrVal, othVal) => arrVal.name.toUpperCase() === othVal.name.toUpperCase())
}

exports.generateAbilities = (src) => {
  const transformed = src.filter((it) => it.buttonname || it.remapid).map(transform.pickAbilityName)

  // NOTE (alkurbatov): Another one ability kept for backward compatibility.
  transformed.push({ id: 3674, name: 'ATTACK' })

  const generated = generateEnum(transformed)

  // NOTE (alkurbatov): Some abilities have equal names, but different IDs.
  // Usually we need the very first occurence in the list.
  return _.uniqWith(generated, (arrVal, othVal) => arrVal.name === othVal.name)
}

exports.generateUpgrades = (src) => {
  const upgrades = generateEnum(src)

  // NOTE (alkurbatov): Some upgrades have equal names, but different IDs.
  // Usually we need the very first occurence in the list.
  return _.uniqBy(upgrades, 'name')
}

exports.generateBuffs = (src) => generateEnum(src)

exports.generateEffects = (src) => {
  const transformed = src.map(({ id, name, friendlyName }) => ({ id, name: friendlyName || name }))
  return generateEnum(transformed)
}
