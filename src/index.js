const fs = require('fs')
const { EOL } = require('os')
const _ = require('lodash')

const transform = require('./transform')

// FIXME (alkurbatov): Works for OS X only.
/* eslint-disable-next-line import/no-absolute-path */
const stableIDs = require('/Users/alkurbatov/Library/Application Support/Blizzard/StarCraft II/stableid.json')

function dumpEnum(src, dst) {
  const sorted = _.sortBy(src, ['name', 'id'])

  for (let i = 0; i < sorted.length; i += 1) {
    const { id } = sorted[i]
    const name = transform.escapeEnumValue({ ...sorted[i] })

    fs.appendFileSync(dst, `    ${name} = ${id},${EOL}`)
  }
}

function generateUnits(src, dst) {
  fs.appendFileSync(dst, `enum class UNIT_TYPEID {${EOL}`)

  const transformed = src.Units.map(transform.renameForCompatibility)

  dumpEnum(transformed, dst)
  fs.appendFileSync(dst, `};${EOL}`)
}

function generateUpgrades(src, dst) {
  fs.appendFileSync(dst, `enum class UPGRADE_ID {${EOL}`)

  const transformed = src.Upgrades.map((it) => ({ id: it.id, name: it.name.toUpperCase() }))

  dumpEnum(transformed, dst)
  fs.appendFileSync(dst, `};${EOL}`)
}

function generateBuffs(src, dst) {
  fs.appendFileSync(dst, `enum class BUFF_ID {${EOL}`)

  const transformed = src.Buffs.map((it) => ({ id: it.id, name: it.name.toUpperCase() }))

  dumpEnum(transformed, dst)
  fs.appendFileSync(dst, `};${EOL}`)
}

function generateEffects(src, dst) {
  fs.appendFileSync(dst, `enum class EFFECT_ID {${EOL}`)

  const transformed = src.Effects.map((it) => ({ id: it.id, name: it.name.toUpperCase() }))

  dumpEnum(transformed, dst)
  fs.appendFileSync(dst, `};${EOL}`)
}

function main() {
  const dst = fs.openSync('./sc2_typeenums.h', 'w')

  fs.appendFileSync(dst, `#pragma once${EOL}`)
  fs.appendFileSync(dst, EOL)
  fs.appendFileSync(dst, `#include "sc2_types.h"${EOL}`)
  fs.appendFileSync(dst, EOL)
  fs.appendFileSync(dst, `namespace sc2 {${EOL}`)
  fs.appendFileSync(dst, `enum class UNIT_TYPEID;${EOL}`)
  fs.appendFileSync(dst, `enum class ABILITY_ID;${EOL}`)
  fs.appendFileSync(dst, `enum class UPGRADE_ID;${EOL}`)
  fs.appendFileSync(dst, `enum class BUFF_ID;${EOL}`)
  fs.appendFileSync(dst, `enum class EFFECT_ID;${EOL}`)
  fs.appendFileSync(dst, `typedef SC2Type<UNIT_TYPEID> UnitTypeID;${EOL}`)
  fs.appendFileSync(dst, `typedef SC2Type<ABILITY_ID> AbilityID;${EOL}`)
  fs.appendFileSync(dst, `typedef SC2Type<UPGRADE_ID> UpgradeID;${EOL}`)
  fs.appendFileSync(dst, `typedef SC2Type<BUFF_ID> BuffID;${EOL}`)
  fs.appendFileSync(dst, `typedef SC2Type<EFFECT_ID> EffectID;${EOL}`)
  fs.appendFileSync(dst, EOL)

  generateUnits(stableIDs, dst)
  fs.appendFileSync(dst, EOL)

  generateUpgrades(stableIDs, dst)
  fs.appendFileSync(dst, EOL)

  generateBuffs(stableIDs, dst)
  fs.appendFileSync(dst, EOL)

  generateEffects(stableIDs, dst)
  fs.appendFileSync(dst, EOL)

  fs.appendFileSync(dst, `//! Converts a UNIT_TYPEID into a string of the same name.${EOL}`)
  fs.appendFileSync(dst, `const char* UnitTypeToName(UnitTypeID unit_type);${EOL}`)

  fs.appendFileSync(dst, EOL)
  fs.appendFileSync(dst, `//! Converts a ABILITY_ID into a string of the same name.${EOL}`)
  fs.appendFileSync(dst, `const char* AbilityTypeToName(AbilityID ability_type);${EOL}`)

  fs.appendFileSync(dst, EOL)
  fs.appendFileSync(dst, `//! Converts a UPGRADE_ID into a string of the same name.${EOL}`)
  fs.appendFileSync(dst, `const char* UpgradeIDToName(UpgradeID upgrade_id);${EOL}`)

  fs.appendFileSync(dst, EOL)
  fs.appendFileSync(dst, `//! Converts a BUFF_ID into a string of the same name.${EOL}`)
  fs.appendFileSync(dst, `const char* BuffIDToName(BuffID buff_id);${EOL}`)

  fs.appendFileSync(dst, EOL)
  fs.appendFileSync(dst, `//! Converts a EFFECT_ID into a string of the same name.${EOL}`)
  fs.appendFileSync(dst, `const char* EffectIDToName(EffectID buff_id);${EOL}`)

  fs.appendFileSync(dst, EOL)
  fs.appendFileSync(dst, `}  // namespace sc2${EOL}`)

  fs.closeSync(dst)
}

if (require.main === module) main()
