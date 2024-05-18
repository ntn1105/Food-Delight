const express = require('express')
const router = express.Router()
const rolesController=require('../../controllers/admin/rolesController')

router.get('/', rolesController.home)
router.get('/create',rolesController.create)

module.exports=router