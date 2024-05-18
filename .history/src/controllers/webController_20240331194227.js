const Product=require('../models/Product')
const {mutipleMongooseToObject} = require('../config/until')

class webController {
    home(req,res){
        res.render('client/pages/home/index')
    };
    test(req,res){
        res.render('client/pages/products/index')
    }
}

module.exports=new webController