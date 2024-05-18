const Product=require('../models/Product')
const {mutipleMongooseToObject} = require('../config/until')

class webController {
    home(req,res){
        res.render('index',{ titlePage : 'hello',message :'12345'})
    };
    test(req,res){
        const product= Product.find({})
            res.render('products',{
                product :product
            })
    }
}

module.exports=new webController