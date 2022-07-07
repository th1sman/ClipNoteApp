import Note from './models/Note'

export default (io) => {
    
    io.on('connection', (socket) => {

        console.log(socket.id)

        const emitNotes = async () => {
            const notes = await Note.find()
            // Manera de enviar eventos
            io.emit('loadNotes', notes)
        }
        emitNotes();

        socket.on('newnote', data =>  {
            console.log(data)
        })
    });
}

