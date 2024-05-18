const ProductCategory = require('../../models/Products-category')
const filterStatusHelper = require('../../helper/filterStatus')
const searchHelper = require('../../helper/search')
// const paginationHelper = require('../../helper/pagination')
const systemConfig = require("../../config/system")

class index {
    //[GET]/admin/products-category
    async index(req, res) {

        let find = {
            deleted: false
        }
        const filterStatus = filterStatusHelper(req.query)

        if(req.query.status){
            find.status=req.query.status
        }

        // Find Search //
        const objectSearch = searchHelper(req.query)
        if (objectSearch.regax) {
            find.title = objectSearch.regax
        }

        // Sort//
        let sort={}
        if(req.query.sortKey && req.query.sortValue){
            sort[req.query.sortKey] =req.query.sortValue
        }else{
            sort.position='desc'
        }

        const records = await ProductCategory.find(find).sort(sort)

        res.render('admin/pages/products-category/index',{
            pageTitile:"Danh mục sản phẩm",
            records: records,
            filterStatus: filterStatus,
        })
    }
    //[GET]/admin/products-category/create
    async create(req,res){
        let find={
            deleted:false
        }

        function createTree(arr,parentId=""){
            const tree=[]
            arr.forEach(item => {
                if(item.parent_id===parentId){
                    const newItem=item
                    const children =createTree(arr,item.id)
                    if(children.length>0){
                        newItem.children=children
                    }
                    tree.push(newItem)
                }
            });
            return tree
        }

        const records = await ProductCategory.find(find)

        const newRecords= createTree(records)
        
        res.render('admin/pages/products-category/create',{
            pageTitile:"Tạo mới danh mục",
            records:records
        })
    }

    //[POST]/admin/products-category/create
    async createPost(req,res){
        // req.body.price = parseInt(req.body.price)
        // req.body.discountPercentage = parseInt(req.body.discountPercentage)
        // req.body.stock = parseInt(req.body.stock)
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

}

module.exports = new index