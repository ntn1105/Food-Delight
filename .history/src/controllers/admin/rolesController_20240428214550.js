const Roles=require("../../models/roles.module")

class index {
    async home(req,res){
        const find={
            deleted:false
        }

        const records = await Roles.find(find)

        res.render("admin/pages/roles/index",{
            titlePage: "Nhóm quyền",
            records : records
        })
    }
}

module.exports= new index