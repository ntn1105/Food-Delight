const Product=require('../models/Product')

class webController {
    home(req,res){
        res.render('index',{ titlePage : 'hello',message :'12345'})
    };
    test(req,res){
        Product.find({})
            .then(product => res.render('product',{
                product : product
            }))
    }
}

module.exports=new webController