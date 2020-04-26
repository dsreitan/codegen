const fs = require('fs')
const { EOL } = require('os')
const _ = require('lodash')

const units = require('./units')

// FIXME (alkurbatov): Works for OS X only.
/* eslint-disable-next-line import/no-absolute-path */
const stableIDs = require('/Users/alkurbatov/Library/Application Support/Blizzard/StarCraft II/stableid.json')

const neutralUnits = new Set(units.Neutral)
const protossUnits = new Set(units.Protoss)
const terranUnits = new Set(units.Terran)
const zergUnits = new Set(units.Zerg)

function dumpEnum(src, dst) {
  const sorted = _.sortBy(src, ['name', 'id'])

  for (let i = 0; i < sorted.length; i += 1) {
    const { id } = sorted[i]
    let { name } = sorted[i]

    // NOTE (alkurbatov): We use 'INVALID' instead.
    if (id === 0) name = 'INVALID'

    // NOTE (alkurbatov): Some types start with a number.
    if (name[0] >= '0' && name[0] <= '9') name = `_${name}`

    fs.appendFileSync(dst, `    ${name} = ${id},${EOL}`)
  }
}

function generateUnits(src, dst) {
  fs.appendFileSync(dst, `enum class UNIT_TYPEID {${EOL}`)

  const transformed = src.Units.map((it) => {
    let name = it.name.toUpperCase()

    // NOTE (alkurbatov): We need these prefixes for backward compatibility
    // with older versions of the API.
    if (neutralUnits.has(name)) name = `NEUTRAL_${name}`
    else if (protossUnits.has(name)) name = `PROTOSS_${name}`
    else if (terranUnits.has(name)) name = `TERRAN_${name}`
    else if (zergUnits.has(name)) name = `ZERG_${name}`

    return { id: it.id, name }
  })

  dumpEnum(transformed, dst)
  fs.appendFileSync(dst, `};${EOL}`)
}

function generateUpgrades(src, dst) {
  fs.appendFileSync(dst, `enum class UPGRADE_ID {${EOL}`)

  const transformed = src.Units.map((it) => ({ id: it.id, name: it.name.toUpperCase() }))

  dumpEnum(transformed, dst)
  fs.appendFileSync(dst, `};${EOL}`)
}

function generateBuffs(src, dst) {
  fs.appendFileSync(dst, `enum class BUFF_ID {${EOL}`)

  const transformed = src.Units.map((it) => ({ id: it.id, name: it.name.toUpperCase() }))

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
  fs.appendFileSync(dst, `typedef SC2Type<UNIT_TYPEID> UnitTypeID;${EOL}`)
  fs.appendFileSync(dst, `typedef SC2Type<ABILITY_ID> AbilityID;${EOL}`)
  fs.appendFileSync(dst, `typedef SC2Type<UPGRADE_ID> UpgradeID;${EOL}`)
  fs.appendFileSync(dst, `typedef SC2Type<BUFF_ID> BuffID;${EOL}`)
  fs.appendFileSync(dst, EOL)

  generateUnits(stableIDs, dst)
  fs.appendFileSync(dst, EOL)

  generateUpgrades(stableIDs, dst)
  fs.appendFileSync(dst, EOL)

  generateBuffs(stableIDs, dst)
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
  fs.appendFileSync(dst, `}  // namespace sc2${EOL}`)

  fs.closeSync(dst)
}

if (require.main === module) main()
