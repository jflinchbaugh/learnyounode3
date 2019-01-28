let http = require('http')
let concatStream = require('concat-stream')

http.get(
    process.argv[2],
    response => {
        response.setEncoding('utf8')
        response.pipe(
            concatStream(
                data => {
                    console.log(data.length)
                    console.log(data)
                }
            )
        )
    }
)
