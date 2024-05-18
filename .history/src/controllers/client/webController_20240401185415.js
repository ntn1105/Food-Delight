const Product=require('../../models/Product')
const {mutipleMongooseToObject} = require('../../config/until')

class webController {
    async index(req,res){
        const products=await Product.find({
            status: 'active',
            deleted: false
        })
        console.log(products)
        res.render('client/pages/products/index',{
            titlePage: 'Danh sách sản phẩm',
            products: products
        })
    }
}

module.exports=new webController