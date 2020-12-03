const getNotes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')

// Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: "Note Title"
        }
    },
    handler: function(){
        console.log('Adding a new note')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: function(){
        console.log('Listing a note')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function(){
        console.log('Reading a note')
    }
})

// Add, Remove, Read, and List Notes

console.log(yargs.argv)