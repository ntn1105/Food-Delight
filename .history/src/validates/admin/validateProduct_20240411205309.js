module.exports.creatPost=(req,res) =>{
    if(!req.body.title){
        req.flash('error', `Vui lòng nhập tiêu đề`)
        res.redirect('back')
        return
        }
}