const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('sample')
})

router.get('/home',(req,res)=>{
    res.send('home')
})


module.exports=router