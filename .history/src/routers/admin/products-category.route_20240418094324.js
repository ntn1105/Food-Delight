const express = require('express')
const router = express.Router()
const productCategoryController=require('../../controllers/admin/productCategoryController')


router.get('/', productCategoryController.index)
router.get('/create', productCategoryController.create)
router.post('/create', productCategoryController.create)


module.exports=router