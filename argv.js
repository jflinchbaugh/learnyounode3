console.log(
    process.argv.slice(2).map((x) => {
        return Number(x)
   }).reduce((c, v) => { return c + v })
)
