const path=require('path')
const express = require('express')

const viewEnginer=(app) =>{
    app.set('views', path.join('./src','views'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join('./src','public')))

}

module.exports= viewEnginer