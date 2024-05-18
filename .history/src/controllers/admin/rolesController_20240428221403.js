const Roles=require("../../models/roles.module")
const systemConfig = require("../../config/system")

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

    async create(req,res){
        res.render("admin/pages/roles/create",{
            titlePage: "Tạo nhóm quyền",
        })
    }

    async createPost(req,res){
        
        const record = new Roles(req.body)
        await record.save()

        res.redirect(`${systemConfig.prefixAdmin}/roles`)
    }
}

module.exports= new index