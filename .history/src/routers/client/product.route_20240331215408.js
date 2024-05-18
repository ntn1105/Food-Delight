const express = require('express')
const router = express.Router()
const webController=require('../../controllers/client/webController')


router.get('/',webController.test)


module.exports=router