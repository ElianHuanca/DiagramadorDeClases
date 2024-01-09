const { Socket } = require("socket.io");

class Sockets {

    constructor( io ) {

        this.io = io;        
        this.socketEvents();
    }

    socketEvents(){
        this.io.on('connection',(socket)=>{
            console.log('cliente conectado');

            socket.on('disconnect', () => {
                console.log('cliente desconectado');
            });

            socket.on('joinRoom', (data) => {
                console.log(`Un cliente se ha unido a la sala: ${data.room}`);
                socket.join(data.room);                
            } );

            socket.on('leaveRoom', (data) => {
                console.log(`Un cliente ha dejado la sala: ${data.room}`);
                socket.leave(data.room);
            });

            socket.on('insertNode', (data) => {
                console.log(`backend: nuevo nodo insertado ${data.node}`);
                this.io.to(data.room).emit('newNode', data);
            });

            socket.on('moveNode', (data) => {
                console.log(`un usuario ha movido un nodo ${data.node.data.title}`);
                this.io.to(data.room).emit('movedNode', data);
            });

            socket.on('deleteNodes', (data) => {
                console.log(`delete nodes ${data}`);
                this.io.to(data.room).emit('deletedNodes', data.nodes);
            })

            socket.on('updateNode', (data) => {
                console.log(`update node ${data}`);
                this.io.to(data.room).emit('updatedNode', data);
            })

            socket.on(`insertEdge`, (data) => {
                console.log(`backend: nuevo edge insertado ${data.edge}`);
                this.io.to(data.room).emit('newEdge', data);
            });

            socket.on('deleteEdges', (data) => {
                console.log(`delete edges ${data}`);
                this.io.to(data.room).emit('deletedEdges', data.edges);
            });

            socket.on('setLabel', (data) => {
                console.log(`set label edge ${data.edges}`);
                this.io.to(data.room).emit('changeLabel', data);
            });
        });
    }
}
module.exports = Sockets