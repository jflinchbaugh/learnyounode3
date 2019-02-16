const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const path = process.argv[3]

const stream = fs.createReadStream(path)

const server = http.createServer(
    (request, response) => {
        stream.pipe(response)
    }
)

server.listen(port)
