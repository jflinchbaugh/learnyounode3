let http = require('http')
let fs = require('fs')

let port = process.argv[2]
let path = process.argv[3]

let stream = fs.createReadStream(path)

let server = http.createServer(
    (request, response) => {
        stream.pipe(response)
    }
)

server.listen(port)
