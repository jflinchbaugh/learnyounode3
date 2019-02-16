const net = require('net')
const strftime = require('strftime')

const port = process.argv[2]

const server = net.createServer(
    socket => {
        const time = strftime('%Y-%m-%d %H:%M', new Date())
        socket.end(time + '\n')
    }
)

server.listen(port)
