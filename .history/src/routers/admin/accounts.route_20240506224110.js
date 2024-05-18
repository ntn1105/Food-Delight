const express = require('express')
const router = express.Router()
const accountsController=require('../../controllers/admin/accountsController')
const multer  = require('multer')
const storageMulter =require('../../helper/storageMulter')
const upload = multer({ storage: storageMulter() })


router.get('/', accountsController.home)
router.get('/create', accountsController.create)
router.post('/create',upload.single('thumbnail'), accountsController.createPost)
router.get('/edit/:id', accountsController.edit)
router.patch('/edit/:id',upload.single('thumbnail'), accountsController.editPatch)
router.patch('/change-status/:status/:id', accountsController.changeStatus)



module.exports=router