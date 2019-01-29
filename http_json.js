let http = require('http')
let strftime = require('strftime')
let url = require('url')

let port = process.argv[2]

let server = http.createServer(
    (request, response) => {
        let parsedUrl = url.parse(request.url, true)

        let date = new Date(parsedUrl.query.iso)
        let time = strftime('%Y-%m-%d %H:%M', date)

        response.writeHead(200, { 'Content-Type': 'application/json' })
        if (parsedUrl.pathname === '/api/parsetime') {
            response.end(
                JSON.stringify(
                    {
                        hour: date.getHours(),
                        minute: date.getMinutes(),
                        second: date.getSeconds()
                    }
                )
            )
        } else if (parsedUrl.pathname === '/api/unixtime') {
            response.end(
                JSON.stringify(
                    {
                        unixtime: date.getTime()
                    }
                )
            )
        }
    }
)

server.listen(port)
