const Product=require('../../models/Product')
const {mutipleMongooseToObject} = require('../../config/until')

class webController {
    async index(req,res){
        const products = await Product.find({})
        console.log(products)
    }
}

module.exports=new webController