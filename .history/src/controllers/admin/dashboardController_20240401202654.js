class dashboardController {
    home(req,res){
        res.render('client/pages/dashboard/index',{
            titlePage: 'Trang chủ'
        })
    };
}
module.exports=new dashboardController