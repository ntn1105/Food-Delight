class index {
    //[GET]/auth/login
    async login(req,res){
        res.render("admin/pages/auth/login",{
            titlePage: 'Trang đăng nhập'
        })
    }

    //[POST]/auth/login
    async loginPost(req,res){
        res.render("admin/pages/auth/login",{
            titlePage: 'Trang đăng nhập'
        })
    }
}

module.exports = new index