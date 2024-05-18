const Product=require('../../models/Product')
const {mutipleMongooseToObject} = require('../../config/until')

class webController {
    //[GET]/products
    async index(req,res){
        const products=await Product.find({
            status: 'active',
            deleted: false
        }).sort({position :'desc'})
        
        const newProducts=products.map(item =>{
            item.newPrice=(item.price*(100-item.discountPercentage)/100).toFixed(0)
            return item
        })

        res.render('client/pages/products/index',{
            titlePage: 'Danh sách sản phẩm',
            products: newProducts
        })
    }

    //[GET]/products/:slug
    async detail(req,res){
        try {
            const find={
                deleted: false,
                slug: { $regex: new RegExp(req.params.slug, 'i') },
                status: "active"
            }
            
            const product = await Product.findOne(find)

            res.render('client/pages/products/detail',{
                titlePage: product.title,
                product: product
            })

        } catch (error) {
            res.redirect(`/products`)
        }


        
    }
}

module.exports=new webController