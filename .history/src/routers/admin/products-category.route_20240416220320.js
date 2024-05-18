const express = require('express')
const router = express.Router()
const productController=require('../../controllers/admin/productController')
const validate=require('../../validates/admin/validateProduct')


router.get('/', productController.index)


module.exports=router