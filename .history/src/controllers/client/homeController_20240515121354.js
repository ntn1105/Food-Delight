const Product=require('../../models/Product')

class homeController {
    //[GET] /
    async home(req,res){

        const foods = await Product.find({deleted : false})

        res.render('client/pages/home/index',{
            titlePage: 'Trang chủ',
            foods : foods
        })
    };
}

module.exports=new homeController