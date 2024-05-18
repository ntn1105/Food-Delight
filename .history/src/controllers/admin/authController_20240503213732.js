const md5 = require('md5');
const Accounts = require('../../models/account')

class index {
    //[GET]/auth/login
    async login(req,res){
        res.render("admin/pages/auth/login",{
            titlePage: 'Trang đăng nhập'
        })
    }

    //[POST]/auth/login
    async loginPost(req,res){
        const email=req.body.email
        const password=req.body.password

        const user = await Accounts.findOne({
            email : email,
            deleted : false
        })

        if(!user){
            req.flash("error","Email không tồn tại")
            res.redirect("back")
            return
        }   

        if(md5(password) != user.password){
            req.flash("error","Sai mật khẩu")
            res.redirect("back")
            return
        }

        res.send("OK")
    }
}

module.exports = new index