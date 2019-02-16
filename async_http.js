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

for (idx in [0, 1, 2]) {
    const i = idx
    http.get(
        urls[i],
        response => {
            response.setEncoding('utf8')
            response.pipe(
                concatStream(
                    data => {
                        results[i] = data
                        if (done(results)) {
                            print(results)
                        }
                    }
                )
            )
        }
    )
}
