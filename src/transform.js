const units = require('./units')

const neutralUnits = new Set(units.Neutral)
const protossUnits = new Set(units.Protoss)
const terranUnits = new Set(units.Terran)
const zergUnits = new Set(units.Zerg)

exports.escapeName = ({ id, name }) => {
  let escapedName = name

  if (id === 0) escapedName = 'INVALID'

  if (name[0] >= '0' && name[0] <= '9') escapedName = `_${name}`

  return { id, name: escapedName.toUpperCase().replace(/ /g, '_') }
}

exports.renameForCompatibility = (it) => {
  let name = it.name.toUpperCase()

  // NOTE (alkurbatov): We need these prefixes for backward compatibility
  // with older versions of the API.
  if (neutralUnits.has(name)) name = `NEUTRAL_${name}`
  else if (protossUnits.has(name)) name = `PROTOSS_${name}`
  else if (terranUnits.has(name)) name = `TERRAN_${name}`
  else if (zergUnits.has(name)) name = `ZERG_${name}`

  return { id: it.id, name }
}

exports.pickAbilityName = ({ id, name, buttonname, friendlyname }) => {
  if (friendlyname) return { id, name: friendlyname }

  if (name) return { id, name: `${name} ${buttonname}` }

  return { id, name: buttonname }
}
