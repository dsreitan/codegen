const { pickAbilityName } = require('transform')

test('If friendly name is set, it is used as new ability name', () => {
  const item = {
    id: '1',
    name: 'Blink',
    buttonname: 'Blink',
    friendlyname: 'Effect Blink Stalker',
  }
  expect(pickAbilityName(item).name).toEqual('Effect Blink Stalker')
})

test('If name is missing, buttonname is used as new ability name', () => {
  expect(pickAbilityName({ id: '1', buttonname: 'Smart' }).name).toEqual('Smart')
  expect(pickAbilityName({ id: '1', name: '', buttonname: 'Smart' }).name).toEqual('Smart')
})

test('If name is set, it is used as new ability name', () => {
  expect(pickAbilityName({ id: '1', name: 'Beacon', buttonname: 'Cancel' }).name).toEqual('Beacon Cancel')
})
