const http = require('http').createServer()

const io = require('socket.io')(http, {
    cors: { origin: '*'}
})

// Listen client connection
io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('message', (message) => {
        console.log('message: ' + message)
        // Send message to all connected clients
        io.emit('message', `Anonymous-${socket.id.substr(0,2)}: ${message}`)
    })
})

// Listen to port 8080
// http.listen(8080, () => console.log('Listening on http://localhost:8080'))

const port = process.env.PORT || 8080;
http.listen(port, () => console.log(`Listening on port ${port}`));