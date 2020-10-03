const fs = require('fs')
const generate = require('./cpp')

function main() {
  const args = process.argv.slice(2)

  const rawdata = fs.readFileSync(args[0])
  const stableIDs = JSON.parse(rawdata)

  generate(stableIDs)
}

if (require.main === module) main()
