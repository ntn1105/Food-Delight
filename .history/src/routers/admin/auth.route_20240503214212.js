const express = require('express')
const router = express.Router()
const authController=require('../../controllers/admin/authController')

router.get('/login', authController.login)
router.post('/login', authController.loginPost)



module.exports=router