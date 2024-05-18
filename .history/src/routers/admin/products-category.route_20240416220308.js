const express = require('express')
const multer  = require('multer')
const storageMulter =require('../../helper/storageMulter')
const upload = multer()
const router = express.Router()
const productController=require('../../controllers/admin/productController')
const validate=require('../../validates/admin/validateProduct')


router.get('/', productController.index)


module.exports=router