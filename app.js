const getNotes = require('./notes.js')
const chalk = require('chalk')

const msg = getNotes()
console.log(msg)

console.log(chalk.red('Error!'))
console.log(chalk.dim('Fading'))

