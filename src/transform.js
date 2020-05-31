const abilities = require('./abilities')
const units = require('./units')

const abilityEffects = new Set(abilities.Effects)
const abilityMorphs = new Set(abilities.Morphs)
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
  if (
    friendlyname &&
    friendlyname.match(
      /* eslint-disable-next-line max-len */
      '^(Attack|Behavior|Build|Cancel|CancelSlot|Effect|Halt|Hallucination|Harvest|Land|Lift|Morph|Rally|Research|Stop|Train|TrainWarp) '
    )
  )
    return { id, name: friendlyname, index }

  if (friendlyname && friendlyname.match('^(Burrow|Load|Unload)')) return { id, name: friendlyname, index }

  if (abilityEffects.has(buttonname)) return { id, name: `Effect_${buttonname}`, index }

  if (abilityMorphs.has(buttonname)) return { id, name: `Morph_${buttonname}`, index }

  let res = buttonname.match(/^(Raven)?Research(.*)$/)
  if (res) return { id, name: `Research_${res[2]}`, index }

  if (buttonname.startsWith('Attack')) return { id, name: `Attack_${buttonname}`, index }

  if (!name) return { id, name: buttonname, index }

  if (name === 'WarpGateTrain') return { id, name: `TrainWarp_${buttonname}`, index }

  if (name.match(/^(Protoss|Terran|Zerg)Build$/)) return { id, name: `Build_${buttonname}`, index }

  res = name.match(/(Research|Train)$/)
  if (res) return { id, name: `${res[1]}_${buttonname}`, index }

  res = name.match(/^(NexusTrain|Train)/)
  if (res) return { id, name: `Train_${buttonname}`, index }

  res = name.match(/^(Morph|General)/)
  if (res) return { id, name: `${res[1]}_${buttonname}`, index }

  if (name.startsWith('UpgradeTo')) return { id, name: `Morph_${buttonname}`, index }

  if (name === buttonname) return { id, name: `${buttonname}`, index }

  return { id, name: `${name} ${buttonname}`, index }
}
