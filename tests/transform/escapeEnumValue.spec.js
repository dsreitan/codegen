const { escapeEnumValue } = require('transform')

test('Name is converted to uppercase', () => {
  expect(escapeEnumValue({ id: 1, name: 'Marauder' })).toEqual('MARAUDER')
  expect(escapeEnumValue({ id: 1, name: 'MarineShield' })).toEqual('MARINESHIELD')
})

test('Transform id == 0 to INVALID', () => {
  expect(escapeEnumValue({ id: 0, name: 'xxx' })).toEqual('INVALID')
})

test('Escape with _ all entries starting from a number', () => {
  expect(escapeEnumValue({ id: 1, name: '1AAA' })).toEqual('_1AAA')
  expect(escapeEnumValue({ id: 2, name: '2AAA' })).toEqual('_2AAA')
  expect(escapeEnumValue({ id: 3, name: '3AAA' })).toEqual('_3AAA')
  expect(escapeEnumValue({ id: 4, name: '4AAA' })).toEqual('_4AAA')
  expect(escapeEnumValue({ id: 5, name: '5AAA' })).toEqual('_5AAA')
  expect(escapeEnumValue({ id: 6, name: '6AAA' })).toEqual('_6AAA')
  expect(escapeEnumValue({ id: 7, name: '7AAA' })).toEqual('_7AAA')
  expect(escapeEnumValue({ id: 8, name: '8AAA' })).toEqual('_8AAA')
  expect(escapeEnumValue({ id: 9, name: '9AAA' })).toEqual('_9AAA')
  expect(escapeEnumValue({ id: 14, name: '14AAA' })).toEqual('_14AAA')
  expect(escapeEnumValue({ id: 24, name: '24AAA' })).toEqual('_24AAA')
})
