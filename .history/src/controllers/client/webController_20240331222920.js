const Product=require('../../models/Product')
const {mutipleMongooseToObject} = require('../../config/until')

class webController {
    test(req,res){
        res.render('client/pages/products/index')
    }
}

module.exports=new webController