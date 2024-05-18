const express = require('express')
const router = express.Router()
const productCategoryController=require('../../controllers/admin/productCategoryController')


router.get('/', productCategoryController.index)


module.exports=router