const { escapeName } = require('transform')

test('Name is converted to uppercase', () => {
  expect(escapeName({ id: 1, name: 'Marauder' }).name).toEqual('MARAUDER')
  expect(escapeName({ id: 1, name: 'MarineShield' }).name).toEqual('MARINESHIELD')
})

test('Replace spaces with underscores', () => {
  expect(escapeName({ id: 1, name: 'Stim Pack' }).name).toEqual('STIM_PACK')
  expect(escapeName({ id: 1, name: 'Zerg Infestation Pit' }).name).toEqual('ZERG_INFESTATION_PIT')
})

test('Transform id == 0 to INVALID', () => {
  expect(escapeName({ id: 0, name: 'xxx' }).name).toEqual('INVALID')
})

test('Escape with underscore all entries starting from a number', () => {
  expect(escapeName({ id: 1, name: '1AAA' }).name).toEqual('_1AAA')
  expect(escapeName({ id: 2, name: '2AAA' }).name).toEqual('_2AAA')
  expect(escapeName({ id: 3, name: '3AAA' }).name).toEqual('_3AAA')
  expect(escapeName({ id: 4, name: '4AAA' }).name).toEqual('_4AAA')
  expect(escapeName({ id: 5, name: '5AAA' }).name).toEqual('_5AAA')
  expect(escapeName({ id: 6, name: '6AAA' }).name).toEqual('_6AAA')
  expect(escapeName({ id: 7, name: '7AAA' }).name).toEqual('_7AAA')
  expect(escapeName({ id: 8, name: '8AAA' }).name).toEqual('_8AAA')
  expect(escapeName({ id: 9, name: '9AAA' }).name).toEqual('_9AAA')
  expect(escapeName({ id: 14, name: '14AAA' }).name).toEqual('_14AAA')
  expect(escapeName({ id: 24, name: '24AAA' }).name).toEqual('_24AAA')
})
