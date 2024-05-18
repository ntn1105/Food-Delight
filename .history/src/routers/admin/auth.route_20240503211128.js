const express = require('express')
const router = express.Router()
const rolesController=require('../../controllers/admin/rolesController')

router.get('/login', rolesController.home)



module.exports=router