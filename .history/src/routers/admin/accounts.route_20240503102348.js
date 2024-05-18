const express = require('express')
const router = express.Router()
const accountsController=require('../../controllers/admin/accountsController')

router.get('/', accountsController.home)


module.exports=router