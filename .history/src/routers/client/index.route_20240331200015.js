const homeRoutes=require('./home.route')
const productRoutes=require('./product.route')

function route(app){

    app.use('/',productRoutes)
    app.use('/',productRoutes)
}

module.exports = route