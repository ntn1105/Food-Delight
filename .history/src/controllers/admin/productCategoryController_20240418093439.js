const Product = require('../../models/Product')
const filterStatusHelper = require('../../helper/filterStatus')
const searchHelper = require('../../helper/search')
const paginationHelper = require('../../helper/pagination')
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

}

module.exports = new index