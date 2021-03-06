const fs = require('fs')
const chalk = require('chalk')

// Get notes function
const getNotes = () => {
    return 'Your notes...'
}

//In the parenthesis, you call the arguments, in this case the title and body
//Add note function
const addNote = (title, body) => {
    const notes = loadNotes()
    
    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title
    // })
    const duplicateNote = notes.find((note) => note.title === title)

    //Dealing with duplicate notes
    if(!duplicateNote.length){
    notes.push({
            title: title,
            body:body
        })

        saveNotes(notes) 
        console.log(chalk.green.inverse("New note added."))
    } else{
        console.log(chalk.red.inverse("Note title taken"))
    }  
}

//Remove note function
const removeNote = (title) => {
    const notes = loadNotes()
    const keptNotes = notes.filter((note) => note.title !== title)
    // const keptNotes = notes.filter(function (note){
    //     return note.title !== title
    // })
    

    if (notes.length > keptNotes.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(keptNotes)
    } else{
        console.log(chalk.red.inverse('No note found'))
    }

    
}

//Save notes function
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//Load notes function
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)   
    } catch(e){
        return[]
    }
    
}

//List notes
const listNotes = () => {
    const notes = loadNotes
    notes.forEach((note) => {

    })
}

//Read notes function
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

//Export
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}