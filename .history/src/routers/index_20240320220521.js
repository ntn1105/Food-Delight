const webRouter=require('./web')

function route(app){

    app.use('/',webRouter)
}