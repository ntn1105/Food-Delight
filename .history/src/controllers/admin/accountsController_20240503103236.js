const Accounts = require('../../models/account')

class index {

    async home(req,res){
        let find = {
            deleted :false
        }

        const records = await Accounts.find(find)

        res.render("admin/pages/accounts/index",{
            titlePage: 'Danh sách tài khoản',
            records : records
        })
    }

    async create(req,res){
        res.render("admin/pages/accounts/index",{
            titlePage: 'Tạo mới tài khoản'
        })
    }
}


module.exports = new index