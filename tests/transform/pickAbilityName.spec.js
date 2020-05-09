const { pickAbilityName } = require('transform')

test('If friendlyname starts with "Behavior" it is used instead other names', () => {
  const ability = {
    id: 393,
    remapid: 3677,
    name: 'BansheeCloak',
    buttonname: 'CloakOff',
    friendlyname: 'Behavior CloakOff Banshee',
    index: 1,
  }

  expect(pickAbilityName(ability).name).toEqual('Behavior CloakOff Banshee')
})

test('If friendlyname starts with "Build" it is used instead other names', () => {
  const ability = {
    id: 421,
    remapid: 3682,
    name: 'BarracksAddOns',
    buttonname: 'BuildTechLabBarracks',
    friendlyname: 'Build TechLab Barracks',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Build TechLab Barracks')
})

test('If friendlyname starts with "Cancel" it is used instead other names', () => {
  const ability = {
    id: 517,
    remapid: 3659,
    name: 'StarportAddOns',
    buttonname: 'Cancel',
    friendlyname: 'Cancel StarportAddOn',
    index: 30,
  }

  expect(pickAbilityName(ability).name).toEqual('Cancel StarportAddOn')
})

test('If friendlyname starts with "CancelSlot" it is used instead other names', () => {
  const ability = {
    id: 305,
    name: 'que1',
    buttonname: 'CancelSlot',
    friendlyname: 'CancelSlot Queue1',
    index: 1,
  }

  expect(pickAbilityName(ability).name).toEqual('CancelSlot Queue1')
})

test('If friendlyname starts with "Effect" it is used instead other names', () => {
  const ability = {
    id: 1442,
    remapid: 3687,
    name: 'Blink',
    buttonname: 'Blink',
    friendlyname: 'Effect Blink Stalker',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Effect Blink Stalker')
})

test('If friendlyname starts with "Halt" it is used instead other names', () => {
  const ability = {
    id: 315,
    name: 'BuildInProgress',
    buttonname: 'Cancel',
    friendlyname: 'Halt Building',
    index: 1,
  }

  expect(pickAbilityName(ability).name).toEqual('Halt Building')
})

test('If friendlyname starts with "Harvest" it is used instead other names', () => {
  const ability = {
    id: 295,
    name: 'SCVHarvest',
    buttonname: 'Gather',
    friendlyname: 'Harvest Gather SCV',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Harvest Gather SCV')
})

test('If friendlyname starts with "Land" it is used instead other names', () => {
  const ability = {
    id: 419,
    remapid: 3678,
    name: 'CommandCenterLand',
    buttonname: 'Land',
    friendlyname: 'Land CommandCenter',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Land CommandCenter')
})

test('If friendlyname starts with "Lift" it is used instead other names', () => {
  const ability = {
    id: 485,
    remapid: 3679,
    name: 'FactoryLiftOff',
    buttonname: 'Lift',
    friendlyname: 'Lift Factory',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Lift Factory')
})

test('If friendlyname starts with "Load" it is used instead other names', () => {
  let ability = {
    id: 394,
    name: 'MedivacTransport',
    buttonname: 'MedivacLoad',
    friendlyname: 'Load Medivac',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Load Medivac')

  ability = {
    id: 416,
    name: 'CommandCenterTransport',
    buttonname: 'CommandCenterLoad',
    friendlyname: 'LoadAll CommandCenter',
    index: 4,
  }

  expect(pickAbilityName(ability).name).toEqual('LoadAll CommandCenter')
})

test('If friendlyname starts with "Morph" it is used instead other names', () => {
  const ability = {
    id: 403,
    name: 'AssaultMode',
    buttonname: 'AssaultMode',
    friendlyname: 'Morph VikingAssaultMode',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Morph VikingAssaultMode')
})

test('If friendlyname starts with "Rally" it is used instead other names', () => {
  const ability = {
    id: 203,
    remapid: 3690,
    name: 'RallyCommand',
    buttonname: 'Rally',
    friendlyname: 'Rally CommandCenter',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Rally CommandCenter')
})

test('If friendlyname starts with "Research" it is used instead other names', () => {
  const ability = {
    id: 731,
    name: 'BarracksTechLabResearch',
    buttonname: 'ResearchShieldWall',
    friendlyname: 'Research CombatShield',
    index: 1,
  }

  expect(pickAbilityName(ability).name).toEqual('Research CombatShield')
})

test('If friendlyname starts with "Unload" it is used instead other names', () => {
  let ability = {
    id: 395,
    name: 'MedivacTransport',
    buttonname: '',
    friendlyname: 'Unload Medivac',
    index: 1,
  }

  expect(pickAbilityName(ability).name).toEqual('Unload Medivac')

  ability = {
    id: 396,
    name: 'MedivacTransport',
    buttonname: 'MedivacUnloadAll',
    friendlyname: 'UnloadAllAt Medivac',
    index: 2,
  }

  expect(pickAbilityName(ability).name).toEqual('UnloadAllAt Medivac')
})

test('If friendlyname starts with "Train" it is used instead other names', () => {
  const ability = {
    id: 597,
    name: 'FactoryTrain',
    buttonname: 'BuildCyclone',
    friendlyname: 'Train Cyclone',
    index: 7,
  }

  expect(pickAbilityName(ability).name).toEqual('Train Cyclone')
})

test('If name starts with "ProtossBuild" the resulting name starts with "Build"', () => {
  const ability = {
    id: 880,
    name: 'ProtossBuild',
    buttonname: 'Nexus',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Build_Nexus')
})

test('If name starts with "TerranBuild" the resulting name starts with "Build"', () => {
  const ability = {
    id: 318,
    name: 'TerranBuild',
    buttonname: 'CommandCenter',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Build_CommandCenter')
})

test('If name starts with "ZergBuild" the resulting name starts with "Build"', () => {
  const ability = {
    id: 1152,
    name: 'ZergBuild',
    buttonname: 'Hatchery',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Build_Hatchery')
})

test('If name ends with "Train" the resulting name starts with "Train"', () => {
  const ability = {
    id: 916,
    name: 'GatewayTrain',
    buttonname: 'Zealot',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Train_Zealot')
})

test('If name ends with "Research" the resulting name starts with "Research"', () => {
  const ability = {
    id: 653,
    remapid: 3698,
    name: 'EngineeringBayResearch',
    buttonname: 'TerranInfantryWeaponsLevel2',
    index: 3,
  }

  expect(pickAbilityName(ability).name).toEqual('Research_TerranInfantryWeaponsLevel2')
})

test('If name start with "Morph" the resulting name starts with "Morph"', () => {
  const ability = {
    id: 80,
    name: 'MorphZerglingToBaneling',
    buttonname: 'Baneling',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Morph_Baneling')
})

test('If name start with "General" the resulting name starts with "General"', () => {
  const ability = {
    id: 3794,
    name: 'GeneralMove',
    buttonname: 'Move',
    friendlyname: 'Move',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('General_Move')
})

test('If name start with "Hallucination" the resulting name starts with "Hallucination"', () => {
  const ability = {
    id: 146,
    name: 'HallucinationArchon',
    buttonname: 'Archon',
    friendlyname: 'Hallucination Archon',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Hallucination_Archon')
})

test('If name is missing, buttonname is used as new ability name', () => {
  expect(pickAbilityName({ id: '1', buttonname: 'Smart', index: 1 }).name).toEqual('Smart')
  expect(pickAbilityName({ id: '1', name: '', buttonname: 'Smart', index: 1 }).name).toEqual('Smart')
})

test('If name is set, it is used as new ability name', () => {
  expect(pickAbilityName({ id: '1', name: 'Beacon', buttonname: 'Cancel', index: 2 }).name).toEqual('Beacon Cancel')
})
