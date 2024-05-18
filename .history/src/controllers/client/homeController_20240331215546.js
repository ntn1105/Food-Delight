class homeController {
    home(req,res){
        res.render('client/pages/home/index')
    };
    test(req,res){
        res.render('client/pages/products/index')
    }
}

module.exports=new homeController