const Product=require('../models/Product')
const {mutipleMongooseToObject} = require('../config/until')

class webController {
    home(req,res){
        res.render('client/pages/home/index')
    };
    test(req,res){
        Product.find({})
            .then(products => {
                res.render('products',{
                    titlePage: 'Product',
                    products : products
            })})
    }
}

module.exports=new webController