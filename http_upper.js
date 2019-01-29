let http = require('http')
let map = require('through2-map')

let port = process.argv[2]

let server = http.createServer(
    (request, response) => {
        request.pipe(
            map(chunk =>
                chunk.toString().toUpperCase()
            )
        ).pipe(response)
    }
)

server.listen(port)
