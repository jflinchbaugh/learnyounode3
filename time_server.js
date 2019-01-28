let net = require('net')
let strftime = require('strftime')

let port = process.argv[2]

let server = net.createServer(
    socket => {
        let time = strftime('%Y-%m-%d %H:%M', new Date())
        socket.end(time + '\n')
    }
)

server.listen(port)
