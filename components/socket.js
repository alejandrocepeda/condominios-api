
const sockets = {}
let clients = []
sockets.connect = (server) => {
const socketio = require('socket.io')
const io = socketio(server)

setInterval(() => {
  io.emit('status-members',clients)
}, 1500);

io.of('/status').on('connection', socket => {
    console.log(`Socker connected ${socket.id}`)
    
    io.emit('status-front',`Socker connected ${socket.id}`)
  
    socket.on('send-ping', (data) => {      
      
      clients.push({
        socketId:socket.id,
        data:data
      })

      io.emit('status-front',clients)
    })

    socket.on('disconnect', () => {
      console.log(`Socker disconnected ${socket.id}`)

      clients = clients.filter(client => {
          return (client.socketId !== socket.id)
      })

      io.emit('status-front',clients)
    })
  })
}

module.exports = sockets
