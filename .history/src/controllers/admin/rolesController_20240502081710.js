const Roles=require("../../models/roles.module")
const systemConfig = require("../../config/system")
const { json } = require("express")

class index {
    //[GET]/admin/roles
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

    //[GET]/admin/roles/create
    async create(req,res){
        res.render("admin/pages/roles/create",{
            titlePage: "Tạo nhóm quyền",
        })
    }

    //[POST]/admin/roles/create
    async createPost(req,res){
        
        const record = new Roles(req.body)
        await record.save()

        res.redirect(`${systemConfig.prefixAdmin}/roles`)
    }

    //[GET]/admin/roles/edit/:id
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

    //[PATCH]/admin/roles/edit/:id
    async editRoles(req,res){
       
        await Roles.updateOne({_id:req.params.id},req.body)

        res.redirect("back")
    }

    //[GET]/admin/roles/permissions
    async permission(req,res){
        let find ={
            deleted : false
        }

        const records = await Roles.find(find)

        res.render("admin/pages/roles/permissions",{
            titlePage: "Phân quyền",
            records : records
        })
    }

    //[PATCH]/admin/roles/permissions
    async permissionPatch(req,res){
        const permission = JSON.parse(req.body.permissions)
        console.log(permission)
        for (const item of permission) {
            await Roles.updateOne({_id: item.id},{permission:item.permission})
        }

        res.redirect("back")
    }

}

module.exports= new index