const fs = require('fs')
const generateCpp = require('./cpp')
const generateCsharp = require('./csharp')

function main() {
  const args = process.argv.slice(2)

  const rawdata = fs.readFileSync(args[0])
  const stableIDs = JSON.parse(rawdata)

  generateCpp(stableIDs)
  generateCsharp(stableIDs)
}

if (require.main === module) main()
