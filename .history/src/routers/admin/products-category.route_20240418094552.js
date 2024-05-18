const express = require('express')
const router = express.Router()
const productCategoryController=require('../../controllers/admin/productCategoryController')
const multer  = require('multer')
const storageMulter =require('../../helper/storageMulter')
const upload = multer({ storage: storageMulter() })
const validate=require('../../validates/admin/validateProduct')

router.get('/', productCategoryController.index)
router.get('/create', productCategoryController.create)
router.post('/create',upload.single('thumbnail'),validate.creatPost, productCategoryController.createPost)


module.exports=router