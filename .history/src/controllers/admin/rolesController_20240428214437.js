const Roles=require("../../models/roles.module")

class index {
    home(req,res){
        res.render("admin/pages/roles/index",{
            titlePage: "Nhóm quyền"
        })
    }
}

module.exports= new index