const ProductCategory = require('../../models/Products-category')
const searchHelper = require('../../helper/search')
const createTreeHelper = require('../../helper/createTree')
// const paginationHelper = require('../../helper/pagination')
const systemConfig = require("../../config/system")

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
        res.render("admin/pages/products-category/edit")
    }


}

module.exports = new index