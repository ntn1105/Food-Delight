const Product=require('../../models/Product')
const {mutipleMongooseToObject} = require('../../config/until')

class webController {
    async index(req,res){
        const products=await Product.find({
            status: 'active',
            deleted: false
        })

        const newProducts=products.forEach(item =>{
            item.newPrice=(item.price*(100-item.discountPercentage)/100).toFixed(0)
            return item
        })

        res.render('client/pages/products/index',{
            titlePage: 'Danh sách sản phẩm',
            products: newProducts
        })
    }
}

module.exports=new webController