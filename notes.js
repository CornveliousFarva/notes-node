const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

//In the parenthesis, you call the arguments, in this case the title and body
const addNote = function(title, body){
    const notes = loadNotes()
    notes.push({
        title: title,
        body:body
    })

    saveNotes(notes)
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)   
    } catch(e){
        return[]
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}