const fs = require('fs')
const _ = require('lodash')

const transform = require('./transform')

// FIXME (alkurbatov): Works for OS X only.
/* eslint-disable-next-line import/no-absolute-path */
const stableIDs = require('/Users/alkurbatov/Library/Application Support/Blizzard/StarCraft II/stableid.json')

function generateEnum(src, enumName, dst) {
  fs.appendFileSync(dst, `enum class ${enumName} {\n`)

  const transformed = src.map(transform.escapeName)
  const sorted = _.sortBy(transformed, ['name', 'id'])

  sorted.forEach(({name, id}) => {
    fs.appendFileSync(dst, `    ${name} = ${id},\n`)
  })

  fs.appendFileSync(dst, '};\n')
}

function generateUnits(src, dst) {
  const transformed = src.map(transform.renameForCompatibility)
  generateEnum(transformed, 'UNIT_TYPEID', dst)
}

function generateAbilities(src, dst) {
  const transformed = src.filter((it) => it.buttonname).map(transform.pickAbilityName)
  generateEnum(transformed, 'ABILITY_ID', dst)
}

function main() {
  const dst = fs.openSync('./sc2_typeenums.h', 'w')

  fs.appendFileSync(
    dst,
    `
#pragma once

#include "sc2_types.h"

namespace sc2 {
enum class UNIT_TYPEID;
enum class ABILITY_ID;
enum class UPGRADE_ID;
enum class BUFF_ID;
enum class EFFECT_ID;

typedef SC2Type<UNIT_TYPEID> UnitTypeID;
typedef SC2Type<ABILITY_ID> AbilityID;
typedef SC2Type<UPGRADE_ID> UpgradeID;
typedef SC2Type<BUFF_ID> BuffID;
typedef SC2Type<EFFECT_ID> EffectID;

`
  )

  generateUnits(stableIDs.Units, dst)
  fs.appendFileSync(dst, '\n')

  generateAbilities(stableIDs.Abilities, dst)
  fs.appendFileSync(dst, '\n')

  generateEnum(stableIDs.Upgrades, 'UPGRADE_ID', dst)
  fs.appendFileSync(dst, '\n')

  generateEnum(stableIDs.Buffs, 'BUFF_ID', dst)
  fs.appendFileSync(dst, '\n')

  generateEnum(stableIDs.Effects, 'EFFECT_ID', dst)
  fs.appendFileSync(dst, '\n')

  fs.appendFileSync(
    dst,
    `
//! Converts a UNIT_TYPEID into a string of the same name.
const char* UnitTypeToName(UnitTypeID unit_type);

//! Converts a UPGRADE_ID into a string of the same name.
const char* UpgradeIDToName(UpgradeID upgrade_id);

//! Converts a BUFF_ID into a string of the same name.
const char* BuffIDToName(BuffID buff_id);

//! Converts a EFFECT_ID into a string of the same name.
const char* EffectIDToName(EffectID buff_id);
}  // namespace sc2
`
  )

  fs.closeSync(dst)
}

if (require.main === module) main()
