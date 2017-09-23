require('lasso').configure({
    plugins: [
        'lasso-marko'
    ]
})

require('marko').load(require.resolve('./main.marko')).render().then((result) => {
    console.log(result.toString())
}).catch((e) => {
    console.error(e)
})