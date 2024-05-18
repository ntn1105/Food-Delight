const Accounts = require('../../models/account')

class index {
    home(req,res){
        res.render("admin/pages/accounts/index")
    }
}


module.exports = new index