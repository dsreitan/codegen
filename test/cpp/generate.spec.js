jest.mock('fs')
const fs = require('fs')

const generate = require('cpp')

const stableIDs4102 = require('../../assets/4.10.2-stableid.json')
const stableIDs4114 = require('../../assets/4.11.4-stableid.json')
const stableIDs4120 = require('../../assets/4.12.0-stableid.json')

test('Generates c++ code for Sc2 v4.10.2', () => {
  generate(stableIDs4102)
  expect(fs.generatedHeader).toMatchSnapshot()
  expect(fs.generatedCPP).toMatchSnapshot()
})

test('Generates c++ code for Sc2 v4.11.4', () => {
  generate(stableIDs4114)
  expect(fs.generatedHeader).toMatchSnapshot()
  expect(fs.generatedCPP).toMatchSnapshot()
})

test('Generates c++ code for Sc2 v4.12.0', () => {
  generate(stableIDs4120)
  expect(fs.generatedHeader).toMatchSnapshot()
  expect(fs.generatedCPP).toMatchSnapshot()
})
