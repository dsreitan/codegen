const units = require('./units')

const neutralUnits = new Set(units.Neutral)
const protossUnits = new Set(units.Protoss)
const terranUnits = new Set(units.Terran)
const zergUnits = new Set(units.Zerg)

exports.escapeName = ({ id, name, index }) => {
  let escapedName = name

  if (id === 0) escapedName = 'INVALID'

  if (name[0] >= '0' && name[0] <= '9') escapedName = `_${name}`

  return { id, name: escapedName.toUpperCase().replace(/ /g, '_'), index }
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

exports.pickAbilityName = ({ id, name, buttonname, friendlyname, index }) => {
  if (friendlyname && friendlyname.match(
    '^(Behavior|Build|Cancel|CancelSlot|Effect|Halt|Harvest|Land|Lift|Morph|Rally|Research|Train) '
  ))
    return { id, name: friendlyname, index }

  if (friendlyname && friendlyname.match('^(Load|Unload)'))
    return { id, name: friendlyname, index }

  if (!name) return { id, name: buttonname, index }

  if (name.match(/^(Protoss|Terran|Zerg)Build$/))
    return { id, name: `Build_${buttonname}`, index }

  let res = name.match(/(Research|Train)$/)
  if (res)
    return { id, name: `${res[1]}_${buttonname}`, index }

  res = name.match(/^(Morph|General|Hallucination)/)
  if (res)
    return { id, name: `${res[1]}_${buttonname}`, index }

  return { id, name: `${name} ${buttonname}`, index }
}
