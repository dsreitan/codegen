const fs = require('fs')
const generators = require('./generators')

function dumpEnum(src, enumName, dst) {
  fs.appendFileSync(dst, `enum class ${enumName} {\n`)

  src.forEach(({ name, id }) => {
    fs.appendFileSync(dst, `    ${name} = ${id},\n`)
  })

  fs.appendFileSync(dst, '};\n\n')
}

function dumpSwitch(src, enumName, dst) {
  fs.appendFileSync(dst, `    switch ((${enumName})id) {\n`)

  src.forEach(({ name }) => {
    fs.appendFileSync(dst, `        case ${enumName}::${name}: return "${name}";\n`)
  })

  fs.appendFileSync(dst, '        default: return "UNKNOWN";\n    }\n')
}

function dumpHeader({ units, abilities, upgrades, buffs, effects }) {
  const dst = fs.openSync('./sc2_typeenums.h', 'w')

  fs.appendFileSync(
    dst,
    `/*! \\file sc2_typeenums.h
\\brief A list of enums provided for your convenience.

All units and abilities are represented as unsigned numbers in the StarCraft II engine. This file aims to provide
a type safe and named way of representing various game types. Entries in it are generated by a custom
utility located at https://github.com/cpp-sc2/codegen
*/

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

  dumpEnum(units, 'UNIT_TYPEID', dst)
  dumpEnum(abilities, 'ABILITY_ID', dst)
  dumpEnum(upgrades, 'UPGRADE_ID', dst)
  dumpEnum(buffs, 'BUFF_ID', dst)
  dumpEnum(effects, 'EFFECT_ID', dst)

  fs.appendFileSync(
    dst,
    `
//! Converts a UNIT_TYPEID into a string of the same name.
const char* UnitTypeToName(UnitTypeID id);

//! Converts a ABILITY_ID into a string of the same name.
const char* AbilityTypeToName(AbilityID id);

//! Converts a UPGRADE_ID into a string of the same name.
const char* UpgradeIDToName(UpgradeID id);

//! Converts a BUFF_ID into a string of the same name.
const char* BuffIDToName(BuffID id);

//! Converts a EFFECT_ID into a string of the same name.
const char* EffectIDToName(EffectID id);
}  // namespace sc2
`
  )

  fs.closeSync(dst)
}

function dumpCPP({ units, abilities, upgrades, buffs, effects }) {
  const dst = fs.openSync('./sc2_typeenums.cc', 'w')

  fs.appendFileSync(
    dst,
    `/*
Helper converter functions provided for your convenience.
Entries in it are generated by a custom utility located at https://github.com/cpp-sc2/codegen
*/

#include "sc2api/sc2_typeenums.h"

namespace sc2 {
`
  )

  fs.appendFileSync(dst, 'const char* UnitTypeToName(UnitTypeID id) {\n')
  dumpSwitch(units, 'UNIT_TYPEID', dst)
  fs.appendFileSync(dst, '}\n\n')

  fs.appendFileSync(dst, 'const char* AbilityTypeToName(AbilityID id) {\n')
  dumpSwitch(abilities, 'ABILITY_ID', dst)
  fs.appendFileSync(dst, '}\n\n')

  fs.appendFileSync(dst, 'const char* UpgradeIDToName(UpgradeID id) {\n')
  dumpSwitch(upgrades, 'UPGRADE_ID', dst)
  fs.appendFileSync(dst, '}\n\n')

  fs.appendFileSync(dst, 'const char* BuffIDToName(BuffID id) {\n')
  dumpSwitch(buffs, 'BUFF_ID', dst)
  fs.appendFileSync(dst, '}\n\n')

  fs.appendFileSync(dst, 'const char* EffectIDToName(EffectID id) {\n')
  dumpSwitch(effects, 'EFFECT_ID', dst)
  fs.appendFileSync(dst, '}\n\n')

  fs.appendFileSync(dst, '}  // namespace sc2')
  fs.closeSync(dst)
}

function main() {
  const args = process.argv.slice(2)

  const rawdata = fs.readFileSync(args[0])
  const stableIDs = JSON.parse(rawdata)

  const units = generators.generateUnits(stableIDs.Units)
  const abilities = generators.generateAbilities(stableIDs.Abilities)
  const upgrades = generators.generateUpgrades(stableIDs.Upgrades)
  const buffs = generators.generateBuffs(stableIDs.Buffs)
  const effects = generators.generateEffects(stableIDs.Effects)

  dumpHeader({ units, abilities, upgrades, buffs, effects })
  dumpCPP({ units, abilities, upgrades, buffs, effects })
}

if (require.main === module) main()
