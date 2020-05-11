const { pickAbilityName } = require('transform')

test('If friendlyname starts with "Attack" it is used instead other names', () => {
  const ability = {
    id: 1682,
    remapid: 3674,
    name: 'AttackRedirect',
    buttonname: 'AttackRedirect',
    friendlyname: 'Attack Redirect',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Attack Redirect')
})

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

test('If friendlyname starts with "Hallucination" it is used instead other names', () => {
  const ability = {
    id: 2389,
    name: 'HallucinationDisruptor',
    buttonname: 'WarpinDisruptor',
    friendlyname: 'Hallucination Disruptor',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Hallucination Disruptor')
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

test('If friendlyname starts with "Burrow" it is used instead other names', () => {
  let ability = {
    id: 1390,
    name: 'BurrowZerglingDown',
    buttonname: 'BurrowDown',
    friendlyname: 'BurrowDown Zergling',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('BurrowDown Zergling')

  ability = {
    id: 1392,
    name: 'BurrowZerglingUp',
    buttonname: 'BurrowUp',
    friendlyname: 'BurrowUp Zergling',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('BurrowUp Zergling')
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

test('If friendlyname starts with "Stop" it is used instead other names', () => {
  const ability = {
    id: 1691,
    remapid: 3665,
    name: 'StopRedirect',
    buttonname: 'StopRedirect',
    friendlyname: 'Stop Redirect',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Stop Redirect')
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

test('If friendlyname starts with "TrainWarp" it is used instead other names', () => {
  const ability = {
    id: 1419,
    name: 'WarpGateTrain',
    buttonname: 'WarpInAdept',
    friendlyname: 'TrainWarp Adept',
    index: 6,
  }

  expect(pickAbilityName(ability).name).toEqual('TrainWarp Adept')
})

test('If buttonname starts with "RavenResearch" the resulting name starts with "Research"', () => {
  const ability = {
    id: 806,
    name: 'StarportTechLabResearch',
    buttonname: 'RavenResearchEnhancedMunitions',
    index: 16,
  }

  expect(pickAbilityName(ability).name).toEqual('Research_EnhancedMunitions')
})

test('If buttonname starts with "Research" the resulting name starts with "Research"', () => {
  const ability = {
    id: 822,
    name: 'GhostAcademyResearch',
    buttonname: 'ResearchEnhancedShockwaves',
    index: 2,
  }

  expect(pickAbilityName(ability).name).toEqual('Research_EnhancedShockwaves')
})

test('If buttonname starts with "Attack" the resulting name starts with "Attack"', () => {
  const ability = {
    id: 2048,
    remapid: 3674,
    name: 'attackProtossBuilding',
    buttonname: 'AttackBuilding',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Attack_AttackBuilding')
})

test('If name is with "WarpGateTrain" the resulting name starts with "TrainWarp"', () => {
  const ability = {
    id: 1416,
    name: 'WarpGateTrain',
    buttonname: 'HighTemplar',
    index: 3,
  }

  expect(pickAbilityName(ability).name).toEqual('TrainWarp_HighTemplar')
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

test('If name starts with "Train" the resulting name starts with "Train"', () => {
  const ability = {
    id: 1632,
    name: 'TrainQueen',
    buttonname: 'Queen',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Train_Queen')
})

test('If name starts with "NexusTrain" the resulting name starts with "Train"', () => {
  const ability = {
    id: 1853,
    name: 'NexusTrainMothershipCore',
    buttonname: 'MothershipCore',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Train_MothershipCore')
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

test('If name start with "UpgradeTo" the resulting name starts with "Morph"', () => {
  const ability = {
    id: 1450,
    name: 'UpgradeToPlanetaryFortress',
    buttonname: 'PlanetaryFortress',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Morph_PlanetaryFortress')
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

test('If ability causes effect, the resulting name starts with "Effect"', () => {
  let ability = {
    name: 'RavenBuild',
    buttonname: 'AutoTurret',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_AutoTurret')

  ability = {
    name: 'AdeptPhaseShift',
    buttonname: 'AdeptPhaseShift',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_AdeptPhaseShift')

  ability = {
    name: 'AmorphousArmorcloud',
    buttonname: 'AmorphousArmorcloud',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_AmorphousArmorcloud')

  ability = {
    name: 'BlindingCloud',
    buttonname: 'BlindingCloud',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_BlindingCloud')

  ability = {
    name: 'CalldownMULE',
    buttonname: 'CalldownMULE',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_CalldownMULE')

  ability = {
    name: 'CausticSpray',
    buttonname: 'CausticSpray',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_CausticSpray')

  ability = {
    name: 'Contaminate',
    buttonname: 'Contaminate',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_Contaminate')

  ability = {
    name: 'EMP',
    buttonname: 'EMP',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_EMP')

  ability = {
    name: 'Explode',
    buttonname: 'Explode',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_Explode')

  ability = {
    name: 'Feedback',
    buttonname: 'Feedback',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_Feedback')

  ability = {
    name: 'ForceField',
    buttonname: 'ForceField',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_ForceField')

  ability = {
    name: 'FungalGrowth',
    buttonname: 'FungalGrowth',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_FungalGrowth')

  ability = {
    name: 'GravitonBeam',
    buttonname: 'GravitonBeam',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_GravitonBeam')

  ability = {
    name: 'GuardianShield',
    buttonname: 'GuardianShield',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_GuardianShield')

  ability = {
    name: 'Heal',
    buttonname: 'Heal',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_Heal')

  ability = {
    name: 'HunterSeekerMissile',
    buttonname: 'HunterSeekerMissile',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_HunterSeekerMissile')

  ability = {
    name: 'InfestedTerrans',
    buttonname: 'InfestedTerrans',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_InfestedTerrans')

  ability = {
    name: 'KD8Charge',
    buttonname: 'KD8Charge',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_KD8Charge')

  ability = {
    name: 'LockOn',
    buttonname: 'LockOn',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_LockOn')

  ability = {
    name: 'NeuralParasite',
    buttonname: 'NeuralParasite',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_NeuralParasite')

  ability = {
    name: 'TacNukeStrike',
    buttonname: 'NukeCalldown',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_NukeCalldown')

  ability = {
    name: 'OracleRevelation',
    buttonname: 'OracleRevelation',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_OracleRevelation')

  ability = {
    name: 'ViperParasiticBombRelay',
    buttonname: 'ParasiticBomb',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_ParasiticBomb')

  ability = {
    name: 'PointDefenseDrone',
    buttonname: 'PointDefenseDrone',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_PointDefenseDrone')

  ability = {
    name: 'PsiStorm',
    buttonname: 'PsiStorm',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_PsiStorm')

  ability = {
    name: 'Scan',
    buttonname: 'Scan',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_Scan')

  ability = {
    name: 'SpawnChangeling',
    buttonname: 'SpawnChangeling',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_SpawnChangeling')

  ability = {
    name: 'SupplyDrop',
    buttonname: 'SupplyDrop',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_SupplyDrop')

  ability = {
    name: 'Transfusion',
    buttonname: 'Transfusion',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_Transfusion')

  ability = {
    name: 'TempestDisruptionBlast',
    buttonname: 'TempestDisruptionBlast',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_TempestDisruptionBlast')

  ability = {
    name: 'ViperConsume',
    buttonname: 'ViperConsume',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_ViperConsume')

  ability = {
    name: 'WidowMineAttack',
    buttonname: 'WidowMineAttack',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_WidowMineAttack')

  ability = {
    name: 'YamatoGun',
    buttonname: 'YamatoGun',
  }
  expect(pickAbilityName(ability).name).toEqual('Effect_YamatoGun')
})

test('If ability changes unit state, the resulting name starts with "Morph"', () => {
  let ability = {
    name: 'SiegeMode',
    buttonname: 'SiegeMode',
  }
  expect(pickAbilityName(ability).name).toEqual('Morph_SiegeMode')

  ability = {
    name: 'SpineCrawlerRoot',
    buttonname: 'SpineCrawlerRoot',
  }
  expect(pickAbilityName(ability).name).toEqual('Morph_SpineCrawlerRoot')

  ability = {
    name: 'SpineCrawlerUproot',
    buttonname: 'SpineCrawlerUproot',
  }
  expect(pickAbilityName(ability).name).toEqual('Morph_SpineCrawlerUproot')

  ability = {
    name: 'SporeCrawlerRoot',
    buttonname: 'SporeCrawlerRoot',
  }
  expect(pickAbilityName(ability).name).toEqual('Morph_SporeCrawlerRoot')

  ability = {
    name: 'SporeCrawlerUproot',
    buttonname: 'SporeCrawlerUproot',
  }
  expect(pickAbilityName(ability).name).toEqual('Morph_SporeCrawlerUproot')

  ability = {
    name: 'Unsiege',
    buttonname: 'Unsiege',
  }
  expect(pickAbilityName(ability).name).toEqual('Morph_Unsiege')
})

test('If name is missing, buttonname is used as new ability name', () => {
  expect(pickAbilityName({ id: '1', buttonname: 'Smart', index: 1 }).name).toEqual('Smart')
  expect(pickAbilityName({ id: '1', name: '', buttonname: 'Smart', index: 1 }).name).toEqual('Smart')
})

test('If name equals to nuttonname, name is used as new ability name', () => {
  const ability = {
    id: 3679,
    name: 'Lift',
    buttonname: 'Lift',
    friendlyname: 'Lift',
    index: 0,
  }

  expect(pickAbilityName(ability).name).toEqual('Lift')
})

test('If name is set, it is used as new ability name', () => {
  expect(pickAbilityName({ id: '1', name: 'Beacon', buttonname: 'Cancel', index: 2 }).name).toEqual('Beacon Cancel')
})
