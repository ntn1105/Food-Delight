const express = require('express')
const router = express.Router()
const homeController=require('../../controllers/client/homeController')

router.get('/', webController.home)

module.exports=router