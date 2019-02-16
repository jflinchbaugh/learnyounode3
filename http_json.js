const http = require('http')
const strftime = require('strftime')
const url = require('url')

const port = process.argv[2]

const server = http.createServer(
    (request, response) => {
        const parsedUrl = url.parse(request.url, true)

        const date = new Date(parsedUrl.query.iso)
        const time = strftime('%Y-%m-%d %H:%M', date)

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
