const { generateUpgrades } = require('generators')

test('Only upgrades with unique names kept in the list', () => {
  const upgrades = [
    {
      id: 10,
      name: 'NeosteelFrame',
    },
    {
      id: 153,
      name: 'NeoSteelFrame',
    },
  ]

  expect(generateUpgrades(upgrades)).toEqual([{ id: 10, name: 'NEOSTEELFRAME' }])
})
