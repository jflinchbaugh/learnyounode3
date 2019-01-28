let http = require('http')
let concatStream = require('concat-stream')

let urls = [2, 3, 4].map(it => process.argv[it])

let results = []

let print = function(lst) {
    results.forEach(it =>
        console.log(it)
    )
}

let done = (lst =>
    [0, 1, 2].every(it =>
        typeof lst[it] !== 'undefined'
    )
)

for (idx in [0, 1, 2]) {
    let i = idx
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
