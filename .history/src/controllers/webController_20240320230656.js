class webController {
    home(req,res){
        res.render('sample')
    };
    test(req,res){
        res.send('test')
    }
}

module.exports=new webController