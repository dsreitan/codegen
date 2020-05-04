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

exports.renameForCompatibility = ({ id, name }) => {
  let newName = name

  // NOTE (alkurbatov): We need these prefixes for backward compatibility
  // with older versions of the API.
  if (neutralUnits.has(newName)) newName = `Neutral_${name}`
  else if (protossUnits.has(newName)) newName = `Protoss_${name}`
  else if (terranUnits.has(newName)) newName = `Terran_${name}`
  else if (zergUnits.has(newName)) newName = `Zerg_${name}`

  return { id, name: newName }
}

exports.pickAbilityName = ({ id, name, buttonname, friendlyname }) => {
  if (friendlyname) return { id, name: friendlyname }

  if (name) return { id, name: `${name} ${buttonname}` }

  return { id, name: buttonname }
}
