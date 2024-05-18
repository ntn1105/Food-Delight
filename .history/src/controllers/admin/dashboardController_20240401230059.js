class dashboardController {
    //[GET]/admin/dashboard
    home(req,res){
        res.render('admin/pages/dashboard/index',{
            titlePage: 'Trang tổng quan'
        })
    };
}
module.exports=new dashboardController