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
}


module.exports = new index