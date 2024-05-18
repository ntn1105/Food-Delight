const homeRoutes=require('./home.route')
const productRoutes=require('./product.route')

function route(app){

    app.use('/',homeRoutes)
    app.use('/products',productRoutes)
}

module.exports = route