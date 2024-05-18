const ProductCategory = require('../../models/Products-category')
const searchHelper = require('../../helper/search')
const createTreeHelper = require('../../helper/createTree')
// const paginationHelper = require('../../helper/pagination')
const systemConfig = require("../../config/system")
const productController = require('./productController')

class index {
    //[GET]/admin/products-category
    async index(req, res) {

        let find = {
            deleted: false
        }

        const records= await ProductCategory.find(find)
        const newRecords= createTreeHelper.tree(records)

        res.render('admin/pages/products-category/index',{
            pageTitile:"Danh mục sản phẩm",
            records: newRecords,
        })
    }
    //[GET]/admin/products-category/create
    async create(req,res){
        let find={
            deleted:false
        }

        const records = await ProductCategory.find(find)
        const newRecords= createTreeHelper.tree(records)

        res.render('admin/pages/products-category/create',{
            pageTitile:"Tạo mới danh mục",
            records:newRecords
        })
    }

    //[POST]/admin/products-category/create
    async createPost(req,res){
        if (req.file) {
            req.body.thumbnail = `/uploads/${req.file.filename}`
        }

        if (req.body.position == "") {
            const count = await ProductCategory.countDocuments()
            req.body.position = count + 1
        } else {
            req.body.position = parseInt(req.body.position)
        }

        const productCategory = new ProductCategory(req.body)
        await productCategory.save()

        res.redirect(`${systemConfig.prefixAdmin}/products-category`)
        
    }

    //[GET]/admin/products-category/edit/:id
    async edit(req,res){
        const find ={
            deleted:false,
            _id :req.params.id
        }
        
        const data = await ProductCategory.findOne(find)
        const records = await ProductCategory.find({deleted:false})
        const newRecords= createTreeHelper.tree(records)

        res.render("admin/pages/products-category/edit",{
            pageTitile : "Chỉnh sửa danh mục",
            data : data,
            records:newRecords
        })
    }

    //[PATCH]/admin/products-category/edit/:id
    async eidtRecord(req,res){
        const find ={
            _id:req.params.id
        }

        if (req.file) {
            req.body.thumbnail = `/uploads/${req.file.filename}`
        }

        if(req.body.parent_id){
            req.body.parent_id=req.body.parent_id
        }else{
            req.body.parent_id=""
        }

        req.body.position = parseInt(req.body.position)

        await ProductCategory.updateOne(find,req.body)

        res.redirect('admin/pages/products-category/index')
    }

    //[GET]/admin/products-category/trash
    async trash(req,res){
        const find={
            deleted:true
        }
        
        const products= await ProductCategory.find(find)

        res.render("admin/pages/products-category/trash",{
            products:products
        })
    }

    //[DELETE]/admin/products-category/deleted/:id
    async deteleItem(req,res){
        const find={
            _id: req.params.id
        }

        await ProductCategory.updateOne(find,{deleted : true})

        res.redirect("back")
    }

    //[DELETE]/admin/products-category/trash/deleted/:id
    async deteleItemTrash(req,res){
        const find={
            _id: req.params.id
        }

        await ProductCategory.deleteOne(find)

        res.redirect("back")
    }

    //[PATCH]/admin/products-category/change-status/:status/:id
    async changeStatus(req,res){
        const status = req.params.status
        const id = req.params.id

        await ProductCategory.updateOne({ _id: id }, { status: status })
        req.flash('success', 'Cập nhập trạng thái thành công')
        res.redirect('back')
    }
}

module.exports = new index