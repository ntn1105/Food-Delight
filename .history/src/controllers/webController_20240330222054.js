const Produc=require('../models/Product')

class webController {
    home(req,res){
        res.render('index',{ titlePage : 'hello',message :'12345'})
    };
    test(req,res){
        res.render('product',{
            titlePage : 'danh sach Product',
            
        })
    }
}

module.exports=new webController