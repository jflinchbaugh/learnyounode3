const ffs = require('./ffs')

ffs(
    process.argv[2],
    process.argv[3],
    (err, data) => {
        data.forEach(f => console.log(f))
    }
)
