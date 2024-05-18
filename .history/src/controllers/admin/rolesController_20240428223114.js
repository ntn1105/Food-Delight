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

    async edit(req,res){
        const find={
            deleted:false,
            _id:req.params.id
        }

        const data= await Roles.findOne(find)

        res.render("admin/pages/roles/edit",{
            titlePage: "Sửa nhóm quyền",
            data: data
        })
    }
}

module.exports= new index