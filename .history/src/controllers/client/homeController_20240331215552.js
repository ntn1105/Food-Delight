class homeController {
    home(req,res){
        res.render('client/pages/home/index')
    };
}

module.exports=new homeController