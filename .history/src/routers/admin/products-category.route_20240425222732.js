const express = require('express')
const router = express.Router()
const productCategoryController=require('../../controllers/admin/productCategoryController')
const multer  = require('multer')
const storageMulter =require('../../helper/storageMulter')
const upload = multer({ storage: storageMulter() })
const validate=require('../../validates/admin/products-category.validate')

router.get('/', productCategoryController.index)
router.get('/create', productCategoryController.create)
router.post('/create',upload.single('thumbnail'),validate.creatPost, productCategoryController.createPost)
router.get('/edit/:id', productCategoryController.edit)
router.patch('/edit/:id',upload.single('thumbnail'),validate.creatPost, productCategoryController.eidtRecord)
router.get('/trash', productCategoryController.trash)
router.delete('/deleted/:id', productCategoryController.deteleItem)



module.exports=router