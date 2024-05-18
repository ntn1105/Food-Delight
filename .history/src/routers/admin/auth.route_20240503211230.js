const express = require('express')
const router = express.Router()
const authController=require('../../controllers/admin/authController')

router.get('/login', authController.home)



module.exports=router