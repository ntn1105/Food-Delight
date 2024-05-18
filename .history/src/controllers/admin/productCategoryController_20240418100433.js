const ProductCategory = require('../../models/Products-category')
// const filterStatusHelper = require('../../helper/filterStatus')
// const searchHelper = require('../../helper/search')
// const paginationHelper = require('../../helper/pagination')
const systemConfig = require("../../config/system")

class index {
    //[GET]/admin/products-category
    async index(req, res) {
        res.render('admin/pages/products-category/index',{
            pageTitile:"Danh mục sản phẩm"
        })
    }
    //[GET]/admin/products-category/create
    async create(req,res){
        res.render('admin/pages/products-category/create',{
            pageTitile:"Tạo mới danh mục"
        })
    }

    //[POST]/admin/products-category/create
    async createPost(req,res){
        // req.body.price = parseInt(req.body.price)
        // req.body.discountPercentage = parseInt(req.body.discountPercentage)
        // req.body.stock = parseInt(req.body.stock)
        // if (req.file) {
        //     req.body.thumbnail = `/uploads/${req.file.filename}`
        // }

        // if (req.body.position == "") {
        //     const countProduct = await Product.countDocuments()
        //     req.body.position = countProduct + 1
        // } else {
        //     req.body.position = parseInt(req.body.position)
        // }

        // const product = new Product(req.body)
        // await product.save()

        // res.redirect(`${systemConfig.prefixAdmin}/products`)
        console.log(req.body)
        res.send("ok")
    }

}

module.exports = new index