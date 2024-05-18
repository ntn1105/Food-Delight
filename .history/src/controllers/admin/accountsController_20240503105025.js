const Accounts = require('../../models/account')
const systemConfig = require("../../config/system")

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
        res.render("admin/pages/accounts/create",{
            titlePage: 'Tạo mới tài khoản'
        })
    }

    async createPost(req,res){
        if (req.file) {
            req.body.avatar = `/uploads/${req.file.filename}`
        }

        const record = new Accounts(req.body)
        await record.save()

        res.render("admin/pages/accounts/create",{
        })
    }
}


module.exports = new index