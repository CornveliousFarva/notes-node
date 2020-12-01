const getNotes = require('./notes.js')
const chalk = require('chalk')

const msg = getNotes()
console.log(msg)

console.log(chalk.green('Success!'))
console.log(chalk.dim('Fading'))
console.log(chalk.bgYellowBright('I like that the Chargers moved to LA'))

