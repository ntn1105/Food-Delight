const express = require('express')
const router = express.Router()
const productController=require('../../controllers/admin/productController')

router.get('/', productController.index)
router.get('/change-status/:status/:id', productController.index)

module.exports=router