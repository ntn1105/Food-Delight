const Product=require('../../models/Product')
const {mutipleMongooseToObject} = require('../../config/until')

class webController {
    index(req,res){
        Product.find({})
        .then((req,res)=>{
            res.render('client/pages/products/index')
        })
    }
}

module.exports=new webController