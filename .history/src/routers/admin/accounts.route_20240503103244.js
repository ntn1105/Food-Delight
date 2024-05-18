const express = require('express')
const router = express.Router()
const accountsController=require('../../controllers/admin/accountsController')

router.get('/', accountsController.home)
router.get('/create', accountsController.create)


module.exports=router