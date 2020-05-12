const { renameForCompatibility } = require('transform')

test('Neutral units are renamed to be compatible with the old API', () => {
  expect(renameForCompatibility({ id: 1, name: 'BattleStationMineralField' }).name).toEqual(
    'Neutral_BattleStationMineralField'
  )
  expect(renameForCompatibility({ id: 1, name: 'BattleStationMineralField750' }).name).toEqual(
    'Neutral_BattleStationMineralField750'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleRockTowerDebris' }).name).toEqual(
    'Neutral_CollapsibleRockTowerDebris'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleRockTowerDiagonal' }).name).toEqual(
    'Neutral_CollapsibleRockTowerDiagonal'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleRockTowerPushUnit' }).name).toEqual(
    'Neutral_CollapsibleRockTowerPushUnit'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleTerranTowerDebris' }).name).toEqual(
    'Neutral_CollapsibleTerranTowerDebris'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleTerranTowerDiagonal' }).name).toEqual(
    'Neutral_CollapsibleTerranTowerDiagonal'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleTerranTowerPushUnit' }).name).toEqual(
    'Neutral_CollapsibleTerranTowerPushUnit'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleTerranTowerPushUnitRampLeft' }).name).toEqual(
    'Neutral_CollapsibleTerranTowerPushUnitRampLeft'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleTerranTowerPushUnitRampRight' }).name).toEqual(
    'Neutral_CollapsibleTerranTowerPushUnitRampRight'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleTerranTowerRampLeft' }).name).toEqual(
    'Neutral_CollapsibleTerranTowerRampLeft'
  )
  expect(renameForCompatibility({ id: 1, name: 'CollapsibleTerranTowerRampRight' }).name).toEqual(
    'Neutral_CollapsibleTerranTowerRampRight'
  )
  expect(renameForCompatibility({ id: 1, name: 'DebrisRampLeft' }).name).toEqual('Neutral_DebrisRampLeft')
  expect(renameForCompatibility({ id: 1, name: 'DebrisRampRight' }).name).toEqual('Neutral_DebrisRampRight')
  expect(renameForCompatibility({ id: 1, name: 'DestructibleCityDebris6x6' }).name).toEqual(
    'Neutral_DestructibleCityDebris6x6'
  )
  expect(renameForCompatibility({ id: 1, name: 'DestructibleDebris6x6' }).name).toEqual('Neutral_DestructibleDebris6x6')
  expect(renameForCompatibility({ id: 1, name: 'DestructibleDebrisRampDiagonalHugeBLUR' }).name).toEqual(
    'Neutral_DestructibleDebrisRampDiagonalHugeBLUR'
  )
  expect(renameForCompatibility({ id: 1, name: 'DestructibleDebrisRampDiagonalHugeULBR' }).name).toEqual(
    'Neutral_DestructibleDebrisRampDiagonalHugeULBR'
  )
  expect(renameForCompatibility({ id: 1, name: 'DestructibleRock6x6' }).name).toEqual('Neutral_DestructibleRock6x6')
  expect(renameForCompatibility({ id: 1, name: 'DestructibleRockEx1DiagonalHugeBLUR' }).name).toEqual(
    'Neutral_DestructibleRockEx1DiagonalHugeBLUR'
  )
  expect(renameForCompatibility({ id: 1, name: 'ForceField' }).name).toEqual('Neutral_ForceField')
  expect(renameForCompatibility({ id: 1, name: 'KarakFemale' }).name).toEqual('Neutral_KarakFemale')
  expect(renameForCompatibility({ id: 1, name: 'LabMineralField' }).name).toEqual('Neutral_LabMineralField')
  expect(renameForCompatibility({ id: 1, name: 'LabMineralField750' }).name).toEqual('Neutral_LabMineralField750')
  expect(renameForCompatibility({ id: 1, name: 'MineralField' }).name).toEqual('Neutral_MineralField')
  expect(renameForCompatibility({ id: 1, name: 'MineralField450' }).name).toEqual('Neutral_MineralField450')
  expect(renameForCompatibility({ id: 1, name: 'MineralField750' }).name).toEqual('Neutral_MineralField750')
  expect(renameForCompatibility({ id: 1, name: 'ProtossVespeneGeyser' }).name).toEqual('Neutral_ProtossVespeneGeyser')
  expect(renameForCompatibility({ id: 1, name: 'PurifierMineralField' }).name).toEqual('Neutral_PurifierMineralField')
  expect(renameForCompatibility({ id: 1, name: 'PurifierMineralField750' }).name).toEqual(
    'Neutral_PurifierMineralField750'
  )
  expect(renameForCompatibility({ id: 1, name: 'PurifierRichMineralField' }).name).toEqual(
    'Neutral_PurifierRichMineralField'
  )
  expect(renameForCompatibility({ id: 1, name: 'PurifierRichMineralField750' }).name).toEqual(
    'Neutral_PurifierRichMineralField750'
  )
  expect(renameForCompatibility({ id: 1, name: 'PurifierVespeneGeyser' }).name).toEqual('Neutral_PurifierVespeneGeyser')
  expect(renameForCompatibility({ id: 1, name: 'RichMineralField' }).name).toEqual('Neutral_RichMineralField')
  expect(renameForCompatibility({ id: 1, name: 'RichMineralField750' }).name).toEqual('Neutral_RichMineralField750')
  expect(renameForCompatibility({ id: 1, name: 'RichVespeneGeyser' }).name).toEqual('Neutral_RichVespeneGeyser')
  expect(renameForCompatibility({ id: 1, name: 'Scantipede' }).name).toEqual('Neutral_Scantipede')
  expect(renameForCompatibility({ id: 1, name: 'ShakurasVespeneGeyser' }).name).toEqual('Neutral_ShakurasVespeneGeyser')
  expect(renameForCompatibility({ id: 1, name: 'SpacePlatformGeyser' }).name).toEqual('Neutral_SpacePlatformGeyser')
  expect(renameForCompatibility({ id: 1, name: 'UnbuildableBricksDestructible' }).name).toEqual(
    'Neutral_UnbuildableBricksDestructible'
  )
  expect(renameForCompatibility({ id: 1, name: 'UnbuildablePlatesDestructible' }).name).toEqual(
    'Neutral_UnbuildablePlatesDestructible'
  )
  expect(renameForCompatibility({ id: 1, name: 'UtilityBot' }).name).toEqual('Neutral_UtilityBot')
  expect(renameForCompatibility({ id: 1, name: 'VespeneGeyser' }).name).toEqual('Neutral_VespeneGeyser')
  expect(renameForCompatibility({ id: 1, name: 'XelNagaTower' }).name).toEqual('Neutral_XelNagaTower')
})

test('Protoss units are renamed to be compatible with the old API', () => {
  expect(renameForCompatibility({ id: 1, name: 'Adept' }).name).toEqual('Protoss_Adept')
  expect(renameForCompatibility({ id: 1, name: 'AdeptPhaseShift' }).name).toEqual('Protoss_AdeptPhaseShift')
  expect(renameForCompatibility({ id: 1, name: 'Archon' }).name).toEqual('Protoss_Archon')
  expect(renameForCompatibility({ id: 1, name: 'Assimilator' }).name).toEqual('Protoss_Assimilator')
  expect(renameForCompatibility({ id: 1, name: 'AssimilatorRich' }).name).toEqual('Protoss_AssimilatorRich')
  expect(renameForCompatibility({ id: 1, name: 'Carrier' }).name).toEqual('Protoss_Carrier')
  expect(renameForCompatibility({ id: 1, name: 'Colossus' }).name).toEqual('Protoss_Colossus')
  expect(renameForCompatibility({ id: 1, name: 'CyberneticsCore' }).name).toEqual('Protoss_CyberneticsCore')
  expect(renameForCompatibility({ id: 1, name: 'DarkShrine' }).name).toEqual('Protoss_DarkShrine')
  expect(renameForCompatibility({ id: 1, name: 'DarkTemplar' }).name).toEqual('Protoss_DarkTemplar')
  expect(renameForCompatibility({ id: 1, name: 'Disruptor' }).name).toEqual('Protoss_Disruptor')
  expect(renameForCompatibility({ id: 1, name: 'DisruptorPhased' }).name).toEqual('Protoss_DisruptorPhased')
  expect(renameForCompatibility({ id: 1, name: 'FleetBeacon' }).name).toEqual('Protoss_FleetBeacon')
  expect(renameForCompatibility({ id: 1, name: 'Forge' }).name).toEqual('Protoss_Forge')
  expect(renameForCompatibility({ id: 1, name: 'Gateway' }).name).toEqual('Protoss_Gateway')
  expect(renameForCompatibility({ id: 1, name: 'HighTemplar' }).name).toEqual('Protoss_HighTemplar')
  expect(renameForCompatibility({ id: 1, name: 'Immortal' }).name).toEqual('Protoss_Immortal')
  expect(renameForCompatibility({ id: 1, name: 'Interceptor' }).name).toEqual('Protoss_Interceptor')
  expect(renameForCompatibility({ id: 1, name: 'Mothership' }).name).toEqual('Protoss_Mothership')
  expect(renameForCompatibility({ id: 1, name: 'MothershipCore' }).name).toEqual('Protoss_MothershipCore')
  expect(renameForCompatibility({ id: 1, name: 'Nexus' }).name).toEqual('Protoss_Nexus')
  expect(renameForCompatibility({ id: 1, name: 'Observer' }).name).toEqual('Protoss_Observer')
  expect(renameForCompatibility({ id: 1, name: 'ObserverSiegeMode' }).name).toEqual('Protoss_ObserverSiegeMode')
  expect(renameForCompatibility({ id: 1, name: 'Oracle' }).name).toEqual('Protoss_Oracle')
  expect(renameForCompatibility({ id: 1, name: 'OracleStasisTrap' }).name).toEqual('Protoss_OracleStasisTrap')
  expect(renameForCompatibility({ id: 1, name: 'Phoenix' }).name).toEqual('Protoss_Phoenix')
  expect(renameForCompatibility({ id: 1, name: 'PhotonCannon' }).name).toEqual('Protoss_PhotonCannon')
  expect(renameForCompatibility({ id: 1, name: 'Probe' }).name).toEqual('Protoss_Probe')
  expect(renameForCompatibility({ id: 1, name: 'Pylon' }).name).toEqual('Protoss_Pylon')
  expect(renameForCompatibility({ id: 1, name: 'PylonOvercharged' }).name).toEqual('Protoss_PylonOvercharged')
  expect(renameForCompatibility({ id: 1, name: 'RoboticsBay' }).name).toEqual('Protoss_RoboticsBay')
  expect(renameForCompatibility({ id: 1, name: 'RoboticsFacility' }).name).toEqual('Protoss_RoboticsFacility')
  expect(renameForCompatibility({ id: 1, name: 'Sentry' }).name).toEqual('Protoss_Sentry')
  expect(renameForCompatibility({ id: 1, name: 'ShieldBattery' }).name).toEqual('Protoss_ShieldBattery')
  expect(renameForCompatibility({ id: 1, name: 'Stalker' }).name).toEqual('Protoss_Stalker')
  expect(renameForCompatibility({ id: 1, name: 'Stargate' }).name).toEqual('Protoss_Stargate')
  expect(renameForCompatibility({ id: 1, name: 'Tempest' }).name).toEqual('Protoss_Tempest')
  expect(renameForCompatibility({ id: 1, name: 'TemplarArchive' }).name).toEqual('Protoss_TemplarArchive')
  expect(renameForCompatibility({ id: 1, name: 'TwilightCouncil' }).name).toEqual('Protoss_TwilightCouncil')
  expect(renameForCompatibility({ id: 1, name: 'VoidRay' }).name).toEqual('Protoss_VoidRay')
  expect(renameForCompatibility({ id: 1, name: 'WarpGate' }).name).toEqual('Protoss_WarpGate')
  expect(renameForCompatibility({ id: 1, name: 'WarpPrism' }).name).toEqual('Protoss_WarpPrism')
  expect(renameForCompatibility({ id: 1, name: 'WarpPrismPhasing' }).name).toEqual('Protoss_WarpPrismPhasing')
  expect(renameForCompatibility({ id: 1, name: 'Zealot' }).name).toEqual('Protoss_Zealot')
})

test('Terran units are renamed to be compatible with the old API', () => {
  expect(renameForCompatibility({ id: 1, name: 'Armory' }).name).toEqual('Terran_Armory')
  expect(renameForCompatibility({ id: 1, name: 'AutoTurret' }).name).toEqual('Terran_AutoTurret')
  expect(renameForCompatibility({ id: 1, name: 'Banshee' }).name).toEqual('Terran_Banshee')
  expect(renameForCompatibility({ id: 1, name: 'Barracks' }).name).toEqual('Terran_Barracks')
  expect(renameForCompatibility({ id: 1, name: 'BarracksFlying' }).name).toEqual('Terran_BarracksFlying')
  expect(renameForCompatibility({ id: 1, name: 'BarracksReactor' }).name).toEqual('Terran_BarracksReactor')
  expect(renameForCompatibility({ id: 1, name: 'BarracksTechLab' }).name).toEqual('Terran_BarracksTechLab')
  expect(renameForCompatibility({ id: 1, name: 'Battlecruiser' }).name).toEqual('Terran_Battlecruiser')
  expect(renameForCompatibility({ id: 1, name: 'Bunker' }).name).toEqual('Terran_Bunker')
  expect(renameForCompatibility({ id: 1, name: 'CommandCenter' }).name).toEqual('Terran_CommandCenter')
  expect(renameForCompatibility({ id: 1, name: 'CommandCenterFlying' }).name).toEqual('Terran_CommandCenterFlying')
  expect(renameForCompatibility({ id: 1, name: 'Cyclone' }).name).toEqual('Terran_Cyclone')
  expect(renameForCompatibility({ id: 1, name: 'EngineeringBay' }).name).toEqual('Terran_EngineeringBay')
  expect(renameForCompatibility({ id: 1, name: 'Factory' }).name).toEqual('Terran_Factory')
  expect(renameForCompatibility({ id: 1, name: 'FactoryFlying' }).name).toEqual('Terran_FactoryFlying')
  expect(renameForCompatibility({ id: 1, name: 'FactoryReactor' }).name).toEqual('Terran_FactoryReactor')
  expect(renameForCompatibility({ id: 1, name: 'FactoryTechLab' }).name).toEqual('Terran_FactoryTechLab')
  expect(renameForCompatibility({ id: 1, name: 'FusionCore' }).name).toEqual('Terran_FusionCore')
  expect(renameForCompatibility({ id: 1, name: 'Ghost' }).name).toEqual('Terran_Ghost')
  expect(renameForCompatibility({ id: 1, name: 'GhostAcademy' }).name).toEqual('Terran_GhostAcademy')
  expect(renameForCompatibility({ id: 1, name: 'Hellion' }).name).toEqual('Terran_Hellion')
  expect(renameForCompatibility({ id: 1, name: 'HellionTank' }).name).toEqual('Terran_HellionTank')
  expect(renameForCompatibility({ id: 1, name: 'KD8Charge' }).name).toEqual('Terran_KD8Charge')
  expect(renameForCompatibility({ id: 1, name: 'Liberator' }).name).toEqual('Terran_Liberator')
  expect(renameForCompatibility({ id: 1, name: 'LiberatorAG' }).name).toEqual('Terran_LiberatorAG')
  expect(renameForCompatibility({ id: 1, name: 'MULE' }).name).toEqual('Terran_MULE')
  expect(renameForCompatibility({ id: 1, name: 'Marauder' }).name).toEqual('Terran_Marauder')
  expect(renameForCompatibility({ id: 1, name: 'Marine' }).name).toEqual('Terran_Marine')
  expect(renameForCompatibility({ id: 1, name: 'Medivac' }).name).toEqual('Terran_Medivac')
  expect(renameForCompatibility({ id: 1, name: 'MissileTurret' }).name).toEqual('Terran_MissileTurret')
  expect(renameForCompatibility({ id: 1, name: 'Nuke' }).name).toEqual('Terran_Nuke')
  expect(renameForCompatibility({ id: 1, name: 'OrbitalCommand' }).name).toEqual('Terran_OrbitalCommand')
  expect(renameForCompatibility({ id: 1, name: 'OrbitalCommandFlying' }).name).toEqual('Terran_OrbitalCommandFlying')
  expect(renameForCompatibility({ id: 1, name: 'PlanetaryFortress' }).name).toEqual('Terran_PlanetaryFortress')
  expect(renameForCompatibility({ id: 1, name: 'PointDefenseDrone' }).name).toEqual('Terran_PointDefenseDrone')
  expect(renameForCompatibility({ id: 1, name: 'Raven' }).name).toEqual('Terran_Raven')
  expect(renameForCompatibility({ id: 1, name: 'Reactor' }).name).toEqual('Terran_Reactor')
  expect(renameForCompatibility({ id: 1, name: 'Reaper' }).name).toEqual('Terran_Reaper')
  expect(renameForCompatibility({ id: 1, name: 'Refinery' }).name).toEqual('Terran_Refinery')
  expect(renameForCompatibility({ id: 1, name: 'RefineryRich' }).name).toEqual('Terran_RefineryRich')
  expect(renameForCompatibility({ id: 1, name: 'SCV' }).name).toEqual('Terran_SCV')
  expect(renameForCompatibility({ id: 1, name: 'SensorTower' }).name).toEqual('Terran_SensorTower')
  expect(renameForCompatibility({ id: 1, name: 'SiegeTank' }).name).toEqual('Terran_SiegeTank')
  expect(renameForCompatibility({ id: 1, name: 'SiegeTankSieged' }).name).toEqual('Terran_SiegeTankSieged')
  expect(renameForCompatibility({ id: 1, name: 'Starport' }).name).toEqual('Terran_Starport')
  expect(renameForCompatibility({ id: 1, name: 'StarportFlying' }).name).toEqual('Terran_StarportFlying')
  expect(renameForCompatibility({ id: 1, name: 'StarportReactor' }).name).toEqual('Terran_StarportReactor')
  expect(renameForCompatibility({ id: 1, name: 'StarportTechLab' }).name).toEqual('Terran_StarportTechLab')
  expect(renameForCompatibility({ id: 1, name: 'SupplyDepot' }).name).toEqual('Terran_SupplyDepot')
  expect(renameForCompatibility({ id: 1, name: 'SupplyDepotLowered' }).name).toEqual('Terran_SupplyDepotLowered')
  expect(renameForCompatibility({ id: 1, name: 'TechLab' }).name).toEqual('Terran_TechLab')
  expect(renameForCompatibility({ id: 1, name: 'Thor' }).name).toEqual('Terran_Thor')
  expect(renameForCompatibility({ id: 1, name: 'ThorAP' }).name).toEqual('Terran_ThorAP')
  expect(renameForCompatibility({ id: 1, name: 'VikingAssault' }).name).toEqual('Terran_VikingAssault')
  expect(renameForCompatibility({ id: 1, name: 'VikingFighter' }).name).toEqual('Terran_VikingFighter')
  expect(renameForCompatibility({ id: 1, name: 'WidowMine' }).name).toEqual('Terran_WidowMine')
  expect(renameForCompatibility({ id: 1, name: 'WidowMineBurrowed' }).name).toEqual('Terran_WidowMineBurrowed')
})

test('Zerg units are renamed to be compatible with the old API', () => {
  expect(renameForCompatibility({ id: 1, name: 'InfestorTerran' }).name).toEqual('Zerg_InfestorTerran')
  expect(renameForCompatibility({ id: 1, name: 'Baneling' }).name).toEqual('Zerg_Baneling')
  expect(renameForCompatibility({ id: 1, name: 'BanelingBurrowed' }).name).toEqual('Zerg_BanelingBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'BanelingCocoon' }).name).toEqual('Zerg_BanelingCocoon')
  expect(renameForCompatibility({ id: 1, name: 'BanelingNest' }).name).toEqual('Zerg_BanelingNest')
  expect(renameForCompatibility({ id: 1, name: 'BroodLord' }).name).toEqual('Zerg_BroodLord')
  expect(renameForCompatibility({ id: 1, name: 'BroodLordCocoon' }).name).toEqual('Zerg_BroodLordCocoon')
  expect(renameForCompatibility({ id: 1, name: 'Broodling' }).name).toEqual('Zerg_Broodling')
  expect(renameForCompatibility({ id: 1, name: 'Changeling' }).name).toEqual('Zerg_Changeling')
  expect(renameForCompatibility({ id: 1, name: 'ChangelingMarine' }).name).toEqual('Zerg_ChangelingMarine')
  expect(renameForCompatibility({ id: 1, name: 'ChangelingMarineShield' }).name).toEqual('Zerg_ChangelingMarineShield')
  expect(renameForCompatibility({ id: 1, name: 'ChangelingZealot' }).name).toEqual('Zerg_ChangelingZealot')
  expect(renameForCompatibility({ id: 1, name: 'ChangelingZergling' }).name).toEqual('Zerg_ChangelingZergling')
  expect(renameForCompatibility({ id: 1, name: 'ChangelingZerglingWings' }).name).toEqual(
    'Zerg_ChangelingZerglingWings'
  )
  expect(renameForCompatibility({ id: 1, name: 'Corruptor' }).name).toEqual('Zerg_Corruptor')
  expect(renameForCompatibility({ id: 1, name: 'CreepTumor' }).name).toEqual('Zerg_CreepTumor')
  expect(renameForCompatibility({ id: 1, name: 'CreepTumorBurrowed' }).name).toEqual('Zerg_CreepTumorBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'CreepTumorQueen' }).name).toEqual('Zerg_CreepTumorQueen')
  expect(renameForCompatibility({ id: 1, name: 'Drone' }).name).toEqual('Zerg_Drone')
  expect(renameForCompatibility({ id: 1, name: 'DroneBurrowed' }).name).toEqual('Zerg_DroneBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'Egg' }).name).toEqual('Zerg_Egg')
  expect(renameForCompatibility({ id: 1, name: 'EvolutionChamber' }).name).toEqual('Zerg_EvolutionChamber')
  expect(renameForCompatibility({ id: 1, name: 'Extractor' }).name).toEqual('Zerg_Extractor')
  expect(renameForCompatibility({ id: 1, name: 'ExtractorRich' }).name).toEqual('Zerg_ExtractorRich')
  expect(renameForCompatibility({ id: 1, name: 'GreaterSpire' }).name).toEqual('Zerg_GreaterSpire')
  expect(renameForCompatibility({ id: 1, name: 'Hatchery' }).name).toEqual('Zerg_Hatchery')
  expect(renameForCompatibility({ id: 1, name: 'Hive' }).name).toEqual('Zerg_Hive')
  expect(renameForCompatibility({ id: 1, name: 'Hydralisk' }).name).toEqual('Zerg_Hydralisk')
  expect(renameForCompatibility({ id: 1, name: 'HydraliskBurrowed' }).name).toEqual('Zerg_HydraliskBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'HydraliskDen' }).name).toEqual('Zerg_HydraliskDen')
  expect(renameForCompatibility({ id: 1, name: 'InfestationPit' }).name).toEqual('Zerg_InfestationPit')
  expect(renameForCompatibility({ id: 1, name: 'InfestedTerransEgg' }).name).toEqual('Zerg_InfestedTerransEgg')
  expect(renameForCompatibility({ id: 1, name: 'Infestor' }).name).toEqual('Zerg_Infestor')
  expect(renameForCompatibility({ id: 1, name: 'InfestorBurrowed' }).name).toEqual('Zerg_InfestorBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'Lair' }).name).toEqual('Zerg_Lair')
  expect(renameForCompatibility({ id: 1, name: 'Larva' }).name).toEqual('Zerg_Larva')
  expect(renameForCompatibility({ id: 1, name: 'LocustMP' }).name).toEqual('Zerg_LocustMP')
  expect(renameForCompatibility({ id: 1, name: 'LocustMPFlying' }).name).toEqual('Zerg_LocustMPFlying')
  expect(renameForCompatibility({ id: 1, name: 'LurkerDenMP' }).name).toEqual('Zerg_LurkerDenMP')
  expect(renameForCompatibility({ id: 1, name: 'LurkerMP' }).name).toEqual('Zerg_LurkerMP')
  expect(renameForCompatibility({ id: 1, name: 'LurkerMPBurrowed' }).name).toEqual('Zerg_LurkerMPBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'LurkerMPEgg' }).name).toEqual('Zerg_LurkerMPEgg')
  expect(renameForCompatibility({ id: 1, name: 'Mutalisk' }).name).toEqual('Zerg_Mutalisk')
  expect(renameForCompatibility({ id: 1, name: 'NydusCanal' }).name).toEqual('Zerg_NydusCanal')
  expect(renameForCompatibility({ id: 1, name: 'NydusNetwork' }).name).toEqual('Zerg_NydusNetwork')
  expect(renameForCompatibility({ id: 1, name: 'Overlord' }).name).toEqual('Zerg_Overlord')
  expect(renameForCompatibility({ id: 1, name: 'OverlordCocoon' }).name).toEqual('Zerg_OverlordCocoon')
  expect(renameForCompatibility({ id: 1, name: 'OverlordTransport' }).name).toEqual('Zerg_OverlordTransport')
  expect(renameForCompatibility({ id: 1, name: 'Overseer' }).name).toEqual('Zerg_Overseer')
  expect(renameForCompatibility({ id: 1, name: 'OverseerSiegeMode' }).name).toEqual('Zerg_OverseerSiegeMode')
  expect(renameForCompatibility({ id: 1, name: 'ParasiticBombDummy' }).name).toEqual('Zerg_ParasiticBombDummy')
  expect(renameForCompatibility({ id: 1, name: 'Queen' }).name).toEqual('Zerg_Queen')
  expect(renameForCompatibility({ id: 1, name: 'QueenBurrowed' }).name).toEqual('Zerg_QueenBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'Ravager' }).name).toEqual('Zerg_Ravager')
  expect(renameForCompatibility({ id: 1, name: 'RavagerCocoon' }).name).toEqual('Zerg_RavagerCocoon')
  expect(renameForCompatibility({ id: 1, name: 'Roach' }).name).toEqual('Zerg_Roach')
  expect(renameForCompatibility({ id: 1, name: 'RoachBurrowed' }).name).toEqual('Zerg_RoachBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'RoachWarren' }).name).toEqual('Zerg_RoachWarren')
  expect(renameForCompatibility({ id: 1, name: 'SpawningPool' }).name).toEqual('Zerg_SpawningPool')
  expect(renameForCompatibility({ id: 1, name: 'SpineCrawler' }).name).toEqual('Zerg_SpineCrawler')
  expect(renameForCompatibility({ id: 1, name: 'SpineCrawlerUprooted' }).name).toEqual('Zerg_SpineCrawlerUprooted')
  expect(renameForCompatibility({ id: 1, name: 'Spire' }).name).toEqual('Zerg_Spire')
  expect(renameForCompatibility({ id: 1, name: 'SporeCrawler' }).name).toEqual('Zerg_SporeCrawler')
  expect(renameForCompatibility({ id: 1, name: 'SporeCrawlerUprooted' }).name).toEqual('Zerg_SporeCrawlerUprooted')
  expect(renameForCompatibility({ id: 1, name: 'SwarmHostBurrowedMP' }).name).toEqual('Zerg_SwarmHostBurrowedMP')
  expect(renameForCompatibility({ id: 1, name: 'SwarmHostMP' }).name).toEqual('Zerg_SwarmHostMP')
  expect(renameForCompatibility({ id: 1, name: 'TransportOverlordCocoon' }).name).toEqual(
    'Zerg_TransportOverlordCocoon'
  )
  expect(renameForCompatibility({ id: 1, name: 'Ultralisk' }).name).toEqual('Zerg_Ultralisk')
  expect(renameForCompatibility({ id: 1, name: 'UltraliskBurrowed' }).name).toEqual('Zerg_UltraliskBurrowed')
  expect(renameForCompatibility({ id: 1, name: 'UltraliskCavern' }).name).toEqual('Zerg_UltraliskCavern')
  expect(renameForCompatibility({ id: 1, name: 'Viper' }).name).toEqual('Zerg_Viper')
  expect(renameForCompatibility({ id: 1, name: 'Zergling' }).name).toEqual('Zerg_Zergling')
  expect(renameForCompatibility({ id: 1, name: 'ZerglingBurrowed' }).name).toEqual('Zerg_ZerglingBurrowed')
})

test('A unit not included in any subset is not renamed', () => {
  expect(renameForCompatibility({ id: 1, name: 'Ball' }).name).toEqual('Ball')
})
