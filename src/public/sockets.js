 const socket = io()

 //Esta funcion va a pedir los datos..
 export const loadNotes = () => {
 socket.on('loadNotes', (data) => {
    console.log(data)   
 })   
}

export const saveNote = (title, description) => {
    socket.emit('newnote', {
        title,
        description
    } )
}
