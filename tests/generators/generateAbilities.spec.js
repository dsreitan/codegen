const { generateAbilities } = require('generators')

test('Only one version of unloadunit is left', () => {
  const abilities = [
    {
      id: 3670,
      name: 'TransportUnloadUnit',
      buttonname: 'TransportUnloadUnit',
      friendlyname: 'UnloadUnit',
      index: 0,
    },
    {
      id: 3796,
      name: 'GeneralUnloadUnit',
      buttonname: 'UnloadUnit',
      friendlyname: 'UnloadUnit',
      index: 0,
    },
  ]

  expect(generateAbilities(abilities)).toEqual([{ id: 3796, name: 'UNLOADUNIT', index: 0 }])
})

test('Only unique items kept in the list', () => {
  const abilities = [
    {
      id: 2840,
      name: 'AdvancedConstruction',
      buttonname: 'Cancel',
      index: 0,
    },
    {
      id: 2841,
      name: 'AdvancedConstruction',
      buttonname: 'Cancel',
      index: 1,
    },
  ]

  expect(generateAbilities(abilities)).toEqual([{ id: 2840, name: 'ADVANCEDCONSTRUCTION_CANCEL', index: 0 }])
})
