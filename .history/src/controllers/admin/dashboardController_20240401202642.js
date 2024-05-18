class dashboardController {
    home(req,res){
        res.render('client/pages/home/index',{
            titlePage: 'Trang chủ'
        })
    };
}
module.exports=new dashboardController