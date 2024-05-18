const webRouter=require('../product.route')

function route(app){

    app.use('/',webRouter)
}

module.exports = route