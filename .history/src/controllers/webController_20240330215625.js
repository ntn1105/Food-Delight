class webController {
    home(req,res){
        res.render('index',{ title : 'hello',message :'12345'})
    };
    test(req,res){
        res.render('product',{
            title : 'danh sach Product',

        })
    }
}

module.exports=new webController