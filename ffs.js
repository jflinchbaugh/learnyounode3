const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, callback) {
    fs.readdir(
        dir,
        'utf8',
        (err, data) => {
            if (err) {
                callback(err, null)
                return
            }
            callback(
                null,
                data.filter(
                    f => path.extname(f) === ('.' + ext)
                )
            )
        }
    )
}
