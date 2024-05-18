class dashboardController {
    home(req,res){
        res.render('client/pages/dashboard/index',{
            titlePage: 'Trang tổng quan'
        })
    };
}
module.exports=new dashboardController