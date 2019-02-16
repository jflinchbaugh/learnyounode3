const http = require('http')
const map = require('through2-map')

const port = process.argv[2]

const server = http.createServer(
    (request, response) => {
        request.pipe(
            map(chunk =>
                chunk.toString().toUpperCase()
            )
        ).pipe(response)
    }
)

server.listen(port)
