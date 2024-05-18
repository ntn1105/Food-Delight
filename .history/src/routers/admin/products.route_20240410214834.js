const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const productController=require('../../controllers/admin/productController')

router.get('/', productController.index)

router.patch('/change-status/:status/:id', productController.changeStatus)

router.patch('/change-multi', productController.changeMulti)

router.delete('/delete/:id', productController.deteleItem)

router.get('/trash', productController.trash)

router.patch('/restore/:id', productController.restoreItem)

router.delete('/trash/deleted/:id', productController.deteleTrashItem)

router.get('/create', productController.create)

router.post('/create', productController.createPost)

router.patch('/trash/change-multi', productController.restoreMulti)






module.exports=router