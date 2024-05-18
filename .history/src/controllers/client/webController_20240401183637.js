const Product=require('../../models/Product')
const {mutipleMongooseToObject} = require('../../config/until')

class webController {
    index(req,res){
        Product.find({})
        .then(products =>{
            res.render('client/pages/products/index',{
                titlePage: 'Danh sách sản phẩm',
                products: products
            })
        })
        
    }
}

module.exports=new webController