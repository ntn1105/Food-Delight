const express = require('express')
const router = express.Router()
const productController=require('../../controllers/admin/producCategorytController')


router.get('/', productController.index)


module.exports=router