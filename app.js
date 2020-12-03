const getNotes = require('./notes.js')
const chalk = require('chalk')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.blue.inverse.bold('Success!')
console.log(greenMsg)

console.log(process.argv)