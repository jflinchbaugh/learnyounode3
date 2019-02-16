const http = require('http')
const concatStream = require('concat-stream')

const urls = [2, 3, 4].map(it => process.argv[it])

const results = []

const print = function(lst) {
    results.forEach(it =>
        console.log(it)
    )
}

const done = (lst =>
    [0, 1, 2].every(it =>
        lst[it] !== undefined
    )
)

for (const idx in [0, 1, 2]) {
    http.get(
        urls[idx],
        response => {
            response.setEncoding('utf8')
            response.pipe(
                concatStream(
                    data => {
                        results[idx] = data
                        if (done(results)) {
                            print(results)
                        }
                    }
                )
            )
        }
    )
}
