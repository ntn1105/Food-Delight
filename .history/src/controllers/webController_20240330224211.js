const Product=require('../models/Product')
const {mutipleMongooseToObject} = require('../config/until')

class webController {
    home(req,res){
        res.render('index',{ titlePage : 'hello',message :'12345'})
    };
    test(req,res){
        Product.find({})
            .then(products => {
                res.render('products',{
                products : mutipleMongooseToObject(products)
            })})
    }
}

module.exports=new webController