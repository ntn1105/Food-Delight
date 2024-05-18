class webController {
    home(req,res){
        res.render('index',{ title : 'hello',message :'12345'})
    };
    test(req,res){
        res.send('test')
    }
}

module.exports=new webController