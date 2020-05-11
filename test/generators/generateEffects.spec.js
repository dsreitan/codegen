const { generateEffects } = require('generators')

test('Generates effects', () => {
  const effects = [
    {
      id: 0,
      name: 'Null',
      radius: null,
    },
    {
      friendlyName: 'GuardianShield',
      id: 2,
      name: 'GuardianShieldPersistent',
      radius: null,
    },
    {
      friendlyName: 'NukeDot',
      id: 7,
      name: 'NukePersistent',
      radius: null,
    },
    {
      friendlyName: 'LurkerSpines',
      id: 12,
      name: 'LurkerMP',
      radius: null,
    },
  ]

  expect(generateEffects(effects)).toEqual([
    { id: 2, name: 'GUARDIANSHIELD' },
    { id: 0, name: 'INVALID' },
    { id: 12, name: 'LURKERSPINES' },
    { id: 7, name: 'NUKEDOT' },
  ])
})
