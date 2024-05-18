const Product=require('../../models/Product')
const {mutipleMongooseToObject} = require('../../config/until')

class webController {
    index(req,res){
        res.render('client/pages/products/index',{
            titlePage: 'Danh sách sản phẩm'
        })
    }
}

module.exports=new webController