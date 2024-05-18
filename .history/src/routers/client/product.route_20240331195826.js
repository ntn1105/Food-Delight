const express = require('express')
const router = express.Router()
const webController=require('../../controllers/webController')


router.get('/product',webController.test)


module.exports=router