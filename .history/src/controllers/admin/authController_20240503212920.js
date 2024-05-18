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
    }
}

module.exports = new index