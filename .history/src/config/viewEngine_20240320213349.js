const path=require('path')

const viewEnginer=(app) =>{
    app.set('views', path.join(__dirname,'views'))
    app.set('view engine', 'ejs')
}

module.exports= viewEnginer