const Product=require('../../models/Product')
const ProductCategory= require("../../models/Products-category")

class homeController {
    //[GET] /
    async home(req,res){

        const foods = await Product.find({deleted : false})
        
        for (const food of foods) {
            console.log()
            const foodCategory = await ProductCategory.findOne({_id:food.products_category_id})
        }



        res.render('client/pages/home/index',{
            titlePage: 'Trang chủ',
            foods : foods
        })
    };
}

module.exports=new homeController