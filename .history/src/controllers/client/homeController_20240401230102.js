class homeController {
    //[GET] /
    home(req,res){
        res.render('client/pages/home/index',{
            titlePage: 'Trang chủ'
        })
    };
}

module.exports=new homeController