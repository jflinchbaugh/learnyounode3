let fs = require('fs')
let path = require('path')

fs.readdir(
    process.argv[2],
    'utf8',
    (err, data) => {
        data.filter(
            f => path.extname(f) === ('.' + process.argv[3])
        ).forEach((f) => console.log(f))
    }
)
